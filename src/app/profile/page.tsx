"use client"

import { Menu } from "@/components/menu";
import pessoa from "../../../public/pessoa.jpeg";
import Image from "next/image";
import { Skill } from "@/components/skills";
import { Card } from "@/components/card";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";
import { CardProjeto } from "@/components/cardProject";

interface IUser{
    isOwner   : boolean,
    user      :
    {
        id        : string,
        name      : string,
        edv       : string,
        email     : string,
        telefone  : string,
        image     : string,
        student   : boolean,
        admin     : boolean
    }
}

interface ICareerandSkill {
    id    : number,
    name  : string
}

interface ICareersSkills{
    numPage       : number,
    listObject    : ICareerandSkill[]
    
}
interface IFeedback{
    id : number,
    userReceiver : IUser,
    userSender: IUser,
    description : string,
    isPrivate : boolean
}

interface IListPageFeed{
    numPage       : number,
    listObject    : IFeedback[]
}

interface IProject{
    id:number,
    name:string,
    description:string
    category:string
}


export default function Profile() {
    const [isOpenHardskills, setIsOpenHardskills] = useState(false);
    const [isOpenFocoCarreira, setIsOpenFocoCarreira] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const isAdmin = true;
    const [error,setError] = useState<boolean>(false);

    const [loadData, setLoadData] = useState<boolean>(false);
    const [loadCarrer, setLoadCareer] =useState<boolean>(false);
    
    const [userData, setUserData] = useState<IUser>({
        isOwner   : false,
        user      :
        {
            id        : "",
            name      : "",
            edv       : "",
            email     : "",
            telefone  : "",
            image     : "",
            student   : false,
            admin     : false
        }
    });
    
    const [carrerData, setCarrerData] = useState<ICareersSkills>({
        numPage       : 0,
        listObject    : []
    })
    const [skillData, setSkillData] = useState<ICareersSkills>({
        numPage       : 0,
        listObject    : []
    })

    const toggleHardskills = () => {
        setIsOpenHardskills(!isOpenHardskills);
    }

    const toggleFocoCarreira = () => {
        setIsOpenFocoCarreira(!isOpenFocoCarreira);
    }

    const [type,setType] = useState<string>("others")
    const [page,setPage] = useState<string>("1");
    const [query,setQuery] = useState<string>("");
    const [maxPage,setMaxPage] = useState<boolean>(false);
    const [data,setData] = useState<IProject[]>([]);
    const [feedback,setFeedback] = useState<IListPageFeed>({
        numPage       : 0,
        listObject    : []
    })

    const router = useRouter();

    useEffect(() => {
        const dataUser =  async () => {
            
            const token = sessionStorage.getItem("Token");
            // console.log(token)
            if(!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return
            }
            try {
                const response =  await fetch ("http://localhost:8080/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });

                // console.log(response);
    
                const data: IUser = await response.json();
                setUserData(data);
                // console.log(userData.user.name)
                setError(false)
                
            } catch (error) {
                console.log("Erro ao buscar os dados do usuário:", error);
                setError(true);
            }

            setLoadData(true);
        }

        dataUser();
    }, [])

    useEffect(() => {
        const dataCareer = async () => {

            const token = sessionStorage.getItem("Token");
            
            if(!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response =  await fetch ("http://localhost:8080/career/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });
    
                const data: ICareersSkills = await response.json();
                setCarrerData(data);
                setError(false)
                
            } catch (error) {
                console.log("Erro ao buscar os dados de carreira:", error);
                setError(true);
            }

            setLoadCareer(true);
        }
        dataCareer();
    }, [])

    useEffect(() => {
        const dataSkills = async () => {

            const token = sessionStorage.getItem("Token");
            
            if(!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response =  await fetch ("http://localhost:8080/ability/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });
    
                const data: ICareersSkills = await response.json();
                setSkillData(data);
                setError(false)
                
            } catch (error) {
                console.log("Erro ao buscar os dados de carreira:", error);
                setError(true);
            }

            setLoadCareer(true);
        }
        dataSkills();
        console.log(userData.isOwner)
    }, [])

    const loadProject = async()=>{
        await fetch(`http://localhost:8080/project/me?page=&size=7&query=`,{
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

                setData(data.listObject);

                if(Number(page) > data.numPage){
                    setMaxPage(true)
                    return
                }

                setMaxPage(false)
            })
        })
    }

    const loadFeedback = async()=>{
        await fetch(`http://localhost:8080/user/feedback`,{
            method:"GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string
            }
        })
        .then((res)=>{
            if(res.status === 403){
                router.push(ROUTES.login)
            }
            
            res.json().then((feedback)=>{

                setFeedback(feedback.listObject);

                if(Number(page) > feedback.numPage){
                    setMaxPage(true)
                    return
                }

                setMaxPage(false)
            })
        })
    }
    useEffect(()=>{
        loadProject(),
        loadFeedback()
    },[page,query])


    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões" isAdmin={false}></Menu>
            {loadData && <ProfileComponent isAdmin={isAdmin} name={userData.user.name} email={userData.user.email} edv={userData.user.edv} telefone={userData.user.telefone} isStudent={false} isOnwer={userData.isOwner}  ></ProfileComponent >}

            <div className="flex flex-col w-full p-3 items-center gap-5">
                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                <div className="flex flex-row w-full items-center justify-center">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl flex items-center justify-center gap-3">
                        Focos de carreira
                        {/* {isAdmin && (
                            <button onClick={toggleHardskills}>
                                <svg className="w-8 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </button>
                        )} */}
                    </h1>
                </div>
                    <div className="flex flex-wrap gap-2 md:gap-5 just{ify-center">
                        {loadCarrer && carrerData.listObject.map((item) => {
                            return(
                                <Skill key={item.id} cor={"blueLight"} title={item.name} ></Skill>
                            )
                        })}
                        <Link href={'/focoCarreira/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded py-2 px-4 text-fontButton">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl flex items-center justify-center gap-3">
                        HardSkills
                        {/* {isAdmin && (
                            <button onClick={toggleFocoCarreira}>
                                <svg className="w-8 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </button>
                        )} */}
                    </h1>
                    <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
                         {loadCarrer && skillData.listObject.map((item) => {
                            return(
                                <Skill key={item.id} cor={"blueLight"} title={item.name}></Skill>
                            )
                        })}
                        <Link href={'/hardskills/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 rounded py-2 px-4 text-fontButton">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Projetos</h1>
                    <div className="flex flex-col items-center justify-center gap-5 w-full">
                        {data.map((item) => {
                            return(
                                
                                <Card key={item.id} title={item.name} width={"90%"} height={"60px"} cor="bg-blueLight" redirect={"/project/"+item.id} description={item.category}></Card>
                            );

                        })}
                        <Link href={'/projects/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>
                    </div>
                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Feedbacks em destaque</h1>
                    {feedback.listObject.map((item) => {
                            return(
                                <Card key={item.id} star={true} title={item.userSender.user.name} height="130px" width="40vw" cor="bg-blueLight" description={item.description}></Card>
                            );

                    })}
                    <Link href={'/feedbacks/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>

                </div>

                <div className="flex flex-col w-10/12 border items-center rounded p-2 gap-4">
                    <h1 className="text-fontTitle dark:text-fontTitleDark font-semibold text-xl md:text-2xl">Interações recentes</h1>
                    <Card classExtra="cursor-default" cor="bg-blueLight" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Comentou: Esse projeto é muito legal, adoro ele, poderiam ter mais como esse!" height="65px" width="75vw"></Card> {/* Colocar o caminho baseado no nome do forum */}

                    <Link href={'/interactions/creuza sla oq souza'} className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300">Ver mais</Link>

                </div>
            </div>


            <Modal isOpen={isOpenHardskills} onClose={toggleHardskills} title="Adicionar hardskills">

            </Modal>

            <Modal isOpen={isOpenFocoCarreira} onClose={toggleFocoCarreira} title="Adicionar Foco de Carreira">
                
            </Modal>

        </>
    )
}