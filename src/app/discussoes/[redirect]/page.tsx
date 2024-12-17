"use client"

import { ChatPrivate } from "@/components/chatPrivate";
import { ChatPublico } from "@/components/chatPublico";
import { Menu } from "@/components/menu";
import { Message } from "@/components/message";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function ChatDiscussoes(){
    const sendMessage = () => {
        console.log('Mensagem enviada!');
    }

    const sendFile = () => {
        console.log('Mensagem enviada!');
    }

    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col md:p-8 p-3 items-center justify-center overflow-hidden md:gap-4">
                <div className="md:flex text-fontGrey hidden dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.discosion}>
                        <h1>Discussões</h1>
                    </Link>

                    <h1>&gt;</h1>

                    <h1>Java</h1>
                </div>

                <h1 className="flex text-fontGrey md:hidden dark:text-fontGreyDark font-semibold mb-3 text-lg">Nome da discussão</h1>


                <div className="flex w-full justify-center">
                    <ChatPublico sendFile={sendFile} sendMessage={sendMessage}>
                        <div className="flex gap-2 flex-col">
                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>

                        </div>
                    </ChatPublico>
                </div>

            </div>   
            <ChatPrivate />

        </>
    )
}