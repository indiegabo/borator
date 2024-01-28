import { Module } from "@nestjs/common";
import { BotLoggerModule } from "./logger/bot-logger-module";
import { TwitchModule } from "./twitch/twitch.module";
import { TMIModule } from "./tmi/tmi.module";
import { GPTModule } from "./gpt/gpt.module";

@Module({
    imports: [
        GPTModule,
        BotLoggerModule,
        TwitchModule,
        TMIModule,
    ],
    exports: [
        GPTModule,
        BotLoggerModule,
        TwitchModule,
        TMIModule,
    ],
})
export class SharedModule { }