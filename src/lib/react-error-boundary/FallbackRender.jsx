export const FallbackRender = ({ error }) => {
  if (error.response?.data?.message !== "Access Token expired") {
    // window.location.href = "/network-error";

    return;
  } 
};