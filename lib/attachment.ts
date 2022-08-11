import { snowflake } from "./common-types";

export default interface Attachment {
    id: snowflake;
    filename: string;
    description?: string;
    content?: string;
    size: number;
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
    ephermal?: boolean;
}