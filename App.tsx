import React, { useState } from 'react';
import { Tale } from './types';
import { tales } from './data/tales';
import { Header } from './components/layout/Header';
import { TaleCard } from './components/tale/TaleCard';
import { ChapterContent } from './components/chapter/ChapterContent';

function App() {
  const [selectedTale, setSelectedTale] = useState<Tale | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);

  const handleTaleSelect = (tale: Tale) => {
    setSelectedTale(tale);
    setCurrentChapterIndex(0);
  };

  const handleChapterComplete = () => {
    if (!selectedTale) return;

    const currentChapter = selectedTale.chapters[currentChapterIndex];
    if (!completedChapters.includes(currentChapter.id)) {
      setCompletedChapters([...completedChapters, currentChapter.id]);
    }

    if (currentChapterIndex < selectedTale.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedTale ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tales.map(tale => (
              <TaleCard
                key={tale.id}
                tale={tale}
                onSelect={handleTaleSelect}
              />
            ))}
          </div>
        ) : (
          <ChapterContent
            chapter={selectedTale.chapters[currentChapterIndex]}
            onComplete={handleChapterComplete}
          />
        )}
      </main>
    </div>
  );
}

export default App;