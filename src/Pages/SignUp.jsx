import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fireDB } from "../firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      console.log(user);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally centers the form
        alignItems: "center", // Vertically centers the form
        height: "100vh", // Set height to full viewport height
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
            <label for="exampleInputName" class="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              id="exampleInputName"
            />
          </div>
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
              autoComplete=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link>
            <button onClick={signup} type="submit" class="btn btn-primary">
              SignUp
            </button>
          </Link>
        </form>
        <Link to={"/login"}>
          <a>Back to login</a>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
