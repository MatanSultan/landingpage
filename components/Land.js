import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Settings from "./settings/Settings";

export default function Land() {
  const { t } = useTranslation("common");

  return (
    <>
      <main>
        <Settings />
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/Fotor_AI.png')",
            }}
          >
            <span id="logo" className="w-full h-full absolute text-3xl ml-12 ">
              LOGO HERE
            </span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    {t("title-text")}
                  </h1>
                  <p className="mt-4 text-2xl text-white">
                    hi there, we are a team of developers who are passionate
                    about building the future with you. we are here to build
                    your dream. website to your business and your ideas.
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full">
                      <Image
                        src="/settingicon.gif"
                        alt="iconland"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold"> full explain </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      text text text text text text text text text text text
                      text text text. text text text text text text text text
                      text text text text text text.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full">
                      <Image
                        src="/magnifier.gif"
                        alt="iconland"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      when you are not satisfied with our work, we will revise
                      it for free. we will make sure that you are satisfied with
                      our work.
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
                      {" "}
                      text text text text{" "}
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      text text text text text text text text text text text
                      text text text. text text text text text text text text
                      text text text text text text. text text text text text
                      text text text text text text text text text. text text
                      text text text text text text text text text text text
                      text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
