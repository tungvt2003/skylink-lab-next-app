"use client"
import { configs, DefaultImage } from "../../external-components"
import { CommonCSSProps } from "./commonCSSProps"

interface PopularCSSProps extends CommonCSSProps {
  [k: string]: any
}

// Helper function to map all common CSS properties to CSS rules
const mapCSSPropsToStyles = (styles: PopularCSSProps) => {
  const {
    width,
    height,
    minHeight,
    maxWidth,
    maxHeight,
    margin,
    padding,
    display,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    customCSS,
    borderRadius,
    border,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    overflow,
    overflowX,
    overflowY,
    opacity,
    visibility,
    transform,
    transition,
    boxShadow,
    textShadow,
    cursor,
    pointerEvents,
    userSelect,
    whiteSpace,
    wordBreak,
    wordWrap,
    letterSpacing,
    textTransform,
    textDecoration,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    backgroundAttachment,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    flexWrap,
    flexGrow,
    flexShrink,
    order,
    gridTemplateColumns,
    gridTemplateRows,
    gridColumnGap,
    gridRowGap,
    gridColumn,
    gridRow,
    gap,
    alignContent,
    placeItems,
    placeContent,
    placeSelf,
  } = styles || {}

  let styleRules = ""

  if (width) styleRules += `width: ${width}; `
  if (height) styleRules += `height: ${height}; `
  if (minHeight) styleRules += `min-height: ${minHeight}; `
  if (maxWidth) styleRules += `max-width: ${maxWidth}; `
  if (maxHeight) styleRules += `max-height: ${maxHeight}; `
  if (margin) styleRules += `margin: ${margin}; `
  if (padding) styleRules += `padding: ${padding}; `
  if (display) styleRules += `display: ${display}; `
  if (backgroundColor) styleRules += `background-color: ${backgroundColor}; `
  if (color) styleRules += `color: ${color}; `
  if (fontSize) styleRules += `font-size: ${fontSize}; `
  if (fontWeight) styleRules += `font-weight: ${fontWeight}; `
  if (lineHeight) styleRules += `line-height: ${lineHeight}; `
  if (textAlign) styleRules += `text-align: ${textAlign}; `
  if (borderRadius) styleRules += `border-radius: ${borderRadius}; `
  if (border) styleRules += `border: ${border}; `
  if (position) styleRules += `position: ${position}; `
  if (top) styleRules += `top: ${top}; `
  if (right) styleRules += `right: ${right}; `
  if (bottom) styleRules += `bottom: ${bottom}; `
  if (left) styleRules += `left: ${left}; `
  if (zIndex) styleRules += `z-index: ${zIndex}; `
  if (overflow) styleRules += `overflow: ${overflow}; `
  if (overflowX) styleRules += `overflow-x: ${overflowX}; `
  if (overflowY) styleRules += `overflow-y: ${overflowY}; `
  if (opacity) styleRules += `opacity: ${opacity}; `
  if (visibility) styleRules += `visibility: ${visibility}; `
  if (transform) styleRules += `transform: ${transform}; `
  if (transition) styleRules += `transition: ${transition}; `
  if (boxShadow) styleRules += `box-shadow: ${boxShadow}; `
  if (textShadow) styleRules += `text-shadow: ${textShadow}; `
  if (cursor) styleRules += `cursor: ${cursor}; `
  if (pointerEvents) styleRules += `pointer-events: ${pointerEvents}; `
  if (userSelect) styleRules += `user-select: ${userSelect}; `
  if (whiteSpace) styleRules += `white-space: ${whiteSpace}; `
  if (wordBreak) styleRules += `word-break: ${wordBreak}; `
  if (wordWrap) styleRules += `word-wrap: ${wordWrap}; `
  if (letterSpacing) styleRules += `letter-spacing: ${letterSpacing}; `
  if (textTransform) styleRules += `text-transform: ${textTransform}; `
  if (textDecoration) styleRules += `text-decoration: ${textDecoration}; `
  if (backgroundImage) styleRules += `background-image: url(${backgroundImage}); `
  if (backgroundSize) styleRules += `background-size: ${backgroundSize}; `
  if (backgroundPosition) styleRules += `background-position: ${backgroundPosition}; `
  if (backgroundRepeat) styleRules += `background-repeat: ${backgroundRepeat}; `
  if (backgroundAttachment) styleRules += `background-attachment: ${backgroundAttachment}; `
  if (flexDirection) styleRules += `flex-direction: ${flexDirection}; `
  if (justifyContent) styleRules += `justify-content: ${justifyContent}; `
  if (alignItems) styleRules += `align-items: ${alignItems}; `
  if (alignSelf) styleRules += `align-self: ${alignSelf}; `
  if (flexWrap) styleRules += `flex-wrap: ${flexWrap}; `
  if (flexGrow) styleRules += `flex-grow: ${flexGrow}; `
  if (flexShrink) styleRules += `flex-shrink: ${flexShrink}; `
  if (order) styleRules += `order: ${order}; `
  if (gridTemplateColumns) styleRules += `grid-template-columns: ${gridTemplateColumns}; `
  if (gridTemplateRows) styleRules += `grid-template-rows: ${gridTemplateRows}; `
  if (gridColumnGap) styleRules += `grid-column-gap: ${gridColumnGap}; `
  if (gridRowGap) styleRules += `grid-row-gap: ${gridRowGap}; `
  if (gridColumn) styleRules += `grid-column: ${gridColumn}; `
  if (gridRow) styleRules += `grid-row: ${gridRow}; `
  if (gap) styleRules += `gap: ${gap}; `
  if (alignContent) styleRules += `align-content: ${alignContent}; `
  if (placeItems) styleRules += `place-items: ${placeItems}; `
  if (placeContent) styleRules += `place-content: ${placeContent}; `
  if (placeSelf) styleRules += `place-self: ${placeSelf}; `

  if (customCSS) styleRules += `${customCSS}; `

  return styleRules
}

