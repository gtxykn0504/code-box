import Content from "@/content/certificate.mdx";
import "./content.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "证书",
  description: "Zheary的证书",
};

export default function PrivacyPage() {
  const lastUpdated = "2024-11-14";
  return (
    <div className="min-h-screen">
      <main className="max-w-screen-sm mx-auto p-6 mt-32 break-words">
        <div className="my-16 flex flex-col gap-4">
          <h1 className="text-4xl font-medium">证书</h1>
          <div className="text-sm font-normal text-slate-600">
            最后更新于 {lastUpdated}
          </div>
        </div>
        <article className="markdown-body">
          <Content />
        </article>
      </main>
    </div>
  );
}
