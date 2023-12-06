import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxHeight: "500px",
          maxWidth: "400px",
          borderRadius: "5%",
          padding: "20px", // Optional: Add padding for better appearance'
          backgroundColor: "whitesmoke",
        }}
      >
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <Link to={"/"}>
            <button onClick={signin} type="submit" class="btn btn-primary">
              Login
            </button>
          </Link>
        </form>
        <Link to={"/signup"}>
          <a>Go to SignUp</a>
        </Link>
        <br />
        <Link to={"/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
