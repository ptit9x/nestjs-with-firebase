import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const USER_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        id: '1',
        created_at: '2022-08-23T02:21:16.992Z',
        updated_at: '2022-08-23T02:21:16.992Z',
        deleted_at: null,
        name: 'Administrator',
        email: 'bach.nguyen@vmodev.com',
        type: 1,
        is_administrator: true,
        status: 1,
        created_by: null,
        country: null,
        city: null,
        postal_code: null,
        phone: null,
        expired_date: null,
      },
    },
    'Create success',
  ),
  GET_USER_SUCCESS: swaggerSchemaExample(
    {
      uid: '0ITuSl1lrLa9BmxYA2La6vbcWtE2',
      email: 'ngochuynhdev@gmail.com',
      emailVerified: false,
      disabled: false,
      metadata: {
        creationTime: 'Sat, 05 Sep 2020 17:15:56 GMT',
        lastSignInTime: 'Mon, 07 Nov 2022 09:33:35 GMT',
        lastRefreshTime: 'Mon, 07 Nov 2022 09:33:35 GMT',
      },
      providerData: [
        {
          uid: 'ngochuynhdev@gmail.com',
          email: 'ngochuynhdev@gmail.com',
          providerId: 'password',
        },
      ],
      tokensValidAfterTime: 'Sat, 05 Sep 2020 17:15:56 GMT',
    },
    'Create success',
  ),

  UPDATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Update success',
  ),
  CREATE_MULTIPLE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        totalSuccess: 0,
        totalError: 1,
      },
    },
    'Create success',
  ),
};
