import { snowflake, bitfield } from "./common-types";

export default interface User {
    id: snowflake;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string;
    accent_color?: number;
    locale?: "da" | "de" | "en-GB" | "en-US" | "es-ES" | "fr" | "it" | "lt" | "hu" | "nl" | "no" | "pl" | "pt-BR" | "pt-PT" | "ro" | "fi" | "sv-SE" | "vi" | "tr" | "cs" | "el" | "bg" | "ru" | "uk" | "hi" | "th" | "zh-CN" | "ja" | "zh-TW" | "ko";
    verified?: boolean;
    email?: string;
    flags?: bitfield;
    premium_type?: 0 | 1 | 2;
    public_flags?: bitfield;
}