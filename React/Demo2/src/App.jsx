import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const age = 18;
  let canWatch = "Not Available";
  if (age >= 18) canWatch = "Availlable";
  return (
    <>
      <Header />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam
        est eius! Explicabo atque provident accusamus blanditiis, consequuntur
        facilis magni.{((<Header />), 8 + 2)}
      </p>
      <Footer />
      <Roshan />
      <button>{age >= 18 ? "Watch Now " : "not Available"}</button>
      <button>{canWatch}</button>
    </>
  );
};

export default App;

const Roshan = () => {
  return (
    <div>
      <h1>this is alag components </h1>
    </div>
  );
};
