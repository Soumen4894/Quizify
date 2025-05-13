import React, { useEffect, useState } from 'react'
import Question from './components/Question';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

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
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  // console.log(questions.length)
  if (loading) {
    return <div>Loading questions...</div>;
  }
  return (
    <>
    <Question questions ={questions}/>
      {/* {questions.map((question, index) =>(
          <Question  question={question} index = {index}/>
        ))} */}
      {/* <Question question={questions[currentIndex]} index={currentIndex} />
      <div className="flex justify-center gap-40  mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        > <GrFormPrevious size={48} />

        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-4 py-2  bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          <GrFormNext size={48}/>
        </button>
      </div> */}

    </>
  )
}

export default App