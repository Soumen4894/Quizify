import React, { useEffect, useState } from 'react'
import Question from './Question';
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineFullscreen } from "react-icons/ai";

const JavaScript = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bv, setBV] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const responce = await fetch('./JavaScript.json')
            const data = await responce.json();
            setQuestions(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        const disebleRightClick = (e) => {
            e.preventDefault();
        }
        document.addEventListener("contextmenu", disebleRightClick);
        return () => {
            document.removeEventListener("contextmenu", disebleRightClick)
        }
    }, [])

    const toggleFullScreen = () => {
        console.log(document.fullscreenElement)
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setBV(false);
        }
    }
    if (loading) {
        return <div className='flex items-center justify-center h-screen'><ImSpinner9 className='animate-spin font-black text-8xl' /></div>;
    }
    return (
        <>
            <div className='bg-gray-50'>
                {!document.fullscreenElement && bv &&
                    <span className='flex justify-end'><button onClick={toggleFullScreen}><AiOutlineFullscreen className=' text-3xl mx-8 my-2 text-black font-bold' /></button></span>
                }
                <Question questions={questions} />
            </div>
        </>
    )
}

export default JavaScript