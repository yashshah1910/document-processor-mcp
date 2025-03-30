/**
 * Removes the "content-length" header from the passed response headers.
 *
 * @param response - The response object.
 * @returns The modified headers object.
 */
export declare function prepareResponseHeaders(response: Response): Headers;
/**
 * Prepares the response body by extracting and flattening the JSON elements from
 * an array of responses.
 *
 * @param responses - An array of Response objects.
 * @returns A Promise that resolves to a string representation of the flattened
 * JSON elements.
 */
export declare function prepareResponseBody(responses: Response[]): Promise<string>;
/**
 * Removes the "content-type" header from the given request headers.
 *
 * @param request - The request object containing the headers.
 * @returns The modified headers object.
 */
export declare function prepareRequestHeaders(request: Request): Headers;
/**
 * Prepares the request body for splitting a PDF.
 *
 * @param formData - The original form data.
 * @param fileContent - The content of the pages to be split.
 * @param fileName - The name of the file.
 * @param startingPageNumber - Real first page number of the split.
 * @returns A Promise that resolves to a FormData object representing
 * the prepared request body.
 */
export declare function prepareRequestBody(formData: FormData, fileContent: Blob, fileName: string, startingPageNumber: number): Promise<FormData>;
//# sourceMappingURL=request.d.ts.map