import {configureStore} from '@reduxjs/toolkit'
import { tmworker } from './store'

export const  Store = configureStore({
    reducer:{
        for_data : tmworker
    }
})