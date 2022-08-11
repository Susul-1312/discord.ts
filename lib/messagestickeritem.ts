import { snowflake } from "./common-types";

export default interface MessageStickerItem {
    id: snowflake;
    name: string;
    format_type: 1 | 2 | 3;
}