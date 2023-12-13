export function getBrands(client) {
  return client.from("brand").select("*");
}
