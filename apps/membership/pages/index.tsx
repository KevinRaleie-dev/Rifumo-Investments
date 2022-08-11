import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { Nav } from '../components/Nav';
import { TeamCard } from '../components/TeamCard';


export default function Membership() {

  return (
    <React.Fragment>
      <Head>
        <title>
          Rifumo Investments | Unity is our strength
        </title>
      </Head>
      <Nav />
      <div>
        <main className="w-screen h-screen sm:px-20 px-5 mb-24">
          <div className="space-y-8 sm:mt-20 mt-5">
            <div className="sm:hidden items-center justify-center flex">
              <Image 
              src="/logo.png"
              alt="Rifumo Investments logo"
              width={200}
              height={200}
              objectFit='cover'
              />
            </div>
            <h1 className="sm:text-7xl text-5xl text-center sm:text-left font-medium">
              Welcome To Rifumo Investments
            </h1>
            <p className="text-lg text-slate-600 text-center sm:text-left font-light">
              We are a group of people who are passionate about investing and acquiring assets for our people.
            </p>
            <div className="w-full h-auto relative">
              <Image
              className='rounded-2xl mt-5'           
              alt="product image"
              objectFit='cover'          
              width="1200"
              height="500"
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"          
              />          
            </div>      
          </div>
          <div className="my-10 sm:my-20" id="about">
            <h2 className='text-center text-5xl font-medium'>
              Trust. Unity. Growth
            </h2>
            <p className="text-center mt-2 text-gray-500 font-light">
              Building together, Prospering together. 
            </p>
            <div className="grid sm:grid-cols-2 sm:gap-2 gap-10 mt-20">
              <div className='flex flex-col space-y-3'>
                <h3 className='text-3xl font-medium'>
                  Our Story
                </h3>
                <p className='text-lg font-light text-gray-500'>
                  Unity is our strength.
                </p>
                <p>
                Rifumo Investments was founded in July 2021 as an unconventional stokvel of eight people who were acquiring equities for each other. 
                <br />
                <br />
                We then decided to use our unity to collaborate through resources to move away from equipping ourselves individually but do so collectively.
                it is our core belief that we can go far and achieve every dream that&apos;s unattainable in our individual personal capacity.
                <br /> 
                <br /> 
                We were motivated by how the majority of the people in the country are not owning assets through investment.
                </p>
              </div>
              <div className="w-auto sm:h-auto h-64 relative">
                <Image
                objectFit='cover'
                className='rounded-2xl'
                layout='fill'
                alt="holding hands"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
          </div>
          <div className='text-center sm:text-left my-10'>
            <h2 className="text-5xl font-medium">
              What We Stand For
            </h2>
          </div>
          <section className='grid sm:grid-cols-3 sm:gap-10 gap-10 sm:py-10'>
            <div className="flex flex-col space-y-3 h-auto">
              <h4 className="text-2xl font-medium">
                Mission
              </h4>
              <p className="text-sm text-gray-600 leading-loose">
              Raise capital together through a collective investment scheme that minimises the risks while it 
              seeks to maximise return on investment through investments in the Johannesburg Stock 
              Exchange(JSE) and New York Stock Exchange(NYSE) listed shares, exchange-traded funds (ETFs), 
              unit trusts, and property by inviting the public to be members and owners of the organisation and 
              making small and affordable monthly contributions that will be invested in a diversified portfolio to 
              invest for a long-term to assist us towards our vision.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="text-3xl font-medium">
                Vision
              </h4>
              <p className='text-sm text-gray-600 leading-loose'>
              Become the largest and first asset management social organisation owned by the progressive 
              people who strive to own assets, invest in a wide range of markets, and cater to their own economic and social needs. Be a reputable, social and South African economy-driven entity that is at the cutting edge of seeking to improve the economic, social, and livelihoods of ordinary South Africans 
              through investment.
              </p>
            </div>
            <div className='flex flex-col space-y-3'>
              <h4 className="text-3xl font-medium">
                Values
              </h4>
              <ul className="text-sm space-y-5 text-gray-700">
                <li>
                <strong>Unity</strong> - It&apos;s through unity that we can achieve our wildest financial dreams.
                </li>
                <li>
                  <strong>Safety</strong> - Give assurance and confidence to our members through transparency and accountability
                </li>
                <li>
                  <strong>Change</strong> - We are for the people who do not only dream and talk about South Africa&apos;s economic change but want to do something about it.
                </li>
                <li>
                  <strong>Action</strong> - We want to stop being spectators in our own economies but participatory as well.
                </li>
                <li>
                  <strong>Ownership</strong> - true and permanent empowerment lies and comes from ownership.
                </li>
                <li>
                  <strong>Inclusivity</strong> - We are for everyone and by everyone, we are a diverse group with different expertise and knowledge.
                </li>
                <li>
                  <strong>Patience</strong> - we understand that Rome wasn&apos;t built in a day, great things take time.
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-10">
            <div className="text-center space-y-2" id="team">
              <h1 className="text-5xl font-bold">
                Meet The Team
              </h1>
              <p className="font-light text-gray-500">
                These are the people driving Rifumo Investments.
              </p>
            </div>
            <div className="flex flex-wrap justify-evenly items-center my-20">
              <TeamCard 
              imageSrc='/chairman.jpeg'
              teamMemberName='Khabhira Phephetha'
              teamMemberRole='Chairman'
              teamMemberBio='Bcom Accounting Final year student. Khabhira Phephetha is a young leader with both national and international leadership experience and training who aspires to be a servant leader that delivers at all times.              '
              />
              <TeamCard 
              imageSrc='/Ntshepiseng.jpg'
              teamMemberName='Ntshepiseng Tohlang'
              teamMemberRole='Research Assistant'
              teamMemberBio='B.Com Accounting degree holder.I aspire to be a tax expert for investment portfolios and 
              to bridge the economic inequality gap that currently exists in our society'
              />
              <TeamCard 
              imageSrc='/Yonela.jpg'
              teamMemberName='Yonela Tinini'
              teamMemberRole='Treasurer'
              teamMemberBio='I hold  a degree in Accounting and a Postgraduate Diploma in Accounting.
              I am currently working as a Trainee Accountant in one of the big four Accounting firms in the world.
              '
              />
              <TeamCard 
              imageSrc='/Beaula.jpg'
              teamMemberName='Beaula Kruger'
              teamMemberBio="Experienced Deputy Research Director with a demonstrated history of working in the research industry. Skilled in Analytical Skills, Lecturing, International Relations, Report Writing, and Leadership. Strong professional with a Master's Degree focused in Political Science: Governance and Political Transformation."
              teamMemberRole='Head of Research and Investment committee'              
              />
              <TeamCard 
              imageSrc='/Nokwanda.jpg'
              teamMemberName='Nokwanda Gule'
              teamMemberRole='Secretary'
              teamMemberBio="A scientist in training with a masters degree. I am currently working as an intern scientist at SAEON in KZN Pietermaritzburg. I want to be someone who builds towards a better South Africa."
              />
              <TeamCard 
              imageSrc='/Karabo.jpg'
              teamMemberName='Karabo Leputu'
              teamMemberRole='Deputy Treasurer.'
              teamMemberBio="Karabo has  a qualification in Agriculture and currently working in the medical aid industry and working for one of the top five companies in SA doing administration for medical aids companies. I have decided to be part of Rifumo as it's mission and vision align with mine in creating a better future for myself and those around me through investing."
              />
              <TeamCard 
              imageSrc='/Nobuhle.jpeg'
              teamMemberName='Nobuhle Sithole'
              teamMemberRole='Head of financial and investment literacy department'
              teamMemberBio=" A professional educator in Intermediate Phase from a small town, Ladysmith in KZN. I am currently working as a teacher in Randburg, South Africa. My ambition is to help more disadvantageous young people from the shackles of poverty, lack of information and not being in control."
              />
            </div>
            <div>
              <div className="space-y-2">
                <h1 className="text-5xl font-medium">
                  Mentor
                </h1>     
                <p className="text-2xl">
                  Mr. Itumeleng Moses.
                </p>
                <p className="max-w-lg sm:text-md">
                  Itumeleng is a solid individual with postgraduate qualifications and 22 years of work experience across various sectors, 
                  including academia, consulting, executive management in public sector in 3 different provinces as well as financial sector.
                </p>
                <p className="max-w-lg sm:text-md">
                  He is currently employed as banking a executive, heading 3 business units across 3 different provinces.
                </p>
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center space-y-5 text-center mt-36 p-10 w-full rounded-2xl bg-[#011638] mb-10">
            <h1 className="text-3xl sm:text-6xl font-bold text-white">
              Become a Member
            </h1>
            <p className="text-blue-200 text-sm sm:text-md">
              Become part of an organization inspired to change.
            </p>
            <button className=' w-64 py-2 px-10 bg-blue-500 rounded-lg text-white font-medium'>
              Join us
            </button>                           
          </div>          
        </main>
      </div>
      
    </React.Fragment>
  );
}
