import {createStore} from 'easy-peasy'
//@ts-ignore
import {model} from './models/index.ts'
export const store =createStore(model)