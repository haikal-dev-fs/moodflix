import { useEffect, useState } from "react";

const Card = ({ title }) => {

  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`Card with title "${title}" has been ${hasLiked ? "liked" : "unliked"}.`);
  }, [hasLiked]);

  useEffect(() => {
    console.log('CARD RENDERED')
  }, [])


  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br /> {count || null }</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" rating={4} isCool={true} />
      <Card title="Titanic" rating={3} isCool={false} />
    </div>
  );
};

export default App;
