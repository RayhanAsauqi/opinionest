type CardTypeProps = {
  type: string;
  count: number;
  description: string;
};

const CardType = ({ type, count, description }: CardTypeProps) => {
  return (
    <div className="bg-[#E2F5FF] w-full py-[20px] px-6 flex flex-col justify-center items-center rounded-[10px]">
      <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
        {type}
      </p>
      <p className="text-secondary font-pop text-[64px] font-normal leading-[170%]">
        {count}
      </p>
      <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
        {description}
      </p>
    </div>
  );
};

export default CardType;
