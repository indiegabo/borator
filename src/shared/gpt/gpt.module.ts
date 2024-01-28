import { Module } from "@nestjs/common";
import { BotLoggerModule } from "../logger/bot-logger-module";
import { HttpModule } from "@nestjs/axios";
import { GPTService } from "./gpt.service";

@Module({
    imports: [
        HttpModule,
        BotLoggerModule,
    ],
    providers: [GPTService],
    exports: [GPTService],
})
export class GPTModule { }