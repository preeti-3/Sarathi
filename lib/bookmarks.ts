'use client';

const BOOKMARKS_KEY = 'sarathi-bookmarks';

export function getBookmarks(): string[] {
    if (typeof window === 'undefined') return [];

    try {
        const stored = localStorage.getItem(BOOKMARKS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

export function addBookmark(shlokId: string): void {
    if (typeof window === 'undefined') return;

    const bookmarks = getBookmarks();
    if (!bookmarks.includes(shlokId)) {
        bookmarks.push(shlokId);
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }
}

export function removeBookmark(shlokId: string): void {
    if (typeof window === 'undefined') return;

    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter(id => id !== shlokId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
}

export function isBookmarked(shlokId: string): boolean {
    return getBookmarks().includes(shlokId);
}

export function toggleBookmark(shlokId: string): boolean {
    if (isBookmarked(shlokId)) {
        removeBookmark(shlokId);
        return false;
    } else {
        addBookmark(shlokId);
        return true;
    }
}
