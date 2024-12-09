import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import Image from "next/image";

interface ICardArquivo {
    titulo?: string,
    image?: string
}


export const CardArquivo = ({titulo, image} : ICardArquivo) => {

    return (
        <>
            <Link href={`${redirect}`}>
                <div className=" flex h-[150px] w-[200px] rounded-lg flex-col border justify-between">
                    <img width={200} height={100} src={image} alt="arquivo-image" ></img>
                    <div className="flex h-[30px] bg-blueMiddleDark w-full flex-row p-1 flex-wrap  rounded text-fontTextDark">
                        <h2>{titulo} Teste</h2>
                    </div>
                </div>

            </Link>
        </>
    )
}