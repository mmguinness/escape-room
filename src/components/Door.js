import "./door.css";

export const Door = () => {
  return (
    <button onClick={() => window.open("http://www.google.com")}>
      <img className="door" src="door.png" alt="" />
    </button>
  );
};
