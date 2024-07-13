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
            <LinkPreview url="https://arcadecord.com">
              I&apos;m currently making...
            </LinkPreview>
          </h2>
          <CardContainer className="m-[-4rem] p-[4rem] mb-[-0.5rem] pb-[0.5rem]">
            <CardBody className="flex flex-col gap-4 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="35"
                className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
              >
                Arcadecord
              </CardItem>
              <CardItem
                as="p"
                translateZ="45"
                className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
              >
                The GamePigeon of Discord. Play fun minigames with friends in
                Discord.
              </CardItem>
              {/* <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem> */}
              <div className="flex justify-between items-center">
                <CardItem translateZ={20}>
                  <LinkPreview
                    url="https://arcadecord.com"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Try now →
                  </LinkPreview>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="m-[-4rem] p-[4rem] mt-[-0.5rem] pt-[0.5rem]">
            <CardBody className="flex flex-col gap-4 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="35"
                className="text-xl font-bold text-neutral-600 dark:text-white leading-none"
              >
                Arcadecord
              </CardItem>
              <CardItem
                as="p"
                translateZ="45"
                className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
              >
                The GamePigeon of Discord. Play fun minigames with friends in
                Discord.
              </CardItem>
              {/* <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem> */}
              <div className="flex justify-between items-center">
                <CardItem translateZ={20}>
                  <LinkPreview
                    url="https://arcadecord.com"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Try now →
                  </LinkPreview>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </CardContent>
      </Card>
    </div>
  );
}
