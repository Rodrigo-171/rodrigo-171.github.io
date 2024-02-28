import { Card } from "./Card"
import { ProjetosEstudos } from "./ProjetosEstudos"
import { ProjetosWordpress } from "./ProjetosWordpress"

export const Projetos = () => {
    
    return(

        <div className="max-w-[2500px] bg-transparent px-6 pb-6 pt-40 sm:px-14 xl:px-20 flex w-full">
            <div className="flex flex-col w-full">
                <ProjetosEstudos />
                <ProjetosWordpress />
            </div>
        </div>
    )
}