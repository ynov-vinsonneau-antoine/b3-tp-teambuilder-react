import Button from "../ui/Button.component";

type TeamSlotProps = {
  champion?: string;
  onRemove: () => void;
};

const TeamSlot = ({ champion, onRemove }: TeamSlotProps) => {
  if (!champion) {
    return (
      <div className="flex h-20 flex-1 items-center justify-center rounded-xl border border-dashed border-slate-800 text-2xl text-slate-700">
        +
      </div>
    );
  }

  return (
    <div className="flex h-20 flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-violet-500/50 bg-violet-500/10 px-2 text-center text-sm font-semibold text-slate-100">
      {champion}
      <Button variant="danger" onClick={onRemove}>
        Supprimer
      </Button>
    </div>
  );
};

export default TeamSlot;
