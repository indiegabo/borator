import { StreamerBotCommand } from "./streamer-bot-command";
import { StreamerBotTwitchUser } from "./twitch/streamer-bot-twitch-user";

export type ChatCommand = {
    command: string,
    message?: string,
    args?: string[],
    user: StreamerBotTwitchUser,
    botCommand?: StreamerBotCommand,
}