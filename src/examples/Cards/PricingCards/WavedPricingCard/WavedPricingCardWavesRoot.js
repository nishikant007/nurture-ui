/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2023 BalAsha - Nurture (https://balasha-nurture.web.app)

Coded by www.bal-asha.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @emotion/react components
import { keyframes } from "@emotion/react";

// @mui material components
import { styled } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars
const moveForEver = keyframes`
  from {
    transform: translate3d(-90px, 0, 0);
  }
  to {
    transform: translate3d(85px, 0, 0);
  }
`;

export default styled("g")(() => ({
  "& > use": {
    animation: `${moveForEver} 40s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite`,

    "&:nth-child(1)": {
      animationDelay: "-2s",
      animationDuration: "11s",
    },
    "&:nth-child(2)": {
      animationDelay: "-4s",
      animationDuration: "13s",
    },
    "&:nth-child(3)": {
      animationDelay: "-3s",
      animationDuration: "15s",
    },
    "&:nth-child(4)": {
      animationDelay: "-4s",
      animationDuration: "20s",
    },
    "&:nth-child(5)": {
      animationDelay: "-4s",
      animationDuration: "25s",
    },
    "&:nth-child(6)": {
      animationDelay: "-3s",
      animationDuration: "30s",
    },
  },
}));