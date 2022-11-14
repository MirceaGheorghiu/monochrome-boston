import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

export default function Home() {
  return (
    <div>
      <header className="header mt-3 mt-lg-0">
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
