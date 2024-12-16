"use client"

import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/routes"
import { ChatPrivate } from "@/components/chatPrivate";
import { useEffect, useState } from "react";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";

interface IProject{
    id:Number,
    name:string,
    description:string
    category:string
}


export default function Projeto(){

    const router = useRouter();
    
    const [type,setType] = useState<string>("others")
    const [option, setOption] = useState(1);
    const [page,setPage] = useState<string>("1");
    const [query,setQuery] = useState<string>("");
    const [maxPage,setMaxPage] = useState<boolean>(false);
    const [data,setData] = useState<IProject[]>([]);


    const loadProject = async()=>{
        await fetch(`http://localhost:8080/project/${type}?page=${page}&size=7&query=${query}`,{
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

                setData(data.listObject);

                if(Number(page) > data.numPage){
                    setMaxPage(true)
                    return
                }

                setMaxPage(false)
            })
        })
    }

    useEffect(()=>{
        loadProject()
    },[option,page])

    const clickProject = () => {
        setType("others")
        setOption(1);
    }
    
    const clickMyProject = () => {
        setType("me")
        setOption(2);
    }

    const toggleModal = () => {
        
    }

    return(
        <>
        
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex px-16 items-center flex-col gap-4">
                <div className="flex items-center w-8/12 py-8 px-14 justify-center ">
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    <input className="w-full flex border-b-2 focus:outline-none p-2 dark:text-fontTextDark dark:bg-backgroundDark" placeholder="Digite a categoria que deseja" type="text" value={query} onChange={(e)=>{setQuery(e.target.value);setPage("1");loadProject()}}/>
                    <svg className="w-9 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M20 4H4v2l6 6v8.5l4-2.5v-6l6-6V4z"></path> </g></svg>
                </div>

                {option == 1 ? (
                    <>
                        <div className="flex justify-content w-8/12 px-14 justify-between">
                            <div className="flex gap-10  dark:text-fontTextDark">
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                            {/* <Link href={ROUTES.novoProjeto}><button className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton" >Novo Projeto</button></Link> */}
                        </div>
                        <div className="flex flex-col w-9/12 items-center px-14 gap-3">
                            {data.map((item)=>{
                                return(
                                    <Card title={item.name} width={"90%"} height={"60px"} cor="bg-blueLight" redirect={"/project/"+item.id} description={item.category}></Card>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-content w-8/12 px-14 justify-between">
                            <div className="flex gap-10  dark:text-fontTextDark">
                            <button onClick={clickProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Todos os projetos</button>
                            <button onClick={clickMyProject} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Meus projetos</button>
                            </div>
                            <button onClick={toggleModal} className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton">Novo projeto</button>
                            {/* <Link href={ROUTES.novoProjeto}><button className="p-2 bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded text-fontButton" >Novo Projeto</button></Link> */}
                        </div>
                        <div className="flex flex-col w-9/12 items-center px-14 gap-3">
                            {data.map((item)=>{
                                    return(
                                        <Card title={item.name} width={"90%"} height={"60px"} cor="bg-blueLight" redirect={"/project/"+item.id} description={item.category}></Card>
                                    )
                            })}
                        </div>
                    </>
                )}

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