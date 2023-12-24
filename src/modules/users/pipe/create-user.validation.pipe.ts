import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUser.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform({ email, name, password, username }: CreateUserDTO) {
    // if (!name || !email || !password || !username) {
    //   throw new HttpException(
    //     '[email, name, password, username] is required',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }

    return { email, name, password, username };
  }
}
