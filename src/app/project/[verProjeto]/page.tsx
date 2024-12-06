import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/routes"
import Link from "next/link";



export default function VerProjeto(){
    return(
        <>
            <Menu op1="Fóruns" op2="Projetos" op3="Discussões"></Menu>

            <div>
                <div>
                    <div>
                        <h1>Projetos - Iot</h1>
                    </div>
                    <div>
                        <Link href={ROUTES.feedback}> <button>Feedback</button> </Link>
                    </div>
                </div>
                <div>
                    <h1>Iot</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus eum corrupti aliquam error quis fugit, voluptate unde praesentium totam, deleniti amet tempora quae accusantium soluta maiores nesciunt sit? Cupiditate!</p>
                </div>

                <div>
                    <h1>Arquivos</h1>
                    <div>
                        <div>Item</div>
                    </div>
                </div>
                <button>Ir para o projeto</button>
            </div>

        </>
    )
}