"use client"

import { ChatPrivate } from "@/components/chatPrivate";
import { ChatPublico } from "@/components/chatPublico";
import { Menu } from "@/components/menu";
import { Message } from "@/components/message";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface ITopic{
    id:Number,
    name:string,
    description:string
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


export default function ChatDiscussoes(){

    const router = useRouter();

    const params = useParams<{redirect:string}>()
    
    const [topic,setTopic] = useState<ITopic>();

    const [messages,setMessages] = useState<Imessage[]>([]);


    const load = async()=>{
        await fetch(`http://localhost:8080/topic/${params.redirect}`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{
            if(res.status === 403){
                router.push(ROUTES.login)
            }
            console.log(res);
            res.json().then((data)=>{
                setTopic(data)
            })
        })
    }

    const loadChat = async()=>{
        await fetch(`http://localhost:8080/topic/${params.redirect}/message`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{     
            if(res.status===400){
                router.push(ROUTES.discosion)
            }       
            res.json().then((data)=>{
                console.log(data)
                setMessages(data.listObject)
            })
        })
    }

    useEffect(()=>{
        load()
        loadChat()
    },[])

    const sendMessage = async (message:string) => {
        await fetch(`http://localhost:8080/topic/message`,{
            method:"POST",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idTopic:topic?.id,
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

    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col md:p-8 p-3 items-center justify-center overflow-hidden md:gap-4">
                <div className="md:flex text-fontGrey hidden dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.discosion}>
                        <h1>Discussões</h1>
                    </Link>

                    <h1>&gt;</h1>

                    <h1>{topic?.name}</h1>
                </div>

                <h1 className="flex text-fontGrey md:hidden dark:text-fontGreyDark font-semibold mb-3 text-lg">{topic?.name}</h1>


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