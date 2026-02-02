import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Truck, Shield, CreditCard, Package, Gift } from 'lucide-react';

const WildberriesRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Простая проверка заполнения полей
    if (formData.fullName && formData.email && formData.phone && formData.password) {
      setIsSubmitted(true);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Хедер */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-3xl font-bold text-purple-600">
              Wildberries
            </a>
            <a href="/login" className="text-gray-700 hover:text-purple-600">
              Войти
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Левая колонка - форма */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {isSubmitted ? 'Регистрация завершена!' : 'Регистрация'}
                </h1>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ФИО */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        ФИО
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Иванов Иван Иванович"
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@mail.ru"
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Телефон */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Телефон
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 999 123 45 67"
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Пароль */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Пароль
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Введите пароль"
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Согласие */}
                    <div className="pt-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agree"
                          className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          required
                        />
                        <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
                          Я принимаю условия{' '}
                          <a href="/terms" className="text-purple-600 hover:text-purple-700">
                            пользовательского соглашения
                          </a>
                        </label>
                      </div>
                    </div>

                    {/* Кнопка */}
                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 mt-6"
                    >
                      Зарегистрироваться
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-gray-600 text-sm">
                        Уже есть аккаунт?{' '}
                        <a href="/login" className="text-purple-600 hover:text-purple-700">
                          Войти
                        </a>
                      </p>
                    </div>
                  </form>
                ) : (
                  // Сообщение об успешной регистрации
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl text-green-600">✓</div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Регистрация успешно завершена!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Добро пожаловать в Wildberries! На ваш email отправлено письмо с подтверждением.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="/"
                        className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                      >
                        Начать покупки
                      </a>
                      <a
                        href="/login"
                        className="block w-full bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition duration-300"
                      >
                        Войти в аккаунт
                      </a>
                    </div>
                  </div>
                )}

                {/* Простая информация */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Shield size={16} className="mr-2 text-purple-500" />
                    <span>Ваши данные защищены</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - преимущества */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white h-full">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Преимущества Wildberries
                </h2>
                
                {/* Список преимуществ */}
                <div className="space-y-6 mb-8">
                {/* Правая колонка - преимущества */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 flex flex-col justify-between text-white flex-1">
                    <div>
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Преимущества Wildberries
                    </h2>

                    {/* Список преимуществ */}
                    <div className="space-y-6 mb-8">
                        <div className="flex items-start bg-white/10 rounded-lg p-5">
                        <div className="bg-white/20 p-4 rounded-lg mr-5">
                            <Truck size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Бесплатная доставка</h3>
                            <p className="text-white/80 text-sm">При заказе от 1999 ₽</p>
                        </div>
                        </div>

                        <div className="flex items-start bg-white/10 rounded-lg p-5">
                        <div className="bg-white/20 p-4 rounded-lg mr-5">
                            <Shield size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Гарантия возврата</h3>
                            <p className="text-white/80 text-sm">30 дней на возврат</p>
                        </div>
                        </div>

                        <div className="flex items-start bg-white/10 rounded-lg p-5">
                        <div className="bg-white/20 p-4 rounded-lg mr-5">
                            <CreditCard size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Удобная оплата</h3>
                            <p className="text-white/80 text-sm">Картой или наличными</p>
                        </div>
                        </div>

                        <div className="flex items-start bg-white/10 rounded-lg p-5">
                        <div className="bg-white/20 p-4 rounded-lg mr-5">
                            <Package size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Миллионы товаров</h3>
                            <p className="text-white/80 text-sm">Одежда, техника, косметика</p>
                        </div>
                        </div>

                        <div className="flex items-start bg-white/10 rounded-lg p-5">
                        <div className="bg-white/20 p-4 rounded-lg mr-5">
                            <Gift size={28} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Скидки и акции</h3>
                            <p className="text-white/80 text-sm">Специальные предложения</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Призыв к действию */}
                    <div className="mt-6 text-center">
                    <p className="text-lg font-medium mb-4">
                        Присоединяйтесь к миллионам покупателей!
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-white/80">
                        <div className="w-10 h-10 rounded-full bg-white/20"></div>
                        <div className="w-10 h-10 rounded-full bg-white/20"></div>
                        <div className="w-10 h-10 rounded-full bg-white/20"></div>
                        <span className="text-sm">и 10M+ других покупателей</span>
                    </div>
                    </div>
                </div>

                </div>

                {/* Статистика */}
                <div className="grid grid-cols-2 gap-4 text-center mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">20M+</div>
                    <div className="text-sm text-white/80">Товаров</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm text-white/80">Довольных клиентов</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-white/80">Брендов</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">15K+</div>
                    <div className="text-sm text-white/80">Пунктов выдачи</div>
                  </div>
                </div>

                {/* Дополнительные преимущества */}
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4">Зарегистрируйтесь и получите:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Историю заказов</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Избранные товары</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Персональные скидки</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Быстрые повторные заказы</span>
                    </li>
                  </ul>
                </div>

                {/* Призыв к действию */}
                <div className="mt-8 text-center">
                  <p className="text-lg font-medium mb-4">
                    Присоединяйтесь к миллионам покупателей!
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-white/80">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <span className="text-sm">и 10M+ других покупателей</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Простой футер */}
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

export default WildberriesRegister;