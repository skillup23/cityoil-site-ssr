export default function Subtitle({ children, style }) {
  return (
    <h5
      className={`text-base md:text-2xl text-green text-center md:text-start font-medium uppercase ${style}`}
    >
      {children}
    </h5>
  );
}
