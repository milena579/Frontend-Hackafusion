import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";


export default function Discussoes (){
    const id = 2;
    const modulo = id % 3;
    console.log(modulo);
    
    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
             <div className="flex flex-col p-5 items-center justify-center">
                <div className="flex flex-row gap-2 w-9/12 min-w-72 mt-5 md:gap-5 items-center">
                    <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-1xl">Discussões</h1>
                    <input type="text" placeholder="Pesquise o tema da discussão" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dar: text-fontGreyDark"/>
                    <button>
                        <svg className="w-6 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    </button>
                </div>

                <div className="flex items-center justify-center mt-10 flex-col">
                    <div className="flex w-4/6 flex-wrap gap-4 items-center justify-center">
                        {modulo == 0 && (
                            <Card redirect="/foruns/java" width="96" height="96" cor="bg-purpleCard" title="Card lindo aaaaa mt texto nss aaaa preciso de mais texto pra ver oq acontece mais texto mds quanto texto nss aaaa" description="Teste teste teste teste"></Card>
                        )}
                        {modulo == 1 && (
                            <Card redirect="/foruns/outraCoisa" width="96" height="96" cor="bg-pinkCard" title="Card lindo" description="Teste teste teste teste"></Card>
                        )}
                        {modulo == 2 && (
                            <Card redirect="/foruns/outraCoisa2" width="96" height="96" cor="bg-greenCard" title="Card lindo" description="Teste teste teste teste"></Card>
                        )}
                    </div>
                    {/* <div className="flex gap-5 mt-8 absolute bottom-1/4"> */}
                    <div className="flex gap-5 mt-8">
                        <button className="bg-buttonDesabled py-1 px-5 w-28 cursor-default">
                            <h2 className="text-fontButton">Voltar</h2>
                        </button>
                        <button className="bg-buttonActivated py-1 px-5 w-28 hover:bg-buttonActivatedHoverDark transition-colors duration-200">
                            <h2 className=" text-fontButton">Avançar</h2>
                        </button>
                    </div>
                </div>
            </div>
            <ChatPrivate />

        </>
    );
}