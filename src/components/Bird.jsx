export default function Bird({
  className = "",
  scale = 1,
  rotate = 0,
  z = 10,
  showBubble = false,
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        zIndex: z,
      }}
    >
      <svg
        width="72"
        height="36"
        viewBox="0 0 72 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LEFT WING */}
        <path
          d="M4 24 C 16 10, 28 10, 36 18"
          stroke="#0B2A5B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* RIGHT WING */}
        <path
          d="M68 24 C 56 10, 44 10, 36 18"
          stroke="#0B2A5B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* CHAT BUBBLE (conditional) */}
        {showBubble && (
          <>
            <rect
              x="28"
              y="16"
              width="16"
              height="12"
              rx="5"
              fill="#3B82F6"
            />
            <circle cx="32" cy="22" r="1.2" fill="white" />
            <circle cx="36" cy="22" r="1.2" fill="white" />
            <circle cx="40" cy="22" r="1.2" fill="white" />
          </>
        )}
      </svg>
    </div>
  );
}
