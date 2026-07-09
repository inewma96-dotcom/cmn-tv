"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  LoaderCircle,
  LockKeyhole,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Gateway = "kina" | "bsp" | "westpac";

const gateways: { id: Gateway; name: string; detail: string }[] = [
  { id: "kina", name: "Kina Bank", detail: "Internet Payment Gateway" },
  { id: "bsp", name: "BSP", detail: "Internet Payment Gateway" },
  { id: "westpac", name: "Westpac PNG", detail: "Internet Payment Gateway" },
];

const presetAmounts = [25, 50, 100, 250];

export default function DonationForm() {
  const [gateway, setGateway] = useState<Gateway>("kina");
  const [amount, setAmount] = useState("100");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  const formattedAmount = useMemo(() => {
    const value = Number(amount);
    return Number.isFinite(value) && value > 0
      ? new Intl.NumberFormat("en-PG", { style: "currency", currency: "PGK" }).format(value)
      : "PGK 0.00";
  }, [amount]);

  async function submitDonation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: form.get("fullName"),
      email: form.get("email"),
      phone: form.get("phone"),
      country: form.get("country"),
      amount: Number(form.get("amount")),
      gateway,
    };

    try {
      const response = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { checkoutUrl?: string; message?: string };

      if (!response.ok || !result.checkoutUrl) {
        throw new Error(result.message || "The payment gateway could not start the checkout.");
      }

      window.location.assign(result.checkoutUrl);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The payment gateway could not start the checkout.");
    }
  }

  return (
    <form className="donation-checkout" onSubmit={submitDonation}>
      <div className="donation-form-heading">
        <div>
          <span>Secure donation</span>
          <h2>Support CMN TV</h2>
        </div>
        <LockKeyhole aria-hidden="true" />
      </div>

      <fieldset className="donation-gateways">
        <legend>Choose payment gateway</legend>
        <div className="gateway-options">
          {gateways.map((item) => (
            <label className={gateway === item.id ? "gateway-option selected" : "gateway-option"} key={item.id}>
              <input
                checked={gateway === item.id}
                name="gateway"
                onChange={() => setGateway(item.id)}
                type="radio"
                value={item.id}
              />
              <Building2 aria-hidden="true" />
              <span>
                <b>{item.name}</b>
                <small>{item.detail}</small>
              </span>
              {gateway === item.id ? <CheckCircle2 className="gateway-check" aria-hidden="true" /> : null}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="donation-fields">
        <label>
          <span>Full name</span>
          <div className="donation-input">
            <User aria-hidden="true" />
            <input autoComplete="name" name="fullName" placeholder="Your full name" required type="text" />
          </div>
        </label>
        <label>
          <span>Email address</span>
          <div className="donation-input">
            <Mail aria-hidden="true" />
            <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
          </div>
        </label>
        <label>
          <span>Phone number</span>
          <div className="donation-input">
            <Phone aria-hidden="true" />
            <input autoComplete="tel" name="phone" placeholder="+675" required type="tel" />
          </div>
        </label>
        <label>
          <span>Country</span>
          <select defaultValue="Papua New Guinea" name="country" required>
            <option>Papua New Guinea</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <fieldset className="donation-amount">
        <legend>Donation amount (PGK)</legend>
        <div className="amount-presets">
          {presetAmounts.map((value) => (
            <button
              className={Number(amount) === value ? "active" : ""}
              key={value}
              onClick={() => setAmount(String(value))}
              type="button"
            >
              K{value}
            </button>
          ))}
        </div>
        <label className="custom-amount">
          <span>PGK</span>
          <input
            inputMode="decimal"
            min="1"
            name="amount"
            onChange={(event) => setAmount(event.target.value)}
            required
            step="0.01"
            type="number"
            value={amount}
          />
        </label>
      </fieldset>

      <div className="donation-total">
        <span>Total donation</span>
        <strong>{formattedAmount}</strong>
      </div>

      {status === "error" ? <p className="donation-error" role="alert">{message}</p> : null}

      <button className="donation-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? <LoaderCircle className="spin" /> : <CreditCard />}
        {status === "submitting" ? "Connecting securely..." : "Continue to secure Visa payment"}
        {status !== "submitting" ? <ArrowRight /> : null}
      </button>

      <p className="donation-security">
        <LockKeyhole aria-hidden="true" />
        Card details are entered on the selected bank&apos;s secure hosted checkout and are never stored by CMN TV.
      </p>
    </form>
  );
}
