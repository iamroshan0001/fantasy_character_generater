import { FantasyCharacter } from '../types.ts';

interface BackstoryComponents {
  origins: string[];
  incitingIncidents: string[];
  resolves: string[];
}

const CLASS_BACKSTORY_DATA: Record<string, BackstoryComponents> = {
  Warrior: {
    origins: [
      'Orphaned during the siege of {realm}, {name} was forged in the discipline of iron and blood.',
      'Once the sworn shield-bearer of {realm}\'s fallen high marshal, {name} refuses to break an unspoken vow.',
      'Cast out from the warrior guilds of {realm} for sparing a defenseless foe, {name} now wanders as a weapon-for-hire.',
      'Bearing the ancestral blade of {realm}\'s vanguard, {name} spent decades defending the battlements against monstrous incursions.',
    ],
    incitingIncidents: [
      'When an ancient ruin cracked open along the frontier, only {name}\'s unyielding grit held the line against encroaching terrors.',
      'A treacherous betrayal stripped away rank and honors, leaving only cold steel and an unquenchable pursuit of retribution.',
      'Haunted by the comrades left behind on scorched battlefields, every strike is a solemn debt repaid in combat.',
    ],
    resolves: [
      'Now, {name} marches into the wider realm seeking a war worthy of a legendary end.',
      'Armed with unbreakable plate and battle-scarred honor, no tyrant shall stand unchallenged in their presence.',
      'Driven by {alignment} convictions, {name} stands as an immovable bulwark against any storm yet to break.',
    ],
  },
  Mage: {
    origins: [
      'Cast out of the celestial academies above {realm} for unearthing forbidden star charts, {name} views magic not as science, but as a living tempest.',
      'Born under a twin-moon eclipse within {realm}, raw etheric energy has crackled at {name}\'s fingertips since childhood.',
      'After an alchemical experiment inverted the grand archives of {realm}, {name} fled carrying only a charred grimoire.',
      'Trained by an eccentric hermit deep within {realm}, {name} unlocked secrets of the cosmos that mortal minds were never meant to decipher.',
    ],
    incitingIncidents: [
      'When the ley lines began bleeding corrupted violet flame, {name} deciphered an apocalyptic omen written across the constellations.',
      'A stolen crystalline relic bonded directly to {name}\'s soul, whispering lost formulas from ages past.',
      'Seeking the elusive equation that transcends mortality, every incantation draws them closer to ultimate transcendence.',
    ],
    resolves: [
      'Now, {name} roams the frontiers, bending reality itself to shield the unwary from arcane catastrophe.',
      'With eyes glowing with starlight, no occult riddle or eldritch curse can remain hidden from their gaze.',
      'Guided by an insatiable hunger for truth, {name} channels spells that will reshape the fate of realms.',
    ],
  },
  Rogue: {
    origins: [
      'Raised in the fog-drenched alleys and catacombs beneath {realm}, {name} mastered the subtle art of walking without leaving a whisper.',
      'Once the premier phantom thief of the merchant princes of {realm}, no vault has ever kept {name} barred.',
      'Marked with a bounty that spans every guild in {realm}, {name} stays perpetually three steps ahead of the blade.',
      'Trained by a silent enclave in {realm} that exists only in rumor, {name} traded sentiment for lethal precision.',
    ],
    incitingIncidents: [
      'A botched heist exposed an empire-shaking conspiracy, making {name} the target of both assassins and kings.',
      'After stealing a cursed talisman from a noble\'s secret safe, shadows themselves began answering their call.',
      'Betrayed by a trusted partner during a moonlit escape, survival became an art form honed to razor sharpness.',
    ],
    resolves: [
      'Now slipping between candlelit taverns and treacherous dungeoneers, {name} strikes from darkness when least expected.',
      'Bound only by a personal code of {alignment} justice, they tip the scales of fate from the unseen shadows.',
      'No lock remains unbroken and no secret stays buried when {name} sets their sights upon a prize.',
    ],
  },
  Paladin: {
    origins: [
      'Anointed at the dawn altar in {realm}, {name} took solemn oaths to defend the defenseless with radiant steel.',
      'Surviving the cataclysm that leveled {realm}\'s cathedral, {name} was touched by a celestial spark that refuses to dim.',
      'Born to peasant blood in the valleys of {realm}, an angelic apparition bestowed upon {name} a holy mantle of retribution.',
    ],
    incitingIncidents: [
      'When abyssal blight seeped across the border, {name}\'s luminous warhammer shattered the demon vanguard in single combat.',
      'Refusing an unjust decree from a corrupt sovereign, {name} chose exile rather than compromise sacred tenets.',
      'A vow of divine vengeance burns within their chest after witnessing the desecration of their ancestral chapel.',
    ],
    resolves: [
      'Now riding forth as a champion of {alignment} order, radiant dawn shines in their wake wherever shadow creeps.',
      'No deceit can withstand the searing truth of their beacon, nor can darkness extinguish their sacred oath.',
    ],
  },
  Ranger: {
    origins: [
      'Raised by the wild packs that prowl the borders of {realm}, {name} speaks the silent language of beasts and wind.',
      'The lone surviving warden of the frontier outposts in {realm}, {name} knows every deadly ravine and poisoned spring.',
      'Exiled from civilized towns for choosing the untamed wilds of {realm}, {name} has never missed a target from two hundred paces.',
    ],
    incitingIncidents: [
      'When an ancient chimera awoke to butcher the homesteaders, {name}\'s bow silenced the beast with a single cedar arrow.',
      'Tracking poachers through impassable blizzards revealed an encroaching army marching in secret.',
      'Guided by the migratory calls of celestial hawks, an impending cataclysm drew them south into the heart of conflict.',
    ],
    resolves: [
      'Now scouting uncharted territories, {name} guards the delicate threshold between civilization and the raw wilderness.',
      'With arrows fletched from wyvern feathers, no intruder crosses their perimeter and survives to tell the tale.',
    ],
  },
  Cleric: {
    origins: [
      'Consecrated within the subterranean sanctums of {realm}, {name} listens to the heartbeat of ancient deities.',
      'Walking barefoot across the plague-stricken lowlands of {realm}, {name} miraculously healed thousands when medicine had failed.',
      'Chosen as the mortal vessel of a forgotten deity of {realm}, miracles manifest wherever their silver incense burns.',
    ],
    incitingIncidents: [
      'When necromancers desecrated the royal tombs, {name}\'s sacred wards repelled legions of the restless dead.',
      'A divine vision warned them that an apocalyptic eclipse would soon veil the sun unless the sacred shards were gathered.',
      'Refusing to yield in the face of despair, their prayers summoned a dome of daylight in the darkest abyss.',
    ],
    resolves: [
      'Now carrying blessing and cure across war-torn provinces, {name} heals the broken and casts out malevolent spirits.',
      'Upholding {alignment} grace in a ruthless world, their faith remains an impenetrable sanctuary.',
    ],
  },
  Druid: {
    origins: [
      'Suckled by a slumbering great bear beneath the elder trees of {realm}, {name} is flesh and blood of the living grove.',
      'Initiated by the moss-crowned elders of {realm}, {name} can shape-shift into the predatory creatures of the wild.',
      'When logging axes first struck the sacred redwood grove of {realm}, {name} caused the very roots to strangle the invaders.',
    ],
    incitingIncidents: [
      'A blight of unnatural sulfur began withering ancient leylines, compelling {name} to abandon their meditative seclusion.',
      'Communing with mountain spirits revealed that the elemental seasons were thrown into violent chaos by mortal hubris.',
      'Awakening from a decade-long slumber encased in petrified amber, {name} found the world transformed and crying out for balance.',
    ],
    resolves: [
      'Now roaming the continent as a storm-weaver and beast-shaper, {name} will reclaim the earth from those who desecrate it.',
      'With thorn and tempest at their beck and call, nature\'s wrath finds living form in their quest.',
    ],
  },
  Bard: {
    origins: [
      'Trained in the gilded opera houses and roguish taverns of {realm}, {name} can start a rebellion or end a duel with a single lyric.',
      'Once court jester to an empress in {realm}, {name} escaped after composing a satire that exposed royal treason.',
      'Possessing an enchanted lute strung with siren hair from {realm}, every ballad {name} performs holds magical hypnotic sway.',
    ],
    incitingIncidents: [
      'Overhearing an assassin guild\'s master plan disguised behind a velvet curtain, {name} turned the conspiracy into a hit song that saved the king.',
      'Challenged by an infernal devil in a crossroads duel of fiddles, {name} won their freedom with an unforgettable chord progression.',
      'A collection of forbidden folklore fell into their hands, revealing an ancient secret hidden inside nursery rhymes.',
    ],
    resolves: [
      'Now seeking legendary heroes to immortalize in song, {name} weaves spells of fortune and mirth in the face of peril.',
      'With razor wit and charismatic swagger, they prove that verse and melody are mightier than any broadsword.',
    ],
  },
  Warlock: {
    origins: [
      'On a moonless night in the ruins of {realm}, {name} made a desperate pact with an elder cosmic entity that watches between the stars.',
      'Born as a sacrificial vessel in {realm}, {name} consumed the demon\'s power instead of perishing, earning unholy boons.',
      'Exiled for delving into forbidden grimoires buried beneath {realm}, tentacles of shadowy ether now bend to their beckoning.',
    ],
    incitingIncidents: [
      'The cosmic patron called in the first installment of their otherworldly bargain, demanding the retrieval of five soul-urns.',
      'When inquisitors trapped {name} in an iron cage, an eruption of violet hellfire vaporized the captors in an instant.',
      'Visions of the void showed the true face of the gods, leaving {name} unburdened by conventional mortal morality.',
    ],
    resolves: [
      'Now walking the fine line between absolute mastery and total madness, {name} wields forbidden hexes with cold precision.',
      'Bound by a pact of {alignment} design, they turn eldritch nightmares against the horrors of the dark.',
    ],
  },
  Monk: {
    origins: [
      'Trained atop the frost-bitten monastery spires of {realm}, {name} spent twenty winters meditating beneath frozen waterfalls.',
      'A former street urchin taken in by the silent masters of {realm}, {name} learned that true strength flows from stillness and ki.',
      'The lone disciple to master the Hundred Thunder Palm technique in {realm}, their bare hands strike harder than tempered steel.',
    ],
    incitingIncidents: [
      'When warlords besieged the mountain temple, {name} neutralized three hundred invaders without drawing a drop of blood.',
      'A spiritual awakening unblocked their inner chakras, allowing them to dodge crossbow bolts like falling cherry blossoms.',
      'Following the final riddle of their departed master, {name} descended into the turbulent lowlands to restore cosmic balance.',
    ],
    resolves: [
      'Now traversing foreign kingdoms on foot, {name} channels tranquil spiritual energy to shatter tyranny and achieve enlightenment.',
      'With perfect harmony between body and spirit, no mountain is too steep and no adversary invincible.',
    ],
  },
};

function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateBackstory(character: FantasyCharacter): string {
  const classKey = character.characterClass in CLASS_BACKSTORY_DATA
    ? character.characterClass
    : 'Warrior';

  const data = CLASS_BACKSTORY_DATA[classKey];
  const originTemplate = pickRandom(data.origins);
  const secondPartTemplate = Math.random() > 0.5
    ? pickRandom(data.incitingIncidents)
    : pickRandom(data.resolves);

  const fillPlaceholders = (text: string) => {
    return text
      .replace(/{name}/g, character.fullName)
      .replace(/{realm}/g, character.originRealm)
      .replace(/{alignment}/g, character.alignment.toLowerCase())
      .replace(/{class}/g, character.characterClass.toLowerCase());
  };

  const sentence1 = fillPlaceholders(originTemplate);
  const sentence2 = fillPlaceholders(secondPartTemplate);

  return `${sentence1} ${sentence2}`;
}
