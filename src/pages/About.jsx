import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f9f8f6] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-4xl font-extralight text-slate-800 tracking-tight mb-12">關於 LIVIN</h1>
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076"
              alt="LIVIN Concept"
              className="w-full h-auto object-cover"
            />
          </div>
        </header>

        <section className="max-w-2xl mx-auto space-y-6 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl font-light text-slate-800 tracking-widest">「生活，不該只是生存的堆砌。」</h2>
          </div>
          <p className="text-slate-500 leading-6 font-light text-sm md:text-base">
            LIVIN 誕生於對空間美學的執著。我們深信，家不僅僅是一個居住的場所，更是靈魂的棲息地。
            在快節奏的時代中，我們致力於尋找北歐的實用主義與日式禪意的平衡點。
          </p>
          <p className="text-slate-500 leading-6 font-light text-sm md:text-base">
            我們嚴選每一件產品，從 FSC 認證的永續實木到天然纖維織物，堅持「減法美學」，
            捨去不必要的裝飾，只留下觸感、光影與溫度的純粹體現。
          </p>
          <p className="text-slate-500 leading-6 font-light text-sm md:text-base">
            透過嚴謹的選品流程與職人工藝，我們專注於每一個轉角的打磨，確保您的每一次觸碰，
            都能感受到我們對高品質生活的承諾。
          </p>
        </section>

        <section className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-slate-100">
          <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000"
              className="w-full h-full object-cover"
              alt="LIVIN Showroom"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-[#d2b48c] text-xs tracking-[0.3em] uppercase">Showroom</span>
              <h2 className="text-3xl font-extralight text-slate-800 tracking-widest">實體概念店</h2>
            </div>
            <p className="text-slate-500 leading-relaxed font-light">
              我們在台北民生社區的一隅，打造了一個寧靜的體驗空間。這裡不只是展廳， 更是一個關於「慢生活」的實驗室。
            </p>
            <div className="pt-4 space-y-2 text-sm text-slate-400 font-light">
              <p>台北市松山區民生東路 ○○ 巷 ○ 號</p>
              <p>週二至週日 11:00 — 20:00 (預約制)</p>
            </div>
            <p className="pb-1 text-sm text-slate-500">歡迎來電預約: 02-2345-6789</p>
          </div>
        </section>

        <div className="mt-24 text-center">
          <div className="w-12 h-[1px] bg-[#d2b48c] mx-auto mb-8"></div>
          <p className="text-slate-400 text-sm font-light tracking-widest">期待與您一起，定義專屬於您的質感生活。</p>
        </div>
      </div>
    </div>
  );
};

export default About;
