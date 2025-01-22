"use client";
import React from "react";
import AppButton from "@/components/app/Button";
import Image from "next/image";
import Anonymous from "../../public/icons/anonymous";
import Navbar from "@/components/Navbar";
import CardFeatures from "@/components/CardFeatures/Index";
import EasyToUse from "../../public/icons/easyToUse";
import Privacy from "../../public/icons/privacy";
import Secure from "../../public/icons/secure";
import Interactive from "../../public/icons/interactive";
import Dashed1 from "../../public/svgs/dashed1";
import Dashed2 from "../../public/svgs/dashed2";
import Dashed3 from "../../public/svgs/dashed3";
import Dashed4 from "../../public/svgs/dashed4";
import Footer from "@/components/Footer";

const titleButton = [
  {
    id: 1,
    text: "Say it now",
    href: "/speak/form",
    className:
      "bg-primary px-8 py-3 rounded text-white text-[16px] font-pop font-bold leading-normal",
  },
  {
    id: 2,
    text: "Explore Talks",
    href: "/talks",
    className:
      "border-primary px-8 py-3 rounded text-primary border text-[16px] font-pop font-bold leading-normal",
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

function page() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero section */}
      <section className="py-[120px]">
        <div className="grid justify-center ">
          <h1 className="text-black text-[36px] font-pop font-semibold leading-[170%] grid">
            We Love Helping You To Share{" "}
            <span className="text-[#00A9FF] text-center">
              Your Feelings & Opinions
            </span>
          </h1>
        </div>
        <div className="grid justify-center py-6">
          <h1 className="text-black font-pop text-[16px] font-normal leading-[30px]">
            The best place for you{" "}
            <span className="text-[#00A9FF] ">
              {" "}
              to deliver critiques, aspirations,
            </span>
          </h1>
          <h1 className="text-black font-pop text-[16px] font-normal leading-[30px] text-center">
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
              alt="sign in"
              href={title.href}
              width={20}
              height={20}
              isSpeakView={true}
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
      <section id="features" className="px-[104px] py-[60px]">
        <div className="grid grid-cols-3 gap-[16px]">
          <CardFeatures
            icon={<Anonymous />}
            title="Anonymous"
            desc="Give your feelings and opinion freely and without worries. We provide full anonymity to ensure honest expression"
          />
          <div className="flex flex-col h-[400px] justify-center items-center">
            <h3 className="text-black font-pop text-[32px] font-semibold leading-normal">
              Our Features
            </h3>
            <p className="text-komen font-pop text-[16px] font-normal leading-normal text-center">
              Anonymous, inclusivity, and respect for privacy are integrated to
              support continuous growth and improvement
            </p>
          </div>
          <CardFeatures
            icon={<EasyToUse />}
            title="Easy to use"
            desc="Experience simplicity at its best! Our user-friendly interface makes it easy for you to navigate, share feedback, and explore"
          />
          <CardFeatures
            icon={<Privacy />}
            title="Privacy"
            desc="You are free to express criticism and suggestions without having to reveal your identity. We put every user's security and privacy first"
          />
          <CardFeatures
            icon={<Secure />}
            title="Secure"
            desc="We guarantee the security of this platform. Every piece of information you share will be securely stored and inaccessible to unauthorized parties"
          />
          <CardFeatures
            icon={<Interactive />}
            title="Interactive"
            desc="Experience simplicity at its best! Our user-friendly interface makes it easy for you to navigate, share feedback, and explore"
          />
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
        <div className="grid grid-cols-3 pl-[104px] gap-[27px]">
          <div className="flex flex-col items-end">
            <p className="text-right underline text-xl font-medium leading-normal">
              01
            </p>
            <h3 className="text-primary font-pop text-[20px] italic font-medium leading-normal">
              Sign in to your account
            </h3>
            <p className="text-komen font-pop text-[16px] font-normal leading-normal text-right">
              Login to your account by filling in your username/email and
              password. Create an account first if you don&apos;t have one.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Dashed1 />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[22px] relative z-20 mt-[40px]">
          <div></div>
          <div className="pt-[29.11px] flex flex-row items-center justify-center relative">
            <div className="-top-[70px] right-[50px] absolute ">
              <Image
                src="/vector/vector2/searchForm.svg"
                alt="search form"
                width={64}
                height={64}
                className=""
              />
              <p className="text-right underline text-xl font-medium leading-normal">
                02
              </p>
            </div>
            <Dashed2 />
          </div>
          <div className="flex flex-col items-start -ml-[50px]">
            <h3 className="text-primary font-pop text-[20px] italic font-medium leading-normal">
              Find the form
            </h3>
            <p className="text-komen font-pop text-[16px] font-normal leading-normal text-left">
              After login, select the &quot;speaks&quot; menu to go to the form.
              Start to fill in your critiques or aspiration or report.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 pl-[104px] gap-[27px] mt-[40px]">
          <div className="flex flex-col items-end -mr-[100px]">
            <h3 className="text-primary font-pop text-[20px] italic font-medium leading-normal">
              Fill in the form
            </h3>
            <p className="text-komen font-pop text-[16px] font-normal leading-normal text-right">
              Fill in each field on the form as required. Make sure your target
              and the type of &quot;speaks&quot;.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center  relative">
            <div className="-top-[80px]  left-[110px] absolute ">
              <Image
                src="/vector/vector3/note.svg"
                alt="search form"
                width={64}
                height={64}
                className=""
              />
              <p className="text-left underline text-xl font-medium leading-normal">
                03
              </p>
            </div>
            <Dashed3 className="-mr-[250px]" />
          </div>
        </div>
        <div className="grid grid-cols-3 pl-[104px] gap-[27px] mt-[80px]">
          <div></div>
          <div className="flex flex-row items-center justify-center  relative">
            <div className="-top-[140px] -right-[20px] absolute">
              <Image
                src="/vector/vector4/note-submit.svg"
                alt="search form"
                width={64}
                height={64}
                className=""
              />
              <p className="text-right underline text-xl font-medium leading-normal">
                04
              </p>
            </div>
            <Dashed4 className="-mr-[300px]" />
          </div>
          <div className="flex flex-col items-start -mt-[40px] ml-[20px]">
            <h3 className="text-primary font-pop text-[20px] italic font-medium leading-normal">
              Submit
            </h3>
            <p className="text-komen font-pop text-[16px] font-normal leading-normal text-left">
              After completing the form, send us your message. Your anonymity
              and security are guaranteed.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center -mr-[200px] mt-[40px]">
        <p className="text-primary font-pop text-[20px] font-medium leading-normal text-center">
          It&apos;s done
        </p>
        <p className="text-komen font-pop text-[16px] font-normal leading-normal text-center mt-[8px]">
          Once sent, we will forward your message to your <br />
          destination.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default page;
