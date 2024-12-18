import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./modal";
import pessoa from "../../public/pessoa.jpeg";
import { tree } from "next/dist/build/templates/app-page";
import { stdout } from "process";

interface IProfile {
    image?: string;
    name: string;
    email: string;
    edv: string;
    telefone: string;
    isAdmin: boolean;
    isStudent: boolean;
    isOnwer?: boolean;
    createChat?: () => void;
}

export const ProfileComponent = ({ image, name, email, edv, telefone, isAdmin,isOnwer, createChat }: IProfile) => {

    //colocar o get de coisas do perfil aqui
    
    const [nameUse,setName] = useState<string>(name);
    const [emailUse, setEmail] = useState<string>(email);
    const [edvUse, setEdv] = useState<string>(edv);
    const [telefoneUse, setTel] = useState<string>(telefone);
    const [adminUse, setAdm] = useState<boolean>(isAdmin);
    const [imageUse, setImage] = useState<File>();
 
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [position, setPosition] = useState(1);
    
    const toggleEdit = () => setIsOpenEdit(!isOpenEdit);

    const [error,setError] = useState<boolean>(false);

    // const [imageSelected,setImageSelected] = useState<FileList | null>(null);

    // const uploadImage = (files: FileList) =>{
       
    //     if(files.length > 0){ 
    //         setImage(files[0]);
    //     }
    // }

    const editProfile = async () => {
        console.log(nameUse);

        const token = sessionStorage.getItem("Token");

        if (!token) {
            alert("Token não encontrado. Faça login novamente.");
            return;
        }

        try {
            // const formData = new FormData();

            // formData.append("name", nameUse);
            // formData.append("email", emailUse);
            // formData.append("EDV", edvUse);
            // formData.append("phone", telefoneUse);
            // formData.append("student", adminUse.toString());
    
            // if (imageUse) {
            //     formData.append("file", imageUse);
            // }

            const response =  await fetch("http://localhost:8080/user", {
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: token
                },
                body: JSON.stringify(
                    {
                        name: nameUse,
                        email: emailUse,
                        EDV: edvUse,
                        phone: telefoneUse,
                        student: adminUse
                    }
                )
            });

            console.log(nameUse);
            if(!response.ok){
                alert(response.status)
                setError(true);
            }
            else{
                alert("Perfil atualizado com sucesso!")
                setError(false)
            }


        } catch (error) {
            console.log("Erro ao atualizar os dados do usuário:", error);
            alert("Erro ao atualizar os dados.");
            setError(true);
        }
    
    } 
    return (
        <>
            <div className="bg-blueLight dark:bg-blueLightDark w-screen md:flex-row flex-col flex items-center justify-around md:p-3 md:py-8 mt-10">
                <div className="flex items-center justify-center flex-col md:w-4/12">
                    <Image src={image || pessoa} alt="profile" width={100} height={100} className="rounded-full w-64 p-3" priority />
                    {isOnwer ? (
                        <button onClick={toggleEdit} className="bg-buttonActivated dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-3 text-fontButton" >
                            Editar perfil
                        </button>
                    ) : !isAdmin ? (
                        <button onClick={createChat} className="bg-buttonActivated dark:hover:bg-buttonActivatedHoverDark transition-colors duration-300 dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-3 text-fontButton" >
                            Criar chat
                        </button>
                    ) : null}
                </div>
                <div className="md:w-6/12 w-full p-3 items-center flex flex-col justify-center md:gap-3">
                    {!isOnwer && (
                        <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-3 text-fontButton self-end m-4 md:m-0">
                            Feedback
                        </button>
                    )}

                    {position == 1 ? (
                        <div className="flex flex-col justify-center mx-3 lg:w-56 self-center">
                            <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Cargo</h1>
                            <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">Aprendiz</h2>
                        </div>
                    ) : position == 2 ? (
                        <div className="flex flex-col justify-center mx-3 lg:w-56 self-center">
                            <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Cargo</h1>
                            <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">Instrutor</h2>
                        </div>
                    ) : position == 3 ? (
                        <div className="flex flex-col justify-center mx-3 lg:w-64 self-center">
                            <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Cargo</h1>
                            <h2 className="text-fontTitle dark:text-fontTitleDark md:text-lg">Ex-Aprendiz</h2>
                        </div>
                    ) : null}
                    <div className="flex flex-row">

                        


                        <div className="flex flex-col w-full px-5 justify-center">
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                <h2 className="text-fontTitle dark:text-fontTextDark md:text-lg">{name}</h2>
                            </div>
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                <h2 className="text-fontTitle dark:text-fontTextDark md:text-lg">{email}</h2>
                            </div>
                            
                        </div>

                        <div className="flex flex-col w-full px-5 justify-center">
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                <h2 className="text-fontTitle dark:text-fontTextDark md:text-lg">{edv}</h2>
                            </div>
                            <div className="flex flex-col justify-center lg:w-56">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                <h2 className="text-fontTitle dark:text-fontTextDark md:text-lg">{telefone}</h2>
                            </div>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de editar perfil */}
            <Modal isOpen={isOpenEdit} onClose={toggleEdit} title="Editar perfil">
                <div className="flex overflow-auto flex-col justify-center items-center">
                {/* <input type="file" id="myFileField" onChange={(event) => {setImageSelected(event.target.files)}}/> */}
                {/* <button onClick={() =>{if(imageSelected!==null){uploadImage(imageSelected)}}}>Upload image</button> */}
                    <Image src={image || pessoa} alt="profile" width={100} height={100} className="rounded-full w-52 p-3" priority />

                    <div className="flex justify-center items-center text-fontText dark:text-fontTextDark">
                        <div className="flex flex-col w-full px-4 justify-center md:items-center md:flex-col gap-3 overflow-x-hidden">

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Nome</h1>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dark:text-fontTextDark"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Email</h1>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dark:text-fontTextDark"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">EDV</h1>
                                <input
                                    type="text"
                                    value={edv}
                                    onChange={(e) => {setEdv(e.target.value)}}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dark:text-fontTextDark"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-2 lg:w-96">
                                <h1 className="text-fontTitle dark:text-fontTitleDark text-xl font-semibold md:text-2xl">Telefone</h1>
                                <input
                                    type="text"
                                    value={telefone}
                                    onChange={(e) => {setTel(e.target.value)}}
                                    className="border-b-2 border-b-fontGreyDark focus:border-b-fontGrey focus:outline-none transition-colors duration-300 bg-background dark:bg-backgroundDark w-11/12 dark:text-fontTextDark"
                                />
                            </div>

                            <div className="flex flex-row gap-3">
                                <label htmlFor="" className="dark:text-fontTextDark">Atualmente Aprendiz</label>
                                <input type="checkbox" />
                            </div>

                            <button className="bg-buttonRed dark:bg-buttonRedDark hover:bg-buttonRedHover rounded py-2 px-3 text-fontButton">
                                Mudar senha
                            </button>

                            <div className="flex justify-between md:gap-44">
                                <button className="bg-buttonDesabled dark:bg-buttonDesabledDark rounded py-2 px-3 text-fontButton self-end">Cancelar</button>
                                <button className="bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-5 text-fontButton self-end" onClick={editProfile}>Salvar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
