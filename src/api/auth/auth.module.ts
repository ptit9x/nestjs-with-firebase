import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/api/user/user.module';
import { AuthController } from './auth.controller';
import { FirebaseModule } from 'src/share/services/firebase/firebase.module';

@Module({
  imports: [UserModule, FirebaseModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
