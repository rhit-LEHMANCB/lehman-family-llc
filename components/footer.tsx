const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-medium tracking-[0.25em] text-white">
          LEHMAN FAMILY LLC
        </p>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Lehman Family LLC. All rights reserved.
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-neutral-600">
        This website and its contents are the property of Lehman Family LLC.
        Unauthorized use or reproduction is prohibited.
      </p>
    </footer>
  );
};

export default Footer;
