import React, { useState, useEffect } from "react";
import productsData from "../products.json";

// 👉 Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 👉 Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Outlet } from "react-router-dom";

const Ezo = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("popular");

  // загрузка продуктов
  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  // поиск
  const searchedProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchText.toLowerCase()) ||
  product.category?.toLowerCase().includes(searchText.toLowerCase())
);


  // сортировка
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch (sortType) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "discount":
        return b.discount - a.discount;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">

    <header className="bg-gradient-to-r from-pink-500 to-purple-600">
  <div className="max-w-[1400px] mx-auto px-6">
    <div className="flex items-center gap-6 h-[120px]">

      {/* ЛОГО + БУРГЕР */}
      <div className="flex items-center gap-4">
        <img src="https://storage.myseldon.com/news-pict-a3/A3B386F06F4F41B9647F27B51DBDCA4A" alt="logo" className="w-27 h-27 object-contain" />

        {/* Бургер */}
        <button className="bg-white/20 hover:bg-white/30 transition rounded-lg w-20 h-20 flex items-center justify-center text-white text-2xl">
          ☰
        </button>
      </div>

      {/* ПОИСК */}
      <div className="flex-1 relative">
        <input
  type="text"
  placeholder="Нayti na Wildberries"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  className="w-full h-12 rounded-full px-5 pr-12 text-sm outline-none bg-white border border-gray-300 shadow-sm"
/>

        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          📷
        </button>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="flex items-center gap-10 text-white text-sm font-medium">
        <button className="flex flex-col items-center gap-1 hover:opacity-80 text-base">
          <span className="text-lg">📍</span>
          <span>Адреса</span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:opacity-80 text-base">
          <span className="text-lg">👤</span>
          <span>Войти</span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:opacity-80 text-base">
          <span className="text-lg">🛒</span>
          <span>Корзина</span>
        </button>
      </div>

    </div>
  </div>
</header>
      {/* ================= SORT ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6 py-4 text-sm font-medium">
            {[
              ["popular", "Mashhur"],
              ["price-asc", "Arzon → Qimmat"],
              ["price-desc", "Qimmat → Arzon"],
              ["discount", "Eng katta chegirma"],
              ["rating", "Reyting"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSortType(key)}
                className={
                  sortType === key
                    ? "text-[#cb11ab]"
                    : "text-gray-600 hover:text-[#cb11ab]"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SWIPER SLIDER ================= */}
     <div className="max-w-7xl mx-auto px-6 py-6">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 4000 }}
    pagination={{ clickable: true }}
    navigation
    loop
    className="rounded-2xl shadow-lg overflow-hidden"
  >
    <SwiperSlide>
      <img
        src="https://img.freepik.com/free-photo/flat-lay-black-friday-sales-composition-red-background_23-2148665540.jpg?w=1200&q=80"
        alt="banner"
        className="w-full h-[260px] md:h-[420px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="https://img.freepik.com/free-photo/black-friday-sale-banner-with-shopping-cart_23-2149074073.jpg?w=1200&q=80"
        alt="banner"
        className="w-full h-[260px] md:h-[420px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="https://img.freepik.com/free-photo/online-shopping-banner-with-smartphone_23-2148625708.jpg?w=1200&q=80"
        alt="banner"
        className="w-full h-[260px] md:h-[420px] object-cover"
      />
    </SwiperSlide>
  </Swiper>
</div>

      {/* ================= PRODUCTS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {sortedProducts.length === 0 && (
          <p className="text-center text-xl text-gray-400">
            Hech narsa topilmadi 😔
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sortedProducts.map((product) => {
            const finalPrice =
              product.discount > 0
                ? product.price - (product.price * product.discount) / 100
                : product.price;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="relative h-52 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div>




                <div className="p-4">
                  <span className="text-xl font-bold text-[#cb11ab]">
                    {finalPrice.toFixed(0)} so'm
                  </span>

                  <p className="text-sm text-gray-700 line-clamp-2 mt-1">
                    {product.name}
                  </p>

                  <button className="mt-3 w-full bg-gradient-to-r from-[#cb11ab] to-[#d946ef] text-white py-2 rounded-xl text-sm font-semibold">
                    🛒 Savatga
                  </button>
                  
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
      {/* ================= FOOTER ================= */}
<footer className="bg-gray-900 text-gray-300 mt-20">
  <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
    
    {/* О проекте */}
    <div>
      <h4 className="text-white font-semibold mb-4 text-base">
        Ezo Market
      </h4>
      <p className="leading-relaxed text-gray-400">
        Ezo Market — zamonaviy marketpleys. Eng yaxshi narxlar, tez yetkazib berish
        va qulay xarid.
      </p>
    </div>

    {/* Покупателям */}
    <div>
      <h4 className="text-white font-semibold mb-4 text-base">
        Xaridorlarga
      </h4>
      <ul className="space-y-2">
        <li className="hover:text-white cursor-pointer">Yetkazib berish</li>
        <li className="hover:text-white cursor-pointer">Qaytarish</li>
        <li className="hover:text-white cursor-pointer">To‘lov usullari</li>
        <li className="hover:text-white cursor-pointer">Buyurtmalar</li>
      </ul>
    </div>

    {/* Помощь */}
    <div>
      <h4 className="text-white font-semibold mb-4 text-base">
        Yordam
      </h4>
      <ul className="space-y-2">
        <li className="hover:text-white cursor-pointer">FAQ</li>
        <li className="hover:text-white cursor-pointer">Aloqa</li>
        <li className="hover:text-white cursor-pointer">Qo‘llab-quvvatlash</li>
        <li className="hover:text-white cursor-pointer">Shikoyatlar</li>
      </ul>
    </div>

    {/* Контакты */}
    <div>
      <h4 className="text-white font-semibold mb-4 text-base">
        Aloqa
      </h4>
      <p className="text-gray-400">📍 Toshkent, O‘zbekiston</p>
      <p className="mt-2 text-gray-400">📞 +998 90 000 00 00</p>
      <p className="mt-2 text-gray-400">✉️ support@ezomarket.uz</p>

      {/* Соцсети */}
      <div className="flex gap-4 mt-4 text-lg">
        <span className="cursor-pointer hover:text-white">📸</span>
        <span className="cursor-pointer hover:text-white">📱</span>
        <span className="cursor-pointer hover:text-white">💬</span>
      </div>
    </div>
  </div>

  {/* Нижняя линия */}
  <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
    © 2026 Ezo Market. Barcha huquqlar himoyalangan.
  </div>
</footer>
    </div>
  );
};

export default Ezo;
