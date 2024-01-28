import { Module } from "@nestjs/common";
import { BotLoggerModule } from "src/shared/logger/bot-logger-module";
import { TMIService } from "./tmi.service";
import { TMIController } from "./tmi.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    controllers: [TMIController],
    imports: [
        HttpModule,
        BotLoggerModule,
    ],
    providers: [TMIService],
    exports: [TMIService],
})
export class TMIModule { }