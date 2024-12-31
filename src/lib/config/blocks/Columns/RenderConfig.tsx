"use client"

import { ComponentConfig, DropZone } from "@measured/puck"

export type ColumnsProps = {
  distribution: "auto" | "manual"
  columns: {
    span?: number
    className?: string
  }[]
  className?: string
  gap?: string
}

export const RenderConfig: ComponentConfig<ColumnsProps> = {
  render: ({ columns, distribution, className, gap }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: distribution === "manual" ? "repeat(12, 1fr)" : `repeat(${columns.length}, 1fr)`,
          gap: gap,
        }}
        className={className}
      >
        {columns.map(({ span, className }, idx) => (
          <div
            key={idx}
            style={{
              gridColumn: span && distribution === "manual" ? `span ${Math.max(Math.min(span, 12), 1)}` : "auto",
            }}
            className={className ?? ""}
          >
            <DropZone zone={`column-${idx}`} />
          </div>
        ))}
      </div>
    )
  },
}
