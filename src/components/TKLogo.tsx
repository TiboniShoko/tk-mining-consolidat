interface TKLogoProps {
  className?: string
  size?: number
}

export function TKLogo({ className = '', size = 48 }: TKLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="url(#goldGradient)"
        strokeWidth="12"
        fill="white"
      />
      <path
        d="M60 50h100v30H130v70h-30V80H60V50z"
        fill="url(#goldGradient)"
      />
      <path
        d="M110 90h20v20h-20V90z"
        fill="url(#goldGradient)"
      />
      <path
        d="M150 50l40 40-20 20-40-40 20-20z"
        transform="translate(-20, 30) rotate(-10 150 90)"
        fill="url(#goldGradient)"
      />
      <path
        d="M130 85l35 35-15 15-35-35 15-15z"
        fill="url(#goldGradient)"
      />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.63 0.15 85)" />
          <stop offset="100%" stopColor="oklch(0.73 0.12 85)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
