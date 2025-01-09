"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Your one-stop solution for all your needs. Explore, learn, and grow
          with us.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all">
            Learn More
          </button>
        </div>
      </section>

      <section className="mt-12 text-center max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600">
          We are dedicated to providing you with the best service and
          experience. Join us on this journey and discover everything we have to
          offer.
        </p>
      </section>

      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
