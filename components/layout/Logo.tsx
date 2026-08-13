interface LogoProps {
  className?: string;
}

export function Logo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 147 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M145.96 10.541H10V136.591H145.96"
        stroke="currentColor"
        strokeWidth="20"
        strokeMiterlimit="16"
      />
      <path
        d="M51.9659 42.519V94.5206H93.979V42.519"
        stroke="currentColor"
        strokeWidth="20"
        strokeMiterlimit="16"
      />
      <path
        d="M135.923 42.5443L135.923 104.544"
        stroke="currentColor"
        strokeWidth="20"
        strokeMiterlimit="16"
      />
    </svg>
  );
}
