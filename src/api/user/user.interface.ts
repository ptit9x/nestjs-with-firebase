declare class UserMetadata {
  readonly creationTime: string;
  readonly lastSignInTime: string;
  readonly lastRefreshTime?: string | null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  toJSON(): object;
}
declare class UserInfo {
  readonly uid: string;
  readonly displayName: string;
  readonly email: string;
  readonly photoURL: string;
  readonly providerId: string;
  readonly phoneNumber: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  toJSON(): object;
}

export interface UserResponse {
  uid: string;
  email?: string;
  emailVerified: boolean;
  disabled: boolean;
  metadata: UserMetadata;
  providerData: UserInfo[];
  tokensValidAfterTime?: string;
}
