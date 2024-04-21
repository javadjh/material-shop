import { loginService } from "../../service/user.service";
import { ILoginUser } from "../../types/user.type";
import LoginBoxComponent from "./LoginBox.c";
import { LoginContainerStyled } from "./login.style";

const Login = () => {
  const login = async (user: ILoginUser) => {
    const {
      data: { data: token },
    } = await loginService(user);
    localStorage.setItem("token", token);
  };
  return (
    <LoginContainerStyled>
      <LoginBoxComponent login={login} />
    </LoginContainerStyled>
  );
};
export default Login;
