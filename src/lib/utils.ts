export const formatPrice = (value: number) => `${value.toFixed(2)} zł`;

if (
  typeof require !== "undefined" &&
  typeof module !== "undefined" &&
  require.main === module
) {
  const assert = (cond: unknown, msg: string) => {
    if (!cond) throw new Error(msg);
  };
  assert(formatPrice(0) === "0.00 zł", "formatPrice zero");
  assert(formatPrice(12.3) === "12.30 zł", "formatPrice 12.3");
  console.log("Self-tests passed");
}
