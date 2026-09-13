/**
 * Cartoon / Video-Game style portrait generator for fantasy RPG characters.
 * Returns a high-resolution, self-contained SVG Data URI matching the character's class.
 */

export interface PortraitConfig {
  characterClass: string;
  characterName: string;
  variantSeed: number;
}

export function generatePortraitDataUrl(config: PortraitConfig): string {
  const { characterClass, characterName, variantSeed } = config;
  const seed = Math.abs(variantSeed);
  const variant = seed % 4; // 4 distinct visual styles per class

  // SVG dimensions
  const width = 400;
  const height = 400;

  // Background and character color palettes based on class & variant
  const svgContent = getCharacterSvg({
    characterClass,
    characterName,
    variant,
    seed,
  });

  // Convert SVG string to Data URL
  const encodedSvg = encodeURIComponent(svgContent)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');

  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
}

interface SvgOptions {
  characterClass: string;
  characterName: string;
  variant: number;
  seed: number;
}

function getCharacterSvg(options: SvgOptions): string {
  const { characterClass, characterName, variant, seed } = options;

  switch (characterClass) {
    case 'Warrior':
      return getWarriorSvg(variant, characterName);
    case 'Mage':
      return getMageSvg(variant, characterName);
    case 'Rogue':
      return getRogueSvg(variant, characterName);
    case 'Paladin':
      return getPaladinSvg(variant, characterName);
    case 'Ranger':
      return getRangerSvg(variant, characterName);
    case 'Cleric':
      return getClericSvg(variant, characterName);
    case 'Druid':
      return getDruidSvg(variant, characterName);
    case 'Bard':
      return getBardSvg(variant, characterName);
    case 'Warlock':
      return getWarlockSvg(variant, characterName);
    case 'Monk':
      return getMonkSvg(variant, characterName);
    default:
      return getWarriorSvg(variant, characterName);
  }
}

