"use client"
import { CardArquivo } from "@/components/cardArquivo";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";
import { useState } from "react";


export default function VerProjeto(){
    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
        setShowModal(!showModal);
    }
    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>

            <div className="flex items-center flex-col gap-4 justify-center h-screen px-28 py-14  dark:text-fontTextDark">
                <div className="w-[90%] flex justify-between ">
                    <div className="text-2xl">
                        <h1>Projetos - Iot</h1>
                    </div>
                    <div className="">
                        <Link href={ROUTES.project}> <button className="bg-buttonActivated p-2 rounded text-fontButtonDark"  onClick={toggleModal} >Feedback</button> </Link>
                    </div>
                </div>
                <div className="w-[90%] gap-4 h-auto flex flex-col flex-wrap">
                    <h1 className="text-3xl">Iot</h1>
                    <p className="text-xl w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus eum corrupti aliquam error quis fugit, voluptate unde praesentium totam, deleniti amet tempora quae accusantium soluta maiores nesciunt sit? Cupiditate!</p>
                </div>

                <div className="flex flex-col w-[90%] gap-4 h-full">
                    <h1 className="text-xl w-[85%]">Arquivos</h1>
                    <div className="flex gap-2 flex-row flex-wrap h-[50%] w-full">
                        <CardArquivo file="teste"></CardArquivo>
                    </div>
                    <div className="">
                        <Link href={`/project/Projeto-site/iot`}>
                            <button className="bg-buttonActivated p-2 rounded text-fontButtonDark" >Ir para o projeto</button>    
                        </Link>
                    </div>
                </div>
            </div>
            <ChatPrivate />

        </>
    )
}