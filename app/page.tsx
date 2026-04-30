import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Campus Companion</h1>
      <p>Welcome to the Campus Companion app.</p>

      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link href="/events">Campus Events</Link>
          </li>
          <li>
            <Link href="/directory">Campus Directory</Link>
          </li>
          <li>
  <Link href="/helpdesk">Helpdesk</Link>
</li>
<li>
  <Link href="/reminders">Reminders</Link>
</li>
        </ul>
      </nav>
    </main>
  );
}