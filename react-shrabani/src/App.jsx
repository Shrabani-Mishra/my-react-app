// import React from "react";
// export const App=()=>{
//   return(
//     <h1>Welcome to React Shrabani</h1>
//   )
// }
//when you write jsx. babel convert jsx to react.createElement() method and it will create the element and render on the dom
// export const App=()=>{
//   return React.createElement("h1",null,"welcome to react shrabani");
// }
import NetflixSeries, { Header, Footer } from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      <Header />
      <NetflixSeries />
      <Footer />
    </>
  );
};

