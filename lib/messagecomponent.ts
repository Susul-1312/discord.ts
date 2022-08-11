import Emoji from "./emoji";

export default interface MessageComponent {
    components: Component[];
}

export type Component = ActionRow | Button | SelectMenu | TextInput

export interface ActionRow {
    type: 1;
    components: Component[];
}

export interface Button {
    type: 2;
    style: 1 | 2 | 3 | 4 | 5;
    label?: string;
    emoji?: Emoji;
    custom_id?: string;
    url?: string;
    disabled?: boolean;
}

export interface SelectMenu {
    type: 3;
    custom_id: string;
    options: {
        label: string;
        value: string;
        description?: string;
        emoji?: Emoji;
        default?: boolean;
    }[];
}

export interface TextInput {
    type: 4;
    custom_id: string;
    style: 1 | 2;
    label: string;
    // Integer between 1 and 4000 (constrain TODO)
    min_length?: number;
    // Integer between 1 and 4000 (constrain TODO)
    max_length?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
}