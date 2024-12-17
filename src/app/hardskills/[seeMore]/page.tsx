"use client"
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import SeeMore from "@/components/seeMore";
import { Skill } from "@/components/skills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import {useRouter} from "next/navigation"
import { useState, useEffect } from "react";


interface ISkill {
    id    : number,
    name  : string
}

interface ISkills{
    numPage       : number,
    listObject    : ISkill[]
    
}

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

export default function hardskills() {

    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [loadSkill, setLoadSkill] = useState<boolean>(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }

    const [error,setError] = useState<boolean>(false);

    const [loadData, setLoadData] = useState<boolean>(false);

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
 
    const [skillData, setSkillData] = useState<ISkills>({
        numPage: 0,
        listObject: []
    })

    const [itensSkill, setItensSkill] = useState<ISkills>({
        numPage: 0,
        listObject: []
    })

    const [opSelect, setOpSelect] = useState('');

    const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log(opSelect)
        setOpSelect(event.target.value); 

    };

    const router = useRouter();

    useEffect(() => {
        const dataUser =  async () => {
            
            const token = sessionStorage.getItem("Token");
            console.log(token)
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

                console.log(response);
    
                const data: IUser = await response.json();
                setUserData(data);
                console.log(userData.user.name)
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
        const dataSkills = async () => {
            const token = sessionStorage.getItem("Token");

            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response = await fetch("http://localhost:8080/ability/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });

                const data: ISkills = await response.json();
                setSkillData(data);
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados da habilidate:", error);
                setError(true);
            }

            setLoadSkill(true);
        }
        dataSkills();
    }, [])


    useEffect(() => {
        const itensSkills = async () => {
            const token = sessionStorage.getItem("Token");

            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response = await fetch("http://localhost:8080/ability?page=0&size=0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });

                const data: ISkills = await response.json();
                setItensSkill(data);
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados de carreira:", error);
                setError(true);
            }

            setLoadSkill(true);
        }
        itensSkills();
    }, [])

    const addSkill = async () => {
        const token = sessionStorage.getItem("Token");

        if (!token) {
            alert("Sua sessão expirou. Faça login novamente");
            router.push(ROUTES.login);
            setError(true);
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:8080/ability/user/${opSelect}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })
            window.location.reload()

            const result = await response.json();
            console.log(result.message)
        }
        catch{
            console.log("Não foi possível adicionar uma habilidade!")
        }
    }

    const apagarSkill = async (id: number) => {
        const token = sessionStorage.getItem("Token");

        if (!token) {
            alert("Sua sessão expirou. Faça login novamente");
            router.push(ROUTES.login);
            setError(true);
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:8080/ability/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })

            window.location.reload()

            const result = await response.json();
            console.log(result.message)
        }
        catch{
            console.log("Não foi possível deletar uma habilidade!")
        }
    }

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isAdmin={true} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
            <SeeMore title="HardSkills" toggleAdd={toggleAdd} button="Adicionar skill" isAdmin={true}>
                <div className="flex gap-3 w-full flex-wrap justify-center mt-3">
                    {loadSkill  && skillData.listObject.map((item) => {
                        return(
                            <Skill key={item.id} button={() => apagarSkill(item.id)} cor={"blueLight"} title={item.name} ></Skill>
                        )
                    })}
                </div>
            </SeeMore>

            {/* Modal pra adicionar mais skills */}
            <Modal height="30%" onClose={toggleAdd} title={"Adicionar Hardskill"} isOpen={isOpenAdd}>
                <div className="flex flex-col w-full space-y-4">
                    <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Opções:</label>
                    <select id="status" name="status" value={opSelect} onChange={handleChange} className="border rounded-lg p-2 text-fontText dark:bg-backgroundDark dark:text-fontTextDark focus:ring-2 focus:blueMiddle focus:outline-none transition duration-200 ease-in-out">
                    <option className="text-fontText dark:text-fontTextDark">Selecione uma hard skill</option>
                    {loadSkill && itensSkill.listObject.map((item) => {
                        return(
                            <option key={item.id} value={item.id} className="text-fontText dark:text-fontTextDark">{item.name}</option>
                        )
                    })}
                    </select>

                    <div className="flex justify-center gap-5">
                        <button onClick={toggleAdd} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton" onClick={addSkill}>Adicionar</button>
                    </div>
                </div>
            </Modal>
            <ChatPrivate />

        </>
    )
}