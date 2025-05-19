import React, { useState } from 'react'
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Question = ({ questions }) => {
  const [page, setPage] = useState(1);
  const pageLength = questions.length;
  const [click, setClick] = useState(null)
  const [correct, setCorrect] = useState(null);
  const [wrong, setWrong] = useState(null);
  const checkAnswer = (idx) => {

  }
  const handleOption = (idx, choose, ans) => {
    setClick(idx)
    console.log(choose);
    console.log(ans)
    if (choose === ans) {
      setCorrect(ans);
      console.log(ans)
      setWrong(null);
      setTrueSelected(true)
      setFalseSelected(false)
    }
    else {
      setWrong(ans);
      setCorrect(null);
      setFalseSelected(true);
      setTrueSelected(false)
    }
    // console.log(idx) 

  }
  const handleNext = () => {
    if (page < pageLength) {
      setPage(page + 1);
      setClick(null);
      setCorrect(null);
      setWrong(null);
    }
  }
  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
      setClick(null);
      setCorrect(null);
      setWrong(null);
    }
  }

  return (
    <>
      {questions.slice(page * 1 - 1, page * 1).map((question, index) => (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4" >
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {question.question}
            </h1>
          </div>

          <div className="w-full max-w-md space-y-3">
            {question.options.map((option, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 border ${click===idx && option === question.correct_answer && 'border-green-500'} ${click===idx && option !== question.correct_answer && 'border-red-500'} border-gray-300 border-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer`}
                onClick={() => handleOption(idx, option, question.correct_answer)}
              >
                {click === idx ? (
                  <ImCheckboxChecked color="black" size={18} />
                ) : (
                  <ImCheckboxUnchecked color="black" size={18} />
                )}
                <h3 className="text-base text-gray-700 font-medium">
                  {String.fromCharCode(65 + idx)}. {option}
                </h3>
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-40 mt-8'>
            <button
              disabled={page === 1}
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 cursor-pointer'
              onClick={handlePrev}>
              <GrFormPrevious size={48} />
            </button>
            <button
              disabled={page === pageLength}
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 cursor-pointer'
              onClick={handleNext}>
              <GrFormNext size={48} />
            </button>
          </div>
          <div className='flex p-8'>
            {correct &&
              <div className='flex items-center gap-2 font-bold text-2xl'>Correst answer
                <span className='text-green-500 '>
                  <FaCheckCircle size={24} />
                </span>
              </div>
            }
            {wrong &&
              <div className='flex items-center gap-2 font-bold text-2xl'>Wrong answer
                <span className='text-red-500'>
                  <ImCross size={24} />
                </span>
              </div>
            }
          </div>
        </div>
      ))}
    </>

  )
}

export default Question