import { useState } from 'react';
import './main.css';
import Spinner from './Spinner';

export default function App() {
  const [spinnerActive, setSpinnerActive] = useState(false);

  const [query, setQuery] = useState('');

  const handleSpinner = () => {
    setSpinnerActive((prevState) => !prevState);
  };

  const handleClick = () => {
    document.location = `https://www.google.com/search?q=${query}`;
  };

  return (
    <main>
      <button className="m-b-10" onClick={handleSpinner}>
        Toggle spinner
      </button>
      <Spinner active={spinnerActive}>
        <section className="form">
          <input
            name="name"
            value={query}
            className="search"
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button onClick={handleClick}>go</button>
        </section>
      </Spinner>
    </main>
  );
}
