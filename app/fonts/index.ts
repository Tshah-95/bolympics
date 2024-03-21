import localFont from "next/font/local";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = localFont({
  src: [
    {
      path: "./Inter/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Inter/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Inter/Inter-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});
