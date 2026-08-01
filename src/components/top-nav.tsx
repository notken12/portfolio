import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { navUrl, type Photo } from "@/lib/photos";

const photoTilts = [
  "-rotate-6 translate-y-0.5",
  "rotate-3 -translate-y-1",
  "-rotate-2 translate-y-1",
  "rotate-6 -translate-y-0.5",
  "-rotate-3 translate-y-1",
  "rotate-2 -translate-y-0.5",
  "-rotate-6 translate-y-0.5",
];

export function TopNav({ photos }: { photos: Photo[] }) {
  return (
    <header className="flex w-full items-center gap-4">
      {photos.length > 0 && (
        <Link
          href="/photography"
          aria-label="Photography"
          className="flex items-center"
        >
          {photos.map((photo, i) => (
            <div
              key={photo.slug}
              className={`relative shrink-0 -ml-1.5 first:ml-0 bg-white p-1 border border-neutral-300 shadow-sm transition-transform duration-200 hover:z-10 hover:scale-125 hover:rotate-0 ${photoTilts[i % photoTilts.length]} ${i >= 4 ? "hidden md:block" : ""}`}
            >
              <Image
                src={navUrl(photo)}
                alt={`Photo - ${photo.slug}`}
                width={160}
                height={160}
                className="size-9 object-cover"
              />
            </div>
          ))}
        </Link>
      )}
      <hr className="flex-grow" />
      <div className="flex gap-4 items-center">
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
        <ModeToggle className="h-6 w-6" />
      </div>
    </header>
  );
}
