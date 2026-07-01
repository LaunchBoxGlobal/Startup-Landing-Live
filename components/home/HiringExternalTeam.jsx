"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  User,
  Lock,
  Coins,
  Wrench,
  Laptop,
  ChevronRight,
  Package,
  Rocket,
  Calendar,
  PhoneCall,
  Activity,
  FileText,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import StatsBanner from "./StatsBanner";
import TabsList from "./TabsList";
import TabContent from "./TabContent";

export default function HiringExternalTeam() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "disappear",
      title: "What if you disappear halfway through the build?",
      icon: ShieldCheck,
      content: {
        heading: "What if you disappear halfway through the build?",
        text: "We get it. It has happened to founders before. That is why we structure every engagement with milestone- based delivery, weekly check-ins, and a dedicated point of contact. You always know what is happeningand you have real recourse if we miss a milestone.",
        features: [
          { icon: Calendar, label: "Milestone-Based Delivery" },
          { icon: PhoneCall, label: "Weekly Demo Calls" },
          { icon: User, label: "Dedicated Project Lead" },
          { icon: Activity, label: "Real-Time Progress Tracking" },
        ],
        commitment: {
          text: "\"If we miss a milestone, you don't pay for it — it's written into every contract. You're never stuck with a team that's gone quiet.\"",
          badge: "Written into every contract",
        },
      },
    },
    {
      id: "future-cto",
      title: "Will my future CTO be able to work with what you build?",
      icon: User,
      content: {
        heading: "Will my future CTO be able to work with what you build?",
        text: "We write clean, documented, and standard code (often React, Node.js, Next.js). We don't use obscure proprietary frameworks. When your CTO comes on board, they will be happy to inherit our repository, not rewrite it.",
        features: [
          { icon: FileText, label: "Detailed Documentation" },
          { icon: Laptop, label: "Standard Tech Stack" },
          { icon: ShieldCheck, label: "Code Quality Checks" },
          { icon: Package, label: "Easy Handoff" },
        ],
        commitment: {
          text: '"We build as if we are going to maintain it for the next 5 years, even if we hand it off next month."',
          badge: "Clean Code Guarantee",
        },
      },
    },
    {
      id: "trust",
      title: "Can I trust an external team with my idea?",
      icon: Lock,
      content: {
        heading: "Can I trust an external team with my idea?",
        text: "We sign NDAs before we even start talking details. From day one of development, all IP, source code, and assets are legally assigned to your company. We are just the builders.",
        features: [
          { icon: Lock, label: "Strict NDAs" },
          { icon: FileText, label: "IP Ownership Clauses" },
          { icon: ShieldCheck, label: "Secure Development" },
          { icon: User, label: "Private Repositories" },
        ],
        commitment: {
          text: '"You own the codebase from the very first commit. There is no vendor lock-in and no hostage situations."',
          badge: "100% IP Transferred",
        },
      },
    },
    {
      id: "cost",
      title: "Is this going to cost more than just hiring freelancers?",
      icon: Coins,
      content: {
        heading: "Is this going to cost more than just hiring freelancers?",
        text: "Freelancers might have lower hourly rates, but managing them, integrating their work, and fixing gaps costs you time and money. We provide a full product team for a predictable price.",
        features: [
          { icon: Coins, label: "Fixed Scope Pricing" },
          { icon: Package, label: "No Hidden Fees" },
          { icon: Activity, label: "Faster Time-to-Market" },
          { icon: User, label: "Full Team Included" },
        ],
        commitment: {
          text: '"We map out the exact cost to get to your MVP. You won\'t face surprise invoices or runaway hours."',
          badge: "Predictable Pricing",
        },
      },
    },
    {
      id: "change",
      title: "What if the product needs to change during the build?",
      icon: Wrench,
      content: {
        heading: "What if the product needs to change during the build?",
        text: "Initial plans always change when they hit reality. We build in sprints and adapt based on your early feedback or changes in market validation. We are flexible partners.",
        features: [
          { icon: Activity, label: "Agile Sprints" },
          { icon: MessageSquare, label: "Regular Check-ins" },
          { icon: Wrench, label: "Flexible Scoping" },
          { icon: Rocket, label: "Iterative Releases" },
        ],
        commitment: {
          text: '"We expect things to evolve. Our process is designed to handle pivots without derailing the entire project."',
          badge: "Adaptable Process",
        },
      },
    },
    {
      id: "outsourced",
      title: "Will this look like it was outsourced?",
      icon: Laptop,
      content: {
        heading: "Will this look like it was outsourced?",
        text: "We don't do 'good enough'. Our designers craft modern, pixel-perfect interfaces. Our engineers build fluid, responsive experiences. Your users won't know it was built by an agency.",
        features: [
          { icon: Laptop, label: "Pixel-Perfect UI" },
          { icon: Activity, label: "Smooth Animations" },
          { icon: ShieldCheck, label: "Premium Feel" },
          { icon: User, label: "User-Centric UX" },
        ],
        commitment: {
          text: '"Your app will look and feel like it was built by a top-tier SV tech team, because we hold ourselves to that standard."',
          badge: "Premium Quality",
        },
      },
    },
  ];

  return (
    <section className="section padding-x">
      <div
        className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Let's Be Honest
        </p>
        <h2 className="section-heading">
          Things Founders Worry About <br className="hidden lg:block" /> Before
          Hiring an External
          <span className="text-[#ea2b2b]">Team</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          We have heard every concern. Here are the honest answers.
        </p>
      </div>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Tabs Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Tab List */}
        <TabsList
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <TabContent tabs={tabs} activeTab={activeTab} />
      </div>

      {/* Footer Banner */}
      <div className="mt-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white relative z-10 rounded-2xl border border-[#EFE9E7] p-3 py-5 pl-8 flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div>
            <Image
              src={"/questions-icon.png"}
              alt="questions-icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">
              Still have questions?
            </h4>
            <p className="text-gray-500 text-xs md:text-sm">
              Let&apos;s talk through your specific situation.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="bg-[#ef4444] hover:bg-red-600 text-white px-6 py-4 rounded-[11px] font-bold text-sm transition-colors flex items-center space-x-2 w-full md:w-auto justify-center"
        >
          <span>Book a Free Discovery Call</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="w-[100vw] h-[100vw] rounded-full bg-red-500/20 blur-[200px] opacity-60 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
    </section>
  );
}
