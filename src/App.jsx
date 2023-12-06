import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Newboard from "./Components/Newboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  const [category, setCategory] = useState("general");
  const [user, setUser] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home setCategory={setCategory} category={category} user={user} />
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    // <div>
    //   <Home setCategory={setCategory} category={category} />
    //   {/* <Navbar setCategory={setCategory} />
    //   <Newboard category={category} /> */}
    // </div>
  );
};

export default App;
