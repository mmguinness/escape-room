import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import "./components/room.css";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Time's Up!</span>
      <p>Try Again?</p>
    </div>
  );
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes <= 1} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes <= 1} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
