"use client"

import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { BlobOptions } from "buffer";
import { useEffect, useState } from "react";
import pessoa from "../../../public/pessoa.jpeg";
import Image from "next/image";
import { Skill } from "@/components/skills";
import axios from "axios";

interface IUser {
    id: number;
    name: string;
    email: string;
    image?: string;
    telefone: string;
    student: boolean;
    edv: string;
    admin: boolean;
};

interface IUserOne {
    isOwner: boolean,
    user: {
        id: number;
        name: string;
        email: string;
        image?: string;
        telefone: string;
        student: boolean;
        edv: string;
        admin: boolean;
    }
};


interface IAbility {
    id: number,
    name: string
}

export default function Users() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenSkill, setIsOpenSkill] = useState(false);
    const [screen, setScreen] = useState(true);
    const [newSkill, setNewSkill] = useState('');
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [userArray, setUserArray] = useState<IUser[]>([]);
    const [userOne, setUserOne] = useState<IUserOne>();
    const [abilityArray, setAbilityArray] = useState<IAbility[]>([]);
    

    const toggleModalEdit = () => {
        setIsOpen(!isOpen);
    }

    const id = 2;
    const modulo = id % 3;

    const editFunction = (id: number) => {

    }

    const deleteUser = async (id: number) => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/admin/user/${id}` , {
                method: 'DELETE',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) throw new Error("Erro ao apagar usuário");
            const data = await response.json();
            setError(false);
            getUsers();
            // console.log(response);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const toggleModalSkill = () => {
        setIsOpenSkill(!isOpenSkill);
    }

    const toggleScreen = () => {
        setScreen(!screen);
    }

    const addSkill = async () => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/admin/ability` , {
                method: 'POST',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${newSkill}`
                }),
            });
            console.log(response);
            toggleModalSkill();
            getSkills();
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const getUsers = async () => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/user` , {
                method: 'GET',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error("Erro ao buscar usuários");
            const data = await response.json();
            setError(false);
            setUserArray(data.listObject);
            // console.log(response);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const getOneUser = async (id: number) => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/user/${id}` , {
                method: 'GET',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error("Erro ao buscar usuários");
            const data = await response.json();
            setError(false);
            setUserOne(data);
            console.log('Usuário', data)
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const getSkills = async () => {
        const jwt = sessionStorage.getItem('Token');


        try {
            const response = await fetch(`http://localhost:8080/ability` , {
                method: 'GET',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) throw new Error("Erro ao buscar skills");
            const data = await response.json();
            setError(false);
            setAbilityArray(data.listObject);
            // console.log(response);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const deleteSkill = async (id: number) => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/admin/ability/${id}` , {
                method: 'DELETE',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) throw new Error("Erro ao apagar skills");
            const data = await response.json();
            setError(false);
            getSkills();
            // console.log(response);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    useEffect (() => {
        getSkills();
        getUsers();
    }, []);

    
    

    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col p-5 items-center justify-center">
                <div className="flex md:flex-row flex-col items-center gap-5 w-7/12 min-w-72 mt-5 md:gap-10">
                    <div className="flex gap-3 w-full">
                        {screen ? (
                            <>
                                <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-2xl">Usuários</h1>
                                <input type="text" placeholder="Pesquise um usuário" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                                <button>
                                    <svg className="w-9 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-2xl">Skills</h1>
                                <input type="text" placeholder="Pesquise uma skill" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"/>
                                <button>
                                    <svg className="w-9 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                                </button>
                            </>
                        )}
                    </div>
                    <div className="flex gap-3">
                        <button onClick={toggleModalSkill} className="bg-buttonActivated rounded dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover py-1 px-5 w-40 hover:dark:bg-buttonActivatedHoverDark transition-colors duration-200">
                            <h2 className="text-fontButton">Criar Skill</h2>
                        </button>
                        {screen ? (
                            <button onClick={toggleScreen} className="bg-buttonActivated rounded dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover py-1 px-5 w-40 hover:dark:bg-buttonActivatedHoverDark transition-colors duration-200">
                                <h2 className="text-fontButton">Ver Skills</h2>
                            </button>
                        ) : (
                            <button onClick={toggleScreen} className="bg-buttonActivated rounded dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover py-1 px-5 w-40 hover:dark:bg-buttonActivatedHoverDark transition-colors duration-200">
                                <h2 className="text-fontButton">Ver Usuários</h2>
                            </button>
                        )}
                    </div>
                </div>

                {screen ? (
                    <div className="flex items-center justify-center mt-10 flex-col">
                        <div className="flex w-full flex-wrap gap-4 items-center justify-center">
                            {Array.isArray(userArray) && userArray.length > 0 ? (
                                userArray.map((user: IUser) => (
                                    <Card key={user.id} redirect={`/profile/${user.name}`} image="" width="80%" height="60px" title={`${user.name}`} editButton={true} deleteButton={true} editFunction={() => {getOneUser(user.id); toggleModalEdit();}} deleteFunction={() => deleteUser(user.id)}></Card>
                                ))
                            ) : (
                                <p className="text-fontGrey text-lg dark:text-fontGreyDark md:text-lg">Nenhum usuário encontrado!</p>
                            )}
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
                ) : (
                    <>
                        <div className="flex items-center justify-center mt-10 flex-col">
                            <div className="flex w-4/6 flex-wrap gap-4 items-center justify-center">
                                {Array.isArray(abilityArray) && abilityArray.length > 0 ? (
                                    abilityArray.map((ability: IAbility) => (
                                        <Skill key={ability.id} cor="blueLight" title={ability.name} button={() => deleteSkill(ability.id)}></Skill>
                                    ))
                                ) : (
                                    <p className="text-fontGrey text-lg dark:text-fontGreyDark md:text-lg">Nenhuma hardskill encontrada!</p>
                                )}
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
                    </>
                )}

            </div>
            <ChatPrivate />

            <Modal isOpen={isOpen} onClose={toggleModalEdit} title="Editar perfil">
            <div className="flex overflow-auto flex-col justify-center items-center">
                    <Image src={pessoa} alt="profile" width={100} height={100} className="rounded-full w-52 p-3" priority />

                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full px-4 justify-center md:items-center md:flex-col gap-3 overflow-x-hidden text-fontText dark:text-fontTextDark">
                            {userOne ? (
                                <>
                                    <div className="flex flex-col justify-center gap-2 lg:w-96">
                                        <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                        <input
                                            readOnly
                                            type="text"
                                            value={userOne.user.name}
                                            className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center gap-2 lg:w-96">
                                        <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                        <input
                                            readOnly
                                            type="text"
                                            value={userOne.user.email}
                                            className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center gap-2 lg:w-96">
                                        <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                        <input
                                            readOnly
                                            type="text"
                                            value={userOne.user.edv}
                                            className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center gap-2 lg:w-96">
                                        <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                        <input
                                            readOnly
                                            type="text"
                                            value={userOne.user.telefone}
                                            className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12"
                                        />
                                    </div>

                                    <div className="flex flex-row gap-3">
                                        <label htmlFor="">Instrutor</label>
                                        <input type="checkbox" />
                                    </div>
                                
                                </>

                            ) : null}

                            <div className="flex justify-between md:gap-44">
                                <button onClick={toggleModalEdit} className="bg-buttonDesabled dark:bg-buttonDesabledDark rounded py-2 px-3 text-fontButton self-end">Cancelar</button>
                                <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-5 text-fontButton self-end">Salvar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>


            {/* Modal das skills */}
            <Modal height="30%" onClose={toggleModalSkill} title={"Adicionar Hardskill"} isOpen={isOpenSkill}>
                <div className="flex flex-col w-full space-y-4">
                    <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Digite a nova HardSkill:</label>
                    
                    <input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Nova skill..." className="border rounded-lg p-2 text-fontText dark:bg-backgroundDark dark:text-fontTextDark focus:ring-2 focus:blueMiddle focus:outline-none transition duration-200 ease-in-out"></input>

                    <div className="flex justify-center gap-5">
                        <button onClick={toggleModalSkill} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button onClick={addSkill} className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Adicionar</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
