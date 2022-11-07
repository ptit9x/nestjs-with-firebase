import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { MessagingPayload } from 'firebase-admin/lib/messaging/messaging-api';
import { FIREBASE_ADMIN_CONFIG } from './firebase.const';

@Injectable()
export class FirebaseAdminService {
  constructor() {
    if (FIREBASE_ADMIN_CONFIG?.private_key) {
      FIREBASE_ADMIN_CONFIG.private_key =
        FIREBASE_ADMIN_CONFIG.private_key.replace(/\\n/g, '\n');
      admin.initializeApp({
        credential: admin.credential.cert(FIREBASE_ADMIN_CONFIG),
      });
    }
  }

  createUser(email: string, password: string): Promise<admin.auth.UserRecord> {
    return admin.auth().createUser({ email, password });
  }

  getUserByEmail(email: string): Promise<admin.auth.UserRecord> {
    return admin.auth().getUserByEmail(email);
  }

  emailIsExist(email: string): Promise<admin.auth.UserRecord> {
    return admin.auth().getUserByEmail(email);
  }

  getAllUser(limit: number): Promise<admin.auth.ListUsersResult> {
    return admin.auth().listUsers(limit);
  }

  deleteUser(uid: string): Promise<void> {
    return admin.auth().deleteUser(uid);
  }

  verifyToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(idToken);
  }

  // Revoke all refresh tokens for a specified user for whatever reason.
  revokeRefreshTokens(uid: string) {
    return admin.auth().revokeRefreshTokens(uid);
  }

  async getDocument(
    document: string,
    id: number | string,
  ): Promise<admin.firestore.DocumentData> {
    const db = admin.firestore();
    const docRef = db.collection(document).doc(String(id));
    return docRef.get().then((doc) => (!doc.exists ? null : doc.data()));
  }

  async saveDocument(
    document: string,
    id: number | string,
    data,
  ): Promise<boolean> {
    const db = admin.firestore();
    const docRef = db.collection(document).doc(String(id));

    await docRef.set(data);

    return true;
  }

  /*
   * Firebase uses Firebase Cloud Messaging API (V1) so you need to use this api instead of legacy one
   * https://stackoverflow.com/questions/57767439/an-error-occurred-when-trying-to-authenticate-to-the-fcm-servers
   */
  send(firebaseToken: string, payload: MessagingPayload): Promise<string> {
    const data = {
      message: {
        token: firebaseToken,
        notification: payload?.notification,
        data: payload?.data,
      },
    };
    return admin.messaging().send(data.message);
  }

  /*
   * Let's enable - Cloud Messaging
   */
  sendToDevice(
    firebaseToken: string | string[],
    payload: MessagingPayload,
  ): Promise<admin.messaging.MessagingDevicesResponse> {
    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 24,
    };
    return admin.messaging().sendToDevice(firebaseToken, payload, options);
  }

  async sendToDeviceGroup(
    notificationKey: string,
    payload: admin.messaging.MessagingPayload,
  ): Promise<admin.messaging.MessagingDeviceGroupResponse> {
    try {
      const options = {
        priority: 'high',
        timeToLive: 60 * 60 * 24,
      };
      return admin
        .messaging()
        .sendToDeviceGroup(notificationKey, payload, options);
    } catch (error) {
      throw error;
    }
  }

  async sendToTopic(
    topic: string,
    payload: admin.messaging.MessagingPayload,
  ): Promise<admin.messaging.MessagingTopicResponse> {
    try {
      const options = {
        priority: 'high',
        timeToLive: 60 * 60 * 24,
      };
      return admin.messaging().sendToTopic(topic, payload, options);
    } catch (error) {
      throw error;
    }
  }
}
