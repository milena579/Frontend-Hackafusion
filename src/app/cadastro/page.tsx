"use client"

import { ROUTES } from "@/constants/routes"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import logo from "/public/ets.png"

import {useRouter} from "next/navigation"

export default function Cadastro() {
    const [cadNome, setNome] = useState<string>("");
    const [cadEmail, setEmail] = useState<string>("");
    const [cadEdv, setEdv] = useState<string>("");
    const [cadCelular, setCel] = useState<string>("");
    const [cadSenha, setSenha] = useState<string>("");

    const [error,setError] = useState<boolean>(false)
    const [messageError,setMessageError] = useState<String>("")
    const router = useRouter();

    const Singup = async () => {

        if(cadNome == "" || cadEmail == "" || cadEdv == "" || cadCelular == "" || cadSenha == ""){
            alert("Todos os campos devem ser preenchidos!")
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: cadNome,
                    email: cadEmail,
                    EDV: cadEdv,
                    phone: cadCelular,
                    password: cadSenha
                })
            })


            const result = await response.json();

            if(response.status >= 400  && response.status < 500) {
                setError(true)
                console.log(result.message);
                setMessageError(result.message);
                // setNome("")
                // setEmail("")
                // setEdv("")
                // setCel("")
                // setSenha("")
            } else{
                setError(false)
                setNome("")
                setEmail("")
                setEdv("")
                setCel("")
                setSenha("")
                alert(result.message)
                router.push(ROUTES.login);
            }

        } catch (error) {
            setError(true);
            console.log("Erro ao cadastar!")
        }
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
                        <input type="text" name="nome" className="w-full h-8 border p-2" value={cadNome} onChange={(event) => {setNome(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="w-full h-8 border p-2" value={cadEmail} onChange={(event) => {setEmail(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="edv">EDV:</label>
                        <input type="number" name="edv" className="w-full h-8 border p-2" value={cadEdv} onChange={(event) => {setEdv(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="celular">Celular:</label>
                        <input type="number" name="celular" className="w-full h-8 border p-2" value={cadCelular} onChange={(event) => {setCel(event.target.value)}} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" className="w-full h-8 border p-2" value={cadSenha} onChange={(event) => {setSenha(event.target.value)}} />
                    </div>
                    {error&&<div className="text-red-600">{messageError}!</div>}
                    <button className="bg-buttonActivated p-2 w-32 text-fontButton rounded-md" onClick={() => {Singup()}}>Cadastrar</button>
                    <Link href={ROUTES.login}>Já tenho conta</Link>
                </div>
            </div>
        </>
    )
}