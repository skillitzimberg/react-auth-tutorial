import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const tokenData = JSON.parse(tokenString);
    return tokenData?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (tokenData) => {
    sessionStorage.setItem("token", JSON.stringify(tokenData?.token));
    setToken(tokenData?.token);
  };

  return [token, saveToken];
}
