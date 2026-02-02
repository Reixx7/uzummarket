import React from 'react';
import { Search, User, ShoppingBag, MapPin, ChevronDown, Home, ShoppingCart, Package, Truck, Shield, CreditCard, Heart } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Хедер */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Верхняя полоса */}
        <div className="bg-purple-600 text-white text-sm py-1 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="hover:text-gray-200 flex items-center">
                <MapPin size={16} className="mr-1" />
                Москва
              </a>
              <span>|</span>
              <a href="/" className="hover:text-gray-200">Пункты выдачи</a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="hover:text-gray-200">Работа в Wildberries</a>
              <a href="/" className="hover:text-gray-200">Бренды</a>
              <a href="/" className="hover:text-gray-200">Скидки</a>
              <a href="/" className="hover:text-gray-200 flex items-center">
                Русский <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Основной хедер */}
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center">
              <a href="/" className="text-3xl font-bold text-purple-600 mr-8">
                Wildberries
              </a>
              
              {/* Категории */}
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Женщинам</a>
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Мужчинам</a>
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Детям</a>
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Дом</a>
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Красота</a>
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Акции</a>
              </nav>
            </div>

            {/* Действия пользователя */}
            <div className="flex items-center space-x-4">
              {/* Иконки действий */}
              <div className="flex items-center space-x-4">
                <a href="/" className="hidden md:block text-gray-700 hover:text-purple-600">
                  <User size={24} />
                </a>
                <a href="/" className="relative text-gray-700 hover:text-purple-600">
                  <Heart size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Основное содержимое - страница 404 */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Левая часть - иллюстрация и текст */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="relative mb-8">
                <div className="text-9xl font-bold text-purple-600 opacity-20">404</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-6xl font-bold text-gray-800">404</div>
                  <div className="text-2xl font-semibold text-gray-700 mt-2">Страница не найдена</div>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ой! Кажется, мы потерялись
              </h1>
              
              <p className="text-gray-600 mb-6 text-lg">
                Страница, которую вы ищете, не существует или была перемещена. 
                Но не волнуйтесь, у нас есть много других интересных товаров!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <span>Проверьте правильность введенного адреса</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <span>Воспользуйтесь поиском или перейдите на главную страницу</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <span>Обратитесь в поддержку, если проблема повторяется</span>
                </div>
              </div>
            </div>
            
            {/* Правая часть - иллюстрация */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
                      <Package size={64} className="text-purple-600 mb-2" />
                      <span className="text-lg font-bold text-gray-800">404</span>
                      <span className="text-sm text-gray-600">Not Found</span>
                    </div>
                  </div>
                </div>
                
                {/* Декоративные элементы */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Truck size={32} className="text-yellow-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CreditCard size={20} className="text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Колонка 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Wildberries</h3>
              <p className="text-gray-400 mb-4">
                Крупнейший онлайн-ритейлер в России. Миллионы товаров по выгодным ценам.
              </p>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-400 hover:text-white text-sm font-medium">
                  Instagram
                </a>
                <a href="/" className="text-gray-400 hover:text-white text-sm font-medium">
                  VK
                </a>
                <a href="/" className="text-gray-400 hover:text-white text-sm font-medium">
                  YouTube
                </a>
              </div>
            </div>
            
            {/* Колонка 2 */}
            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Как сделать заказ</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Способы оплаты</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Доставка</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Возврат товара</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Возврат денег</a></li>
              </ul>
            </div>
            
            {/* Колонка 3 */}
            <div>
              <h4 className="font-bold mb-4">Партнерам</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Продавать на Wildberries</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Курьерская служба</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Вендорский портал</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white">Франшиза пунктов выдачи</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Wildberries. Все права защищены.</p>
            <p className="mt-2">ОГРН 1137746645830, 121205, г. Москва, вн.тер.г. Муниципальный Округ Можайский, ул. Строителей, д. 6, пом. 3/1</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;