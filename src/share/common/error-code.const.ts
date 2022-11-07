export const ERROR = {
  COMMON_SYSTEM_ERROR: {
    CODE: 'sys00001',
    MESSAGE:
      'An error has arisen from the system. Please try again later or contact us for a fix.',
  },

  // user
  USER_NOT_FOUND: {
    CODE: 'us00001',
    MESSAGE: 'This email does not exist in our records',
  },
  PASSWORD_INCORRECT: {
    CODE: 'us00002',
    MESSAGE: 'That’s an incorrect password. Please try again.',
  },
  USER_INACTIVE: {
    CODE: 'us00003',
    MESSAGE:
      'This account has been deactivated. Please contact the organization admin to reactivate your account.',
  },
  USER_EXISTED: {
    CODE: 'us00004',
    MESSAGE: 'User existed!',
  },
  USER_WRONG_OLD_PASSWORD: {
    code: 'us00005',
    MESSAGE: 'Password does not match',
  },
  USER_NAME_EXISTED: {
    CODE: 'us00006',
    MESSAGE: 'This username already exists. Please input a new username',
  },
  USER_PHONE_EXISTED: {
    CODE: 'us00007',
    MESSAGE:
      'This phone number already exists. Please input a different phone number',
  },

  //company
  COMPANY_NOT_FOUND: {
    CODE: 'co00001',
    MESSAGE: 'Company not found',
  },
  COMPANY_EXISTED: {
    CODE: 'co00002',
    MESSAGE: 'Company already exist',
  },
  COMPANY_DOMAIN_EXISTED: {
    CODE: 'co00003',
    MESSAGE: '"Company Email Domain” already exist',
  },

  //Role
  ROLE_NOT_FOUND: {
    CODE: 'ro00001',
    MESSAGE: 'Role not found',
  },
  ROLE_EXISTED: {
    CODE: 'ro00002',
    MESSAGE: 'Role existed!',
  },

  //Member token
  MEMBER_TOKEN_NOT_FOUND: {
    CODE: 'mt00001',
    MESSAGE: 'Member token not found',
  },
  MEMBER_TOKEN_EXISTED: {
    CODE: 'mt00002',
    MESSAGE: 'Member token existed!',
  },
  MEMBER_TOKEN_EXPIRED: {
    CODE: 'mt00003',
    MESSAGE: 'Sorry, the link has expired.',
  },
  MEMBER_USERNAME_NOT_FOUND: {
    CODE: 'mt00004',
    MESSAGE: 'This username does not exist in our records',
  },

  MEMBER_USERNAME_EXISTED: {
    CODE: 'mt00005',
    MESSAGE: 'This username already exists. Please input a new username',
  },
  MEMBER_EMAIL_EXISTED: {
    CODE: 'mt00006',
    MESSAGE: 'This email already exists. Please input a new email',
  },
  MEMBER_PHONE_EXISTED: {
    CODE: 'mt00007',
    MESSAGE:
      'This phone number already exists. Please input a different phone number',
  },
  MEMBER_PASSWORD_INCORRECT: {
    CODE: 'us00005',
    MESSAGE: 'That’s an incorrect password. Please try again.',
  },
};
