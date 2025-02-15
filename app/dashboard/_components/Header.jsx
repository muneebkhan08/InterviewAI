"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {

    const path = usePathname();

    useEffect(()=>{
        console.log(path);
    }, [])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm pt-5 pb-5'>
         {/*  */}
        <Link href={'./'}><Image className="cursor-pointer" src={'/logo.svg'} height={100} width={70} alt="Logo"/></Link>  

        <ul className='hidden md:flex text-gray-700 gap-8'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-primary font-bold'}`}>Question</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/ans' && 'text-primary font-bold'}`}>How it works</li>
        </ul>

        <UserButton />
    </div>
  )
}

export default Header