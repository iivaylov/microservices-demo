import { NestFactory } from '@nestjs/core';
import { Demo2Module } from './demo-2.module';

async function bootstrap() {
  const app = await NestFactory.create(Demo2Module);
  await app.listen(3000);
}
bootstrap();
