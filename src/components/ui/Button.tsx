interface ButtonProps {
  text: string;
  classAdd?: string;
  href?: string;
}

export default function Button({
  text,
  classAdd = "",
  href = "#",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        inline-block relative group overflow-hidden py-3 px-8 cursor-pointer text-white 
        bg-linear-to-r from-[#040850] to-[#218ABB] 
        rounded-full font-bold transition-all shadow-lg shadow-blue-600/20
        ${classAdd}
      `}
    >
      <div
        className="
          absolute top-0 bottom-0 w-0 bg-[#218abb] transition-all duration-500 ease-out 
          group-hover:w-full -z-10 right-0
        "
      />
      <span className="relative z-10">{text}</span>
    </a>
  );
}
