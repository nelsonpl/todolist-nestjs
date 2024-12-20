import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { name: string; version: string } {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealth(): { status: string; db: string } {
    return this.appService.getHealth();
  }
}
