export default function InfoBanner({ children, style, idScroll }) {
  return (
    <section className={`p-3 bg-gray ${style}`} id={idScroll}>
      <div className="container">{children}</div>
    </section>
  );
}
