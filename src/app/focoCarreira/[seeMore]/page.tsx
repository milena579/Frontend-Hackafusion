"use client"
import { Menu } from "@/components/menu";
import Modal from "@/components/modal";
import { ProfileComponent } from "@/components/profile";
import SeeMore from "@/components/seeMore";
import { Skill } from "@/components/skills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";

interface IUser {
    isOwner: boolean,
    user:
    {
        id: string,
        name: string,
        edv: string,
        email: string,
        telefone: string,
        image: string,
        student: boolean,
        admin: boolean
    }
}

interface ICareer {
    id: number,
    name: string
}

interface ICareers {
    numPage: number,
    listObject: ICareer[]

}

export default function focoCarreira() {
    const isAdmin = true;
    const [loadCarrer, setLoadCareer] = useState<boolean>(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }

    const [error, setError] = useState<boolean>(false);

    const [loadData, setLoadData] = useState<boolean>(false);

    const [userData, setUserData] = useState<IUser>({
        isOwner: false,
        user:
        {
            id: "",
            name: "",
            edv: "",
            email: "",
            telefone: "",
            image: "",
            student: false,
            admin: false
        }
    });

    const [carrerData, setCarrerData] = useState<ICareers>({
        numPage: 0,
        listObject: []
    })

    const [itensCareer, setItensCareer] = useState<ICareers>({
        numPage: 0,
        listObject: []
    })

    const router = useRouter();
    const [opSelect, setOpSelect] = useState('');

    const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(opSelect)
        setOpSelect(event.target.value); 

    };

    useEffect(() => {
        const dataUser = async () => {

            const token = sessionStorage.getItem("Token");
            console.log(token)
            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return
            }
            try {
                const response = await fetch("http://localhost:8080/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });


                console.log(response);

                const data: IUser = await response.json();
                setUserData(data);
                console.log(userData.user.name)
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados do usuário:", error);
                setError(true);
            }

            setLoadData(true);
        }

        dataUser();
    }, [])


    useEffect(() => {
        const dataCareer = async () => {
            const token = sessionStorage.getItem("Token");

            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response = await fetch("http://localhost:8080/career/user/0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });

                const data: ICareers = await response.json();
                setCarrerData(data);
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados de carreira:", error);
                setError(true);
            }

            setLoadCareer(true);
        }
        dataCareer();
    }, [])


    useEffect(() => {
        const itensCareer = async () => {
            const token = sessionStorage.getItem("Token");

            if (!token) {
                alert("Sua sessão expirou. Faça login novamente");
                router.push(ROUTES.login);
                setError(true);
                return;
            }
            try {
                const response = await fetch("http://localhost:8080/career?page=0&size=0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    },
                });

                const data: ICareers = await response.json();
                setItensCareer(data);
                setError(false)

            } catch (error) {
                console.log("Erro ao buscar os dados de carreira:", error);
                setError(true);
            }

            setLoadCareer(true);
        }
        itensCareer();
    }, [])


    const addCarreira = async () => {
        const token = sessionStorage.getItem("Token");

        if (!token) {
            alert("Sua sessão expirou. Faça login novamente");
            router.push(ROUTES.login);
            setError(true);
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:8080/career/user/${opSelect}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })

            window.location.reload()

            const result = await response.json();
            console.log(result.message)
        }
        catch{
            console.log("Não foi possível adicionar uma carreira!")
        }
    }

    const apagarCarreira = async (id: number) => {
        const token = sessionStorage.getItem("Token");

        if (!token) {
            alert("Sua sessão expirou. Faça login novamente");
            router.push(ROUTES.login);
            setError(true);
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:8080/career/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })

            window.location.reload()

            const result = await response.json();
            console.log(result.message)
        }
        catch{
            console.log("Não foi possível deletar uma carreira!")
        }
    }

    return (
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões" ></Menu>
            {loadData && <ProfileComponent isAdmin={isAdmin} name={userData.user.name} email={userData.user.email} edv={userData.user.edv} telefone={userData.user.telefone} isStudent={userData.user.student} isOnwer={userData.isOwner}  ></ProfileComponent >}
            <SeeMore title="Foco de Carreira" toggleAdd={toggleAdd} button="Adicionar mais" isAdmin={true} redirect={""}>
                <div className="flex gap-3 max-w-[90%] flex-wrap justify-center mt-3 flex-row">
                {loadCarrer && carrerData.listObject.map((item) => {
                    return(
                        <Skill key={item.id}  button={() => apagarCarreira(item.id)} cor={"blueLight"} title={item.name} ></Skill>
                    )
                })}
                </div>
            </SeeMore>

            {/* Modal pra adicionar mais skills */}
            <Modal height="30%" onClose={toggleAdd} title={"Adicionar Foco de Carreira"} isOpen={isOpenAdd}>
                <div className="flex flex-col w-full space-y-4">
                    <label className="text-lg font-semibold text-fontTitle dark:text-fontTitleDark">Opções:</label>
                    <select id="status" name="status" value={opSelect} onChange={handleChange} className="border rounded-lg p-2 text-fontText dark:bg-backgroundDark dark:text-fontTextDark focus:ring-2 focus:blueMiddle focus:outline-none transition duration-200 ease-in-out">
                        <option className="text-fontText dark:text-fontTextDark">Selecione um foco de carreira</option>
                        {loadCarrer && itensCareer.listObject.map((item) => {
                        return(
                            <option key={item.id} value={item.id} className="text-fontText dark:text-fontTextDark">{item.name}</option>
                        )
                        })}
                    </select>
                    <div className="flex justify-center gap-5">
                        <button onClick={toggleAdd} className=" bg-buttonDesabled dark:bg-buttonDesabledDark hover:bg-buttonDesabledHover rounded py-2 px-4 text-fontButton">Cancelar</button>
                        <button className=" bg-buttonActivated dark:bg-buttonActivatedDark hover:bg-buttonActivatedHover rounded py-2 px-4 text-fontButton" onClick={addCarreira}>Adicionar</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}