import "./App.css";

function Game() {
  return (
    <section className="game">
      <Room />
    </section>
  );
}

const Room = () => {
  return (
    <article>
      <Wall></Wall>
    </article>
  );
};

const Wall = () => <img src="Plain-White-Walls.jpg" alt="" />;

export default Game;
