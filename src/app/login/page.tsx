"use client"
import { ROUTES } from "@/constants/router"
import Link from "next/link"
import { useState } from "react"


export default function Login() {
    const [edv, setEdv] =  useState<string>("")
    const [senha, setSenha] =  useState<string>("")

    const Logar = async () => {

    }

    return(
        <>
            <div className="flex flex-col items-center bg-white h-[550px] w-[450px] justify-around p-20 text-black">
                <div className="flex ">
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <label htmlFor="edv">EDV:</label>
                    <input type="text" name="edv" className="w-full h-8 border" value={edv} onChange={(event) => {setEdv(event.target.value)}} />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" name="senha" className="w-full h-8 border" value={senha} onChange={(event) => {setSenha(event.target.value)}} />
                </div>
                <button className="bg-sky-600 p-2 w-32 text-white rounded-md" onClick={() => {Logar()}}>Entrar</button>
                <Link href={ROUTES.cadastrar}> Criar conta</Link>
            </div>
        
        </>
    )
}