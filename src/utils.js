export function calculatingValues(setCounterValues, text) {
  const wordCount = text?.match(/\b\S+\b/g)?.length || 0;
  const characterCount = text?.length;
  const sentenceCount = text?.split(/[.!?]+/).filter(Boolean).length || 0;
  const paragraphCount =
    text?.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0)
      .length || 0;
  const readingTime = wordCount / 200;

  const words = text?.match(/\b\S+\b/g) || [];
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  setCounterValues({
    noOfCharacters: characterCount,
    noOfWords: wordCount,
    noOfSentences: sentenceCount,
    noOfParagraphs: paragraphCount,
    timeToRead: "~ " + readingTime + " mins",
    longestWord: longestWord,
  });
}
