import { Metadata } from 'next'
import { notFound } from "next/navigation"
import ProductDetails from "../../../components/products-detail"

interface Product {
  name: string;
  price: number;
  salePrice: number | null;
  image: string;
  slug: string;
}

const products: Product[] = [
  { name: 'Fresh Lime', price: 32.00, salePrice: 28.00, image: '/lime.png', slug: 'fresh-lime' },
  { name: 'Chocolate Muffin', price: 35.00, salePrice: null, image: '/muffin.png', slug: 'chocolate-muffin' },
  { name: 'Burger', price: 37.00, salePrice: 34.00, image: '/burger1.png', slug: 'burger' },
  { name: 'Country Burger', price: 44.00, salePrice: null, image: '/burger.png', slug: 'country-burger' },
  { name: 'Drink', price: 37.00, salePrice: 34.00, image: '/drink.png', slug: 'drink' },
  { name: 'Pizza', price: 42.00, salePrice: null, image: '/pizza.png', slug: 'pizza' },
  { name: 'Cheese Butter', price: 37.00, salePrice: null, image: '/cheese.png', slug: 'cheese-butter' },
  { name: 'Sandwiches', price: 35.00, salePrice: null, image: '/sandwiches.png', slug: 'sandwiches' },
  { name: 'Chicken Chup', price: 42.00, salePrice: null, image: '/chicken.png', slug: 'chicken-chup' },
];

interface Params {
  slug: string;
}

export interface PageProps {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return { 
    title: product.name,
    description: `Details for ${product.name}`
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

