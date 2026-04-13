const items = [
  {
    title: "Ветки",
    description: "Создание main, dev и feature-веток.",
  },
  {
    title: "Rebase",
    description: "Обновление feature-ветки от dev без лишних merge-коммитов.",
  },
  {
    title: "Конфликты",
    description: "Ручное разрешение конфликтов и продолжение rebase.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
        </article>
      ))}
    </section>
  );
}