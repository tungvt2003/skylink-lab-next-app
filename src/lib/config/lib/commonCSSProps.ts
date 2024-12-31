// commonCSSProps.ts
export const commonCSSProps = {
  //   id: {
  //     label: "ID",
  //     type: "text",
  //     placeholder: "Unique HTML ID for the component, e.g., 'component-1'",
  //   },
  display: {
    label: "Display",
    type: "select",
    options: [
      { value: "block", label: "Block" },
      { value: "flex", label: "Flex" },
      { value: "grid", label: "Grid" },
      { value: "inline", label: "Inline" },
      { value: "inline-block", label: "Inline Block" },
      { value: "inline-flex", label: "Inline Flex" },
      { value: "inline-grid", label: "Inline Grid" },
      { value: "none", label: "None" },
    ],
    description: "CSS display e.g., 'block', 'flex', etc.",
  },
  margin: {
    label: "Margin",
    type: "text",
    description: "CSS margin e.g., '0px 0px 0px 0px' (top, right, bottom, left)",
  },
  padding: {
    label: "Padding",
    type: "text",
    description: "CSS padding e.g., '0px 0px 0px 0px' (top, right, bottom, left)",
  },
  width: {
    label: "Width",
    type: "text",
    description: "CSS width e.g., '100%', '50px', 'auto'",
  },
  height: {
    label: "Height",
    type: "text",
    description: "CSS height e.g., '100px', 'auto'",
  },
  fontFamily: {
    label: "Font Family",
    type: "text",
  },
  minWidth: {
    label: "Min Width",
    type: "text",
    description: "Minimum width of the element, e.g., '50px', 'auto'",
  },
  minHeight: {
    label: "Min Height",
    type: "text",
    description: "Minimum height of the element, e.g., '50px', 'auto'",
  },
  maxWidth: {
    label: "Max Width",
    type: "text",
    description: "Maximum width of the element, e.g., '500px', '100%'",
  },
  maxHeight: {
    label: "Max Height",
    type: "text",
    description: "Maximum height of the element, e.g., '500px', 'none'",
  },
  backgroundColor: {
    label: "Background Color",
    type: "text",
    description: "Background color of the element, e.g., '#ffffff', 'transparent'",
  },
  backgroundImage: {
    label: "Background Image",
    type: "text",
    description: "Background image URL, e.g., 'url(\"image.jpg\")'",
  },
  borderRadius: {
    label: "Border Radius",
    type: "text",
  },
  color: {
    label: "Text Color",
    type: "text",
    description: "Text color of the element, e.g., '#000000', 'inherit'",
  },
  fontSize: {
    label: "Font Size",
    type: "text",
    description: "Font size of the text, e.g., '16px', '1.5rem', 'inherit'",
  },
  fontWeight: {
    label: "Font Weight",
    type: "text",
    description: "Font weight of the text, e.g., 'normal', 'bold'",
  },
  lineHeight: {
    label: "Line Height",
    type: "text",
    description: "Line height of the text, e.g., '1.5', 'normal'",
  },
  textAlign: {
    label: "Text Align",
    type: "select",
    options: [
      { value: "left", label: "Left" },
      { value: "center", label: "Center" },
      { value: "right", label: "Right" },
      { value: "justify", label: "Justify" },
    ],
    description: "Text alignment, e.g., 'left', 'center', 'right', 'justify'",
  },
  alignItems: {
    label: "Align Items",
    type: "select",
    options: [
      { value: "flex-start", label: "Flex Start" },
      { value: "flex-end", label: "Flex End" },
      { value: "center", label: "Center" },
      { value: "baseline", label: "Baseline" },
      { value: "stretch", label: "Stretch" },
    ],
  },
  alignContent: {
    label: "Align Content",
    type: "select",
    options: [
      { value: "flex-start", label: "Flex Start" },
      { value: "flex-end", label: "Flex End" },
      { value: "center", label: "Center" },
      { value: "space-between", label: "Space Between" },
      { value: "space-around", label: "Space Around" },
      { value: "stretch", label: "Stretch" },
    ],
  },
  justifyContent: {
    label: "Justify Content",
    type: "select",
    options: [
      { value: "flex-start", label: "Flex Start" },
      { value: "flex-end", label: "Flex End" },
      { value: "center", label: "Center" },
      { value: "space-between", label: "Space Between" },
      { value: "space-around", label: "Space Around" },
      { value: "space-evenly", label: "Space Evenly" },
    ],
  },
  justifyItems: {
    label: "Justify Items",
    type: "select",
    options: [
      { value: "start", label: "Start" },
      { value: "end", label: "End" },
      { value: "center", label: "Center" },
      { value: "stretch", label: "Stretch" },
    ],
  },
  flexDirection: {
    label: "Flex Direction",
    type: "select",
    options: [
      { value: "row", label: "Row" },
      { value: "column", label: "Column" },
      { value: "row-reverse", label: "Row Reverse" },
      { value: "column-reverse", label: "Column Reverse" },
    ],
  },
  gap: {
    label: "Gap",
    type: "text",
  },
  customCSS: {
    label: "Custom CSS",
    type: "textarea",
    description: "Enter raw CSS styles, e.g., 'border: 1px solid black; padding: 10px;'",
  },
}

