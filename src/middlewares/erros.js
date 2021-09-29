const checkErrorType = (err) => {
  switch (true) {
    case err.isJoi:
      return { code: 422, message: err.details[0].message };

    case err.emailExists:
      return { code: 409, message: 'Email already registered' };

    case err.incorrectUserInfo:
      return { code: 401, message: 'Incorrect username or password' };

    case err.userNotFound:
      return { code: 400, message: 'User not found' };

    case err.accessDenied:
      return { code: 403, message: 'Access denied' };

    case err.fieldsRequired:
      return { code: 401, message: 'All fields must be filled' };

    default:
      return { code: 500, message: 'Internal server error' };
  }
};

export default (err, _req, res, next) => {
  try {
    const { code, message } = checkErrorType(err);
    res.status(code).json({ error: message });
    next();
  } catch (error) {
    res.status(401).json(error);
  }
};
