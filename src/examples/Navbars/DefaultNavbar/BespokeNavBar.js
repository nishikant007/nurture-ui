/**
 =========================================================
 * BalAsha - Nurture - v4.0.2
 =========================================================

 * Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
 * Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import {useState, useEffect} from "react";

// react-router components
import {Link} from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// BalAsha - Nurture base styles
import breakpoints from "assets/theme/base/breakpoints";

function LoginNavbar({routes, transparent, light, action}) {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [mobileView, setMobileView] = useState(false);



    useEffect(() => {
        // A function that sets the display state for the DefaultNavbarMobile.
        function displayMobileNavbar() {
            if (window.innerWidth < breakpoints.values.lg) {
                setMobileView(true);
                setMobileNavbar(false);
            } else {
                setMobileView(false);
                setMobileNavbar(false);
            }
        }

        /**
         The event listener that's calling the displayMobileNavbar function when
         resizing the window.
         */
        window.addEventListener("resize", displayMobileNavbar);

        // Call the displayMobileNavbar function to set the state with the initial value.
        displayMobileNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", displayMobileNavbar);
    }, []);

    return (
        <Container>
            <SoftBox
                py={1}
                px={{xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5}}
                my={2}
                mx={3}
                width="calc(100% - 48px)"
                borderRadius="section"
                shadow={transparent ? "none" : "md"}
                color={light ? "white" : "dark"}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="absolute"
                left={0}
                zIndex={3}
                sx={({palette: {transparent: transparentColor, white}, functions: {rgba}}) => ({
                    backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
                    backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
                })}
            >
                <SoftBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
                    <SoftTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
                        BalAsha - Nurture
                    </SoftTypography>
                </SoftBox>


            </SoftBox>

        </Container>
    );
}

// Setting default values for the props of DefaultNavbar
LoginNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
LoginNavbar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    transparent: PropTypes.bool,
    light: PropTypes.bool,
    action: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            type: PropTypes.oneOf(["external", "internal"]).isRequired,
            route: PropTypes.string.isRequired,
            color: PropTypes.oneOf([
                "primary",
                "secondary",
                "info",
                "success",
                "warning",
                "error",
                "dark",
                "light",
            ]),
            label: PropTypes.string.isRequired,
        }),
    ]),
};

export default LoginNavbar;
