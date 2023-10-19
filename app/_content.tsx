"use client";

import Header from "@/components/header/header";
import RouteBack from "@/components/commons/route-back";
import { useLoading } from "@/contexts/request-loading-context";
import { useAxiosInterceptor } from "./_axios-interceptor";
import Loading from "./loading";
import React from "react";

export default function Content({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  useAxiosInterceptor();

  return (
    <>
      <div className={`relative w-full flex flex-col`}>
        <Header />
        <main className="mt-[70px] p-8">
          <RouteBack />
          {loading && <Loading />}
          {children}
        </main>
      </div>
    </>
  );
}
