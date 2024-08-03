"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, MapPinned } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col flex-grow items-center justify-start bg-background dark:bg-neutral-800 lg:bg-neutral-350 lg:dark:bg-black">
      <div className="max-w-screen-md h-full p-8 bg-background shadow-[0px_0px_200px_220px_hsl(var(--background))] dark:bg-neutral-800 dark:shadow-[0px_0px_200px_220px_rgb(38_38_38_/_var(--tw-bg-opacity))]">
        <div className="flex flex-col flex-grow max-w-screen-md w-full mt-8 gap-8">
          <section className="w-full flex flex-col items-start">
            <h1 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">
              Hi, I'm Ken.
            </h1>
            <div className="flex-grow"></div>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              I'm a 17 year old full-stack developer who loves my dog Mango.
            </p>
          </section>
          <section className="w-full flex flex-col items-start">
            <div className="border border-neutral-300 dark:border-neutral-700 w-full aspect-[16/9] bg-muted dark:bg-[#303030] rounded-md shadow-xl relative flex flex-col items-center">
              <div className="flex gap-7 absolute bottom-8 w-full justify-center items-center">
                <Image
                  src="/keyboard.svg"
                  width={1027}
                  height={352}
                  alt="Keyboard"
                  className="aspect-[1027/352] h-14 rounded object-contain object-center shadow-md max-w-fit"
                />
                <Image
                  src="/pen.svg"
                  width={64}
                  height={606}
                  alt="Pen"
                  className="aspect-[64/606] h-16 rounded object-contain object-center max-w-fit dark:opacity-50"
                />
              </div>
            </div>
            {/* <div className="border border-muted-foreground w-full h-12 border-t-0 bg-muted transform-style-3d rotate-x-45 perspective-[10px]"></div> */}
          </section>
          <section className="w-full flex flex-col items-start">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              My projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] mt-6 sm:gap-y-6">
              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://arcadecord.com"
                >
                  Arcadecord
                </LinkPreview>
                <Badge variant={"default"}>🏆 Top.gg Staff Pick</Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                The GamePigeon of Discord. Play fun minigames with friends in
                your online communities. Used in&nbsp;
                <span className="font-mono font-semibold">2600+</span> servers.
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://cider-app.vercel.app"
                >
                  Cider
                </LinkPreview>
                <Badge variant={"default"}>🏆 Best Lifestyle Hack</Badge>
              </div>

              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Add reminders from documents into your calendar.
                <a
                  className="text-muted-foreground text-sm ml-1 underline underline-offset-4"
                  href="https://hacktj.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mx-1" />
                  HackTJ 11.0
                </a>
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://machinistmath.com"
                >
                  MachinistMath
                </LinkPreview>
                <Badge variant={"default"}>🏆 Best Technical Venture</Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Simplify tedious and error prone machining calculations with
                this voice-powered calculator, even when your hands are dirty.
                <a
                  className="text-muted-foreground text-sm ml-1 underline underline-offset-4"
                  href="https://venturecamp.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mx-1" />
                  Venture Camp S24
                </a>
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://crates.io/crates/licensesnip"
                >
                  Licensesnip
                </LinkPreview>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Automatically add license headers to source code.&nbsp;
                <span className="font-mono font-semibold">6000+</span>
                &nbsp;downloads.
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://pharma-check.vercel.app"
                >
                  PharmaCheck
                </LinkPreview>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Scan medicine to check for dangerous drug interactions.
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://github.com/notken12/mangochat"
                >
                  MangoChat
                </LinkPreview>
                <Badge variant={"default"}>🏆 Best Overall Hack</Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Chat and send money securely using end-to-end encryption and
                decentralized storage.
                <a
                  className="text-muted-foreground text-sm ml-1 underline underline-offset-4"
                  href="https://hacktj.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mx-1" />
                  HackTJ 9.0
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

{
  /* <section className="w-full flex flex-col items-start">
  <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
    My projects
  </h2>
  <div className="flex flex-row mt-5">
    <div className="flex flex-row items-start gap-4">
      <a
        className="font-semibold text-primary underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-6 w-32"
        href="https://machinistmath.com"
      >
        Arcadecord
      </a>
      <p className="leading-7">
        The GamePigeon of Discord. Play fun minigames with friends in your
        servers.
      </p>
    </div>
  </div>
  <div className="flex flex-row mt-5">
    <div className="flex flex-row items-start gap-4">
      <a
        className="font-semibold text-primary underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-6 w-32"
        href="https://machinistmath.com"
      >
        MachinistMath
      </a>
      <p className="leading-7 flex">
        Simplify tedious and error prone machining calculations with this
        voice-powered calculator, even when your hands are dirty.
      </p>
    </div>
  </div>
</section>; */
}
