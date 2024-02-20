"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react"

export function Toggle(){
    const [theme, setTheme] = useState("light");

    
    useEffect(() => {
        if(theme == "dark") {
            document.querySelector('html')?.classList.add('dark');
            
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    },[theme])
    

    const handleChangeTheme = () =>{
        setTheme(prevTheme => prevTheme == "dark" ? "light" : "dark" )
    }
    
    
    return(
        <div className="fixed top-5 right-5 z-50">
            <button 
        id="button-dark"
        className="bg-zinc-300 px-4 py-2 rounded-full hover:bg-slate-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        onClick={handleChangeTheme}
        >
            
         {theme == "dark" ? <Moon /> : <Sun className="text-zinc-500"/>}   
                      
        </button>
        </div>
        
    )
}