const ChampionsPage = () => {
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Champions
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Parcourez le roster et ajoutez des champions à votre équipe.
        </p>
      </header>

      <p className="rounded-2xl border border-dashed border-slate-800 px-6 py-16 text-center text-sm text-slate-600">
        Aucun champion à afficher.
      </p>
    </section>
  );
};

export default ChampionsPage;