// commonDefaultProps.ts
export const commonDefaultProps = {
  id: "", // Default ID is an empty string
  display: "block", // Default display property
  margin: "0px 0px 0px 0px", // Default margin
  padding: "0px 0px 0px 0px", // Default padding
  width: "100%", // Default width is 100%
  height: "auto", // Default height is auto
  minWidth: "0", // Default min-width is 0
  minHeight: "auto", // Default min-height is auto
  maxWidth: "100%", // Default max-width is 100%
  maxHeight: "none", // Default max-height is none
  backgroundColor: "", // Default background color is transparent
  backgroundImage: 'url("path/to/image.jpg")', // Default background image is empty
  color: "inherit", // Default text color is inherited
  fontSize: "inherit", // Default font size is inherited
  fontWeight: "normal", // Default font weight is normal
  lineHeight: "normal", // Default line-height is normal
  textAlign: "left", // Default text alignment is left
  fontFamily: "Inter", // Default font family is inherited
  gap: "0px", // Default gap is 0px
  borderRadius: "0px", // Default border radius is 0px
  flexDirection: "row", // Default flex direction is row
  customCSS: "", // Default custom CSS is empty
}

export const commonDefaultStylesProps = {
  styles: {
    mobile: { ...commonDefaultProps },
    tablet: { ...commonDefaultProps },
    desktop: { ...commonDefaultProps },
  },
  className: "",
  responsiveType: "mobileFirst",
  animation: {
    "data-aos": "",
    "data-aos-duration": "",
  },
}

// commonCSSProps.ts
export type CommonCSSProps = {
  id?: string // HTML id attribute
  display?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  backgroundColor?: string
  backgroundImage?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  textAlign?: string
  alignItems?: string
  alignContent?: string
  justifyContent?: string
  justifyItems?: string
  fontFamily?: string
  borderRadius?: string
  border?: string
  gap?: string
  flexDirection?: string
  customCSS?: React.CSSProperties // Allow passing custom inline styles
}

export interface CommonStylesProps {
  styles?: {
    mobile?: CommonCSSProps
    tablet?: CommonCSSProps
    desktop?: CommonCSSProps
  }
  className: string
  responsiveType?: "desktopFirst" | "mobileFirst"
  animation?: any
}

export const commonStylesProps = {
  className: {
    type: "text",
    label: "Class Name",
  },
  responsiveType: {
    type: "radio",
    label: "Responsive Type",
    options: [
      { value: "mobileFirst", label: "Mobile First" },
      { value: "desktopFirst", label: "Desktop First" },
    ],
  },
  animation: {
    type: "object",
    label: "Animation",
    objectFields: {
      "data-aos": {
        type: "text",
        label: "Data Aos",
      },
      "data-aos-duration": {
        type: "text",
        label: "Data Aos Duration",
      },
    },
  },
  styles: {
    type: "object",
    label: "Styles",
    objectFields: {
      desktop: {
        type: "object",
        label: "Desktop",
        objectFields: {
          ...commonCSSProps, // Include common CSS props for desktop
        },
      },
      mobile: {
        type: "object",
        label: "Mobile",
        objectFields: {
          ...commonCSSProps, // Include common CSS props for mobile
        },
      },
      tablet: {
        type: "object",
        label: "Tablet",
        objectFields: {
          ...commonCSSProps, // Include common CSS props for tablet
        },
      },
    },
  },
}
