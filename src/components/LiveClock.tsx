import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const time = new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta', // Surabaya uses the same TZ (WIB, UTC+7)
  }).format(now)

  const date = new Intl.DateTimeFormat('id-ID', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(now)

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-baseline gap-3">
        <span className="text-accent font-semibold">{time}</span>
        <span className="text-slate-400 text-xs hidden sm:inline">{date}</span>
      </div>
      <span className="text-slate-400 text-xs">Surabaya (WIB)</span>
    </div>
  )
}
