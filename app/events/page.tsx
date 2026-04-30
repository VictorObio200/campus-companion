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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const recommendedEvents =
    selectedCategory === "All"
      ? events.slice(0, 2)
      : events
          .filter((event) => event.category === selectedCategory)
          .slice(0, 2);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Campus Events</h1>

      <section aria-labelledby="search-heading">
        <h2 id="search-heading">Search events</h2>

        <label htmlFor="event-search">Search by event title</label>
        <br />
        <input
          id="event-search"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search events..."
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            maxWidth: "500px",
          }}
        />
      </section>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading">Filter events by category</h2>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              style={{
  padding: "0.5rem 1rem",
  border:
    selectedCategory === category
      ? "2px solid #1d4ed8"
      : "1px solid #ccc",
  backgroundColor:
    selectedCategory === category ? "#1d4ed8" : "#e5e7eb",
  color:
    selectedCategory === category ? "white" : "#1f2937",
  borderRadius: "8px",
  cursor: "pointer",
}}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="events-heading">
        <h2 id="events-heading">Matching Events</h2>

        {filteredEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
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
        )}
      </section>

      <section aria-labelledby="recommendations-heading">
        <h2 id="recommendations-heading">Recommended Events</h2>
        <p>These events are recommended based on the category you selected.</p>

        <ul>
          {recommendedEvents.map((event, index) => (
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