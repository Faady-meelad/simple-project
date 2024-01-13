export default function TabButton({ children, isSelectd, ...props }) {
  return (
    <li>
      <button className={isSelectd ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
