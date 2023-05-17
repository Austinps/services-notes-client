import { Link } from "react-router-dom";

export default function Public() {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Service Notes</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          porro fuga modi quo quasi sint nulla consequuntur possimus, ipsa
          saepe, quis debitis. Tempore, corporis quas architecto tenetur
          mollitia inventore dignissimos.
        </p>
        <address className="public__addr">
          Services Notes
          <br />
          555 Foo Drive
          <br />
          Bar City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Bob Jones</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
}
