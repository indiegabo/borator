import { Controller, Get, Param, Query, Req } from "@nestjs/common";
import { TMIService } from "./tmi.service";
import { Request } from 'express';

@Controller('tmi')
export class TMIController {
    constructor(
        private readonly tmiService: TMIService
    ) {
    }

    @Get('auth-callback')
    async authCallback(@Query() query): Promise<void> {
        if (!query.access_token) {
            console.log('no params');
            return;
        }

        this.tmiService.tryWriteToken(query.access_token);
        this.tmiService.attempt();
    }

    @Get('send')
    async sendMessage(@Query() query): Promise<void> {
        if (!query.message || query.message === '') return;

        this.tmiService.sendMessage('indiegabo', query.message);
    }

    @Get('test')
    async test(@Query() query, @Param() params): Promise<void> {
        console.log(query, params);
    }

    //<marvin_theparanoidbot>
}
