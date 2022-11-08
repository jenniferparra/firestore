import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync } from "../../redux/actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, displayName } = useSelector(state => state.user)

  useEffect(() => {
     if (error) {
        alert('Usuario o contraseña incorrecta')
      }
  }, [error])
  
  useEffect(() => {
    if (displayName) {
      navigate('home')
    }
}, [displayName])
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
      console.log(data);
      dispatch(loginAsync(data.email, data.password));
    }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="form">
        <label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>El campo del email es requerido</span>}
        </label>
        <label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password1 && <span>{errors.password1.message}</span>}
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to="/">Registrarse</Link>
    </div>
  );
};

export default Login;
