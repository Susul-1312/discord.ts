import { snowflake } from "./common-types";
import Member from "./member";
import User from "./user";

export default interface MessageInteraction {
    id: snowflake;
    type: 1 | 2 | 3 | 4 | 5;
    name: string;
    user: User;
    member?: Member;
}