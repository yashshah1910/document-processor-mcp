import { PartitionAcceptEnum } from "../funcs/generalPartition.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export { PartitionAcceptEnum } from "../funcs/generalPartition.js";
export declare class General extends ClientSDK {
    /**
     * Summary
     *
     * @remarks
     * Description
     */
    partition(request: operations.PartitionRequest, options?: RequestOptions & {
        acceptHeaderOverride?: PartitionAcceptEnum;
    }): Promise<operations.PartitionResponse>;
}
//# sourceMappingURL=general.d.ts.map