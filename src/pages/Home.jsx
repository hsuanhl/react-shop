import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateCount } from '../slices/cartSlice';
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const bannerSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2106',
      title: '把生活，過成喜歡的樣子',
      subtitle: 'New Collection 2026',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070',
      title: '極簡，是心靈的留白',
      subtitle: 'Minimalist Philosophy',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070',
      title: '觸碰自然的溫度',
      subtitle: 'Natural Materials',
    },
  ];

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/cart`);
      const carts = response.data?.data?.carts ?? [];
      const totalQty = carts.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      dispatch(updateCount(totalQty));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/products`);
        setProducts(response.data.products.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchCart();
  }, []);

  return (
    <>
      <header className="relative h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          speed={2000} // 切換速度（毫秒）
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {bannerSlides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 背景圖片：加入初始縮放動畫 */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover brightness-[0.85] animate-subtle-zoom"
                    alt={slide.title}
                  />
                </div>

                {/* 文案內容 */}
                <div className="relative text-center text-white px-4">
                  <span className="uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block animate-fadeInUp">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extralight mb-12 tracking-tight leading-tight animate-fadeInUp delay-300">
                    {slide.title}
                  </h1>
                  <div className="animate-fadeInUp delay-500">
                    <NavLink
                      to="/products"
                      className="inline-block px-10 py-4 border border-gray-100 text-gray-100 hover:bg-white hover:text-slate-900 transition-all duration-500 rounded-full"
                    >
                      開始探索
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>

      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-3xl font-light text-[#5d6a80]">精選單品</h2>
          <NavLink to="/products" className="text-[#7c869c] hover:underline transition-all">
            查看全部 →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map(product => {
            return <Card product={product} key={product.id} />;
          })}
        </div>
      </section>

      <section className="py-24 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <span className="text-[#d2b48c] text-sm tracking-widest uppercase">Journal</span>
            <h2 className="text-2xl font-light mt-2 tracking-widest text-slate-800">生活誌</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <p className="text-slate-500 italic leading-loose">
                「自從換了 Livin
                的原木餐桌，全家人待在餐廳的時間變長了。那種觸手可及的溫潤感，是任何合成材質都無法取代的。」
              </p>
              <p className="text-slate-800 text-sm font-medium">— 台北，陳小姐</p>
            </div>
            <div className="space-y-4">
              <p className="text-slate-500 italic leading-loose">
                「這是我看過最安靜的電商網站，不僅商品質感好，連挑選的過程都像是在逛藝廊，非常推薦給追求生活細節的朋友。」
              </p>
              <p className="text-slate-800 text-sm font-medium">— 台中，張先生</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000"
              className="w-full h-full object-cover"
              alt="Showroom"
            />
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="text-[#d2b48c] text-xs tracking-[0.3em] uppercase">Showroom</span>
              <h2 className="text-3xl font-extralight text-slate-800 tracking-widest">實體概念店</h2>
            </div>
            <p className="text-slate-500 leading-relaxed font-light">
              我們在台北民生社區打造了一個靜謐的空間，您可以親自觸摸木材的紋理、感受沙發的支撐感。在這裡，時間會慢下來。
            </p>
            <div className="space-y-2 text-sm text-slate-400 font-light">
              <p>台北市松山區民生東路 ○○ 號</p>
              <p>週二至週日 11:00 — 20:00</p>
            </div>
            <p className="pb-1 text-sm text-slate-500">歡迎來電預約: 02-2345-6789</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
