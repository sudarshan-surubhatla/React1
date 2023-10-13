import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {

    const words = text.split(' ');

    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  return (

    <div class='container'>
      <h2>Responsive Paragraph Word Counter</h2>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='Type here...'
        ></textarea>
          <p className='word-count'>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;