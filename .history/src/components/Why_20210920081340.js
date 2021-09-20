import nexflix from "../image/imgpsh_mobile_save.jpg";

export default function Why() {
  return (
    <div>
      <h3>Disadvantage of SPA</h3>
      <ul>
        <li>
          <b>1. Slower initial load</b>
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
        <li>
          <b>2. Won’t work without javascript</b>
          <p>
            If a site is “client-side rendered” (CSR), that means JavaScript is
            doing the data fetching and creating the DOM and all that. If we’re
            talking about websites “working” or not with or without JavaScript,
            a site that is client-side rendered will 100% fail without
            JavaScript. It is sort of the opposite of “server-side rendered”
            (SSR) in which the document comes down as HTML right from the
            server. SSR is almost certainly faster for a first-loading
            experience. CSR, typically, is faster to move around the site after
            loading (think “single page app,” or SPA).
          </p>
          <img src={nexflix} alt="" />
        </li>
        <li>
          <b>3. SPA is not optimized for SEO</b>
        </li>
      </ul>
    </div>
  );
}
