type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className={`brand ${inverted ? "brand--inverted" : ""}`} aria-label="GALO AI">
      <span className="brand__mark" aria-hidden="true">
        {[2, 3, 4, 5, 6, 7].map((level, index) => (
          <span key={level} className={`brand__bar brand__bar--${index + 1}`} />
        ))}
      </span>
      <span className="brand__word">GALO</span>
      <span className="brand__ai">AI</span>
    </span>
  );
}
