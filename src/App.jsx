import Header from "./Components/header/Header.jsx";
import React from "react";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import Examples from "./Components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
export default App;
