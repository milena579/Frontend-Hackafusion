"use client"

import { Menu } from "@/components/menu";
import { ChatPrivate } from "@/components/chatPrivate";
import { useState } from "react";
import { Card } from "@/components/card";
import Modal from "@/components/modal";
import { Skill } from "@/components/skills";

export default function Projeto(){
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredNames, setFilteredNames] = useState<string[]>([]);
    const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);

    const clickProject = () => {
        setOption(1);
    }

    const clickMyProject = () => {
        setOption(2);
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    // Exemplo de pessoas, mas isso vai ser feito pela request
    const people = [
        "Fulano da Silva",
        "Ciclano Pereira",
        "Beltrano Santos",
        "Maria Oliveira",
        "José Souza",
        "Ana Costa",
        "Lucas Pereira",
        "José Almeida"
    ]

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchTerm(query);

        // Filtra os nomes com base no texto digitado pelo usuário no input de usuários
        if (query) {
            const filtered = people.filter(name =>
                name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredNames(filtered);
        } else {
            setFilteredNames([]);
        }
    };

    const handleSelectPerson = (name: string) => {
        setSelectedParticipants([...selectedParticipants, name]);
        setSearchTerm('');
        setFilteredNames([]);
    };

    return(
        <>
            <Menu isAdmin={false} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex md:px-16 items-center flex-col gap-4">
                <div className="flex items-center w-8/12 py-8 px-14 justify-center ">
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    <input className="w-full flex border-b-2 focus:outline-none p-2 dark:text-fontTextDark dark:bg-backgroundDark" placeholder="Digite a projeto que deseja" type="text" />
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M20 4H4v2l6 6v8.5l4-2.5v-6l6-6V4z"></path> </g></svg>
                </div>

                {option == 1 ? (
                    <>
                        <div className="flex justify-content md:w-8/12 md:px-14 px-8 gap-3 justify-between">
                            <div className="flex gap-10 dark:text-fontTextDark">
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDarkDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDarkDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                        </div>
                        <div className="flex flex-col w-9/12 items-center md:px-14 gap-3">
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
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDarkDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDarkDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                            {/* <Link href={ROUTES.novoProjeto}><button className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton" >Novo Projeto</button></Link> */}
                        </div>
                        <div className="flex flex-col w-9/12 items-center md:px-14 gap-3">
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

            <Modal isOpen={isOpen} onClose={toggleModal} title="Criar novo projeto">
                <form className="p-2 flex flex-col lg:gap-5 gap-3 lg:mt-5 justify-center">
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="projectName" className="block text-sm font-medium text-fontGrey dark:text-fontGreyDark mb-1">Nome do projeto</label>
                            <input type="text" placeholder="Digite o nome do projeto" className="text-fontText dark:text-fontTextDark border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-full p-1"/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="projectTheme" className="block text-sm font-medium text-fontGrey dark:text-fontGreyDark mb-1">Tema</label>
                            <select id="projectTheme" className="w-full p-1 border-b-2 border-textGrey dark:border-textGreyDark bg-transparent focus:outline-none focus:border-textGrey dark:focus:border-textGreyDark transition-colors duration-300 text-fontGrey rounded dark:text-fontGreyDark">
                                <option value="" className="text-fontGrey">Selecione um tema</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="projectMembers" className="block text-sm font-medium text-fontGrey dark:text-fontGreyDark mb-1">Integrantes</label>
                            <input type="text" placeholder="Pesquise pessoas" value={searchTerm} onChange={handleSearchChange} className="text-fontText dark:text-fontTextDark border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-full p-1"/>
                            {/* Dropdown de sugestões de pessoas */}
                            {filteredNames.length > 0 && (
                                <div className="text-fontText dark:text-fontTextDark absolute bg-background dark:bg-backgroundDark shadow-lg w-48 mt-1 rounded-lg z-50 max-h-48 overflow-y-auto">
                                    {filteredNames.map((name, index) => (
                                        <div 
                                            key={index} 
                                            className="p-2 cursor-pointer hover:bg-backgroundCardBlue dark:hover:bg-backgroundCardBlueDark" 
                                            onClick={() => handleSelectPerson(name)}
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 md:min-h-52">
                        <label htmlFor="participants" className="block text-sm font-medium text-fontGrey dark:text-fontGreyDark mb-1">Participantes</label>
                        <div className="flex gap-2 lg:flex-row flex-wrap items-center justify-center">
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                            <Skill cor={"blueLight"} title={"Fulano da silva"} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-fontGrey dark:text-fontGreyDark mb-1">Descrição</label>
                        <textarea id="projectDescription" className="w-full px-3 py-2 bg-background dark:bg-backgroundDark border-2 border-textGrey dark:border-textGreyDark rounded-lg resize-none h-24 md:h-40 focus:outline-none focus:border-textDrey dark:focus:border-textDrey transition-colors duration-300 text-fontGrey dark:text-fontGreyDark placeholder:textGrey" placeholder="Descreva o projeto"/>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                        <button type="button" onClick={toggleModal} className="bg-buttonDesabled dark:bg-buttonDesabledDark text-fontText dark:text-fontTextDark px-3 rounded py-1 transition-colors duration-300">Cancelar</button>
                        <button type="submit" className="bg-buttonActivated dark:bg-buttonActivatedDark rounded px-3 w-28 dark:hover:bg-buttonActivatedHoverDark py-1 text-fontText dark:text-fontTextDark transition-colors duration-300">Criar Projeto</button>
                    </div>
                </form>
            </Modal>


        </>
    )
}