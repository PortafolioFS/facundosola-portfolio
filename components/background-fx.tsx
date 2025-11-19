export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]" />
      <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}
