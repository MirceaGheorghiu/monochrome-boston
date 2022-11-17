import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <section className="header-secondary-inner my-2 my-lg-0 pt-lg-5 container">
        <div className="header-connect d-none d-lg-block">
          <ul>
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

            <li>
              <a href="tel:+0044 (0)10 2345 6789" title="Call us">
                Call us +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls ">
          <h1 className="d-lg-none">Monochrome</h1>

          <form method="GET" className="header-search d-none d-lg-block">
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="search"
              placeholder="Search"
              name="search" />
          </form>

          <ul>
            <li>
              <Link href="/" title="My account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Wishlist">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Add to cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
