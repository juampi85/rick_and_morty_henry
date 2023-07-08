import React, { useState } from 'react';
import form_image from '../../images/form_image.jpg';
import style from './Form.module.css';
import { validateForm } from '../validation';



const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  
  function handleChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validateForm({ ...userData, [property]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('login exitoso');
    login(userData);
  };

  return (
    <div className={style.formContainer}>
      <form>
        <img
          src={form_image}
          alt="a Rick & Morty form"
          className={style.formImg}
        />
        <div className={style.formDiv}>
          <label className={style.formTitles} htmlFor="email">
            EMAIL
          </label>
          <input
            autoFocus
            type="email"
            name="email"
            id=""
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
            className={errors.email ? style.error : style.success}
          />
          <span className={style.errorMsge}>{errors.email}</span>
          <label className={style.formTitles} htmlFor="password">
            PASSWORD
          </label>
          <input
              type="password"
            name="password"
            id=""
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? style.error : style.success}
          />
          <span className={style.errorMsge}>{errors.password}</span>
        </div>
        <button className={style.formBtn} type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
