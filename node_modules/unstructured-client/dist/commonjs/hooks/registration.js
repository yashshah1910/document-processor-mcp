"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHooks = void 0;
const LoggerHook_js_1 = require("./custom/LoggerHook.js");
const SplitPdfHook_js_1 = require("./custom/SplitPdfHook.js");
const HttpsCheckHook_js_1 = require("./custom/HttpsCheckHook.js");
/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */
function initHooks(hooks) {
    // Add hooks by calling hooks.register{ClientInit/BeforeRequest/AfterSuccess/AfterError}Hook
    // with an instance of a hook that implements that specific Hook interface
    // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
    // Initialize hooks
    const loggerHook = new LoggerHook_js_1.LoggerHook();
    const splitPdfHook = new SplitPdfHook_js_1.SplitPdfHook();
    const httpsCheckHook = new HttpsCheckHook_js_1.HttpsCheckHook();
    // NOTE: logger_hook should stay registered last as logs the status of
    // request and whether it will be retried which can be changed by e.g. split_pdf_hook
    // Register SDK init hooks
    hooks.registerSDKInitHook(httpsCheckHook);
    hooks.registerSDKInitHook(splitPdfHook);
    // Register before request hooks
    hooks.registerBeforeRequestHook(splitPdfHook);
    // Register after success hooks
    hooks.registerAfterSuccessHook(splitPdfHook);
    hooks.registerAfterSuccessHook(loggerHook);
    // Register after error hooks
    hooks.registerAfterErrorHook(splitPdfHook);
    hooks.registerAfterErrorHook(loggerHook);
}
exports.initHooks = initHooks;
//# sourceMappingURL=registration.js.map