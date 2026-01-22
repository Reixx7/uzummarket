// src/pages/ProductPage.jsx
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductPage({ id, onBack }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const request = await fetch(`https://6967d2d3bbe157c088b31b02.mockapi.io/api/products/${id}`);
        const response = await request.json();
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-500">Загрузка...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-xl text-gray-500 mb-4">Товар не найден</div>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Назад к каталогу
          </button>
        </div>
      </div>
    );
  }

  const finalPrice = product.discount > 0
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const oldPrice = product.discount > 0 ? product.price : product.price * 1.6;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            ← Ortga qaytish
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-12 lg:col-span-4 flex gap-3">
            <div className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={product.image}
                  alt="thumb"
                  className="w-16 h-16 bg-white border rounded-lg object-contain cursor-pointer hover:border-purple-500"
                />
              ))}
            </div>

            <div className="flex-1 bg-white rounded-xl p-4 relative">
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {product.discount > 0 && (
                  <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  ORIGINAL
                </span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  SUPERNARX
                </span>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-contain"
              />
            </div>
          </div>

          {/* CENTER */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <h1 className="text-xl font-semibold">{product.name}</h1>

            <div className="text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ {product.rating} ({product.stock} sharh) · {product.stock * 2}+ buyurtma
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900">
                PREMIUM MAHSULOT
              </h3>
              <p className="text-sm text-blue-700">
                Yuqori sifat va ishonchlilik
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Yuqori sifat", "Tez yetkazib berish", "Kafolat", "Arzon narx"].map(
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

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold mb-2">Ta'rif</h3>
              <p className="text-sm text-gray-600">
                {product.name} - yuqori sifatli mahsulot. Bu mahsulot sizning ehtiyojlaringizni 
                to'liq qondiradi va uzoq muddat xizmat qiladi.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-xl p-4 space-y-4 sticky top-6">

              <div className="bg-purple-100 text-purple-700 text-sm px-3 py-2 rounded-lg flex justify-between">
                <span>Likvidatsiya xitlari</span>
                <span>⏱ 03:36:16</span>
              </div>

              <div>
                <div className="text-3xl font-bold text-purple-600">
                  {finalPrice.toLocaleString()} so'm
                </div>
                {product.discount > 0 && (
                  <div className="text-sm text-gray-400 line-through">
                    {oldPrice.toLocaleString()} so'm
                  </div>
                )}
                <div className="mt-2 inline-block bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                  ARZON NARX KAFOLATI
                </div>
              </div>

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
                {(finalPrice / 24).toLocaleString()} so'm × 24 oy
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-lg bg-gray-200 hover:bg-gray-300">
                  1 klikda xarid qilish
                </button>
                <button className="w-12 flex items-center justify-center rounded-lg border hover:bg-gray-50">
                  <Heart size={20} />
                </button>
              </div>

              <button className="w-full py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                Savatchaga qo'shish
              </button>

              <div className="text-sm space-y-2">
                <p className="text-green-600">🚚 Ertaga yetkazib beramiz</p>
                <p className="text-gray-600">📦 5 dona xarid qilish mumkin</p>
                <p className="text-gray-600">
                  👥 Bu haftada {Math.floor(Math.random() * 100 + 50)} kishi sotib oldi
                </p>
              </div>  

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}