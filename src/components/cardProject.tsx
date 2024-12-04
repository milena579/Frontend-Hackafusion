import Link from "next/link"
import { ROUTES } from "@/constants/router"

interface ICardProjeto {
    nome: string
}

export const CardProjeto = ({nome} : ICardProjeto) => {
    return (
        <div className="flex w-[90%] items-center border p-2">
            <p>{nome}</p>
            <Link href={ROUTES.project}></Link>
        </div>
    )
} 