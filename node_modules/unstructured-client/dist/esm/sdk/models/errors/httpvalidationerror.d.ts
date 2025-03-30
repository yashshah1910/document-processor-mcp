import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as shared from "../shared/index.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Detail = Array<shared.ValidationError> | string;
export type HTTPValidationErrorData = {
    detail?: Array<shared.ValidationError> | string | undefined;
};
export declare class HTTPValidationError extends Error {
    detail?: Array<shared.ValidationError> | string | undefined;
    /** The original data that was passed to this error instance. */
    data$: HTTPValidationErrorData;
    constructor(err: HTTPValidationErrorData);
}
/** @internal */
export declare const Detail$inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown>;
/** @internal */
export type Detail$Outbound = Array<shared.ValidationError$Outbound> | string;
/** @internal */
export declare const Detail$outboundSchema: z.ZodType<Detail$Outbound, z.ZodTypeDef, Detail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Detail$ {
    /** @deprecated use `Detail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown>;
    /** @deprecated use `Detail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Detail$Outbound, z.ZodTypeDef, Detail>;
    /** @deprecated use `Detail$Outbound` instead. */
    type Outbound = Detail$Outbound;
}
export declare function detailToJSON(detail: Detail): string;
export declare function detailFromJSON(jsonString: string): SafeParseResult<Detail, SDKValidationError>;
/** @internal */
export declare const HTTPValidationError$inboundSchema: z.ZodType<HTTPValidationError, z.ZodTypeDef, unknown>;
/** @internal */
export type HTTPValidationError$Outbound = {
    detail?: Array<shared.ValidationError$Outbound> | string | undefined;
};
/** @internal */
export declare const HTTPValidationError$outboundSchema: z.ZodType<HTTPValidationError$Outbound, z.ZodTypeDef, HTTPValidationError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HTTPValidationError$ {
    /** @deprecated use `HTTPValidationError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HTTPValidationError, z.ZodTypeDef, unknown>;
    /** @deprecated use `HTTPValidationError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HTTPValidationError$Outbound, z.ZodTypeDef, HTTPValidationError>;
    /** @deprecated use `HTTPValidationError$Outbound` instead. */
    type Outbound = HTTPValidationError$Outbound;
}
//# sourceMappingURL=httpvalidationerror.d.ts.map