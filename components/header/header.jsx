import Image from "next/image";
import logoSvg from "./icons/logo.svg";
import Avatar1 from "./Avatar1.jpg";
import { UiButton } from "../uikit/ui-button";

export function Header({ startGame }) {
  return (
    <div className="w-screen h-[100px] flex items-center px-8 shadow-lg">
      <Image src={logoSvg} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-8"></div>
      <UiButton
        size="lg"
        variant="primary"
        className="w-44"
        onClick={() => startGame()}
      >
        Играть
      </UiButton>
      <button className="ml-auto flex items-center text-start">
        <Image
          className="rounded-full mr-2"
          src={Avatar1}
          width={48}
          height={48}
          alt="avatar"
        />
        <div>
          <div className="text-teal-600 hover:text-teal-500 text-lg">Vasek</div>
          <div className="text-slate-400 text-xs">Рейтинг: 1180</div>
        </div>
        <svg
          className="text-teal-600 hover:text-teal-500"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
