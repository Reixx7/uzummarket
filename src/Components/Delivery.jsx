import React, { useState } from "react";

const DeliverySection = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-6 h-[120px]">

            {/* LOGO + BURGER */}
            <div className="flex items-center gap-4">
              <img
                src="https://storage.myseldon.com/news-pict-a3/A3B386F06F4F41B9647F27B51DBDCA4A"
                alt="logo"
                className="w-24 h-24 object-contain"
              />

              <button className="bg-white/20 hover:bg-white/30 transition rounded-lg w-14 h-14 flex items-center justify-center text-white text-2xl">
                ☰
              </button>
            </div>

            {/* SEARCH */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Найти на Wildberries"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full h-12 rounded-full px-5 pr-12 text-sm outline-none bg-white border border-gray-300 shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                🔍
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-10 text-white text-sm font-medium">
              <button className="flex flex-col items-center gap-1">
                <span className="text-lg">📍</span>
                Адреса
              </button>
              <button className="flex flex-col items-center gap-1">
                <span className="text-lg">👤</span>
                Войти
              </button>
              <button className="flex flex-col items-center gap-1">
                <span className="text-lg">🛒</span>
                Корзина
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= DELIVERY CONTENT ================= */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16">
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
          <div className="flex items-center justify-between px-16 py-20">

            {/* LEFT */}
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Быстро доставим любой Ваш заказ
                <br />
                по всему Узбекистану
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📦</span>
                  <p>
                    <strong>Бесплатная доставка</strong>
                    <br />
                    В большинстве населённых пунктов
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔄</span>
                  <p>
                    <strong>Доставка круглый год</strong>
                    <br />
                    по всему Узбекистану
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📬</span>
                  <p>
                    <strong>Возврат товара</strong>
                    <br />
                    при примерке
                  </p>
                </div>
              </div>

              <button className="mt-10 bg-white/30 hover:bg-white/40 transition px-8 py-3 rounded-xl text-white font-medium">
                Узнать условия
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/809/809957.png"
                alt="delivery drone"
                className="w-[360px]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          <div>
            <h4 className="text-white font-semibold mb-4 text-base">
              Ezo Market
            </h4>
            <p className="leading-relaxed text-gray-400">
              Ezo Market — zamonaviy marketpleys. Eng yaxshi narxlar,
              tez yetkazib berish va qulay xarid.
            </p>
          </div>

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

          <div>
            <h4 className="text-white font-semibold mb-4 text-base">
              Aloqa
            </h4>
            <p className="text-gray-400">📍 Toshkent, O‘zbekiston</p>
            <p className="mt-2 text-gray-400">📞 +998 90 000 00 00</p>
            <p className="mt-2 text-gray-400">✉️ support@ezomarket.uz</p>
          </div>

        </div>

        <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
          © 2026 Ezo Market. Barcha huquqlar himoyalangan.
        </div>
      </footer>

    </div>
  );
};

export default DeliverySection;
