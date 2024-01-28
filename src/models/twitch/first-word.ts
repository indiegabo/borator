import { TwitchChatMessage } from "./chat-message"
import { StreamerBotTwitchUser } from "./streamer-bot-twitch-user"

export type FirstWord = {
    message: TwitchChatMessage,
    action: boolean,
    user: StreamerBotTwitchUser
}