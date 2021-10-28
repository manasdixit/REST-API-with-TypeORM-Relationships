import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
   @Get()
   saySomething(): string {
      return 'Nothing here, go back !!';
   }
}
