import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Rocket,ArrowRight } from 'lucide-react';
import {  DollarSign, FileText, BarChart2, RefreshCw } from 'lucide-react';
import ChatbotSidebarForm from './components/form';
import Footer from './components/Footer';
import clsx from 'clsx';
import Threads from './components/bg';
import  SpotlightCard  from './components/card';
import Header from './components/Header';



function App() {

  return (
    <div className="min-h-screen bg-black text-white">
            <Header/>
            {/* Hero Section */}
            
            <main className="container mx-auto px-6 pt-20 pb-24">
            <div style={{ width: '100%', height: '700px', marginTop: '-100px' }} className='-z-10 opacity-50'>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color = {[147, 0, 60]}
        />
        </div>
          <div className='top-1/2 left-1/2 transform -translate-x-1/2 absolute text-white text-center text-6xl font-bold '>
             Creator Collaboration Hub
          </div>
          <p className="text-xl top-2/3 left-1/2 transform -translate-x-1/2 absolute text-gray-300 text-center ">
              The future of creator collaboration is coming. Join the waitlist to be the first to experience the revolution in influencer marketing.
            </p>
 
         {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-72 px-4">
          {[
            {
              icon: <Users className="w-8 h-8 text-purple-400 mb-4" />,
              title: "AI-Driven Sponsorship Matchmaking",
              description:
                "Automatically connects creators with brands based on audience demographics, engagement rates, and content style.",
            },
            {
              icon: <Sparkles className="w-8 h-8 text-purple-400 mb-4" />,
              title: "AI-Powered Creator Collaboration Hub",
              description:
                "Facilitates partnerships between creators with complementary audiences and content niches.",
            },
            {
              icon: <DollarSign className="w-8 h-8 text-purple-400 mb-4" />,
              title: "AI-Based Pricing & Deal Optimization",
              description:
                "Provides fair sponsorship pricing recommendations based on engagement, market trends, and historical data.",
            },
            {
              icon: <FileText className="w-8 h-8 text-purple-400 mb-4" />,
              title: "AI-Powered Negotiation & Contract Assistant",
              description:
                "Assists in structuring deals, generating contracts, and optimizing terms using AI insights.",
            },
            {
              icon: <BarChart2 className="w-8 h-8 text-purple-400 mb-4" />,
              title: "Performance Analytics & ROI Tracking",
              description:
                "Enables brands and creators to track sponsorship performance, audience engagement, and campaign success.",
            },
            {
              icon: <RefreshCw className="w-8 h-8 text-purple-400 mb-4" />,
              title: "Real-Time Campaign Feedback Loop",
              description:
                "Gathers continuous feedback on campaigns to adapt and improve collaboration effectiveness over time.",
            },
          ].map((feature, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-left backdrop-blur"
              spotlightColor="rgba(147, 0, 160, 0.25)"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
       
        {/* Waitlist Form Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-16 bg-[#0f0f1b] text-white mt-32">
      <div className="max-w-xl space-y-6">
        <h2 className="text-4xl font-bold tracking-tight text-purple-400">
          Be Part of the Future
        </h2>
        <p className="text-lg text-gray-300">
          Join our waitlist to be the first to experience how inpactAI is transforming the way brands and creators collaborate. 🚀
        </p>
        <div className="pt-4 ml-44">
          <ChatbotSidebarForm />
        </div>
      </div>
    </section>

       
      </main>
      <Footer />
    </div>
  );
}

export default App;
