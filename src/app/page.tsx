import React from "react";
import AppButton from "@/components/app/Button";
import Image from "next/image";

const titleButton = [
  {
    id: 1,
    text: "Say it now",
    className:
      "bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal",
  },
  {
    id: 2,
    text: "Explore Talks",
    className:
      "border-[#00A9FF] px-8 py-3 rounded text-[#00A9FF] border text-base font-bold leading-normal",
  },
];

const logoUniversity = [
  {
    id: 1,
    logo: "Logo Univ",
  },
  {
    id: 2,
    logo: "Logo Prodi",
  },
  {
    id: 3,
    logo: "Logo sema",
  },
  {
    id: 4,
    logo: "Logo hima",
  },
  {
    id: 5,
    logo: "Logo Okup",
  },
];

const features = [
  {
    id: 1,
    title: "Anonymous",
    icon: "/icons/anonymous.svg",
    text: "Give your feelings and opinion freely and without worries. We provide full anonymity to ensure honest expression",
  },
  {
    id: 2,
    title: "Our Features",
    text: "Anonymous, inclusivity, and respect for privacy are integrated to support continuous growth and improvement",
  },
  {
    id: 3,
    title: "Easy to use",
    icon: "/privacy.svg",
    text: "Experience simplicity at its best! Our user-friendly interface makes it easy for you to navigate, share feedback, and explore",
  },
  {
    id: 4,
    title: "Privacy",
    icon: "/icons/anonymous.svg",
    text: "You are free to express criticism and suggestions without having to reveal your identity. We put every user's security and privacy first",
  },
  {
    id: 5,
    title: "Secure",
    icon: "/icons/anonymous.svg",
    text: "We guarantee the security of this platform. Every piece of information you share will be securely stored and inaccessible to unauthorized parties",
  },
  {
    id: 6,
    title: "Interactive",
    icon: "/icons/anonymous.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla quis dolor aliquam tristique. In sed cursus aug",
  },
];
function page() {
  return (
    <>
      {/* Hero section */}
      <section className="py-[120px]">
        <div className="grid justify-center ">
          <h1 className="text-4xl font-semibold leading-[170%] grid">
            We Love Helping You To Share{" "}
            <span className="text-[#00A9FF] text-center">
              Your Feelings & Opinions
            </span>
          </h1>
        </div>
        <div className="grid justify-center py-6">
          <h1 className="text-base font-normal leading-[30px]">
            The best place for you{" "}
            <span className="text-[#00A9FF] ">
              {" "}
              to deliver critiques, aspirations,
            </span>
          </h1>
          <h1 className="text-base font-normal leading-[30px] text-center">
            <span className="text-[#00A9FF] "> and reports</span> on all aspects
            of campus life.
          </h1>
        </div>
        <div className="flex justify-center gap-4">
          {titleButton.map((title) => (
            <AppButton
              title={title.text}
              className={title.className || ""}
              key={title.id}
            />
          ))}
        </div>
      </section>

      {/* logo section */}
      <section className="py-[60px]">
        <div className="grid justify-center">
          <h1 className="text-[#737373] text-base font-medium leading-normal text-center">
            Supported by all organizations and institutions in paramadina
            university
          </h1>
          <div className="flex pt-10 gap-[60px] p-[10px]">
            {logoUniversity.map((item) => (
              <h1
                key={item.id}
                className="text-[#737373] text-4xl font-medium leading-normal"
              >
                {item.logo}
              </h1>
            ))}
          </div>
        </div>
      </section>
      {/* Features section */}
      <section className="px-[104px] py-[60px]">
        <div className="grid grid-cols-3 gap-x-4 gap-6">
          {features.map((item) => (
            <div
              className=" border-[1.25px] rounded-[12.5px] pt-10 shadow-[0px_15px_30px_0px_rgba(0,0,0,0.10)] px-10 pb-[110px]"
              key={item.id}
            >
              {item.icon && (
                <div className="bg-[#00A9FF] rounded-full px-6 py-6 w-20 h-20 flex items-center justify-center ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>
              )}
              <h1 className="text-[#144B66] text-xl font-semibold pt-7">
                {item.title}
              </h1>
              <p className="text-[#737373] text-base font-normal leading-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* section how to say it */}
      <section className="pt-[60px]">
        <h1 className="text-center text-[32px] font-semibold leading-[44px] -tracking-[-0.64px] pb-[60px]">
          How to say it?
        </h1>
        <div className="pl-[504px]">
          <Image
            src="/vector/vector1/arrowRight.svg"
            alt="arrow right"
            width={64}
            height={64}
          />
        </div>
        <div className="flex pl-[104px] gap-[27px]">
          <div className="w-[400px]">
            <h1 className="text-right underline text-xl font-medium leading-normal">
              01
            </h1>
            <h1 className="text-xl italic font-medium text-[#00A9FF] leading-normal text-right">
              Sign in to your account
            </h1>
            <p className="text-[#737373] text-right text-base font-normal leading-normal">
              Login to your account by filling in your username/email and
              password. Create an account first if you don&apos;t have one.
            </p>
          </div>
          <div className="pt-[20px]">
            <Image
              src="/dashHero.svg"
              alt="dashed vector sign in"
              width={517.578}
              height={956}
            />
          </div>
          <div className="flex justify-center gap-[22px] relative z-20">
            <div className="">
              <h1 className="text-right underline text-xl font-medium leading-normal">
                02
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
