import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/share/services/firebase/firebase-admin.service';
import { UserResponse } from './user.interface';

@Injectable()
export class UserService {
  constructor(private firebaseService: FirebaseAdminService) {}

  getUser(email: string): Promise<UserResponse> {
    return this.firebaseService.getUserByEmail(email);
  }
}
