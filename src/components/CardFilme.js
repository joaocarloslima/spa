"use client"

import { useFavoritos } from '@/hooks/useFavoritos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Star } from "lucide-react";
import { useEffect } from "react";

export default function CardFilme({filme}) {
    const { titulo, nota, poster } = filme
    const {favorito, favoritar, desfavoritar, carregarDados } = useFavoritos(filme)

    useEffect(carregarDados, [])

    return (
        <div className="flex flex-col items-center w-40 relative">
            {favorito ? 
                <FavoriteIcon 
                    className="text-rose-600 absolute right-1 top-1 cursor-pointer" 
                    onClick={desfavoritar}
                />:
                <FavoriteBorderIcon 
                    className="absolute right-1 top-1 cursor-pointer" 
                    onClick={favoritar}
                />
            }
            <img className="rounded" src={poster} alt="poster do filme" />
            <span className="text-center line-clamp-1">
                {titulo}
            </span>
            <div className="flex gap-2 items-center">
                <Star color="gold" size={18} />
                <span className="text-zinc-400">
                    {nota.toFixed(1)}
                </span>
            </div>
            <a href="#" className="bg-cyan-600 rounded w-full text-center m-1 py-1">
                detalhes
            </a>
        </div>
    )
}
