import Button from "./Button";
import { useRouter } from "next/router";
import clsx from "clsx";

interface Props {
  featureTitle: string;
  text: string;
  img: React.ReactNode;
  isImgLeft?: boolean;
  cta?: string;
  href?: string;
}

export default function FeatureHighlights({ featureTitle, text, img, isImgLeft, cta, href }: Props) {
  const router = useRouter();

  return (
    <div className="my-12">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className={clsx(isImgLeft ? "order-last" : "")}>
            <h2 className="text-2xl font-bold tracking-tight text-blue dark:text-blue-100 sm:text-3xl">
              {featureTitle}
            </h2>
            <div className="mt-6 leading-7 text-blue-500 whitespace-pre-line text-md dark:text-blue-300">
              {text}
            </div>
            <div className="mt-6">
              {cta && href && (
                <Button variant="minimal" size="sm" className="mb-8" onClick={() => router.push(href)}>
                  {cta}
                </Button>
              )}
            </div>
          </div>
          {img}
        </div>
      </div>
    </div>
  );
}
