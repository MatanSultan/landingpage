import React from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Land from "../components/Land";

export default function Home() {
  return (
    <div>
      <Land />
    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
}
