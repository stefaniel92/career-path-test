import Image, { ImageProps } from "next/image";
import styles from "./colour-icon.module.css";
import { JSX } from "react";
import { clsx } from "clsx";

export type TIconVariants = "orange" | "purple" | "yellow";

export type TColourIcon = {
  variant: TIconVariants;
  image: ImageProps;
  className?: string;
};

export const ColourIcon = ({
  variant,
  image,
  className,
}: TColourIcon): JSX.Element => {
  return (
    <div
      className={clsx(styles.base, styles[variant], className ? className : "")}
    >
      <Image
        {...image}
        alt=""
        className={styles.image}
        width={32}
        height={32}
      />
    </div>
  );
};
