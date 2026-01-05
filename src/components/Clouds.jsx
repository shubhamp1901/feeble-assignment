export default function Clouds() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-[300px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      {/* Back layer */}
      <g fill="#EAF2FF">
        <circle cx="200" cy="280" r="200" />
        <circle cx="420" cy="260" r="240" />
        <circle cx="680" cy="280" r="220" />
        <circle cx="960" cy="260" r="260" />
        <circle cx="1240" cy="280" r="220" />
      </g>

      {/* Middle layer */}
      <g fill="#E3EEFF">
        <circle cx="140" cy="300" r="160" />
        <circle cx="360" cy="290" r="200" />
        <circle cx="620" cy="300" r="180" />
        <circle cx="880" cy="290" r="210" />
        <circle cx="1140" cy="300" r="190" />
      </g>

      {/* Front layer */}
      <g fill="#DBEAFE">
        <circle cx="100" cy="320" r="140" />
        <circle cx="300" cy="320" r="180" />
        <circle cx="560" cy="320" r="160" />
        <circle cx="820" cy="320" r="190" />
        <circle cx="1080" cy="320" r="170" />
        <circle cx="1320" cy="320" r="160" />
      </g>
    </svg>
  );
}
