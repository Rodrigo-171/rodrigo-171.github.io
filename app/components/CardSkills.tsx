import Image from "next/image"

export const CardSkills = () => {
    return (
        <>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded flex flex-col px-6 pt-4 gap-3 border-solid border border-zinc-300 dark:border-zinc-500 pb-6 min-w-[calc(260px)]" data-aos="fade-up">
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <div className="flex justify-center flex-col items-center w-[260px] xl:[300px] xl2:w-[340px]">
                    <div className="bg-blue-500 w-14 h-14 rounded-full flex justify-center items-center text-white mb-5">
                        <Image src="/images/page.svg" width={30} height={30} alt="Página em desenho" />
                    </div>
                    <div className="text-center flex flex-col gap-3">
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)]">Front end</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-xs lf:text-[calc(0.78rem)] font-normal xl2:text-[calc(0.9)]">Desenvolvimento de sites responsivos e interativos utilizando tecnologias modernas, como o React e Next, juntamente com bibliotecas populares como Tailwind CSS e Bootstrap CSS.</p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-200 dark:bg-zinc-700 rounded flex flex-col px-6 pt-4 gap-3 border-solid border border-zinc-300 dark:border-zinc-500 pb-6 min-w-[calc(260px)]" data-aos="fade-up">
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <div className="flex justify-center flex-col items-center w-[260px] xl:[300px] xl2:w-[340px]">
                    <div className="bg-blue-500 w-14 h-14 rounded-full flex justify-center items-center text-white mb-5">
                        <Image src="/images/db.svg"  width={25} height={25} alt="Página em desenho" />
                    </div>
                    <div className="text-center flex flex-col gap-3">
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)]">Back end</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-xs lf:text-[calc(0.78rem)] font-normal xl2:text-[calc(0.9)]">Desenvolvimento de soluções no lado do servidor com Node.js. Utilizo abordagens de Desenvolvimento Orientado a Testes (TDD) e arquitetura limpa para criar APIs eficientes e escaláveis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}