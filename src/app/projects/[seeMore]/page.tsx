"use client"
import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import SeeMore from "@/components/seeMore";
import { Skill } from "@/components/skills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {

    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }
    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <ProfileComponent isAdmin={true} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
            <SeeMore title="Projects" button="Adicionar skill" isAdmin={true}>
                <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3">
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                    <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend" redirect="/project/java" height="65px" width="75vw"></Card>
                </div>
            </SeeMore>
        </>
    )
}