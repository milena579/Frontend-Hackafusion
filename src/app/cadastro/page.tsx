"use client"

import { ROUTES } from "@/constants/routes"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import logo from "/public/ets.png"


export default function Cadastro() {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [edv, setEdv] = useState<string>("");
    const [celular, setCel] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const Cadastrar =  async () => {

    }
    return(
        <>
            <div className="bg-cover bg-center flex h-screen items-center justify-center" style={{backgroundImage: "url('/fundo-colorido.png')"}}>
                <div className="flex flex-col items-center bg-background h-[750px] w-[450px] justify-around p-14 text-fontText">
                    <div className="flex ">
                        <Image src={logo} alt="logo" width={200} height={30}></Image>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" className="w-full h-8 border p-2" value={nome} onChange={(event) => {setNome(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="w-full h-8 border p-2" value={email} onChange={(event) => {setEmail(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="edv">EDV:</label>
                        <input type="number" name="edv" className="w-full h-8 border p-2" value={edv} onChange={(event) => {setEdv(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="celular">Celular:</label>
                        <input type="number" name="celular" className="w-full h-8 border p-2" value={celular} onChange={(event) => {setCel(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha:</label>
                        <input type="text" name="senha" className="w-full h-8 border p-2" value={senha} onChange={(event) => {setSenha(event.target.value)}} />
                    </div>
                    <button className="bg-buttonActivated p-2 w-32 text-fontButton rounded-md" onClick={() => {Cadastrar()}}>Cadastrar</button>
                    <Link href={ROUTES.login}>Já tenho conta</Link>
                </div>
            </div>
        </>
    )
}