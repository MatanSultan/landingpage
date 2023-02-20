import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Settings from "./settings/Settings";
import Form from "./settings/Form";
import LetsTalkSection from "./LetsTalkSection";
import SeeMoreCard from "./SeeMoreCard";

export default function Land() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="w-[100%]">
        <Settings />
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center text-center">
          <div
            className="absolute top-0 h-full bg-center bg-cover w-[100%]"
            style={{
              backgroundImage: "url('/Fotor_AI.png')",
            }}
          ></div>
          <div className="container relative mx-auto tFex">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    {t("title-text")}
                  </h1>
                  <p className="mt-4 text-2xl text-white">
                    {t("subtitle-text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          ></div>
        </div>
        <section className="pb-20 bg-blueGray-200 -mt-24 bg-gray-200 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-32 h-42 mb-5 shadow-lg rounded-full">
                      <Image
                        src="/block1.gif"
                        alt="iconland"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      {t("full-explained")}
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t("ui-and-development")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full">
                      <Image
                        src="/block2.gif"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      {t("responsive-website")}
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t("responsive-website-description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full">
                      <Image
                        src="/build.gif"
                        alt="iconland"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      {t("Attractive-price")}
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t("Attractive-price-d")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeeMoreCard />
        <div>
          {/* <Form /> */}
          <LetsTalkSection />
        </div>
      </div>
    </>
  );
}
