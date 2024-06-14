import Image from 'next/image';
import Left from '../../public/svgs/angleLeft.svg';
import Right from '../../public/svgs/angleRight.svg';

interface Props {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

export default function Carousel({ handlePrevClick, handleNextClick }: Props) {
  return (
    <div className="absolute top-20 flex justify-center ">
      <button
        type="button"
        onClick={handlePrevClick}
        className="absolute left-[-24px] z-20 h-5 w-5"
      >
        <Image src={Left} alt="left" />
      </button>
      <button
        type="button"
        onClick={handleNextClick}
        className="absolute left-[1030px] z-20 h-5 w-5"
      >
        <Image src={Right} alt="right" />
      </button>
    </div>
  );
}
