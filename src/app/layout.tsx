import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hambr",
  description: "An incredible menu ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='App'>
          <Header />
          <div className='containerLembrar w-[1280px] min-w-[1280px] mx-auto '>
            <div className='wrapper px-[48px]  px-[48px] '>
              <div className='home flex justify-center items-center h-full w-full [&_p]:text-[0.75rem] [&_p]:tracking-[.3rem] [&_p]:uppercase [&_p]:font-medium [&_h5]:mt-[260px] [&_h5]:text-[1.5rem] [&_h5]:font-semibold [&_h5]:pr-[360px] '>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
