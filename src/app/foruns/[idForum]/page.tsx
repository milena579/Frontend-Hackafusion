"use client"

import { Card } from "@/components/card"
import { ChatPrivate } from "@/components/chatPrivate"
import { Menu } from "@/components/menu"
import Modal from "@/components/modal"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
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
    const [isOpen, setIsOpen] = useState(false);
    const [questionTitle, setQuestionTitle] = useState("")
    const [question, setQuestion] = useState("")
    const router = useRouter();
    
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const createQuestion = () => {
        if(question === "" || questionTitle === "")
            return

        fetch(`http://localhost:8080/question`, {
            method: 'POST',
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    idForum: params.idForum,
                    title: questionTitle,
                    description: question
                }
            )
        }).then((res) => {
            if(res.status === 403){
                router.push(ROUTES.login)
            }
        })
        loasQuestions();
        toggleModal();
    }

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
            `http://localhost:8080/question?idForum=${params.idForum}&page=${page}&size=${6}`,
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
                <div>
                    <button onClick={toggleModal} className="bg-buttonActivated py-1 mb-5 px-5 hover:bg-buttonActivatedHoverDark transition-colors duration-200 rounded shadow">
                        <h2 className="text-fontButton ">Fazer pergunta</h2>
                    </button>
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
            
            {isOpen && (
                <Modal height="50%" onClose={toggleModal} title={"Fazer uma pergunta"} isOpen={isOpen}>
                    <div className="flex flex-col w-full space-y-4 gap-2 py-6">
                        <div>
                            <input onChange={(e) => setQuestionTitle(e.target.value)} value={questionTitle} type="text" placeholder="Digite o título da pergunta" className="text-fontText dark:text-fontTextDark border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-full"/>
                        </div>
                        <div className="h-[230px]">
                            <textarea onChange={(e) => setQuestion(e.target.value)} value={question} id="messageTextarea" placeholder="Escreva aqui sua pergunta..." className="mt-2 w-4/5 md:w-full h-full rounded-md focus:outline-none min-h-5/6 focus:ring-2 focus:ring-blueLight dark:focus:ring-blueLightDark p-3 text-fontText dark:text-fontTextDark resize-none dark:bg-cardDark transition-all duration-200"></textarea>
                        </div>
                        <div className="flex justify-center gap-5">
                            <button onClick={toggleModal} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                            <button onClick={createQuestion} className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Enviar</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ForumId

