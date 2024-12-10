// "use client"

import { Menu } from "@/components/menu"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { useParams } from "next/navigation"
import pessoa from "../../../../../public/pessoa.jpeg";
import Image from "next/image"
import { Answer } from "@/components/answer"
import { ChatPrivate } from "@/components/chatPrivate"
import { Question } from "@/components/question";

interface IForum {
    params: {
        id: string
    }
}

interface IData {
    name: string,
    description: string
}

const ForumId = async ({params: {id}} : IForum) => {
    // const res = await fetch('blablablaLinkBackend');
    // const data : IData[] = (await res.json()).items // Ver qual é o nome do retorno dps e mudar o .items
    // const {redirect} = useParams() // Da erro por causa do async e do use client

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col md:p-8 p-2 items-center justify-center">
                <div className="md:flex text-fontGrey dark:text-fontGreyDark gap-5 self-start px-10 font-semibold hidden">
                    <Link href={ROUTES.forum}>
                        <h1>Fóruns</h1>
                    </Link>
                        <h1>&gt;</h1>
                        {/* <h1>{name}</h1> */}
                        {/* <h1>{redirect}</h1> */}
                    <Link href={'/foruns/java'}> {/* Arrumar para a rota certa */}
                        <h1>Nome do fórum</h1>
                    </Link>
                        <h1>&gt;</h1>
                        <h1>Pergunta</h1>
                </div>
                <div className="flex w-10/12 flex-col">
                    <Question name={"Jurema linda"} question={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatem asperiores, voluptatum odit repudiandae soluta, labore dolor fugit facilis voluptatibus suscipit. Tempora, blanditiis? Voluptatem provident necessitatibus recusandae saepe itaque sed?"} title={"Título da pergunta"} ></Question>
                    {/* <div className="mt-5 mb-3">
                        <Link href={ROUTES.profile} className="flex items-center gap-2">
                            <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full "/>
                            <h1 className="text-fontText font-semibold text-lg dark:text-fontTextDark">Jurema linda</h1>
                        </Link>
                    </div>
                    <hr /> */}
                    <div className="md:px-14 py-5">
                        {/* <h1 className="text-fontText font-semibold text-xl dark:text-fontTextDark">Título da pergunta</h1>
                        <div>
                            <p className="p-3 dark:text-fontTextDark text-fontText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae culpa perspiciatis ea ratione nisi veniam nesciunt nobis, nostrum iste aliquam, totam rem! Ducimus debitis iusto doloremque blanditiis a nesciunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero illum aliquam eaque nulla, et placeat provident velit voluptates cum dolorem natus quo suscipit inventore esse numquam vel ipsa qui.</p>
                        </div>
                        <hr /> */}

                        <div className="flex mb-8 items-center md:gap-3 gap-1 w-full">
                            <Link href={ROUTES.profile} className="flex items-center gap-2">
                                <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full md:flex hidden"/>
                            </Link>
                            <textarea name="" id="" className="border rounded-md h-15 w-11/12 resize-none p-2 text-fontTitle dark:text-fontTitleDark dark:bg-backgroundDark"></textarea>
                            {/* <input type="text" className="border rounded-md h-8 w-11/12"/> */}
                            <button> {/* Fazer a função pra integrar com o back */}
                                <svg className="w-9 text-fontTitle dark:text-fontTitleDark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </button>
                        </div>
                        <div className="flex mt-4 flex-col gap-8">
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                            <Answer breakLine={true} image="" name="Pessoa aleatória" answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus ea delectus, aspernatur necessitatibus sint repellendus harum laborum voluptas vitae ab quis nisi, iusto excepturi! Corrupti tenetur amet omnis animi."></Answer>
                        </div>
                    </div>
                </div>
            </div>
            <ChatPrivate />
        </>
    )
}

export default ForumId
