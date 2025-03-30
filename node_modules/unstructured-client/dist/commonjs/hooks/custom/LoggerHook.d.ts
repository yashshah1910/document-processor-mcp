import { AfterErrorContext, AfterErrorHook, AfterSuccessContext, AfterSuccessHook } from "../types.js";
/**
 * Represents a hook that logs status and information that the request will be retried
 * after encountering a 5xx error.
 */
export declare class LoggerHook implements AfterSuccessHook, AfterErrorHook {
    private retriesCounter;
    /**
     * Log retries to give users visibility into requests.
     * @param response - The response object received from the server.
     * @param error - The error object representing the encountered error.
     * @param operationID - The unique identifier for the operation being logged.
     */
    private logRetries;
    /**
     * Handles successful responses, resetting the retry counter for the operation.
     * Logs a success message indicating that the document was successfully partitioned.
     * @param hookCtx - The context object containing information about the request.
     * @param response - The response object received from the server.
     * @returns The response object.
     */
    afterSuccess(hookCtx: AfterSuccessContext, response: Response): Response;
    /**
     * Executes after an error occurs during a request.
     * @param hookCtx - The context object containing information about the request.
     * @param response - The response object received from the server.
     * @param error - The error object representing the encountered error.
     * @returns An object containing the updated response and error.
     */
    afterError(hookCtx: AfterErrorContext, response: Response | null, error: unknown): {
        response: Response | null;
        error: unknown;
    };
}
//# sourceMappingURL=LoggerHook.d.ts.map