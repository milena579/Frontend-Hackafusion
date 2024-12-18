"use client"
import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import SeeMore from "@/components/seeMore";
import { Skill } from "@/components/skills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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


export default function Feedbacks() {
    const isAdmin = false;
    const isStudent = true;
    const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
    });
const [error,setError] = useState<boolean>(false);
    
    const router = useRouter();
    
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
    // Função para alternar o estado de favorito de um card específico
    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id], // Alterna o estado do favorito para o card específico
        }));
    };


    
    
    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isStudent={userData.user.student} isAdmin={isAdmin} name={userData.user.name} email={userData.user.email} edv={userData.user.edv} telefone={userData.user.telefone} ></ProfileComponent >
            <SeeMore redirect={ROUTES.profile} title="Feedbacks" button="Adicionar skill" isAdmin={true}>
                <div className="flex gap-3 flex-wrap justify-center mt-3 items-center w-full">
                    <Card star={true} favorite={favorites[1]} toggleFavorite={() => toggleFavorite(1)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                </div>
            </SeeMore>
            <ChatPrivate />

        </>
    )
}