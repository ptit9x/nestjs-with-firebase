import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FirebaseAdminService } from 'src/share/services/firebase/firebase-admin.service';
import { RegisterResponse } from './auth.interface';

import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private firebaseService: FirebaseAdminService) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = loginDto;

    return {
      accessToken: '',
      accessTokenExpire: '',
      isFirstTimeLogin: true,
    };
  }

  async register({ email, password }): Promise<RegisterResponse> {
    try {
      const created = await this.firebaseService.createUser(email, password);
      return {
        uid: created?.uid,
        email: created?.email,
        emailVerified: created?.emailVerified,
        disabled: created?.disabled,
      };
    } catch (error) {
      if (error?.errorInfo) {
        throw new BadRequestException(error?.errorInfo);
      }
      throw new InternalServerErrorException(
        error?.message || 'Internal Server Error',
      );
    }
  }
}
