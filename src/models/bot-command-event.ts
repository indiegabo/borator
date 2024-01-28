import { StreamerBotCommand } from "./streamer-bot-command";
import { StreamerBotTwitchUser } from "./twitch/streamer-bot-twitch-user";

export type BotCommandEvent = {
    name: string,
    user: StreamerBotTwitchUser,
    botCommand: StreamerBotCommand,
    message?: string,
    args?: string[],
    priority?: number,
}