import { SDKInitHook, SDKInitOptions } from "../types.js";
/**
 * Represents a hook that performs base host HTTPS check during SDK initialization.
 */
export declare class HttpsCheckHook implements SDKInitHook {
    /**
     * Performs the base host HTTPS check during SDK initialization. If hostname
     * matches "*.unstructuredapp.io" and the protocol is not "https:", the protocol
     * is updated to "https:".
     * @param opts - The SDK initialization options.
     * @returns The updated SDK initialization options.
     */
    sdkInit(opts: SDKInitOptions): SDKInitOptions;
}
//# sourceMappingURL=HttpsCheckHook.d.ts.map