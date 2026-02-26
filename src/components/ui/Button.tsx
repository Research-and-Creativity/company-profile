interface ButtonProps {
  text: string;
  classAdd?: string;
}

export default function Button({ text, classAdd = "" }: ButtonProps) {
  return (
    <button
      className={`py-3 px-8 cursor-pointer hover:bg-blue-700 text-white bg-linear-to-r from-[#040850] to-[#218ABB] rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 ${classAdd}`}
    >
      {text}
    </button>
  );
}
