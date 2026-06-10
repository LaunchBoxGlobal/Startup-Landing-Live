import Image from "next/image";

const appTypes = [
  {
    title: "MARKETPLACES",
    icon: "/marketplace-icon.png",
    width: 26,
    height: 27,
    description:
      "Two-sided platforms connecting buyers and sellers with listings, search, profiles, reviews, and payments.",
  },
  {
    title: "MOBILITY APPS",
    icon: "/mobility-apps-icon.png",
    width: 15,
    height: 28,
    description:
      "Driver and rider apps, fleet tracking, route optimization, booking flows, and real-time location.",
  },
  {
    title: "BOOKING PLATFORMS",
    icon: "/booking-platforms-icon.png",
    width: 27,
    height: 27,
    description:
      "End-to-end booking flows, availability management, provider calendars, and payment collection.",
  },
  {
    title: "LOCAL SERVICES",
    icon: "/local-services-icon.png",
    width: 25,
    height: 27,
    description:
      "On-demand service apps, provider matching, job posting, and service area filtering.",
  },
  {
    title: "B2B WORKFLOW SAAS",
    icon: "/b2b-workflow-saas-icon.png",
    width: 27,
    height: 27,
    description:
      "Internal tools, team dashboards, workflow automation, role-based access, and integrations.",
  },
  {
    title: "CONSUMER UTILITY",
    icon: "/consumer-utility-icon.png",
    width: 29,
    height: 29,
    description:
      "Mobile-first apps with clean UX, fast performance, push notifications, and account management.",
  },
  {
    title: "SUBSCRIPTION APPS",
    icon: "/subscription-apps-icon.png",
    width: 15,
    height: 28,
    description:
      "Recurring billing, tiered plans, usage tracking, paywalled content, and subscriber management.",
  },
  {
    title: "COMMUNITY & SOCIAL",
    icon: "/community-and-social-icon.svg",
    width: 27,
    height: 27,
    description:
      "User profiles, feeds, messaging, groups, moderation tools, and engagement features.",
  },
];

const BuildExperience = () => {
  return (
    <section className="w-full padding-x py-16 md:py-24 flex flex-col items-center">
      <div className="text-start flex flex-col items-center">
        <div className="mb-10 text-start">
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            Our Build Experience
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
            We Have Shipped <br className="hidden lg:block" />
            Products Like Yours
            <span className="text-[#ea2b2b]">Before.</span>
          </h2>

          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
            Most non-technical founders hit the same wall after closing their
            round. Here is what that usually looks like.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-100 gap-[1px]">
        {appTypes.map((appType, index) => {
          const Icon = appType.icon;
          return (
            <div
              key={index}
              className={`bg-white p-8 md:p-10 group hover:bg-gray-100 transition-colors duration-300 flex flex-col items-start relative overflow-hidden`}
            >
              <Image
                src={Icon}
                height={appType.height}
                width={appType.width}
                alt={appType.title}
                className="text-black group-hover:text-red-600 transition-colors mb-6"
              />
              <h3 className="font-bold text-[0.95rem] tracking-wider uppercase mb-3 text-black transition-colors duration-300">
                {appType.title}
              </h3>
              <p className="text-gray-500 font-medium text-[0.95rem] leading-relaxed transition-colors duration-300">
                {appType.description}
              </p>

              <div
                className="w-full h-1 red-bg absolute bottom-0 inset-x-0
             opacity-0 group-hover:opacity-100
             transition-opacity duration-300"
              />
            </div>
          );
        })}
      </div>

      <div className="w-full mt-10 red-bg rounded-[24px] py-6 p-5 lg:px-8 lg:h-[152px] flex items-center justify-between gap-6 flex-col lg:flex-row">
        <div className="w-full md:w-[70%] lg:w-1/2">
          <p className="text-xl lg:text-[24px] font-semibold text-white leading-[1.3]">
            Not sure if your product fits? Tell us what you are building and we
            will give you an honest answer.
          </p>
        </div>
        <div className="w-full max-w-[290px]">
          <button
            type="button"
            className="bg-white hover:bg-black hover:text-white transition-all duration-300 red-text rounded-[14px] flex items-center justify-center gap-2 px-5 py-4 text-lg font-medium w-full"
          >
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildExperience;
