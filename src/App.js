import "./App.css";
import { Room } from "./components/Room";

function Game() {
  return (
    <section className="game">
      {/* <Testbutton /> */}
      <Room />
    </section>
  );
}

const Testbutton = () => {
  return <button className="testbutton"></button>;
};
export default Game;
