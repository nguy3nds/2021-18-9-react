export default function Why() {
  return (
    <div>
      <h3>Disadvantage of SPA</h3>
      <ul>
        <li>
          <b>Slower initial load</b>
          <p>
            App launch: This occurs when the app is initially loaded by entering
            the URL in the browser or by clicking on an email link. “App launch”
            mode is typically slow, as the application (JS/CSS) needs to be
            downloaded and booted before doing the work to render the page.
            Subsequent: This occurs when the app has already been loaded and the
            page is visited by clicking on a link within the app. “Subsequent”
            mode is typically fast because the application is already downloaded
            and booted, and we just need to fetch new data for the page and
            render it.
          </p>
        </li>
      </ul>
    </div>
  );
}
