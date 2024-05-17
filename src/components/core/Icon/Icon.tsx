"use client";
import React, { FC } from "react";

type Variants = "outlined" | "filled" | "round" | "sharp" | "two-tone";

interface IconProps {
  name: string;
  variant?: Variants;
  onClick?: () => void;
  className?: string;
  id?: string;
  role?: string;
  style?: React.CSSProperties;
}

const Icon: FC<IconProps> = ({
  name,
  variant = "filled",
  className,
  id,
  role,
  onClick,
  style,
}) => (
  <span
    id={id}
    className={`${
      variant === "filled" ? "material-icons" : `material-icons-${variant}`
    } ${className} select-none`}
    role={role}
    style={style}
    onClick={onClick && onClick}
  >
    {name}
  </span>
);

export default Icon;
