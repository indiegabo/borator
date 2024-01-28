import { Injectable } from "@nestjs/common";
import TwitchApi from "node-twitch";
import { TWITCH_CONNECTION_CONFIG } from "./twitch.config";
import { BotLogger } from "src/shared/logger/bot-logger.service";
import { User } from "node-twitch/dist/types/objects";

@Injectable()
export class TwitchService {
    private client: TwitchApi;

    constructor(
        private botLogger: BotLogger
    ) {
        this.botLogger.setContext('TwitchService');
        this.client = new TwitchApi(TWITCH_CONNECTION_CONFIG);

        this
    }

    async getUsers(ids: string[]): Promise<User[]> {
        try {
            const response = await this.client.getUsers(ids);
            return response.data;
        } catch (e) {
            this.botLogger.error(`Failed to get users infos`, e);
            return [];
        }
    }

    async getUser(id: string): Promise<User> {
        try {
            const response = await this.client.getUsers(id);
            return response.data[0];
        } catch (e) {
            this.botLogger.error(`Failed to get user info for the user ${id}`, e);
            return null;
        }
    }

    async getUserFromChannel(channel: string): Promise<User> {
        try {
            const response = await this.client.getUsers(channel);
            return response.data[0];
        } catch (e) {
            this.botLogger.error(`Failed to get user info for the channel ${channel}`, e);
            return null;
        }
    }

    async getUsersFromChannels(channels: string[]): Promise<User[]> {
        try {
            const response = await this.client.getUsers(channels);
            return response.data;
        } catch (e) {
            this.botLogger.error(`Failed to get user info for channels`, e);
            return null;
        }
    }
}