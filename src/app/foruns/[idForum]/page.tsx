"use client"

import { Card } from "@/components/card"
import { ChatPrivate } from "@/components/chatPrivate"
import { Menu } from "@/components/menu"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { useParams } from "next/navigation"
import router from "next/router"
import { useEffect, useState } from "react"

interface IForum {
    id: number,
    name: string,
    description: string
}

interface IQuestion {
    id            : number,
    title         : string,
    description   : string,
    answers         : null,
    user : 
    {
        id        : string,
        name      : string,
        edv       : string,
        email     : string,
        telefone  : string,
        image     : string,
        student   : boolean,
        admin     : boolean
    },
    forum : IForum
}

const ForumId = () => {

    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [forum,setForum] = useState<IForum>()
    const params = useParams<{idForum:string}>()
    const [page,setPage] = useState<string>("1");
    const [maxPage,setMaxPage] = useState<boolean>(false);


    const loadForum = async()=>{
        await fetch(`http://localhost:8080/forum/${params.idForum}`,{
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

                setForum(data)
            })
        })
    }

    
    const loasQuestions = async() => {
        await fetch(
            `http://localhost:8080/question?idForum=${params.idForum}&page=${page}&size=${10}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': sessionStorage.getItem("Token") as string
                }
            }
        ).then(
            (res) => {
                if(res.status === 403){
                    router.push(ROUTES.login)
                }
                res.json().then((data) =>{

                    setQuestions(data.listObject);

                if(Number(page) >= data.numPage){
                    setMaxPage(true)
                    return
                }

                setMaxPage(false)
                })
            }
        )
    }


    useEffect(() => {
        console.log(params.idForum)
        loadForum()
        loasQuestions();
    },[page])
    

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col p-8 items-center justify-center">
                <div className="flex text-fontGrey dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.forum}>
                        <h1>Fóruns</h1>
                    </Link>
                        <h1>&gt;</h1>
                        {/* <h1>{name}</h1> */}
                        {/* <h1>{redirect}</h1> */}
                        <h1>{forum?.name}</h1>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-4 flex-col items-center">

                        {
                            questions.map((item) => {
                                return(
                                    <Card 
                                    key={item.id}
                                    cor="bg-blueLight" 
                                    classTitle="font-semibold text-lg" 
                                    title={`${item.title}`}
                                    description={`${item.description}`} 
                                    redirect={`/foruns/${params.idForum}/${item.id}`} height="80px" width="70vw"></Card> 
                                )
                            })
                        }

                    </div>
                </div>
                <div className="flex gap-5 mt-8">
                    {Number(page)>1&&
                        <button className="bg-buttonDesabled py-1 px-5 w-28 cursor-default" onClick={()=>{setPage(String(Number(page)-1))}}>
                            <h2 className="text-fontButton" >Voltar</h2>
                        </button>
                        }
                        {Number(page)<=1&&
                        <button className="bg-buttonDesabled py-1 px-5 w-28 cursor-default" disabled>
                            <h2 className="text-fontButton" >Voltar</h2>
                        </button>
                        }
                        {maxPage&&
                            <button className="bg-buttonActivated dark:bg-buttonActivatedDark py-1 px-5 w-28 hover:bg-buttonActivatedHoverDark transition-colors duration-200" disabled>
                                <h2 className="text-fontButton">Avançar</h2>
                            </button>
                        }
                        {!maxPage&&
                            <button className="bg-buttonActivated dark:bg-buttonActivatedDark py-1 px-5 w-28 hover:bg-buttonActivatedHoverDark transition-colors duration-200" onClick={()=>{setPage(String(Number(page)+1))}}>
                                <h2 className="text-fontButton">Avançar</h2>
                            </button>
                    }
                </div>
            </div>
            <ChatPrivate />

        </>
    )
}

export default ForumId

