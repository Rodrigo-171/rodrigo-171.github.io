import Image from "next/image"

export const SobreMim = () => {
    return (
        <div id="sobre-mim" className="bg-transparent w-full px-10 py-6 sm:px-14 xl:px-20 flex w-full pt-40">
            <div className="w-full flex flex-col gap-12 xkl:gap-32">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center w-full ">
                    <div className="flex justify-center lg:w-[calc(50%)] lg:justify-end" data-aos="fade-up">
                        <Image width={0} height={0} alt="Foto do Desenvolvedor Rodrigo Medeiros"  className="self-center rounded-full w-56 h-auto lg:w-64 lg:mr-28 xl2:w-72" src="/images/user.png" />
                    </div>
                    <div className="flex flex-col gap-6 lg:w-1/2 xl2:gap-8 justify-center" data-aos="fade-up">
                        <div className="bg-blue-500 w-fit px-3 py-2 rounded-md text-white text-sm sm:text-base dark:bg-dprimary">
                            Sobre Mim
                        </div>
                        <h3 className="font-bold text-zinc-800 text-xl sm:text-xl md:text-2xl xl2:text-4xl dark:text-zinc-200">Rodrigo Navarro Medeiros</h3>
                        <div className="text-left">
                            <ul className="text-left flex flex-col gap-3">
                                <li className="dark:text-zinc-400 text-zinc-800 text-xs md:text-sm">Desenvolvendo Interfaces e APIs com Javascript/React/Typescript desde 2022</li>
                                <li className="dark:text-zinc-400 text-zinc-800 text-xs md:text-sm">Cursando Sistema para Internet</li>
                                <li className="dark:text-zinc-400 text-zinc-800 text-xs md:text-sm">Interesse em Desenvolvimento Front-End</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col xl:flex-row">
                    <div className="flex gap-6 align-top xl:flex-col xl:w-full">
                        <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
                            <div className="rounded-full w-8 h-8 border-blue-500 border-solid border-8"></div>
                            <div className="w-2 h-40 bg-blue-500 mt-[-1px] xl:h-2 xl:flex-1"></div>
                        </div>
                        <div className="flex opacity-100 flex-col duration-700 transition-all gap-2 xl:w-[80%] mt-0" data-aos="fade-up">
                            <h4 className="text-zinc-800 font-medium text-sm lg:text=[calc(0.93rem)] xl:text-[calc(1.05rem)] dark:text-zinc-200">2018</h4>
                            <p className="text-zinc-800 dark:text-zinc-400 text-xs md:text-sm xl:text-base">
                            Iniciei minha jornada como desenvolvedor front-end em 2018 no Instituto Técnico de Barueri. Em 2020, concluí o curso de Informática para Internet, consolidando meu conhecimento e ansioso por novos desafios na área.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 align-top xl:flex-col xl:w-full">
                        <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
                            <div className="rounded-full w-8 h-8 border-blue-500 border-solid border-8"></div>
                            <div className="w-2 h-40 bg-blue-500 mt-[-1px] xl:h-2 xl:flex-1"></div>
                        </div>
                        <div className="flex opacity-100 flex-col duration-700 transition-all gap-2 xl:w-[80%] mt-0" data-aos="fade-up">
                            <h4 className="text-zinc-800 font-medium text-sm lg:text=[calc(0.93rem)] xl:text-[calc(1.05rem)] dark:text-zinc-200">2022</h4>
                            <p className="text-zinc-800 dark:text-zinc-400 text-xs md:text-sm xl:text-base">
                            Em 2022, dei continuidade à minha jornada acadêmica ingressando na Uninove, onde estou cursando Sistemas para Internet e me formarei em Dezembro de 2024.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 align-top xl:flex-col xl:w-full">
                        <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
                            <div className="rounded-full w-8 h-8 border-blue-500 border-solid border-8"></div>
                            <div className="w-2 h-40 bg-blue-500 mt-[-1px] xl:h-2 xl:flex-1"></div>
                        </div>
                        <div className="flex opacity-100 flex-col duration-700 transition-all gap-2 xl:w-[80%] mt-0" data-aos="fade-up">
                            <h4 className="text-zinc-800 font-medium text-sm lg:text=[calc(0.93rem)] xl:text-[calc(1.05rem)] dark:text-zinc-200">2023</h4>
                            <p className="text-zinc-800 dark:text-zinc-400 text-xs md:text-sm xl:text-base">
                            Em 2023, iniciei meus estudos em React e Tailwind, expandindo meu conhecimento em desenvolvimento web.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 align-top xl:flex-col xl:w-full">
                        <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
                            <div className="rounded-full w-8 h-8 border-blue-500 border-solid border-8"></div>
                            <div className="w-2 h-40 bg-blue-500 mt-[-1px] xl:h-2 xl:flex-1"></div>
                            <div className="border-transparent border-solid border-[12px] mt-[-1px] border-t-primary xl:border-l-blue-500 xl:border-t-transparent xl:mt-0"></div>
                        </div>
                        <div className="flex opacity-100 flex-col duration-700 transition-all gap-2 xl:w-[80%] mt-0" data-aos="fade-up">
                            <h4 className="text-zinc-800 font-medium text-sm lg:text=[calc(0.93rem)] xl:text-[calc(1.05rem)] dark:text-zinc-200">Atualmente</h4>
                            <p className="text-zinc-800 dark:text-zinc-400 text-xs md:text-sm xl:text-base">
                            Atualmente, estou focado em aprimorar minhas habilidades em React, através de cursos especializados. Paralelamente, estou explorando oportunidades como freelancer para aplicar meu conhecimento e expandir minha experiência prática na área de desenvolvimento web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}