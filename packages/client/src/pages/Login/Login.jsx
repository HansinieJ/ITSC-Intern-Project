import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { LoginService } from '../../services/LoginService';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await LoginService.submit(data);
    console.log(`Login service`, data);
    reset();
    toast(response.message);

  };

  // };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Supervisor Login</h1>
        <div>
          <h2>Username</h2>
          <input {...register(`username`, { required: `Username is required` })}
            placeholder="username" type="text" id="usernameID" />
          <p>{errors.username?.message}</p>
          <h2>Password</h2>
          <input {...register(`pwd`, { required: `Password is Required ` })}
            placeholder="password" type="password" id="pwdID" />
          <p>{errors.pwd?.message}</p>
          <button type="submit" > Login </button>

        </div>
      </form>
      <ToastContainer />
    </>
  );

};
