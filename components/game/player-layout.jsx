import Image from "next/image";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export function PlayerLayout({
  avatar,
  name,
  rating,
  symbol,
  isRight,
  children,
}) {
  return (
    <div>
      <div
        className={clsx(
          "flex items-center w-64 h-12 gap-3 mb-3 mr-5",
          isRight && "mr-0"
        )}
      >
        <div className={clsx("w-[180px] flex ", isRight && "order-3")}>
          <Image className="rounded-full relative" src={avatar} alt="avatar" />
          <div className="absolute flex items-center justify-center bg-white w-5 h-5 rounded-full -ml-1 -mt-1 shadow">
            <GameSymbol symbol={symbol} className="w-3 h-3  " />
          </div>
          <div className="truncate">
            <div className="text-teal-600 text-lg truncate">{name}</div>
            <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
          </div>
        </div>
        <div
          className={clsx("w-px h-6 bg-slate-200 mx-3", isRight && "order-2")}
        ></div>
        <div
          className={clsx(
            "text-lg font-semibold w-12 h-6",
            isRight && "order-1"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
