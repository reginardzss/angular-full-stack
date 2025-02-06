import { createReducer } from "@ngrx/store";
import { CartItem } from "../../models/cartItem";

export interface ItemState {
    items: CartItem[],
    total: number,
}

export const initialState: ItemState = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    total: 0,

}

export const itemsReducer = createReducer(
    initialState,
) 