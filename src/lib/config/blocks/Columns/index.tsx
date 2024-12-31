import { ComponentConfig } from "@measured/puck"
import { ColumnsProps, RenderConfig } from "./RenderConfig"

export const Columns: ComponentConfig<ColumnsProps> = {
  label: "Columns",
  fields: {
    distribution: {
      label: "Distribution",
      type: "radio",
      options: [
        {
          value: "auto",
          label: "Auto",
        },
        {
          value: "manual",
          label: "Manual",
        },
      ],
    },
    columns: {
      label: "Columns",
      type: "array",
      getItemSummary: (col, id = -1) =>
        `Column ${id + 1}, span ${col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"}`,
      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
          min: 0,
          max: 12,
        },
        className: {
          label: "Class",
          type: "text",
        },
      },
    },
    gap: {
      label: "Gap",
      type: "text",
    },
    className: {
      type: "text",
      label: "Class",
    },
  },
  defaultProps: {
    distribution: "auto",
    columns: [{}, {}],
    className: "",
    gap: "0.625rem",
  },
  ...RenderConfig,
}
