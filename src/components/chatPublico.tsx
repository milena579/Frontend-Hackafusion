
interface IChatPublico {
    user: string,
    message: string
}


export const ChatPublico = ({user, message} : IChatPublico) => {

    return(
        <>
            <div className="flex flex-col gap-2 p-4 max-h-[70%] min-h-[70%] w-[70%]  bottom-0 left-0  bg-bgChatBlue rounded-lg justify-between dark:bg-bgChatBlueDark dark:text-fontTextDark">
                <div className=" flex flex-col gap-2 w-[100%] text-sm p-2 overflow-auto ">
                    <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p>
                    <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p>
                    <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p> <h2 className="font-bold">{user}</h2>
                    <p className="flex flex-wrap w-full px-2">{message}</p>
                </div>
                <div className="flex flex-ro gap-4 items-center p-4  bottom-24 w-[100%] ">
                    <input type="text" className="w-full p-1 flex flex-wrap dark:bg-greyOpacityDark" />
                    <button type="button">Upload</button>
                    <button type="button">Send</button>
                </div>
            </div>

        </>
    )
}