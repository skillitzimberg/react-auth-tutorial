const { useState } = require("react");

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const tokenJSON = JSON.parse(tokenString);
    return tokenJSON?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (newToken) => {
    sessionStorage.setItem("token", newToken);
    setToken(newToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
