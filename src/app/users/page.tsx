"use client"

import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { BlobOptions } from "buffer";
import { useEffect, useState } from "react";
import pessoa from "../../../public/pessoa.jpeg";
import Image from "next/image";


export default function Users() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModalEdit = () => {
        setIsOpen(!isOpen);
    }

    const id = 2;
    const modulo = id % 3;

    const editFunction = () => {
        console.log('Editar')
    }

    const deleteFunction = () => {
        console.log('Excluir')
    }

    return (
        <>
            <Menu isAdmin={true} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col p-5 items-center justify-center">
                <div className="flex flex-row gap-5 w-7/12 min-w-72 mt-5 md:gap-10">
                    <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-2xl">Usuários</h1>
                    <input type="text" placeholder="Pesquise um usuário" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                    <button>
                        <svg className="w-9 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    </button>
                </div>

                <div className="flex items-center justify-center mt-10 flex-col">
                    <div className="flex w-4/6 flex-wrap gap-4 items-center justify-center">
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                        <Card redirect={`/profile/jurema`} image="" width="100%" height="60px" title="Card lindo" editButton={true} deleteButton={true} editFunction={toggleModalEdit} deleteFunction={deleteFunction}></Card>
                    </div>
                    <div className="flex gap-5 mt-8">
                        <button className="bg-buttonDesabled rounded py-1 px-5 w-28 cursor-default">
                            <h2 className="text-fontButton">Voltar</h2>
                        </button>
                        <button className="bg-buttonActivated rounded dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover py-1 px-5 w-28 hover:dark:bg-buttonActivatedHoverDark transition-colors duration-200">
                            <h2 className="text-fontButton">Avançar</h2>
                        </button>
                    </div>
                </div>
            </div>
            <ChatPrivate />

            <Modal isOpen={isOpen} onClose={toggleModalEdit} title="Editar perfil">
            <div className="flex overflow-auto flex-col justify-center items-center">
                    <Image src={pessoa} alt="profile" width={100} height={100} className="rounded-full w-52 p-3" priority />

                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full px-4 justify-center md:items-center md:flex-col gap-3 overflow-x-hidden text-fontText dark:text-fontTextDark">

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                <input
                                    readOnly
                                    type="text"
                                    value={`Jurema da silva`}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                <input
                                    readOnly
                                    type="text"
                                    value={`jurema@gmail.com`}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                <input
                                    readOnly
                                    type="text"
                                    value={`92901234`}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                <input
                                    readOnly
                                    type="text"
                                    value={`(41) 995211234`}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                />
                            </div>

                            <div className="flex flex-row gap-3">
                                <label htmlFor="">Instrutor</label>
                                <input type="checkbox" />
                            </div>

                            <div className="flex justify-between md:gap-44">
                                <button onClick={toggleModalEdit} className="bg-buttonDesabled dark:bg-buttonDesabledDark rounded py-2 px-3 text-fontButton self-end">Cancelar</button>
                                <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-5 text-fontButton self-end">Salvar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
