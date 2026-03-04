import { useState } from 'react';

const FaqPage = () => {
  const [openIds, setOpenIds] = useState([]);
  const faqs = [
    {
      id: 1,
      category: '購物與配送',
      q: '請問運費如何計算？',
      a: '全站單筆訂單滿 NT$ 3,000 即可享有免運優惠；未達免運門檻，大型家具宅配費用為 NT$ 200，小型家飾則為 NT$ 80。',
    },
    {
      id: 2,
      category: '購物與配送',
      q: '下單後多久可以收到商品？',
      a: '現貨商品將於訂單確認後的 3 個工作天內出貨。若遇假日或國定假期則順延。預購商品之配送時間請參考該商品頁面之具體說明。',
    },
    // 產品與保養
    {
      id: 3,
      category: '產品與保養',
      q: '實木家具該如何保養？',
      a: '建議維持室內濕度在 40%-60% 之間，避免陽光直射。清潔時請使用乾淨的微濕軟布擦拭，並定期使用專用護木油保養以維持木質光澤。',
    },
    {
      id: 4,
      category: '產品與保養',
      q: 'Livin Store 的布製沙發是否可以拆洗？',
      a: '我們大部分的沙發款式均採用可拆洗設計，建議使用中性洗劑並以乾洗方式處理，以確保纖維結構不變形。',
    },
    // 技術與安全
    {
      id: 5,
      category: '技術說明',
      q: '為什麼結帳時沒有看到信用卡輸入欄位？',
      a: '本網站目前為技術開發展示版本 (Demo)，主要呈現前端交互與 UI/UX 流程。現階段不儲存任何信用卡資訊，亦不進行真實扣款。',
    },
    {
      id: 6,
      category: '技術說明',
      q: '我的個人資料會被儲存嗎？',
      a: '本專案僅用於功能展示，所有輸入的資訊僅於當次瀏覽時有效，我們不會將您的個人資訊上傳至任何持久化資料庫。',
    },
  ];

  const handleToggle = id => {
    setOpenIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
  };

  return (
    <>
      <div className="min-h-screen bg-[#f9f8f6] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-light tracking-[0.2em] text-slate-800 mb-4">FAQ</h2>
            <p className="text-slate-400 text-sm tracking-widest uppercase">常見問題</p>
          </header>
          <div className="space-y-4">
            {faqs.map(faq => {
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => handleToggle(faq.id)}
                  >
                    <span className="text-slate-700 font-medium tracking-wide">{faq.q}</span>
                    <span
                      className={`text-slate-400 transform transition-transform duration-300 ${openIds.includes(faq.id) ? 'rotate-180' : ''}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`px-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 ${
                      openIds.includes(faq.id) ? 'pt-4 pb-6 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
