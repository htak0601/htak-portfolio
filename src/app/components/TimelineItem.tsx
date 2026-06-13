interface TimelineItemProps {
  title: string
  children: React.ReactNode
}

export default function TimelineItem({ title, children }: TimelineItemProps) {
  return (
    <article className="relative border-l border-zinc-300 pl-6">
      {/* Dot */}
      <span className="absolute top-0.5 left-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" />

      <h3 className="mb-5 text-sm font-bold tracking-wide text-blue-500">{title}</h3>

      {children}
    </article>
  )
}
