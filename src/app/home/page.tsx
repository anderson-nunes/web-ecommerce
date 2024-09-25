
// pages/index.tsx

import { fetchProducts } from '../../server/products';

export default async function Home() {
  let products;

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }

  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

