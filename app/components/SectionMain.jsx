export default function SectionMain({ style, children, idScroll }) {
  return (
    <section
      className={`w-full py-[50px] md:py-20 text-black ${style}`}
      id={idScroll}
    >
      <div className="container">{children}</div>
    </section>
  );
}
