import Link from "next/link";
import FooterConnect from "./FooterConnect";
import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <section className="footer mt-5">
      <div className="footer-inner py-lg-4 gap-10 container">
        <FooterContact></FooterContact>

        <FooterNav></FooterNav>

        <FooterConnect></FooterConnect>
      </div >
    </section >
  );
}
