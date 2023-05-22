"use client"
import { redirect } from 'next/navigation';
import { useUserContext } from "../../context/user";
import Character from '@/app/components/Character';



export default function CharacterPage({ params: { id } }) {
    const [ user, setUser ] = useUserContext();

    return (
        <>
            {
                !user ? 
                    (
                        redirect('/login')
                    ) :
                    (
                        <Character id={id} />                    
                    )
            }
        </>
    )
    
}