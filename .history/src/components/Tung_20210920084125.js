export default function Tung() {
  return (
    <div>
      <h3>Front-end Routing and Back-end Routing</h3>
      <ul>
        <li>
          <b>Front-end routing</b> is handled from the browser, it allows client
          to update the page content and the url. However the page will appear
          faster, because only the contents that need to be updated will be
          updated, not the entire page or any other contents.
        </li>
        <br>
        <li>
          In <b>backend routing</b>, server will rely on HTTP methods(GET,
          POST,PUT) and the path of the URL to handle request and send back
          corresponding codes ( 200,404,500...) to users.
        </li>
      </ul>
    </div>
  );
}
