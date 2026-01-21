// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();

  const product = {
    id,
    title: "Qulay hazm qilish uchun sut aralashmasi Kabrita 2 Gold, 400 gr",
    rating: 5,
    reviews: 230,
    orders: 2000,
    price: 247490,
    oldPrice: 639000,
    image: "/images/kabrita-main.png",
    thumbnails: [
      "/images/kabrita-1.png",
      "/images/kabrita-2.png",
      "/images/kabrita-3.png",
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="col-span-12 lg:col-span-4 flex gap-3">
          <div className="flex flex-col gap-2">
            {product.thumbnails.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className="w-16 h-16 bg-white border rounded-lg object-contain cursor-pointer hover:border-purple-500"
              />
            ))}
          </div>

          <div className="flex-1 bg-white rounded-xl p-4 relative">
            {/* BADGES */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                -61%
              </span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                ORIGINAL
              </span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                SUPERNARX
              </span>
            </div>

            <img
              src={product.image}
              alt={product.title}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <h1 className="text-xl font-semibold">{product.title}</h1>

          <div className="text-sm text-gray-500">
            ⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} sharh) ·{" "}
            {product.orders}+ buyurtma
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-semibold text-blue-900">
              NA KOZ'EM MOLOKE
            </h3>
            <p className="text-sm text-blue-700">
              Для комфортного пищеварения
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["DigestX®", "DHA + ARA", "A2 Goat Milk", "Prebiotik + Probiotik"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-3 text-center shadow-sm"
                >
                  <p className="font-medium text-sm">{item}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-xl p-4 space-y-4 sticky top-6">

            {/* TIMER */}
            <div className="bg-purple-100 text-purple-700 text-sm px-3 py-2 rounded-lg flex justify-between">
              <span>Likvidatsiya xitlari</span>
              <span>⏱ 03:36:16</span>
            </div>

            {/* PRICE */}
            <div>
              <div className="text-3xl font-bold text-purple-600">
                {product.price.toLocaleString()} so'm
              </div>
              <div className="text-sm text-gray-400 line-through">
                {product.oldPrice.toLocaleString()} so'm
              </div>
              <div className="mt-2 inline-block bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                ARZON NARX KAFOLATI
              </div>
            </div>

            {/* INSTALLMENTS */}
            <div className="flex gap-2">
              {[24, 12, 6, 3].map((m) => (
                <button
                  key={m}
                  className={`flex-1 py-2 rounded-lg text-sm border ${
                    m === 24
                      ? "bg-yellow-300 border-yellow-400 font-semibold"
                      : "bg-gray-100"
                  }`}
                >
                  {m} oy
                </button>
              ))}
            </div>

            <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg">
              17 707 so'm × 24 oy
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-lg bg-gray-200 hover:bg-gray-300">
                1 klikda xarid qilish
              </button>
              <button className="w-12 flex items-center justify-center rounded-lg border">
                <Heart size={20} />
              </button>
            </div>

            <button className="w-full py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
              Savatchaga qo‘shish
            </button>

            {/* INFO */}
            <div className="text-sm space-y-2">
              <p className="text-green-600">🚚 Ertaga yetkazib beramiz</p>
              <p className="text-gray-600">📦 5 dona xarid qilish mumkin</p>
              <p className="text-gray-600">
                👥 Bu haftada 95 kishi sotib oldi
              </p>
            </div>  

          </div>
        </div>
      </div>
    </div>
  );
}
