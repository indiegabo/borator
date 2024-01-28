import { Injectable } from "@nestjs/common";
import OpenAI from 'openai';
import { BotLogger } from "../logger/bot-logger.service";

@Injectable()
export class GPTService {

    private client: OpenAI;
    constructor(
        private botLogger: BotLogger,
    ) {
        this.botLogger.setContext('GPTService');
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })
    }

    public async respodingTwitchChat(question: string, username: string): Promise<string> {

        try {
            const completion = await this.client.chat.completions.create({
                messages: [
                    { role: 'system', content: 'Você está fingindo ser IndieGabo, um cara despojado, carinhoso e muito gente boa. ' },
                    { role: 'user', content: `${username} disse: "${question}". Formule uma resposta de que tenha entre 30 e 150 caracteres començando com @${username}.` }
                ],
                model: "gpt-4",
            });
            return completion.choices[0].message.content;
        }
        catch (e) {
            return 'Boa, ' + username;
        }
    }
}