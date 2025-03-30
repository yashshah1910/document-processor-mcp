"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpsCheckHook = void 0;
const common_js_1 = require("./common.js");
/**
 * Represents a hook that performs base host HTTPS check during SDK initialization.
 */
class HttpsCheckHook {
    /**
     * Performs the base host HTTPS check during SDK initialization. If hostname
     * matches "*.unstructuredapp.io" and the protocol is not "https:", the protocol
     * is updated to "https:".
     * @param opts - The SDK initialization options.
     * @returns The updated SDK initialization options.
     */
    sdkInit(opts) {
        const { baseURL, client } = opts;
        if (baseURL) {
            // -- pathname should always be empty
            baseURL.pathname = "/";
            if (common_js_1.BASE_HOSTNAME_REGEX.test(baseURL.hostname) && baseURL.protocol !== common_js_1.BASE_PROTOCOL) {
                console.warn("Base URL protocol is not HTTPS. Updating to HTTPS.");
                const newBaseURL = baseURL.href.replace(baseURL.protocol, common_js_1.BASE_PROTOCOL);
                return { baseURL: new URL(newBaseURL), client: client };
            }
        }
        return { baseURL: baseURL, client: client };
    }
}
exports.HttpsCheckHook = HttpsCheckHook;
//# sourceMappingURL=HttpsCheckHook.js.map