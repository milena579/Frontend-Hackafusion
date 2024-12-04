"use client"
import { ROUTES } from "@/constants/router"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import logo from "/public/ets.png"


export default function Login() {
    const [edv, setEdv] =  useState<string>("")
    const [senha, setSenha] =  useState<string>("")

    const Logar = async () => {

    }

    return(
        <>  
            <div className="bg-cover bg-center flex h-screen items-center justify-center" style={{backgroundImage: "url('/fundo-colorido.png')"}}>
                <div className="flex flex-col items-center bg-white h-[550px] w-[430px] justify-around p-14 text-black">
                    <div className="flex ">
                        <Image src={logo} alt="logo" width={200} height={30}></Image>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <label htmlFor="edv">EDV:</label>
                        <input type="number" name="edv" className="w-full h-8 border p-2" value={edv} onChange={(event) => {setEdv(event.target.value)}} />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" className="w-full h-8 border p-2" value={senha} onChange={(event) => {setSenha(event.target.value)}} />
                    </div>
                    <button className="bg-sky-600 p-2 w-32 text-white rounded-md" onClick={() => {Logar()}}>Entrar</button>
                    <Link href={ROUTES.cadastrar}> Criar conta</Link>
                </div>
            </div>
        </>
    )
}