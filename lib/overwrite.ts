import { snowflake } from "./common-types";

export default interface Overwrite {
    id: snowflake;
    type: 0 | 1;
    allow: string;
    deny: string;
}