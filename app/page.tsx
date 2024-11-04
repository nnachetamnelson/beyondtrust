"use client"; // Mark the file as a client component

import React, { useState } from 'react';

const Home = () => {
  // Initialize the state for visible cards
  const [visibleCount, setVisibleCount] = useState(5);
  const [infoVisibleIndex, setInfoVisibleIndex] = useState(null); // Track which card's info is visible

  // Array of card objects
  const cards = [
    {
      id: 1,
      logo: "/monzo-logo.svg",
      title: "Santander All in One Credit Card",
      features: [
        { subtitle: "Budgeting Tools", content: "Budget tracking." },
        { subtitle: "Free Current Account", content: "Basic banking services, spending insights, and real-time notifications." },
        { subtitle: "Personal Loans", content: "Flexible loans based on eligibility." },
      ],
      applyLink: "https://join.monzo.com/c/shgcbqk",
      additionalInfo: [
        { heading: "Additional information", items: ["Free account available.", "Paid plans (Monzo Plus and Monzo Premium) with additional features for a monthly fee."] },
        { heading: "Eligibility", items: ["Must be a resident of the UK.", "Must be at least 16 years old.", "Valid identification is required for verification."] },
      ],
    },
    {
      id: 2,
      logo: "/american.svg",
      title: "AMERICAN EXPRESS",
      features: [
        { subtitle: "Representative APR (variable)", content: "30.7% APR variable" },
        { subtitle: "Credit Limit", content: "Assumed credit limit of £1,200" },
        { subtitle: "Purchase Rate", content: "30.7% variable for purchases" },
      ],
      applyLink: "https://americanexpress.com/en-gb/referral/platinum-cashback-everyday?ref=fRANKI145C&XL=MNANS",
      additionalInfo: [
        { heading: "Additional information", items: ["0.5% cashback on spend up to £10,000", "Also get 1% cashback on spend above £10,001", "Global Assist® has your back 24/7 whenever you are travelling abroad. Up to £150,000 cover on public transport when you buy your ticket with your Card.", "Annual Fee £0"] },
        { heading: "Eligibility", items: ["I have a current UK bank or building society account", "I am aged 18 or over", "I have a permanent UK home address", "I have no history of bad debt"] },
      ],
    },
    {
      id: 3,
      logo: "/cap1.jpeg",
      title: "Capital on Tap",
      features: [
        { subtitle: "Cashback Option", content: "Earn 1.5% cashback" },
        { subtitle: "Credit Limit", content: "Credit limits available up to $50,000." },
        { subtitle: "Virtual Cards", content: "Access to virtual cards for secure online transactions" },
      ],
      applyLink: "https://cashback.capitalontap.com/referral/?promo=2REFE722G74&referrer=BEYONDTRUST",
      additionalInfo: [
        { heading: "Additional information", items: ["Zero Liability Policy to protect against unauthorized payments", "No account maintenance fees", "No foreign exchange fees", "No annual fees"] },
        { heading: "Eligibility", items: ["Monthly Turnover: The business should have a minimum monthly turnover of £2,000.", "I am aged 18 or over", "I have a permanent UK home address", "Credit History: There should be no unsatisfied County Court Judgments (CCJs) against you or your business in the last 12 months"] },
      ],
    },
    {
      id: 4,
      logo: "/rev.png",
      title: "Revolut",
      features: [
        { subtitle: "Cashback Option", content: "Earn cashback" },
        { subtitle: "Stock and ETF Trading", content: "Trade over 1,000 U.S. stocks and ETFs" },
        { subtitle: "Multi-Currency Accounts", content: "Hold and manage over 30 currencies" },
      ],
      applyLink: "https://www.revolut.com/referral/?referral-code=iheana33wa!OCT1-24-VR-GB",
      additionalInfo: [
        { heading: "Additional information", items: ["Account Security Features: Freeze your card, set up disposable virtual cards, and enable biometric login.", "Expense Management Tools: Tools for splitting bills and managing group expenses effectively.", "Stock Market Alerts: Set alerts for stock prices and significant market changes.", "Savings Vaults: Set aside money for specific goals, with options for automatic deposits and savings rewards."] },
        { heading: "Eligibility", items: ["I am aged 18 or over", "Residency: You need to be a resident of a country where Revolut operates.", "You'll need to provide valid personal identification documents."] },
      ],
    },

    {
      id: 5,
      logo: "/tide.svg",
      title: "Tide",
      features: [
        { subtitle: "Instant Digital Banking", content: "Free Account." },
        { subtitle: "Expense Cards", content: "Issue expense cards to team members for easy management of business expenses." },
        { subtitle: "Bill Payments", content: "Pay business bills easily through the app." },
      ],
      applyLink: "https://www.tide.co/refer-a-friend/?referralName=Franklyn_Obinwanne_Iheanacho&referralCode=PBO23J",
      additionalInfo: [
        { heading: "Additional information", items: [
            "Multi-Currency Transactions: Handle transactions in multiple currencies, beneficial for businesses dealing with international clients.",
            "Customer Support: 24/7 support through the app for assistance.",
            "Financial Insights: Analytics to monitor spending patterns and help with financial planning.",
            "Card Reader: Accept in-person card payments without hassle.",
            "Tide Accounting: Simplified accounting tools to assist with self-assessments and VAT returns.",
            "Business Loans: Apply for finance options without impacting your credit score.",
            "Cashback Rewards: Available on certain accounts for spending on eligible transactions."
          ]
        },
        { heading: "Eligibility", items: [
            "Must be at least 18 years old.",
            "Must be a resident of the UK.",
            "A UK phone number is required for verification."
          ]
        },
      ],
    },
    
    {
      id: 6,
      logo: "/lemfi.png",
      title: "Lemfi",
      features: [
        { subtitle: "Transfers", content: "Fast Transfers within minutes." },
        { subtitle: "Mobile App", content: "Available on iOS and Android for easy money management and transfers." },
        { subtitle: "Exchange Rates", content: "Offers favorable rates for currency exchange during transfers." },
      ],
      applyLink: "https://lemonadefi.app.link/9ohHHQtxdMb",
      additionalInfo: [
        { heading: "Additional information", items: [
            "International Money Transfers: Send money globally with low fees, leveraging real exchange rates.",
            "Global Accounts: Open accounts to receive, hold, and send money internationally.",
            "Free Remittances: Initiatives aimed at reducing costs for sending money.",
            "Loyalty Programs: Potential rewards for regular users, such as points for transactions.",
            "Cards: Use physical and virtual cards for spending across borders."
          ]
        },
        { heading: "Eligibility", items: [
            "Must be at least 18 years old to create an account.",
            "Users may need to provide identification for verification.",
            "Must be a resident of a supported country.",
            "Users need to create and verify their account to use the services."
          ]
        },
      ],
    }
    


  ];

  // Function to load more cards
  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, cards.length));
  };

  // Function to toggle additional information visibility for specific card
  const toggleInfo = (index) => {
    setInfoVisibleIndex(infoVisibleIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

<section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white w-full py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Your Financial Future Awaits!</h1>
          <p className="text-lg mb-8">Explore our range of financial products tailored to your needs.</p>
          <a 
            href="#cards" 
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg transition duration-300 hover:bg-gray-200"
          >
            Discover Now
          </a>
        </div>
      </section>
      {/* Render visible cards */}
      {cards.slice(0, visibleCount).map((card, index) => (
        <div key={card.id} className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 mt-10">
          <div className="flex items-center">
            <img
              src={card.logo} // Replace with your image URL
              alt={card.title}
              className="w-32 h-32 mr-6" // Increased image size
            />
            <div>
              <h1 className="text-xl font-semibold">{card.title}</h1>
            </div>
          </div>
          {card.features.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-4 text-center border-b pb-4">
              {card.features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h2 className="text-sm font-semibold text-gray-500">{feature.subtitle}</h2>
                  <p className="text-xl font-bold">{feature.content}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-start mt-4">
            <a 
              href={card.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-semibold py-4 px-8 rounded w-fit"
            >
              Apply
            </a>
          </div>

          <p className="mt-4 text-gray-600 text-center">
            Monzo Premium: Include additional features, including travel insurance and a metal card.
          </p>

          {/* More Information Toggle */}
          <div className="bg-gray-100 mt-6 p-4 text-center">
            <button
              className="text-gray-600 font-medium"
              onClick={() => toggleInfo(index)} // Pass the index to toggleInfo
            >
              More Information {infoVisibleIndex === index ? "▲" : "▼"}
            </button>
          </div>

          {/* Additional Information */}
          {infoVisibleIndex === index && ( // Show info only for the clicked card
            <div className="bg-gray-100 mt-2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Additional information</h2>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {card.additionalInfo[0].items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Eligibility</h2>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {card.additionalInfo[1].items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Load More button */}
      {visibleCount < cards.length && (
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mt-10"
          onClick={loadMore}
        >
          Load More
        </button>
      )}

<footer className="bg-gray-800 text-white py-6 mt-10 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">©  {new Date().getFullYear()} BEYONDTRUST. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;



