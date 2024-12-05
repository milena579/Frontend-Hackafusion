"use client"

import { Menu } from "@/components/menu"

export default function novoProjeto(){

    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>

            <div className="flex w-full flex-col justify-center ">
                <div className="w-full flex">
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" className="border" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tema">Tema</label>
                        <input type="text" name="tema" className="border" />
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" className="border" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tema">Tema</label>
                        <input type="text" name="tema" className="border" />
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col">
                        <label htmlFor="participantes">Participantes</label>
                        <input type="text" name="participantes" className="border" />
                    </div>
                </div>
                <div className="descricao">

                </div>
            </div>

        </>
    )
}