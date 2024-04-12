export default function Title({ children }: { children: string }) {
  return (
    <div className="flex p-8 md:text-[30px] justify-center md:p-4 bg-neutral-100">
      <div className="text-[32px] font-bold flex-col justify-center flex items-center gap-1">
        <div className="tracking-wider">{children}</div>
        <hr className="w-3/4 border-black" />
      </div>
    </div>
  );
}
