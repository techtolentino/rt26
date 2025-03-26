import type { Metadata } from "next";
import "./styles/globals.scss";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Randy Tolentino",
    template: `%s Randy Tolentino`,
  },
  description:
    "Randy Tolentino is a UX Designer and Engineer. With a decade in tech, he thrives on delivering clean and well-thought digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
