import { Module } from '@nestjs/common';
import { Demo1Controller } from './demo-1.controller';
import { Demo1Service } from './demo-1.service';

@Module({
  imports: [],
  controllers: [Demo1Controller],
  providers: [Demo1Service],
})
export class Demo1Module {}
