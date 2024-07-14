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

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <Card className="max-w-96">
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
              <CardBody className="flex flex-col gap-4 bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  as={"h3"}
                  className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
                  translateZ={15}
                >
                  Arcadecord
                </CardItem>
                <CardItem
                  as={"p"}
                  className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                  translateZ={10}
                >
                  The GamePigeon of Discord. Play fun minigames with friends in
                  Discord.
                </CardItem>

                <CardItem
                  className="flex justify-between items-center z-50"
                  translateZ={20}
                >
                  <LinkPreview
                    url="https://arcadecord.com"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Try now →
                  </LinkPreview>
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer
              className="m-[-4rem] p-[4rem] mb-[-0.5rem] pb-[0.5rem]"
              containerClassName="z-0"
            >
              <CardBody className="flex flex-col gap-4 bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  as={"h3"}
                  className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
                  translateZ={15}
                >
                  Arcadecord
                </CardItem>
                <CardItem
                  as={"p"}
                  className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                  translateZ={10}
                >
                  The GamePigeon of Discord. Play fun minigames with friends in
                  Discord.
                </CardItem>

                <CardItem
                  className="flex justify-between items-center z-50"
                  translateZ={20}
                >
                  <LinkPreview
                    url="https://arcadecord.com"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Try now →
                  </LinkPreview>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
