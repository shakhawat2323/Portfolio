import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Text from "./text";
import RocketAnimation from "./text";
import AnimatedCard from "./text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatedCard />
    </>
  );
}

export default App;
