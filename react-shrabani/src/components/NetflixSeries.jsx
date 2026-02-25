const NetflixSeries = () => {
  const name = "Name: Queen of Tears";
  const rating = "8.2";
  const summary =
    "Queen of Tears takes viewers on an hi journey of love, loss, and redemption. Follow Hae-in and Hyun-woo as they navigate societal expectations and personal trials.";

  const returnGenre = () => {
    const genre = "Romcom";
    return genre;
  };

  let age = 18;
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

  return (
    <div>
      <div>
        <img src="tears.jpg" alt="Queen of Tears" width="40%" height="40%" />
      </div>
      <h1>{name}</h1>
      <h3>Rating: {rating}</h3>
      <h3>Rating: {3 + 3.5}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>{canWatch()}</button>
    </div>
  );
};
// You can export both default and named exports from the same fil

export const Header = () => <p>Hello</p>;
export const Footer = () => <p>hiii</p>;

export default NetflixSeries;
// export { Header, Footer };