const generateResponsiveCSSDesktopFirst = (id: string, responsiveStyles: any) => {
  // Sort the breakpoints in the correct order from desktop to mobile
  const sortedBreakpoints = {
    desktop: responsiveStyles.desktop,
    tablet: responsiveStyles.tablet,
    mobile: responsiveStyles.mobile,
  }

  let styleRules = ""
  // Generate CSS for each breakpoint
  Object.keys(sortedBreakpoints).forEach(breakpoint => {
    const styles = responsiveStyles[breakpoint]
    const cssProps = mapCSSPropsToStyles(styles)

    // Desktop-first styles (base styles)
    if (breakpoint === "desktop") {
      styleRules += `.${id} { ${cssProps} }\n`
    } else {
      // Use correct media queries for tablet and mobile
      const mediaQuery = breakpoint === "tablet" ? "(max-width: 1023px)" : "(max-width: 767px)"
      styleRules += `@media ${mediaQuery} { .${id} { ${cssProps} } }\n`
    }
  })

  return <style>{styleRules}</style>
}

// Helper function to generate responsive CSS for multiple breakpoints
export const generateResponsiveCSS = (id: string, responsiveStyles: any, responsiveType = "mobileFirst") => {
  if (responsiveType === "desktopFirst") {
    return generateResponsiveCSSDesktopFirst(id, responsiveStyles)
  }

  const sortedBreakpoints = {
    mobile: responsiveStyles.mobile,
    tablet: responsiveStyles.tablet,
    desktop: responsiveStyles.desktop,
  }

  let styleRules = ""

  // Generate CSS for each breakpoint
  Object.keys(sortedBreakpoints).forEach(breakpoint => {
    const styles = responsiveStyles[breakpoint]
    const cssProps = mapCSSPropsToStyles(styles)

    // Mobile-first styles (base styles)
    if (breakpoint === "mobile") {
      styleRules += `.${id} { ${cssProps} }\n`
    } else {
      // Use correct media queries for tablet and desktop
      const mediaQuery = breakpoint === "tablet" ? "(min-width: 768px) and (max-width: 1023px)" : "(min-width: 1024px)"
      styleRules += `@media ${mediaQuery} { .${id} { ${cssProps} } }\n`
    }
  })

  return <style>{styleRules}</style>
}

export const tryParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    return null
  }
}

export const getImageUrl = (image: string | null | undefined): string => {
  const API_URL = configs.API_URL
  return image ? `${API_URL}${image}` : DefaultImage
}
