import { Badge } from "./Badge"
import { Emote } from "./Emote"
import { StreamerBotTwitchUserRole } from "./streamer-bot-twitch-user"

export type ChatMessage = {
    message: TwitchChatMessage
}

export type TwitchChatMessage = {
    internal: boolean,
    msgId: string,
    userId: string,
    username: string,
    role: StreamerBotTwitchUserRole,
    subscriber: boolean,
    displayName: string,
    color: string,
    channel: string,
    message: string,
    isHighlighted: boolean,
    isMe: boolean,
    isCustomReward: boolean,
    isAnonymous: boolean,
    isReply: boolean,
    bits: number,
    firstMessage: boolean,
    hasBits: boolean,
    emotes: Emote[],
    cheerEmotes: Emote[],
    badges: Badge[],
    monthsSubscribed: number,
    isTest: boolean,
}
