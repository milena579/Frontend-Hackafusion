"use client"
import { Menu } from "@/components/menu";
import pessoa from "../../../public/pessoa.jpeg";
import Image from "next/image";
import { Skill } from "@/components/skills";
import { Card } from "@/components/card";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";

export default function Profile() {
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const toggleEdit = () => {
        console.log('Ta indo')
        setIsOpenEdit(!isOpenEdit);
    }

    // Continuar o modal de editar perfil!

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="bg-blueLight dark:bg-blueLightDark w-screen md:flex-row flex-col flex items-center justify-around md:p-3 mt-10">
                <div className="flex items-center justify-center flex-col md:w-4/12">
                    <Image src={pessoa} alt="logo" width={100} height={100} className="rounded-full w-64 p-3" priority/>
                    <button onClick={toggleEdit} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-3 text-fontButton">
                        Editar perfil
                    </button>
                </div>
                <div className="md:w-6/12 w-full p-3 items-center flex flex-col justify-center md:gap-3">
                    <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-3 text-fontButton self-end m-4">Feedback</button>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-full px-5 justify-center">
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">Creuza Manoela Rocha</h2>
                            </div>
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">creuzamr@gmail.com</h2>
                            </div>
                        </div>

                        <div className="flex flex-col w-full px-5 justify-center">
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">92901234</h2>
                            </div>
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">(41) 995213912</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full p-3 items-center gap-5">
                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl">HardSkils</h1>
                    <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">
                            Ver mais
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl">Projetos</h1>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect={`/project/aaaaa`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpenEdit} onClose={toggleEdit} title="Editar perfil">
                <div className="flex overflow-auto flex-col justify-center items-center">
                    <Image src={pessoa} alt="logo" width={100} height={100} className="rounded-full w-52 p-3" priority/>

                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full px-4 justify-center md:items-center md:flex-col gap-3 overflow-x-hidden">

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                <input type="text" value='Creuza Manoela Rocha' className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                <input type="text" value='creuzamr@gmail.com' className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                <input type="text" value='92901234' className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                <input type="text" value='(41) 995213912' className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                            </div>

                            <div className="flex flex-row gap-3">
                                <label htmlFor="">Atualmente Aprendiz</label>
                                <input type="checkbox" />
                            </div>

                            <button className="bg-buttonRed dark:bg-buttonRedDark hover:bg-buttonRedHover rounded py-2 px-3 text-fontButton">Mudar senha</button>

                            <div className="flex justify-between md:gap-44">
                                <button className="bg-buttonDesabled dark:bg-buttonDesabledDark rounded py-2 px-3 text-fontButton self-end">Cancelar</button>
                                <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-5 text-fontButton self-end">Salvar</button>
                            </div>

                        </div>
                    </div>

                    {/* Essa parte eu vou deixar pra página de hardskills, pq fica muita coisa num modal só */}
                    {/* <div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl">HardSkils</h1>
                            <div className="flex flex-row max-w-60 flex-wrap gap-2 items-center justify-center">
                                <Skill cor={"blueLight"} title={"Design"} ></Skill>
                                <Skill cor={"blueLight"} title={"Design"} ></Skill>
                                <Skill cor={"blueLight"} title={"Design"} ></Skill>
                                <Skill cor={"blueLight"} title={"Design"} ></Skill>
                                <Skill cor={"blueLight"} title={"Design"} ></Skill>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Modal>
        </>
    )
}