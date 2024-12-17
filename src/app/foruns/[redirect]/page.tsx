"use client"

import { Card } from "@/components/card"
import { ChatPrivate } from "@/components/chatPrivate"
import { Menu } from "@/components/menu"
import Modal from "@/components/modal"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

interface IForum {
    params: {
        id: string
    }
}

interface IData {
    name: string,
    description: string
}

const ForumId = ({params: {id}} : IForum) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    // const res = await fetch('blablablaLinkBackend');
    // const data : IData[] = (await res.json()).items // Ver qual é o nome do retorno dps e mudar o .items
    // const {redirect} = useParams() // Da erro por causa do async e do use client

    return (
        <>
            <Menu  op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>
            <div className="flex flex-col p-8 items-center justify-center">
                <div className="flex text-fontGrey dark:text-fontGreyDark gap-5 self-start px-10 font-semibold">
                    <Link href={ROUTES.forum}>
                        <h1>Fóruns</h1>
                    </Link>
                        <h1>&gt;</h1>
                        {/* <h1>{name}</h1> */}
                        {/* <h1>{redirect}</h1> */}
                        <h1>Nome do fórum</h1>
                </div>
                <div>
                    <button onClick={toggleModal} className="bg-buttonActivated py-1 px-5 hover:bg-buttonActivatedHoverDark transition-colors duration-200 rounded shadow">
                        <h2 className="text-fontButton">Fazer pergunta</h2>
                    </button>
                </div>
                <div className="flex items-center mt-3">
                    <div className="flex gap-4 flex-col items-center">
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão aaaaaaaa feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="80px" width="70vw"></Card> {/* Colocar o caminho baseado no nome do forum */}
                    </div>
                </div>
                <div className="flex gap-5 mt-8">
                    <button className="bg-buttonDesabled py-1 px-5 w-28 cursor-default">
                        <h2 className="text-fontButton">Voltar</h2>
                    </button>
                    <button className="bg-buttonActivated py-1 px-5 w-28 hover:bg-buttonActivatedHoverDark transition-colors duration-200">
                        <h2 className="text-fontButton">Avançar</h2>
                    </button>
                </div>
            </div>
            <ChatPrivate />


            {isOpen && (
                <Modal height="50%" onClose={toggleModal} title={"Fazer uma pergunta"} isOpen={isOpen}>
                    <div className="flex flex-col w-full space-y-4 gap-2 py-6">
                        <div>
                            <input type="text" placeholder="Digite o título da pergunta" className="text-fontText dark:text-fontTextDark border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-full"/>
                        </div>
                        <div className="h-[230px]">
                            <textarea id="messageTextarea" placeholder="Escreva aqui sua pergunta..." className="mt-2 w-4/5 md:w-full h-full rounded-md focus:outline-none min-h-5/6 focus:ring-2 focus:ring-blueLight dark:focus:ring-blueLightDark p-3 text-fontText dark:text-fontTextDark resize-none dark:bg-cardDark transition-all duration-200"></textarea>
                        </div>
                        <div className="flex justify-center gap-5">
                            <button onClick={toggleModal} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                            <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton">Adicionar</button>
                        </div>
                    </div>
                </Modal>
            )}

        </>
    )
}

export default ForumId

