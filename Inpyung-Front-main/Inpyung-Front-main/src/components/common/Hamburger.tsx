export default function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      id="hamburger-menu"
      width={30}
      height={30}
      className="hidden md:block"
    >
      <path
        fill="white"
        d="M8.667 15h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 37h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 26h30a1 1 0 100-2h-30a1 1 0 100 2z"
      ></path>
    </svg>
  );
}
