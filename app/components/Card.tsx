 import Image from "next/image";


export const Card = () => {

    
    

    return(
        <>
            <div className="overflow-y-hidden opacity-100 mb-0 duration-500 transition-all" data-aos="fade-up">
                <div className="cursor-pointer bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-600 rounded-xl flex flex-col px-6 py-4 gap-3 border-solid border border-zinc-300 dark:border-zinc-500 min-w-[calc(260px)]">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div>
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">Tailwind-Spotify</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Interface estática inicial do Spotify, feita com React e Tailwind.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/react-2.svg" alt="React Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/tailwindcss.svg" alt="Tailwindcss Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/spotify-1280x720-1.jpg" alt="banner Spotify" />
                        <div className="flex w-full pt-2 gap-2 justify-center">
                            <a href="https://rodrigo-171.github.io/spotify-tailwind/" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Demo</a>
                            <a href="https://github.com/Rodrigo-171/spotify-tailwind" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white text-base">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-100 mb-0 duration-500 transition-all" data-aos="fade-up">
                <div className="cursor-pointer bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-600 rounded-xl flex flex-col px-6 py-4 gap-3 border-solid border border-zinc-300  dark:border-zinc-500 min-w-[calc(260px)]">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div>
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">Imovi</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Interface de um site imobiliário feita com HTML, CSS e JS.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/html-5-svg.svg" alt="HTML Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/css-3-svg.svg" alt="CSS Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/js-svg.svg" alt="JavaScript Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/imovi.png" alt="banner Imovi" />
                        <div className="flex w-full pt-2 gap-2 justify-center">
                            <a href="https://rodrigo-171.github.io/imovi" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Demo</a>
                            <a href="https://github.com/Rodrigo-171/imovi" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white text-base">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-100 mb-0 duration-500 transition-all" data-aos="fade-up">
                <div className="cursor-pointer bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-600 rounded-xl flex flex-col px-6 py-4 gap-3 border-solid border border-zinc-300  dark:border-zinc-500 min-w-[calc(260px)]">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div>
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">Infusion</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Interface de um site institucional feita com HTML, CSS e JS.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={30} height={30} className="w-[calc(35px)] rounded-md" src="/images/html-5-svg.svg" alt="HTML Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/css-3-svg.svg" alt="CSS Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/js-svg.svg" alt="JavaScript Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/infusion.png" alt="banner Imovi" />
                        <div className="flex w-full pt-2 gap-2 justify-center">
                            <a href="https://rodrigo-171.github.io/projeto_infusion_estudo" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Demo</a>
                            <a href="https://github.com/Rodrigo-171/projeto_infusion_estudo" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white text-base">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
           
        </>    
    )
}