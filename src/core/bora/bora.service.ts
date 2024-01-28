import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { BotLogger } from "src/shared/logger/bot-logger.service";
import { TMIService } from "src/shared/tmi/tmi.service";

@Injectable()
export class BoraService {
    constructor(
        private botLogger: BotLogger,
        private tmiService: TMIService,
    ) {
        this.botLogger.setContext('BoraService');
    }

    @OnEvent('ChatMessage')
    private handleMessage(chatMessage: { username: string, message: string }) {
        if (chatMessage.username !== 'marvin_theparanoidbot') return;

        const loweredMessage = chatMessage.message.toLowerCase();

        this.botLogger.log('Mensagem do marvin reconhecida: ' + loweredMessage);

        if (loweredMessage.includes('fila') && loweredMessage.includes('aberta')) {
            this.tmiService.sendMessage('!bora');
            this.tmiService.sendMessage(`Olá gente. Eu sou o BORATOR. O IndieGabo estava cansado de nunca conseguir ser o primeiro a borar e delegou a tarefa a mim. Beijos!`);
        }
    }
}