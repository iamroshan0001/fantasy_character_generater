import { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function MagicalParticles() {
  const particles: Particle[] = useMemo(() => {
    const colors = [
      'rgba(245, 158, 11, 0.7)', // Amber
      'rgba(251, 191, 36, 0.8)', // Gold
      'rgba(217, 119, 6, 0.6)',  // Warm amber
      'rgba(168, 85, 247, 0.6)', // Arcane violet
      'rgba(56, 189, 248, 0.5)', // Ethereal cyan
    ];

    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + 4) % 94}%`,
      top: `${(i * 7.3 + 10) % 90}%`,
      size: (i % 3) + 2.5,
      duration: 4 + (i % 4) * 1.5,
      delay: (i % 5) * 0.8,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
