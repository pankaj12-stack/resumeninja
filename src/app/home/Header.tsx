import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { AutoTypingResume } from "./AutoTypingResume";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                FAQ{" "}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What is a Resume Builder and Why is it Better Than a Resume
                Template?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                A resume builder is an online tool that allows you to easily
                create a professional resume by inputting your information into
                pre-formatted templates. It offers several key advantages over
                using a traditional resume template document:
              </p>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Why is a Resume Builder Better Than a Resume Template?
              </h2>
              <p className="mt-6">
                Resume builders automate the formatting and design process,
                allowing you to create a polished resume in minutes rather than
                spending hours manually adjusting a template. This is especially
                useful when applying to multiple jobs.
              </p>
              <p className="mt-6">
                Resume builders optimize your resume to be compatible with
                Applicant Tracking Systems used by employers to screen
                candidates, increasing your chances of getting past initial
                filters.
              </p>
              <p className="mt-6">
                Resume builders provide more customization options like changing
                fonts, colors, and layouts with a few clicks. Many also offer
                suggestions on what to include to highlight your skills
                effectively.
              </p>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                What Uniquely Sets ResumeNinja Apart from Other Resume Builders
                and Templates?
              </h2>
              <p className="mt-6">
                Designed Specifically for the Canadian Job Market and Best
                Practices. Unlike other resume builders that target a global
                audience and offer many customization options, ResumeNinja
                intentionally aligns with Canadian best practices. For example,
                it excludes the option to add a profile picture to avoid bias
                and discrimination. It offers only the core sections, such as
                profile, work experience, education, and skills, while omitting
                unnecessary sections like references. Additionally, ResumeNinja
                only offers a top-down single-column resume design, as this
                format works best for Applicant Tracking Systems (ATS) used in
                Canada
              </p>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Super Privacy Focused
              </h2>
              <p className="mt-6">
                While other resume builders may require email sign-up and store
                user data in their databases, ResumeNinja believes that resume
                data should remain private and accessible only on the user’s
                local machine. Therefore, ResumeNinja doesn’t require sign-up to
                use the app, and all inputted data is stored in the user’s
                browser, ensuring that only the user has access to it.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <AutoTypingResume />
        </div>
      </div>
    </div>
  );
}
