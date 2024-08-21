import { Test, TestingModule } from '@nestjs/testing';
import { Demo1Controller } from './demo-1.controller';
import { Demo1Service } from './demo-1.service';

describe('Demo1Controller', () => {
  let demo1Controller: Demo1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Demo1Controller],
      providers: [Demo1Service],
    }).compile();

    demo1Controller = app.get<Demo1Controller>(Demo1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(demo1Controller.getHello()).toBe('Hello World!');
    });
  });
});
