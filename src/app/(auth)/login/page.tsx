import { memo } from "react";
import LoginComponent from "./components/login";

const LoginPage = async () => {
  return (
    <LoginComponent />
  )
}

export default memo(LoginPage);
