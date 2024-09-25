export const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/products`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
};
