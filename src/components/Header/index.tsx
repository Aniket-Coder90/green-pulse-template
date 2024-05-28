import Link from "next/link";
import Image from "next/image";
import { Button } from "../components";
import '../../app/globals.css';

export const Header = () => {
    return (
        <header className="bg-primary text-white">
            <nav className="container flex justify-between items-center mx-auto p-[24px]">
                <Link href='/'>
                    <Image src={"https://assets-global.website-files.com/663e288737bc324d1efdd96f/664bfae40592b426439f48de_Logo.svg"} width={70} height={32} alt="Logo" />
                </Link>
                <ul className="flex gap-[8px]">
                    <li>
                        <Link href={'/home'} className="p-[12px]">Home</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">About</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">Causes</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">Features</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">Blog</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">Donate</Link>
                    </li>
                    <li>
                        <Link href={'/home'} className="p-[12px]">Contact</Link>
                    </li>
                </ul>
                <div className="gap-[16px] lg:flex hidden">
                    <span className="cart-icon flex gap-[4px] items-center">
                        <svg className="w-commerce-commercecartopenlinkicon" width="17px" height="17px" viewBox="0 0 17 17"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                        <span>(0)</span>
                    </span>
                    <Button type="button" className="flex px-[30px] py-[15px] bg-secondry">Donate Funds</Button>
                </div>
            </nav>
        </header>
    )
}