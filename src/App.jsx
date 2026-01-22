import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          Uzum Market
        </h1>

        {/* Product cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {/* CARD */}
          <Link
            to="/product/1"
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src="/images/kabrita-main.png"
              alt="Kabrita"
              className="w-full h-40 object-contain"
            />

            <p className="mt-3 text-sm font-medium line-clamp-2">
              Qulay hazm qilish uchun sut aralashmasi Kabrita 2 Gold, 400 gr
            </p>

            <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              ⭐ 5.0 <span>(230)</span>
            </div>

            <p className="mt-2 text-purple-600 font-bold">
              247 490 so'm
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}
