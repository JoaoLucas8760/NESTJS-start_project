import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { IUserRepository } from './repositories/user.repository';
import { UserPrismaRepository } from './repositories/user.prisma.repository';
import { ProfileUseCase } from './useCases/profile-user.usecase';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    ProfileUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
