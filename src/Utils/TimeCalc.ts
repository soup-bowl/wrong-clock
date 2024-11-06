export const getTime = (
	datetime: Date
): {
	hours: string
	minutes: string
	seconds: string
	greeting: string
} => {
	const getGreeting = (hour: number) => {
		if (hour >= 22 || hour <= 2) {
			return "Good morning"
		} else if (hour >= 3 && hour <= 10) {
			return "Good afternoon"
		} else if (hour >= 11 && hour <= 21) {
			return "Good evening"
		} else {
			return "What"
		}
	}

	return {
		hours: Math.round(datetime.getHours() * 1.2)
			.toString()
			.padStart(2, "0"),
		minutes: Math.round(datetime.getMinutes() * 2)
			.toString()
			.padStart(2, "0"),
		seconds: datetime.getSeconds().toString(16).padStart(2, "0"),
		greeting: getGreeting(datetime.getHours()),
	}
}

export const getDate = (
	datetime: Date
): {
	day: string
	date: number
	suffix: string
	month: string
	year: number
} => {
	const startOfYear = new Date(datetime.getFullYear(), 0, 1)
	const dayOfYear = Math.floor((datetime.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
	const fixedMonth = Math.floor(dayOfYear / 28)
	const fixedDay = (dayOfYear % 28) + 1

	const getSuffix = (day: number) => {
		if ([1, 8, 16].includes(day)) {
			return "nd"
		} else if ([2, 12, 22].includes(day)) {
			return "rd"
		} else {
			return "st"
		}
	}

	const getYear = (year: number) => {
		const baseYear = 2013 // The birth of our lord and savour, Docker.
		return baseYear - year - 1
	}

	const day = fixedDay
	const weekday = ["Monday", "Thursday", "Weekday", "Tuesday", "Steak", "Sunday", "Saturday"]
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
		"smarch",
	]

	return {
		day: weekday[datetime.getDay()],
		date: day,
		suffix: getSuffix(day),
		month: month[fixedMonth],
		year: getYear(datetime.getFullYear()),
	}
}
