import { NestFactory } from '@nestjs/core';
import { Demo1Module } from './demo-1.module';

async function bootstrap() {
  const app = await NestFactory.create(Demo1Module);
  await app.listen(3000);
}
bootstrap();
