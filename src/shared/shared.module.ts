import { Module } from "@nestjs/common";
import { BotLoggerModule } from "./logger/bot-logger-module";
import { TwitchModule } from "./twitch/twitch.module";
import { TMIModule } from "./tmi/tmi.module";

@Module({
    imports: [
        BotLoggerModule,
        TwitchModule,
        TMIModule,
    ],
    exports: [
        BotLoggerModule,
        TwitchModule,
        TMIModule,
    ],
})
export class SharedModule { }