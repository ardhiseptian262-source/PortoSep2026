import { useEffect, useState } from 'react'

interface LiveClockProps {
  // Optional override; if omitted, the user's browser timezone is used
  timeZone?: string
}

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(/[_\s-]+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function LiveClock({ timeZone }: LiveClockProps) {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Prefer explicit prop, otherwise detect from browser
  const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone

  const locale = navigator.language || 'en-US'

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: tz,
  })

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: tz,
  })

  let tzShort = ''
  try {
    const parts = new Intl.DateTimeFormat(locale, { timeZone: tz, timeZoneName: 'short' }).formatToParts(now)
    tzShort = parts.find((p) => p.type === 'timeZoneName')?.value ?? ''
  } catch (e) {
    tzShort = ''
  }

  // Derive a human-friendly city/region label from timezone
  let cityLabel = 'Local Time'
  if (tz) {
    // Map a few common Indonesia zones to user-friendly labels
    const known: Record<string, string> = {
      'Asia/Jakarta': 'Indonesia (WIB)',
      'Asia/Makassar': 'Indonesia (WITA)',
      'Asia/Jayapura': 'Indonesia (WIT)',
    }

    if (known[tz]) {
      cityLabel = known[tz]
    } else if (tz.includes('/')) {
      const part = tz.split('/').pop() || tz
      cityLabel = titleCase(part.replace(/_/g, ' '))
    } else {
      cityLabel = tz
    }
  }

  const time = timeFormatter.format(now)
  const date = dateFormatter.format(now)

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-baseline gap-3">
        <span className="text-accent font-semibold">{time}</span>
        <span className="text-slate-400 text-xs hidden sm:inline">{date}</span>
      </div>
      <span className="text-slate-400 text-xs">{cityLabel}{tzShort ? ` • ${tzShort}` : ''}</span>
    </div>
  )
}
