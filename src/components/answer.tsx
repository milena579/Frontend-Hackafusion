import Image from "next/image";
import pessoa from "../../public/pessoa.jpeg";

interface IAnswer {
    name: string,
    image?: string,
    answer: string,
    breakLine: boolean
}

export const Answer = ({name, image, answer, breakLine} : IAnswer) => {
    return (
        <>
        <div className="flex gap-2 flex-col px-1">
            <div className="flex items-center gap-3">
                {image == null ? <p>{image}</p> : <Image src={pessoa} alt="pessoa" width={50} height={30} className="rounded-full"></Image>}
                <h1 className="text-fontText font-semibold text-lg dark:text-fontTextDark">{name}</h1>
            </div>
            <div>
                <p className="text-fontText dark:text-fontTextDark">{answer}</p>
            </div>
            {breakLine ? <hr /> : <></>}
        </div>
        </>
    )
}