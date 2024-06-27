import { getTime } from "@/Utils/TimeCalc"

const TimeDisplay = ({ date }: { date: Date }) => {
	const time = getTime(date)

	return (
		<div>
			<p>
				{time.hours}:{time.minutes}:{time.seconds}
			</p>
		</div>
	)
}

export default TimeDisplay
