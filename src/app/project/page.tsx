"use client"

import { Menu } from "@/components/menu";
import { CardProjeto } from "@/components/cardProject";
import { ROUTES } from "@/constants/router"
import Link from "next/link";


export default function Projeto(){

    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex px-16 items-center flex-col gap-4">
                <div className="flex items-center w-[90%] py-8 px-14 justify-center">
                        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#080341"></path> </g></svg>

                        <input className="w-full flex border-b-2 focus:outline-none p-2" placeholder="Digite a projeto que deseja" type="text" />

                        <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z" stroke="#1C274C" stroke-width="1.5"></path> </g></svg>
                </div>

                <div className="flex justify-content w-[90%] px-14 justify-between">
                    <div className="flex gap-10">
                        <Link href={ROUTES.project} className="border-b-2" >Projetos Públicos</Link>
                        <Link href={ROUTES.project}>Meus Projetos</Link>
                    </div>
                    <Link href={ROUTES.novoProjeto}><button className="p-2 bg-emerald-400 rounded text-white" >Novo Projeto</button></Link>
                    
                </div>
                <div className="flex flex-col w-full items-center px-14">
                    <CardProjeto nome="Java" categoria="java"></CardProjeto>
                </div>
                        
            </div>
        </>
    )
}