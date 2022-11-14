import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer mt-5">
      <div className="footer-inner py-lg-4">
        <section className="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a
                href="tel:0044 (0)10 2345 6789"
                title="Call us"
              >Call us <span>+44 (0)10 2345 6789</span></a>
            </li>

            <li>
              <a
                href="mailto:email@monochrome.com"
                title="Email customer care"
              >Email customer care</a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <header className="d-lg-none mt-4 mt-lg-0 ">
            <h1>How cand we help?</h1>
          </header>

          <div className="my-4 my-lg-0">
            <ul>
              <li>
                <Link
                  href="/"
                  title="About us"
                >About us</Link>
              </li>

              <li>
                <Link
                  href=""
                  title="Careers"
                >Careers</Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Affiliates"
                >Affiliates</Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Advertising"
                >Advertising</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link
                  href="/"
                  title="Style & Fit"
                >Style and Fit</Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Faqs"
                >Faqs</Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Delivery"
                >Delivery</Link>
              </li>

              <li>
                <Link
                  href="/"
                  title="Exchanges & Returns"
                >Returns</Link>
              </li>
            </ul>
          </div>

          <footer className="mb-4 d-lg-none">
            <Link
              href="/"
              title="Terms & Conditions"
            > Terms & Conditions </Link>

            <Link
              href="/"
              title="Privacy & Cookies"
            > Privacy & Cookies </Link>
          </footer>
        </nav>

        <section className="footer-connect">
          <div className="footer-newsletter mt-4 my-lg-0">
            <header className="d-lg-none">
              <h1>Let's connect</h1>
            </header>

            <form method="GET">
              <h2 for="email" className="d-lg-none">
                Be the first to receive exclusive offers
              </h2>
              <label for="email" className="d-none d-lg-block">Sign up for our newsletter</label>
              <input type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </form>

            <button
              type="submit"
              title="Sign up for our newsletter"
              className="button button-secondary d-block d-lg-none"
            >Submit</button>

            <form method="GET">
              <input type="checkbox"
                name="policy"
                id="policy" />

              <label for="policy">
                I agree with <Link
                  href="/"
                  title="Privacy Policy"
                >Privacy Policy</Link> and I want to receive emails from Monochrome
              </label>
            </form>

            <button
              type="submit"
              title="Sign up for our newsletter"
              className="button button-secondary d-none d-lg-block"
            >Submit</button>
          </div>

          <div className="footer-social my-4 my-lg-3">
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
        </section>
      </div >
    </section >
  );
}
