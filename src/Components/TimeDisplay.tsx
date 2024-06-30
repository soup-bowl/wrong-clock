import { getDate, getTime } from "../Utils/TimeCalc"

const TimeDisplay = ({ date }: { date: Date }) => {
	const time = getTime(date)
	const pdate = getDate(date)

	return (
		<div>
			<p className="secondary-text shadow">{time.greeting}</p>
			<p className="primary-text shadow-lg">
				{time.hours}:{time.minutes}:{time.seconds}
			</p>
			<p className="secondary-text shadow">
				{pdate.day} {pdate.date}
				<sup>{pdate.suffix}</sup> {pdate.month} {pdate.year}
			</p>
		</div>
	)
}

export default TimeDisplay
