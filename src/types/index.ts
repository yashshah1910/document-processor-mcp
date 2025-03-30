export interface ProcessedElement {
  text: string;
  type: string;
  metadata?: Record<string, any>;
}

export interface DocumentSection {
  titles: string[];
  headers: string[];
  paragraphs: string[];
  lists: string[];
  tables: string[];
  other: string[];
}

export type ProcessingStrategy = 'hi_res' | 'fast';

export interface ProcessingOptions {
  strategy?: ProcessingStrategy;
  splitPdfPage?: boolean;
  splitPdfAllowFailed?: boolean;
  splitPdfConcurrencyLevel?: number;
  languages?: string[];
}
