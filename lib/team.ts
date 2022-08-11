import { snowflake } from "./common-types";
import User from "./user";

export default interface Team {
    icon?: string;
    id: snowflake;
    members: TeamMember[];
    name: string;
    owner_user_id: snowflake;
}

export interface TeamMember {
    membership_state: 1 | 2;
    permissions: ["*"];
    team_id: snowflake;
    user: User;
}