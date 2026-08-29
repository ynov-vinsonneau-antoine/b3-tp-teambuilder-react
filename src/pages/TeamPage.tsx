import useTeamStore, { MAX_TEAM_SIZE } from "../store/team.store";
import TeamSlots from "../components/team/TeamSlots.component";
import TeamRecap from "../components/team/TeamRecap.component";
import TeamWeaknesses from "../components/team/TeamWeaknesses.component";

const TeamPage = () => {
  const { team } = useTeamStore();

  return (
    <section>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Mon équipe
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {team.length} Pokémon sur {MAX_TEAM_SIZE}. Les fiches s'ajoutent
          depuis le Pokédex.
        </p>
      </header>

      <TeamSlots />
      <TeamRecap />
      <TeamWeaknesses />
    </section>
  );
};

export default TeamPage;
