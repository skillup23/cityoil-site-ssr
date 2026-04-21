export default function Heading({ children, style }) {
  return (
    <h2
      className={`mt-3 mb-[22px] text-2xl md:text-4xl text-center md:text-start font-bold ${style}`}
    >
      {children}
    </h2>
  );
}
