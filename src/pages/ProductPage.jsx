import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const getProduct = async () => {
    try {
      setLoading(true)
      // Fetch ALL products since /products/:id doesn't work
      const request = await fetch('https://6967d2d3bbe157c088b31b02.mockapi.io/api/products')
      const response = await request.json()
      
      // Find the specific product by ID
      const foundProduct = response.find(item => item.id === parseInt(id))
      console.log('Found product:', foundProduct)
      setProduct(foundProduct)
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [id])

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/" className="text-purple-600 underline">
            Go back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back button */}
        <Link to="/" className="inline-block mb-4 text-purple-600 hover:underline">
          ← Back to products
        </Link>

        <div className="grid grid-cols-12 gap-6">

          {/* LEFT - Image */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl p-8 relative">
              {product.isOriginal && (
                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  ORIGINAL
                </span>
              )}
              {product.isSupernarx && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  SUPERNARX
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* CENTER - Details */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <h1 className="text-2xl font-semibold">{product.name}</h1>

            <div className="text-sm text-gray-500">
              ⭐ {product.rating} ({product.reviews?.toLocaleString()} sharh)
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-900">{product.brand}</h3>
              <p className="text-sm text-purple-700">Sifatli mahsulot</p>
            </div>

            {product.badge && (
              <div className="inline-block bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                {product.badge}
              </div>
            )}
          </div>

          {/* RIGHT - Purchase */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-xl p-4 space-y-4 sticky top-6">

              {/* PRICE */}
              <div>
                <div className="text-3xl font-bold text-purple-600">
                  {product.price?.toLocaleString()} so'm
                </div>
                {product.oldPrice && product.oldPrice > product.price && (
                  <>
                    <div className="text-sm text-gray-400 line-through">
                      {product.oldPrice?.toLocaleString()} so'm
                    </div>
                    <div className="mt-1 text-sm text-green-600 font-semibold">
                      Save {((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0)}%
                    </div>
                  </>
                )}
              </div>

              {/* INSTALLMENTS */}
              <div className="flex gap-2">
                {[24, 12, 6, 3].map((m) => (
                  <button
                    key={m}
                    className={`flex-1 py-2 rounded-lg text-sm border ${
                      m === 24 ? "bg-yellow-300 border-yellow-400 font-semibold" : "bg-gray-100"
                    }`}
                  >
                    {m} oy
                  </button>
                ))}
              </div>

              <div className="bg-purple-50 text-purple-700 text-sm p-3 rounded-lg">
                {(product.price / 24).toFixed(0).toLocaleString()} so'm × 24 oy
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-lg bg-gray-200 hover:bg-gray-300">
                  1 klikda xarid
                </button>
                <button className="w-12 flex items-center justify-center rounded-lg border hover:border-purple-500">
                  
                </button>
              </div>

              <button className="w-full py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                Savatchaga qo'shish
              </button>

              {/* INFO */}
              <div className="text-sm space-y-2 pt-4 border-t">
                <p className="text-green-600">🚚 Ertaga yetkazib beramiz</p>
                <p className="text-gray-600">📦 Zaxirada mavjud</p>
                <p className="text-gray-600">⭐ {product.reviews?.toLocaleString()} ta sharh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}