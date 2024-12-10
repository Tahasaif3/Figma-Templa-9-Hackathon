'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { useState } from 'react'
import { Search } from 'lucide-react'
import Banner from "../../public/Banner (1).png"
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const products = [
  { name: 'Fresh Lime', price: 32.00, salePrice: 28.00, image: '/lime.png?height=300&width=300&text=Fresh+Lime', slug: 'fresh-lime' },
  { name: 'Chocolate Muffin', price: 35.00, salePrice: null, image: '/muffin.png?height=300&width=300&text=Chocolate+Muffin', slug: 'chocolate-muffin' },
  { name: 'Burger', price: 37.00, salePrice: 34.00, image: '/burger1.png?height=300&width=300&text=Burger', slug: 'burger' },
  { name: 'Country Burger', price: 44.00, salePrice: null, image: '/burger.png?height=300&width=300&text=Country+Burger', slug: 'country-burger' },
  { name: 'Drink', price: 37.00, salePrice: 34.00, image: '/drink.png?height=300&width=300&text=Drink', slug: 'drink' },
  { name: 'Pizza', price: 42.00, salePrice: null, image: '/pizza.png?height=300&width=300&text=Pizza', slug: 'pizza' },
  { name: 'Cheese Butter', price: 37.00, salePrice: null, image: '/cheese.png?height=300&width=300&text=Cheese+Butter', slug: 'cheese-butter' },
  { name: 'Sandwiches', price: 35.00, salePrice: null, image: '/sandwiches.png?height=300&width=300&text=Sandwiches', slug: 'sandwiches' },
  { name: 'Chicken Chup', price: 42.00, salePrice: null, image: '/chicken.png?height=300&width=300&text=Chicken+Chup', slug: 'chicken-chup' },
  { name: 'Country Burger', price: 44.00, salePrice: null, image: '/burger.png?height=300&width=300&text=Country+Burger', slug: 'country-burger-2' },
  { name: 'Drink', price: 37.00, salePrice: 34.00, image: '/drink.png?height=300&width=300&text=Drink', slug: 'drink-2' },
  { name: 'Pizza', price: 42.00, salePrice: null, image: '/pizza.png?height=300&width=300&text=Pizza', slug: 'pizza-2' },
  { name: 'Cheese Butter', price: 37.00, salePrice: null, image: '/cheese.png?height=300&width=300&text=Cheese+Butter', slug: 'cheese-butter-2' },
  { name: 'Sandwiches', price: 35.00, salePrice: null, image: '/sandwiches.png?height=300&width=300&text=Sandwiches', slug: 'sandwiches-2' },
  { name: 'Chicken Chup', price: 42.00, salePrice: null, image: '/chicken.png?height=300&width=300&text=Chicken+Chup', slug: 'chicken-chup-2' },
]

const categories = ['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thi', 'Non Veg', 'Uncategorized']

const latestProducts = [
  { name: 'Pizza', price: 32.00, slug: 'pizza' },
  { name: 'Cupcake', price: 25.00, slug: 'cupcake' },
  { name: 'Chicken', price: 45.00, slug: 'chicken' },
  { name: 'Burger', price: 38.00, slug: 'burger' },
]

const productTags = ['Services', 'Our Menu', 'Pizza', 'Cupcake', 'Burger', 'Cookies', 'Our Shop', 'Tandoori Chicken']

export default function ShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  return (
    <div className="bg-white min-h-screen">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl"><span className="text-orange-500 font-bold text-2xl">Food</span>luck</div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br />
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
            <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
            <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
          </ul>
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <Link href={"/ShoppingCart"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaShoppingBag />
            </button></Link>
            <Link href={"/Signup"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaUser />
            </button></Link>
            <Link href={"/Checkout"}> <button className="bg-gray-800 p-2 rounded-full">
              <MdShoppingCartCheckout />
            </button></Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
          alt="Menu Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Our Shop</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Shop</span></p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-36">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 mt-8">
  <div className="flex items-center ml-8 mb-4 sm:mb-0">
    <span className="ml-2 text-black">Sort By:</span>
    <select className="bg-white border rounded p-2 text-black min-w-[150px]">
      <option>Default</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  </div>
  <div className="flex mr-5 items-center">
    <span className="mr-2 text-black">Show:</span>
    <select className="bg-white border rounded p-2 text-black min-w-[80px]">
      <option>12</option>
      <option>24</option>
      <option>36</option>
    </select>
  </div>
</div>

 

        <div className="flex flex-wrap mx-4 my-4">
          <div className="w-full md:w-3/4 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link href={`/Product-detail/${product.slug}`} key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-black">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      {product.salePrice ? (
                        <>
                          <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                          <span className="text-orange-500 font-bold">${product.salePrice.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 sm:mt-4 md:mt-0">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="mb-6">
                <div className="relative">
                  <Image
                    src={"/search.png"}
                    alt='search icon'
                    width={248}
                    height={46} />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2 text-black">Category</h3>
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center mb-2 text-black">
                    <input type="checkbox" id={`category-${index}`} className="mr-2" />
                    <label htmlFor={`category-${index}`}>{category}</label>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className="text-white rounded-lg">
                  <Image
                    src={Banner}
                    alt='Banner image'
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className="mb-6">
                <Image
                  src={"/filterr.png"}
                  alt='filter categories image'
                  width={248}
                  height={87}
                />
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2 mt-10 text-black">Latest Products</h3>
                {latestProducts.map((product, index) => (
                  <Link href={`/products/${product.slug}`} key={index} className="flex items-center mb-2 hover:bg-gray-200 rounded p-2 transition-colors duration-300">
                    <Image src="/latest.png?height=50&width=50&text=Product" alt={product.name} width={50} height={50} className="mr-2" />
                    <div>
                      <h4 className="font-bold text-black">{product.name}</h4>
                      <Image src="/stars.png?height=50&width=50&text=Product" alt={product.name} width={50} height={50} className="mr-2" />
                      <p className="text-orange-500">${product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Product Tags</h3>
                <div className="flex flex-wrap">
                  {productTags.map((tag, index) => (
                    <span key={index} className="text-gray-700 px-2 py-1 text-sm mr-2 mb-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition-colors duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/pagination.png"}
          alt="pagination"
          width={150}
          height={200}
          className="mt-10 mx-auto sm:ml-72 sm:mr-72 lg:ml-96 lg:mr-96"
        />


      </div>
      <Footer />
    </div>
  )
}

