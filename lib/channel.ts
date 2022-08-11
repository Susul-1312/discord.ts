import { snowflake, timestamp, bitfield } from "./common-types";
import Overwrite from "./overwrite";
import User from "./user";
import ThreadMetadata from "./threadmetadata";
import ThreadMember from "./threadmember";

export default interface Channel {
    id: snowflake;
    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    guild_id?: snowflake;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: snowflake;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string;
    owner_id?: snowflake;
    application_id?: snowflake;
    parent_id?: snowflake;
    last_pin_timestamp?: timestamp;
    rtc_region?: string;
    video_quality_mode?: 1 | 2;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember;
    default_auto_archive_duration?: 60 | 1440 | 4320 | 10080;
    permissions?: string;
    flags?: bitfield;
    total_message_sent?: number;
}