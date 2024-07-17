import {InferActionsTypes} from './store';

let initialState = {
	usd: null as (number | null),
	eur: null as (number | null)
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'CV/APP/CONVERT_TO_USD':
			return {
				...state,
				eur: action.eur,
				usd: action.eur * 1.07
			}
		case 'CV/APP/CONVERT_TO_EUR':
			return {
				...state,
				eur: action.usd / 1.07,
				usd: action.usd
			}
		default:
			return state;
	}
}

export const actions = {
	convertToUSD: (eur: number) => ({type: 'CV/APP/CONVERT_TO_USD', eur} as const),
	convertToEUR: (usd: number) => ({type: 'CV/APP/CONVERT_TO_EUR', usd} as const),
}


export default appReducer;