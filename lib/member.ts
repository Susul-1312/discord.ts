import { snowflake, timestamp } from "./common-types";
import User from "./user";

export default interface Member {
    user?: User;
    nick?: string;
    avatar?: string;
    roles?: snowflake[];
    joined_at: timestamp;
    premium_since?: timestamp;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: timestamp;
}