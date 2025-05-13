import React, { useEffect, useState } from 'react'
import Question from './components/Question';
import { ImSpinner9 } from "react-icons/im";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const responce = await fetch('./mcq_50.json')
      const data = await responce.json();
      setQuestions(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <div className='flex items-center justify-center h-screen'><ImSpinner9 className='animate-spin font-black text-8xl'/></div>;
  }
  return (
    <>
    <Question questions ={questions}/>
    </>
  )
}

export default App