import { Injectable } from '@nestjs/common';
import { TwitchService } from './shared/twitch/twitch.service';
import { BotLogger } from './shared/logger/bot-logger.service';

@Injectable()
export class AppService {

  constructor(
    private botLogger: BotLogger,
    private twitch: TwitchService,
  ) {
    this.botLogger.setContext('AppService');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
