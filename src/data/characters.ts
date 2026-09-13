import { CharacterClassInfo, FantasyCharacter } from '../types.ts';

export const CHARACTER_CLASSES: Record<string, CharacterClassInfo> = {
  Warrior: {
    name: 'Warrior',
    category: 'Martial Combatant',
    role: 'Frontline vanguard & heavy arms specialist',
    iconName: 'Shield',
    badgeBg: 'bg-amber-950/40 text-amber-300',
    badgeText: 'text-amber-400',
    badgeBorder: 'border-amber-700/50',
    flavor: 'Unflinching master of martial discipline, clad in iron plate and wielding formidable weapons.',
  },
  Mage: {
    name: 'Mage',
    category: 'Arcane Scholar',
    role: 'Channeler of elements & ancient incantations',
    iconName: 'Sparkles',
    badgeBg: 'bg-indigo-950/40 text-indigo-300',
    badgeText: 'text-indigo-400',
    badgeBorder: 'border-indigo-700/50',
    flavor: 'Delver into cosmic mysteries who weaves etheric energies into spells of immense power.',
  },
  Rogue: {
    name: 'Rogue',
    category: 'Shadow Specialist',
    role: 'Infiltration, critical strikes & agility',
    iconName: 'Sword',
    badgeBg: 'bg-emerald-950/40 text-emerald-300',
    badgeText: 'text-emerald-400',
    badgeBorder: 'border-emerald-700/50',
    flavor: 'Lethal operative of the shadows, striking where least expected with deadly precision.',
  },
  Paladin: {
    name: 'Paladin',
    category: 'Holy Champion',
    role: 'Sacred defender & radiant protector',
    iconName: 'Sun',
    badgeBg: 'bg-yellow-950/40 text-yellow-300',
    badgeText: 'text-yellow-400',
    badgeBorder: 'border-yellow-700/50',
    flavor: 'Sworn keeper of sacred vows, wielding blessed light to shield allies and smite corruption.',
  },
  Ranger: {
    name: 'Ranger',
    category: 'Wilderness Scout',
    role: 'Sharpshooter, pathfinder & beast master',
    iconName: 'Compass',
    badgeBg: 'bg-teal-950/40 text-teal-300',
    badgeText: 'text-teal-400',
    badgeBorder: 'border-teal-700/50',
    flavor: 'Vigilant wanderer of untamed frontiers, deadly at range and attuned to the wilderness.',
  },
  Cleric: {
    name: 'Cleric',
    category: 'Divine Emissary',
    role: 'Miracle worker, healer & spiritual guardian',
    iconName: 'Heart',
    badgeBg: 'bg-rose-950/40 text-rose-300',
    badgeText: 'text-rose-400',
    badgeBorder: 'border-rose-700/50',
    flavor: 'Devout conduit of sacred deities, healing grievous wounds and casting protective wards.',
  },
  Druid: {
    name: 'Druid',
    category: 'Primal Warden',
    role: 'Nature shaper & elemental metamorph',
    iconName: 'Leaf',
    badgeBg: 'bg-lime-950/40 text-lime-300',
    badgeText: 'text-lime-400',
    badgeBorder: 'border-lime-700/50',
    flavor: 'Guardian of primal ley lines, wielding living thorn, tempest winds, and beast forms.',
  },
  Bard: {
    name: 'Bard',
    category: 'Lorekeeper & Skald',
    role: 'Inspiration, enchantment & charismatic diplomacy',
    iconName: 'Music',
    badgeBg: 'bg-fuchsia-950/40 text-fuchsia-300',
    badgeText: 'text-fuchsia-400',
    badgeBorder: 'border-fuchsia-700/50',
    flavor: 'Charming storyteller whose melodies stir ancient courage and bewitch the senses.',
  },
  Warlock: {
    name: 'Warlock',
    category: 'Eldritch Inquisitor',
    role: 'Forbidden pacts & soul manipulation',
    iconName: 'Flame',
    badgeBg: 'bg-purple-950/40 text-purple-300',
    badgeText: 'text-purple-400',
    badgeBorder: 'border-purple-700/50',
    flavor: 'Bound by covenant to entities beyond the stars, commanding eerie otherworldly power.',
  },
  Monk: {
    name: 'Monk',
    category: 'Martial Mystic',
    role: 'Unarmed mastery, ki focus & rapid strikes',
    iconName: 'Zap',
    badgeBg: 'bg-cyan-950/40 text-cyan-300',
    badgeText: 'text-cyan-400',
    badgeBorder: 'border-cyan-700/50',
    flavor: 'Disciplined warrior channeling internal spiritual energy into lightning-fast martial arts.',
  },
};

