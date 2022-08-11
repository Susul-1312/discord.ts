import Emoji from './emoji';

export default interface Reaction {
    count: number;
    me: boolean;
    emoji: Emoji;
}