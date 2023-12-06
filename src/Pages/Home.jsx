import React from "react";
import Navbar from "../Components/Navbar";
import Newboard from "../Components/Newboard";

const Home = ({ setCategory, category }) => {
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newboard category={category} />
    </div>
  );
};

export default Home;
