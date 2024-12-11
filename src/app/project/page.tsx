"use client"

import { Menu } from "@/components/menu";
import { CardProjeto } from "@/components/cardProject";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";
import { ChatPrivate } from "@/components/chatPrivate";
import { useState } from "react";
import { Card } from "@/components/card";


export default function Projeto(){
    const [option, setOption] = useState(1);

    const clickProject = () => {
        setOption(1);
    }

    const clickMyProject = () => {
        setOption(2);
    }

    const toggleModal = () => {
        
    }

    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex px-16 items-center flex-col gap-4">
                <div className="flex items-center w-8/12 py-8 px-14 justify-center ">
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    <input className="w-full flex border-b-2 focus:outline-none p-2 dark:text-fontTextDark dark:bg-backgroundDark" placeholder="Digite a projeto que deseja" type="text" />
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M20 4H4v2l6 6v8.5l4-2.5v-6l6-6V4z"></path> </g></svg>
                </div>

                {option == 1 ? (
                    <>
                        <div className="flex justify-content w-8/12 px-14 justify-between">
                            <div className="flex gap-10  dark:text-fontTextDark">
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                            {/* <Link href={ROUTES.novoProjeto}><button className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton" >Novo Projeto</button></Link> */}
                        </div>
                        <div className="flex flex-col w-9/12 items-center px-14 gap-3">
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-content w-8/12 px-14 justify-between">
                            <div className="flex gap-10  dark:text-fontTextDark">
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                            {/* <Link href={ROUTES.novoProjeto}><button className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton" >Novo Projeto</button></Link> */}
                        </div>
                        <div className="flex flex-col w-9/12 items-center px-14 gap-3">
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                            <Card title={"Projeto-site"} width={"90%"} height={"60px"} cor="bg-blueLight" redirect="/project/Projeto-site" description="java"></Card>
                        </div>
                    </>
                )}

                
                        
            </div>
            <ChatPrivate />

        </>
    )
}