const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is Required';
  } 
  if (!values.password) {
    errors.password = 'Password is Required';
  }

  return errors;
};

export default validate;
