import React from 'react';
import { X, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';

const Korzina = ({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  totalPrice,
  onClose 
}) => {
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-purple-600 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </button>
          <h1 className="text-2xl font-bold">Корзина</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold mb-2">Корзина пуста</h2>
          <p className="text-gray-600 mb-6">Добавьте товары из каталога</p>
          <button
            onClick={onClose}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Перейти к покупкам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-purple-600 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </button>
          <h1 className="text-2xl font-bold">Корзина</h1>
          <span className="ml-3 text-gray-500">({cartItems.length} товаров)</span>
        </div>
        
        <button
          onClick={onClearCart}
          className="text-red-500 hover:text-red-700 flex items-center"
        >
          <Trash2 className="w-5 h-5 mr-2" />
          Очистить корзину
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Список товаров */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 border-b last:border-b-0">
                <div className="flex items-start">
                  {/* Изображение товара */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mr-4">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400">Нет фото</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Информация о товаре */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                        <p className="text-gray-400 text-sm">Артикул: {item.id}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-2">{item.price.toLocaleString()} ₽</div>
                        <div className="text-sm text-gray-500 line-through">
                          {item.oldPrice && `${item.oldPrice.toLocaleString()} ₽`}
                        </div>
                      </div>
                    </div>
                    
                    {/* Управление количеством */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center"
                      >
                        <Trash2 className="w-5 h-5 mr-2" />
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Итого */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Ваш заказ</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Доставка</span>
                <span className="text-green-600">Бесплатно</span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого</span>
                  <span>{totalPrice.toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-4">
              Перейти к оформлению
            </button>
            
            <div className="text-sm text-gray-500 text-center">
              Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Korzina;