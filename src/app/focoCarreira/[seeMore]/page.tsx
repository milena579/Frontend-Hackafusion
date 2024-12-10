"use client"
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import SeeMore from "@/components/seeMore";
import { Skill } from "@/components/skills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function focoCarreira() {

    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }

    const apagarSkill = (id : Number) => {
        console.log('Apagado! Id: ', id);
    }

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isAdmin={true} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
            <SeeMore title="Foco de Carreira" toggleAdd={toggleAdd} button="Adicionar mais" isAdmin={true}>
                <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3">
                        <Skill button={() => apagarSkill(1)} cor={"blueLight"} title={"Design wed sla oq os krl a 4"} ></Skill>
                        <Skill button={() => apagarSkill(2)} cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill button={() => apagarSkill(3)} cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill button={() => apagarSkill(4)} cor={"blueLight"} title={"Design"} ></Skill>
                        <Skill button={() => apagarSkill(5)} cor={"blueLight"} title={"Design"} ></Skill>
                </div>
            </SeeMore>

            {/* Modal pra adicionar mais skills */}
            <Modal height="30%" onClose={toggleAdd} title={"Adicionar Foco de Carreira"} isOpen={isOpenAdd}>
                <div className="flex flex-col w-full space-y-4">
                    <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Opções:</label>
                    
                    <select id="status" name="status" className="border rounded-lg p-2 text-fontText dark:bg-backgroundDark dark:text-fontTextDark focus:ring-2 focus:blueMiddle focus:outline-none transition duration-200 ease-in-out">
                        <option value="" className="text-fontText dark:text-fontTextDark">Design</option>
                        <option value="" className="text-fontText dark:text-fontTextDark">Java</option>
                        <option value="" className="text-fontText dark:text-fontTextDark">Fullstack</option>
                    </select>

                    <div className="flex justify-center gap-5">
                        <button onClick={toggleAdd} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Adicionar</button>
                    </div>
                </div>
            </Modal>
        
        </>
    )
}