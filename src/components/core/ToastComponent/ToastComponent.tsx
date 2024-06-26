"use client";
import { ToastContainer } from "react-toastify";
import Icon from "../Icon/Icon";

// close
const CloseButton = ({ closeToast }: any) => (
  <Icon
    name="close"
    className="!text-[#858D9D] text-base"
    onClick={closeToast}
  />
);

export const ToastComponent = () => {
  return (
    <ToastContainer
      toastClassName="font-inter text-sm font-medium p-3"
      bodyClassName="flex items-start"
      icon={({ type }) => {
        if (type === "success")
          return (
            <Icon
              name="check_circle"
              className="text-[22px]"
              variant="outlined"
            />
          );
        if (type === "info")
          return (
            <Icon name="info" className="text-[22px]" variant="outlined" />
          );
        if (type === "warning")
          return <Icon name="warning_amber" className="text-[22px]" />;
        if (type === "error")
          return <Icon name="error_outline" className="text-[22px]" />;
        else return "ℹ️";
      }}
      position="top-right"
      autoClose={4000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      closeButton={CloseButton}
    />
  );
};
