import { STATUS } from "../root.types";

export interface State {
    occurrence?: string;
    status: STATUS;
    error?: any;
}
