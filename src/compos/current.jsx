import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './store'
import { useNavigate } from 'react-router-dom'

export const Current = () => {
  const navigate = useNavigate()
  let { current_task } = useParams()
  const mytasks = useSelector((state) => state.for_data.tasks)
  const cur_t = mytasks.find((mt) => mt.id == current_task)
  const dispatch = useDispatch()
  const rmv = () => {
    dispatch(remove(cur_t.id))
    navigate('/')
  }

  return (
    <>
      <div className='bg-black text-blue-500 text-2xl h-150 flex items-center justify-center'>
        <div className='border-2 p-2'>
          <span>
            {cur_t.task}
          </span>
          <br></br>
          <span className='text-amber-300'>
            {cur_t.timethen}
          </span>
        </div>
        <br></br>
        <button onClick={rmv} className=' text-red-600 border-2 p-1.5 m-3 hover:text-white hover:text-shadow-inner-amber-600 hover:text-shadow-2xs '>
          remove this task
        </button>
      </div>
    </>
  )
}
