'use client';

const WorldMapCard = ({ imgUrl, title, joined }) => (
  <div className="absolute h-[136px] w-[180px] box-content text-white border-[8px] rounded-[30px] border-[#425080]">
    <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
    <div className="absolute flex flex-row w-[50px] h-[25px] bottom-[42px] left-[12px]">
      <img
        src="/map-card-face-01.png"
        alt="face-1"
        className="relative z-[3] w-[24px] h-[24px]"
      />
      <img
        src="/map-card-face-02.png"
        alt="face-2"
        className="relative left-[-12px] z-[2] w-[24px] h-[24px]"
      />
      <img
        src="/map-card-face-03.png"
        alt="face-3"
        className="relative left-[-24px] z-[1] w-[24px] h-[24px]"
      />
    </div>
    <div className="absolute w-[100px] h-[20px] bottom-[45px] left-[65px]">
      <p className="text-[12px]">{joined}</p>
    </div>
    <div className="absolute w-[150px] h-[30px] bottom-[8px] left-[12px] m-0">
      <p className="text-[18px] text-bold p-0">{title}</p>
    </div>
  </div>
);

export default WorldMapCard;
