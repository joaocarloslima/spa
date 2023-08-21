import { FilmIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-2 bg-slate-900 ">
            <Link href="/">
                <h1 className="flex items-center gap-2 text-3xl text-amber-400 font-bold uppercase">
                    <FilmIcon className="h-8 w-8" />
                    Senac Filmes
                </h1>
            </Link>
            <Link href="/sobre">Sobre</Link>
        </nav>
    )
}