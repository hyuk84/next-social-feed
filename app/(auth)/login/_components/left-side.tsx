export function LeftSide() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-90 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZD2YwzYTVTkdfQcNJk0evXq9EHLTu50kXJ7DIo7RCx4l3wJCJRRaupzhF2IUo4U9LcUAZL43UzqBv5YUTznwBavPisw-0zrcbQtwtCc2XfWqQp96_z3lrrzx-gn8xBQAlsSMk48FQOJcZhomJT3jxkX07qinkrL37uL7TVVINmnlf-Vjw9icVZmFdlYHPaE26CMAcweNaIjg3muAA98eNSTZ_-T1MCh3kG-8Wmw_Kp2vsOoUUl5puG71jlCcgKcBz-hu4DXDtfQb')]"
        data-alt="Group of diverse creators collaborating in a modern studio"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10"></div>
      <div className="relative z-20 flex flex-col justify-end p-16 text-white h-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-white p-2 rounded-lg">
            <svg
              className="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight">SocialFeed</span>
        </div>
        <h1 className="text-5xl font-black leading-tight mb-4">
          The home of digital creators.
        </h1>
        <p className="text-lg text-white/80 max-w-md">
          Join thousands of creators sharing their moments and stories with the
          world. Your journey starts here.
        </p>
      </div>
    </div>
  );
}
