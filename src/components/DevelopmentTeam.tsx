const DevelopmentTeam = () => {
  return (
    <section id='team' className='py-20 bg-orange-50 dark:bg-[#0a0a0a]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Phát Triển Bởi VNDev Labs
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Đội ngũ chuyên nghiệp với tâm huyết phát triển ứng dụng chất lượng
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/3 flex justify-center'>
            <div className='relative'>
              <div className='absolute -inset-1 bg-orange-500 dark:bg-[#ff3333] rounded-full blur-md opacity-75'></div>
              <img
                src='/images/vndevlabs_500-500.png'
                alt='VNDev Labs Logo'
                className='relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-[#0a0a0a]'
              />
            </div>
          </div>

          <div className='md:w-2/3 mt-8 md:mt-0'>
            <div className='bg-orange-50 dark:bg-[#121212] p-8 rounded-2xl shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
                Về Chúng Tôi
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Chúng tôi là đội ngũ phát triển ứng dụng di động tại Việt Nam,
                với mục tiêu tạo ra những sản phẩm chất lượng, đáp ứng nhu cầu
                người dùng Việt.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Ứng dụng Lộc Phát Số được phát triển với tâm huyết, mong muốn
                mang đến trải nghiệm tốt nhất cho người chơi xổ số tại Việt Nam.
              </p>
              <div className='mt-6 flex flex-wrap gap-4'>
                <div className='bg-white dark:bg-[#1a1a1a] px-4 py-3 rounded-lg shadow-sm'>
                  <div className='text-2xl font-bold text-orange-500 dark:text-[#ff3333]'>
                    5+
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>
                    Năm kinh nghiệm
                  </div>
                </div>
                <div className='bg-white dark:bg-[#1a1a1a] px-4 py-3 rounded-lg shadow-sm'>
                  <div className='text-2xl font-bold text-orange-500 dark:text-[#ff3333]'>
                    10+
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>
                    Ứng dụng đã phát triển
                  </div>
                </div>
                <div className='bg-white dark:bg-[#1a1a1a] px-4 py-3 rounded-lg shadow-sm'>
                  <div className='text-2xl font-bold text-orange-500 dark:text-[#ff3333]'>
                    1M+
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>
                    Người dùng hài lòng
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='bg-orange-100 dark:bg-[#1a1a1a] p-4 rounded-xl text-center'>
                <div className='font-semibold text-gray-800 dark:text-white'>
                  Chất Lượng
                </div>
              </div>
              <div className='bg-orange-100 dark:bg-[#1a1a1a] p-4 rounded-xl text-center'>
                <div className='font-semibold text-gray-800 dark:text-white'>
                  Sáng Tạo
                </div>
              </div>
              <div className='bg-orange-100 dark:bg-[#1a1a1a] p-4 rounded-xl text-center'>
                <div className='font-semibold text-gray-800 dark:text-white'>
                  Tận Tâm
                </div>
              </div>
              <div className='bg-orange-100 dark:bg-[#1a1a1a] p-4 rounded-xl text-center'>
                <div className='font-semibold text-gray-800 dark:text-white'>
                  Đổi Mới
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTeam;
