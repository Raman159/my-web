export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title?: string;
}) {
  return (
    <div className="grid gap-5 border-t rule pt-5 md:grid-cols-12 md:gap-8">
      <div className="label text-muted md:col-span-3">
        {index} / {label}
      </div>
      {title && (
        <h2 className="serif text-4xl leading-[1.08] md:col-span-9 md:text-6xl">
          {title}
        </h2>
      )}
    </div>
  );
}
