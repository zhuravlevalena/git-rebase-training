import { Button } from "@/shared/ui/button";

export function HeroSection() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full border px-4 py-1 text-sm">
        Учебный проект для Git Rebase
      </span>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Освой GitFlow через Rebase на маленьком Next.js проекте
      </h1>

      <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
        Тренируем ветки main, dev, feature/*, конфликты, rebase и нормальную
        командную разработку.
      </p>

      <Button>Начать обучение</Button>
    </section>
  );
}
