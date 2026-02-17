import shlokData from '@/data/shloks.json';
import { Shlok, Chapter, Emotion, EmotionId, ShlokData } from './types';

const data = shlokData as ShlokData;

export function getAllShloks(): Shlok[] {
    return data.shloks;
}

export function getShlokById(id: string): Shlok | undefined {
    return data.shloks.find(shlok => shlok.id === id);
}

export function getShlokByChapterAndVerse(chapter: number, verse: number): Shlok | undefined {
    return data.shloks.find(shlok => shlok.chapter === chapter && shlok.verse === verse);
}

export function getShloksByChapter(chapter: number): Shlok[] {
    return data.shloks.filter(shlok => shlok.chapter === chapter);
}

export function getShloksByEmotion(emotionId: EmotionId): Shlok[] {
    return data.shloks.filter(shlok => shlok.emotions.includes(emotionId));
}

export function getAllChapters(): Chapter[] {
    return data.chapters;
}

export function getChapterById(id: number): Chapter | undefined {
    return data.chapters.find(chapter => chapter.id === id);
}

export function getAllEmotions(): Emotion[] {
    return data.emotions;
}

export function getEmotionById(id: EmotionId): Emotion | undefined {
    return data.emotions.find(emotion => emotion.id === id);
}

export function getTodayShlok(): Shlok {
    // Get a consistent shlok for the day based on date
    const today = new Date();
    const dayOfYear = Math.floor(
        (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    const index = dayOfYear % data.shloks.length;
    return data.shloks[index];
}

export function getRandomShlok(): Shlok {
    const index = Math.floor(Math.random() * data.shloks.length);
    return data.shloks[index];
}
