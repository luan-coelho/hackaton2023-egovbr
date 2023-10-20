"use client";

import HeaderRoot from "@/components/header/headerRoot";
import RouteBack from "@/components/commons/route-back";
import { useLoading } from "@/contexts/request-loading-context";
import { useAxiosInterceptor } from "./_axios-interceptor";
import Loading from "./loading";
import React from "react";
import Footer from "@/components/footer";

export default function Content({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  useAxiosInterceptor();

  return (
    <>
      <div className={`relative w-full flex flex-col`}>
        <HeaderRoot />
        <main className="mt-[70px] p-8 pb-[170px]">
          {/*<RouteBack />*/}
          {loading && <Loading />}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
