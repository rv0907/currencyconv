import { useState } from "react";
import Formpage from "./components/Formpage.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Formpage />
    </>
  );
}

export default App;
