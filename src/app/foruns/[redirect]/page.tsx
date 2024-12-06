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
                <div className="flex items-center">
                    <div className="flex gap-4 flex-col items-center">
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
                        <Card cor="bg-blueLight" classTitle="font-semibold text-lg" title="Pq java é tão aaaaaaaa feio?" description="Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa Java é uma linguagem deprogramação horrível, odeio java, é péssimo, só é meio bom pra backend, mas pra qualquer outra coisa é ruim, então queria saber pq ele é tão ruim assim? aaaaaaa n sei oq escrever preciso que o texto seja longo mds quanta palavra socorro aaaaa n aguento mais vou morrer preciso de muitas palavras aaaaa" redirect={`/foruns/java/Pq java é tão feio?`} height="65" width="11/12"></Card> {/* Colocar o caminho baseado no nome do forum */}
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
        </>
    )
}

export default ForumId

