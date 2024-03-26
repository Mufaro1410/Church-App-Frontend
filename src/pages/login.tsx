import { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedInUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();
    // const validateLogin = await axios.post()

    // if (validateLogin) {
    //   setLoggedInUser(username)
    //   navigate("/")
    // }

    setLoggedInUser(username);
    navigate("/");
  }

  return (
    <div className="text-center mx-auto">
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username..."
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password..."
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
