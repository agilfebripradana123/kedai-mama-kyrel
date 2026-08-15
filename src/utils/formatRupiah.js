export function formatRupiah(value) {
  const normalized =
    typeof value === "string"
      ? Number(value.replace(/[^\d-]/g, ""))
      : Number(value);

  if (!Number.isFinite(normalized)) {
    return "Rp 0";
  }

  return `Rp ${new Intl.NumberFormat("id-ID").format(normalized)}`;
}
