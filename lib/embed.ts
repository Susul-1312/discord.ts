import { timestamp } from "./common-types";
import EmbedField from "./embedfield";

export default interface Embed {
    title?: string;
    type?: "rich" | "video" | "image" | "gifv" | "article" | "link";
    description?: string;
    url?: string;
    timestamp?: timestamp;
    color?: number;
    footer?: {
        text: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    image?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    thumbnail?: {
        url?: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    video?: {
        url?: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    provider?: {
        name?: string;
        url?: string;
    };
    author?: {
        name?: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    fields?: EmbedField[];
}