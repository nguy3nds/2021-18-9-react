export default function How() {
  return (
    <div>
      <h3>Difference of SPA and MPA</h3>
      <ul>
        <li>
          <b>SPA</b> No page reload required during use
        </li>
        <li>
          <b>MPA: </b> Reload the page during use
        </li>
      </ul>
      <p>About speed</p>
      <ul>
        <li>
          <b>SPA is faster when using</b>
          <p>Most resources are loaded the first time</p>
          <p>The page only loads new data when needed</p>
        </li>
        <li>
          <b>MPA is slower when used</b>
          <p>Always reload the entire page when accessing and redirecting</p>
        </li>
      </ul>
    </div>
  );
}
