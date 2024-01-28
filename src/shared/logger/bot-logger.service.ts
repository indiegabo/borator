import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class BotLogger extends ConsoleLogger {
    constructor(
    ) {
        super();
    }
}