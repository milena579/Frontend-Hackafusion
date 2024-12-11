import Image from "next/image"
import pessoa from "../../public/pessoa.jpeg";
import { CardArquivo } from "./cardArquivo";

interface IMessage {
    author: string,
    text?: string,
    file?: string,
    imagePerson?: string
}

export const Message = ({ author, text, file, imagePerson } : IMessage) => {
    console.log(file)
    return (
        <>
            <div className="flex items-center flex-col bg-blueLight dark:bg-blueLightDark p-2 rounded-md shadow max-w-3xl">
                <div className="flex items-center self-start gap-3">
                    {imagePerson ? (
                        <Image src={imagePerson} alt="logo" width={50} height={30} className="rounded-full"/>
                    ) : (
                        <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                    )}
                    <h1 className="text-fontText dark:text-fontTextDark font-semibold">{author}</h1>
                </div>
                {text ? (
                    <>
                        <p className="text-fontText dark:text-fontTextDark self-start">{text}</p>
                    </>
                ) : file ? (
                    <div className="flex pt-3 self-start">
                        {/* <Image src={file} alt="imagem"></Image> */}
                        <CardArquivo file="Arquivo"></CardArquivo>
                    </div>
                ) : null}
            </div>
        </>
    )
}