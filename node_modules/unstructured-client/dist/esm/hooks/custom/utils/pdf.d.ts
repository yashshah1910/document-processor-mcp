import { PDFDocument } from "pdf-lib";
interface PdfSplit {
    content: Blob;
    startPage: number;
    endPage: number;
}
/**
 * Converts range of pages (including start and end page values) of a PDF document
 * to a Blob object.
 * @param pdf - The PDF document.
 * @param startPage - Number of the first page of split.
 * @param endPage - Number of the last page of split.
 * @returns A Promise that resolves to a Blob object representing the converted pages.
 */
export declare function pdfPagesToBlob(pdf: PDFDocument, startPage: number, endPage: number): Promise<Blob>;
/**
 * Calculates the optimal split size for processing pages with a specified concurrency level.
 *
 * @param pagesCount - The total number of pages to process.
 * @param concurrencyLevel - The level of concurrency to be used.
 * @returns A promise that resolves to the optimal number of pages per split,
 * ensuring it does not exceed the maximum or fall below the minimum threshold.
 */
export declare function getOptimalSplitSize(pagesCount: number, concurrencyLevel: number): Promise<number>;
/**
 * Retrieves an array of splits, with the start and end page numbers, from a PDF file.
 * Distribution of pages per split is made in as much uniform manner as possible.
 *
 * @param pdf - The PDF file to extract pages from.
 * @param splitSize - The number of pages per split.
 * @param [pageRangeStart=1] - The starting page of the range to be split (1-based index). Defaults to the first page of the document.
 * @param [pageRangeEnd=pdf.getPageCount()] - The ending page of the range to be split (1-based index). Defaults to the last page of the document.
 * @returns A promise that resolves to an array of objects containing Blob files and
 * start and end page numbers from the original document.
 */
export declare function splitPdf(pdf: PDFDocument, splitSize: number, pageRangeStart?: number, pageRangeEnd?: number): Promise<PdfSplit[]>;
/**
 * Checks if the given file is a PDF by loading the file as a PDF using the `PDFDocument.load` method.
 * @param file - The file to check.
 * @returns A promise that resolves to three values, first is a boolean representing
 * whether there was an error during PDF load, second is a PDFDocument object or null
 * (depending if there was an error), and the third is the number of pages in the PDF.
 * The number of pages is 0 if there was an error while loading the file.
 */
export declare function loadPdf(file: File | null): Promise<[boolean, PDFDocument | null, number]>;
export {};
//# sourceMappingURL=pdf.d.ts.map