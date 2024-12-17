"use client"
import { CardArquivo } from "@/components/cardArquivo";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";
import { useState } from "react";


export default function VerProjeto(){
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const toggleProgress = () => {
        setShowModal(!showModal);
    }

    return(
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex items-center flex-col gap-4 justify-center md:px-28 px-10 py-14 dark:text-fontTextDark">
                <div className="md:w-full flex md:justify-between self-end">
                    <div className="md:flex text-fontGrey hidden dark:text-fontGreyDark gap-5 self-start font-semibold">
                        <Link href={ROUTES.project}>
                            <h1>Projetos</h1>
                        </Link>

                        <h1>&gt;</h1>

                        <Link href={'/project/java'}>
                            <h1>Nome do projeto</h1>
                        </Link>
                    </div>

                    <div className="flex gap-3">
                        {isAdmin ? (
                            <button onClick={toggleProgress} className="flex items-center bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Alterar progresso</button>
                        ) : !isAdmin ? (
                            <h1 className="flex items-center bg-buttonRed dark:bg-buttonRedDark hover:bg-buttonRedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonRedHoverDark transition-colors duration-300">Em andamento</h1>
                        ) : null}
                        <Link href={'/feedbackProject/iot'} className="flex items-center bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Feedback</Link>
                    </div>
                </div>
                <div className="w-full gap-4 h-auto flex flex-col flex-wrap">
                    <h1 className="text-2xl">Iot</h1>
                    <p className="md:text-xl text-lg md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus eum corrupti aliquam error quis fugit, voluptate unde praesentium totam, deleniti amet tempora quae accusantium soluta maiores nesciunt sit? Cupiditate!</p>
                </div>

                <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl md:w-4/5">Arquivos</h1>
                        <div className="flex gap-2 flex-row flex-wrap md:h-[50%]">
                            <CardArquivo file="teste"></CardArquivo>
                            <CardArquivo file="teste"></CardArquivo>
                            
                            <svg className="w-9 text-fontGrey dark:text-fontGreyDark" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set"  transform="translate(-100.000000, -1035.000000)" fill="currentColor"> <path d="M130,1063 C130,1064.1 129.104,1065 128,1065 L104,1065 C102.896,1065 102,1064.1 102,1063 L102,1039 C102,1037.9 102.896,1037 104,1037 L128,1037 C129.104,1037 130,1037.9 130,1039 L130,1063 L130,1063 Z M128,1035 L104,1035 C101.791,1035 100,1036.79 100,1039 L100,1063 C100,1065.21 101.791,1067 104,1067 L128,1067 C130.209,1067 132,1065.21 132,1063 L132,1039 C132,1036.79 130.209,1035 128,1035 L128,1035 Z M122,1050 L117,1050 L117,1045 C117,1044.45 116.552,1044 116,1044 C115.448,1044 115,1044.45 115,1045 L115,1050 L110,1050 C109.448,1050 109,1050.45 109,1051 C109,1051.55 109.448,1052 110,1052 L115,1052 L115,1057 C115,1057.55 115.448,1058 116,1058 C116.552,1058 117,1057.55 117,1057 L117,1052 L122,1052 C122.552,1052 123,1051.55 123,1051 C123,1050.45 122.552,1050 122,1050 L122,1050 Z" id="plus-square"> </path> </g> </g> </g></svg>
                        </div>
                    </div>
                    <Link href={`/project/Projeto-site/iot`} className="flex justify-center bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 w-52">
                        Ir para o projeto  
                    </Link>
                </div>
            </div>
            <ChatPrivate />

            <Modal height="30%" isOpen={showModal} onClose={toggleModal} title="Progresso do Projeto">
                <div className="flex flex-col w-full space-y-4 justify-center">
                    <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Opções:</label>
                    
                    <select id="status" name="status" className="border rounded-lg p-2 text-fontText dark:bg-backgroundDark dark:text-fontTextDark focus:ring-2 focus:blueMiddle focus:outline-none transition duration-200 ease-in-out">
                        <option value="" className="text-fontText dark:text-fontTextDark">Não iniciado</option>
                        <option value="" className="text-fontText dark:text-fontTextDark">Em andamento</option>
                        <option value="" className="text-fontText dark:text-fontTextDark">Concluído</option>
                    </select>

                    <div className="flex justify-center gap-5">
                        <button onClick={toggleModal} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Adicionar</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}