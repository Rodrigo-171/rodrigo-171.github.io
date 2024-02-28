import { CardWordpress } from "./CardWordpress"


export const ProjetosWordpress = () => {
    return (
        <>
            <div className="flex flex-col gap-6 mt-20">
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-xl sm:text-xl md:text-2xl xl:text-4xl">Projetos Wordpress</h3>
            </div>
            <div className="w-full overflow-mobile mt-10">
                <div className="flex w-fit gap-8 md:w-full md:.grid-cols-fluid md:grid sm:gap-10 xl2:grid-cols-fluid2 xl3:grid-cols-fluid3 justify-evenly">    
                    <CardWordpress />       
                </div>
            </div>
        </>
    )
}