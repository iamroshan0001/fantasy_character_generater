import {
  Shield,
  Sparkles,
  Sword,
  Sun,
  Compass,
  Heart,
  Leaf,
  Music,
  Flame,
  Zap,
} from 'lucide-react';

interface ClassIconProps {
  name: string;
  className?: string;
}

export function ClassIcon({ name, className = 'w-6 h-6' }: ClassIconProps) {
  switch (name) {
    case 'Shield':
      return <Shield className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Sword':
      return <Sword className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Music':
      return <Music className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
