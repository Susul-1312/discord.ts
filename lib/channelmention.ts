import { snowflake } from "./common-types";

export default interface ChannelMention {
    id: snowflake;
    guild_id: snowflake;
    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    name: string;
}