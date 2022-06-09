import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Faça seu login</h1>
        <form>
          <h2>E-mail</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2>Senha</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            {" "}
            Login{" "}
          </button>
        </form>
        <p>
          Ao continuar, você concorda com as Condições de Uso da Amazon. Por
          favor verifique a Notificação de Privacidade, Notificação de Cookies e
          a Notificação de Anúncios Baseados em Interesse.
        </p>
        <button onClick={register} className="login__registerButton">
          {" "}
          Criar sua conta Amazon{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
