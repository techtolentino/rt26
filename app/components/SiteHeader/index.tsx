"use client";

import Link from "next/link";
import { Column, Grid } from "../carbon-wrapper";
import { Email, LogoLinkedin } from "@carbon/icons-react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <Grid>
        <Column sm={4} md={3} lg={4}>
          <Link href="/">Randy Tolentino</Link>
        </Column>
        <Column md={0} lg={7}></Column>
        <Column sm={4} md={5} lg={5}>
          <nav>
            <Link href={"/about"}>About</Link>
            <Link href={"/work"}>Work</Link>
            <Link href={"/writing"}>Writing</Link>
            <div>
              <a
                href="mailto:randytolentino@protonmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email me. Opens in a new tab"
              >
                <Email />
              </a>
              <a
                href="https://linkedin.com/in/randytolentino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email me. Opens in a new tab"
              >
                <LogoLinkedin />
              </a>
            </div>
          </nav>
        </Column>
      </Grid>
    </header>
  );
}
