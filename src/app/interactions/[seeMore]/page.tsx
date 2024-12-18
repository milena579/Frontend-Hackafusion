"use client"

import { Answer } from "@/components/answer";
import { Card } from "@/components/card";
import { ChatPrivate } from "@/components/chatPrivate";
import { Menu } from "@/components/menu";
import { ProfileComponent } from "@/components/profile";
import { Question } from "@/components/question";
import SeeMore from "@/components/seeMore";
import { ROUTES } from "@/constants/routes";
import { count } from "console";
import { useParams, useRouter } from "next/navigation";
import { it } from "node:test";
import { useEffect, useState } from "react";

interface IUser {
    id: string,
    name: string,
    edv: string,
    email: string,
    telefone: string,
    image: string,
    student: boolean,
    admin: boolean
}

interface Iforum {
    id: number,
    name: string,
    description: string
}

interface Ianwser {
    id: number,
    description: string,
    user: IUser,
    votes: { id: number, up: boolean }[]
}

interface IquestionsProfile {
    idQiestion: number,
    title: string,
    description: string,
    forum: Iforum,
    user: IUser
}

interface IAnwswerProfile {
    idQiestion: number,
    title: string,
    description: string,
    forum: Iforum,
    user: IUser,
    answer: Ianwser
}
interface Itopic {
    id: number,
    name: string,
    description: string
}

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

    ///Questions
    const params = useParams<{ seeMore: string }>()

    const [question, setQuestion] = useState<IquestionsProfile[]>([])
    const [answers, setAnswers] = useState<IAnwswerProfile[]>([])
    const [topics, setTopics] = useState<Itopic[]>([])

    const loadQuestion = async () => {
        await fetch(`http://localhost:8080/user/interactions/question/${params.seeMore}?page=1&size=5`, {
            method: "GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
            },
        }).then((res) => {
            res.json().then((item) => {
                setQuestion(item.listObject)
            })
        })
    }

    const loadAnwser = async () => {
        await fetch(`http://localhost:8080/user/interactions/anwser/${params.seeMore}?page=1&size=5`, {
            method: "GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
            },
        }).then((res) => {
            console.log(res)
            res.json().then((item) => {
                setAnswers(item.listObject)
            })
        })
    }


    const loadTopic = async () => {
        await fetch(`http://localhost:8080/user/interactions/topic/${params.seeMore}?page=1&size=5`, {
            method: "GET",
            headers: {
                'Authorization': sessionStorage.getItem("Token") as string,
            },
        }).then((res) => {
            console.log(res)
            res.json().then((item) => {
                setTopics(item.listObject)
            })
        })
    }

    useEffect(() => {
        loadQuestion()
        loadAnwser()
        loadTopic()
    }, [])

    const [error, setError] = useState<boolean>(false);

    const router = useRouter();

    const [loadData, setLoadData] = useState<boolean>(false);

    const [userData, setUserData] = useState<IUser>({
        id: "",
        name: "",
        edv: "",
        email: "",
        telefone: "",
        image: "",
        student: false,
        admin: false

    });
    useEffect(() => {
        const dataUser = async () => {
            const token = sessionStorage.getItem("Token");
            console.log(token)
            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return
            }
            try {
                const response = await fetch("http://localhost:8080/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });


                const data = await response.json();
                setUserData(data.user);
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados do usuário:", error);
                setError(true);
            }

            setLoadData(true);
        }

        dataUser();
    }, [])


    return (
        <>
            {option == 1 ? (
                <>
                    <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={userData.student} isAdmin={isAdmin} name={userData.name} email={userData.email} edv={userData.edv} telefone={userData.telefone} ></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={isAdmin}>
                        <div className="flex flex-col md:px-10 items-center justify-center">
                            <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 w-full flex-wrap justify-center mt-3 items-center">
                                {question.map((item) => {
                                    return (
                                        <Question forum={item.forum.name} name={item.user.name} question={item.description} title={item.title} ></Question>
                                    )
                                })}
                            </div>

                        </div>
                    </SeeMore>
                </>
            ) : option == 2 ? (
                <>
                    <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={userData.student} isAdmin={isAdmin} name={userData.name} email={userData.email} edv={userData.edv} telefone={userData.telefone} ></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={true}>
                        <div className="flex flex-col md:px-10 items-center justify-center">
                            <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3">
                                {answers.map((item) => {
                                    return (
                                        <div className="flex flex-col items-center">
                                            <Question forum={item.forum.name} name={item.user.name} question={item.description} title={item.title} ></Question>
                                            <Answer redirect={`/profile/${item.answer.user.id}`} image={item.answer.user.image} name={item.answer.user.name} answer={item.answer.description} breakLine={true} upVote={item.answer.votes.length} downVote={0} ></Answer>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </SeeMore>
                </>
            ) : option == 3 ? (
                <>
                    <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
                    <ProfileComponent isStudent={userData.student} isAdmin={isAdmin} name={userData.name} email={userData.email} edv={userData.edv} telefone={userData.telefone} ></ProfileComponent >
                    <SeeMore redirect={ROUTES.profile} title="Interações" button="Adicionar skill" isAdmin={true}>
                        <div className="flex flex-col md:px-10 items-center justify-center w-full">
                            <div className="flex self-start gap-3 md:gap-10 mt-5 relative mb-5 w-full">
                                <button onClick={clickQuestion} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Perguntas</button>
                                <button onClick={clickAnswer} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative hover:before:content-[''] hover:before:block hover:before:w-full hover:before:h-[2px] hover:before:bg-fontGrey dark:hover:before:bg-fontGreyDark hover:before:absolute hover:before:bottom-0">Respostas</button>
                                <button onClick={clickDiscussions} className="text-lg text-fontGrey dark:text-fontGreyDark transition-all duration-300 relative before:content-[''] before:block before:w-full before:h-[2px] before:bg-fontGrey dark:before:bg-fontGreyDark before:absolute before:bottom-0">Discussões</button>
                            </div>
                            <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3 w-full">
                                {topics.map((item) => {
                                    return (
                                        <Card redirect={`dicussoes/${item.id}`} title={item.name} width={"87vw"} height={"60px"} cor="bg-blueMiddle" description={item.description}></Card>
                                    )
                                })}
                            </div>

                        </div>
                    </SeeMore>
                </>
            ) : null}
            <ChatPrivate />

        </>
    )
}