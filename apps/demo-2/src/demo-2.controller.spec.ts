import { Test, TestingModule } from '@nestjs/testing';
import { Demo2Controller } from './demo-2.controller';
import { Demo2Service } from './demo-2.service';

describe('Demo2Controller', () => {
  let demo2Controller: Demo2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Demo2Controller],
      providers: [Demo2Service],
    }).compile();

    demo2Controller = app.get<Demo2Controller>(Demo2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(demo2Controller.getHello()).toBe('Hello World!');
    });
  });
});
