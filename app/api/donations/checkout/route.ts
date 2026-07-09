import { NextResponse } from "next/server";

const supportedGateways = ["kina", "bsp", "westpac"] as const;
type Gateway = (typeof supportedGateways)[number];

type CheckoutRequest = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  country?: unknown;
  amount?: unknown;
  gateway?: unknown;
};

const gatewayLabels: Record<Gateway, string> = {
  kina: "Kina Bank",
  bsp: "BSP",
  westpac: "Westpac PNG",
};

function isText(value: unknown, maxLength: number) {
  return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
}

function isGateway(value: unknown): value is Gateway {
  return typeof value === "string" && supportedGateways.includes(value as Gateway);
}

export async function POST(request: Request) {
  let body: CheckoutRequest;

  try {
    body = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json({ message: "Invalid checkout request." }, { status: 400 });
  }

  if (
    !isText(body.fullName, 120) ||
    !isText(body.email, 254) ||
    !isText(body.phone, 40) ||
    !isText(body.country, 80) ||
    typeof body.amount !== "number" ||
    !Number.isFinite(body.amount) ||
    body.amount < 1 ||
    body.amount > 1_000_000 ||
    !isGateway(body.gateway)
  ) {
    return NextResponse.json({ message: "Please check the donation details and try again." }, { status: 400 });
  }

  const configured = process.env[`${body.gateway.toUpperCase()}_PAYMENT_ENABLED`] === "true";

  if (!configured) {
    return NextResponse.json(
      {
        message: `${gatewayLabels[body.gateway]} checkout is ready for merchant configuration. Add the approved gateway credentials before accepting live donations.`,
      },
      { status: 503 },
    );
  }

  return NextResponse.json(
    {
      message: `${gatewayLabels[body.gateway]} credentials are enabled, but its bank-issued checkout endpoint and signing specification must be configured before live processing.`,
    },
    { status: 501 },
  );
}
