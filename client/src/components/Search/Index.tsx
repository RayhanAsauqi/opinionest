export default function Search() {
  return (
    <div className="flex flex-row w-full relative">
      <input
        type="text"
        placeholder="Search"
        className="border-[1px] border-[#D5D5D5] rounded-[10px] w-full px-[20px] py-[18px]"
      />
      <div className="absolute inset-y-0 right-[20px] flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.8931 16.92L19.9731 20M19.0841 11.581C19.0841 15.768 15.7011 19.162 11.5281 19.162C7.35614 19.162 3.97314 15.768 3.97314 11.582C3.97314 7.393 7.35614 4 11.5281 4C15.7011 4 19.0841 7.394 19.0841 11.581Z"
            stroke="#737373"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
