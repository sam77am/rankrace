export function RankRaceLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className={className}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="512" height="512" rx="96" fill="#6366F1" />
        <path
          d="M354.6 141.5C325.9 141.5 299.4 154.5 282.3 175.2C266.6 155.6 242.6 144 216.7 144C166.1 144 123.3 187.2 123.3 240C123.3 292.8 166.1 336 216.7 336C242.6 336 266.6 324.4 282.3 304.8C299.4 325.5 325.9 338.5 354.6 338.5C400.3 338.5 437.3 301.2 437.3 256C437.3 210.8 400.3 173.5 354.6 173.5V141.5Z"
          fill="white"
        />
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        RankRace
      </span>
    </div>
  )
}
