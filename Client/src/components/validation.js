const regexEmail = /^\w{1,34}@[\w.-]+\.\w{3}$/;
const regexPassword = /^(?=.*\d).{6,10}$/;

export const validateForm = ({ email, password}) => {
  const errors = {};
  
  if (!email) errors.email = 'Email vacío';
  else {
    if (regexEmail.test(email)) {
      errors.email = '';
    } else
      errors.email = 'Ingrese un email válido, por favor.';
  }   

  if(!password) errors.password = 'Ingrese el password.';
  else {
    if (regexPassword.test(password)) {
      errors.password = '';
    } else
      errors.password = 'Ingrese un password válido, please.';
  }

  return errors;
};