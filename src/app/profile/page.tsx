"use client"

import { Menu } from "@/components/menu";
import pessoa from "../../../public/pessoa.jpeg";
import Image from "next/image";
import { Skill } from "@/components/skills";
import { Card } from "@/components/card";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import Link from "next/link";
import { ChatPrivate } from "@/components/chatPrivate";
import { ROUTES } from "@/constants/routes";

export default function Profile() {
    const [isOpenHardskills, setIsOpenHardskills] = useState(false);
    const [isOpenFocoCarreira, setIsOpenFocoCarreira] = useState(false);
    const isAdmin = true

    const toggleHardskills = () => {
        setIsOpenHardskills(!isOpenHardskills);
    }

    const toggleFocoCarreira = () => {
        setIsOpenFocoCarreira(!isOpenFocoCarreira);
    }

    useEffect(() => {
        const dataUser =  async () => {
            
            const token = sessionStorage.getItem("Token");
    
            // if(!token) {
            //     alert("Sua sessão expirou. Faça login novamente");
            //     router.push(ROUTES.login);
            //     setErrror(true);
            //     return
            // }
    
            // try {

            //     const response =  await fetch ("http://localhost:8080/user/0", {
            //         method: "GET",
            //         headers: {
            //             "Content-Type": "application/josn",
            //             Autorization: token
            //         },
            //     });
    
            //     const data: IUser = await response.json();
            //     setUserData(data);
            //     setErrror(false)
                
            // } catch (error) {
            //     console.log
            // }
        }
    }, [])

    const editProfile = async () => {

    }
    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isAdmin={isAdmin} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >

            <div className="flex flex-col w-full p-3 items-center gap-5">
                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                <div className="flex flex-row w-full items-center justify-center">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl flex items-center justify-center gap-3">
                        Focos de carreira
                    </h1>
                </div>

                    <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Link href={'/focoCarreira/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded py-2 px-4 text-fontButton">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl flex items-center justify-center gap-3">
                        HardSkills
                    </h1>
                    <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill cor={"blueLight"} title={"Design"} ></Skill>
                        <Link href={'/hardskills/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded py-2 px-4 text-fontButton">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Projetos</h1>
                    <div className="flex flex-col items-center justify-center gap-5 w-full">
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="project/java" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="project/java" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="project/java" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="project/java" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="project/java" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Link href={'/projects/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Feedbacks em destaque</h1>
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Você é incrível, amei trabalhar com você, você é maravilhosa!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Você é incrível, amei trabalhar com você, você é maravilhosa!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Você é incrível, amei trabalhar com você, você é maravilhosa!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Você é incrível, amei trabalhar com você, você é maravilhosa!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Você é incrível, amei trabalhar com você, você é maravilhosa!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Link href={'/feedbacks/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>

                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Interações recentes</h1>
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    <Link href={'/interactions/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>

                </div>
            </div>


            <Modal isOpen={isOpenHardskills} onClose={toggleHardskills} title="Adicionar hardskills">

            </Modal>

            <Modal isOpen={isOpenFocoCarreira} onClose={toggleFocoCarreira} title="Adicionar Foco de Carreira">
                
            </Modal>
            <ChatPrivate />
            
        </>
    )
}