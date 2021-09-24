import { useState, useCallback } from 'react';
import { emojify } from './utils/index';

const useEmoji: any = () => {
  const [text, setText] = useState('');

  const setTextHandler = useCallback((txt: string) => {
    setText(emojify(txt));
  }, []);

  return [text, setTextHandler];
};

export default useEmoji;
export { emojify };
