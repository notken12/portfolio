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
import { Badge } from "@/components/ui/badge";
import { Code, Github, Linkedin, MapPin, MapPinned, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col flex-grow items-center justify-start bg-background dark:bg-neutral-800 lg:bg-neutral-350 lg:dark:bg-black">
      <div className="max-w-screen-md h-full p-8 bg-background shadow-[0px_0px_200px_220px_hsl(var(--background))] dark:bg-neutral-800 dark:shadow-[0px_0px_200px_220px_rgb(38_38_38_/_var(--tw-bg-opacity))]">
        <div className="flex flex-col flex-grow max-w-screen-md w-full mt-8 gap-8 mb-16">
          <section className="w-full flex flex-col items-start">
            <div className="flex flex-row justify-between w-full items-center mt-8">
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Hi, I'm Ken.
              </h1>
              <ModeToggle />
            </div>

            <p className="leading-7 [&:not(:first-child)]:mt-3">
              I'm a 18 year old full-stack developer who loves my dog Mango.
            </p>
          </section>

          <section className="w-full flex flex-col items-start mb-8">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight font-handwriting">
              🛠️ Currently building...
            </h2>
            <div className="h-7"></div>
            <CardContainer
              containerClassName="flex flex-grow w-full"
              className="flex flex-grow w-full"
              rotateness={100}
            >
              <CardBody className="border border-neutral-300 dark:border-neutral-700 w-full aspect-[8/5] sm:aspect-[16/9] bg-muted dark:bg-[#303030] rounded-md shadow-xl relative flex flex-col items-center">
                <div className="flex flex-col mb-4 sm:mb-8 flex-grow w-full">
                  <div
                    className="flex-grow relative flex"
                    style={{ perspective: "1000px" }}
                  >
                    <CardItem
                      as={"a"}
                      className="flex flex-col bg-neutral-200 dark:bg-muted shadow-xl border border-neutral-350 dark:border-neutral-700 rounded-md h-fit self-start absolute top-[28%] left-[16%] w-[30%] -rotate-6"
                      rotateZ={-6}
                      translateZ={30}
                      href="https://neurallab.vercel.app"
                      target="_blank"
                    >
                      <div className="flex justify-start p-1 gap-[0.2rem] h-4 items-center relative">
                        <div className="bg-red-500 rounded-full w-2 h-2"></div>
                        <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
                        <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        <p className="text-xs text-muted-foreground font-handwriting absolute inset-0 text-center leading-[1.1rem] hidden sm:block">
                          NeuralLab
                        </p>
                      </div>
                      <img
                        src="/images/neurallab.webp"
                        alt="NeuralLab UI"
                        fetchPriority="high"
                        className="shadow-md w-full h-auto rounded-b-md dark:hidden"
                      />
                      <img
                        src="/images/neurallab-dark.webp"
                        alt="NeuralLab UI"
                        fetchPriority="high"
                        className="shadow-md w-full h-auto rounded-b-md hidden dark:block"
                      />
                    </CardItem>
                    <CardItem
                      className="flex flex-col bg-neutral-200 dark:bg-muted shadow-xl bg-border dark:border-muted border-8 outline outline-1 outline-neutral-350 dark:outline-neutral-700 rounded-md h-fit self-start absolute top-[24%] right-[17%] w-[20%] rotate-6"
                      rotateZ={6}
                      translateZ={30}
                    >
                      {/* <div className="flex justify-start p-1 gap-[0.2rem] h-4 items-center">
                        <div className="bg-red-500 rounded-full w-2 h-2"></div>
                        <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
                        <div className="bg-green-500 rounded-full w-2 h-2"></div>
                      </div> */}
                      <img
                        src="/images/usbstation.webp"
                        alt="USB Charging Station"
                        fetchPriority="high"
                        className="shadow-md w-full h-auto rounded-b-md"
                      />
                      <p className="text-xs text-muted-foreground font-handwriting leading-none mt-1 mb-[-0.25rem]">
                        USB Station
                      </p>
                    </CardItem>
                  </div>
                  <div className="flex flex-row gap-7 justify-center items-center">
                    <img
                      src="/images/keyboard.svg"
                      alt="Keyboard"
                      fetchPriority="high"
                      className="h-10 sm:h-14  object-contain object-center shadow-md max-w-fit dark:hidden w-auto"
                    />
                    <img
                      src="/images/keyboard-dark.svg"
                      alt="Keyboard"
                      fetchPriority="high"
                      className="h-10 sm:h-14  object-contain object-center shadow-md max-w-fit hidden dark:block w-auto"
                    />
                    <img
                      src="/images/pen.svg"
                      alt="Pen"
                      fetchPriority="high"
                      className="h-12 sm:h-16 object-contain object-center max-w-fit dark:hidden w-auto"
                    />
                    <img
                      src="/images/pen-dark.svg"
                      alt="Pen"
                      fetchPriority="high"
                      className="h-12 sm:h-16 object-contain object-center max-w-fit hidden dark:block w-auto"
                    />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
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
                  url="https://cider-app.vercel.app"
                >
                  Cider
                </LinkPreview>
                <Badge variant={"default"}>🏆 Best Lifestyle Hack</Badge>
              </div>

              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Add reminders, agendas, and events from documents into your
                calendar automatically using AI.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://hacktj.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
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
                <Badge variant={"default"}>
                  <a
                    href="https://youtu.be/ON7P5-9bsa4?si=07h1pzzJWax6ox_5&t=263"
                    target="_blank"
                  >
                    🏆 Best Product Innovation
                  </a>
                </Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Simplify tedious and error prone machining calculations with
                this voice-powered calculator, even with dirty hands.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://venturecamp.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
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
                Automatically add license headers to source code with just one
                command.&nbsp;
                <span className="font-mono font-semibold">10000+</span>
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
                Developed with computer vision and medical databases.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://www.hackthenest.org/"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
                  Hack the Nest
                </a>
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7 text-nowrap"
                  url="https://github.com/notken12/mangochat"
                >
                  MangoChat
                </LinkPreview>
                <Badge variant={"default"}>
                  <a
                    href="https://devpost.com/software/mango-chat"
                    target="_blank"
                  >
                    🏆 Best Overall Hack
                  </a>
                </Badge>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Chat and send money securely using end-to-end encryption and
                decentralized storage & currency.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://hacktj.org"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
                  HackTJ 9.0
                </a>
              </p>

              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal items-center gap-1 sm:items-end mb-4 sm:mb-0">
                <LinkPreview
                  className="font-semibold text-primary underline underline-offset-4 leading-7 text-nowrap"
                  url="https://mypantry-notken12.vercel.app/"
                >
                  MyPantry
                </LinkPreview>
              </div>
              <p className="leading-7 mb-6 sm:mb-0 sm:ml-4">
                Discover and run pantries. Track available goods and
                donate/check out items.&nbsp;
                <a
                  className="text-muted-foreground text-sm underline underline-offset-4 text-nowrap"
                  href="https://www.congressionalappchallenge.us/"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 inline-flex align-text-top mr-1" />
                  Congressional App Challenge
                </a>
              </p>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            {/* <h2 className="scroll-m-20 text-muted-foreground font-semibold tracking-tight flex gap-4 items-center">
              Contact me
            </h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:gap-y-6 mt-6">
              <div className="flex flex-row gap-4 items-center">
                <Mail />
                <a
                  href="mailto:kendotzhou@gmail.com"
                  className=" underline underline-offset-4 mb-[0.1rem]"
                >
                  Contact me
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
                  <img
                    src="/images/github-mark.svg"
                    alt="Github"
                    className="w-6 h-6 contrast-50 dark:invert dark:contrast-100"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ken-zhou-8013bb242/"
                  target="_blank"
                >
                  <img
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6 block dark:hidden rounded filter contrast-[.3]"
                  />
                  <img
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6 hidden dark:block rounded"
                    style={{
                      filter: "invert(100%) brightness(88%) contrast(90%)",
                    }}
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}