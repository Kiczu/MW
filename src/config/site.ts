const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  name: "Kobieta na kole",
  title: "Kobieta na kole – ręcznie robiona ceramika",
  description:
    "Ceramika z kamionki lepiona ręcznie w małej, domowej pracowni – naczynia do codziennego użytku i ozdoby, które cieszą oko.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (productionUrl ? `https://${productionUrl}` : "http://localhost:3000"),
};
