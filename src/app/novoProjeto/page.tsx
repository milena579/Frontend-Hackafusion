"use client"

import { Menu } from "@/components/menu"
import Link from "next/link"
import { useState } from "react"
import { ROUTES } from "@/constants/routes"
import { ChatPrivate } from "@/components/chatPrivate"

export default function novoProjeto(){
    
    const [nomeProjeto, setNomeProjeto] =  useState<string>("")
    const [tema, setTema] =  useState<string>("")
    const [publico, setPublico] =  useState<boolean>()
    const [participantes, setParticipante] =  useState<string>("")
    const [descricao, setDescricao] =  useState<string>("")
    
    const CriarProjeto=  async () =>{

    }
    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>

            <div className="flex w-full flex-col items-center px-64 py-20 h-screen justify-start gap-20">
                <div className="items-center w-[90%] flex justify-center gap-10 ">
                    <div className="flex flex-col w-[40%] gap-4">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" className="border" value={nomeProjeto} onChange={(event) => {setNomeProjeto(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-[40%] gap-4">
                        <label htmlFor="tema">Tema</label>
                        <input type="text" name="tema" className="border" value={tema} onChange={(event) => {setTema(event.target.value)}} />
                    </div>
                </div>
                <div className="w-[90%] flex justify-center gap-10 ">
                    <div className="flex flex-col w-[40%] gap-4">
                        <h1>Projeto Público?</h1>
                        <div className="flex justify-around flex-wrap">
                            <div className="flex gap-6 items-center">
                                <label htmlFor="sim" className="w-10">Sim</label>
                                {/* <input type="radio" value={publico} name="sim" onChange={(event) => {setPublico(event.target.value)}}/> */}
                            </div>
                            <div className="flex gap-6 items-center">
                                <label htmlFor="nao" className="w-10">Não</label>
                                {/* <input type="radio" value={"false"} name="nao" onChange={(event) => {setPublico(event.target.value)}}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[40%] gap-4">
                        <label htmlFor="tema">Integrantes</label>
                        <input type="text" name="tema" className="border" value={participantes} onChange={(event) => {setParticipante(event.target.value)}}/> 
                    </div>
                </div>
                <div className="flex gap-4 px-24 flex-col w-[90%]">
                    <h5 className="px-2">Participantes</h5>
                    <div className="flex flex-row gap-4 flex-wrap">
                        <h5 className="border rounded-lg p-2">Nome do participante</h5>
                    </div>
                </div>
                <div className="flex gap-4 w-[90%] px-24 flex-col ">
                    <label htmlFor="descr" className="px-2">Descrição</label>
                    <div className="flex flex-col w-auto gap-4 flex-wrap">
                        <div className="w-auto px-2">
                            <textarea  className="border w-full p-2 h-28" name="descr" value={descricao}
                            onChange={(event) => {setDescricao(event.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around w-full">
                    <Link href={ROUTES.project}><button className="bg-buttonDesabled p-2 rounded w-32 text-fontButton">Voltar</button></Link>
                    <button className="bg-buttonActivated p-2 w-32 rounded text-fontButton" onClick={() => {CriarProjeto()}}>Criar Projeto</button>
                </div>
            </div>
            <ChatPrivate />

        </>
    )
}