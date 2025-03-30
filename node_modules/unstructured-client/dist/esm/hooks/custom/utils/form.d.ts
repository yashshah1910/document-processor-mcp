/**
 * Retrieves and validates a page range from FormData, ensuring that the start and end values are defined and within bounds.
 *
 * @param formData - The FormData object containing the page range parameter.
 * @param maxPages - The maximum number of pages in the document.
 * @returns {[number, number]} - A tuple containing the validated start and end page numbers.
 *
 * @throws Will throw an error if the page range is invalid or out of bounds.
 */
export declare function getSplitPdfPageRange(formData: FormData, maxPages: number): [number, number];
/**
 * Gets the number of maximum requests that can be made when splitting PDF.
 * - The number of maximum requests is determined by the value of the request parameter
 * `split_pdf_thread`.
 * - If the parameter is not set or has an invalid value, the default number of
 * parallel requests (5) is used.
 * - If the number of maximum requests is greater than the maximum allowed (15), it is
 * clipped to the maximum value.
 * - If the number of maximum requests is less than 1, the default number of parallel
 * requests (5) is used.
 *
 * @returns The number of maximum requests to use when calling the API to split a PDF.
 */
export declare function getSplitPdfConcurrencyLevel(formData: FormData): number;
/**
 * Gets the allowFailed parameter which decides whether the partial requests can fail or not
 * when using splitPdfPage parameter.
 * - The number of maximum requests is determined by the value of the request parameter
 * `split_pdf_thread`.
 * - If the parameter is not set or has an invalid value, the default number of
 * parallel requests (5) is used.
 * - If the number of maximum requests is greater than the maximum allowed (15), it is
 * clipped to the maximum value.
 * - If the number of maximum requests is less than 1, the default number of parallel
 * requests (5) is used.
 *
 * @returns The number of maximum requests to use when calling the API to split a PDF.
 */
export declare function getSplitPdfAllowFailed(formData: FormData): boolean;
/**
 * Retrieves the starting page number from the provided form data.
 * If the starting page number is not a valid integer or less than 1,
 * it will use the default value `1`.
 *
 * @param formData - Request form data.
 * @returns The starting page number.
 */
export declare function getStartingPageNumber(formData: FormData): number;
//# sourceMappingURL=form.d.ts.map