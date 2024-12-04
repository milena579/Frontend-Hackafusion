import Link from "next/link";
import {ROUTES} from "@/constants/router";

interface IMenu{
    forum: string,
    projetos: string,
    discussoes: string
    perfil: string,
    sair: string

}

export const Menu:React.FC<IMenu>  = ({forum, projetos, discussoes, perfil, sair}) =>{
    return(
       <>
            <nav className="">
                <Link href={ROUTES.home}>{forum}</Link>
                <Link href={ROUTES.home}>{projetos}</Link>
                <Link href={ROUTES.home}>{discussoes}</Link>
                <Link href={ROUTES.home}>{perfil}</Link>
                <Link href={ROUTES.home}>{sair}</Link>
            </nav>
       </>
    )
}
