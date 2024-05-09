import Link from "next/link";
import { LeftArrowIcon } from "./icons/left-arrow-icon";
import { StarIcon } from "./icons/star-icon";
import { PlayersIcon } from "./icons/players-icon";
import { TimeIcon } from "./icons/time-icon";
import { UiButton } from "../uikit/ui-button";
import { players } from "./constants";

export function GameTitle({ playersCount, changePlayerCount, setPlayerList }) {
  const handlePlayerCountClick = (count) => {
    const updatedPlayerList = players.slice(0, count);
    setPlayerList(updatedPlayerList);
    changePlayerCount(count);
  };

  return (
    <div className="px-2 mt-6 mb-4">
      <div className="text-teal-600 flex items-center gap-2 text-xs leading-tight">
        <Link href="#" className="flex gap-2 hover:text-teal-500">
          <LeftArrowIcon />
          <div>На главную</div>
        </Link>
      </div>
      <div className="text-4xl leading-tight flex">
        Крестики нолики
        <div className="ml-auto">
          <UiButton
            onClick={() => handlePlayerCountClick(2)}
            className="mx-3"
            size="md"
            variant="primary"
          >
            2
          </UiButton>
          <UiButton
            onClick={() => handlePlayerCountClick(4)}
            size="md"
            variant="primary"
          >
            4
          </UiButton>
        </div>
      </div>
      <div className="flex gap-3 items-center text-slate-400 text-xs">
        <div className="flex items-center gap-x-1">
          <StarIcon />
        </div>
        <div className="flex items-center gap-x-1">
          <PlayersIcon />
          {playersCount}
        </div>
        <div className="flex items-center gap-x-1">
          <TimeIcon />1 мин на ход
        </div>
      </div>
    </div>
  );
}
