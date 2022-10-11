/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
//import SnackBar from "../../components/snackbar/snackbar.component";
import SenhaOnIcon from "../image/senha_on.svg";
import SenhaOffIcon from "../image/senha_off.svg";

import {
  LoginContainer,
  LoginFormContainer,
  LoginFooterContainer,
  LoginFormButtonContainer,
  LoginFormFirstButton,
  LoginFormButton,
  LoginLogo,
  LoginPassIcon,
  LoginErrorMessage,
  SideMenuOpened,
  SideMenuOpenedOptions,
} from "./login.styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CadastroFuncionario from "../cadastroFuncionario/cadastro.funcionario";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [reEmail, setReEmail] = useState("");

  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(0);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [steps, setSteps] = useState(0);

  const handleRegister = () => {
    navigate("/cadastroUsuario");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (email && password) {
        handleProvisorio();
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setButtonLoading(true);
    setShowSnackBar(false);

    const account = {
      userdata: {
        login: email,
        senha: password,
      },
    };
    axios
      .post("http://127.0.0.1:5000/login_Funcionario", account)
      .then(() => {
        console.log("deu certo");
      })
      .catch(() => {
        console.log("deu erro");
      });
  };

  const handleProvisorio = () => {
    setSteps(+1);
  };
  const handleRemoverProvisorio = () => {
    setSteps(-1);
  };

  const handleMessage = (input: string, message: string) => {
    const div: any = document.querySelector(`#${input}`);
    const text: any = div?.querySelector("input");
    const small: any = div?.querySelector("small");

    if (!text.value.includes("@") || !text.value.includes(".com")) {
      text.style.border = " 2px solid #fa6674";
      small.innerText = message;
      small.style.visibility = "visible";
    } else {
      text.style.border = "none";
      small.style.visibility = "hidden";
    }
  };
  return (
    <>
      {steps === 0 && (
        <LoginContainer>
          <LoginFormContainer>
            <>
              <label htmlFor="loginEmail">E-mail</label>
              <div
                id="loginEmail"
                style={{ position: "relative", height: "max-content" }}
              >
                <input
                  id="loginEmail"
                  type="text"
                  value={email}
                  onKeyUp={handleKeyPress}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleMessage("loginEmail", "E-mail inválido")}
                />
                <LoginErrorMessage>Error Message</LoginErrorMessage>
              </div>
              <label htmlFor="">Senha</label>
              <div style={{ position: "relative", height: "max-content" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onKeyUp={handleKeyPress}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%" }}
                />
                {!showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOffIcon}
                    alt="Mostrar senha"
                    style={{ top: "29%" }}
                  />
                )}
                {showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOnIcon}
                    alt="Ocultar senha"
                  />
                )}
              </div>
              {!buttonLoading && (
                <LoginFormFirstButton
                  disabled={
                    email &&
                    email.includes("@") &&
                    email.includes(".com") &&
                    password
                      ? false
                      : true
                  }
                  onClick={handleProvisorio}
                >
                  Entrar
                </LoginFormFirstButton>
              )}
              {buttonLoading && (
                <LoginFormFirstButton disabled>
                  Carregando...
                </LoginFormFirstButton>
              )}
            </>
          </LoginFormContainer>
          <LoginFooterContainer>
            <span>
              Ainda não possui conta? Então clique no botão cadastrar.
            </span>
            <button onClick={handleRegister}>CADASTRAR</button>
          </LoginFooterContainer>
        </LoginContainer>
      )}
      <>
        {email === "admin@admin.com" && (
          <SideMenuOpened>
            <SideMenuOpenedOptions>
              <Link to="/cadastrarFuncionario">
                <li style={{}}>
                  <img src={""} alt="Cadastro" />
                  <p>Cadastrar Funcionario</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <img src="" alt="AGENDAR" />
                  <p>AGENDAMENTO</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <img src={""} alt="TODO" />
                  <p>TODO</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <img src={""} alt="TODO" />
                  <p>TODO</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <img src={""} alt="TODO" />
                  <p>TODO</p>
                </li>
              </Link>
            </SideMenuOpenedOptions>
          </SideMenuOpened>
        )}{" "}
        {email === "funcionario@funcionario.com" || email === "teste@funcionario.com" && (
          <>
            <SideMenuOpened>
              <SideMenuOpenedOptions>
                <Link to="/agenda">
                  <li style={{}}>
                    <img src={""} alt="AGENDA" />
                    <p>SUA AGENDA</p>
                  </li>
                </Link>
                <Link to="/agenda">
                  <li style={{}}>
                    <img src="" alt="TODO" />
                    <p>TODO</p>
                  </li>
                </Link>
              </SideMenuOpenedOptions>
            </SideMenuOpened>
          </>
        )}
        {email === "cliente@cliente.com" && (
          <>
            <h1>usuario todo</h1>
          </>
        )}
      </>
    </>
  );
}

export default Login;
