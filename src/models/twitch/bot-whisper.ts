import { StreamerBotTwitchUser } from "./streamer-bot-twitch-user"

export type BotWhisperMessage = {
    message: BotWhisper;
}

export type BotWhisper = {
    msgId: number;
    userId: string;
    username: string;
    displayName: string;
    message: string;
}