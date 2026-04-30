"use client";

import { useState } from "react";

export default function Reminders() {
  const [reminder, setReminder] = useState("");
  const [reminders, setReminders] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (reminder.trim() === "") return;

    setReminders([...reminders, reminder]);
    setReminder("");
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Reminders</h1>
      <p>Add fictional study or campus reminders.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="reminder">Reminder</label>
        <br />

        <input
          id="reminder"
          type="text"
          value={reminder}
          onChange={(event) => setReminder(event.target.value)}
          style={{ marginTop: "0.5rem", padding: "0.5rem", width: "100%", maxWidth: "400px" }}
        />

        <br />

        <button type="submit" style={{ marginTop: "1rem" }}>
          Add reminder
        </button>
      </form>

      <section aria-labelledby="reminders-heading">
        <h2 id="reminders-heading">My Reminders</h2>

        {reminders.length === 0 ? (
          <p>No reminders added yet.</p>
        ) : (
          <ul>
            {reminders.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}