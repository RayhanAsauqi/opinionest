export default function ButtonDown({ title, type, onClick, className }: any) {
  return (
    <button
      className={`block w-full px-4 py-[18px] text-komen text-start font-pop font-normal leading-normal ${className}`}
      onClick={() => onClick(title)}
      type={type}
    >
      {title}
    </button>
  );
}
