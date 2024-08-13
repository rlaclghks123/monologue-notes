interface Props {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
}

export default function TitleDescription({ children, className }: Props) {
  const [title, description] = children;
  return (
    <section className={`my-20 h-52 ${className}`}>
      <div className="mb-3 text-xl font-semibold">{title}</div>
      <div className="h-52 overflow-scroll">{description}</div>
    </section>
  );
}
