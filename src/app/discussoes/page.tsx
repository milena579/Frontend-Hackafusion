"use client"

import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ITopic{
    id:Number,
    name:string,
    description:string
}


export default function Discussoes (){
    const id = 2;
    const modulo = id % 3;
    console.log(modulo);

    const router = useRouter();

    const [page,setPage] = useState<string>("1");
    const [query,setQuery] = useState<string>("");
    const [maxPage,setMaxPage] = useState<boolean>(false);
    const [data,setData] = useState<ITopic[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const load = async()=>{
        await fetch(`http://localhost:8080/topic?page=${page}&size=20&query=${query}`,{
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

                if(Number(page) >= data.numPage){
                    setMaxPage(true)
                    return
                }

                setMaxPage(false)
            })
        })
    }

    const addDiscussao = async () => {
        const jwt = sessionStorage.getItem('Token');

        try {
            const response = await fetch(`http://localhost:8080/topic` , {
                method: 'POST',
                headers: {
                    Authorization: `${jwt}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${name}`,
                    description: `${description}`
                }),
            });
            console.log(response);
            toggleModal();
            load();
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    useEffect(()=>{
        console.log(sessionStorage.getItem("Token"))
        load();
        const admin = sessionStorage.getItem('Admin');
        setIsAdmin(admin === "true");
    },[page])

    
    return(
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
             <div className="flex flex-col p-5 items-center justify-center">
                <div className="flex flex-row gap-2 w-9/12 min-w-72 mt-5 md:gap-5 items-center">
                    <h1 className="text-fontGrey text-xl dark:text-fontGreyDark md:text-1xl">Discussões</h1>
                    <input type="text" placeholder="Pesquise o tema da discussão" className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dar: text-fontGreyDark"/>
                    <button>
                        <svg className="w-6 text-fontGrey dark:text-fontGreyDark" fill="currentColor" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.147 15.488a1.112 1.112 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.112 1.112 0 0 1 0 1.568zm-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.443 4.443 0 0 0 1.68-.327z"></path></g></svg>
                    </button>                    
                    {isAdmin ? (
                        <button onClick={addDiscussao} className="bg-buttonActivated rounded dark:bg-buttonActivatedDark py-1 px-5 w-28 hover:bg-buttonActivatedHoverDark transition-colors duration-200">
                            <h2 className="text-fontButton">Criar Discussão</h2>
                        </button>
                    ):null}
                </div>

                <div className="flex items-center justify-center mt-10 flex-col">
                    <div className="flex w-4/6 flex-wrap gap-4 items-center justify-center">
                        {data.map((item)=>{
                                let mod = Number(item.id) % 3;
                                if(mod === 0){
                                    return(<Card key={Number(item.id)} redirect={"/discussoes/"+item.id} width="250px" height="80px" cor="bg-purpleCard" title={item.name} description={item.description}></Card>)
                                }else if(mod === 1){
                                    return(<Card key={Number(item.id)} redirect={"/discussoes/"+item.id} width="250px" height="80px" cor="bg-pinkCard" title={item.name} description={item.description}></Card>)
                                }
                                return(<Card key={Number(item.id)} redirect={"/discussoes/"+item.id} width="250px" height="80px" cor="bg-greenCard" title={item.name} description={item.description}></Card>)
                            }
                        )}
                    </div>
                    {/* <div className="flex gap-5 mt-8 absolute bottom-1/4"> */}
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
            </div>
            <ChatPrivate />

            {/* Modal pra adicionar mais skills */}
            <Modal height="50%" onClose={toggleModal} title={"Adicionar Discussão"} isOpen={isOpen}>
                <div className="flex flex-col w-full space-y-4 items-center">
                    {/* <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Nome da discussão</label> */}
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite o nome da discussão..." className="mt-5 border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dar: text-fontGreyDark"/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md h-52 w-11/12 resize-none p-2 text-fontTitle dark:text-fontTitleDark dark:bg-backgroundDark"></textarea>
                    
                    <div className="flex justify-center gap-5">
                        <button onClick={toggleModal} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton" onClick={addDiscussao}>Adicionar</button>
                    </div>
                </div>
            </Modal>
            
        </>
    );
}