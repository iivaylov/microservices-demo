import { Controller, Get } from '@nestjs/common';
import { Demo1Service } from './demo-1.service';

@Controller()
export class Demo1Controller {
  constructor(private readonly demo1Service: Demo1Service) {}

  @Get()
  getHello(): string {
    return this.demo1Service.getHello();
  }
}
