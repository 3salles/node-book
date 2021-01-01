'config';

describe('AuthMiddleware', () => {
  it('Should verify a JWT token and call the next middleware', done => {
    const jwtToken = jwt.sign({ data: 'fake' }, config.get('auth.key'));
    const reqFake = {
      headers: {
        'x-access-token': jwtToken
      }
    };
    const resFake = {};
    authMiddleware(reqFake, resFake, done);
  });
  it('Should call the next middleware passing an error when the token validation fails', done => {
    const reqFake = {
      headers: {
        'x-access-token': 'invalid token'
      }
    };
    const resFake = {};
    authMiddleware(reqFake, resFake, err => {
      expect(err.message).to.eq('jwt malformed');
      done();
    });
  });

  it('Should call next middleware if theres no token', done => {
    const reqFake = {
        headers: {}
    };
    const resFake = {};
    authMiddleware(reqFake, resFake, done);
  });

});
