import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

// Configuration schema
const configSchema = z.object({
  UNSTRUCTURED_API_KEY: z.string(),
  UNSTRUCTURED_API_URL: z.string().url(),
});

// Supported file extensions
export const SUPPORTED_EXTENSIONS = new Set([
  '.pdf',
  '.docx',
  '.txt',
  '.md',
  '.csv',
  '.pptx',
  '.xlsx',
  '.html',
  '.json',
]);

// Default processing options
export const DEFAULT_PROCESSING_OPTIONS = {
  strategy: 'hi_res' as const,
  splitPdfPage: true,
  splitPdfAllowFailed: true,
  splitPdfConcurrencyLevel: 15,
  languages: ['eng'],
};

// Parse and validate environment variables
const config = configSchema.parse({
  UNSTRUCTURED_API_KEY: process.env.UNSTRUCTURED_API_KEY,
  UNSTRUCTURED_API_URL: process.env.UNSTRUCTURED_API_URL || 'https://api.unstructuredapp.io/general/v0/general',
});

export default config;
