import { snowflake, timestamp } from "./common-types";

export default interface ThreadMember {
    id?: snowflake;
    user_id?: snowflake;
    join_timestamp: timestamp;
    flags: number;
}