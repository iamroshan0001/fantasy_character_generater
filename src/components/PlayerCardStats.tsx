import { Heart, Sparkles, Sword } from 'lucide-react';
import { CharacterStats } from '../types.ts';

interface PlayerCardStatsProps {
  stats: CharacterStats;
}

export function PlayerCardStats({ stats }: PlayerCardStatsProps) {
  // Max benchmark references for proportional visual meters (60-200 range)
  const healthPercent = Math.min(100, Math.round((stats.health / 180) * 100));
  const manaPercent = Math.min(100, Math.round((stats.mana / 195) * 100));
  const strengthPercent = Math.min(100, Math.round((stats.strength / 100) * 100));

  return (
    <div id="player-card-stats" className="w-full space-y-2">
      <div className="flex items-center justify-between text-[11px] font-cinzel font-semibold tracking-wider text-amber-300/90 uppercase px-0.5">
        <span>Combat Attributes</span>
        <span className="text-[10px] text-stone-400 font-mono">D&D / TCG Statblock</span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {/* Health Stat Block */}
        <div
          id="stat-health-block"
          className="relative group p-2.5 rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-rose-950/40 border-2 border-rose-900/50 shadow-md flex flex-col justify-between overflow-hidden"
        >
          {/* Top highlight glow */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent" />
          
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-300/90 flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500/30 shrink-0" />
              Health
            </span>
            <span className="text-[9px] text-stone-400 font-mono">HP</span>
          </div>

          <div className="flex items-baseline gap-1 my-0.5">
            <span id="stat-health-value" className="text-xl sm:text-2xl font-bold font-mono text-rose-100 tracking-tight">
              {stats.health}
            </span>
          </div>

          {/* Stat progress bar */}
          <div className="w-full h-1.5 rounded-full bg-stone-950 border border-rose-950/80 overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full transition-all duration-500"
              style={{ width: `${healthPercent}%` }}
            />
          </div>
        </div>

        {/* Mana Stat Block */}
        <div
          id="stat-mana-block"
          className="relative group p-2.5 rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-indigo-950/40 border-2 border-indigo-900/50 shadow-md flex flex-col justify-between overflow-hidden"
        >
          {/* Top highlight glow */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-300/90 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
              Mana
            </span>
            <span className="text-[9px] text-stone-400 font-mono">MP</span>
          </div>

          <div className="flex items-baseline gap-1 my-0.5">
            <span id="stat-mana-value" className="text-xl sm:text-2xl font-bold font-mono text-indigo-100 tracking-tight">
              {stats.mana}
            </span>
          </div>

          {/* Stat progress bar */}
          <div className="w-full h-1.5 rounded-full bg-stone-950 border border-indigo-950/80 overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${manaPercent}%` }}
            />
          </div>
        </div>

        {/* Strength Stat Block */}
        <div
          id="stat-strength-block"
          className="relative group p-2.5 rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-amber-950/40 border-2 border-amber-900/50 shadow-md flex flex-col justify-between overflow-hidden"
        >
          {/* Top highlight glow */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />

          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300/90 flex items-center gap-1">
              <Sword className="w-3 h-3 text-amber-400 shrink-0" />
              Strength
            </span>
            <span className="text-[9px] text-stone-400 font-mono">STR</span>
          </div>

          <div className="flex items-baseline gap-1 my-0.5">
            <span id="stat-strength-value" className="text-xl sm:text-2xl font-bold font-mono text-amber-100 tracking-tight">
              {stats.strength}
            </span>
          </div>

          {/* Stat progress bar */}
          <div className="w-full h-1.5 rounded-full bg-stone-950 border border-amber-950/80 overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${strengthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
