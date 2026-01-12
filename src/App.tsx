import { useState } from "react";
import "./App.css";

import Category from "./pages/Department";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Category />
    </>
  );
}

export default App;
