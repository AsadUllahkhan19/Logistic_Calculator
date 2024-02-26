import React, { useState, useEffect } from "react";

const questions = [
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "What kind of app do you want to build ?",
    opt: ["Web App", "Mobile application", "Both"],
    selectionType: "single",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "How do you want to login users ?",
    opt: [
      "Email/password",
      "Google",
      "Facebook",
      "Twitter",
      "Apple",
      "Github",
      "Email Validation",
      "Linkedin",
    ],
    selectionType: "multiple",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "WHICH UI/UX DESIGN LEVEL WOULD YOU LIKE?",
    opt: ["Simple(raw MVP)", "Medium", "Advanced"],
    selectionType: "single",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "WHAT WILL A USER BE ABLE TO DO IN YOUR APP?",
    opt: [
      "Activity Feed",
      "Dashboard",
      "File Uploading",
      "User Profile",
      "Tags//Comments",
      "Search//Filters",
      "Rating or reviews",
      "Video // audio calls",
      "Chat (a great solution for Education or Social media platforms)",
      "Booking // calendar",
      "Working with map (shows specific locations in live mode)",
    ],
    selectionType: "multiple",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "How do you want to process payments?",
    opt: [
      "Credit card (Stripe, Paypal)",
      "In-app purchases (for mobile)",
      "Crypto",
      "Don't want to process payment",
    ],
    selectionType: "single",
  },
  {
    type: "Classic Development",
    subcategory: "mobile",
    ques: "WHAT MOBILE FEATURES WOULD YOU LIKE TO INCLUDE",
    opt: [
      "Notifications",
      "Bar Codes // QR Codes",
      "Apple Watch",
      "Online scanner",
      "Cloud Syncing",
      "Health data",
      "App icon design",
    ],
    selectionType: "multiple",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "WHAT FUNCTIONALITIES DO YOU WANT IN THE ADMIN PANEL?",
    opt: [
      "Crash reporting (we offer Sentry to be aware of fails)",
      "Usage analytics (we offer Flurry, and Mixpanel to find how users come and track their activity)",
      "Multilingual support (for multiple translations for your app)",
      "Intercom (a leading third-party platform for managing engagement, emails, feature announcements, etc.)",
      "Don't want Admin Panel",
    ],
    selectionType: "single",
  },
  {
    type: "Classic Development",
    subcategory: "both",
    ques: "IS HIGH-LEVEL SECURITY VITAL FOR YOUR STARTUP?",
    opt: [
      "Two-factor AUTH (common for financial or sensitive information-based apps)",
      "E2E // Unit tests (for AUTH)",
      "DDOS protection",
      "SSL Certificate-based security",
    ],
    selectionType: "multiple",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "WHAT KIND OF APP DO YOU WANT TO BUILD?",
    opt: ["Web", "Mobile", "Both"],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "HOW DO YOU WANT TO LOG IN USERS?",
    opt: ["Metamask", "Wallet Connect", "Web3Auth", "Cold wallets integration"],
    selectionType: "multiple",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "WHICH FEATURES WILL YOUR APP HAVE?",
    opt: [
      "NFT Minting",
      "NFT Marketplace",
      "Opensea API integration",
      "Portfolio tracking (Moralis)",
      "Launchpad",
      "DeX (Uniswap etc.)",
      "Cross-chain bridges integration",
    ],
    selectionType: "multiple",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "WHICH CHAIN WOULD YOU LIKE TO USE?",
    opt: [
      "ETH, BSC, or Polygon",
      "Solana",
      "Near",
      "Algorand",
      "Hedera",
      "Cairo",
      "Cardano",
    ],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "WHICH UI/UX-DESIGN LEVEL WOULD YOU LIKE?",
    opt: [
      "Simple (raw MVP, no UI/UX designer)",
      "Medium (more aesthetic design, optional use of purchased template)",
      "Advanced (outstanding UI design, additional animations, transitions, etc.)",
    ],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "HOW DO YOU WANT TO PROCESS PAYMENTS?",
    opt: [
      "Native on-chain payments",
      "Credit card crypto payments (WIRE, Stripe or Moonpay)",
    ],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "WHAT FUNCTIONALITIES DO YOU WANT TO ADD TO AN ADMIN PANEL TO THE APP?",
    opt: [
      "Crash reporting (we offer Sentry to be aware of fails)",
      "Usage analytics (we offer Flurry and Mixpanel to find how users come and track their activity)",
      "Multilingual support (for multiple translations for your app)",
      "Intercom (a leading third-party platform for managing engagement, emails, feature announcements, etc.)",
      "No Admin Panel",
    ],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "both",
    ques: "IS HIGH-LEVEL SECURITY VITAL FOR YOUR STARTUP?",
    opt: [
      "E2E // Unit tests (for AUTH)",
      "DDOS protection",
      "SSL Certificate-based security",
    ],
    selectionType: "single",
  },
  {
    type: "Blockchain Development",
    subcategory: "mobile",
    ques: "WHAT MOBILE FEATURES WOULD YOU LIKE TO INCLUDE?",
    opt: [
      "Notifications",
      "Bar Codes // QR Codes",
      "Apple Watch",
      "Online scanner",
      "Cloud Syncing",
      "Health data",
      "App icon design",
    ],
    selectionType: "multiple",
  },
  {
    type: "Shopify Store",
    subcategory: "both",
    ques: "WHAT CMS DO YOU WANT?",
    opt: ["Shopify", "Wordpress"],
    selectionType: "single",
  },
  {
    type: "Shopify Store",
    subcategory: "both",
    ques: "WHAT TYPE OF WEBSITE DO YOU WANT?",
    opt: ["E-Commerce", "Business Portfolio"],
    selectionType: "single",
  },
  {
    type: "Shopify Store",
    subcategory: "both",
    ques: "WHAT NUMBER OF PRODUCTS DO YOU WANT TO ADD?",
    opt: ["50", "100", "200+"],
    selectionType: "single",
  },
  {
    type: "Tiktok Store",
    subcategory: "both",
    ques: "WHAT TYPE OF CONTENT DO YOU ENVISION SHARING ON TIKTOK?",
    opt: ["Product showcases", "User-generated content", "Other"],
    selectionType: "single",
  },
  {
    type: "Tiktok Store",
    subcategory: "both",
    ques: "WHO IS YOUR TARGET AUDIENCE OR CUSTOMER DEMOGRAPHIC?",
    opt: ["General audience", "Specific niche or market segment"],
    selectionType: "single",
  },
  {
    type: "Tiktok Store",
    subcategory: "both",
    ques: "HOW OFTEN WOULD YOU LIKE TO POST ON TIKTOK?",
    opt: ["Daily", "2-3 times a week", "Weekly"],
    selectionType: "single",
  },
  {
    type: "Tiktok Store",
    subcategory: "both",
    ques: "WHICH PAYMENT MODULE ARE YOU COMFORTABLE WITH FOR OUR TIKTOK SHOP SERVICES?",
    opt: [
      "50% Partnership ($400 upfront and 50% net profit sharing)",
      "30% Partnership ($700 upfront and 30% net profit sharing)",
      "Retainers Module ($600 upfront and $400 for retainers)",
    ],
    selectionType: "single",
  },
];
const qstage = [1, 2, 3, 4, 5, 6, 7, 8];

