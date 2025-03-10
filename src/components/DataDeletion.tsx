import { Trash2, User, ArrowDown, Check } from 'lucide-react';

const DataDeletion = () => {
  return (
    <section id='data-deletion' className='py-20 bg-white dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Xóa Dữ Liệu Người Dùng
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Lộc Phát Số (phát triển bởi VNDev Labs) tôn trọng quyền riêng tư và
            quyền kiểm soát dữ liệu của bạn
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-1/2'>
            <div className='bg-orange-50 dark:bg-[#121212] rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center'>
                <Trash2 className='h-6 w-6 text-orange-500 dark:text-[#ff3333] mr-2' />
                Cách xóa dữ liệu của bạn
              </h3>

              <div className='space-y-6'>
                <div className='flex'>
                  <div className='flex-shrink-0 flex flex-col items-center mr-4'>
                    <div className='w-8 h-8 rounded-full bg-orange-500 dark:bg-[#ff3333] text-white flex items-center justify-center font-bold'>
                      1
                    </div>
                    <div className='w-0.5 h-full bg-orange-300 dark:bg-[#ff3333] opacity-30 my-2'></div>
                  </div>
                  <div className='pt-1'>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
                      Truy cập vào ứng dụng
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Mở ứng dụng Lộc Phát Số được phát triển bởi VNDevLabs trên
                      thiết bị của bạn
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 flex flex-col items-center mr-4'>
                    <div className='w-8 h-8 rounded-full bg-orange-500 dark:bg-[#ff3333] text-white flex items-center justify-center font-bold'>
                      2
                    </div>
                    <div className='w-0.5 h-full bg-orange-300 dark:bg-[#ff3333] opacity-30 my-2'></div>
                  </div>
                  <div className='pt-1'>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
                      Mở tab Cá nhân
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Nhấn vào biểu tượng{' '}
                      <User className='h-4 w-4 inline-block mx-1' /> hoặc tab
                      "Cá nhân" ở menu dưới cùng
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 flex flex-col items-center mr-4'>
                    <div className='w-8 h-8 rounded-full bg-orange-500 dark:bg-[#ff3333] text-white flex items-center justify-center font-bold'>
                      3
                    </div>
                    <div className='w-0.5 h-full bg-orange-300 dark:bg-[#ff3333] opacity-30 my-2'></div>
                  </div>
                  <div className='pt-1'>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
                      Scroll xuống Tính năng
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Cuộn xuống Tính năng để tìm phần "Xoá tài khoản"{' '}
                      <ArrowDown className='h-4 w-4 inline-block mx-1' />
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0 flex flex-col items-center mr-4'>
                    <div className='w-8 h-8 rounded-full bg-orange-500 dark:bg-[#ff3333] text-white flex items-center justify-center font-bold'>
                      4
                    </div>
                  </div>
                  <div className='pt-1'>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
                      Thực hiện Chức năng Xóa tài khoản và đồng ý
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Nhấn vào "Xóa tài khoản" và xác nhận yêu cầu xóa dữ liệu
                      của bạn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className='bg-orange-50 dark:bg-[#121212] rounded-2xl p-8 shadow-lg h-full'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                Dữ liệu sẽ được xóa
              </h3>

              <p className='text-gray-700 dark:text-gray-300 mb-6'>
                Khi bạn yêu cầu xóa dữ liệu, Lộc Phát Số (VNDev Labs) sẽ xóa tất
                cả dữ liệu liên quan đến bạn, bao gồm:
              </p>

              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <span className='font-semibold'>Dữ liệu cá nhân:</span>{' '}
                    Thông tin tài khoản, lịch sử dò vé số, thông tin liên hệ
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <span className='font-semibold'>Dữ liệu hệ thống:</span> ID
                    thiết bị, thông tin đăng nhập, cài đặt ứng dụng
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check className='h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0' />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <span className='font-semibold'>Dữ liệu sử dụng:</span> Lịch
                    sử hoạt động, thống kê sử dụng, dữ liệu tương tác
                  </span>
                </li>
              </ul>

              <div className='mt-8 p-4 bg-white dark:bg-[#1a1a1a] rounded-xl border border-orange-200 dark:border-[#2a2a2a]'>
                <h4 className='font-semibold text-gray-800 dark:text-white mb-2'>
                  Thời gian xử lý:
                </h4>
                <p className='text-gray-700 dark:text-gray-300 mb-2'>
                  Dữ liệu của bạn sẽ được xóa hoàn toàn khỏi hệ thống của chúng
                  tôi ngay khi yêu cầu, hãy cẩn thận.
                </p>
              </div>

              <div className='mt-8 bg-orange-100 dark:bg-[#1a1a1a] p-4 rounded-r-xl rounded-l-lg border-l-4 border-orange-500 dark:border-[#ff3333]'>
                <p className='text-gray-700 dark:text-gray-300 italic'>
                  "Lộc Phát Số (VNDev Labs) cam kết bảo vệ quyền riêng tư của
                  người dùng và tuân thủ các quy định về bảo vệ dữ liệu. Bạn có
                  quyền yêu cầu xóa dữ liệu của mình bất cứ lúc nào."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDeletion;
