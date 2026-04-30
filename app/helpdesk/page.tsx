"use client";

import { useState } from "react";

export default function Helpdesk() {
  const [issue, setIssue] = useState("");
  const [tickets, setTickets] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (issue.trim() === "") return;

    setTickets([...tickets, issue]);
    setIssue("");
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Helpdesk</h1>
      <p>Submit a fictional campus support ticket.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="issue">Describe your issue</label>
        <br />
        <textarea
          id="issue"
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
          rows={4}
          style={{ width: "100%", maxWidth: "500px", marginTop: "0.5rem" }}
        />

        <br />

        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit ticket
        </button>
      </form>

      <section aria-labelledby="tickets-heading">
        <h2 id="tickets-heading">Submitted Tickets</h2>

        {tickets.length === 0 ? (
          <p>No tickets submitted yet.</p>
        ) : (
          <ul>
            {tickets.map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}