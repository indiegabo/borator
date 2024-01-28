import { TwitchUserBasic } from "./twitch-user-basic";

export type StreamerBotTwitchUser = TwitchUserBasic & {
    subscribed: boolean,
    role: StreamerBotTwitchUserRole,
}

export enum StreamerBotTwitchUserRole {
    VIEWER = 1,
    VIP = 2,
    MODERATOR = 3,
    BROADCASTER = 4
}