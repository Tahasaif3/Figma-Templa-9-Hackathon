"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, MessageSquare, Search, Facebook, Twitter, Instagram } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"

interface BlogPost {
  id: number
  title: string
  date: string
  author: string
  comments: number
  content: string[]
  quote: string
  image: string
  tags: string[]
}

interface BlogDetailsProps {
  post: BlogPost
}

export default function BlogDetails({ post }: BlogDetailsProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const comments = [
    {
      id: 1,
      author: "MD Sajib Khan",
      date: "June 22, 2020",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.",
      avatar: "/comment1.png?height=40&width=40"
    },
    {
      id: 2,
      author: "MD Moon Khan",
      date: "June 22, 2020",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.",
      avatar: "/comment2.png?height=40&width=40"
    },
    {
      id: 3,
      author: "MD Gull Khan",
      date: "June 22, 2020",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.",
      avatar: "/comment3.png?height=40&width=40"
    }
  ]

  const menuCategories = [
    { name: "Chicken Fry", count: 26, image: "/filter1.png?height=50&width=50" },
    { name: "Burger Food", count: 45, image: "/filter2.png?height=50&width=50" },
    { name: "Pizza", count: 16, image: "/filter3.png?height=50&width=50" },
    { name: "Fresh Fruits", count: 36, image: "/filter4.png?height=50&width=50" },
    { name: "Vegetables", count: 16, image: "/filter5.png?height=50&width=50" }
  ]

  const recentPosts = [
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent1.png?height=80&width=80"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent2.png?height=80&width=80"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent3.png?height=80&width=80"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent4.png?height=80&width=80"
    }
  ]

  return (
    <div className="min-h-screen bg-pink-50/80">
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
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br/>       
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Blog-Details</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Blog-Details</span></p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 md:h-[400px] object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments} Comments
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{post.title}</h1>

                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                ))}

                <blockquote className="bg-orange-500 text-white p-4 md:p-6 rounded-lg my-6 md:my-8">
                  {post.quote}
                </blockquote>

                <div className="flex flex-wrap items-center justify-between border-t border-b py-4 mt-6 md:mt-8">
                  <div className="flex items-center gap-2 mb-2 md:mb-0">
                    <Image
                      src={"/taggs.png"}
                      alt="tags"
                      width={297}
                      height={24}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Share:</span>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-orange-500 flex justify-center items-center"
                      >
                        <Facebook />
                        <Twitter />
                        <Instagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <div className="mt-8 md:mt-12 bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-6">Comments - {comments.length}</h3>
              <div className="space-y-4 md:space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{comment.author}</h4>
                        <Button variant="ghost" size="sm" className="text-orange-500">
                          Reply
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{comment.date}</p>
                      <p className="text-gray-600">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Form */}
            <div className="mt-8 md:mt-12 bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-6">Post a comment</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input placeholder="Name*" required className="w-full p-2 border rounded" />
                  <input type="email" placeholder="Email*" required className="w-full p-2 border rounded" />
                </div>
                <textarea
                  placeholder="Write a comment"
                  className="w-full p-2 border rounded min-h-[150px]"
                  required
                />
                <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600">
                  Post comment
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 mt-8 md:mt-0">
            {/* Author Profile */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <Avatar className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4">
                <AvatarImage src="/admin.png?height=80&width=80" alt="Prince Miyako" />
                <AvatarFallback>Admin</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">Prince Miyako</h3>
              <p className="text-sm text-gray-500">Blogger/Photographer</p>
              <div className="flex justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-2">(1 Review)</p>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies tortor ac ligula pulvinar.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Facebook />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Instagram />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Twitter />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Image src={"/pin.png"} alt='pinterest' width={25} height={20} />
                </Link>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link key={index} href="#" className="flex gap-4 group">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Filter By Menu */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Filter By Menu</h3>
              <div className="space-y-4">
                {menuCategories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={50}
                        height={50}
                        className="rounded object-cover"
                      />
                      <Link href="#" className="text-gray-600 hover:text-orange-500">
                        {category.name}
                      </Link>
                    </div>
                    <span className="text-gray-500">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <Image
                src={"/tags.png"}
                alt='tags'
                width={325}
                height={244}
              />
            </div>

            {/* Photo Gallery */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <Image
                  src="/Photo.png?height=100&width=100"
                  alt="Gallery image"
                  width={1200}
                  height={600}
                  className="rounded object-cover"
                />
              </div>
              <h2 className="font-semibold mb-4 mt-4 ml-4 md:ml-6">Follow us</h2>

              <div className="flex justify-center gap-4">
                <Image
                  src={"/icin.png"}
                  alt='icons'
                  width={308}
                  height={47}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

