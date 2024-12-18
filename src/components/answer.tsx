import Image from "next/image";
import pessoa from "../../public/pessoa.jpeg";
import Link from "next/link";

interface IAnswer {
    name: string,
    image?: string,
    answer: string,
    breakLine: boolean,
    upVote: number,
    downVote: number,
    redirect: string
}

export const Answer = ({ name, image, answer, breakLine, upVote, downVote, redirect } : IAnswer) => {
    return (
        <>
        <div className="flex">
            <div className="md:self-center">
                <button>
                    <svg className="w-9 text-fontGrey dark:text-fontGreyDark hover:fill-greyOpacity hover:text-fontGreyDark fill-none" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 7.41992L3 17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992Z" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                <button>
                    <svg className="w-9 text-fontGrey dark:text-fontGreyDark hover:fill-greyOpacity hover:text-fontGreyDark fill-none" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 7.41992L3 17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992Z" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
            </div>
            <div className="flex gap-2 flex-col px-1">
                <Link href={`${redirect}`} className="flex items-center gap-3">
                    {image != null ? (
                        <Image src={image} loader={()=>image} alt="pessoa" width={50} height={30} className="rounded-full"></Image>
                    ) 
                    : (
                            <Image src={pessoa} alt="pessoa" width={50} height={30} className="rounded-full"></Image>
                        )}
                    <h1 className="text-fontText font-semibold text-lg dark:text-fontTextDark">{name}</h1>
                </Link>
                <div>
                    <p className="text-fontText dark:text-fontTextDark">{answer}</p>
                </div>
                <div>
                    {/* <p className="text-fontText dark:text-fontTextDark">Up: {upVote}</p>
                    <p className="text-fontText dark:text-fontTextDark">Down: {downVote}</p> */}
                </div>
                {breakLine ? <hr /> : <></>}
            </div>
        </div>
        </>
    )
}