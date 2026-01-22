
import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // загружаем продукты
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch('https://6967d2d3bbe157c088b31b02.mockapi.io/api/products');
        const response = await request.json();
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Если выбран товар, показываем ProductPage
  if (selectedProductId) {
    return <ProductPage id={selectedProductId} onBack={() => setSelectedProductId(null)} />;
  }

  // поиск
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // сортировка
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    }
    if (sortType === "rating") {
      return b.rating - a.rating;
    }
    if (sortType === "discount") {
      return b.discount - a.discount;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <div className="text-xl font-bold text-blue-600">Katalog</div>
          <input
            type="text"
            placeholder="Qidiruv..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 text-sm"
          />
          <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">Kirish</button>
          <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">Saralangan</button>
          <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded">Savat</button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 text-sm overflow-x-auto">
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Hafta tovarlari</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Qishki kolleksiya</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Sizning go'zalligingiz</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Xobbi va ijod</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Smartfonlari</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Turizm, baliq ovi</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Elektronika</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Maishiy texnika</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Kiyim</a>
          <a href="#" className="whitespace-nowrap hover:text-blue-600">Yana ▼</a>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-2">YORQIN TA'M</h2>
          <p className="text-xl mb-4">PEPSI BILAN</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30">←</button>
            <button className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/30">→</button>
          </div>
        </div>
      </div>

      {/* Categories Icons */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg text-center hover:shadow-md transition">
            <div className="text-3xl mb-2">👶</div>
            <div className="text-sm">Onalar va bolalar uchun</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center hover:shadow-md transition">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-sm">Arzon narxlar kafolati</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center hover:shadow-md transition">
            <div className="text-3xl mb-2">🏪</div>
            <div className="text-sm">Zamonaviy bozor</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center hover:shadow-md transition">
            <div className="text-3xl mb-2">🎁</div>
            <div className="text-sm">Erkaklarga sovg'alar</div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Mashhur →</h3>
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

        {loading && (
          <div className="text-center py-12 text-gray-500">Загрузка...</div>
        )}

        {!loading && sortedProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">Ничего не найдено</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sortedProducts.map((product) => {
            const finalPrice =
              product.discount > 0
                ? product.price - (product.price * product.discount) / 100
                : product.price;

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className="bg-white rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="mb-3">
                  {product.discount > 0 ? (
                    <div>
                      <div className="text-xl font-bold">{finalPrice.toFixed(0)} so'm</div>
                      <div className="text-sm text-gray-400 line-through">
                        {product.price} so'm
                      </div>
                      <div className="text-sm text-green-600">
                        {((product.price - finalPrice) / 12).toFixed(0)} so'm/oyiga
                      </div>
                    </div>
                  ) : (
                    <div className="text-xl font-bold">{product.price} so'm</div>
                  )}
                </div>
                <div className="text-sm mb-2 line-clamp-2">{product.name}</div>
                <div className="text-sm text-gray-600 mb-3">
                  ⭐ {product.rating} ({product.stock} sharhlar)
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
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
export default Home;