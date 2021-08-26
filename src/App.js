import React, { useRef, useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [Error, setError] = useState(false);
  const [list, setList] = useState([]);
  const color = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let c1 = new Values(color.current.value).all(5);
      setList(c1);
      console.log('Hello World');
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <>
      <section className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            name='color'
            ref={color}
            placeholder='Input color i-e #fff or white'
            className={Error ? 'error' : null}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((col, index) => {
          console.log(col);
          return (
            <SingleColor
              key={index}
              index={index}
              hexa={col.hex}
              {...col}
            ></SingleColor>
          );
        })}
      </section>
      <footer>
        <h4>&#169; 2021 right reversed</h4>
      </footer>
    </>
  );
}

export default App;
