import { useDispatch, useSelector } from "react-redux"
import {AppStateType} from "./redux/store.ts";
import Input from "./sharedComponents/Input.tsx";
import {actions} from "./redux/reducer.ts";

function App() {
	const dispatch = useDispatch()

	const eur = useSelector((state: AppStateType) => state.appReducer.eur)
	const usd = useSelector((state: AppStateType) => state.appReducer.usd)

	const handleChangeUSD = (e: React.ChangeEvent<HTMLInputElement>) => {
		const usd = Number(e.target.value)

		dispatch(actions.convertToEUR(usd))
	}
	const handleChangeEUR = (e: React.ChangeEvent<HTMLInputElement>) => {
		const eur = Number(e.target.value)

		dispatch(actions.convertToUSD(eur))
	}
	return (
		<div className={"flex sm:flex-row flex-col gap-4 p-2"}>
			<div className={"flex flex-col gap-1 w-full"}>
				<label className={"text-sm"}>USD</label>
				<Input type="number" value={usd || ""} onChange={handleChangeUSD} placeholder={'usd'}/>
			</div>

			<div className={"flex flex-col gap-1 w-full"}>
				<label className={"text-sm"}>EUR</label>
				<Input type="number" value={eur || ""} onChange={handleChangeEUR} placeholder={'eur'}/>
			</div>
		</div>
	)
}

export default App
