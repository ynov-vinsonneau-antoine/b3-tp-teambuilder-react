import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="text-center">
        <h1 className="bg-linear-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
          Team Builder
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
          Composez une équipe de cinq champions de League of Legends, et laissez
          l'application vous dire ce qu'elle vaut.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/champions"
            className="rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
          >
            Parcourir les champions
          </Link>
          <Link
            to="/equipe"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-900 hover:text-slate-50"
          >
            Voir mon équipe
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="font-semibold text-slate-50">Tous les champions</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Le roster complet, avec le rôle, le titre et la difficulté de
            chacun. Filtrez, cherchez, comparez.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="font-semibold text-slate-50">Cinq slots</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Ajoutez, retirez, recommencez. Votre composition vous suit d'une
            page à l'autre.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="font-semibold text-slate-50">L'analyse</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Rôles couverts, rôles manquants, difficulté moyenne. Mise à jour à
            chaque champion ajouté.
          </p>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
