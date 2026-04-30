"use client";

import { useState } from "react";

const events = [
  {
    title: "Coding Society Meetup",
    date: "May 10",
    location: "Room A101",
    category: "Tech",
  },
  {
    title: "Football Trials",
    date: "May 12",
    location: "Sports Field",
    category: "Sports",
  },
  {
    title: "Music Club Night",
    date: "May 15",
    location: "Student Hall",
    category: "Music",
  },
  {
    title: "Robotics Workshop",
    date: "May 18",
    location: "Lab B204",
    category: "Tech",
  },
];

const categories = ["All", "Sports", "Tech", "Music"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Campus Events</h1>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading">Filter events by category</h2>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "0.5rem 1rem",
                border:
                  selectedCategory === category
                    ? "2px solid black"
                    : "1px solid gray",
                backgroundColor:
                  selectedCategory === category ? "#e5e5e5" : "white",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="events-heading">
        <h2 id="events-heading">{selectedCategory} Events</h2>

        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Category: {event.category}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}