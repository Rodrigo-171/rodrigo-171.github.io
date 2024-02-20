import Image from "next/image";

export const Footer = () =>{
    return(
        <footer className="w-full bg-zinc-200 flex flex-col gap-6 pt-4 dark:bg-zinc-800 relative">
            <div className="w-full justify-center flex gap-3">
                <a href="https://github.com/Rodrigo-171" rel="noreferrer" target="_blank" className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center"><Image src="/images/git.svg" className="ml-[-1px]" width={25} height={25} alt="Ícone GitHub"/></a>
                <a href="https://www.linkedin.com/in/rodrigo-medeiros-94667b1ba" rel="noreferrer" target="_blank" className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center"><Image src="/images/ln.svg" width={25} height={25} alt="Ícone Linkedin"/></a> 
            </div>
            <div className="text-center w-full">
                <p className="dark:text-zinc-400 text-zinc-600 text-xs md:text-sm xl2:text-base">© 2024 Rodrigo Medeiros. all rights reserved</p>
            </div>
        </footer>
    )
}