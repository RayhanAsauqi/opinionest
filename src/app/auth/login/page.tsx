import Image from "next/image";
import Pattern from "../../../../public/svgs/pattern";
import PatternLogin2 from "../../../../public/svgs/pattern-login-2";
import PatternLogin3 from "../../../../public/svgs/pattern-login-3";

export default function Home() {
  return (
    <div className="flex flex-col pb-[212px] relative">
      <div className="absolute top-0">
        <Pattern />
      </div>
      <div className="absolute bottom-0 -z-10">
        <PatternLogin2 />
      </div>
      <div className="flex justify-center pt-[60px] pb-[71.64px]">
        <Image
          src="/opininest.svg"
          alt="My Image"
          width={205.909} // Lebar gambar
          height={80.364}
        />
      </div>
      <div className="flex justify-center relative">
        <div className="absolute -top-[200px] right-[150px] -z-10">
          <PatternLogin3 />
        </div>
        <div className="border-[1px] px-[104px] py-[75px] rounded-md border-primary bg-gradient-to-br from-transparent to-white via-white shadow-card">
          <div className="pb-[60px]">
            <h1 className="text-black font-pop text-[20px] font-medium leading-normal text-center">
              Welcome to OpinioNest
            </h1>
            <p className="text-black font-pop text-base font-normal leading-normal text-center mt-[8px]">
              Pliss complete your login information
            </p>
          </div>
          <button className="flex items-center justify-center px-[120px] py-[18px] border-[1px] border-[#D5D5D5] bg-white shadow-but rounded-[6px] gap-[8px]">
            <Image
              src="/iconGoogle.svg"
              alt="My Image"
              width={24}
              height={24}
            />
            <h1>Google Account</h1>
          </button>
          <h1 className="text-black font-pop text-[16px] font-normal leading-normal py-[16px] text-center">
            or sign in with
          </h1>
          <div className="flex flex-col gap-[16px]">
            <input
              type="search"
              placeholder="Username or email"
              className="border-[1px] border-[#D5D5D5] w-full bg-transparent shadow-but rounded-[6px] py-[18px] px-[20px]"
            />
            <input
              type="search"
              placeholder="Password"
              className="border-[1px] border-[#D5D5D5] w-full bg-transparent shadow-but rounded-[6px] py-[18px] px-[20px]"
            />
          </div>
          <button className="bg-primary w-full rounded-[6px] text-white font-pop text-[16px] font-normal leading-normal mt-[16px] py-[18px]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
