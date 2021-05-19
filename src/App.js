import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((resp) => resp.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="App">
      {events && events.map(event => {
        const eventDate = new Date(event.date);
        const date = eventDate.toDateString()
        return(
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{date}</p>
            <p>{event.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
