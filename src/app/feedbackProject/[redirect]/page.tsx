"use client"

import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import SeeMore from "@/components/seeMore";
import { useState } from "react";

export default function FeedbackProject() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Menu isAdmin={false} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <SeeMore redirect="/project/iot" title="Feedbacks do projeto" button="Adicionar skill" isAdmin={true}>
                <button onClick={toggleModal} className="flex self-end items-center justify-center bg-buttonActivated dark:bg-buttonActivatedDark px-5 py-2 dark:hover:bg-buttonActivatedHoverDark transition-colors duration-200 rounded-md shadow-lg">
                    <h1 className="text-fontButton font-semibold text-md">Dar feedback</h1>
                </button>
                <div className="flex gap-3 flex-wrap justify-center mt-3 items-center w-full">
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                    <Card image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Adorei esse projeto, é muito bom de vdd, deveriam ter mais como esse! Aprendi muito" height="130px" width="40vw"></Card>
                </div>
            </SeeMore>

            <Modal height="50%" onClose={toggleModal} title={"Adicionar um feedback"} isOpen={isOpen}>
                <div className="flex flex-col w-full space-y-4 gap-2">
                    <div className="h-[300px]">
                        <textarea id="messageTextarea" placeholder="Escreva aqui seu feedback sobre esse projeto..." className="mt-2 w-4/5 md:w-full h-full rounded-md focus:outline-none min-h-5/6 focus:ring-2 focus:ring-blueLight dark:focus:ring-blueLightDark p-3 text-fontText dark:text-fontTextDark resize-none dark:bg-cardDark transition-all duration-200"></textarea>
                    </div>
                    <div className="flex justify-center gap-5">
                        <button onClick={toggleModal} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Adicionar</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}