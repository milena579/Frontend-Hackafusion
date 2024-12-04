import { Menu } from "@/components/menu";
import Image from "next/image";

export default function Forum() {
  return (
    <>
        <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
        <div className="flex flex-col p-5 items-center justify-center">
            <div className="flex flex-row gap-10 w-7/12 min-w-72 mt-5">
                <h1 className="text-fontGrey text-2xl dark:text-fontGreyDark">Fóruns</h1>
                <input type="text" placeholder="Pesquise o tema do fórum" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                <button>
                    <svg className="w-9 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                </button>
            </div>
        </div>
    </>
  );
}
