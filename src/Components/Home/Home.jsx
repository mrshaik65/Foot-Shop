import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Heroimg from "./IMG_20250831_114915.jpg";

export default function HomePage() {
  return (
    <>
      {/* ================= HOME (Hero Section) ================= */}
      <section
        id="home"
        className="w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 pt-28"
      >
        <div className="grid items-center gap-10 px-6 mx-auto max-w-7xl lg:px-8 py-14 lg:py-20 lg:grid-cols-2">
          {/* LEFT: Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Chip label="New" color="primary" />
              <span className="text-sm text-gray-500">
                Free delivery over ₹1999
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Discover your next favorite pair
            </h1>

            <p className="max-w-xl text-lg text-gray-600">
              Premium footwear — curated for comfort and style.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon fontSize="small" />}
                disableElevation
              >
                Shop Now
              </Button>
              <Button variant="outlined">Learn More</Button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden shadow-xl rounded-2xl lg:max-w-2xl">
              <img
                src={Heroimg}
                alt="hero"
                className="object-cover object-center w-full h-64 sm:h-80 lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="w-full px-6 py-16 bg-white lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            At <span className="font-semibold">FootShop</span>, we believe
            footwear is more than just fashion — it’s comfort, confidence, and
            personality. Our collection brings you premium shoes curated from
            trusted brands, ensuring every step feels as good as it looks.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            From classic formals to trendy sneakers, we handpick styles that
            combine durability with elegance. Every product is carefully checked
            to guarantee quality, comfort, and long-lasting wear.
          </p>

          <div className="grid gap-6 mt-10 text-left sm:grid-cols-2">
            <div className="p-6 rounded-lg shadow-sm bg-gray-50">
              <h3 className="font-semibold text-gray-900">Quality First</h3>
              <p className="mt-2 text-sm text-gray-600">
                Premium materials and craftsmanship you can trust.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-sm bg-gray-50">
              <h3 className="font-semibold text-gray-900">Customer Care</h3>
              <p className="mt-2 text-sm text-gray-600">
                Hassle-free returns and free delivery over ₹1999.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="cta"
        className="w-full px-6 py-16 bg-gradient-to-r from-indigo-500 to-purple-600 lg:px-20"
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Step into Style with FootShop
          </h2>
          <p className="text-lg text-gray-100">
            Explore our latest arrivals and find the perfect pair to match your
            vibe. Limited stock available!
          </p>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full px-6 py-10 text-gray-300 bg-gray-900 lg:px-20">
        <div className="grid gap-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">FootShop</h3>
            <p className="mt-3 text-sm text-gray-400">
              Premium footwear for every occasion. Style, comfort, and quality
              in every step.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <p className="mt-3 text-sm text-gray-400">
              Subscribe to get special offers & new arrivals.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-3 text-sm text-white bg-gray-800 rounded-lg focus:outline-none"
            />
            <Button variant="contained" color="primary" className="w-full mt-3">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="mt-10 text-xs text-center text-gray-500">
          © {new Date().getFullYear()} FootShop. All rights reserved.
        </div>
      </footer>
    </>
  );
}
