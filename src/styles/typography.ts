import {ValueOf} from "@/src/types.ts";

export const FontWeight = {
    Bold: 700,
    SemiBold: 600,
    Medium: 500
} as const

type FontWeightValues = ValueOf<typeof FontWeight>

interface Typography {
    fontWeight: FontWeightValues
    fontSize: number
    lineHeight: number | string
    letterSpacing: number
    underLine?: boolean
}

export const createTypography = ({
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    underLine = false,
}: Typography) => `
    font-width: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${
        typeof lineHeight === 'number' ? `${lineHeight}%` : `${lineHeight}` 
    };
    letter-spacing: ${letterSpacing}px;
    ${underLine && 'text-decoration-line: underLine'};
`

export const typography = {
    K_28B: createTypography({
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 140,
        letterSpacing: -1.12,
    }),
    K_22B: createTypography({
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 140,
        letterSpacing: -0.88,
    }),
    K_20B: createTypography({
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 150,
        letterSpacing: -0.8,
    }),
    K_20M: createTypography({
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.8,
    }),
    K_18B: createTypography({
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 150,
        letterSpacing: -0.72,
    }),
    K_18M: createTypography({
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.72,
    }),
    K_16SB: createTypography({
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 150,
        letterSpacing: -0.32,
    }),
    K_16M: createTypography({
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.32,
    }),
    K_15SB: createTypography({
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 150,
        letterSpacing: -0.3,
    }),
    K_15M: createTypography({
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.3,
    }),
    K_15M_Underline: createTypography({
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.3,
        underLine: true,
    }),
    K_14SB: createTypography({
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 150,
        letterSpacing: -0.28,
    }),
    K_14SB_Underline: createTypography({
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 150,
        letterSpacing: -0.28,
        underLine: true,
    }),
    K_14M: createTypography({
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 150,
        letterSpacing: -0.28,
    }),
    K_12M: createTypography({
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 140,
        letterSpacing: -0.12,
    }),
    K_12M_Underline: createTypography({
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 140,
        letterSpacing: -0.12,
        underLine: true,
    }),
    K_11B: createTypography({
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 140,
        letterSpacing: 0,
    }),
} as const

export type TypographyTypes = keyof typeof typography