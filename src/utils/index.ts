var emojiJson = require('./emoji.json');
const getUniqueWordsFromText = (texts: string): string[] => {
  return [...new Set(texts.split(' ').filter((item) => item !== ''))];
};
export const emojify = (text: string) => {
  const allWords = getUniqueWordsFromText(text);
  allWords.forEach((word: string) => {
    const emoji = emojiJson[word];
    if (emoji) {
      text = text.replaceAll(word, emoji);
    }
  });
  return text;
};
