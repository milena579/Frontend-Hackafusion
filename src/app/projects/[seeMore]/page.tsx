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

export default function Projects() {
    const isAdmin = false;
    const isStudent = true;

    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }
    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isStudent={isStudent} isAdmin={isAdmin} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
            <SeeMore redirect={ROUTES.profile} title="Projects" button="Adicionar skill" isAdmin={isAdmin}>
                <div className="flex gap-3 w-full items-center flex-wrap justify-center mt-3">
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Como faço para aprender Java?" description="Java é uma linguagem difícil de aprender, mas gostaria muito de saber por onde começar" redirect="/project/java" height="65px" width="75vw"></Card>
                </div>
            </SeeMore>
            <ChatPrivate />

        </>
    )
}