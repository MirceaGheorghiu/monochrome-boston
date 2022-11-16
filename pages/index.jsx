import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import HomeCatalogPreview from '../components/homepage/HomeCatalogPreview';
import HomeContent from '../components/homepage/HomeContent';

export default function Home() {
  return (
    <div>
      <header className="header mt-lg-0">
        <Header></Header>
      </header>

      <main className="content-main">
        <div className="banner-main mb-4 d-lg-none container">
          <button
            className="button button-primary d-lg-none"
            type="submit"
            title="New In">New In</button>
        </div>

        <HomeCatalogPreview></HomeCatalogPreview>
        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeContent></HomeContent>

        <HomeCatalogPreview></HomeCatalogPreview>
        <HomeCatalogPreview></HomeCatalogPreview>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
