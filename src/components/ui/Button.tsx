import React from "react";

interface ButtonProps {
  text: string;
  classAdd?: string;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  disabled,
  text,
  classAdd = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const isLink = Boolean(href);
  const Tag: React.ElementType = isLink ? "a" : "button";

  const commonProps = {
    className: `
      inline-block relative group overflow-hidden py-3 px-8 cursor-pointer text-white 
      rounded-full font-bold transition-all shadow-lg shadow-blue-600/20
      appearance-none border-none outline-none text-center bg-transparent
      ${disabled ? "opacity-50 cursor-not-allowed grayscale" : "active:scale-95"}
      ${classAdd}
    `,
  };

  const content = (
    <>
      <span className="absolute inset-0 bg-linear-to-r from-[#040850] to-[#218ABB] z-0" />
      
      <span 
        className="
          absolute inset-0 bg-[#218abb] translate-x-[101%] 
          transition-transform duration-500 ease-out 
          group-hover:translate-x-0 z-0
        " 
      />
      
      <span className="relative z-10 pointer-events-none">
        {text}
      </span>
    </>
  );

  if (isLink) {
    return (
      <Tag href={disabled ? undefined : href} {...commonProps}>
        {content}
      </Tag>
    );
  }

  return (
    <Tag type={type} disabled={disabled} onClick={onClick} {...commonProps}>
      {content}
    </Tag>
  );
}