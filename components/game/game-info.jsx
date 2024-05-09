import { useState } from "react";
import { players } from "./constants";
import { GameTimer } from "./game-timer";
import { PlayerLayout } from "./player-layout";

export function GameInfo({
  playersCount,
  currentStep,
  isWinner,
  seconds,
  startTimer,
  playerTimeOver,
  setPlayerTimeOver,
  playerList,
  setPlayerList,
}) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  return (
    <div className="w-[616px] h-max justify-center bg-white rounded-2xl flex items-center px-8 mb-6 shadow-md flex-wrap py-4">
      {players.slice(0, playersCount).map((player) => (
        <div key={player.id}>
          <PlayerLayout
            name={player.name}
            avatar={player.avatar}
            rating={player.rating}
            symbol={player.symbol}
            isRight={players.indexOf(player) % 2 === 1}
            isTimerRunning={isTimerRunning}
            seconds={seconds}
          >
            <GameTimer
              isTimerRunning={currentStep === player.symbol && !isWinner}
              seconds={seconds}
              startTimer={startTimer}
              playerId={player.id}
              playerTimeOver={playerTimeOver}
              setPlayerTimeOver={setPlayerTimeOver}
              playerList={playerList}
              setPlayerList={setPlayerList}
            />
          </PlayerLayout>
        </div>
      ))}
    </div>
  );
}
