import { Menu } from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
        <div className="flex flex-col p-5 items-center justify-center">
            <div className="flex flex-row gap-4">
                <h1 className="text-fontGrey text-2xl dark:text-fontGreyDark">Fóruns</h1>
                <input type="text" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark"/>
            </div>
        </div>
    </>
  );
}
