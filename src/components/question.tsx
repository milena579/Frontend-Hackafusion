import Image from "next/image";
import pessoa from "../../public/pessoa.jpeg";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface IQuestion {
    name: string,
    image?: string,
    question: string,
    title: string,
    forum?: string
}

export const Question = ({name, image, question, title, forum } : IQuestion) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="mt-5 mb-3 flex items-center justify-between md:pr-5 pr-2">
                    <Link href={ROUTES.profile} className="flex items-center gap-2">
                    {image ? (
                        <>
                            <Image src={image} loader={() => image} alt="logo" width={50} height={30} className="rounded-full"/>
                        </>
                    ) : (
                        <>
                            <Image src={pessoa} alt="logo" width={50} height={30} className="rounded-full"/>
                        </>
                    )}
                        <h1 className="text-fontText font-semibold text-lg dark:text-fontTextDark">{name}</h1>
                    </Link>

                    {forum && (
                        <>
                            <h1 className="text-fontText font-semibold md:text-2xl text-lg dark:text-fontTextDark">{forum}</h1>
                        </>
                    )}
                </div>
                <hr />
                <div className="md:px-14 py-5">
                    <h1 className="text-fontText font-semibold text-xl dark:text-fontTextDark">{title}</h1>
                    <div>
                        <p className="p-3 dark:text-fontTextDark text-fontText">{question}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}