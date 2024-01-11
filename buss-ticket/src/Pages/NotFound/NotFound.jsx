import React from 'react';

function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Aradığınız Sonuç Bulunamadı</h1>
        <p className='text-lg'>
          Üzgünüz, aradığınız sonuç bulunamadı. Lütfen başka bir arama yapmayı deneyin.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
