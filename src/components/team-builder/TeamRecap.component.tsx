import useTeamStore from "../../store/champions.store";

const ALL_ROLES = [
  "Assassin",
  "Fighter",
  "Mage",
  "Marksman",
  "Support",
  "Tank",
];

const TeamRecap = () => {
  const { team } = useTeamStore();

  if (team.length === 0) return null;

  const roles = ALL_ROLES.filter((role) =>
    team.some((champion) => champion.tags.includes(role))
  );
  const missingRoles = ALL_ROLES.filter((role) => !roles.includes(role));

  const total = team.reduce(
    (sum, champion) => sum + champion.info.difficulty,
    0
  );
  const average = total / team.length;

  return (
    <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h2 className="mb-3 text-sm font-semibold text-slate-300">
        Récapitulatif
      </h2>

      <div className="grid gap-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-xs text-slate-500">Rôles couverts</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-500">Rôles manquants</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {missingRoles.length === 0 ? (
              <span className="text-xs text-emerald-400">Aucun</span>
            ) : (
              missingRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-500"
                >
                  {role}
                </span>
              ))
            )}
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-500">Difficulté moyenne</p>
          <p className="mt-1 text-2xl font-bold text-slate-50">
            {average.toFixed(1)}
            <span className="text-sm font-normal text-slate-500"> / 10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamRecap;
