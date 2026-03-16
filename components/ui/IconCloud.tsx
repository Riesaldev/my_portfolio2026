"use client";
import Image from "next/image";
import {  useMemo } from "react";
import { useTheme } from "next-themes";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";

import * as simpleIcons from 'simple-icons';

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "1rem",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "transparent",
    maxSpeed: 0.02,
    minSpeed: 0.02,
    dragControl: true,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs = [], imageArray }) {
  const { theme } = useTheme();

  // Calcular los íconos directamente
  const icons = useMemo(() => {
    return iconSlugs
      .map((slug) =>
        Object.values(simpleIcons).find((icon) => icon.slug === slug)
      )
      .filter(Boolean);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    return icons.map((icon) => renderCustomIcon(icon, theme || "dark"));
  }, [icons, theme]);

  return (
    <Cloud label="Icon Cloud" {...cloudProps}>
      <>
        {renderedIcons}

        {imageArray?.map((image, index) => (
          <a key={index} href="#" onClick={(e) => e.preventDefault()}>
            <Image height="42" width="42" alt="A globe" src={image} />
          </a>
        ))}
      </>
    </Cloud>
  );
}
