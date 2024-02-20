import Image from "next/image"

export const Contato = () => {
    return (
        <div className="max-x-[2500px] bg-transparent px-6 pb-20 pt-40 sm:px-14 xl:px-20 xl2-px-40 xl3:px-60 w-full">
            <div className="gap-4 w-full flex items-center flex-col">
                <div className="bg-blue-500 w-fit px-3 py-2 rounded-md text-white text-sm sm:text-base">🤙 Contato</div>
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-xl sm:text-xl md:text-2xl xl2:text-4xl">Onde me encontrar</h3>
                <div className="mt-10 flex flex-wrap w-full gap-y-8 gap-4 justify-center lg:gap-16 xl2:gap-28" >
                    <div className="text-center flex-col items-center flex-1" data-aos="fade-up">
                        <a href="rodrigonavarro171@gmail.com" rel="noreferrer" target="_blank" className="text-center flex flex-col items-center">
                            <div className="mb-2 flex justify-center items-center bg-blue-500 w-12 h-12 rounded-full">
                                <Image src="/images/mail.svg" width={25} height={25} alt="Ícone Email" />
                            </div>
                            <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)]">Email</h4>
                        </a>
                        <p className="dark:text-zinc-400 text-zinc-500 text-xs md:text-sm xl2:text-base">rodrigonavarro171@gmail.com</p>
                    </div>

                    <div className="text-center flex-col items-center flex-1" data-aos="fade-up">
                        <a href="https://www.linkedin.com/in/rodrigo-medeiros-94667b1ba" rel="noreferrer" target="_blank" className="text-center flex flex-col items-center">
                            <div className="mb-2 flex justify-center items-center bg-blue-500 w-12 h-12 rounded-full">
                                <Image src="/images/ln.svg" width={25} height={25} alt="Ícone Linkedin" />
                            </div>
                            <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)]">LinkedIn</h4>
                        </a>
                        <p className="dark:text-zinc-400 text-zinc-500 text-xs md:text-sm xl2:text-base">https://www.linkedin.com/in/rodrigo-medeiros-94667b1ba/</p>
                    </div>

                    <div className="text-center flex-col items-center flex-1" data-aos="fade-up">
                        <a href="https://github.com/Rodrigo-171" rel="noreferrer" target="_blank" className="text-center flex flex-col items-center">
                            <div className="mb-2 flex justify-center items-center bg-blue-500 w-12 h-12 rounded-full">
                                <Image src="/images/git.svg" width={25} height={25} alt="Ícone Github" />
                            </div>
                            <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)]">GitHub</h4>
                        </a>
                        <p className="dark:text-zinc-400 text-zinc-500 text-xs md:text-sm xl2:text-base">https://github.com/Rodrigo-171</p>
                    </div>
                </div>
            </div>

        </div>
    )
}