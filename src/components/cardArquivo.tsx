import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import Image from "next/image";

interface ICardArquivo {
    file: string,
    image?: string
}


export const CardArquivo = ({file, image} : ICardArquivo) => {

    return (
        <>
            <div className=" flex h-[150px] w-[200px] rounded-lg flex-col border justify-between bg-card dark:bg-cardDark shadow-md">
                <img width={200} height={100} src={image} alt="arquivo-image"></img>
                <div className="flex h-[30px] bg-blueMiddleDark w-full flex-row p-1 flex-wrap  rounded text-fontTextDark">
                    <h2>{file}.slaOq</h2>
                </div>
            </div>

        </>
    )
}

