interface LiveBadgeProps {
  text: string;
}

export default function LiveBadge({ text }: LiveBadgeProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-neutral-200">{text}</p>
      <div className="inline-flex items-center gap-2 px-2 py-0.5 text-sm font-medium bg-neutral-800 text-neutral-200 rounded-sm border border-neutral-700">
        <div className="w-2 h-2 bg-red-500 rounded-full motion-safe:animate-pulse"></div>
        <span>Live</span>
      </div>
    </div>
  );
}
