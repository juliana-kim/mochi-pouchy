/**
 * Setup global style and theme
 * - font
 * - root color theme
 * - normalize style
 * */

import { css } from '@emotion/react'

import PretendardBold from '@styles/font/pretendard/Pretendard-Bold.subset.woff2'
import PretendardMedium from '@styles/font/pretendard/Pretendard-Medium.subset.woff2'
import PretendardSemiBold from '@styles/font/pretendard/Pretendard-SemiBold.subset.woff2'
import { colors, palette } from "@styles/colors";
import { typography } from "@styles/typography";

export const globalStyles = css`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: url(${PretendardBold}) format('woff2')
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: url(${PretendardSemiBold}) format('woff2');
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: url(${PretendardMedium}) format('woff2');
    }

    :root {
        --colors-colors-default-Violet: ${palette.light.colors.default.Violet};
        --colors-colors-default-Violet100: ${palette.light.colors.default
                .Violet100};
        --colors-colors-default-Violet200: ${palette.light.colors.default
                .Violet200};
        --colors-colors-default-Violet300: ${palette.light.colors.default
                .Violet300};
        --colors-colors-default-Violet400: ${palette.light.colors.default
                .Violet400};
        --colors-colors-default-Violet500: ${palette.light.colors.default
                .Violet500};
        --colors-colors-default-Violet600: ${palette.light.colors.default
                .Violet600};
        --colors-colors-default-Violet700: ${palette.light.colors.default
                .Violet700};
        --colors-colors-default-Violet800: ${palette.light.colors.default
                .Violet800};
        --colors-colors-default-Violet900: ${palette.light.colors.default
                .Violet900};
        --colors-colors-default-Blue: ${palette.light.colors.default.Blue};
        --colors-colors-default-Blue100: ${palette.light.colors.default.Blue100};
        --colors-colors-default-Blue200: ${palette.light.colors.default.Blue200};
        --colors-colors-default-Blue300: ${palette.light.colors.default.Blue300};
        --colors-colors-default-Blue400: ${palette.light.colors.default.Blue400};
        --colors-colors-default-Blue500: ${palette.light.colors.default.Blue500};
        --colors-colors-default-Blue600: ${palette.light.colors.default.Blue600};
        --colors-colors-default-Blue700: ${palette.light.colors.default.Blue700};
        --colors-colors-default-Blue800: ${palette.light.colors.default.Blue800};
        --colors-colors-default-Blue900: ${palette.light.colors.default.Blue900};
        --colors-colors-default-Sky: ${palette.light.colors.default.Sky};
        --colors-colors-default-Sky100: ${palette.light.colors.default.Sky100};
        --colors-colors-default-Sky200: ${palette.light.colors.default.Sky200};
        --colors-colors-default-Sky300: ${palette.light.colors.default.Sky300};
        --colors-colors-default-Sky400: ${palette.light.colors.default.Sky400};
        --colors-colors-default-Sky500: ${palette.light.colors.default.Sky500};
        --colors-colors-default-Sky600: ${palette.light.colors.default.Sky600};
        --colors-colors-default-Sky700: ${palette.light.colors.default.Sky700};
        --colors-colors-default-Sky800: ${palette.light.colors.default.Sky800};
        --colors-colors-default-Sky900: ${palette.light.colors.default.Sky900};
        --colors-colors-default-Green: ${palette.light.colors.default.Green};
        --colors-colors-default-Green100: ${palette.light.colors.default.Green100};
        --colors-colors-default-Green200: ${palette.light.colors.default.Green200};
        --colors-colors-default-Green300: ${palette.light.colors.default.Green300};
        --colors-colors-default-Green400: ${palette.light.colors.default.Green400};
        --colors-colors-default-Green500: ${palette.light.colors.default.Green500};
        --colors-colors-default-Green600: ${palette.light.colors.default.Green600};
        --colors-colors-default-Green700: ${palette.light.colors.default.Green700};
        --colors-colors-default-Green800: ${palette.light.colors.default.Green800};
        --colors-colors-default-Green900: ${palette.light.colors.default.Green900};
        --colors-colors-default-GreenHeader: ${palette.dark.colors.default.GreenHeader};
        --colors-colors-default-Yellow: ${palette.light.colors.default.Yellow};
        --colors-colors-default-Yellow100: ${palette.light.colors.default
                .Yellow100};
        --colors-colors-default-Yellow200: ${palette.light.colors.default
                .Yellow200};
        --colors-colors-default-Yellow300: ${palette.light.colors.default
                .Yellow300};
        --colors-colors-default-Yellow400: ${palette.light.colors.default
                .Yellow400};
        --colors-colors-default-Yellow500: ${palette.light.colors.default
                .Yellow500};
        --colors-colors-default-Yellow600: ${palette.light.colors.default
                .Yellow600};
        --colors-colors-default-Yellow700: ${palette.light.colors.default
                .Yellow700};
        --colors-colors-default-Yellow800: ${palette.light.colors.default
                .Yellow800};
        --colors-colors-default-Yellow900: ${palette.light.colors.default
                .Yellow900};
        --colors-colors-default-Gray: ${palette.light.colors.default.Gray};
        --colors-colors-default-Gray100: ${palette.light.colors.default.Gray100};
        --colors-colors-default-Gray200: ${palette.light.colors.default.Gray200};
        --colors-colors-default-Gray300: ${palette.light.colors.default.Gray300};
        --colors-colors-default-Gray400: ${palette.light.colors.default.Gray400};
        --colors-colors-default-Gray500: ${palette.light.colors.default.Gray500};
        --colors-colors-default-Gray600: ${palette.light.colors.default.Gray600};
        --colors-colors-default-Gray700: ${palette.light.colors.default.Gray700};
        --colors-colors-default-Gray800: ${palette.light.colors.default.Gray800};
        --colors-colors-default-Gray900: ${palette.light.colors.default.Gray900};
        --colors-colors-default-Black: ${palette.light.colors.default.Black};
        --colors-colors-default-Black_a70: ${palette.light.colors.default
                .Black_a70};
        --colors-colors-default-Black_a40: ${palette.light.colors.default
                .Black_a40};
        --colors-colors-default-Black_a20: ${palette.light.colors.default
                .Black_a20};
        --colors-colors-default-Black_a10: ${palette.light.colors.default
                .Black_a10};
        --colors-colors-default-Black_a5: ${palette.light.colors.default.Black_a5};
        --colors-colors-default-Black_a0: ${palette.light.colors.default.Black_a0};
        --colors-colors-default-BlackDimmed: ${palette.light.colors.default
                .BlackDimmed};
        --colors-colors-default-White: ${palette.light.colors.default.White};
        --colors-colors-default-White_a70: ${palette.light.colors.default
                .White_a70};
        --colors-colors-default-White_a40: ${palette.light.colors.default
                .White_a40};
        --colors-colors-default-White_a0: ${palette.light.colors.default.White_a0};
        --colors-colors-default-Red: ${palette.light.colors.default.Red};
        --colors-colors-default-Red200: ${palette.light.colors.default.Red200};
        --colors-colors-default-Red900: ${palette.light.colors.default.Red900};
        --colors-colors-default-KlaytnOrange: ${palette.light.colors.default
                .KlaytnOrange};
        --colors-colors-default-EthViolet: ${palette.light.colors.default
                .EthViolet};
        --colors-colors-default-PolygonViolet: ${palette.light.colors.default
                .PolygonViolet};
        --colors-colors-default-KakaoYellow: ${palette.light.colors.default
                .KakaoYellow};
        --colors-colors-default-Black_a70to0: ${palette.light.colors.default
                .Black_a70to0};
        --colors-colors-default-White_a0to100: ${palette.light.colors.default
                .White_a0to100};
        --colors-colors-default-White_a0to100v: ${palette.light.colors.default
                .White_a0to100v};
    }

    [data-theme='dark'] {
        --colors-colors-default-Violet: ${palette.dark.colors.default.Violet};
        --colors-colors-default-Violet100: ${palette.dark.colors.default.Violet100};
        --colors-colors-default-Violet200: ${palette.dark.colors.default.Violet200};
        --colors-colors-default-Violet300: ${palette.dark.colors.default.Violet300};
        --colors-colors-default-Violet400: ${palette.dark.colors.default.Violet400};
        --colors-colors-default-Violet500: ${palette.dark.colors.default.Violet500};
        --colors-colors-default-Violet600: ${palette.dark.colors.default.Violet600};
        --colors-colors-default-Violet700: ${palette.dark.colors.default.Violet700};
        --colors-colors-default-Violet800: ${palette.dark.colors.default.Violet800};
        --colors-colors-default-Violet900: ${palette.dark.colors.default.Violet900};
        --colors-colors-default-Blue: ${palette.dark.colors.default.Blue};
        --colors-colors-default-Blue100: ${palette.dark.colors.default.Blue100};
        --colors-colors-default-Blue200: ${palette.dark.colors.default.Blue200};
        --colors-colors-default-Blue300: ${palette.dark.colors.default.Blue300};
        --colors-colors-default-Blue400: ${palette.dark.colors.default.Blue400};
        --colors-colors-default-Blue500: ${palette.dark.colors.default.Blue500};
        --colors-colors-default-Blue600: ${palette.dark.colors.default.Blue600};
        --colors-colors-default-Blue700: ${palette.dark.colors.default.Blue700};
        --colors-colors-default-Blue800: ${palette.dark.colors.default.Blue800};
        --colors-colors-default-Blue900: ${palette.dark.colors.default.Blue900};
        --colors-colors-default-Sky: ${palette.dark.colors.default.Sky};
        --colors-colors-default-Sky100: ${palette.dark.colors.default.Sky100};
        --colors-colors-default-Sky200: ${palette.dark.colors.default.Sky200};
        --colors-colors-default-Sky300: ${palette.dark.colors.default.Sky300};
        --colors-colors-default-Sky400: ${palette.dark.colors.default.Sky400};
        --colors-colors-default-Sky500: ${palette.dark.colors.default.Sky500};
        --colors-colors-default-Sky600: ${palette.dark.colors.default.Sky600};
        --colors-colors-default-Sky700: ${palette.dark.colors.default.Sky700};
        --colors-colors-default-Sky800: ${palette.dark.colors.default.Sky800};
        --colors-colors-default-Sky900: ${palette.dark.colors.default.Sky900};
        --colors-colors-default-Green: ${palette.dark.colors.default.Green};
        --colors-colors-default-Green100: ${palette.dark.colors.default.Green100};
        --colors-colors-default-Green200: ${palette.dark.colors.default.Green200};
        --colors-colors-default-Green300: ${palette.dark.colors.default.Green300};
        --colors-colors-default-Green400: ${palette.dark.colors.default.Green400};
        --colors-colors-default-Green500: ${palette.dark.colors.default.Green500};
        --colors-colors-default-Green600: ${palette.dark.colors.default.Green600};
        --colors-colors-default-Green700: ${palette.dark.colors.default.Green700};
        --colors-colors-default-Green800: ${palette.dark.colors.default.Green800};
        --colors-colors-default-Green900: ${palette.dark.colors.default.Green900};
        --colors-colors-default-GreenHeader: ${palette.dark.colors.default.GreenHeader};
        --colors-colors-default-Yellow: ${palette.dark.colors.default.Yellow};
        --colors-colors-default-Yellow100: ${palette.dark.colors.default.Yellow100};
        --colors-colors-default-Yellow200: ${palette.dark.colors.default.Yellow200};
        --colors-colors-default-Yellow300: ${palette.dark.colors.default.Yellow300};
        --colors-colors-default-Yellow400: ${palette.dark.colors.default.Yellow400};
        --colors-colors-default-Yellow500: ${palette.dark.colors.default.Yellow500};
        --colors-colors-default-Yellow600: ${palette.dark.colors.default.Yellow600};
        --colors-colors-default-Yellow700: ${palette.dark.colors.default.Yellow700};
        --colors-colors-default-Yellow800: ${palette.dark.colors.default.Yellow800};
        --colors-colors-default-Yellow900: ${palette.dark.colors.default.Yellow900};
        --colors-colors-default-Gray: ${palette.dark.colors.default.Gray};
        --colors-colors-default-Gray100: ${palette.dark.colors.default.Gray100};
        --colors-colors-default-Gray200: ${palette.dark.colors.default.Gray200};
        --colors-colors-default-Gray300: ${palette.dark.colors.default.Gray300};
        --colors-colors-default-Gray400: ${palette.dark.colors.default.Gray400};
        --colors-colors-default-Gray500: ${palette.dark.colors.default.Gray500};
        --colors-colors-default-Gray600: ${palette.dark.colors.default.Gray600};
        --colors-colors-default-Gray700: ${palette.dark.colors.default.Gray700};
        --colors-colors-default-Gray800: ${palette.dark.colors.default.Gray800};
        --colors-colors-default-Gray900: ${palette.dark.colors.default.Gray900};
        --colors-colors-default-Black: ${palette.dark.colors.default.Black};
        --colors-colors-default-Black_a70: ${palette.dark.colors.default.Black_a70};
        --colors-colors-default-Black_a40: ${palette.dark.colors.default.Black_a40};
        --colors-colors-default-Black_a20: ${palette.dark.colors.default.Black_a20};
        --colors-colors-default-Black_a10: ${palette.dark.colors.default.Black_a10};
        --colors-colors-default-Black_a5: ${palette.dark.colors.default.Black_a5};
        --colors-colors-default-Black_a0: ${palette.dark.colors.default.Black_a0};
        --colors-colors-default-BlackDimmed: ${palette.dark.colors.default
                .BlackDimmed};
        --colors-colors-default-White: ${palette.dark.colors.default.White};
        --colors-colors-default-White_a70: ${palette.dark.colors.default.White_a70};
        --colors-colors-default-White_a40: ${palette.dark.colors.default.White_a40};
        --colors-colors-default-White_a0: ${palette.dark.colors.default.White_a0};
        --colors-colors-default-Red: ${palette.dark.colors.default.Red};
        --colors-colors-default-Red200: ${palette.dark.colors.default.Red200};
        --colors-colors-default-Red900: ${palette.dark.colors.default.Red900};
        --colors-colors-default-KlaytnOrange: ${palette.dark.colors.default
                .KlaytnOrange};
        --colors-colors-default-EthViolet: ${palette.dark.colors.default.EthViolet};
        --colors-colors-default-PolygonViolet: ${palette.dark.colors.default
                .PolygonViolet};
        --colors-colors-default-KakaoYellow: ${palette.dark.colors.default
                .KakaoYellow};
        --colors-colors-default-Black_a70to0: ${palette.dark.colors.default
                .Black_a70to0};
        --colors-colors-default-White_a0to100: ${palette.dark.colors.default
                .White_a0to100};
        --colors-colors-default-White_a0to100v: ${palette.dark.colors.default
                .White_a0to100v};
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    menu,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }


    /* HTML5 hidden-attribute fix for newer browsers */

    *[hidden] {
        display: none;
    }

    body {
        line-height: 1;
    }

    menu,
    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: inherit;
        // TODO : 해당 스타일 설정은 비표준
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    button {
        border: none;
    }

    input {
        user-select: text;
    }

    textarea,
    input {
        outline: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0 !important;
        padding: 0 !important;
        ${typography.K_14M}; // 기본폰트 설정
        background-color: ${colors.default.White};
    }

    #root {
        width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    * {
        font-family:
                'Pretendard',
                -apple-system,
                BlinkMacSystemFont,
                system-ui,
                Roboto,
                'Helvetica Neue',
                'Segoe UI',
                'Apple SD Gothic Neo',
                'Noto Sans KR',
                'Malgun Gothic',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                sans-serif;
        box-sizing: border-box;
        user-select: none;
        touch-action: manipulation;
        color: ${colors.default.Gray};
    }
`