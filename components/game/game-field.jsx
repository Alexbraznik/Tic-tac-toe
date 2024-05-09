import { useEffect, useState } from "react";
import { UiButton } from "../uikit/ui-button";
import { MOVE_ORDER, players } from "./constants";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameField({
  playersCount,
  currentStep,
  setCurrentStep,
  resetGame,
  setIsWinner,
  setSeconds,
  startTimer,
  setStartTimer,
  playerTimeOver,
  setPlayerTimeOver,
  playerList,
  setPlayerList,
}) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [winner, setWinner] = useState(false);
  const [winningSequence, setWinningSequence] = useState("");
  const [winningSymbol, setWinningSymbol] = useState(null);

  // console.log(playerList, "Список участников, playerList");

  // console.log(playerTimeOver, "Время истекло, playerTimeOver");

  const activeMoveOrder = MOVE_ORDER.slice(0, playersCount); // все символы

  const activePlayers = playerList.map((player) => player.symbol);

  const nextStepIndex =
    (activePlayers.indexOf(currentStep) + 1) % activePlayers.length; // индекс того, кто сейчас ходит

  // console.log(nextStepIndex, "индекс того, кто сейчас ходит, nextStepIndex");

  const playerLose = playerTimeOver.includes(activePlayers[nextStepIndex].id); // Проверяем ID вместо индекса

  // console.log(playerLose, "выбыл, playerLose"); // участник выбыл

  const nextStep = activePlayers[nextStepIndex]; // символ того, кто сейчас ходит

  function winnerDetermine(cells, symbol) {
    let winningSequence = [];

    for (let i = 0; i < 19; i++) {
      let count = 0;
      for (let j = 0; j < 19; j++) {
        if (cells[i * 19 + j] === symbol) {
          count++;
          winningSequence.push(i * 19 + j);
          if (count === 5) {
            setWinningSequence(winningSequence);
            setWinner(true);
            setIsWinner(true);
            setWinningSymbol(currentStep);
            return true;
          }
        } else {
          count = 0;
          winningSequence = [];
        }
      }
    }

    for (let i = 0; i < 19; i++) {
      let count = 0;
      for (let j = 0; j < 19; j++) {
        if (cells[j * 19 + i] === symbol) {
          count++;
          winningSequence.push(j * 19 + i);
          if (count === 5) {
            setWinningSequence(winningSequence);
            setWinner(true);
            setIsWinner(true);
            setWinningSymbol(currentStep);
            return true;
          }
        } else {
          count = 0;
          winningSequence = [];
        }
      }
    }

    for (let i = 0; i <= cells.length - 5 * 19; i++) {
      let count = 0;
      for (let j = 0; j < 5; j++) {
        if (cells[i + j * 19 + j] === symbol) {
          count++;
          winningSequence.push(i + j * 19 + j);
          if (count === 5) {
            setWinningSequence(winningSequence);
            setWinner(true);
            setIsWinner(true);
            setWinningSymbol(currentStep);
            return true;
          }
        } else {
          count = 0;
          winningSequence = [];
        }
      }
    }

    for (let i = 0; i <= cells.length - 5 * 19; i++) {
      let count = 0;
      for (let j = 0; j < 5; j++) {
        if (cells[i + j * 19 - j] === symbol) {
          count++;
          winningSequence.push(i + j * 19 - j);
          if (count === 5) {
            setWinningSequence(winningSequence);
            setWinner(true);
            setIsWinner(true);
            setWinningSymbol(currentStep);
            return true;
          }
        } else {
          count = 0;
          winningSequence = [];
        }
      }
    }

    return false;
  }

  function handleCellClick(i) {
    if (!cells[i] && !winner && startTimer) {
      const newCells = [...cells];
      newCells[i] = currentStep;
      winnerDetermine(newCells, currentStep);
      setCells(newCells);
      setCurrentStep(nextStep);
    }
  }

  function getRandomNumber() {
    return Math.random() * (120.9999 - 120.0) + 120.0;
  }
  resetGame = () => {
    setCells(() => new Array(19 * 19).fill(null));
    setCurrentStep(activeMoveOrder[0]);
    setWinner(false);
    setWinningSequence("");
    setIsWinner(false);
    setSeconds(getRandomNumber());
    // setStartTimer(false);
  };
  return (
    <div className="bg-white rounded-2xl shadow-md pt-5 px-[32px]">
      <div className="max-w-max m-auto ">
        <div className="flex items-center mb-3">
          <div>
            <div className="flex gap-1 items-center text-slate-900 text-xl font-semibold">
              Ход:
              <GameSymbol symbol={!winner ? currentStep : winningSymbol} />
            </div>
            <div className="flex gap-1 items-center text-slate-400 text-xs">
              Следующий:
              <GameSymbol
                symbol={!winner ? nextStep : currentStep}
                className="w-4 h-4"
              />
            </div>
          </div>
          <div className="flex ml-auto gap-4">
            <UiButton size="md" variant="outline" onClick={() => resetGame()}>
              Сбросить
            </UiButton>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
          {cells.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleCellClick(i)}
              className={clsx(
                "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
                winningSequence.includes(i) ? "bg-red-200" : "bg-white"
              )}
            >
              {cell && <GameSymbol symbol={cell} className="w-6 h-6" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
