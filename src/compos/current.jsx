import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from './store'
import { useNavigate } from 'react-router-dom'

export const Current = () => {
    const navigate = useNavigate()
    let {current_task} = useParams()
    const mytasks = useSelector((state) => state.for_data.tasks)
    const cur_t = mytasks.find((mt) => mt.id == current_task)
    const dispatch = useDispatch()
    const rmv = () => {
            dispatch(remove(cur_t.id))
            navigate('/')
    }

  return (
    <>
    <div>{cur_t.task}</div>
    <button onClick={rmv}>
        remove this task
    </button>
    </>
  )
}
