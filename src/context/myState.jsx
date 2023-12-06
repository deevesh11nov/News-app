import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase/firebaseConfig";

function MyState(props) {
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = result.docs.map((doc) => doc.data());
      setUser(usersArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Ensure the structure of the context value matches your requirements
  const contextValue = {
    user,
    // Add any other context properties if needed
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
