export interface Shlok {
    id: string;
    chapter: number;
    verse: number;
    sanskrit: string;
    transliteration: string;
    simpleMeaning: string;
    practicalExplanation: string;
    strengthReflection: string;
    devotionalSurrender: string;
    emotions: EmotionId[];
    audioUrl: string | null;
}

export type EmotionId =
    | 'fear'
    | 'overthinking'
    | 'failure'
    | 'self-doubt'
    | 'attachment'
    | 'anger'
    | 'duty'
    | 'discipline';

export interface Emotion {
    id: EmotionId;
    name: string;
    icon: string;
    description: string;
}

export interface Chapter {
    id: number;
    name: string;
    englishName: string;
    verseCount: number;
}

export interface ShlokData {
    shloks: Shlok[];
    chapters: Chapter[];
    emotions: Emotion[];
}
