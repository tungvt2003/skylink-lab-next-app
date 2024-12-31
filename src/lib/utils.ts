import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "./external-components"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const replaceImageUrls = (content: string) => {
  const currentDomain = process.env.NEXT_PUBLIC_OLD_IMAGE_URL
  const newDomain = process.env.NEXT_PUBLIC_URL_IMAGES_PRODUCTION

  if (!currentDomain || !newDomain) {
    throw new Error("Environment variables CURRENT and DOMAIN must be set")
  }

  const regex = new RegExp(`${currentDomain.replace(/\/$/, "")}(/?)`, "g")

  const updatedContent = content.replace(regex, `${newDomain}/`)

  return updatedContent
}

export const dateFormat = (date: string, locale: string): string => {
  const parsedDate = new Date(date)

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format")
  }

  return parsedDate.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function generateImagePath(
  inputPath: string | null | undefined,
  sizeType: "thumbnail" | "small" | "medium" | "large" | "original",
) {
  if (!inputPath) {
    return DefaultImage;
  }

  // Define allowed size types
  const allowedSizeTypes = ["thumbnail", "small", "medium", "large", "original"];

  if (sizeType === "original") {
    return `${configs.API_URL}${inputPath}`;
  }

  // Validate sizeType
  if (!allowedSizeTypes.includes(sizeType)) {
    throw new Error(`Invalid size type. Allowed values are: ${allowedSizeTypes.join(", ")}`);
  }

  // Try-catch to handle errors and fallback to original if needed
  try {
    // Extract the filename from the input path
    const filename = inputPath.split("/").pop() as string;

    // Construct the new path with the size type
    return `${configs.API_URL}${inputPath.replace(filename, `${sizeType}_${filename}`)}`;
  } catch (error) {
    // If any error occurs, return the original image
    console.error("Error generating image path, falling back to original image:", error);
    return `${configs.API_URL}${inputPath}`;
  }
}
