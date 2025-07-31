import React from 'react';

const HeroVid = () => {
  const cards = [
    { bg: 'bg-red-500', rotateY: 60, height: 'h-96', width: 'w-64', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg'},
    { bg: 'bg-blue-500', rotateY: 40, height: 'h-80', width: 'w-52', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-yellow-500', rotateY: 20, height: 'h-72', width: 'w-48', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-pink-500', rotateY: 0, height: 'h-72', width: 'w-44', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' }, // center
    { bg: 'bg-yellow-500', rotateY: -20, height: 'h-72', width: 'w-48', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-blue-500', rotateY: -40, height: 'h-80', width: 'w-52', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-red-500', rotateY: -60, height: 'h-96', width: 'w-64', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
  ];

  return (
    <div
      className="flex justify-center items-center gap-5 w-full"
      style={{ perspective: '1500px' }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative"
          style={{
            transform: `rotateY(${card.rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={`${card.bg} ${card.height} ${card.width} ${card.extraClass} rounded-3xl shadow-xl transition-transform duration-500 overflow-clip`}
          >
            <img src={""} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroVid;