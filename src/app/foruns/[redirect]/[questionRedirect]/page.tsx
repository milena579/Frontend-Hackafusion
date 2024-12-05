// "use client"

import { Card } from "@/components/card"
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
    // const {redirect} = useParams() // Da erro por causa do async e do use client

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            aaaaaaaaaaaaaaaaaaa
        </>
    )
}

export default ForumId

