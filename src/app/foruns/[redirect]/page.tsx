"use client"

import { CardForumQuestion } from "@/components/cardQuestionForum"
import { Menu } from "@/components/menu"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { useParams } from "next/navigation"

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
    const {redirect} = useParams()

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col p-8 items-center justify-center">
                <div className="flex text-fontGrey dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.forum}>
                        <h1>Fóruns</h1>
                    </Link>
                        <h1>&gt;</h1>
                        {/* <h1>{name}</h1> */}
                        <h1>{redirect}</h1>
                </div>
                <div>

                </div>

            </div>
        </>
    )
}

export default ForumId

