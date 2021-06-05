import React from "react";
import {Global} from "@emotion/react";

const Fonts = () => (
    <Global 
        styles={`
            /* Copied from https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap*/
            /* [4] */
            @font-face {
                font-family: 'Noto Sans KR', sans serif;
                font-style: normal;
                font-weight: 400;
                font-display:swap;
                src: url(https://fonts.gstatic.com/s/notosanskr/v13/PbykFmXiEBPT4ITbgNA5Cgm20xz64px_1hVWr0wuPNGmlQNMEfD4.4.woff2) format('woff2');
                unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
            }
        `}
    />
)

export default Fonts