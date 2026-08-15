import { Banknote, Clock3, Mail, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-pages";

export default function DonatePage() {
  return (
    <main>
      <SiteHeader activePath="/donate" />
      <section className="donate-page">
        <div className="container donate-development-shell">
          <div className="donate-development-banner" aria-live="polite">
            <Sparkles aria-hidden="true" />
            <span>Still under development. Sorry.</span>
            <Sparkles aria-hidden="true" />
          </div>

          <div className="donate-page-grid">
            <div className="donate-intro">
              <span className="gold-label">Support CMN TV</span>
              <h1>Donate to Christian media in Papua New Guinea.</h1>
              <p>
                Our online donation and bank payment gateway is currently being prepared. Thank you
                for your patience while we complete this secure giving experience for CMN TV.
              </p>
              <div className="donate-benefits">
                <span><Clock3 /> Online transfers and card payments will be available soon</span>
                <span><ShieldCheck /> Secure bank gateway details are still being finalized</span>
                <span><Banknote /> Direct support enquiries are welcome through the contacts provided</span>
              </div>
            </div>

            <div className="donation-checkout donation-development-card">
              <div className="donation-form-heading">
                <div>
                  <span>Donation notice</span>
                  <h2>Support details coming soon</h2>
                </div>
                <ShieldCheck aria-hidden="true" />
              </div>

              <p className="donation-development-copy">
                CMN TV&apos;s online donation options are still under development. Bank account
                details and online transfer instructions will be uploaded here once they are ready.
                For now, please contact us directly if you would like to support the ministry.
              </p>

              <div className="donation-contact-grid">
                <a className="donation-contact-item" href="mailto:pngchristiantv@gmail.com">
                  <Mail aria-hidden="true" />
                  <span>
                    <small>Email support</small>
                    <b>pngchristiantv@gmail.com</b>
                  </span>
                </a>
                <a className="donation-contact-item" href="tel:+67574604474">
                  <Phone aria-hidden="true" />
                  <span>
                    <small>Call CMN TV</small>
                    <b>+675 7460 4474</b>
                  </span>
                </a>
              </div>

              <div className="donation-bank-placeholder">
                <Banknote aria-hidden="true" />
                <div>
                  <span>Bank transfer details</span>
                  <strong>Coming soon</strong>
                  <p>Account number and approved transfer instructions will be made available here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
