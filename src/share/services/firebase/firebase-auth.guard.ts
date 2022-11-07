import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly firebaseService: FirebaseAdminService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (!authorization) {
      throw new BadRequestException('Authorization header is requied');
    }

    try {
      const [, idToken] = authorization.split('Bearer ');
      const userFirebase = await this.firebaseService.verifyToken(idToken);
      request.user = {
        uid: userFirebase.uid,
        email: userFirebase.email,
      };

      return true;
    } catch (error) {
      if (error.code === 'auth/id-token-expired') {
        throw new UnauthorizedException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}
