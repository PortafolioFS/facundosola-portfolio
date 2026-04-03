export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(120,120,255,0.18),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,255,200,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
    </div>
  );
}
