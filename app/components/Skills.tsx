import { CardSkills } from "./CardSkills"

export const Skils = () => {
    return( 
        <div className=" bg-transparent max-w-[2500px] px-6 sm:px-14 xl:px-20 flex flex-col w-full pt-40">
            <div className="flex flex-col items-center gap-5 w-full text-center">
                <div className="bg-blue-500 w-fit px-3 py-2 rounded-md text-white text-sm sm:text-base">🧑‍💻 skills</div>
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-xl sm:text-xl md:text-2xl">Tecnologias e Habilidades</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <div className="mt-6 flex w-fit gap-5 md:w-full md:justify-center md:flex-wrap xl:gap-7 xl2:gap-10">
                    <CardSkills />
                </div>
            </div>
        </div>
    )
}