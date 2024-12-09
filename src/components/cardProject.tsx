import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { redirect } from "next/dist/server/api-utils"

interface ICardProjeto {
    nome: string
    categoria: string
    redirect: string
}

export const CardProjeto = ({nome, categoria, redirect} : ICardProjeto) => {
    return (
        <>
            {}
            <Link className="flex flex-row w-[90%] items-center border p-4 text-lg justify-around " href={`${redirect}`}>
                <p className="w-[70%]">{nome}</p>
                <p className="w-[30%] flex justify-center flex-row">{categoria}</p>
                {/* <Link href={ROUTES.project}></Link> */}
            </Link>
        </>
    )
} 