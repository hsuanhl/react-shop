const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f8f6] pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-light tracking-[0.2em] text-slate-800 mb-12 text-center">PRIVACY POLICY</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm text-slate-500 text-sm leading-7 space-y-6">
          <section>
            <h2 className="text-slate-800 font-medium mb-4">專案聲明</h2>
            <p>
              本網站 Livin Store 為前端開發技術展示專案。我們重視您的隱私，但請注意本專案目前未連接持久化後端資料庫，亦未實施真實的金流交易。
            </p>
          </section>

          <section>
            <h2 className="text-slate-800 font-medium mb-4">資料蒐集與使用</h2>
            <p>
              您在結帳頁面輸入的姓名、地址、電話等資訊，僅供前端頁面呈現訂單結果使用，不會被傳送、儲存或分享給任何第三方。當您關閉瀏覽器或重新整理頁面時，該些資訊將會被重置。
            </p>
          </section>

          <section>
            <h2 className="text-slate-800 font-medium mb-4">Cookies 使用</h2>
            <p>
              我們使用瀏覽器本地儲存（LocalStorage）來保存您的購物車內容。這僅是為了提供流暢的購物體驗，我們不會利用此技術追蹤您的個人身分或跨站行為。
            </p>
          </section>

          <div className="pt-8 border-t border-slate-50 text-center text-xs text-slate-300">
            最後更新日期：2026.02.27
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage