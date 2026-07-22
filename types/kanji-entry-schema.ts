
export interface WordComponent {
  kanji: string | null;
  kana: string;
}

export interface KanjiEntry {
  id: number;
  schemaVersion: string;
  jlptLevel: "N5" | "N4" | "N3" | "N2" | "N1";
  word: string;
  reading: string;
  pos: string;
  frequencyRank: number;
  definitions: string[];
  components: WordComponent[];
  radicals: string[];
  tags: string[];
  contextSentence: string;
  mnemonic: string;
  jishoUrl: string;
}