import { ChatPrivate } from "@/components/chatPrivate";
import { ChatPublico } from "@/components/chatPublico";
import { Menu } from "@/components/menu";


export const chatProjeto = () => {

    return (
        <>
        <html>
            <body>
                <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                <div  className="flex items-center flex-col gap-4 justify-center h-screen px-28  ">
                    <div className="w-[90%] flex justify-between ">
                        <div className="text-2xl dark:text-fontTextDark ">
                            <h1>Projetos - Iot</h1>
                        </div>     
                    </div>
                    <ChatPublico user="Milena" message="Milena"></ChatPublico>

                    <ChatPrivate></ChatPrivate>
                </div>   
            </body>
        </html>
        </>
    )
}

export default chatProjeto;