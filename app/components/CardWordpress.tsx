import Image from "next/image";


export const CardWordpress = () => {
    

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
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">VEX</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Site institucional feito para a empresa VEX Paineis utilizando o Wordpress e o plugin Elementor.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/wordpress.svg" alt="Wordpress Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/elementor.svg" alt="Elementor Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/vexbanner.png" alt="banner Spotify" />
                    
                        <div className="flex w-full justify-center mt-2"><a href="https://vexpaineis.com.br" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Ver Site</a></div>
                        
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
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">ConnectDriver</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Site institucional feito para a empresa ConnectDriver utilizando o Wordpress e o plugin Elementor.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/wordpress.svg" alt="Wordpress Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/elementor.svg" alt="Elementor Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/connectdriverbanner.png" alt="banner Imovi" />
                        <div className="flex w-full justify-center mt-2"><a href="https://connectdriver.com.br" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Ver Site</a></div>
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
                        <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl:text-[calc(1.05rem)]">WelcomeClean</h4>
                        <div className="mt-2 h-[50px]">
                            <p className="text-zinc-600 dark:text-zinc-400 text-xs lg:text-[calc(0.78rem)] font-normal xl:text-[calc(0.9rem)]">Site institucional feito para a empresa WelcomeClean utilizando o Wordpress e o plugin Elementor.</p>
                        </div>
                        <div className="flex gap-2 mb-4 mt-5">
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/wordpress.svg" alt="Wordpress Logo" />
                            <Image width={27} height={27} className="w-[calc(35px)] rounded-md" src="/images/elementor.svg" alt="Elementor Logo" />
                        </div>
                        <Image width={150} height={100} className="rounded-lg w-full h-[140px]" src="/images/welcomecleanbanner.png" alt="banner Imovi" />
                        <div className="flex w-full justify-center mt-2"><a href="https://welcomeclean.com.br" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-9 py-2 rounded-md text-white text-base">Ver Site</a></div>
                    </div>
                </div>
            </div>
           
        </>    
    )
}