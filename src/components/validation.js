export const validateEmail = (userData, setErrors, errors) => {
  if (!userData.email) setErrors({ ...errors, email: 'Email vacío' });
  else {
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
    if (/^\w{1,34}@[\w.-]+\.\w{3}$/.test(userData.email)) {
      setErrors({ ...errors, email: '' });
    } else
      setErrors({ ...errors, email: 'Ingrese un email válido, por favor.' });
  }
};
