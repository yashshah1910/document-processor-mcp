import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { processDocument } from './services/documentProcessor.js';
/**
 * Initialize MCP Server for document processing
 */
const server = new McpServer({
    name: 'document-processor',
    version: '1.0.0',
    capabilities: { resources: {}, tools: {} },
});
// JSON Logger
function log(level, message, extra = {}) {
    console.error(JSON.stringify({ level, message, ...extra }));
}
// Document Processing Tool
server.tool('process-document', 'Process a document and return structured text', {
    filepath: z.string().describe('Path to the document to process'),
    options: z
        .object({
        strategy: z.enum(['hi_res', 'fast']).optional(),
        splitPdfPage: z.boolean().optional(),
        splitPdfAllowFailed: z.boolean().optional(),
        splitPdfConcurrencyLevel: z.number().optional(),
        languages: z.array(z.string()).optional(),
    })
        .optional()
        .describe('Optional processing configuration'),
}, async ({ filepath, options }) => {
    const content = await processDocument(filepath, options);
    return { content: [{ type: 'text', text: content }] };
});
/**
 * Main function to start the MCP server
 */
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    log('info', 'Document Processing MCP Server running...');
}
main().catch((error) => {
    log('fatal', 'Fatal error', { error: error.message });
    process.exit(1);
});
