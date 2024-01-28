import { Module } from "@nestjs/common";
import { TwitchService } from "./twitch.service";
import { BotLoggerModule } from "src/shared/logger/bot-logger-module";

@Module({
    imports: [
        BotLoggerModule,
    ],
    providers: [TwitchService],
    exports: [TwitchService],
})
export class TwitchModule { }