"use client";

import type { ButtonHTMLAttributes } from "react";

import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "@/lib/design/button-styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  cursorLabel?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  cursorLabel = "Select",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles(variant, size, className)}
      data-cursor
      data-cursor-label={cursorLabel}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
