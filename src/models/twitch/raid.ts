import { StreamerBotTwitchUserRole } from "./streamer-bot-twitch-user";

export type Raid = {
    viewers: number;
    from_broadcaster_user_id: string;
    from_broadcaster_user_login: string;
    from_broadcaster_user_name: string;
    to_broadcaster_user_id: string;
    to_broadcaster_user_login: string;
    to_broadcaster_user_name: string;
    role: StreamerBotTwitchUserRole;
};