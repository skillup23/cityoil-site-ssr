export default function BurgerButton({ isOpen }) {
  return (
    <div className="flex sm:hidden hamburger-lines">
      <span
        className={`line transition-transform ${
          isOpen ? `rotate-45 translate-y-[10px]` : `origin-[0%_0%]`
        }`}
      ></span>
      <span
        className={`line transition-transform ${
          isOpen ? `scale-y-0` : `origin-[0%_0%]`
        }`}
      ></span>
      <span
        className={`line transition-transform ${
          isOpen ? `-rotate-45 -translate-y-[10px]` : `origin-[0%_100%]`
        }`}
      ></span>
    </div>
  );
}
