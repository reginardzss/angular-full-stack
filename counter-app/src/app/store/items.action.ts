import { createAction, props } from "@ngrx/store";

//Esta accion siempre se va a invocar desde un objeto componente
export const increment = createAction('[Counter Component] Increment', props<{add: number}>()); 
export const decrement = createAction('[Counter Component] Decrement'); 
export const reset = createAction('[Counter Component] Reset'); 
