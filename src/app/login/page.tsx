"use client"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import logo from "/public/ets.png"
import {useRouter} from "next/navigation"

export default function Login() {
    const [edv, setEdv] =  useState<string>("")
    const [senha, setSenha] =  useState<string>("")
    const [error,setError] = useState<boolean>(false)

    const router = useRouter();

    const Login = async () => {
        if( edv == "" || senha == ""){
            alert("Toodos os campos devem ser preenchidos!")
            return;
        }

        try{
            const response =  await fetch ('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: edv,
                    password: senha
                })
            });

            const result = await response.json();

            if(response.status >= 400  && response.status < 500) {
                setError(true)
                setEdv("")
                setSenha("")
                console.log(result.message);
            } else{
                sessionStorage.setItem("Token", "Bearer " +  result.token)
                sessionStorage.setItem("Admin", result.admin)
                setError(false);
                setEdv("")
                setSenha("")
                
                alert(result.message)

                setTimeout(() => {
                    router.push(ROUTES.forum);
                }, 1000);
            }
        }

        catch (erro){
            setError(true)
        }
    }


    return(
        <>  
            <div className="bg-cover bg-center flex h-screen items-center justify-center" style={{backgroundImage: "url('/fundo-colorido.png')"}}>
                <div className="flex flex-col items-center bg-background h-[550px] w-[430px] justify-around p-14 text-fontText">
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
                    <button className="bg-buttonActivated p-2 w-32 text-fontButton rounded-md" onClick={() => {Login()}}>Entrar</button>
                    <Link href={ROUTES.cadastrar}> Criar conta</Link>
                </div>
            </div>
        </>
    )
}