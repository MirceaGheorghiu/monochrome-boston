import Link from "next/link";

export default function FooterNav() {
  return (
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
  );
}
