import DoorPopup from "./DoorPopup";
import { Wall } from "./Wall";

export const Room = () => {
  return (
    <article>
      <Wall></Wall>
      <DoorPopup />
    </article>
  );
};
