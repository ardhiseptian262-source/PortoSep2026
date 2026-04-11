import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('portfolioVisitors') || '0'
    const currentCount = parseInt(storedCount)
    
    // Check if already counted in this session
    const sessionId = sessionStorage.getItem('visitorCounted')
    if (!sessionId) {
      // First time in session: increment
      const newCount = currentCount + 1
      localStorage.setItem('portfolioVisitors', newCount.toString())
      localStorage.setItem('lastVisitDate', new Date().toLocaleString())
      sessionStorage.setItem('visitorCounted', 'true')
      setVisitorCount(newCount)
    } else {
      // Already counted: just read
      setVisitorCount(storedCount ? parseInt(storedCount) : 0)
    }
    
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="text-slate-400 text-sm">
        <span className="text-accent">👥</span> Visitors: <span className="font-semibold">...</span>
      </div>
    )
  }

  return (
    <div className="text-slate-300 text-sm hover:text-accent transition-colors cursor-pointer group">
      <span className="text-accent group-hover:scale-110 transition-transform inline-block">👥</span>
      {' '}Visitors:{' '}
      <span className="font-semibold text-accent group-hover:text-blue-400 transition-colors">
        {visitorCount.toLocaleString()}
      </span>
    </div>
  )
}
