export function RankRaceLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path
          d="M12 28L20 12L28 28H24L22 24H18L16 28H12Z"
          fill="white"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d="M18.5 20H21.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        RankRace
      </span>
    </div>
  )
}
