import "./wall.css";
import { Door } from "./Door";

export const Wall = () => {
  return (
    <article>
      <Door></Door>
      <img className="wall" src="Plain-White-Walls.jpg" alt="" />
    </article>
  );
};

export default Wall;
