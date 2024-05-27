import React, { memo, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {ClickAwayListener, Tooltip, Zoom} from "@mui/material";
import { useTheme } from "@emotion/react";

import { image } from "src/theme";
import {mq} from "@/lib/react-responsive/mediaQuery";
import styled from "@emotion/styled";

const DetailPageHeroButtonIn = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}));

const DetailPageHeroContainer = styled.div(({ small, url }) => ({
  position: "relative",
  width: "100%",
  height: "50vh",
  maxHeight: "57.4rem",

  backgroundImage: `url("${process.env.REACT_APP_BASE_URL}${url}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",

  [mq("desktop")]: {
    aspectRatio: small ? "6 / 1" : "3 / 1",
    height: "100%",
  },
}));

const DetailPageHeroShareButton = styled.button(({ theme }) => ({
  position: "absolute",
  bottom: "-2rem",
  right: "2.4rem",
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
  zIndex: 200,
  background: 'white',

  border: `1px solid ${theme.color.point01}`,

  img: {
    width: "2rem",
  },

  [mq("tablet")]: {
    width: "5.6rem",
    height: "5.6rem",
    bottom: "-2.8rem",
  },

  [mq("desktop")]: {
    right: 0,
    width: "7.2rem",
    height: "7.2rem",
    bottom: "-3.6rem",
    border: "none",

    img: {
      width: "2.8rem",
    },
  },
}));

const NormalOverlayContainer = styled.div(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.15)",
  zIndex: 1,
  transition: "all 0.3s",
}));

const DetailPageHero = ({ data, small = false }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (open) {
        handleTooltipClose();
      }
    }, 3000);
  }, [open]);

  return (
    data?.field_hero !== "" &&
    data?.field_hero?.[0]?.src && (
      <DetailPageHeroContainer small={small || data?.field_banner_size === "True"} url={data?.field_hero?.[0]?.src}>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              TransitionComponent={Zoom}
              PopperProps={{
                disablePortal: true,
                sx: {
                  background: "white",

                  "& .MuiTooltip-tooltip": {
                    backgroundColor: theme.color.point02,
                    fontSize: "1.6rem",
                    padding: "1rem",
                    fontWeight: theme.fontWeight.bold,
                    letterSpacing: "0.2rem",
                  },

                  "& .MuiTooltip-arrow": {
                    color: theme.color.point02,
                  },
                },
              }}
              onClose={handleTooltipClose}
              onOpen={handleTooltipOpen}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="url copied"
              arrow
              placement="top"
            >
              <DetailPageHeroShareButton>
                <CopyToClipboard
                  text={window.location.href}
                  onCopy={handleTooltipOpen}
                >
                  <DetailPageHeroButtonIn>
                    <img
                      src={image.shareIcon.default}
                      alt="Share"
                      loading="lazy"
                    />
                  </DetailPageHeroButtonIn>
                </CopyToClipboard>
              </DetailPageHeroShareButton>
            </Tooltip>
          </ClickAwayListener>

        <NormalOverlayContainer />
      </DetailPageHeroContainer>
    )
  );
};

export default memo(DetailPageHero);
