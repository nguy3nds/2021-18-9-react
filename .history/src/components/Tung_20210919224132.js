export default function Tung() {
  return (
    <div>
      <ul>
        <li>
          Front-end routing is handled from the browser, it allows client to
          update the page content and the url. However the page will appear
          faster, because only the contents that need to be updated will be
          updated, not the entire page or any other contents.
        </li>
        <li>
          In backend routing, server will rely on HTTP methods(GET, POST,PUT)
          and the path of the URL to handle request and send back corresponding
          codes ( 200,404,500...) to users.
        </li>
      </ul>
    </div>
  );
}
