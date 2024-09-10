import "../styles/utility.css";

export default function Header() {
  return (
    <>
      <header className="container">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <ul className="even columns">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Soluções</a>
          </li>
          <li>
            <a>Depoimentos</a>
          </li>
          <li>
            <a>Preços</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </header>
    </>
  );
}