const QuestionsScreen = ({ stepcount, setstepcount, technology }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [qstep, setqstep] = useState(1);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    let filteredQuestionsArray;
    if (
      (selectedOptions.length > 0 &&
        currentQuestion === 0 &&
        selectedOptions[0] == "Web App") ||
      "Web"
    ) {
      filteredQuestionsArray = questions.filter(
        (question) =>
          question.type === technology && question.subcategory === "both"
      );
    } else {
      filteredQuestionsArray = questions.filter(
        (question) => question.type === technology
      );
    }

    setFilteredQuestions(filteredQuestionsArray);
  }, [technology]);
  console.log(filteredQuestions, "hola..");

  const handleOptionClick = (option) => {
    const currentQuestionData = filteredQuestions[currentQuestion];
    let updatedOptions;

    if (currentQuestionData.selectionType === "multiple") {
      // For questions allowing multiple selections (checkboxes)
      const existingQuestionIndex = selectedOptions.findIndex(
        (item) => item.question === currentQuestionData.ques
      );

      if (existingQuestionIndex !== -1) {
        // Question already exists in selectedOptions, update its options array
        const updatedOptionObject = {
          ...selectedOptions[existingQuestionIndex],
          options: [...selectedOptions[existingQuestionIndex].options, option],
        };

        updatedOptions = [
          ...selectedOptions.slice(0, existingQuestionIndex),
          updatedOptionObject,
          ...selectedOptions.slice(existingQuestionIndex + 1),
        ];
      } else {
        // Question doesn't exist in selectedOptions, add it with the selected option
        updatedOptions = [
          ...selectedOptions,
          {
            question: currentQuestionData.ques,
            options: [option],
          },
        ];
      }
    } else {
      // For questions allowing single selection (radio button behavior)
      const existingQuestionIndex = selectedOptions.findIndex(
        (item) => item.question === currentQuestionData.ques
      );

      if (existingQuestionIndex !== -1) {
        // Question already exists in selectedOptions, update its options array
        const updatedOptionObject = {
          ...selectedOptions[existingQuestionIndex],
          options: [option],
        };

        updatedOptions = [
          ...selectedOptions.slice(0, existingQuestionIndex),
          updatedOptionObject,
          ...selectedOptions.slice(existingQuestionIndex + 1),
        ];
      } else {
        // Question doesn't exist in selectedOptions, add it with the selected option
        updatedOptions = [
          ...selectedOptions,
          {
            question: currentQuestionData.ques,
            options: [option],
          },
        ];
      }
    }

    setSelectedOptions(updatedOptions);
  };
  const moveToNextQuestion = () => {
    const currentQuestionData = filteredQuestions[currentQuestion];

    // Check if any option is selected for the current question
    const isOptionSelected = selectedOptions.some(
      (item) => item.question === currentQuestionData.ques
    );

    if (isOptionSelected) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < filteredQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOptions([...selectedOptions]);
      } else {
        setstepcount(stepcount + 1);
      }
    } else {
      // Handle error, display a message, or prevent user from proceeding
      alert("Please select an option before moving to the next question.");
      // You can customize this error handling based on your UI requirements.
    }
  };

  const handleClick = (curques) => {
    if (curques < currentQuestion) setCurrentQuestion(curques);
  };

  const currentQuestionData = filteredQuestions[currentQuestion];

  return (
    <>
      <div className="rounded-lg h-[65%] bg-slate-100 drop-shadow-xl shadow-inner shadow-slate-600 p-6 py-8">
        {currentQuestion < filteredQuestions.length && (
          <div className="text-xl text-black">
            <p className="mb-4">
              {filteredQuestions[currentQuestion]?.ques || ""}
            </p>
            <ul className="max-h-40 overflow-y-auto">
              {filteredQuestions[currentQuestion]?.opt.map((option, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    selectedOptions.some(
                      (item) =>
                        item.question ===
                          filteredQuestions[currentQuestion]?.ques &&
                        item.options.includes(option)
                    )
                      ? "font-bold text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {console.log(selectedOptions, "Aqsa..")}
      </div>

      <div className="flex sma:flex-row sma3:flex-col gap-4 sma3:items-start justify-between items-end">
        <div className="w-[45%] sma3:w-[100%] sma2:w-[90%] sma:w-[90%]  flex flex-row flex-wrap gap-4  ">
          {qstage.map((element, index) => (
            <button
              className=" px-4 rounded-lg h-10 w-auto  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600"
              onClick={() => {
                handleClick(index);
              }}
            >
              {currentQuestion === index ? `Step ${element}` : element}
            </button>
          ))}
        </div>
        <div>
          {" "}
          <button
            onClick={moveToNextQuestion}
            className=" w-[130px] h-[40px] rounded-lg bg-slate-100 mb-4 shadow-md shadow-slate-500 text-center text-xl"
          >
            Next
          </button>
        </div>
      </div>
      {console.log(selectedOptions, "Hello...")}
    </>
  );
};

export default QuestionsScreen;
