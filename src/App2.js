import { useState } from 'react';
import './main.css';
import ConditionalSpinner from './ConditionalSpinner';

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
      <ConditionalSpinner condition={spinnerActive} relativePosition={false}>
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
      </ConditionalSpinner>
    </main>
  );
}
