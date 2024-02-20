import { Card } from "./Card"

export const Projetos = () => {
    
    return(

        <div className="max-w-[2500px] bg-transparent px-6 pb-6 pt-40 sm:px-14 xl:px-20 flex w-full">
            <div className="flex flex-col w-full">
                <div className="flex flex-col gap-6">
                    <div className="bg-blue-500 w-fit px-3 py-2 rounded-md text-white text-sm sm:text-base">🔗 Portfólio</div>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-xl sm:text-xl md:text-2xl xl:text-4xl">Projetos</h3>
                </div>
                <div className="w-full overflow-mobile mt-10">
                    <div className="flex w-fit gap-8 md:w-full md:.grid-cols-fluid md:grid sm:gap-10 xl2:grid-cols-fluid2 xl3:grid-cols-fluid3 justify-evenly">    
                        <Card />         
                    </div>
                </div>
            </div>
        </div>
    )
}