import React, { createContext, useCallback, useState  } from "react";
import { TotalChapter } from '../TotalChapter';

interface BibleContextData {
  currentbook: string;
  currentChapter: number;
  totalChapter: number;
  handleCurrentBook: (book: string) => void;
  handleCurrentChapter: (chapter: number) => void;
}

export const BibleContext = createContext<BibleContextData>({} as BibleContextData);

export const BibleProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [currentbook, setCurrentBook] = useState('');
  const [currentChapter, setCurrentChapter] = useState(0);
  const [totalChapter, setTotalChapter] = useState(0);

  const handleCurrentBook = useCallback( (book: string) => {
    setCurrentBook(book);
    const total = TotalChapter.filter(books => books.name === book)[0].total;
    setTotalChapter(total);
  }, [currentbook]);

  function handleCurrentChapter(chapter: number) {
    setCurrentChapter(chapter);
  }

  return (
    <BibleContext.Provider
      value={{
        currentbook,
        currentChapter,
        totalChapter,
        handleCurrentBook,
        handleCurrentChapter,
      }}>
      {children}
    </BibleContext.Provider>
  );
}

