import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = useSelector(state => {
    return state.cart.count;
  });

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
  }, [isOpen]);
  return (
    <>
      <nav className="hidden md:flex md:fixed top-0 w-full h-[70px] bg-white/70 backdrop-blur-md border-b border-black/5 flex items-end gap-8 pb-4 px-6 md:px-12 z-40">
        <NavLink to="/">
          <h1 className="text-xl font-light tracking-widest text-[#5d6a80]">LIVIN</h1>
        </NavLink>
        <div className="grow flex justify-between items-end">
          <div className="flex gap-5">
            <NavLink to="/" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">首頁</div>
            </NavLink>
            <NavLink to="/products" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">產品列表</div>
            </NavLink>
            <NavLink to="/faq" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">常見問題</div>
            </NavLink>
            <NavLink to="/about" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">關於我們</div>
            </NavLink>
            <NavLink to="/admin" className="hover:opacity-80 transition-opacity mx-5">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">Admin</div>
            </NavLink>
          </div>
          <NavLink
            to="/cart"
            className="relative cursor-pointer w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm hover:bg-[#5d6a80] hover:text-white transition-all duration-300"
          >
            <i className="fa-solid fa-cart-shopping text-sm"></i>
            <span className="absolute -top-1 -right-1 bg-[#5d6a80] text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
              {count}
            </span>
          </NavLink>
        </div>
      </nav>
      <nav className="fixed md:hidden top-0 w-full h-[70px] bg-white/70 backdrop-blur-md border-b border-black/5 flex justify-between items-center px-6 z-40">
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <i className="fa-solid fa-bars text-[#5d6a80] px-2"></i>
        </div>
        <NavLink to="/">
          <h1 className="text-xl font-light tracking-widest text-[#5d6a80]">LIVIN</h1>
        </NavLink>
        <NavLink
          to="/cart"
          className="relative cursor-pointer w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm hover:bg-[#5d6a80] hover:text-white transition-all duration-300"
        >
          <i className="fa-solid fa-cart-shopping text-sm"></i>
          <span className="absolute -top-1 -right-1 bg-[#5d6a80] text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
            {count}
          </span>
        </NavLink>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-[#ccd4e3] z-50 flex flex-col p-6 menu-open">
          <div className="flex justify-start border-b border-b-[#98a4b8] pb-3">
            <button
              className="text-2xl text-[#5d6a80] hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-5 mt-4 text-lg text-light text-[#5d6a80]">
            <NavLink
              to="/"
              className="hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              首頁
            </NavLink>
            <NavLink
              to="/about"
              className="hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              關於我們
            </NavLink>
            <NavLink
              to="/products"
              className="hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              產品列表
            </NavLink>
            <NavLink
              to="/faq"
              className="hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              常見問題
            </NavLink>
            <NavLink
              to="/privacy"
              className="hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              隱私權政策
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
