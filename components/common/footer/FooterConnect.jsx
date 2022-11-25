import Link from "next/link";

export default function FooterConnect() {
  return (
    <section className="footer-connect">
      <header className="d-lg-none my-3">
        <h1>Let's connect</h1>
      </header>

      <form method="GET" className="footer-newsletter my-lg-0">
        <label htmlFor="email" className="d-lg-none">
          Be the first to receive exclusive offers
        </label>

        <label htmlFor="email" className="d-none d-lg-block mb-lg-1">Sign up for our newsletter</label>
        <input type="email"
          name="email"
          id="email"
          placeholder="Email"
        />

        <div className="footer-wrapper mt-3">
          <button
            type="submit"
            title="Sign up for our newsletter"
            className="button button-secondary"
          >Submit</button>

          <div>
            <input
              type="checkbox"
              name="policy"
              id="policy" />
            <label htmlFor="policy">
              I agree with <Link
                href="/"
                title="Privacy Policy"
              >Privacy Policy</Link> and I want to receive emails from Monochrome
            </label>
          </div>
        </div>
      </form >

      <div className="footer-social my-4">
        <header>
          <h1 className="d-lg-none">We are highly likeable</h1>
        </header>

        <ul className="my-3 my-lg-0">
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>

          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </section >
  );
}
