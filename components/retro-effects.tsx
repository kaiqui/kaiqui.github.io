interface RetroEffectsProps {
  cursorPosition: {
    x: number
    y: number
  }
}

export function RetroEffects({ cursorPosition }: RetroEffectsProps) {
  return (
    <>
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* Background grid */}
      <div className="grid-background"></div>

      {/* Scanlines effect */}
      <div className="scanlines"></div>
    </>
  )
}
