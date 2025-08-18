import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import { useState } from 'react'
import { useRef } from 'react'
import { addtsk,clrs } from './store'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [newtask, setnewtask] = useState('')
    const dispatch = useDispatch()
    const mytasks = useSelector((state) => state.for_data.tasks)
    const inp = useRef(null);
    const oncemt = () => {
        const dict = { id: crypto.randomUUID(), task: newtask, timethen: new Date().toLocaleString() }
        dispatch(addtsk(dict));
        // or
        // dispatch(addtsk(inp.current.value));
        setnewtask('');
        inp.current.value = '';
    }
    useEffect(() => {
        function the(arr) {
            localStorage.setItem('mydata', JSON.stringify(arr));
        }
        the(mytasks)
    }, [mytasks])
    const clrscr = () => {
        dispatch(clrs())
    }

    return (
        <>
        <div className='h-screen bg-black'>
            <center>
                <div className='bg-blue-300'>
                    <div className="d-flex" role="search">
                        <input ref={inp} className="form-control me-2 m-2 " type="text" value={newtask} onChange={(e) => setnewtask(e.target.value)} placeholder="write here" />
                        <button onClick={() => { oncemt(); }} className="btn btn-primary p-0 text-[10px]">
                            Add Task
                        </button>
                        <button onClick={clrscr}>
                            Clear All
                        </button>
                    </div>
                </div>
            </center><br></br>
            <hr></hr>
            <div>
                <div>
                    <center>
                        {mytasks.map((tk) =>
                        (<Link to={`/${tk.id}`} key={tk.id}>
                            <span>{tk.task.slice(0,2)+'........'}</span>
                            <span>{tk.timethen}</span>
                            <br></br>
                        </Link>)
                        )}
                    </center>
                </div>
            </div>
            </div>
        </>
    )
}
