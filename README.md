# 🧙‍♂️ Fantasy Character Generator

> **Conjure legendary RPG heroes, generate cartoon card art, roll combat stats, inscribe lore, and vault your squad into your personal deck.** ✨ Built with React 19, TypeScript, Vite & Tailwind CSS on Google AI Studio.

<p align="center">
  <img src="https://img.shields.io/badge/Vibe-100%25%20Immaculate-ff4081?style=for-the-badge" alt="Vibe" />
  <img src="https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deck_Vault-Local_Storage-10b981?style=for-the-badge" alt="Local Storage" />
</p>

---

## ⚡ What is this?

Tired of staring at a blank sheet when rolling a new D&D character or fantasy RPG hero? Say less. 

This app is an **Alchemist's Workbench** that lets you conjure fully fleshed-out, bordered trading cards at the tap of a button. No generic placeholders, no boring layouts — just pure high-fantasy vibes with combat stats, stylized cartoon character portraits, procedurally generated origin stories, and deck saving.

---

## ✨ The Feature Stack (It Hits Different)

### 🃏 1. Bordered Collectible Player Card
- Ornate gilded gold & bronze card framing with antique corner rivets and illuminated headers.
- Class crests and Level 1 archetype tags for 10 distinct classes (*Warrior, Mage, Rogue, Paladin, Ranger, Cleric, Druid, Bard, Warlock, Monk*).
- Switch character fonts in real-time between **Uncial Antiqua** (ancient scroll vibe) and **Cinzel Decorative** (regal inscription vibe).

### 🎨 2. Cartoon & Game-Style Portrait Generator
- Hit **"Generate Portrait"** to conjure class-specific video game art (horned helms, arcane wizard hats, stealth cowls, angelic wings).
- Hit **"Regenerate Portrait"** to cycle through alternate color palettes, armor trims, and mystical auras until it fits your aesthetic.

### ⚔️ 3. Dynamic Combat Statblocks
- **Health (HP)**: Ruby red statblock with a dynamic vitality bar.
- **Mana (MP)**: Sapphire blue statblock with an etheric mana meter.
- **Strength (STR)**: Topaz amber statblock with an attack power gauge.
- Stats scale intelligently to class archetypes (tanks get beefy HP, spellcasters get massive Mana pools).

### 📜 4. Origin Chronicle (Lore Inscriber)
- Hit **"Generate Backstory"** to inscribe a punchy 1-to-2 sentence origin tale connecting your hero's name, homeland, and moral alignment.
- Re-roll as many times as you want until the lore hits just right.

### 🗃️ 5. "My Deck" Vault
- Found an absolute unit of a character? Smash **"Save to Deck"** to lock them into your local grimoire.
- Open **My Deck** anytime to inspect your saved champions, view their full stat blocks, or load them straight back onto the workbench.
- Persisted locally with `localStorage` — your squad stays safe even if you refresh or close your browser.

### 📋 6. One-Click Inscription Copy
- Tap **"Copy Card"** to instantly paste the formatted character stats, alignment, realm, and backstory into Discord, Notion, or your campaign notes.

---

## 🛠️ Tech Stack & Spells

| Tool | Role | Why It's Goated |
| :--- | :--- | :--- |
| **React 19** | UI Framework | Peak reactivity & seamless component rendering |
| **TypeScript** | Type Safety | Zero runtime surprises, fully typed character interfaces |
| **Tailwind CSS v4** | Styling Engine | Custom parchment & alchemist workbench textures |
| **Motion** | Animations | Smooth card transitions, dice spins & floating embers |
| **Lucide React** | Iconography | Clean, responsive RPG vector icons |
| **Google Fonts** | Typography | *Uncial Antiqua* & *Cinzel Decorative* fantasy fonts |

---

## 🚀 Quickstart (Run it locally in 60s)

Got Node.js installed? You're literally 3 commands away:

```bash
# 1. Clone your repo
git clone https://github.com/iamroshan0001/fantasy_character_generator.git

# 2. Hop into the directory
cd fantasy_character_generator

# 3. Install the dependencies
npm install

# 4. Fire up the dev server
npm run dev
```

Now pop open `http://localhost:3000` in your browser and start summoning! 🔥

---

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── CharacterPortrait.tsx   # Cartoon portrait generator & controls
│   │   ├── ClassIcon.tsx           # Dynamic RPG class emblems
│   │   ├── MagicalParticles.tsx    # Ambient floating ember animations
│   │   ├── MyDeckDrawer.tsx        # "My Deck" modal & saved card manager
│   │   └── PlayerCardStats.tsx     # Health / Mana / Strength statblock bars
│   ├── data/
│   │   └── characters.ts           # Class archetypes, name generator & stats
│   ├── utils/
│   │   ├── backstoryGenerator.ts   # 1-2 sentence dynamic lore inscriber
│   │   └── portraitGenerator.ts    # Procedural cartoon avatar SVGs
│   ├── App.tsx                     # Main alchemist workbench & card stage
│   ├── index.css                   # Custom wood plank & golden glow styles
│   └── types.ts                    # TypeScript types (Hero, Stats, Deck)
├── index.html                      # Entrypoint + Google Fantasy Fonts
└── package.json
```

---

## 🎮 How to Use

1. 🎲 **Click "Generate New Player Card"** to roll a random name, class, realm, alignment, and combat stats.
2. 🖼️ **Click "Generate Portrait"** to draw a custom cartoon illustration for your hero.
3. 🪶 **Click "Generate Backstory"** to forge a 1-to-2 sentence origin chronicle.
4. 💾 **Click "Save to Deck"** to add them to your archived collection.
5. 📂 **Click "My Deck"** at the top right to browse, inspect, or reload your vaulted heroes.

---

## 🤝 Contributing

Got ideas for new fantasy classes, wilder backstories, or legendary artifact slots? PRs are always welcome!

1. Fork the repo 🍴
2. Create your feature branch (`git checkout -b feature/legendary-weapons`)
3. Commit your changes (`git commit -m 'feat: add mythical weapons'`)
4. Push to your branch (`git push origin feature/legendary-weapons`)
5. Open a Pull Request 🚀

---

## 📜 License

Distributed under the **Apache-2.0 License**. Feel free to tinker, fork, and build your own deck!

<p align="center">
  Crafted with ⚔️ by <a href="https://github.com/iamroshan0001"><b>Roshan Kumar</b></a>
</p>
