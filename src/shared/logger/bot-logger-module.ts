import { Module } from '@nestjs/common';
import { BotLogger } from './bot-logger.service';
;

@Module({
    imports: [],
    providers: [BotLogger],
    exports: [BotLogger],
})
export class BotLoggerModule { }