export const FIRST_NAMES: string[] = [
  'Valerius',
  'Lyra',
  'Thorgar',
  'Seraphina',
  'Kaelen',
  'Astrid',
  'Aldous',
  'Rowena',
  'Eldrin',
  'Morrigan',
  'Cassian',
  'Faelyn',
  'Darius',
  'Elowen',
  'Fenric',
  'Isolde',
  'Gideon',
  'Sylvia',
  'Baelor',
  'Vespera',
  'Zephyr',
  'Rhiannon',
  'Corvus',
  'Thalor',
  'Alistair',
  'Danika',
  'Orlaith',
  'Ignis',
  'Mirabel',
  'Vaelin',
];

export const EPITHETS: string[] = [
  'Stormcaller',
  'Ironheart',
  'Shadowveil',
  'Dawnbringer',
  'Frostpeak',
  'Sunstrider',
  'Wyrmbane',
  'Emberfall',
  'Silverfang',
  'Whisperwind',
  'Runehand',
  'Voidwalker',
  'Oathkeeper',
  'Ravencrest',
  'Bloodthorn',
  'Deepstrider',
  'Starweaver',
  'Gloomblade',
  'Ashford',
  'Stonebreaker',
  'Bramblewood',
  'Thunderstride',
];

export const REALMS: string[] = [
  'The Sunken Citadel',
  'Aethelgard Peaks',
  'Whispering Wilds',
  'Gildencross Reach',
  'Obsidian Crag',
  'Silverwood Vale',
  'The Astral Expanse',
  'Ironforge Bastion',
  'Highspire Sanctum',
  'Mistfall Marsh',
];

export const ALIGNMENTS: string[] = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
];

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomStats(className: string) {
  switch (className) {
    case 'Warrior':
      return {
        health: getRandomBetween(130, 180),
        mana: getRandomBetween(20, 55),
        strength: getRandomBetween(75, 98),
      };
    case 'Mage':
      return {
        health: getRandomBetween(65, 95),
        mana: getRandomBetween(140, 195),
        strength: getRandomBetween(20, 45),
      };
    case 'Rogue':
      return {
        health: getRandomBetween(85, 120),
        mana: getRandomBetween(45, 80),
        strength: getRandomBetween(70, 92),
      };
    case 'Paladin':
      return {
        health: getRandomBetween(120, 165),
        mana: getRandomBetween(80, 130),
        strength: getRandomBetween(70, 94),
      };
    case 'Ranger':
      return {
        health: getRandomBetween(90, 130),
        mana: getRandomBetween(60, 100),
        strength: getRandomBetween(65, 88),
      };
    case 'Cleric':
      return {
        health: getRandomBetween(95, 135),
        mana: getRandomBetween(120, 175),
        strength: getRandomBetween(40, 70),
      };
    case 'Druid':
      return {
        health: getRandomBetween(100, 140),
        mana: getRandomBetween(110, 165),
        strength: getRandomBetween(50, 75),
      };
    case 'Bard':
      return {
        health: getRandomBetween(80, 115),
        mana: getRandomBetween(100, 150),
        strength: getRandomBetween(45, 72),
      };
    case 'Warlock':
      return {
        health: getRandomBetween(85, 125),
        mana: getRandomBetween(130, 185),
        strength: getRandomBetween(35, 65),
      };
    case 'Monk':
      return {
        health: getRandomBetween(100, 145),
        mana: getRandomBetween(60, 110),
        strength: getRandomBetween(75, 95),
      };
    default:
      return {
        health: getRandomBetween(80, 140),
        mana: getRandomBetween(60, 130),
        strength: getRandomBetween(50, 85),
      };
  }
}

export function generateRandomCharacter(): FantasyCharacter {
  const firstName = getRandomElement(FIRST_NAMES);
  const epithet = getRandomElement(EPITHETS);
  const classKeys = Object.keys(CHARACTER_CLASSES);
  const selectedClassKey = getRandomElement(classKeys);
  const classInfo = CHARACTER_CLASSES[selectedClassKey];
  const originRealm = getRandomElement(REALMS);
  const alignment = getRandomElement(ALIGNMENTS);
  const stats = generateRandomStats(classInfo.name);

  return {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    fullName: `${firstName} ${epithet}`,
    firstName,
    epithet,
    characterClass: classInfo.name,
    classInfo,
    originRealm,
    alignment,
    stats,
    timestamp: Date.now(),
  };
}
