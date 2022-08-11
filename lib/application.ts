import { bitfield, snowflake } from "./common-types";
import Team from "./team";
import User from "./user";

export default interface Application {
    id: snowflake;
    name: string;
    icon: string;
    description: string;
    rpc_origins?: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    owner?: User;
    verify_key: string;
    team: Team;
    guild_id?: snowflake;
    primary_sku_id?: snowflake;
    slug?: string;
    cover_image?: string;
    flags?: bitfield;
    tags?: string[];
    install_params?: InstallParams;
    custom_install_url?: string;
}

export interface InstallParams {
    scopes: string[];
    permissions: string[];
}