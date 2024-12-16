"use client"


import { ChatPrivate } from "@/components/chatPrivate";
import { ChatPublico } from "@/components/chatPublico";
import { Menu } from "@/components/menu";
import { Message } from "@/components/message";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IProject{
    id:Number,
    name:string,
    description:string
    category:string
}

interface IUser{
    id:Number,
    name:string,
    edv:string,
    email:string,
    telefone:string,
    image:string,
    student:boolean
}

interface Imessage{
    id:Number,
    description:string,
    timestamp:string,
    user:IUser
}

export const chatProjeto = () => {

    const params = useParams<{verProjeto:string}>()

    const [data,setData] = useState<IProject>();
    const [messages,setMessages] = useState<Imessage[]>([]);

    const router = useRouter();


    const loadProject = async()=>{
        await fetch(`http://localhost:8080/project/${params.verProjeto}`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{
            if(res.status === 403){
                router.push(ROUTES.login)
            }
            
            res.json().then((data)=>{
                console.log(data)

                setData(data);
            })
        })
    }

    const loadChat = async()=>{
        await fetch(`http://localhost:8080/project/${params.verProjeto}/message?page=0&size=0`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{     
            if(res.status===400){
                router.push(ROUTES.project)
            }       
            res.json().then((data)=>{
                console.log(data)
                setMessages(data.listObject)
            })
        })
    }

    const sendMessage = async (message:string) => {
        await fetch(`http://localhost:8080/project/message`,{
            method:"POST",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idProject:data?.id,
                description:message
            })
        }).then((res)=>{
            if(res.status==400){
                router.push(ROUTES.login)
                return
            }

            loadChat()
            
        })
    }

    const sendFile = () => {
        console.log('Mensagem enviada!');
    }

    useEffect(()=>{
        console.log(params)
        loadProject()
        loadChat()
    },[])

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col md:p-8 p-3 items-center justify-center overflow-hidden md:gap-4">
                <div className="md:flex text-fontGrey hidden dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.project}>
                        <h1>Projetos</h1>
                    </Link>

                    <h1>&gt;</h1>

                    <Link href={'/project/'+params.verProjeto}>
                        <h1>{data?.name}</h1>
                    </Link>

                    <h1>&gt;</h1>

                    <h1>Chat</h1>
                </div>

                <h1 className="flex text-fontGrey md:hidden dark:text-fontGreyDark font-semibold mb-3 text-lg">Nome do projeto</h1>


                <div className="flex w-full justify-center">
                    <ChatPublico sendFile={sendFile} sendMessage={sendMessage}>
                        <div className="flex gap-2 flex-col">
                            {messages.map((item)=>{
                                return(
                                    <Message imagePerson={item.user.image} author={item.user.name} text={item.description}/>
                                )
                            })}
                        </div>
                    </ChatPublico>
                </div>

            </div>   
            <ChatPrivate />

        </>
    )
}

export default chatProjeto;