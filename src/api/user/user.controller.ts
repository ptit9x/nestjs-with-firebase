import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/share/decorator/get-user.decorator';
import { FirebaseAuthGuard } from 'src/share/services/firebase/firebase-auth.guard';
import { USER_SWAGGER_RESPONSE } from './user.constant';
import { UserResponse } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
@UseGuards(FirebaseAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_USER_SUCCESS)
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  public getInternalUser(
    @GetUser('email') email: string,
  ): Promise<UserResponse> {
    return this.userService.getUser(email);
  }
}
