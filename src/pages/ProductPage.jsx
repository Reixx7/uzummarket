import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MessageSquare, ChevronLeft, ShoppingCart, Star, Camera } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [show24, setShow24] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show3, setShow3] = useState(false);
  const getProduct = async () => {
    try {
      setLoading(true);
      // Fetch ALL products since /products/:id doesn't work
      const request = await fetch('https://6967d2d3bbe157c088b31b02.mockapi.io/api/products');
      const response = await request.json();
      
      // Find the specific product by ID
      const foundProduct = response.find(item => item.id === parseInt(id));
      console.log('Found product:', foundProduct);
      setProduct(foundProduct);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/" className="text-purple-600 underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  // Create array of images (using the same image multiple times as placeholder)
  const images = [product.image, product.image, product.image, product.image];

  const relatedProducts = [
    { image: product.image, label: '' },
    { image: product.image, label: '' },
    { image: product.image, label: '' },
    { image: product.image, label: 'КИБЕРНЕНЕДЕЛИ', color: 'bg-pink-600' },
    { image: product.image, label: 'КИБЕРНЕНЕДЕЛИ', color: 'bg-pink-300' },
    { image: product.image, label: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <span>🏙️ Ташкент</span>
              <span>Бренды</span>
              <span>Для бизнеса ∨</span>
              <span>Работа в WB</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🇺🇿 UZS</span>
            </div>
          </div>
          
          {/* Main header */}
          <div className="flex items-center gap-4 py-4">
            <button className="text-2xl">☰</button>
            <h1 className="text-3xl font-bold">wildberries</h1>
            
            <div className="flex-1 mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Найти на Wildberries"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400"
                />
                <Camera className="absolute right-3 top-3 text-gray-400" size={24} />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl">📍</div>
                <div className="text-xs">Адреса</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">👤</div>
                <div className="text-xs">Войти</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">🛒</div>
                <div className="text-xs">Корзина</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-pink-600 flex items-center gap-1">
            <ChevronLeft size={16} />
            Главная
          </Link>
          <span>/</span>
          <span>Автотовары</span>
          <span>/</span>
          <span>Автокосметика и автохимия</span>
          <span>/</span>
          <span>Прочее: автохимия</span>
          <span>/</span>
          <span>{product.brand}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          {/* Left - Images */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg p-4 relative">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}
              
              {product.isOriginal && (
                <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-2 py-1 rounded z-10">
                  ORIGINAL
                </span>
              )}
              
              {product.isSupernarx && (
                <span className="absolute top-12 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded z-10">
                  SUPERNARX
                </span>
              )}
              
              {/* Thumbnails */}
              <div className="flex gap-2 mb-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === idx ? 'border-pink-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg p-6">
              {/* Icons */}
              <div className="flex justify-end gap-3 mb-4">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Heart size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Share2 size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <MessageSquare size={20} />
                </button>
              </div>

              {/* Brand and Title */}
              <div className="mb-2">
                <span className="text-sm text-gray-600">{product.brand}</span>
                {product.isOriginal && (
                  <span className="ml-2 text-blue-600">⭐ Оригинал</span>
                )}
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>{product.rating} · {product.reviews?.toLocaleString()} оценок</span>
                </div>
                <span className="text-gray-600">❓ 13 вопросов</span>
              </div>

              {/* Related Products */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">1900 г</div>
                <div className="flex gap-2 overflow-x-auto">
                  {relatedProducts.map((prod, idx) => (
                    <div key={idx} className="relative flex-shrink-0">
                      <img
                        src={prod.image}
                        alt=""
                        className="w-16 h-16 rounded border border-gray-200 object-cover"
                      />
                      {prod.label && (
                        <div className={`absolute -top-1 -right-1 ${prod.color} text-white text-xs px-1 rounded`}>
                          {prod.label}
                        </div>
                      )}
                    </div>
                  ))}
                  <button className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    →
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Артикул</span>
                  <span>{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Бренд</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Основа</span>
                  <span>полиэфир</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Страна производства</span>
                  <span>Иран</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Комплектация</span>
                  <span>Шпатлевка с отвердителем</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Вес товара без упаковки (г)</span>
                  <span>1900 г</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Вес товара с упаковкой (г)</span>
                  <span>2000 г</span>
                </div>
              </div>

              <button className="text-pink-600 text-sm mb-6">
                Характеристики и описание
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <span>🔄</span>
                <span>14 дней на возврат</span>
              </div>
            </div>

            {/* Price and Buy Section */}
            <div className="bg-pink-50 rounded-lg p-6 mt-4">
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-pink-600">
                    {product.price?.toLocaleString()} so'm
                  </span>
                  {product.oldPrice && product.oldPrice > product.price && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice?.toLocaleString()} so'm
                    </span>
                  )}
                </div>
                {product.oldPrice && product.oldPrice > product.price && (
                  <div className="mt-1 text-sm text-green-600 font-semibold">
                    Скидка {((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0)}%
                  </div>
                )}
              </div>

              {/* INSTALLMENTS */}
          <div className="flex gap-2 mb-4"  >
             

      <button 
        onClick={ () => setShow24(prev => !prev) }
        className="flex-1 py-2 rounded-lg text-sm border bg-yellow-300 border-yellow-400 font-semibold">
        24 месяца
      </button>
      <button
        onClick={() => setShow12(prev => !prev)}
        className="flex-1 py-2 rounded-lg text-sm border bg-yellow-300 border-yellow-400 font-semibold">
        12 месяцев
      </button>
       <button
        onClick={() => setShow6(prev => !prev)}
        className="flex-1 py-2 rounded-lg text-sm border bg-yellow-300 border-yellow-400 font-semibold">
        6 месяцев
      </button>
       <button
        onClick={() => setShow3(prev => !prev)}
        className="flex-1 py-2 rounded-lg text-sm border bg-yellow-300 border-yellow-400 font-semibold">
        3 месяца
      </button>
                  
                  
              </div>
          
            {show24 && (
        <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg mb-4">
          {((product.price / 24).toFixed(0)).toLocaleString()} сум × 24 месяца
        </div>
      )}
     { show12 && (
        <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg mb-4">
          {((product.price / 12).toFixed(0)).toLocaleString()} сум × 12 месяцев
        </div>
      )}
       { show6 && (
        <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg mb-4">
          {((product.price / 6).toFixed(0)).toLocaleString()} сум × 6 месяцев
        </div>
      )}
       { show3 && (
        <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg mb-4">
          {((product.price / 3).toFixed(0)).toLocaleString()} сум × 3 месяца
        </div>
      )}
      

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-lg mb-3 transition">
                Добавить в корзину
              </button>

              

              <div className="flex items-center gap-2 text-sm mb-2 text-green-600">
                <span>🚚 Ertaga yetkazib beramiz</span>
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span>📦 Zaxirada mavjud</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>⭐ {product.reviews?.toLocaleString()} ta sharh</span>
              </div>

              {/* Other Offers */}
              <div className="mt-6 pt-6 border-t border-pink-200">
                <h3 className="font-semibold mb-4">Ещё предложения от {(product.price * 0.9).toFixed(0).toLocaleString()} so'm</h3>
                
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt="" className="w-16 h-16 rounded object-cover" />
                    <div>
                      <div className="font-semibold">{(product.price * 0.9).toFixed(0).toLocaleString()} so'm</div>
                      <div className="text-sm text-gray-600">🏪 Нет оценок 10 февраля</div>
                      <div className="text-sm text-gray-600">🏢 Lis shop</div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <ShoppingCart size={20} className="text-purple-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}