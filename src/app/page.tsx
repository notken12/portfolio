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

export default function Home() {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-grow items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundGradient className="max-w-96 p-0" containerClassName="p-0">
        <Card>
          <CardHeader>
            <CardTitle>Ken Zhou</CardTitle>
            <CardDescription>
              I&apos;m a high school senior in Northern Virginia. I love my dog
              Mango and building cool apps.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <h2 className="leading-none text-sm font-medium text-muted-foreground">
              🔨 I&apos;m currently making...
            </h2>
            <div className="flex flex-col gap-4">
              <CardContainer
                className="m-[-4rem] p-[4rem] mb-[-0.5rem] pb-[0.5rem]"
                containerClassName="z-10"
              >
                <CardBody className="flex flex-col gap-2 bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <div className="flex flex-row items-center gap-3">
                    <CardItem as={Avatar} translateZ={15} className="w-6 h-6">
                      <AvatarImage src="/arcadecordicon.svg" />
                      <AvatarFallback></AvatarFallback>
                    </CardItem>
                    <CardItem
                      as={"h3"}
                      className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
                      translateZ={15}
                    >
                      Arcadecord
                    </CardItem>
                  </div>

                  <CardItem
                    as={"p"}
                    className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                    translateZ={10}
                  >
                    The GamePigeon of Discord. Play fun minigames with friends
                    in your servers.
                  </CardItem>

                  <CardItem
                    className="flex justify-between items-center mt-1"
                    translateZ={20}
                  >
                    <LinkPreview
                      url="https://arcadecord.com"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                    >
                      Try now &nbsp;→
                    </LinkPreview>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer
                className="m-[-4rem] p-[4rem] mb-[-0.5rem] pb-[0.5rem]"
                containerClassName="z-0"
              >
                <CardBody className="flex flex-col gap-2 bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <div className="flex flex-row items-center gap-3">
                    <CardItem
                      as={Avatar}
                      translateZ={15}
                      className="w-6 h-6 rounded-md"
                    >
                      <AvatarImage src="/machinistmath-icon.svg" />
                      <AvatarFallback></AvatarFallback>
                    </CardItem>
                    <CardItem
                      as={"h3"}
                      className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
                      translateZ={15}
                    >
                      MachinistMath
                    </CardItem>
                  </div>

                  <CardItem
                    as={"p"}
                    className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                    translateZ={10}
                  >
                    Simplify tedious and error prone machining calculations with
                    this voice-powered calculator, even when your hands are
                    dirty.
                  </CardItem>

                  <CardItem
                    className="flex justify-between items-center mt-1"
                    translateZ={20}
                  >
                    <LinkPreview
                      url="https://machinistmath.com"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                    >
                      Try now &nbsp;→
                    </LinkPreview>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </CardContent>
        </Card>
      </BackgroundGradient>
    </div>
  );
}
