interface BlogListItemProps {
  title: string;
  description: string;
  date: Date;
  link: string;
  isLast?: boolean;
}

export function BlogListItem({
  title,
  description,
  date,
  link,
  isLast = false,
}: BlogListItemProps) {
  return (
    <a
      href={link}
      className={`block p-6 hover:bg-bg2 transition-colors cursor-pointer ${!isLast ? "border-b border-border" : ""
        }`}
    >
      <h3 className="text-xl font-semibold text-fg3 mb-3">{title}</h3>
      <p className="text-fg1 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-xs text-fg1">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
    </a>
  );
}
