import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Image as ImageIcon, Shield } from 'lucide-react';
import { FantasyCharacter } from '../types.ts';
import { generatePortraitDataUrl } from '../utils/portraitGenerator.ts';

interface CharacterPortraitProps {
  character: FantasyCharacter;
  portraitUrl: string | null;
  onPortraitChange: (url: string) => void;
}

export function CharacterPortrait({
  character,
  portraitUrl,
  onPortraitChange,
}: CharacterPortraitProps) {
  const [variantSeed, setVariantSeed] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [actionType, setActionType] = useState<'generate' | 'regenerate' | null>(null);

  const handleGeneratePortrait = () => {
    setIsGenerating(true);
    setActionType('generate');
    setTimeout(() => {
      const newSeed = Math.floor(Math.random() * 100);
      setVariantSeed(newSeed);
      const url = generatePortraitDataUrl({
        characterClass: character.characterClass,
        characterName: character.fullName,
        variantSeed: newSeed,
      });
      onPortraitChange(url);
      setIsGenerating(false);
      setActionType(null);
    }, 280);
  };

  const handleRegeneratePortrait = () => {
    setIsGenerating(true);
    setActionType('regenerate');
    setTimeout(() => {
      // Ensure a different variation on regenerate
      const nextSeed = variantSeed + 1 + Math.floor(Math.random() * 3);
      setVariantSeed(nextSeed);
      const url = generatePortraitDataUrl({
        characterClass: character.characterClass,
        characterName: character.fullName,
        variantSeed: nextSeed,
      });
      onPortraitChange(url);
      setIsGenerating(false);
      setActionType(null);
    }, 280);
  };

  return (
    <div id="character-portrait-section" className="space-y-4">
      {/* Portrait Stage Container */}
      <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-stone-950 border-2 border-stone-800 p-2 shadow-2xl flex items-center justify-center overflow-hidden group">
        {/* Decorative RPG corner accents */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-400/70 pointer-events-none" />
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-amber-400/70 pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-amber-400/70 pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-400/70 pointer-events-none" />

        {/* Loading Overlay */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              key="loading-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-stone-950/85 backdrop-blur-xs flex flex-col items-center justify-center gap-2 p-3 text-center"
            >
              <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
              <span className="text-xs text-amber-200 font-medium tracking-wide">
                {actionType === 'regenerate' ? 'Regenerating Portrait...' : 'Generating Portrait...'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portrait Image or Empty Placeholder */}
        <AnimatePresence mode="wait">
          {portraitUrl ? (
            <motion.div
              key={portraitUrl}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              <img
                id="character-portrait-image"
                src={portraitUrl}
                alt={`${character.fullName} (${character.characterClass}) cartoon portrait`}
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full rounded-xl bg-stone-900/80 border border-dashed border-stone-800 flex flex-col items-center justify-center gap-2 p-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-stone-800/80 flex items-center justify-center text-amber-400/80">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="text-xs text-stone-400 font-medium leading-relaxed">
                No portrait generated yet
              </p>
              <span className="text-[11px] text-stone-400">
                {character.characterClass} avatar ready
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Required Portrait Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
        <button
          type="button"
          id="generate-portrait-button"
          onClick={handleGeneratePortrait}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400/40"
        >
          <Sparkles className="w-4 h-4 text-stone-950" />
          <span>Generate Portrait</span>
        </button>

        <button
          type="button"
          id="regenerate-portrait-button"
          onClick={handleRegeneratePortrait}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 active:bg-stone-600 text-stone-200 hover:text-white font-medium text-xs sm:text-sm border border-stone-700/80 shadow-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-stone-500/40"
        >
          <RefreshCw className="w-4 h-4 text-amber-400" />
          <span>Regenerate Portrait</span>
        </button>
      </div>
    </div>
  );
}
