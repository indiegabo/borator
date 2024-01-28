import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { BotLogger } from "src/shared/logger/bot-logger.service";
import { Client } from "tmi.js";
import { TOKEN_FILE_PATH as TOKEN_FILE_NAME } from "./tmi.config";
import * as fs from 'fs';
import { exec } from 'child_process';
import { HttpService } from "@nestjs/axios";

@Injectable()
export class TMIService {

    private client: Client;

    constructor(
        private botLogger: BotLogger,
        private eventEmitter: EventEmitter2,
        private httpService: HttpService
    ) {
        this.botLogger.setContext('TMIService');
        this.attempt();
    }

    public tryWriteToken(token: string) {
        try {
            fs.writeFileSync(TOKEN_FILE_NAME, token);
        }
        catch (e) {
            this.botLogger.error(`Failed to write token`, e);
        }
    }

    public sendMessage(message: string) {
        this.client?.say('bunkerdomarco', message);
    }

    private handleMessage(channel: string, tags: any, message: string) {
        this.eventEmitter.emit(`ChatMessage.${tags.username}`, {
            username: tags.username,
            message: message
        });
    }

    public async attempt() {
        const token = fs.readFileSync(TOKEN_FILE_NAME, 'utf8');

        if (!token || token === '') {
            this.openAuth();
            return;
        }

        const success = await this.connect(token);

        if (!success) {
            this.openAuth();
        }
    }

    private async connect(token: string): Promise<boolean> {
        try {
            this.client = new Client({
                options: { debug: true },
                identity: {
                    username: 'indiegabo',
                    password: `oauth:${token}`
                },
                channels: ['bunkerdomarco']
            });

            this.client.connect();
            return true;

        } catch (e) {
            console.log(e);
            this.client?.disconnect();
            return false;
        }
    }

    private openAuth() {
        const clienID = process.env.TWITCH_CLIENT_ID;
        const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clienID}&redirect_uri=http://localhost:3200/tmi/auth-callback&scope=chat:read+chat:edit`
        const command = `start "" "${url}"`;
        exec(command);
    }
}