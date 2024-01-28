import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { GPTService } from "src/shared/gpt/gpt.service";
import { BotLogger } from "src/shared/logger/bot-logger.service";
import { TMIService } from "src/shared/tmi/tmi.service";

@Injectable()
export class GaboResponderService {
    constructor(
        private botLogger: BotLogger,
        private gptService: GPTService,
        private tmiService: TMIService,
    ) {
        this.botLogger.setContext('GaboResponderService');
    }

    @OnEvent('ChatMessage')
    handleMessage(chatMessage: { channel: string, username: string, message: string }) {
        const loweredMessage = chatMessage.message.toLocaleLowerCase();
        if (chatMessage.username === 'indiegabo' && !loweredMessage.startsWith('!gpt')) return;

        if (loweredMessage.includes('indiegabo') || loweredMessage.includes('gabo') || loweredMessage.includes('@indiegabo')) {
            this.respond(chatMessage.username, chatMessage.message);
        }
    }

    private async respond(username: string, message: string) {
        const answer = await this.gptService.respodingTwitchChat(message, username);

        this.botLogger.log(`Enviando resposta para o ${username}: ${answer}`);
        this.tmiService.sendMessage('indiegabo', answer);
    }
}