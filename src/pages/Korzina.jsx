import React from 'react';
import korzina from '../assets/cart.webp';

const Korzina = ({ onClose = () => {} }) => {
  return (
    <div className="min-h-screen bg-[#f6f6f9]">
      {/* Контент */}
      <div className="max-w-[1200px] mx-auto px-4 pt-10">
        <div className="bg-white rounded-2xl py-20 flex flex-col items-center text-center">
          
          {/* Иконка */}
          <div className="mb-6">
            <img
              src={korzina}
              alt="Пустая корзина"
              className="w-28 h-28 opacity-80"
            />
          </div>

          {/* Заголовок */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            В корзине пока пусто
          </h2>

          {/* Описание */}
          <p className="text-gray-500 text-sm max-w-md mb-6">
            Загляните на главную — собрали там товары, которые могут вам понравиться
          </p>

          {/* Кнопка */}
          <button
            onClick={onClose}
            className="
              bg-[#a73afd]
              hover:bg-[#9226e6]
              transition-colors
              text-white
              text-sm
              font-medium
              px-8
              py-3
              rounded-xl
            "
          >
            Перейти на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default Korzina;
