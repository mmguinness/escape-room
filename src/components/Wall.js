import "./wall.css";
import { Door } from "./Door";
import { Monitor } from "./Monitor";

export const Wall = () => {
  return (
    <article>
      <Door></Door>
      <Monitor></Monitor>
      <img className="wall" src="Plain-White-Walls.jpg" alt="" />
    </article>
  );
};

export default Wall;
