import AppButton from "@/components/app/Button/index";
import Image from "next/image";

const inputData = [
  {
    id: 1,
    placholder: "Email",
    type: "email",
  },

  {
    id: 2,
    placholder: "Password",
    type: "password",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-[60px] pb-[71.64px]  ">
        <Image
          src="/opininest.svg"
          alt="My Image"
          width={205.909} // Lebar gambar
          height={80.364}
        />
      </div>
      <div className="flex justify-center">
        <div className=" border-[1px]  px-[104px] py-[75px] rounded-md  border-blue-500 bg-gradient-to-tl from-transparent to-opacity-20">
          <div className="pb-[60px]">
            <h1 className=" font-medium leading-normal text-center">
              Welcome to OpinioNest
            </h1>
            <p className="text-base font-normal leading-normal text-center">
              Pliss complete your login information
            </p>
          </div>
          <div>
            <div className="border rounded-md shadow-[0px_0px_2px_rgba(0,0,0,0.10)] cursor-pointer  ">
              <div className="flex items-center justify-center px-[120px] py-[18px] gap-2">
                <Image
                  src="/iconGoogle.svg"
                  alt="My Image"
                  width={24} // Lebar gambar
                  height={24}
                />
                <h1>Google Account</h1>
              </div>
            </div>
            <h1 className="pt-4 text-center">or sign in with</h1>

            {inputData.map((input) => (
              <div key={input.id} className="grid gap-5">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full py-[18px] border rounded "
                />
              </div>
            ))}
          </div>
          <AppButton
            title="Sign in"
            className="btn text-white py-[18px] flex justify-center"
          />
        </div>
      </div>
    </>
  );
}
