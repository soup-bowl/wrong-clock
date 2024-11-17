import { useState } from "preact/hooks"
import TimeDisplay from "./Components/TimeDisplay"
import useInterval from "./Hooks/UseInterval"

export function App() {
	const [time, setTime] = useState<Date>(new Date())

	useInterval(() => setTime(new Date()), 1000)

	return (<TimeDisplay date={time} />)
}
