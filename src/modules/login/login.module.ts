import { Module } from '@nestjs/common';

import { PrismaService } from 'src/infra/database/prisma.service';
import { LoginController } from './login.controller';
import { SignUseCase } from './useCases/sign-in.usecase';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'start_project',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [LoginController],
  providers: [SignUseCase, PrismaService],
})
export class LoginModule {}
