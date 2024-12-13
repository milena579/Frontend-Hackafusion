"use client"
import { CardArquivo } from "@/components/cardArquivo";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface IProject{
    id:Number,
    name:string,
    description:string
    category:string
}

export default function VerProjeto(){

    const params = useParams<{verProjeto:string}>()

    const [showModal, setShowModal] = useState<boolean>(false);

    const router = useRouter();
    
    const [data,setData] = useState<IProject>();

    function toggleModal() {
        setShowModal(!showModal);
    }

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

    useEffect(()=>{
        loadProject()
    },[])
    
    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>

            <div className="flex items-center flex-col gap-4 justify-center md:px-28 px-10 py-14 dark:text-fontTextDark">
                <div className="md:w-full flex md:justify-between self-end">
                    <div className="md:flex text-fontGrey hidden dark:text-fontGreyDark gap-5 self-start font-semibold">
                        <Link href={ROUTES.project}>
                            <h1>Projetos</h1>
                        </Link>

                        <h1>&gt;</h1>

                        <Link href={'/project/'+data?.id}>
                            <h1>{data?.name}</h1>
                        </Link>
                    </div>

                    <Link href={'/feedbackProject/iot'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Feedback</Link>
                </div>
                <div className="w-full gap-4 h-auto flex flex-col flex-wrap">
                    <h1 className="text-2xl">{data?.category}</h1>
                    <p className="md:text-xl text-lg md:w-4/5">{data?.description}</p>
                </div>

                <div className="flex flex-col w-full gap-5">
                    {/* <div className="flex flex-col gap-3">
                        <h1 className="text-xl md:w-4/5">Arquivos</h1>
                        <div className="flex gap-2 flex-row flex-wrap md:h-[50%]">
                            <CardArquivo file="teste"></CardArquivo>
                        </div>
                    </div> */}
                    <Link href={`/project/`+data?.id+'/chat'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 w-52">
                        Ir para o projeto  
                    </Link>
                </div>
            </div>
            <ChatPrivate />

        </>
    )
}