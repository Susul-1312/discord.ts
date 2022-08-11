import { timestamp } from "./common-types";

export default interface ThreadMetadata {
    archived: boolean;
    auto_archive_duration: 60 | 1440 | 4320 | 10080;
    archive_timestamp: timestamp;
    locked: boolean;
    invitable?: boolean;
    created_timestamp?: timestamp;
}