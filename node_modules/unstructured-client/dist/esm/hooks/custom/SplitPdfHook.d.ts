import { AfterErrorContext, AfterErrorHook, AfterSuccessContext, AfterSuccessHook, type BeforeRequestContext, BeforeRequestHook, SDKInitHook, SDKInitOptions } from "../types.js";
import { HTTPClientExtension } from "./common.js";
/**
 * Represents a hook for splitting and sending PDF files as per page requests.
 */
export declare class SplitPdfHook implements SDKInitHook, BeforeRequestHook, AfterSuccessHook, AfterErrorHook {
    /**
     * The HTTP client used for making requests.
     */
    client: HTTPClientExtension | undefined;
    /**
     * Keeps the strict-mode setting for splitPdfPage feature.
     */
    allowFailed: boolean | undefined;
    /**
     * Maps lists responses to client operation.
     */
    partitionSuccessfulResponses: Record<string, Response[]>;
    /**
     * Maps lists failed responses to client operation.
     */
    partitionFailedResponses: Record<string, Response[]>;
    /**
     * Maps parallel requests to client operation.
     */
    partitionRequests: Record<string, Promise<unknown>>;
    /**
     * Initializes Split PDF Hook.
     * @param opts - The options for SDK initialization.
     * @returns The initialized SDK options.
     */
    sdkInit(opts: SDKInitOptions): SDKInitOptions;
    /**
     * If `splitPdfPage` is set to `true` in the request, the PDF file is split into
     * separate batches. Each batch is sent as a separate request in parallel. The last
     * batch request is returned by this method. It will return the original request
     * when: `splitPdfPage` is set to `false`, the file is not a PDF, or the HTTP
     * has not been initialized.
     *
     * @param hookCtx - The hook context containing information about the operation.
     * @param request - The request object.
     * @returns If `splitPdfPage` is set to `true`, the last batch request; otherwise,
     * the original request.
     */
    beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request>;
    /**
     * Forms the final response object based on the successful and failed responses.
     * @param response - The response object returned from the API request.
     *   Expected to be a successful response.
     * @param successfulResponses - The list of successful responses.
     * @param failedResponses - The list of failed responses.
     * @returns The final response object.
     */
    formFinalResponse(response: Response, successfulResponses: Response[], failedResponses: Response[]): Promise<Response>;
    /**
     * Executes after a successful API request. Awaits all parallel requests and combines
     * the responses into a single response object.
     * @param hookCtx - The context object containing information about the hook execution.
     * @param response - The response object returned from the API request.
     * @returns If requests were run in parallel, a combined response object; otherwise,
     * the original response.
     */
    afterSuccess(hookCtx: AfterSuccessContext, response: Response): Promise<Response>;
    /**
     * Executes after an unsuccessful API request. Awaits all parallel requests, if at least one
     * request was successful, combines the responses into a single response object and doesn't
     * throw an error. It will return an error only if all requests failed, or there was no PDF split.
     * @param hookCtx - The AfterErrorContext object containing information about the hook context.
     * @param response - The Response object representing the response received before the error occurred.
     * @param error - The error object that was thrown.
     * @returns If requests were run in parallel, and at least one was successful, a combined response
     * object; otherwise, the original response and error.
     */
    afterError(hookCtx: AfterErrorContext, response: Response | null, error: unknown): Promise<{
        response: Response | null;
        error: unknown;
    }>;
    /**
     * Clears the parallel requests and response data associated with the given
     * operation ID.
     *
     * @param operationID - The ID of the operation to clear.
     */
    clearOperation(operationID: string): void;
    /**
     * Awaits all parallel requests for a given operation ID and returns the
     * responses.
     * @param operationID - The ID of the operation.
     * @returns A promise that resolves to an array of responses, or undefined
     * if there are no requests for the given operation ID.
     */
    awaitAllRequests(operationID: string): Promise<Map<string, Response[]>>;
}
//# sourceMappingURL=SplitPdfHook.d.ts.map