import { Controller, Get } from '@nestjs/common';
import { Demo2Service } from './demo-2.service';

@Controller()
export class Demo2Controller {
  constructor(private readonly demo2Service: Demo2Service) {}

  @Get()
  getHello(): string {
    return this.demo2Service.getHello();
  }
}
