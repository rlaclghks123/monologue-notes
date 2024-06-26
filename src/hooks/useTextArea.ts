import { useState, useEffect, useRef } from 'react';

function useTextArea(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [charCount, setCharCount] = useState(initialValue.length);
  const ref = useRef(null);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    ref,
    value,
    charCount,
    handleChange,
  };
}

export default useTextArea;
