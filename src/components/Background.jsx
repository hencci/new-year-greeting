export default function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1759330718114-4fdfc2009408"
        alt="Festive background"
        className="
          absolute top-0 left-0
          w-full h-full
          object-contain
          pointer-events-none
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-3">
        {children}
      </div>
    </div>
  );
}
