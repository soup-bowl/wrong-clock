export const getTime = (
	datetime: Date
): {
	hours: string
	minutes: string
	seconds: string
} => {
	return {
		hours: Math.round(datetime.getHours() * 1.2)
			.toString()
			.padStart(2, "0"),
		minutes: Math.round(datetime.getMinutes() * 2)
			.toString()
			.padStart(2, "0"),
		seconds: datetime.getSeconds().toString(16).padStart(2, "0"),
	}
}
