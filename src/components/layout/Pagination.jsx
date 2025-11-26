import React, { useMemo, useState } from "react";
import Container from "../Container";
import Image from "../Image";

const Pagination = () => {
  const categories = ["All", "Dokan", "Tutorial", "Tips & Tricks", "eCommerce", "How to", "WooCommerce"];

  const samplePosts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title:
      i % 3 === 0
        ? "Dropshipping Business Model: All You Need to Know on It in 2021"
        : i % 3 === 1
        ? "6 Things To Consider When Selecting a WordPress Hosting for Your Business"
        : "Best WordPress Halloween Deals 2021 (Hosting, Themes, Plugins, Marketing Tools ...)",
    category: ["eCommerce", "Tips & Tricks", "Tutorial"][i % 3],
    readTime: "23 min read",
    image: [
      "/images/Bitmap1.png",
      "/images/Bitmap2.png",
      "/images/Bitmap3.png",
      "/images/Bitmap4.png",
      "/images/Bitmap5.png",
    ][i % 5],
  }));

  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return samplePosts.filter((p) => {
      const matchesCategory = activeFilter === "All" || p.category === activeFilter;
      const matchesQuery = q === "" || p.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeFilter, samplePosts]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  function goTo(n) {
    setPage(Math.max(1, Math.min(pages, n)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-[#F5F7F9] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-gray-900">

          {/* Header */}
          <header className="pt-8 sm:pt-10 lg:pt-16">
            <Image className="mb-6 sm:mb-8" src='/images/ishaq.png' />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-10">
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {categories.slice(0, 4).map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveFilter(c); setPage(1); }}
                    className={`text-sm ${activeFilter === c ? 'text-white font-semibold lato text-[16px] leading-[150%] py-2.5 px-4 sm:py-3.5 sm:px-5 bg-black rounded-3xl sm:rounded-4xl' : 'text-[#575757] lato text-[16px] leading-[150%] py-2.5 px-4 sm:py-3.5 sm:px-5 bg-white/0 rounded-3xl sm:rounded-4xl border border-gray-300'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative mt-3 sm:mt-0 w-full sm:w-auto">
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  className="w-full sm:w-56 rounded-full bg-white border border-gray-300 text-[14px] sm:text-sm py-2 sm:py-2.5 pl-4 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm"
                  placeholder="Search"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
              </div>
            </div>
          </header>

          {/* Grid */}
          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {visible.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition p-0">
                  <div className="h-44 sm:h-48 lg:h-52 bg-gray-200 w-full overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 leading-snug">{post.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="text-xs sm:text-sm">{post.category}</span>
                      <span className="text-xs sm:text-sm text-blue-500">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center mt-10 sm:mt-12 pb-16">
              <button
                onClick={() => goTo(page - 1)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded shadow flex items-center justify-center"
                disabled={page === 1}
              >
                ←
              </button>
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i + 1)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded ${page === i + 1 ? 'bg-white font-semibold' : 'bg-white/60'} shadow`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => goTo(page + 1)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded shadow flex items-center justify-center"
                disabled={page === pages}
              >
                →
              </button>
            </div>
          </main>
        </div>
      </Container>
    </div>
  )
}

export default Pagination;
