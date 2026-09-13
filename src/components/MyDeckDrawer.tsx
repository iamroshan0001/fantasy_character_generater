import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ExternalLink, Shield, Sparkles, Heart, Sword, Layers, BookmarkCheck } from 'lucide-react';
import { SavedDeckCard } from '../types.ts';
import { ClassIcon } from './ClassIcon.tsx';

interface MyDeckDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  deck: SavedDeckCard[];
  onSelectCard: (card: SavedDeckCard) => void;
  onRemoveCard: (characterId: string) => void;
  activeCharacterId?: string;
}

export function MyDeckDrawer({
  isOpen,
  onClose,
  deck,
  onSelectCard,
  onRemoveCard,
  activeCharacterId,
}: MyDeckDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/85 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-stone-900 border-2 border-amber-600/60 rounded-2xl shadow-2xl shadow-amber-950/80 flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-amber-900/40 bg-stone-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200">
                    My Deck
                  </h2>
                  <p className="text-xs text-stone-300">
                    {deck.length} {deck.length === 1 ? 'champion' : 'champions'} vaulted in your grimoire
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                aria-label="Close My Deck modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Deck List Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {deck.length === 0 ? (
                <div className="py-14 px-4 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-stone-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400/60">
                    <BookmarkCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-amber-200">
                    Your Deck is Empty
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
                    Summon or inspect an adventurer and tap the <span className="text-amber-400 font-semibold">"Save to Deck"</span> button to keep your favorite cards archived here.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deck.map((item) => {
                    const isSelected = activeCharacterId === item.character.id;
                    return (
                      <div
                        key={item.character.id}
                        className={`p-3.5 rounded-xl bg-stone-950/90 border-2 transition-all relative group flex flex-col justify-between ${
                          isSelected
                            ? 'border-amber-400 shadow-lg shadow-amber-500/20'
                            : 'border-stone-800 hover:border-amber-600/50'
                        }`}
                      >
                        {/* Top: Class & Name */}
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-stone-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                                <ClassIcon
                                  name={item.character.classInfo.iconName}
                                  className="w-4 h-4"
                                />
                              </div>
                              <div>
                                <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 line-clamp-1">
                                  {item.character.fullName}
                                </h4>
                                <span className="text-[10px] text-amber-400/90 block">
                                  {item.character.characterClass} • {item.character.originRealm}
                                </span>
                              </div>
                            </div>

                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-900 border border-stone-700 text-stone-300 shrink-0">
                              {item.character.alignment}
                            </span>
                          </div>

                          {/* Portrait preview if available */}
                          {item.portraitUrl && (
                            <div className="my-2 h-24 rounded-lg overflow-hidden bg-stone-900 border border-stone-800 flex items-center justify-center">
                              <img
                                src={item.portraitUrl}
                                alt={item.character.fullName}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}

                          {/* Stats mini badge */}
                          <div className="grid grid-cols-3 gap-1.5 my-2.5 text-[11px] font-mono">
                            <div className="flex items-center gap-1 px-2 py-1 rounded bg-stone-900 border border-rose-900/40 text-rose-300">
                              <Heart className="w-3 h-3 text-rose-500 shrink-0" />
                              <span>{item.character.stats.health} HP</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 rounded bg-stone-900 border border-indigo-900/40 text-indigo-300">
                              <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
                              <span>{item.character.stats.mana} MP</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 rounded bg-stone-900 border border-amber-900/40 text-amber-300">
                              <Sword className="w-3 h-3 text-amber-400 shrink-0" />
                              <span>{item.character.stats.strength} STR</span>
                            </div>
                          </div>

                          {/* Backstory preview if saved */}
                          {item.backstory && (
                            <p className="text-[11px] font-serif italic text-stone-300/80 line-clamp-2 mb-2 bg-stone-900/50 p-1.5 rounded border border-stone-800">
                              "{item.backstory}"
                            </p>
                          )}
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800/80 mt-1">
                          <button
                            type="button"
                            onClick={() => {
                              onSelectCard(item);
                              onClose();
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{isSelected ? 'Currently Loaded' : 'Load Player Card'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => onRemoveCard(item.character.id)}
                            className="p-1.5 rounded-lg bg-stone-900 hover:bg-rose-950/60 text-stone-400 hover:text-rose-400 border border-stone-800 hover:border-rose-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                            title="Remove from My Deck"
                            aria-label={`Remove ${item.character.fullName} from deck`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 border-t border-amber-900/40 bg-stone-950/80 flex items-center justify-between text-xs text-stone-400">
              <span>Deck changes automatically save to browser storage</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
              >
                Close Deck
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
