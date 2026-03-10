

export default function SectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-4">
      <section className="bg-gray-100 p-4 rounded">
        {children }
      </section>
      <section className="bg-gray-100 p-4 rounded">
        {children}
      </section>
    </div>
  );
}