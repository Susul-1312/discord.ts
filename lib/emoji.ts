import { snowflake } from "./common-types";
import User from "./user";

export default interface Reaction {
    id: snowflake;
    name: string | null;
    roles?: snowflake[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}