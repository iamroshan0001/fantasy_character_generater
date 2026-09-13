/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dices,
  Copy,
  Check,
  Shield,
  Compass,
  ScrollText,
  Flame,
  Feather,
  RefreshCw,
  Layers,
  BookmarkPlus,
  BookmarkCheck,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { FantasyCharacter, SavedDeckCard } from './types.ts';
import { generateRandomCharacter } from './data/characters.ts';
import { ClassIcon } from './components/ClassIcon.tsx';
import { CharacterPortrait } from './components/CharacterPortrait.tsx';
import { MagicalParticles } from './components/MagicalParticles.tsx';
import { PlayerCardStats } from './components/PlayerCardStats.tsx';
import { MyDeckDrawer } from './components/MyDeckDrawer.tsx';
import { generateBackstory } from './utils/backstoryGenerator.ts';

const DECK_STORAGE_KEY = 'fantasy_character_deck_v1';

export default function App() {
  const [character, setCharacter] = useState<FantasyCharacter | null>(() => generateRandomCharacter());
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);
  const [backstory, setBackstory] = useState<string | null>(null);
  const [isGeneratingBackstory, setIsGeneratingBackstory] = useState<boolean>(false);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedFeedback, setSavedFeedback] = useState<boolean>(false);
  const [rollCount, setRollCount] = useState<number>(1);
  const [nameFont, setNameFont] = useState<'uncial' | 'cinzel'>('uncial');
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);

  // Load saved deck from localStorage
  const [deck, setDeck] = useState<SavedDeckCard[]>(() => {
    try {
      const saved = localStorage.getItem(DECK_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [];
  });

  // Sync deck to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
    } catch {
      // Handle storage quota or error silently
    }
  }, [deck]);

  const isCurrentCardInDeck = character
    ? deck.some((card) => card.character.id === character.id)
    : false;

  const handleGenerate = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newChar = generateRandomCharacter();
      setCharacter(newChar);
      setPortraitUrl(null); // Reset portrait for newly rolled adventurer
      setBackstory(null); // Reset backstory for newly rolled adventurer
      setRollCount((prev) => prev + 1);
      setIsRolling(false);
      setCopied(false);
      setSavedFeedback(false);
    }, 220);
  };

  const handleGenerateBackstory = () => {
    if (!character) return;
    setIsGeneratingBackstory(true);
    setTimeout(() => {
      const story = generateBackstory(character);
      setBackstory(story);
      setIsGeneratingBackstory(false);
    }, 200);
  };

  const handleSaveToDeck = () => {
    if (!character) return;

    const existingIndex = deck.findIndex((card) => card.character.id === character.id);

    if (existingIndex >= 0) {
      // Update existing saved card with current portrait/backstory
      const updated = [...deck];
      updated[existingIndex] = {
        character,
        portraitUrl,
        backstory,
        savedAt: Date.now(),
      };
      setDeck(updated);
    } else {
      // Add new card to deck
      const newSavedCard: SavedDeckCard = {
        character,
        portraitUrl,
        backstory,
        savedAt: Date.now(),
      };
      setDeck([newSavedCard, ...deck]);
    }

    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2400);
  };

  const handleRemoveFromDeck = (id: string) => {
    setDeck((prev) => prev.filter((item) => item.character.id !== id));
  };

  const handleSelectDeckCard = (savedCard: SavedDeckCard) => {
    setCharacter(savedCard.character);
    setPortraitUrl(savedCard.portraitUrl);
    setBackstory(savedCard.backstory);
    setCopied(false);
    setSavedFeedback(false);
  };

  const handleCopy = async () => {
    if (!character) return;
    let text = `=== ${character.fullName} ===\nClass: ${character.characterClass} (${character.originRealm})\nAlignment: ${character.alignment}\nStats: HP ${character.stats.health} | MP ${character.stats.mana} | STR ${character.stats.strength}`;
    if (backstory) {
      text += `\nOrigin: ${backstory}`;
    }
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen workbench-bg text-stone-100 flex flex-col items-center justify-center p-3 sm:p-6 select-none font-sans relative overflow-x-hidden">
      {/* Subtle background ambient mystical alchemy watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-10"
      >
        <svg
          viewBox="0 0 600 600"
          className="w-[700px] h-[700px] text-amber-500 animate-spin"
          style={{ animationDuration: '160s' }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="300" cy="300" r="280" strokeDasharray="8 6" />
          <circle cx="300" cy="300" r="230" />
          <circle cx="300" cy="300" r="170" strokeDasharray="4 4" />
          <polygon points="300,70 482,385 118,385" strokeWidth="1.5" />
          <polygon points="300,530 482,215 118,215" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="75" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating magical ember particles */}
      <MagicalParticles />

      {/* Main Alchemical Workbench Content */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-5 relative z-10">
        
        {/* App Header with Deck Trigger Bar */}
        <header className="w-full text-center space-y-2">
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-400 text-xs font-medium tracking-wide shadow-lg shadow-amber-950/40 backdrop-blur-xs">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-serif tracking-wider">Alchemist's Workbench</span>
            </div>

            {/* My Deck Button */}
            <button
              type="button"
              id="my-deck-button"
              onClick={() => setIsDeckOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/95 hover:bg-stone-800 text-amber-300 hover:text-amber-200 border border-amber-600/50 text-xs font-semibold shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              title="View your saved character deck"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>My Deck</span>
              <span className="px-1.5 py-0.2 rounded-full bg-amber-500/25 text-amber-300 font-mono text-[11px] font-bold">
                {deck.length}
              </span>
            </button>
          </div>

          <h1 className="text-2.5xl sm:text-3xl font-cinzel tracking-wider text-amber-100 font-bold drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)]">
            Fantasy Character Player Card
          </h1>
          <p className="text-stone-300/80 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
            Summon, customize, and archive legendary hero cards with combat stats and origin chronicles.
          </p>
        </header>

        {/* Bordered Player Card Display Stage */}
        <main className="w-full relative">
          {/* Ambient golden aura behind the card */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600/25 via-yellow-500/20 to-purple-600/25 rounded-3xl blur-xl opacity-70 pointer-events-none" />

          <AnimatePresence mode="wait">
            {character ? (
              <motion.article
                key={character.id}
                id="player-card"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="player-card-frame rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm"
              >
                {/* Antique corner metal brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-300 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-300 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-300 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-300 pointer-events-none" />

                {/* Card Top Gold Filigree Header Ribbon */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-amber-600/40 bg-stone-950/60 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 px-4 py-3 sm:px-6">
                  {/* Class Badge & Crest */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-stone-950 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                      <ClassIcon name={character.classInfo.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          id="character-class"
                          className="text-base sm:text-lg font-cinzel font-bold text-amber-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                        >
                          {character.characterClass}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/70 border border-amber-700/60 text-amber-300 font-mono">
                          Lvl 1
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-300 tracking-wide block">
                        {character.classInfo.category}
                      </span>
                    </div>
                  </div>

                  {/* Font switcher pill */}
                  <div className="flex items-center gap-1 bg-stone-950/90 p-0.5 rounded-lg border border-amber-900/50 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setNameFont('uncial')}
                      className={`px-2 py-0.5 rounded font-uncial transition-colors ${
                        nameFont === 'uncial'
                          ? 'bg-amber-500/30 text-amber-300 font-bold'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                      title="Display with Uncial Antiqua font"
                    >
                      Uncial
                    </button>
                    <button
                      type="button"
                      onClick={() => setNameFont('cinzel')}
                      className={`px-2 py-0.5 rounded font-cinzel transition-colors ${
                        nameFont === 'cinzel'
                          ? 'bg-amber-500/30 text-amber-300 font-bold'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                      title="Display with Cinzel Decorative font"
                    >
                      Cinzel
                    </button>
                  </div>
                </div>

                {/* Card Title Box: Character Name */}
                <div className="player-card-inner-box p-3 rounded-xl mb-4 text-center space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400/80 font-medium block">
                    Hero Name
                  </span>
                  <h2
                    id="character-name"
                    className={`text-2xl sm:text-3xl font-bold text-amber-100 tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] ${
                      nameFont === 'uncial' ? 'font-uncial' : 'font-cinzel'
                    }`}
                  >
                    {character.fullName}
                  </h2>
                  <p className="text-stone-300/80 text-xs italic font-serif">
                    "{character.classInfo.flavor}"
                  </p>
                </div>

                {/* Card Artwork Window / Portrait */}
                <div className="mb-4 p-3 rounded-xl bg-stone-950/80 border-2 border-amber-900/50 shadow-inner">
                  <CharacterPortrait
                    character={character}
                    portraitUrl={portraitUrl}
                    onPortraitChange={setPortraitUrl}
                  />
                </div>

                {/* Random Combat Attributes: Health, Mana, Strength */}
                <div className="mb-4 player-card-inner-box p-3 sm:p-3.5 rounded-xl">
                  <PlayerCardStats stats={character.stats} />
                </div>

                {/* Origin Chronicle / Lore Box */}
                <div className="mb-4 player-card-inner-box p-3 sm:p-3.5 rounded-xl space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-cinzel font-bold tracking-wider text-amber-300">
                      <Feather className="w-3.5 h-3.5 text-amber-400" />
                      <span>Origin Chronicle</span>
                    </div>

                    <button
                      type="button"
                      id="generate-backstory-button"
                      onClick={handleGenerateBackstory}
                      disabled={isGeneratingBackstory}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 active:bg-amber-500/40 text-amber-300 text-xs font-semibold border border-amber-500/40 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                    >
                      {isGeneratingBackstory ? (
                        <>
                          <RefreshCw className="w-3 h-3 animate-spin text-amber-400" />
                          <span>Inscribing...</span>
                        </>
                      ) : backstory ? (
                        <>
                          <RefreshCw className="w-3 h-3 text-amber-400" />
                          <span>Regenerate Lore</span>
                        </>
                      ) : (
                        <>
                          <Feather className="w-3 h-3 text-amber-400" />
                          <span>Generate Backstory</span>
                        </>
                      )}
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {backstory ? (
                      <motion.div
                        key={backstory}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="p-3 rounded-lg bg-stone-950/70 border border-amber-900/40 text-stone-200 text-xs sm:text-sm font-serif leading-relaxed italic"
                      >
                        <p id="character-backstory" className="text-amber-100/95">
                          "{backstory}"
                        </p>
                      </motion.div>
                    ) : (
                      <p className="text-[11px] sm:text-xs text-stone-400 text-center py-1">
                        Tap <span className="text-amber-300 font-medium">"Generate Backstory"</span> to inscribe a unique one-to-two-sentence origin tale.
                      </p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Realm & Alignment Lore Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-stone-950/80 rounded-xl p-2.5 border border-amber-900/30 text-xs">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Realm</span>
                      <span className="text-amber-100 font-medium text-[11px] sm:text-xs truncate block max-w-[130px]">
                        {character.originRealm}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ScrollText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Alignment</span>
                      <span className="text-amber-100 font-medium text-[11px] sm:text-xs">
                        {character.alignment}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions: Save to Deck & Copy Inscription */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t-2 border-amber-600/30 bg-stone-950/60 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 px-4 py-3 sm:px-6">
                  {/* Save to Deck Button */}
                  <button
                    type="button"
                    id="save-to-deck-button"
                    onClick={handleSaveToDeck}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer shadow-md focus:outline-none focus:ring-2 ${
                      isCurrentCardInDeck || savedFeedback
                        ? 'bg-emerald-950/70 border-emerald-500/70 text-emerald-300 focus:ring-emerald-400/40'
                        : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 border-amber-400 focus:ring-amber-400/40'
                    }`}
                    title="Save this player card to My Deck"
                  >
                    {isCurrentCardInDeck || savedFeedback ? (
                      <>
                        <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                        <span>{savedFeedback ? 'Saved to Deck!' : 'Saved in Deck'}</span>
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="w-4 h-4 text-stone-950" />
                        <span>Save to Deck</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id="copy-button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-200 text-xs font-medium border border-amber-900/40 hover:border-amber-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                      title="Copy card details to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Inscribed</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-amber-400" />
                          <span>Copy Card</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsDeckOpen(true)}
                      className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-900/40 transition-colors"
                      title="Open My Deck"
                      aria-label="Open My Deck"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <div
                id="empty-card"
                className="player-card-frame rounded-2xl p-10 text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-stone-950 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-cinzel font-semibold text-amber-200">No Adventurer Summoned</h3>
                  <p className="text-sm text-stone-300">Stir the alchemical alembic to conjure your first fantasy hero.</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </main>

        {/* Primary Generator Action Button */}
        <div className="w-full flex justify-center pt-1">
          <motion.button
            id="generate-button"
            type="button"
            onClick={handleGenerate}
            disabled={isRolling}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-w-[260px] px-8 py-3.5 rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-stone-950 font-bold text-base font-cinzel tracking-wider shadow-lg shadow-amber-950/60 border border-amber-300/40 inline-flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-amber-500/30"
          >
            <motion.span
              animate={isRolling ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Dices className="w-5 h-5 text-stone-950" />
            </motion.span>
            <span>{isRolling ? 'Incanting...' : 'Generate New Player Card'}</span>
          </motion.button>
        </div>

        {/* Informative Footer note */}
        <footer className="text-center text-xs text-stone-400">
          Saved cards remain in <span className="text-amber-300 font-medium">"My Deck"</span> across visits.
        </footer>
      </div>

      {/* My Deck Modal / Drawer */}
      <MyDeckDrawer
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        deck={deck}
        onSelectCard={handleSelectDeckCard}
        onRemoveCard={handleRemoveFromDeck}
        activeCharacterId={character?.id}
      />
    </div>
  );
}
