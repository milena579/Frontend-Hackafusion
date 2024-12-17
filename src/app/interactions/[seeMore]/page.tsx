"use client"

import { Answer } from "@/components/answer";
import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import { ProfileComponent } from "@/components/profile";
import { Question } from "@/components/question";
import SeeMore from "@/components/seeMore";
import { ROUTES } from "@/constants/routes";
import { useState } from "react";

export default function interactions() {
    const isAdmin = false;
    const isStudent = true;
    const [option, setOption] = useState(1);

    const clickQuestion = () => {
        setOption(1);
    }

    const clickAnswer = () => {
        setOption(2);
    }

    const clickDiscussions = () => {
        setOption(3);
    }


    return (
        <>
            {option == 1 ? (
                <>
                    <Menu isAdmin={false} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={isStudent} isAdmin={isAdmin} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} isOnwer={null}></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={isAdmin}>
                        <div className="flex flex-col md:px-10 items-center justify-center">
                            <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 w-full flex-wrap justify-center mt-3 items-center">

                                <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                            
                            </div>

                        </div>
                    </SeeMore>
                </>
            ) : option == 2 ? (
                <>
                    <Menu isAdmin={false} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={isStudent} isAdmin={isAdmin} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={true}>
                    <div className="flex flex-col md:px-10 items-center justify-center">
                           <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3">
                                <div className="flex flex-col items-center">
                                    <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                    <Answer redirect={`/profile/juremaLinda`} image="" name={"Creuza sla oq souza"} answer={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} breakLine={true} ></Answer>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                    <Answer redirect={`/profile/juremaLinda`} image="" name={"Creuza sla oq souza"} answer={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} breakLine={true} ></Answer>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                    <Answer redirect={`/profile/juremaLinda`} image="" name={"Creuza sla oq souza"} answer={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} breakLine={true} ></Answer>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                    <Answer redirect={`/profile/juremaLinda`} image="" name={"Creuza sla oq souza"} answer={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} breakLine={true} ></Answer>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Question forum="Java" name={"Creuza sla oq souza"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Titulo da pergunta"} ></Question>
                                    <Answer redirect={`/profile/juremaLinda`} image="" name={"Creuza sla oq souza"} answer={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} breakLine={true} ></Answer>
                                </div>

                            </div>

                        </div>
                    </SeeMore>
                </>
            ) : option == 3 ? (
                <>
                    <Menu isAdmin={false} op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={isStudent} isAdmin={isAdmin} name={"Creuza sla oq souza"} email={"creuzasoq@gmail.com"} edv={"92901234"} telefone={"(41) 995211234"} ></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={true}>
                    <div className="flex flex-col md:px-10 items-center justify-center w-full">
                           <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5 w-full">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3 w-full">
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                                <Card redirect="/discussoes/java" title={"Java"} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"></Card>
                            
                            </div>

                        </div>
                    </SeeMore>
                </>
            ): null}
            <ChatPrivate />

        </>
    )
}