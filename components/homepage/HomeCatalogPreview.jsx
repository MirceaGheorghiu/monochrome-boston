import ProductTile from "../catalog/ProductTile";

export default function HomeCatalogPreview() {
  return (
    <section className="home-catalog-preview my-lg-5 container">
      <header className="my-2 my-lg-4 containter">
        <h1 className="mt-2 mt-lg-4">New Stuff</h1>
      </header>

      <ul>
        <li>
          <ProductTile></ProductTile>
        </li>

        <li>
          <ProductTile></ProductTile>
        </li>

        <li className="d-none d-lg-block">
          <ProductTile></ProductTile>
        </li>

        <li className="d-none d-lg-block">
          <ProductTile></ProductTile>
        </li>
      </ul>

      <footer className="mt-3 mb-4 my-lg-4">
        <button className="button button-small d-lg-none" title="View all">View all</button>
        <button className="button button-large" title="View all">View all</button>
      </footer>
    </section>
  );
}
