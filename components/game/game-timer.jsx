import { useEffect, useState } from "react";

export function GameTimer({
  isTimerRunning,
  seconds,
  startTimer,
  playerTimeOver,
  setPlayerTimeOver,
  playerId,
  playerList,
  setPlayerList,
}) {
  const [localSeconds, setLocalSeconds] = useState(seconds * 1000);

  const minutesString = String(Math.floor(localSeconds / 60000)).padStart(
    2,
    "0"
  );
  const secondsString = String(
    Math.floor((localSeconds % 60000) / 1000)
  ).padStart(2, "0");

  const isDanger = localSeconds < 10000;

  const isTimerColor =
    isDanger && isTimerRunning
      ? "text-orange-600"
      : isTimerRunning
      ? "text-slate-900"
      : "text-slate-200";

  useEffect(() => {
    if (localSeconds === 0) {
      setPlayerList((prevPlayerList) =>
        prevPlayerList.filter((player) => player.id !== playerId)
      ); // Обновляем playerList, когда таймер истечет
    }
  }, [localSeconds, playerId, setPlayerList]);

  useEffect(() => {
    setLocalSeconds(seconds * 1000);
  }, [seconds]);

  useEffect(() => {
    let interval;
    if (isTimerRunning && startTimer) {
      interval = setInterval(() => {
        setLocalSeconds((s) => Math.max(s - 250, 0));
      }, 250);
    } // Таймер хода

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning, startTimer]);

  // ==
  useEffect(() => {
    if (localSeconds === 0) {
      setPlayerTimeOver((prevPlayerTimeOver) => {
        if (prevPlayerTimeOver.includes(playerId)) {
          return prevPlayerTimeOver;
        }
        return [...prevPlayerTimeOver, playerId];
      });
    }
  }, [localSeconds, playerId, setPlayerTimeOver]);
  // ==

  return (
    <div className={isTimerColor}>
      {minutesString}:{secondsString}
    </div>
  );
}
