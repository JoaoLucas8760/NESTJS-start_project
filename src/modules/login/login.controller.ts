import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO } from './dtos/sign-in.dto';
import { SignUseCase } from './useCases/sign-in.usecase';

@Controller()
export class LoginController {
  constructor(private signUseCase: SignUseCase) {}

  @Post('/signin')
  async singin(@Body() body: SignInDTO) {
    const data = await this.signUseCase.execute(body);
    return data;
  }
}
