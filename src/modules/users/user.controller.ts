import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { CreateUserValidationPipe } from './pipe/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { ProfileUseCase } from './useCases/profile-user.usecase';

@Controller('/users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly profileUseCase: ProfileUseCase,
  ) {}

  @Post('')
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.profileUseCase.execute(req.user.sub);
  }
}
