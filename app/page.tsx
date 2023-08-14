"use client";
import { useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

export enum ContentTypes {
  About,
  Experience,
  Projects,
  Contact,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<ContentTypes>(ContentTypes.About);

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content displayContent={activeTab} />
    </>
  );
}
