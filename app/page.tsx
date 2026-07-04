export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Bienvenue sur 3T.tech
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Votre portfolio est prêt. Modifiez <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">app/page.tsx</code> pour commencer !
      </p>
    </main>
  );
}
