import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "960px",
      lg: "1180px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
      },
      screens: {
        sm: "768px",
        md: "960px",
        lg: "1180px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        black: {
          DEFAULT: "#000000",
          secondary: "#00000066",
          tertiary: "#31343E",
          quaternary: "#302E2E",
        },
        blue: {
          DEFAULT: "#007AFF",
          secondary: "#08395C",
        },
        white: {
          DEFAULT: "#FFFFFF",
          secondary: "#F5F6FE",
          tertiary: "#F6F5FA",
        },
        gray: {
          DEFAULT: "#777777",
          secondary: "#AEAEB2",
          tertiary: "#E5E5EA",
        },
        green: {
          DEFAULT: "#00A19A",
          secondary: "#00847F",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      padding: {
        "1.75": "0.4375rem",
        "4.25": "1.0625rem",
        "25": "6.25rem",
      },
      lineHeight: {
        "3.5": "0.875rem",
        "5.25": "1.3125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "10.5": "2.625rem",
        "12": "3rem",
      },
      fontSize: {
        "4.25": "0.8125rem",
        "2.5xl": "1.5rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "6.5xl": "4rem",
      },
      margin: {
        "12": "3rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "20": "5rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "24": "6rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
      },
      gap: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "14.5": "3.625rem",
        "15.5": "3.875rem",
        "16.5": "4.125rem",
        "17.5": "4.375rem",
        "18.5": "4.625rem",
        "19.5": "4.875rem",
        "20.5": "5.125rem",
        "21.5": "5.375rem",
        "22.5": "5.625rem",
        "23.5": "5.875rem",
        "25": "6.25rem",
        "25.5": "6.375rem",
      },
      boxShadow: {
        custom: "5px 8px 32px 9px #0000000D",
      },
      backdropBlur: {
        "24": "24px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #6D428C -5.58%, #00A29A 106.62%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        open_sans: ["var(--font-open_sans)"],
      },
      keyframes: {
        fadeInScale: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeInScale 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
