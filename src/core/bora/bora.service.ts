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

    @OnEvent('ChatMessage.marvin_theparanoidbot')
    handleMessage(chatMessage: { channel: string, username: string, message: string }) {
        this.botLogger.log(`Mensagem do Marvin: ${chatMessage.message}`);
        const loweredMessage = chatMessage.message.toLowerCase();

        this.botLogger.log('Mensagem do marvin reconhecida: ' + loweredMessage);

        if (loweredMessage.includes('fila') && loweredMessage.includes('aberta')) {
            this.tmiService.sendMessage(chatMessage.channel, '!bora');
            this.tmiService.sendMessage(chatMessage.channel, `Olá gente. Eu sou o BORATOR, o novo bot do IndieGabo.`);
            this.tmiService.sendMessage(chatMessage.channel, `Ele tava cansado de nunca conseguir ser o primeiro a borar e delegou a tarefa a mim. Aeeee Poxaaaa! Agora fooooi...!`);
        }
    }
}