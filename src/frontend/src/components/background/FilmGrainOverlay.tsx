export function FilmGrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: 'url(/assets/generated/film-grain-tile.dim_1024x1024.png)',
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
