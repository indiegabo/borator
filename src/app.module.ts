import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    SharedModule,
    CoreModule,
    EventEmitterModule.forRoot({
      maxListeners: 200,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  providers: [AppService],
})
export class AppModule { }