// ------------------- WARRIOR -------------------
function getWarriorSvg(variant: number, name: string): string {
  const plateColors = [
    { main: '#78716c', trim: '#f59e0b', bg1: '#451a03', bg2: '#1c1917', title: 'Iron Vanguard' },
    { main: '#475569', trim: '#38bdf8', bg1: '#0f172a', bg2: '#020617', title: 'Frostguard Hero' },
    { main: '#854d0e', trim: '#fbbf24', bg1: '#713f12', bg2: '#1c1917', title: 'Golden Berserker' },
    { main: '#3f3f46', trim: '#ef4444', bg1: '#7f1d1d', bg2: '#18181b', title: 'Bloodforge Champion' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="wbg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="${plateColors.bg1}" />
        <stop offset="100%" stop-color="${plateColors.bg2}" />
      </radialGradient>
      <linearGradient id="armor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${plateColors.main}" />
        <stop offset="100%" stop-color="#292524" />
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="400" height="400" rx="20" fill="url(#wbg)" />
    <circle cx="200" cy="180" r="140" fill="none" stroke="${plateColors.trim}" stroke-width="2" stroke-opacity="0.25" stroke-dasharray="8 6" />

    <!-- Big Shoulders / Armor Body -->
    <path d="M70 370 C70 280, 120 250, 160 250 L240 250 C280 250, 330 280, 330 370 Z" fill="url(#armor)" stroke="#1c1917" stroke-width="5" />
    <!-- Chestplate Emblem -->
    <path d="M175 270 L200 310 L225 270 Z" fill="${plateColors.trim}" stroke="#1c1917" stroke-width="3" />
    <circle cx="200" cy="275" r="5" fill="#fef08a" />

    <!-- Pauldrons with Spikes -->
    <path d="M50 290 Q80 230, 140 250 L110 320 Z" fill="${plateColors.main}" stroke="#1c1917" stroke-width="5" />
    <path d="M350 290 Q320 230, 260 250 L290 320 Z" fill="${plateColors.main}" stroke="#1c1917" stroke-width="5" />
    <!-- Pauldron Trim -->
    <path d="M55 285 L95 242" stroke="${plateColors.trim}" stroke-width="4" stroke-linecap="round" />
    <path d="M345 285 L305 242" stroke="${plateColors.trim}" stroke-width="4" stroke-linecap="round" />

    <!-- Neck & Face -->
    <rect x="175" y="210" width="50" height="45" rx="6" fill="#fca5a5" stroke="#1c1917" stroke-width="4" />
    <path d="M150 170 C150 225, 250 225, 250 170 L250 130 C250 100, 150 100, 150 130 Z" fill="#fed7aa" stroke="#1c1917" stroke-width="5" />

    <!-- Warrior Helmet / Horns -->
    <path d="M140 130 Q200 80, 260 130 L255 175 Q200 200, 145 175 Z" fill="${plateColors.main}" stroke="#1c1917" stroke-width="5" />
    <!-- Helmet Brow & Horns -->
    <path d="M135 130 Q100 80, 80 110 Q115 135, 140 145" fill="${plateColors.trim}" stroke="#1c1917" stroke-width="4" />
    <path d="M265 130 Q300 80, 320 110 Q285 135, 260 145" fill="${plateColors.trim}" stroke="#1c1917" stroke-width="4" />
    
    <!-- Helmet T-Visor with glowing eyes -->
    <rect x="170" y="145" width="60" height="14" rx="3" fill="#1c1917" />
    <rect x="194" y="145" width="12" height="36" fill="#1c1917" />
    <!-- Glowing eyes inside helmet slit -->
    <circle cx="185" cy="152" r="3.5" fill="${plateColors.trim}" />
    <circle cx="215" cy="152" r="3.5" fill="${plateColors.trim}" />

    <!-- Battle Scar / War Paint on jaw -->
    <path d="M165 210 L172 230" stroke="#b91c1c" stroke-width="3" stroke-linecap="round" />
    <path d="M160 216 L175 224" stroke="#b91c1c" stroke-width="2.5" stroke-linecap="round" />

    <!-- Video Game Badge Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#0c0a09" stroke="${plateColors.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${plateColors.trim}" text-anchor="middle" letter-spacing="1">WARRIOR · V${variant + 1}</text>
  </svg>`;
}

// ------------------- MAGE -------------------
function getMageSvg(variant: number, name: string): string {
  const styles = [
    { robe: '#312e81', trim: '#c084fc', bg1: '#1e1b4b', bg2: '#0f172a', orb: '#38bdf8' },
    { robe: '#1e3a8a', trim: '#67e8f9', bg1: '#172554', bg2: '#020617', orb: '#a855f7' },
    { robe: '#701a75', trim: '#f472b6', bg1: '#4a044e', bg2: '#09090b', orb: '#fbbf24' },
    { robe: '#134e4a', trim: '#34d399', bg1: '#042f2e', bg2: '#020617', orb: '#22d3ee' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="mbg" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#mbg)" />
    
    <!-- Floating Runes / Stars in background -->
    <circle cx="80" cy="100" r="3" fill="${styles.trim}" opacity="0.6" />
    <circle cx="320" cy="90" r="4" fill="${styles.trim}" opacity="0.7" />
    <circle cx="100" cy="220" r="2.5" fill="${styles.orb}" opacity="0.5" />
    <circle cx="305" cy="210" r="3" fill="${styles.orb}" opacity="0.6" />

    <!-- Arcane Halo Ring -->
    <circle cx="200" cy="170" r="110" fill="none" stroke="${styles.trim}" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="6 4" />

    <!-- Wizard Robes / Shoulders -->
    <path d="M80 370 C90 270, 130 250, 165 250 L235 250 C270 250, 310 270, 320 370 Z" fill="${styles.robe}" stroke="#1e1b4b" stroke-width="5" />
    <path d="M165 250 L200 340 L235 250 Z" fill="#0f172a" stroke="${styles.trim}" stroke-width="3" />
    
    <!-- Robe Collar -->
    <path d="M150 250 Q200 280, 250 250" stroke="${styles.trim}" stroke-width="5" fill="none" />

    <!-- Wizard Head & Beard/Face -->
    <circle cx="200" cy="180" r="48" fill="#fed7aa" stroke="#1c1917" stroke-width="4" />

    <!-- Glowing Arcane Eyes -->
    <ellipse cx="182" cy="175" rx="7" ry="5" fill="${styles.orb}" filter="url(#glow)" />
    <circle cx="182" cy="175" r="2.5" fill="#ffffff" />
    <ellipse cx="218" cy="175" rx="7" ry="5" fill="${styles.orb}" filter="url(#glow)" />
    <circle cx="218" cy="175" r="2.5" fill="#ffffff" />

    <!-- Wispy Eyebrows -->
    <path d="M172 165 Q185 160, 195 168" stroke="#e0e7ff" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M228 165 Q215 160, 205 168" stroke="#e0e7ff" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Wizard Beard -->
    <path d="M165 195 Q200 275, 235 195 Q215 240, 200 245 Q185 240, 165 195 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="3" />

    <!-- Pointy Wizard Hat with Crescent Buckle -->
    <path d="M120 145 Q200 135, 280 145 Q200 120, 120 145 Z" fill="${styles.trim}" stroke="#1e1b4b" stroke-width="4" />
    <path d="M140 140 Q180 80, 220 30 Q230 70, 260 140 Z" fill="${styles.robe}" stroke="#1e1b4b" stroke-width="5" />
    <!-- Hat fold / band -->
    <path d="M145 130 Q200 120, 255 130" stroke="${styles.trim}" stroke-width="8" fill="none" />
    <!-- Crescent Moon buckle -->
    <circle cx="200" cy="125" r="8" fill="#fde047" stroke="#1c1917" stroke-width="2" />
    <circle cx="203" cy="123" r="6" fill="${styles.robe}" />

    <!-- Floating Arcane Orb near shoulder -->
    <circle cx="295" cy="240" r="16" fill="${styles.orb}" filter="url(#glow)" stroke="#ffffff" stroke-width="2" />
    <circle cx="292" cy="236" r="4" fill="#ffffff" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#0f172a" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">MAGE · V${variant + 1}</text>
  </svg>`;
}

// ------------------- ROGUE -------------------
function getRogueSvg(variant: number, name: string): string {
  const styles = [
    { cowl: '#064e3b', trim: '#34d399', eyes: '#10b981', bg1: '#022c22', bg2: '#052e16' },
    { cowl: '#1e293b', trim: '#a855f7', eyes: '#c084fc', bg1: '#0f172a', bg2: '#020617' },
    { cowl: '#27272a', trim: '#f59e0b', eyes: '#fbbf24', bg1: '#18181b', bg2: '#09090b' },
    { cowl: '#450a0a', trim: '#f87171', eyes: '#ef4444', bg1: '#1c1917', bg2: '#0c0a09' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="rbg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
      <linearGradient id="cowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${styles.cowl}" />
        <stop offset="100%" stop-color="#09090b" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#rbg)" />

    <!-- Moon silhouette & smoke wisps in background -->
    <circle cx="200" cy="160" r="120" fill="none" stroke="${styles.trim}" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="4 6" />

    <!-- Shoulders & Leather Cloak -->
    <path d="M80 370 C80 270, 130 250, 160 250 L240 250 C270 250, 320 270, 320 370 Z" fill="url(#cowlGrad)" stroke="#09090b" stroke-width="5" />
    <!-- Leather Harness & Throwing Knives -->
    <path d="M120 280 L280 350" stroke="#78350f" stroke-width="10" stroke-linecap="round" />
    <path d="M170 295 L180 315" stroke="${styles.trim}" stroke-width="4" stroke-linecap="round" />
    <path d="M190 305 L200 325" stroke="${styles.trim}" stroke-width="4" stroke-linecap="round" />

    <!-- Rogue Hood (deep shadow) -->
    <path d="M130 210 C130 110, 170 70, 200 65 C230 70, 270 110, 270 210 C270 250, 240 260, 200 260 C160 260, 130 250, 130 210 Z" fill="${styles.cowl}" stroke="#09090b" stroke-width="5" />
    
    <!-- Shadowed inner face cavern -->
    <ellipse cx="200" cy="175" rx="46" ry="50" fill="#09090b" />

    <!-- Piercing glowing cat-like eyes looking out from shadow -->
    <path d="M170 168 Q182 160, 192 170 Q182 176, 170 168 Z" fill="${styles.eyes}" />
    <circle cx="183" cy="169" r="2" fill="#ffffff" />
    <path d="M230 168 Q218 160, 208 170 Q218 176, 230 168 Z" fill="${styles.eyes}" />
    <circle cx="217" cy="169" r="2" fill="#ffffff" />

    <!-- Lower Half Face Mask / Scarf -->
    <path d="M165 190 Q200 205, 235 190 L225 235 Q200 245, 175 235 Z" fill="#18181b" stroke="#09090b" stroke-width="3" />
    <path d="M175 210 Q200 220, 225 210" stroke="${styles.trim}" stroke-width="2" fill="none" />

    <!-- Dagger blade tip visible near bottom left -->
    <path d="M100 350 L85 270 L105 285 Z" fill="#cbd5e1" stroke="#09090b" stroke-width="3" />
    <circle cx="95" cy="275" r="2.5" fill="${styles.eyes}" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#09090b" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">ROGUE · V${variant + 1}</text>
  </svg>`;
}

// ------------------- PALADIN -------------------
function getPaladinSvg(variant: number, name: string): string {
  const styles = [
    { plate: '#e2e8f0', trim: '#eab308', halo: '#fde047', bg1: '#713f12', bg2: '#1e1b4b' },
    { plate: '#cbd5e1', trim: '#38bdf8', halo: '#bae6fd', bg1: '#075985', bg2: '#0f172a' },
    { plate: '#fef08a', trim: '#f97316', halo: '#fdba74', bg1: '#7c2d12', bg2: '#18181b' },
    { plate: '#f1f5f9', trim: '#a855f7', halo: '#e9d5ff', bg1: '#581c87', bg2: '#0f172a' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="pbg" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
      <linearGradient id="palArmor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${styles.plate}" />
        <stop offset="100%" stop-color="#94a3b8" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#pbg)" />

    <!-- Radiant Sunburst Halo Rays -->
    <g stroke="${styles.halo}" stroke-width="3" opacity="0.5">
      <line x1="200" y1="40" x2="200" y2="80" />
      <line x1="130" y1="70" x2="160" y2="100" />
      <line x1="270" y1="70" x2="240" y2="100" />
      <line x1="90" y1="130" x2="130" y2="140" />
      <line x1="310" y1="130" x2="270" y2="140" />
    </g>
    <!-- Holy Circle Halo -->
    <circle cx="200" cy="155" r="95" fill="none" stroke="${styles.halo}" stroke-width="4" stroke-opacity="0.6" />

    <!-- Polished Silver/Gold Shoulders -->
    <path d="M75 370 C75 270, 125 245, 160 245 L240 245 C275 245, 325 270, 325 370 Z" fill="url(#palArmor)" stroke="#0f172a" stroke-width="5" />
    <!-- Sacred Cross / Sun Chest Crest -->
    <circle cx="200" cy="285" r="16" fill="${styles.trim}" stroke="#0f172a" stroke-width="3" />
    <path d="M200 273 L200 297 M188 285 L212 285" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />

    <!-- Winged Paladin Helmet -->
    <path d="M150 120 Q200 75, 250 120 L245 180 Q200 215, 155 180 Z" fill="url(#palArmor)" stroke="#0f172a" stroke-width="5" />
    <!-- Wing ornaments on helmet sides -->
    <path d="M145 140 Q110 90, 100 130 Q125 145, 145 155" fill="${styles.trim}" stroke="#0f172a" stroke-width="3" />
    <path d="M255 140 Q290 90, 300 130 Q275 145, 255 155" fill="${styles.trim}" stroke="#0f172a" stroke-width="3" />
    
    <!-- Helmet Gold Crown Band -->
    <path d="M150 135 L170 125 L185 135 L200 120 L215 135 L230 125 L250 135" stroke="${styles.trim}" stroke-width="4" fill="none" />

    <!-- Helmet Visor Slit with Radiant Eyes -->
    <rect x="175" y="152" width="50" height="12" rx="3" fill="#0f172a" />
    <circle cx="188" cy="158" r="3.5" fill="${styles.halo}" />
    <circle cx="212" cy="158" r="3.5" fill="${styles.halo}" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#0f172a" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">PALADIN · V${variant + 1}</text>
  </svg>`;
}

// ------------------- RANGER -------------------
function getRangerSvg(variant: number, name: string): string {
  const styles = [
    { hood: '#14532d', trim: '#f59e0b', feather: '#ef4444', bg1: '#064e3b', bg2: '#022c22' },
    { hood: '#365314', trim: '#a3e635', feather: '#38bdf8', bg1: '#1a2e05', bg2: '#0f172a' },
    { hood: '#713f12', trim: '#fbbf24', feather: '#f97316', bg1: '#451a03', bg2: '#1c1917' },
    { hood: '#1e3a8a', trim: '#38bdf8', feather: '#f43f5e', bg1: '#172554', bg2: '#030712' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="rgbg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#rgbg)" />

    <!-- Forest leaves / crosshair motif -->
    <circle cx="200" cy="170" r="105" fill="none" stroke="${styles.trim}" stroke-width="2" stroke-opacity="0.25" stroke-dasharray="8 6" />

    <!-- Leather Hunter Tunics & Quiver Strap -->
    <path d="M80 370 C80 275, 125 250, 160 250 L240 250 C275 250, 320 275, 320 370 Z" fill="#3f2e18" stroke="#1c1917" stroke-width="5" />
    <path d="M120 270 L280 340" stroke="#78350f" stroke-width="9" stroke-linecap="round" />

    <!-- Quiver & Arrows peeking behind shoulder -->
    <rect x="275" y="170" width="22" height="70" rx="4" fill="#78350f" stroke="#1c1917" stroke-width="3" transform="rotate(15 285 200)" />
    <path d="M290 150 L295 170 M300 145 L305 168 M280 155 L285 172" stroke="${styles.feather}" stroke-width="3" stroke-linecap="round" />

    <!-- Ranger Hood & Face -->
    <path d="M140 120 C140 80, 170 70, 200 68 C230 70, 260 80, 260 120 L265 200 C265 245, 235 255, 200 255 C165 255, 135 245, 135 200 Z" fill="${styles.hood}" stroke="#1c1917" stroke-width="5" />
    <ellipse cx="200" cy="170" rx="42" ry="46" fill="#fed7aa" stroke="#1c1917" stroke-width="3" />

    <!-- Archer Feather in Cap -->
    <path d="M245 95 Q285 45, 305 60 Q275 85, 255 105 Z" fill="${styles.feather}" stroke="#1c1917" stroke-width="3" />
    <path d="M255 95 L295 65" stroke="#ffffff" stroke-width="1.5" />

    <!-- Ranger Eyes with keen focused gaze -->
    <ellipse cx="185" cy="165" rx="5" ry="4" fill="#1c1917" />
    <circle cx="187" cy="164" r="1.5" fill="#ffffff" />
    <ellipse cx="215" cy="165" rx="5" ry="4" fill="#1c1917" />
    <circle cx="217" cy="164" r="1.5" fill="#ffffff" />
    
    <!-- Camouflage War Paint stripes on cheeks -->
    <path d="M170 180 L188 180 M172 186 L186 186" stroke="${styles.trim}" stroke-width="2.5" stroke-linecap="round" />
    <path d="M212 180 L230 180 M214 186 L228 186" stroke="${styles.trim}" stroke-width="2.5" stroke-linecap="round" />

    <!-- Confident slight smile -->
    <path d="M192 198 Q200 205, 208 198" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" fill="none" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#14532d" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">RANGER · V${variant + 1}</text>
  </svg>`;
}

// ------------------- CLERIC -------------------
function getClericSvg(variant: number, name: string): string {
  const styles = [
    { robe: '#f8fafc', trim: '#f43f5e', halo: '#fda4af', bg1: '#4c0519', bg2: '#0f172a' },
    { robe: '#f1f5f9', trim: '#eab308', halo: '#fde047', bg1: '#713f12', bg2: '#18181b' },
    { robe: '#e0e7ff', trim: '#6366f1', halo: '#a5b4fc', bg1: '#312e81', bg2: '#0f172a' },
    { robe: '#ecfdf5', trim: '#10b981', halo: '#6ee7b7', bg1: '#064e3b', bg2: '#022c22' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="cbg" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#cbg)" />

    <!-- Divine Candlelight / Sanctuary ring -->
    <circle cx="200" cy="155" r="90" fill="none" stroke="${styles.halo}" stroke-width="3" stroke-dasharray="4 6" opacity="0.6" />

    <!-- Priest / Cleric Vestments -->
    <path d="M75 370 C75 270, 125 250, 160 250 L240 250 C275 250, 325 270, 325 370 Z" fill="${styles.robe}" stroke="#0f172a" stroke-width="5" />
    <!-- Stole / Scarf -->
    <path d="M165 250 L165 370 M235 250 L235 370" stroke="${styles.trim}" stroke-width="8" />

    <!-- Sacred Talisman Amulet around neck -->
    <circle cx="200" cy="285" r="14" fill="${styles.trim}" stroke="#0f172a" stroke-width="2" />
    <path d="M200 277 L200 293 M192 285 L208 285" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />

    <!-- Cleric Face & Cowl -->
    <path d="M145 130 C145 90, 170 80, 200 78 C230 80, 255 90, 255 130 L255 210 C255 245, 230 255, 200 255 C170 255, 145 245, 145 210 Z" fill="${styles.robe}" stroke="#0f172a" stroke-width="4" />
    <ellipse cx="200" cy="170" rx="40" ry="46" fill="#fed7aa" stroke="#0f172a" stroke-width="3" />

    <!-- Kind, determined eyes -->
    <circle cx="186" cy="165" r="4.5" fill="#0f172a" />
    <circle cx="188" cy="163" r="1.5" fill="#ffffff" />
    <circle cx="214" cy="165" r="4.5" fill="#0f172a" />
    <circle cx="216" cy="163" r="1.5" fill="#ffffff" />

    <!-- Silver Circlet on brow -->
    <path d="M155 140 Q200 130, 245 140" stroke="${styles.trim}" stroke-width="5" stroke-linecap="round" fill="none" />
    <circle cx="200" cy="133" r="5" fill="${styles.halo}" stroke="#0f172a" stroke-width="1.5" />

    <!-- Gentle smile -->
    <path d="M192 195 Q200 202, 208 195" stroke="#713f12" stroke-width="2.5" stroke-linecap="round" fill="none" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#0f172a" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">CLERIC · V${variant + 1}</text>
  </svg>`;
}

// ------------------- DRUID -------------------
function getDruidSvg(variant: number, name: string): string {
  const styles = [
    { foliage: '#65a30d', antlers: '#78350f', bg1: '#14532d', bg2: '#052e16', trim: '#bef264' },
    { foliage: '#059669', antlers: '#451a03', bg1: '#064e3b', bg2: '#022c22', trim: '#6ee7b7' },
    { foliage: '#d97706', antlers: '#713f12', bg1: '#7c2d12', bg2: '#18181b', trim: '#fde68a' },
    { foliage: '#0284c7', antlers: '#1e293b', bg1: '#075985', bg2: '#0f172a', trim: '#7dd3fc' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="dbg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#dbg)" />

    <!-- Primal Leylines Circle -->
    <circle cx="200" cy="170" r="110" fill="none" stroke="${styles.trim}" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="6 6" />

    <!-- Druid Antlers protruding from crown -->
    <g stroke="${styles.antlers}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M160 120 Q120 70, 95 60 M120 75 Q100 45, 80 40 M140 95 Q105 85, 90 95" />
      <path d="M240 120 Q280 70, 305 60 M280 75 Q300 45, 320 40 M260 95 Q295 85, 310 95" />
    </g>

    <!-- Moss / Fur Mantle Shoulders -->
    <path d="M75 370 C75 270, 125 245, 160 245 L240 245 C275 245, 325 270, 325 370 Z" fill="#292524" stroke="#052e16" stroke-width="5" />
    <!-- Leaf Collar -->
    <path d="M120 260 Q160 290, 200 270 Q240 290, 280 260" fill="${styles.foliage}" stroke="#052e16" stroke-width="3" />

    <!-- Druid Face & Leaf Crown -->
    <circle cx="200" cy="175" r="46" fill="#fed7aa" stroke="#052e16" stroke-width="4" />
    
    <!-- Leaf Laurel Crown -->
    <path d="M150 140 Q200 125, 250 140" stroke="${styles.foliage}" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="200" cy="130" r="6" fill="${styles.trim}" />

    <!-- Glowing Emerald Eyes -->
    <ellipse cx="185" cy="170" rx="6" ry="4.5" fill="${styles.trim}" />
    <circle cx="185" cy="170" r="2" fill="#052e16" />
    <ellipse cx="215" cy="170" rx="6" ry="4.5" fill="${styles.trim}" />
    <circle cx="215" cy="170" r="2" fill="#052e16" />

    <!-- Primal Face Tattoos -->
    <path d="M185 180 L185 200 M215 180 L215 200" stroke="${styles.foliage}" stroke-width="2.5" stroke-linecap="round" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#052e16" stroke="${styles.trim}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.trim}" text-anchor="middle" letter-spacing="1">DRUID · V${variant + 1}</text>
  </svg>`;
}

// ------------------- BARD -------------------
function getBardSvg(variant: number, name: string): string {
  const styles = [
    { hat: '#be185d', feather: '#f59e0b', tunic: '#831843', bg1: '#500724', bg2: '#0f172a' },
    { hat: '#7c3aed', feather: '#34d399', tunic: '#4c1d95', bg1: '#2e1065', bg2: '#09090b' },
    { hat: '#b45309', feather: '#38bdf8', tunic: '#78350f', bg1: '#451a03', bg2: '#18181b' },
    { hat: '#0284c7', feather: '#fb7185', tunic: '#0369a1', bg1: '#082f49', bg2: '#0f172a' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="bbg" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#bbg)" />

    <!-- Musical notes floating in air -->
    <path d="M75 140 L85 125 L95 130 M85 125 L85 150" stroke="${styles.feather}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <circle cx="83" cy="150" r="4" fill="${styles.feather}" />
    <path d="M315 130 L325 115 L335 120 M325 115 L325 140" stroke="${styles.feather}" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <circle cx="323" cy="140" r="4" fill="${styles.feather}" />

    <!-- Bard Doublet / Shoulders -->
    <path d="M80 370 C80 270, 130 250, 160 250 L240 250 C270 250, 320 270, 320 370 Z" fill="${styles.tunic}" stroke="#1c1917" stroke-width="5" />
    <!-- Ruffled Collar -->
    <path d="M160 245 Q180 265, 200 245 Q220 265, 240 245" stroke="#f8fafc" stroke-width="6" fill="none" />

    <!-- Face & Charming Smile -->
    <circle cx="200" cy="180" r="46" fill="#fed7aa" stroke="#1c1917" stroke-width="4" />
    <ellipse cx="186" cy="172" rx="4.5" ry="4" fill="#1c1917" />
    <circle cx="188" cy="170" r="1.5" fill="#ffffff" />
    <ellipse cx="214" cy="172" rx="4.5" ry="4" fill="#1c1917" />
    <circle cx="216" cy="170" r="1.5" fill="#ffffff" />
    <!-- Dashing smirk -->
    <path d="M190 200 Q205 212, 216 198" stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Cavalier Hat with Large Feather Plume -->
    <path d="M130 145 Q200 120, 275 140 L270 120 Q200 95, 140 125 Z" fill="${styles.hat}" stroke="#1c1917" stroke-width="4" />
    <!-- Giant curving feather -->
    <path d="M230 115 Q290 50, 330 70 Q280 100, 240 125 Z" fill="${styles.feather}" stroke="#1c1917" stroke-width="3" />
    <path d="M245 110 Q290 70, 320 72" stroke="#ffffff" stroke-width="1.5" fill="none" />

    <!-- Lute body in hands -->
    <ellipse cx="200" cy="330" rx="30" ry="24" fill="#78350f" stroke="#1c1917" stroke-width="3" />
    <circle cx="200" cy="330" r="8" fill="#1c1917" />
    <line x1="170" y1="330" x2="230" y2="330" stroke="${styles.feather}" stroke-width="1" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#1c1917" stroke="${styles.feather}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.feather}" text-anchor="middle" letter-spacing="1">BARD · V${variant + 1}</text>
  </svg>`;
}

// ------------------- WARLOCK -------------------
function getWarlockSvg(variant: number, name: string): string {
  const styles = [
    { cowl: '#581c87', fire: '#a855f7', horns: '#2e1065', bg1: '#3b0764', bg2: '#09090b' },
    { cowl: '#1e1b4b', fire: '#38bdf8', horns: '#0f172a', bg1: '#172554', bg2: '#030712' },
    { cowl: '#14532d', fire: '#4ade80', horns: '#052e16', bg1: '#064e3b', bg2: '#020617' },
    { cowl: '#7f1d1d', fire: '#f97316', horns: '#450a0a', bg1: '#4c0519', bg2: '#0c0a09' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="wlbg" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
      <filter id="wlglow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#wlbg)" />

    <!-- Nether Vortex Ring -->
    <circle cx="200" cy="170" r="115" fill="none" stroke="${styles.fire}" stroke-width="2" stroke-dasharray="10 5" opacity="0.4" />

    <!-- Demonic Horns -->
    <path d="M150 120 Q95 70, 75 110 Q105 130, 135 140 Z" fill="${styles.horns}" stroke="#09090b" stroke-width="4" />
    <path d="M250 120 Q305 70, 325 110 Q295 130, 265 140 Z" fill="${styles.horns}" stroke="#09090b" stroke-width="4" />

    <!-- Eldritch Robes -->
    <path d="M75 370 C75 270, 125 245, 160 245 L240 245 C275 245, 325 270, 325 370 Z" fill="${styles.cowl}" stroke="#09090b" stroke-width="5" />
    
    <!-- Hood with shadowy face interior -->
    <path d="M135 210 C135 110, 165 75, 200 70 C235 75, 265 110, 265 210 C265 250, 235 260, 200 260 C165 260, 135 250, 135 210 Z" fill="${styles.cowl}" stroke="#09090b" stroke-width="5" />
    <ellipse cx="200" cy="175" rx="46" ry="50" fill="#09090b" />

    <!-- Burning Eldritch Eyes -->
    <ellipse cx="180" cy="168" rx="8" ry="6" fill="${styles.fire}" filter="url(#wlglow)" />
    <ellipse cx="220" cy="168" rx="8" ry="6" fill="${styles.fire}" filter="url(#wlglow)" />
    <circle cx="180" cy="168" r="3" fill="#ffffff" />
    <circle cx="220" cy="168" r="3" fill="#ffffff" />

    <!-- Floating Nether Flame / Soul near shoulder -->
    <path d="M300 240 Q315 210, 290 195 Q280 220, 300 240 Z" fill="${styles.fire}" filter="url(#wlglow)" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#09090b" stroke="${styles.fire}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.fire}" text-anchor="middle" letter-spacing="1">WARLOCK · V${variant + 1}</text>
  </svg>`;
}

// ------------------- MONK -------------------
function getMonkSvg(variant: number, name: string): string {
  const styles = [
    { robe: '#ea580c', bead: '#78350f', ki: '#facc15', bg1: '#7c2d12', bg2: '#1c1917' },
    { robe: '#0284c7', bead: '#0f172a', ki: '#38bdf8', bg1: '#075985', bg2: '#0f172a' },
    { robe: '#16a34a', bead: '#14532d', ki: '#4ade80', bg1: '#14532d', bg2: '#052e16' },
    { robe: '#9333ea', bead: '#3b0764', ki: '#c084fc', bg1: '#581c87', bg2: '#09090b' },
  ][variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <radialGradient id="mokbg" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="${styles.bg1}" />
        <stop offset="100%" stop-color="${styles.bg2}" />
      </radialGradient>
      <filter id="kiglow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="400" height="400" rx="20" fill="url(#mokbg)" />

    <!-- Ki Concentric Ripple Rings -->
    <circle cx="200" cy="170" r="100" fill="none" stroke="${styles.ki}" stroke-width="2.5" opacity="0.4" />
    <circle cx="200" cy="170" r="120" fill="none" stroke="${styles.ki}" stroke-width="1" stroke-dasharray="6 6" opacity="0.3" />

    <!-- Draped Martial Monk Robe / Shoulders -->
    <path d="M75 370 C75 270, 125 245, 160 245 L240 245 C275 245, 325 270, 325 370 Z" fill="${styles.robe}" stroke="#1c1917" stroke-width="5" />
    <!-- Bare shoulder sash cut -->
    <path d="M160 245 L270 370" stroke="#fed7aa" stroke-width="24" stroke-linecap="round" />

    <!-- Wooden Prayer Beads Necklace -->
    <g fill="${styles.bead}" stroke="#1c1917" stroke-width="2">
      <circle cx="155" cy="270" r="7" />
      <circle cx="170" cy="290" r="7" />
      <circle cx="190" cy="305" r="8" />
      <circle cx="210" cy="305" r="8" />
      <circle cx="230" cy="290" r="7" />
      <circle cx="245" cy="270" r="7" />
    </g>

    <!-- Monk Head with Serene Focus -->
    <circle cx="200" cy="170" r="46" fill="#fed7aa" stroke="#1c1917" stroke-width="4" />

    <!-- Glowing Forehead Third-Eye Chakra Mark -->
    <circle cx="200" cy="148" r="4.5" fill="${styles.ki}" filter="url(#kiglow)" stroke="#1c1917" stroke-width="1" />

    <!-- Serene Eyes with spiritual focus -->
    <ellipse cx="184" cy="168" rx="5" ry="3.5" fill="#1c1917" />
    <circle cx="186" cy="167" r="1" fill="#ffffff" />
    <ellipse cx="216" cy="168" rx="5" ry="3.5" fill="#1c1917" />
    <circle cx="218" cy="167" r="1" fill="#ffffff" />

    <!-- Calm Smile -->
    <path d="M192 194 Q200 198, 208 194" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" fill="none" />

    <!-- Class Banner -->
    <rect x="120" y="345" width="160" height="28" rx="14" fill="#1c1917" stroke="${styles.ki}" stroke-width="2" />
    <text x="200" y="364" font-family="sans-serif" font-weight="bold" font-size="12" fill="${styles.ki}" text-anchor="middle" letter-spacing="1">MONK · V${variant + 1}</text>
  </svg>`;
}
