import { Badge } from "./Badge";
import { Emote } from "./Emote";
import { StreamerBotTwitchUserRole } from "./streamer-bot-twitch-user";

export type Cheer = {
    message: CheerMessage;
}

export type CheerMessage = {
    internal: boolean;
    msgId: string;
    userId: number;
    username: string;
    role: StreamerBotTwitchUserRole;
    subscriber: boolean;
    displayName: string;
    color: string;
    channel: string; // The channel the message was sent in
    message: string; // The message associated with the cheer event
    isHighlighted: boolean;
    isMe: boolean;
    isCustomReward: boolean;
    isAnonymous: boolean;
    isReply: boolean;
    bits: number;
    firstMessage: boolean;
    hasBits: boolean;
    emotes: Emote[];
    cheerEmotes: CheerEmote[];
    badges: Badge[];
    monthsSubscribed: number;
    isTest: boolean;
}

export type CheerEmote = {
    bits: number;
    color: string;
    type: string;
    name: string;
    startIndex: number;
    endIndex: number;
    imageUrl: string;
};