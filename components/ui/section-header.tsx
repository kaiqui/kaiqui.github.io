interface SectionHeaderProps {
  title: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
}

export function SectionHeader({ title, accentColor, gradientFrom, gradientTo }: SectionHeaderProps) {
  return (
    <div className="section-header mb-12">
      <h2 className="text-4xl font-bold text-white">
        <span className={`text-${accentColor}`}>//</span> {title}
      </h2>
      <div className={`w-32 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} mt-2`}></div>
    </div>
  )
}
