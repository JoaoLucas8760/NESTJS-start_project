import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserDTO } from '../dtos/CreateUser.dto';
import { UserCreatedDTO } from '../dtos/UserCreated.dto';
import { UsernameAndEmail } from '../dtos/UsernameAndEmail.dto';
import { IUserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });
  }

  async save(data: CreateUserDTO): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findById(id: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  }
}
