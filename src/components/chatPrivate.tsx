"use client";

import { useEffect, useState } from "react";
import { Card } from "./card";
import { CardChat } from "./cardChat";
import { ChatPerson } from "./chatPerson";
import { Message } from "./message";
import axios from "axios";

interface IUser {
    id: number,
    name: string,
    edv: string,
    email: string,
    telefone: string,
    image: string,
    student: boolean,
    admin: boolean
}

export const ChatPrivate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPerson, setIsOpenPerson] = useState(false);
    const [searchPerson, setSearchPerson] = useState('');
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [userArray, setUserArray] = useState<IUser[]>([]);
    
    const openChat = () => {
        setIsOpen(!isOpen);
    }
    const openChatPerson = () => {
        setIsOpenPerson(!isOpenPerson);
    }

    const sendFile = () => {
        console.log('Arquivo enviado!')
    }

    const sendMessage = () => {
        console.log('Mensagem enviada!')
    }

    useEffect (() => {
        const getAllUsers = async () => {
            const jwt = sessionStorage.getItem('Token');
    
            try {
                const response = await axios.get(`http://localhost:8080/chat` , {
                    headers: {
                        Authorization: `${jwt}`
                    }
                });
                console.log(response.data);
                setError(false);
                setUserArray(response.data.listObject);
            } catch (error) {
                console.log("Error: ", error);
                setError(true);
                setMessageError('Erro ao buscar usuários');
            }
        };
        getAllUsers();
    }, []);



    // Requisição para a pesquisa de users
    const searchUsers = async () => {
        if (searchPerson == "") {
            // Só não envia a requisição
            return
        }

        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await axios.get(`http://localhost:8080/chat` , {
                params: {
                    page: 0,
                    size: 10000,
                    query: searchPerson
                },
                headers: {
                    Authorization: `${jwt}`
                }
            });
            console.log(response.data);
            setError(false);
        } catch (error) {
            console.log("Error: ", error);
            setError(true);
            setMessageError('Erro ao buscar usuários');
        }
    }

    return (
        <>  
            {isOpen == true && (
                <>
                    <button onClick={openChat}>
                        <div className="fixed flex flex-col p-1 items-center justify-center bottom-96 right-0 bg-blueMiddle dark:bg-blueMiddleDark h-10 md:w-96 w-72 rounded-tl-3xl shadow-md ">
                            <svg className="w-9 text-fontTextDark self-end" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> </g></svg>
                        </div>
                    </button>
                    <div className="fixed flex bottom-0 right-0 h-96 md:w-96 w-72 bg-background dark:bg-backgroundDark shadow-xl md:p-3 py-2 px-1 flex-col items-center">
                        {/* Chat da pessoa */}
                        {isOpenPerson ? (
                            <>
                                <div className="flex flex-row items-center md:w-96 w-60 px-4">
                                    <div className="flex gap-5">
                                        <button onClick={() => setIsOpenPerson(false)}>
                                            <svg className="w-7 text-fontGrey dark:text-fontGreyDark hover:scale-105 transition-transform" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <defs>
                                                        <style>{`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:28.672;}`}</style>
                                                    </defs>
                                                    <g data-name="Layer 2" id="Layer_2">
                                                        <g data-name="E416, back, Media, media player, multimedia, player" id="E416_back_Media_media_player_multimedia_player">
                                                            <circle className="cls-1" cx="256" cy="256" r="246"></circle>
                                                            <polyline className="cls-1" points="333.82 100.37 178.18 256 333.82 411.63"></polyline>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-lg">Nome da pessoa</h1>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full px-3 gap-3 overflow-auto mt-2">
                                    <ChatPerson sendFile={sendFile} sendMessage={sendMessage}>
                                        <div className="flex gap-2 flex-col">
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, consectetur! Ullam ad quae odit et vitae nobis distinctio atque officiis est? Magni, harum ducimus numquam eligendi libero debitis natus culpa?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, consectetur! Ullam ad quae odit et vitae nobis distinctio atque officiis est? Magni, harum ducimus numquam eligendi libero debitis natus culpa?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} text="olá, como vai?"/>
                                            <Message author={"Latonildo de redbull"} file="a"/>
                                        </div>
                                    </ChatPerson>
                                </div>
                            </>

                        // Exibe todos os chats disponíveis
                        ) : !isOpenPerson ? (
                            <>
                                <div className="flex flex-row items-center md:w-72 w-60">
                                    {error &&  (
                                        <h1 className="text-fontGrey text-lg dark:text-fontGreyDark md:text-lg">{messageError}</h1>
                                    )}
                                    <input value={searchPerson} onChange={(e) => setSearchPerson(e.target.value)} type="text" className="text-fontText dark:text-fontTextDark border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 h-10" placeholder="Pesquise uma pessoa"/>
                                    <button onClick={searchUsers}>
                                        <svg className="w-8 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                                    </button>
                                </div>
                                <div className="flex flex-col w-full px-3 gap-3 overflow-auto mt-2">
                                    {userArray.map((user : IUser) => (
                                        <CardChat title={user.name} height="5" width="full" redirect={openChatPerson} image={user.image} classTitle="text-fontText dark:text-fontTextDark font-semibold"></CardChat>
                                    ))}
                                </div>
                            </>
                        ): null}

                    </div>
                </>

            )}
            
            {isOpen == false && (
                <>
                    <button onClick={openChat}>
                        <div className="fixed flex flex-col p-1 items-center justify-center bottom-0 right-0 bg-blueMiddle dark:bg-blueMiddleDark md:h-10 md:w-96 w-16 h-16 rounded-full m-5 md:rounded-tl-3xl md:rounded-none md:m-0 shadow-md">
                            <svg className="w-9 text-fontTextDark md:self-end" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path> </g></svg>
                        </div>
                    </button>
                </>

            )}


            
        </>
    )
}