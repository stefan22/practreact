export default {
  loginMocked:
    ({username}) => new Promise(resolve =>
      setTimeout(() => resolve({
        success: true,
        reponse: {
          data: {
            username,
            sessionToken: 'yourtoken',
          }
        },
      }),1)
    ),
};
