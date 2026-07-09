import { Globe2, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-pages";
import DonationForm from "./donation-form";

export default function DonatePage() {
  return (
    <main>
      <SiteHeader activePath="/donate" />
      <section className="donate-page">
        <div className="container donate-page-grid">
          <div className="donate-intro">
            <span className="gold-label">Support CMN TV</span>
            <h1>Donate to Christian media in Papua New Guinea.</h1>
            <p>
              Your contribution helps CMN TV produce Christian programs, cover ministry events,
              improve production equipment, and share the Gospel with families across PNG.
            </p>
            <div className="donate-benefits">
              <span><HeartHandshake /> Support Gospel-centered programming</span>
              <span><Globe2 /> Give securely from PNG or overseas</span>
              <span><ShieldCheck /> Continue through an approved bank gateway</span>
            </div>
          </div>
          <DonationForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
