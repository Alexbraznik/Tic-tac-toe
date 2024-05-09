import { useState } from "react";
import { Header } from "../components/header/header";
import { GameField } from "../components/game/game-field";
import { GameInfo } from "../components/game/game-info";
import { GameTitle } from "../components/game/game-title";
import { GAME_SYMBOLS, players } from "../components/game/constants";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const [currentStep, setCurrentStep] = useState(GAME_SYMBOLS.CROSS);
  const [isWinner, setIsWinner] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [startTimer, setStartTimer] = useState(true); // ? true, то нужно нажать на кнопку "играть"
  const [playerTimeOver, setPlayerTimeOver] = useState([]); // Игроки, у которых истекло время
  const [playerList, setPlayerList] = useState(players); // все участники

  const changePlayersCount = (count) => {
    setPlayersCount(count);
  };

  function startGame() {
    setStartTimer(true);
  }

  function resetGame() {}

  return (
    <div className="min-h-screen bg-slate-50">
      <Header startGame={startGame} />
      <div className="max-w-max mx-auto">
        <GameTitle
          playersCount={playersCount}
          setPlayerList={setPlayerList}
          changePlayerCount={changePlayersCount}
        />
        <GameInfo
          playersCount={playersCount}
          currentStep={currentStep}
          isWinner={isWinner}
          seconds={seconds}
          startTimer={startTimer}
          playerTimeOver={playerTimeOver}
          setPlayerTimeOver={setPlayerTimeOver}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
        <GameField
          playersCount={playersCount}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          resetGame={resetGame}
          setSeconds={setSeconds}
          setIsWinner={setIsWinner}
          startTimer={startTimer}
          setStartTimer={setStartTimer}
          playerTimeOver={playerTimeOver}
          setPlayerTimeOver={setPlayerTimeOver}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
      </div>
    </div>
  );
}
