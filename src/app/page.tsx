"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Aperture, TvMinimalPlay } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col flex-grow items-center justify-start bg-background dark:bg-neutral-800 lg:bg-neutral-300 lg:dark:bg-neutral-900">
      <div className="max-w-screen-md h-full p-8 bg-background shadow-[0px_0px_200px_220px_hsl(var(--background))] dark:bg-neutral-800 dark:shadow-[0px_0px_200px_220px_rgb(38_38_38_/_var(--tw-bg-opacity))]">
        <div className="flex flex-col flex-grow max-w-screen-md w-full mt-8 gap-8 mb-16">
          <section className="w-full flex flex-col items-start">
            <div className="flex flex-row justify-between w-full items-center mt-8">
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Hi, I'm Ken.
              </h1>
              <ModeToggle />
            </div>

            <div className="leading-7 [&:not(:first-child)]:mt-3">
              I'm a software engineer who loves spending time with my dog Mango, exploring the outdoors, and taking beautiful{" "}
              <Link className="font-semibold text-primary underline underline-offset-4 leading-7"
                href="/photography">photos</Link>.
            </div>
            <div className="leading-7 [&:not(:first-child)]:mt-3">
              I'm currently working at{" "}
              <LinkPreview
                className="font-semibold text-primary underline underline-offset-4 leading-7"
                url="https://www.loop.com"
              >
                Loop
              </LinkPreview>, the AI intelligence layer for logistics.
            </div>
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
                <Badge variant={"default"}>
                  <a
                    href="https://top.gg/bot/939355142556373043#:~:text=Awarded%20Top.gg%20Staff%20Pick"
                    target="_blank"
                  >
                    🏆 Top.gg Staff Pick
                  </a>
                </Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Minigames platform for the Discord chat app, including Chess,
                Eight Ball Pool, and more. Used in&nbsp;
                <span className="font-mono font-semibold">3000+</span>{" "}
                communities.
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7"
                  url="https://github.com/notken12/remember?tab=readme-ov-file"
                >
                  Remember
                </LinkPreview>
                <Badge variant={"default"}>🏆 1st @ HackMIT - Healthcare</Badge>
              </div>

              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                AI memory recall therapist for Alzheimer’s patients. Runs on smart glasses, records user's day, and uses study-backed therapy techniques to train recall. &nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://hackmit.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
                  HackMIT 2025
                </a>
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <div className="flex flex-row gap-2 items-center">
                  <LinkPreview
                    className="font-semibold text-primary underline underline-offset-4 leading-7"
                    url="https://github.com/HyunLee8/wallhax"
                  >
                    WallHax
                  </LinkPreview>
                  <span className="text-muted-foreground text-sm">&#8226;</span>
                  <LinkPreview
                    className="font-semibold text-primary underline-offset-4 leading-7 flex items-center"
                    url="https://youtu.be/II26dfXLtV0"
                  >
                    <TvMinimalPlay className="size-4" />&nbsp;&nbsp;Demo
                  </LinkPreview>
                </div>
                <Badge variant={"default"}>🏆 1st @ HooHacks - AI</Badge>
              </div>

              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                AR that disaster response teams see teammates through walls and review a 3D replay of their mission.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://hoohacks.io"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
                  HooHacks 2026
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
                Automatically add license headers to source code with just one
                command.&nbsp;
                <span className="font-mono font-semibold">25000+</span>
                &nbsp;downloads.
              </p>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:gap-y-6 mt-6">
              <div className="flex flex-row gap-4 items-center">
                <Mail className="size-5" />
                <a
                  href="mailto:kenzhou084@gmail.com"
                  className=" underline underline-offset-4 mb-[0.1rem]"
                >
                  Say hi
                </a>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-start">
            <div className="flex gap-4 flex-row w-full items-center mt-7 flex-wrap">
              <p className="text-sm text-muted-foreground">
                Portfolio design by{" "}
                <a
                  href="https://github.com/notken12"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  Ken Zhou
                </a>
                .&nbsp;Use with attribution is welcome.&nbsp;
                <a
                  href="https://github.com/notken12/portfolio"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  Source
                </a>
              </p>
              <hr className="flex-grow"></hr>
              <div className="flex gap-4">
                <a href="https://github.com/notken12" target="_blank">
                  <Image
                    src="/images/github-mark.svg"
                    width={98}
                    height={96}
                    alt="Github"
                    className="w-6 h-6 contrast-50 dark:invert dark:contrast-100"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ken-zhou-8013bb242/"
                  target="_blank"
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={800}
                    height={800}
                    className="w-6 h-6 block dark:hidden rounded filter contrast-[.3]"
                  />
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={800}
                    height={800}
                    className="w-6 h-6 hidden dark:block rounded"
                    style={{
                      filter: "invert(100%) brightness(88%) contrast(90%)",
                    }}
                  />
                </a>
                <a href="/photography">
                  <Aperture className="w-6 h-6" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
