import { derived } from "svelte/store";
import { settings } from "./settings";

export interface Languages {
  en: Map<string, string>,
  hr: Map<string, string>
}

export const localization = derived(
  settings,
  $settings => {
    if ($settings.isEnglish) {
      return languages.en
    } else {
      return languages.hr
    }
  }
)

const english = new Map([
  ['settings', 'Settings'],
  ['dark_mode', 'Dark mode'],
  ['dark_mode_desc', 'Come to the dark side'],
  ['lang_desc', 'Switch to Croatian'],
  ['help_title', 'How to play'],
  ['help_text_1a', "Guess the"],
  ['help_text_1b', "in 6 tries."],
  ['help_text_2', 'Each guess must be a valid 5 letter word. Hit the enter button to submit.'],
  ['help_text_3', 'After each guess, the color of the tiles will change to show how close your guess was to the word.'],
  ['help_text_4', 'Example:'],
  ['help_text_5a', 'The letter'],
  ['help_text_5b', 'is in the word and in the correct spot.'],
  ['help_text_6a', 'The letter'],
  ['help_text_6b', 'is in the word but in the wrong spot.'],
  ['help_text_7a', 'The letter'],
  ['help_text_7b', 'is not in the word in any spot.'],
  ['help_text_8a', 'New'],
  ['help_text_8b', 'is available each day.'],
  ['error_already_done', 'Something went wrong.'],
  ['error_too_short', 'Word must be 5 letters long.'],
  ['error_not_in_list', 'Word not in list.'],
  ['solution', 'Solution was:'],
  ['stat-title', 'Statistics'],
  ['stat-played', 'Played games'],
  ['stat-win', 'Win percent'],
  ['stat-cur-streak', 'Current Streak'],
  ['stat-max-streak', 'Max Streak'],
  ['stat-distribution', 'GUESS DISTRIBUTION'],
  ['stat-next', 'NEXT WORDLE-CRO'],
  ['stat-share', 'SHARE'],
  ['clipboard_msg', 'Copied to clipboard'],
])
const croatian = new Map([
  ['settings', 'Opcije'],
  ['dark_mode', 'Tamna tema'],
  ['dark_mode_desc', 'Pređi na mračnu stranu'],
  ['lang_desc', 'Prebaci se na engleski iz nekog razloga'],
  ['help_title', 'Kako se igra'],
  ['help_text_1a', 'Pogodi'],
  ['help_text_1b', 'u 6 pokušaja.'],
  ['help_text_2', 'Svaki pokušaj mora biti potojeća riječ sa 5 slova. Lupi Enter tipku kad uneseš riječ.'],
  ['help_text_3', 'Poslije svakog pokušaja, boja polja će se promijeniti da ti pokaže koliko si blizu.'],
  ['help_text_4', 'Primjer:'],
  ['help_text_5a', 'Slovo'],
  ['help_text_5b', 'je u riječi na točnom mjestu.'],
  ['help_text_6a', 'Slovo'],
  ['help_text_6b', 'je u riječi na krivom mjestu.'],
  ['help_text_7a', 'Slovo'],
  ['help_text_7b', 'nije u riječi ni na kojem mjestu.'],
  ['help_text_8a', 'Novi'],
  ['help_text_8b', 'je dostupan svaki dan.'],
  ['error_already_done', 'Nešto nije u redu.'],
  ['error_too_short', 'Riječ mora imati 5 slova.'],
  ['error_not_in_list', 'Riječ nije u rječniku.'],
  ['solution', 'Rješenje je:'],
  ['stat-title', 'Statistika'],
  ['stat-played', 'Odigrano Igara'],
  ['stat-win', 'Pobjede %'],
  ['stat-cur-streak', 'Trenutni Niz'],
  ['stat-max-streak', 'Maksimalni Niz'],
  ['stat-distribution', 'DISTRIBUCIJA POKUŠAJA'],
  ['stat-next', 'IDUĆI WORDLE-CRO'],
  ['stat-share', 'PODIJELI'],
  ['clipboard_msg', 'Kopirano u međuspremnik'],
])

const languages: Languages = {
  'en': english,
  'hr': croatian
}
