import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => {
    setIsLoggedIn(!isloggedIn);
  };

  return (
    <>
      {isloggedIn ? (
        <Login clickFunc={toggle} />
      ) : (
        <Signup clickFunc={toggle} />
      )}
    </>
  );
}

export default App;
