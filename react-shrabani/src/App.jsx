// import React from "react";

// export const App=()=>{
//   return(
//     <h1>Welcome to React Shrabani</h1>
//   )
// }
//when you write jsx babel convert jsx to react.createElement() method and it will create the element and render on the dom
// export const App=()=>{
//   return React.createElement("h1",null,"welcome to react shrabani");
// }
export const App = () => {
  return (
    <>
    <NetflisSeries/>
    <NetflisSeries/>
    <NetflisSeries/>
    <NetflisSeries/>
    <NetflisSeries/>
   
    </>
  );
};
const NetflisSeries = ()=>{
  //Dynamic value using variable:
  const name="Name: Queen of Tears";
  const rating="8.2";
  const summary="Queen of Tears takes viewers on an hi journey of love, loss, and redemption. Follow Hae-in and Hyun-woo as they navigate societal expectations and personal trials.";
  const returnGenre=()=>{
    const genre="Romcom";
    return genre;
  }
  return(
    <>
    <div>
    <div>
      <img src="tears.jpg" alt="Queen of Tears" width="40%" height="40%" />
    </div>
      <h1>Name:{name}</h1>
      <h3>Rating: {rating}</h3>
      {/* using expression */}
      <h3>Rating: {3+3.5}</h3>
      <p>Summary:{summary}</p>
      <p>Genre:{returnGenre()}</p>
   </div>
    </>
  )
}