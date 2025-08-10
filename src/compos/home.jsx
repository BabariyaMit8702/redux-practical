import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import { useState } from 'react'
import { useRef } from 'react'
import { addtsk } from './store'

export const Home = () => {
    const [newtask, setnewtask] = useState('')
    const dispatch = useDispatch()
    const mytasks = useSelector((state) => state.for_data.tasks)
    const inp = useRef(null);
    const localstore = (array) => {
        localStorage.setItem('array',JSON.stringify(array));
    }
    const oncemt = () => {
        const dict = {id:crypto.randomUUID(),task:newtask,timethen:new Date().toLocaleString()}
        dispatch(addtsk(dict));
        // or
        // dispatch(addtsk(inp.current.value));
        setnewtask('');
        inp.current.value = '';
    }
    
    return (
        <>
            <center>
                <div>
                    <div className="d-flex" role="search">
                        <input ref={inp} className="form-control me-2" type="text" value={newtask} onChange={(e) => setnewtask(e.target.value)} placeholder="write here" />
                        <button onClick={() => {oncemt();}} className="btn btn-primary">Add task</button>
                    </div>
                </div>
            </center><br></br>
            <hr></hr>
            <div>
                <div>
                    <center>
                {mytasks.map((tk) => 
                    (<div key={tk.id}>
                        <span>{tk.task}</span>
                        <span>{tk.timethen}</span>
                    </div>)
                )}
                    </center>
                </div>
            </div>
        </>
    )
}
