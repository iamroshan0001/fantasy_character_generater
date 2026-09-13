export interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
}

export interface CharacterClassInfo {
  name: string;
  category: string;
  role: string;
  iconName: 'Shield' | 'Sparkles' | 'Sword' | 'Sun' | 'Compass' | 'Heart' | 'Leaf' | 'Music' | 'Flame' | 'Zap';
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  flavor: string;
}

export interface FantasyCharacter {
  id: string;
  fullName: string;
  firstName: string;
  epithet: string;
  characterClass: string;
  classInfo: CharacterClassInfo;
  originRealm: string;
  alignment: string;
  stats: CharacterStats;
  timestamp: number;
}

export interface SavedDeckCard {
  character: FantasyCharacter;
  portraitUrl: string | null;
  backstory: string | null;
  savedAt: number;
}
