/** @format */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div></div>
      <div>
        <button
          onClick={() => {
            const locale = "kn";
            router.push(router.pathname, router.asPath, { locale });
          }}>
          chnage locale
        </button>
      </div>
    </div>
  );
}
export const getServerSideProps = (ctx) => {
  console.log(ctx);
  return {
    props: {},
  };
};
