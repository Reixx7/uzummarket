import React, { useState } from 'react';
import { ShoppingCart, Heart, Trash2, Plus, Minus, ArrowLeft, Package, Truck, CreditCard, User, MapPin, Check } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Ботинки женские зимние натуральная замша',
      color: 'черный',
      size: '36',
      price: 1637700,
      discountPrice: 558100,
      quantity: 1,
      image: '/api/placeholder/120/120',
      deliveryDate: '9 февраля',
      inStock: true
    },
    {
      id: 2,
      name: 'Куртка зимняя женская пуховик',
      color: 'синий',
      size: 'M',
      price: 2500000,
      discountPrice: 1750000,
      quantity: 1,
      image: '/api/placeholder/120/120',
      deliveryDate: '12 февраля',
      inStock: true
    }
  ]);

  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const deliveryOptions = [
    { id: 1, name: 'Курьером до двери', time: '1-2 дня', price: 25000, icon: Truck },
    { id: 2, name: 'Пункт выдачи', time: '2-3 дня', price: 15000, icon: Package },
    { id: 3, name: 'Почтой России', time: '5-7 дней', price: 0, icon: MapPin }
  ];

  const paymentOptions = [
    { id: 1, name: 'Картой онлайн', description: 'Visa, MasterCard, Мир' },
    { id: 2, name: 'При получении', description: 'Наличными или картой' },
    { id: 3, name: 'Рассрочка', description: 'На 3-12 месяцев' }
  ];

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    const itemsTotal = cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
    const deliveryPrice = selectedDelivery ? deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0 : 0;
    return itemsTotal + deliveryPrice;
  };

  const getTotalDiscount = () => {
    return cartItems.reduce((sum, item) => sum + (item.price - item.discountPrice) * item.quantity, 0);
  };

  const getItemsTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU') + ' сум';
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-purple-400 blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-[2rem] p-12 shadow-2xl">
              <ShoppingCart className="w-24 h-24 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-xl">
                <div className="w-5 h-5 bg-slate-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
            В корзине пока пусто
          </h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Загляните на главную — собрали там товары,<br />которые могут вам понравиться
          </p>
          
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-105">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Перейти на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 rounded-2xl p-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <ShoppingCart className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent tracking-tight">
                  УзМаркет
                </h1>
                <p className="text-xs text-slate-500 font-semibold">Интернет магазин</p>
              </div>
            </button>
            
            <button className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-all px-4 py-2 rounded-xl hover:bg-purple-50 font-semibold">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Продолжить покупки</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Cart Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 px-8 py-7">
                <h2 className="text-3xl font-black text-white tracking-tight">Корзина</h2>
                <p className="text-purple-100 mt-2 font-medium text-lg">
                  {cartItems.length} {cartItems.length === 1 ? 'товар' : 'товара'}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`${index > 0 ? 'mt-6 pt-6 border-t border-slate-200' : ''} group`}
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-full sm:w-36 h-36 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                          </div>
                          <div className="absolute -top-3 -left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                            СКИДКА
                          </div>
                          {item.inStock && (
                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                              <Check className="w-4 h-4 text-green-500" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center text-sm text-slate-700 bg-slate-100 px-4 py-2 rounded-xl font-semibold">
                            {item.color} • {item.size}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm text-purple-700 bg-purple-100 px-4 py-2 rounded-xl font-semibold">
                            <Truck className="w-4 h-4" />
                            {item.deliveryDate}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-all p-2.5 hover:bg-red-50 rounded-xl font-medium"
                          >
                            <Trash2 className="w-5 h-5" />
                            <span className="text-sm">Удалить</span>
                          </button>
                          <button className="flex items-center gap-2 text-slate-400 hover:text-purple-600 transition-all p-2.5 hover:bg-purple-50 rounded-xl font-medium">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">В избранное</span>
                          </button>
                        </div>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                        <div className="text-left sm:text-right order-2 sm:order-1">
                          <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                            {formatPrice(item.discountPrice * item.quantity)}
                          </div>
                          <div className="text-sm text-slate-400 line-through font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1.5 order-1 sm:order-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="w-10 h-10 rounded-lg bg-white hover:bg-purple-600 hover:text-white text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm flex items-center justify-center font-bold"
                          >
                            <Minus className="w-4 h-4" strokeWidth={3} />
                          </button>
                          <span className="w-12 text-center font-black text-xl text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-lg bg-white hover:bg-purple-600 hover:text-white text-slate-600 transition-all shadow-sm flex items-center justify-center font-bold"
                          >
                            <Plus className="w-4 h-4" strokeWidth={3} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 rounded-xl p-3">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-800">Способ доставки</h3>
              </div>
              
              <div className="space-y-3">
                {deliveryOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedDelivery(option.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                        selectedDelivery === option.id
                          ? 'border-purple-600 bg-purple-50 shadow-lg'
                          : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${selectedDelivery === option.id ? 'bg-purple-600' : 'bg-slate-100'}`}>
                          <Icon className={`w-5 h-5 ${selectedDelivery === option.id ? 'text-white' : 'text-slate-600'}`} />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-slate-800">{option.name}</div>
                          <div className="text-sm text-slate-500">{option.time}</div>
                        </div>
                      </div>
                      <div className="font-black text-lg text-purple-600">
                        {option.price === 0 ? 'Бесплатно' : formatPrice(option.price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-100 rounded-xl p-3">
                  <CreditCard className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-800">Способ оплаты</h3>
              </div>
              
              <div className="space-y-3">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPayment(option.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                      selectedPayment === option.id
                        ? 'border-pink-600 bg-pink-50 shadow-lg'
                        : 'border-slate-200 hover:border-pink-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-bold text-slate-800">{option.name}</div>
                      <div className="text-sm text-slate-500">{option.description}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === option.id ? 'border-pink-600 bg-pink-600' : 'border-slate-300'
                    }`}>
                      {selectedPayment === option.id && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* User Data */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 rounded-xl p-3">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-800">Мои данные</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-dashed border-blue-200">
                <p className="text-slate-700 mb-4">
                  Чтобы оформить заказ, необходимо войти в систему или создать новый аккаунт
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex-1 min-w-[200px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                    Войти
                  </button>
                  <button className="flex-1 min-w-[200px] bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3.5 rounded-xl font-bold transition-all">
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-8 border border-slate-100">
                <h3 className="text-2xl font-black text-slate-800 mb-6">Итого</h3>
                
                {!selectedDelivery && (
                  <div className="mb-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                    <p className="text-sm text-amber-800 font-semibold">
                      Выберите способ доставки
                    </p>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="font-medium">Товары ({cartItems.length} шт.)</span>
                    <span className="font-bold text-slate-800">{formatPrice(getItemsTotal())}</span>
                  </div>
                  
                  {getTotalDiscount() > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="font-medium">Ваша скидка</span>
                      <span className="font-bold">−{formatPrice(getTotalDiscount())}</span>
                    </div>
                  )}
                  
                  {selectedDelivery && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span className="font-medium">Доставка</span>
                      <span className="font-bold text-slate-800">
                        {deliveryOptions.find(d => d.id === selectedDelivery)?.price === 0 
                          ? 'Бесплатно' 
                          : formatPrice(deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t-2 border-slate-200 pt-6 mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-slate-600 text-lg font-semibold">К оплате</span>
                    <div className="text-right">
                      <div className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {formatPrice(getTotalPrice())}
                      </div>
                      {getTotalDiscount() > 0 && (
                        <div className="text-sm text-green-600 font-bold mt-1">
                          Экономия {formatPrice(getTotalDiscount())}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button 
                  disabled={!selectedDelivery || !selectedPayment || !agreedToTerms}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:via-pink-700 hover:to-rose-600 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 disabled:shadow-none transition-all duration-300 transform hover:scale-105 disabled:scale-100 mb-5"
                >
                  Оформить заказ
                </button>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded-md accent-purple-600 cursor-pointer" 
                  />
                  <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    Соглашаюсь с{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                      правилами пользования торговой площадкой
                    </a>{' '}
                    и{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                      возврата
                    </a>
                  </span>
                </label>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-6 border border-slate-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-xl p-2">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-semibold">Гарантия качества</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-xl p-2">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-semibold">Быстрая доставка</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-xl p-2">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-semibold">Безопасная оплата</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;