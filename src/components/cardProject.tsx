import Link from "next/link"
import { ROUTES } from "@/constants/routes"

interface ICardProjeto {
    nome: string
    categoria: string
}

export const CardProjeto = ({nome, categoria} : ICardProjeto) => {
    return (
        <div className="flex flex-row w-[90%] items-center border p-4 text-lg justify-around">
            <p className="w-[70%]">{nome}</p>
            <p className="w-[30%] flex justify-center flex-row">{categoria}</p>
            <Link href={ROUTES.project}></Link>
        </div>
    )
} 