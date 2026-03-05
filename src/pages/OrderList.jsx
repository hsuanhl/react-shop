import { useState, useEffect } from 'react';
import axios from 'axios';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const OrderList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [orderList, setOrderList] = useState([]);

    // pagination
  const [pager, setPager] = useState({
    category: '',
    current_page: 1,
    has_next: true,
    has_pre: false,
    total_pages: 1,
  });

  const fetchOrder = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/admin/orders`);
      setOrderList(response.data.orders);
      setPager(prev => ({
        ...prev,
        ...response.data.pagination,
      }));
    } catch (error) {
      console.error(error?.response?.data?.message);
    } finally {
      setIsFetching(false);
    }
  };

  const formatDate = (timestamp) => {
  if (!timestamp) return '';
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('zh-TW'); // 只顯示日期：2026/2/5
};

  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-3">
          <h1 className="text-lg text-slate-500">訂單列表</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm tracking-wider ">
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">#</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">訂單編號</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">日期</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium text-right">總額</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">姓名</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">email</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium">電話</th>
                <th className="border-b border-b-slate-200 px-3 py-3 font-medium text-center">狀態</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {isFetching ? (
                <tr>
                  <td colSpan="7" className="py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-slate-400">資料載入中...</p>
                    </div>
                  </td>
                </tr>
              ) : orderList?.length > 0 ? (
                orderList.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-3 py-2 text-slate-400 text-sm">{(pager.current_page - 1) * 10 + index + 1}</td>
                    <td className="px-3 py-2 text-slate-800 text-sm">{item.id}</td>
                    <td className="px-3 py-2 text-slate-800 text-sm">{formatDate(item.create_at)}</td>
                    <td className="px-3 py-2 text-slate-800 text-sm text-right">${item.total.toLocaleString()}</td>
                    <td className="px-3 py-2 text-slate-400 text-sm">{item.user.name}</td>
                    <td className="px-3 py-2 text-slate-400 text-sm">{item.user.email}</td>
                    <td className="px-3 py-2 text-slate-400 text-sm">{item.user.tel}</td>
                    <td className="px-3 py-2 text-center">
                      <span
                        className={`px-2.5 py-1.5 rounded-full text-xs font-medium ${
                          item.is_paid ? 'bg-[#caeddd] text-[#3c755b]' : 'bg-taupe-100 text-taupe-500'
                        }`}
                      >
                        {item.is_paid ? '已付款' : '未付款'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-20 text-center text-slate-400">
                    目前尚無訂單資料
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {pager.total_pages > 1 && <Pagination pager={pager} setPager={setPager} />}
      </div>
    </div>
  );
};

export default OrderList;
