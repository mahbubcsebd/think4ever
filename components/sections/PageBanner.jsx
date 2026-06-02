const PageBanner = ({ title }) => {
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <section className="bg-[#fcfdfe] min-h-[260px] sm:min-h-[340px] flex items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[160%] bg-[#07A7E1]/5 blur-3xl transform rotate-12 rounded-full" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-[#093cad]/5 blur-3xl transform -rotate-12 rounded-full" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-[32px] sm:text-[40px] md:text-[54px] font-bold text-[#09090D] tracking-tight leading-[1.1]">
          {firstPart}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07A7E1] to-[#093cad]">
            {lastWord}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
