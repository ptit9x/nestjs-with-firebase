import { config } from 'dotenv';
config();
export const NODE_ENV = process.env.NODE_ENV;

export const JWT_CONFIG = {
  SECRET: process.env.TOKEN_SECRET,
  EXPIRED_IN: process.env.TOKEN_EXPIRED_IN,
  SALT_ROUNDS: 12,
};

export const MYSQL_CONFIG = {
  hostMaster: process.env.MYSQL_MASTER_HOST || '',
  hostSlaves: process.env.MYSQL_SLAVES_HOST || '',
  host: process.env.MYSQL_HOST || '',
  username: process.env.MYSQL_USERNAME || '',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE_NAME || '',
  port: +process.env.MYSQL_PORT || 3306,
};

export const BLO_MYSQL_CONFIG = {
  host: process.env.BLO_MYSQL_HOST || '',
  username: process.env.BLO_MYSQL_USERNAME || '',
  password: process.env.BLO_MYSQL_PASSWORD || '',
  database: process.env.BLO_MYSQL_DATABASE_NAME || '',
  port: +process.env.BLO_MYSQL_PORT || 3306,
};

export const REDIS_CONFIG = {
  uri: process.env.REDIS_URL,
  day: 1, // cache 1 day, fix production can change this value or change key
};

export const DEFAULT_ADMIN_USER = {
  email: process.env.DEFAULT_ADMIN_USER,
  password: process.env.DEFAULT_ADMIN_PASSWORD,
  name: process.env.DEFAULT_ADMIN_NAME || 'Administrator',
};

export const SEND_EMAIL_CONFIG = {
  sesAccessKey: process.env.SES_ACCESS_KEY,
  sesSecretKey: process.env.SES_SECRET_KEY,
  sesSendFrom: process.env.SES_SEND_FROM,
  awsRegion: process.env.SES_REGION,
  welComeMemberSubject: 'Welcome to BlueOnion!',
  forgotPasswordMemberSubject: 'Account verification',
};

export const MEMBER_CONFIG = {
  urlResetPassword: process.env.MEMBER_URL_RESET_PASSWORD,
  urlHubs: process.env.URL_HUBS,
  urlAdminSite: process.env.URL_ADMIN_SITE,
};
