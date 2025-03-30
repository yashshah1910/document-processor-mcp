import { UnstructuredClient } from 'unstructured-client';
import { Strategy } from 'unstructured-client/sdk/models/shared';
import fs from 'fs';
import path from 'path';
import config, { SUPPORTED_EXTENSIONS, DEFAULT_PROCESSING_OPTIONS } from '../config/config.js';
const createLogger = () => (level, message, extra = {}) => {
    console.error(JSON.stringify({ level, message, ...extra }));
};
const createClient = () => new UnstructuredClient({
    serverURL: config.UNSTRUCTURED_API_URL,
    security: { apiKeyAuth: config.UNSTRUCTURED_API_KEY },
});
const formatContent = (elements) => {
    const sections = {
        titles: [],
        headers: [],
        paragraphs: [],
        lists: [],
        tables: [],
        other: [],
    };
    elements.forEach(element => {
        const text = (element.text || '').trim();
        if (!text)
            return;
        switch (element.type) {
            case 'Title':
                sections.titles.push(text);
                break;
            case 'Header':
                sections.headers.push(text);
                break;
            case 'NarrativeText':
            case 'UncategorizedText':
                sections.paragraphs.push(text);
                break;
            case 'ListItem':
                sections.lists.push(`• ${text}`);
                break;
            case 'Table':
                const tableText = element.metadata?.text_as_html || text;
                sections.tables.push(tableText);
                break;
            default:
                sections.other.push(text);
        }
    });
    const docTexts = [];
    if (sections.titles.length > 0)
        docTexts.push('# ' + sections.titles.join('\n# '));
    if (sections.headers.length > 0)
        docTexts.push('\n## ' + sections.headers.join('\n## '));
    if (sections.paragraphs.length > 0)
        docTexts.push('\n' + sections.paragraphs.join('\n\n'));
    if (sections.lists.length > 0)
        docTexts.push('\n' + sections.lists.join('\n'));
    if (sections.tables.length > 0)
        docTexts.push('\n### Tables:\n' + sections.tables.join('\n\n'));
    if (sections.other.length > 0)
        docTexts.push('\n### Additional Content:\n' + sections.other.join('\n'));
    return docTexts.join('\n');
};
const processDocument = async (filepath, options) => {
    const client = createClient();
    const logger = createLogger();
    if (!fs.existsSync(filepath)) {
        logger('error', 'File does not exist', { filepath });
        return '❌ File does not exist.';
    }
    const ext = path.extname(filepath).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.has(ext)) {
        logger('error', 'Unsupported file format', { filepath, extension: ext });
        return `❌ Unsupported file format: ${ext}`;
    }
    try {
        logger('info', 'Processing file', { filepath });
        const fileContent = fs.readFileSync(filepath);
        const fileName = path.basename(filepath);
        const processingOptions = {
            ...DEFAULT_PROCESSING_OPTIONS,
            ...options,
        };
        const strategy = processingOptions.strategy === 'hi_res' ? Strategy.HiRes : Strategy.Fast;
        const res = await client.general.partition({
            partitionParameters: {
                files: {
                    content: fileContent,
                    fileName: fileName,
                },
                strategy: strategy,
                splitPdfPage: processingOptions.splitPdfPage,
                splitPdfAllowFailed: processingOptions.splitPdfAllowFailed,
                splitPdfConcurrencyLevel: processingOptions.splitPdfConcurrencyLevel,
                languages: processingOptions.languages,
            },
        });
        if (!res) {
            logger('error', 'API request failed or returned no content', { filepath });
            return '❌ API Request Failed or returned no content.';
        }
        const formattedContent = formatContent(res);
        logger('info', 'Document processed successfully', { filepath });
        return formattedContent;
    }
    catch (e) {
        const error = e;
        logger('error', 'Error processing file', { filepath, error: error.message });
        return `❌ Error processing document: ${error.message}`;
    }
};
export { processDocument };
