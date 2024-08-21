import { Injectable } from '@nestjs/common';

@Injectable()
export class Demo1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
