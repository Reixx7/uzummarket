import React, { useState, useEffect } from "react";

const API_URL = "https://6967d2d3bbe157c088b31b02.mockapi.io/api/products";

const Ezo = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  // загрузка продуктов через fetch + user params
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchText) {
      params.append("name", searchText);
    }

    if (sortType === "price") {
      params.append("sortBy", "price");
      params.append("order", "asc");
    }

    if (sortType === "rating") {
      params.append("sortBy", "rating");
      params.append("order", "desc");
    }

    if (sortType === "discount") {
      params.append("sortBy", "discount");
      params.append("order", "desc");
    }

    fetch(`${API_URL}?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [searchText, sortType]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://uzum.com/images/services/market-horizontal-logo.png"
                alt=""
                className="w-[120px]"
              />
            </div>

            <button className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm">
              Katalog
            </button>

            <input
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 text-sm"
            />

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm">Kirish</button>
              <button className="flex items-center gap-2 text-sm">Saralangan</button>
              <button className="flex items-center gap-2 text-sm">Savat</button>
            </div>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Mashhur →</h2>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm"
          >
            <option value="">Сортировка</option>
            <option value="price">По цене</option>
            <option value="rating">По рейтингу</option>
            <option value="discount">По скидке</option>
          </select>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {products.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              Ничего не найдено
            </p>
          )}

          {products.map((product) => {
            const finalPrice =
              product.discount > 0
                ? product.price - (product.price * product.discount) / 100
                : product.price;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />

                <div className="mb-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-xl font-bold">
                        {finalPrice.toFixed(0)} so'm
                      </span>
                      <div className="text-sm text-gray-400 line-through">
                      {product.price} so'm
                      </div>
                    </>
                  ) : (
                    <span className="text-xl font-bold">
                      {product.price} so'm
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                  {product.name}
                </p>

                <p className="text-xs text-gray-500 mb-3">
                  ⭐ {product.rating} ({product.stock} sharhlar)
                </p>

                <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700">
                  🛒 Ertaga
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ezo;