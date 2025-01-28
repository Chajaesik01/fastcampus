import { INCREASE, DECREASE } from "./action-type";
import { actionCreator } from "./redux";

export const increase = actionCreator(INCREASE);

export const decrease = actionCreator(DECREASE);