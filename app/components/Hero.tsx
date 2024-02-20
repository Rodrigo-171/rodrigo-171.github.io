import { Background } from "./Background";


export function Hero(){
    return(
            <div className="flex items-center justify-center w-full h-screen bg-transparent">
                <Background />
                <div className="flex flex-col items-center gap-2 index">
                    <h1 className="text-4xl font-light italic text-zinc-800 dark:text-zinc-200" data-aos="fade-down"><span className="text-blue-500">Rodrigo</span> Medeiros</h1>
                    <span className="text-lg font-light text-zinc-800 dark:text-zinc-200">Desenvolvedor Front-end</span>
                    <div className="" data-aos="fade-up">
                        <a  href="#sobre-mim" className="border-solid border-2 border-blue-500 py-1 px-10 text-blue-500 hover:shadow-sm hover:shadow-blue-500">Sobre Mim</a>
                    </div>
                </div>
                
            </div>
    )
}