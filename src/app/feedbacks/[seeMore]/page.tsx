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
import { useState } from "react";

export default function Feedbacks() {
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

    // Função para alternar o estado de favorito de um card específico
    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id], // Alterna o estado do favorito para o card específico
        }));
    };

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isAdmin={true} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
            <SeeMore redirect={ROUTES.profile} title="Feedbacks" button="Adicionar skill" isAdmin={true}>
                <div className="flex gap-3 flex-wrap justify-center mt-3 items-center w-full">
                    <Card star={true} favorite={favorites[1]} toggleFavorite={() => toggleFavorite(1)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[2]} toggleFavorite={() => toggleFavorite(2)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[3]} toggleFavorite={() => toggleFavorite(3)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[4]} toggleFavorite={() => toggleFavorite(4)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[5]} toggleFavorite={() => toggleFavorite(5)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[6]} toggleFavorite={() => toggleFavorite(6)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[7]} toggleFavorite={() => toggleFavorite(7)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[8]} toggleFavorite={() => toggleFavorite(8)} image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[9]} toggleFavorite={() => toggleFavorite(9)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[10]} toggleFavorite={() => toggleFavorite(10)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                    <Card star={true} favorite={favorites[11]} toggleFavorite={() => toggleFavorite(11)}  image="" classTitle="font-semibold text-lg" title="Latonildo de Monster" description="Amei trabalhar com você, você é uma pessoa incrível, deveriamos fazer mais projetos juntos!" height="130px" width="40vw"></Card>
                </div>
            </SeeMore>
            <ChatPrivate />

        </>
    )
}