import { useEffect, useState } from 'react'

export default function VisitorStats() {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    lastVisitDate: '',
    isNewSession: false,
  })

  useEffect(() => {
    // Only READ from localStorage, don't increment
    const storedCount = localStorage.getItem('portfolioVisitors') || '0'
    const currentCount = parseInt(storedCount)
    
    // Get last visit date
    const lastVisit = localStorage.getItem('lastVisitDate') || 'Never'
    
    // Check if this is new session
    const isNew = currentCount === 0
    
    setStats({
      totalVisitors: currentCount,
      lastVisitDate: lastVisit,
      isNewSession: isNew,
    })
  }, [])

  return (
    <div className="glass p-6 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300 hover:bg-secondary/50">
      <div className="space-y-4">
        {/* Main Stats */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-2">Total Visitors</p>
          <p className="text-4xl font-bold text-accent tracking-tight">
            {stats.totalVisitors.toLocaleString()}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20"></div>

        {/* Last Visit Info */}
        <div className="text-sm text-slate-300 text-center">
          <p className="text-slate-400 mb-1">Last Visit</p>
          <p className="font-mono text-xs">{stats.lastVisitDate}</p>
          {stats.isNewSession && (
            <p className="text-accent text-xs mt-2">🎉 Welcome!</p>
          )}
        </div>
      </div>
    </div>
  )
}
