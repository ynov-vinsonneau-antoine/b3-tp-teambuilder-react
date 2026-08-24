import TeamBuilder from "../components/team-builder/TeamBuilder.component";

const TeamPage = () => {
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">Équipe</h1>
        <p className="mt-1 text-sm text-slate-400">
          Cinq slots, et l'analyse de votre composition.
        </p>
      </header>

      <TeamBuilder />
    </section>
  );
};

export default TeamPage;
