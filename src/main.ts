import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const isDev = process.env.NODE_ENV === 'dev';

async function bootstrap() {
  const port = 3200;
  console.log(`Listening on port ${port}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
