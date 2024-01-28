import { StreamerBotTwitchUser } from "./streamer-bot-twitch-user";

export type PresentViewers = {
    isLive: boolean,
    isTest: boolean,
    users: Map<string, StreamerBotTwitchUser>,
}