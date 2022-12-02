import { useState, useLayoutEffect} from 'react';

export default function useNavOffset() {  
  const [ offset, setOffset ] = useState(0);

  useLayoutEffect(() => {
    function getOffset() {
      setOffset(document.querySelector('#nav').offsetHeight);
    }
    window.addEventListener('load', getOffset());
    // getOffset();
    return () => window.removeEventListener('load', getOffset);
  }, []);
  return offset;
}