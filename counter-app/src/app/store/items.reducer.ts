import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

//En un reducer siempre tenemos que definir el estado inicial
export const initialState = 0;
//createReducer es una funcion propia de ngRX que funciona como un switch case
export const counterReducer = createReducer(
    initialState,
    //on sobre la accion sea increment entonces ejecuta la accion
    //le pasamos el estado y le indicamos como queremos que lo modifique
    on(increment, (state) =>  state + 1), 
    on (decrement, (state) => state - 1),
    on (reset, (state) => 0)
)