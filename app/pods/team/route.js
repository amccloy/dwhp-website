import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return data;
  },
});

const data = [
  {
    id: 1,
    type: "investment",
    name: "Andrew Carragher",
    image: "andrew-carragher",
    title: "Founder & Managing Partner",
    location: "Toronto, Ontario",
    telephone: "416-583-2421",
    email: "acarragher@dwhp.com",
    currentBoard: [
      {
        name: "Pentec Health",
        url: "http://www.pentechealth.com"
      },
      {
        name: "Reliant Renal Care, Inc.",
        url: "http://www.reliantrenalcare.com"
      },
      {
        name: "Reliant Rehabilitation",
        url: "http://www.reliant-rehab.com"
      },
      {
        name: "Z-Medica Corporation",
        url: "http://www.z-medica.com"
      },
      {
        name: "Med-Pharmex",
        url: "http://www.z-medica.com"
      },
      {
        name: "Z-Medica Corporation",
        url: "http://med-pharmex.com"
      },
      {
        name: "EHE International",
        url: "http://www.eheintl.com"
      },
      {
        name: "Isologic",
        url: "http://www.isologicradiopharm.ca"
      }
    ],
    previousBoard: [
      {
        name: "Aerosol Science Laboratories Inc.",
        url: "http://www.aslrx.com/"
      },
      {
        name: "ABC Home Medical Supply",
        url: "http://www.abchomemedical.com/"
      },
      {
        name: "Career Step",
        url: "http://www.careerstep.com/"
      },
      {
        name: "Genesis Technology Partners",
        url: null
      },
      {
        name: "Health & Safety Institute",
        url: "http://www.hsi.com/"
      },
      {
        name: "Tandem Labs, Inc.",
        url: null
      },
      {
        name: "Verathon",
        url: "http://www.verathon.com/"
      },
    ],
    experience: [
      "Ventro Corporation",
      "Total Renal Care (Davita)",
      "Bain & Company"
    ],
    education: [
      "H.B.A., Ivey School of Business, The University of Western Ontario",
      "M.B.A, Harvard Business School"
    ],
    bio: [
      "Andrew is a Founder and Managing Partner of DW Healthcare Partners. Andrew's investment experience includes clinical research organizations, dialysis clinics, behavioral health, specialty infusion, clinical labs and medical devices. He has considerable experience in building and operating healthcare companies, overseeing mergers and acquisitions, and raising capital.",
      "Prior to co-founding DW Healthcare Partners, Andrew was Vice President of Business Development at Ventro Corporation, a builder and aggregator of electronic marketplaces. He was responsible for over $1.2 billion in mergers and acquisitions, including Ventro's purchase of Promedix Corporation and SpecialtyMD. During his tenure at Ventro, Andrew helped create and raise capital for Broadlane, a joint venture between Tenet Healthcare and Ventro.",
      "Prior to Ventro, Andrew was Director of Corporate Development/Mergers and Acquisitions at Total Renal Care (now Davita), an operator of 500 dialysis clinics. Andrew completed over 25 transactions with an aggregate value of $2.3 billion.",
      "Before Total Renal Care, Andrew was a Divisional Manager at Weston Foods in New York City, a 200-employee manufacturing and distribution business in the bakery and confectionary business. Andrew also worked for Bain & Company, a leading international strategy and consulting firm.",
      "Andrew was raised in Toronto, Canada. He received his Bachelors degree in Business Administration from the University of Western Ontario and his MBA from Harvard Business School.",
      "Andrew was recognized in 2006 as one of Utah's Top 40 Under 40 and was a previous member of Utah's YPO chapter."
    ]
  },
  {
    id: 2,
    type: "investment",
    name: "Doug Schillinger",
    image: "doug-schillinger",
    title: "Managing Director",
    location: "Park City, Utah",
    telephone: "435-645-4056",
    email: "doug@dwhp.com",
    currentBoard: [
      {
        name: "Reliant Rehabilitation",
        url: "http://www.reliant-rehab.com/"
      },
      {
        name: "Z-Medica Corporation",
        url: "http://www.z-medica.com/"
      }
    ],
    previousBoard: [
      {
        name: "Arteriocyte Medical Systems",
        url: "http://www.arteriocyte.com/"
      },
      {
        name: "BGS Pharmacy Partners",
        url: null
      },
      {
        name: "Emphusion",
        url: null
      },
      {
        name: "Global Physics Solutions",
        url: null
      },
      {
        name: "Health & Safety Institute",
        url: "http://www.hsi.com/"
      },
      {
        name: "Hill Top Research",
        url: "http://www.hill-top.com/"
      },
      {
        name: "Tandem Labs, Inc.",
        url: null
      }
    ],
    experience: [
      "Bain & Company",
      "Accenture Consulting"
    ],
    education: [
      "B.S., Cornell University",
      "M.B.A, Harvard Business School"
    ],
    bio: [
      "Doug is a Managing Director with DW Healthcare Partners. His investment and transaction experience includes bio-analytical/immune-analytical service laboratories, institutional and specialty pharmacies, medical device manufacturers in the cardiac and orthopedic markets, physician practice management companies, elder care service providers and clinical research organizations.",
      "Before joining DW Healthcare Partners, Doug worked for Bain & Company. While there, Doug led strategic due diligence efforts as part of Bain's Private Equity Group. Prior to joining Bain's Private Equity Group, Doug advised Bain's commercial clients in the consumer products and food service industries.",
      "Doug also worked with Accenture (formerly Andersen Consulting), an international consulting firm focused on information technologies and process reengineering.",
      "Doug was raised in Connecticut. He has received a Bachelors degree from Cornell University and an MBA with Distinction from Harvard Business School, and currently sits on the Harvard Business School Alumni Board of Directors."
    ]
  },
  {
    id: 3,
    type: "investment",
    name: "Rod Boone",
    image: "rod-boone",
    title: "Managing Director",
    location: "Toronto, Ontario",
    telephone: "435-645-4066",
    email: "rod@dwhp.com",
    currentBoard: [
      {
        name: "Pentec Health",
        url: "http://www.pentechealth.com/"
      },
      {
        name: "Med-Pharmex",
        url: "http://www.z-medica.com"
      },
      {
        name: "Caregiver",
        url: null
      },
      {
        name: "Isologic",
        url: "http://www.isologicradiopharm.ca"
      }
    ],
    previousBoard: [
      {
        name: "ABC Home Medical Supply",
        url: "http://www.abchomemedical.com/"
      },
      {
        name: "Aerosol Science Laboratories Inc.",
        url: "http://www.aslrx.com/"
      },
      {
        name: "Career Step",
        url: "http://www.careerstep.com/"
      },
      {
        name: "Emphusion",
        url: null
      },
      {
        name: "Health & Safety Institute",
        url: "http://www.hsi.com/"
      },
      {
        name: "Hill Top Research",
        url: "http://www.hill-top.com/"
      },
      {
        name: "Tandem Labs, Inc",
        url: null
      },
      {
        name: "BGS Pharmacy Partners",
        url: null
      }
    ],
    experience: [
      "Royce Medical",
      "Syncor Pharmaceutical Services",
      "Allegiance Healthcare"
    ],
    education: [
      "B.S., Oregon State University",
      "M.B.A., Pepperdine University, Graziadio School of Business"
    ],
    bio: [
      "Rod has over 20 years of experience growing, building and operating healthcare companies. His focus is on directly working with portfolio companies on both strategy and operations.",
      "Prior to joining DW Healthcare Partners, Rod was President and CEO of Royce Medical Holdings, a private equity owned orthopedics manufacturer with multiple manufacturing sites in New Jersey, Taiwan, China and California.",
      "Before Royce Medical, Rod was President and CEO of Syncor Pharmaceutical Services, a $700 million division of Syncor International (NYSE: SCOR) with over 2200 employees. While CEO of Syncor Pharmaceutical Services, he launched five new businesses and developed a growth strategy that grew the division from $489 million to $700 million in two years. In January 2003, Syncor was acquired by Cardinal Health (NYSE: CAH) for $1 billion.",
      "Prior to Syncor, Rod was President of the West Region and Corporate Officer at Allegiance Healthcare. Before this assignment, he also held a number of senior positions at Allegiance and Baxter Healthcare.",
      "Rod holds a Bachelors Degree in Science from Oregon State University and an MBA degree from the Graziadio School of Business at Pepperdine University."
    ]
  },
  {
    id: 4,
    type: "investment",
    name: "Jay Benear",
    image: "jay-benear",
    title: "Founder & Managing Director",
    location: "Park City, Utah",
    telephone: "435-645-4052",
    email: "jay@dwhp.com",
    currentBoard: [
      {
        name: "Reliant Rehabilitation",
        url: "http://www.reliant-rehab.com/"
      },
      {
        name: "Isologic",
        url: "http://www.isologicradiopharm.ca"
      },
    ],
    previousBoard: [
      {
        name: "Arteriocyte Medical Systems",
        url: "http://www.arteriocyte.com/"
      },
      {
        name: "BGS Pharmacy Partners",
        url: null
      },
      {
        name: "Emphusion",
        url: null
      },
      {
        name: "Genesis Technology Partners",
        url: null
      },
      {
        name: "Global Physics Solutions",
        url: null
      },
      {
        name: "Hill Top Research",
        url: "http://www.hill-top.com/"
      },
      {
        name: "The Radlinx Group",
        url: "https://www.nighthawkradiology.com/"
      }
    ],
    experience: [
      "US Oncology"
    ],
    education: [
      "B.A., Rice University",
      "M.D. Oklahoma University"
    ],
    bio: [
      "Jay is a Founder and Managing Director of DW Healthcare Partners. He practiced medical oncology from 1984 - 2002. Jay worked as President at Cancer Care Associates as it grew from six to 42 doctors. Cancer Care Associates joined the US Oncology (NASDAQ:USON) network in 1995. Jay served in multiple roles at US Oncology as it grew from 90 doctors to over 800. He was on the Executive Committee, served as one of the first Medical Directors, was Vice Chairman of the Policy Board, served on the Executive Committee of the Pharmacy and Therapeutics Committee, and was Chairman of several pharmaceutical company research liaison boards.",
      "Jay has also served on numerous American Society of Clinical Oncology boards, committees and panels, including the Strategic Planning Committee in 1996, the Clinical Practice Committee, and the Managed Care Committee. He chaired the Managed Care and Practice Improvement Symposium for three years.",
      "Jay has served as a trustee or board member for the Leukemia Society of America, the American Cancer Society, and the Development Board for the Park City Hospital. Jay graduated from Rice University with a BA in Psychology in 1975. He completed medical school at Oklahoma University in 1979 and finished oncology training in 1984."
    ]
  },
  {
    id: 5,
    type: "investment",
    name: "Lance Ruud",
    image: "lance-ruud",
    title: "Managing Director & Chief Financial Officer",
    location: "Park City, Utah",
    telephone: "435-645-4054",
    email: "lance@dwhp.com",
    currentBoard: [
      {
        name: "Z-Medica Corporation",
        url: "http://www.z-medica.com/"
      }
    ],
    previousBoard: [
      {
        name: "Arteriocyte",
        url: "http://www.arteriocyte.com/"
      }
    ],
    experience: [
      "HTD Corporation",
      "TransAmerican Waste Industries",
      "Republic Waste Industries"
    ],
    education: [
      "B.S., University of Utah"
    ],
    bio: [
      "Lance has 25 years of experience in acquisitions, financings and operations, with both private and public companies. Prior to DW Healthcare Partners, Lance was a Senior Vice President and CFO of HTD Corporation, a specialty medical products distributor. He was also CFO and Director of TransAmerican Waste Industries and the CFO of Republic Waste Industries. He began his career as a CPA with Andersen LLP.",
      "Lance was raised in Salt Lake City, Utah, and spent a significant portion of his career in Houston and Atlanta. He graduated with a Bachelor of Science degree in Accounting from the University of Utah."
    ]
  },
  {
    id: 6,
    type: "investment",
    name: "Aly Champsi",
    image: "aly-champsi",
    title: "Principal",
    location: "Toronto, Ontario",
    telephone: "416-583-2422",
    email: "aly@dwhp.com",
    currentBoard: [
      {
        name: "EHE International",
        url: "http://www.eheintl.com"
      },
      {
        name: "Caregiver",
        url: null
      }
    ],
    experience: [
      "Clairvest",
      "Mercer Management Consulting",
      "BMO Nesbitt Burns",
      "Boards: Landauer Metropolitan Inc., Momentum Aerospace Group, Casino Marina Del Sol, Casino Sol Calama, Casino Sol Osorno"
    ],
    education: [
      "H.B.A., Ivey School of Business, The University of Western Ontario"
    ],
    bio: [
      "Aly joined DW Healthcare Partners in April of 2014 and brings over 12 years of merger and acquisition experience. Previously at Clairvest Group (Private Equity), he supported activities in domain research, new investment origination, structuring and execution. He has served on 5 boards. Before joining Clairvest, Aly worked as a consultant for Mercer Management Consulting and as an investment banker at BMO Nesbitt Burns.",
      "Aly was raised in Toronto, Ontario. He earned his Honours Business Administration degree from the Richard Ivey School of Business at the University of Western Ontario."
    ]
  },
  {
    id: 7,
    type: "investment",
    name: "Gabe Becher",
    image: "gabe-becher",
    title: "Principal",
    location: "Toronto, Ontario",
    telephone: "416-583-2423",
    email: "gabe@dwhp.com",
    board: null,
    experience: [
      "AIMCo (Alberta Investment Management Corporation)",
      "WagJag Inc.",
      "FirstOnSite Restoration L.P.",
      "TorQuest Partners",
      "Merrill Lynch & Co"
    ],
    education: [
      "H.B.A., Ivey School of Business, The University of Western Ontario"
    ],
    bio: [
      "Gabe joined DW Healthcare Partners in August of 2016 and brings 12 years of merger and acquisition experience. Previously at AIMCo, he was responsible for sourcing, executing and managing direct private equity investments with a focus on the business services and financial services sectors. Gabe also co-founded WagJag, an online “local offer” business that offers flash sales on a wide variety of products and services. ",
      "Prior to WagJag, Gabe worked as the Director of Corporate Development for FirstOnSite Restoration L.P., where he executed over a dozen acquisitions as part of a national roll-up strategy. Earlier in his career, he worked as an Associate at TorQuest Partners and an Analyst at Merrill Lynch.",
      "Gabe was raised in Vancouver, British Columbia. He earned his Honours Business Administration degree from the Richard Ivey School of Business at the University of Western Ontario."
    ]
  },
  {
    id: 8,
    type: "investment",
    name: "Eric Moore",
    image: "eric-moore",
    title: "Senior Associate",
    location: "Park City, Utah",
    telephone: "435-645-4051",
    email: "emoore@dwhp.com",
    board: null,
    experience: [
      "sPower",
      "DW Healthcare Partners",
      "Nomura Securities International"
    ],
    education: [
      "B.S., University of Denver"
    ],
    bio: [
      "Prior to rejoining DW Healthcare Partners in 2015, Eric worked in operations at sPower, a high-growth renewable energy company that deployed over $800 million, more than doubled its employee base, and quadrupled its run rate EBITDA during his time there. Before sPower, Eric was an Associate with DW Healthcare Partners in its Toronto office. He began his career in investment banking at Nomura.",
      "Eric graduated from the University of Denver in the top ten percent of his class. He was born in Dallas, Texas and raised in Park City, Utah."
    ]
  },
  {
    id: 9,
    type: "investment",
    name: "Ajay Shivdasani",
    image: "ajay-shivdasani",
    title: "Associate",
    location: "Toronto, Ontario",
    telephone: "416-583-2424",
    email: "ajay@dwhp.com",
    board: null,
    experience: [
      "J.P. Morgan",
      "Oliver Wyman",
      "ZS Associates"
    ],
    education: [
      "M.B.A., INSEAD",
      "B.A.Sc., University of Toronto"
    ],
    bio: [
      "Prior to joining DW Healthcare Partners, Ajay worked as a Private Banking Summer Associate in London for J.P. Morgan where he identified new prospects in the UK hedge fund industry and how to further develop investment strategies with existing clients. Prior to J.P. Morgan, Ajay worked as an Engagement Manager at Oliver Wyman where he designed a restructuring strategy resulting in a savings of $12M, developed a market-entry strategy for a new service offering, and participated in an implementation strategy of a US government mortgage relief program. In 2013, he passed the Level I CFA Exam.",
      "Ajay graduated with an M.B.A. from INSEAD and a B.A.Sc. in Industrial Engineering from the University of Toronto."
    ]
  },
  {
    id: 10,
    type: "investment",
    name: "Josh Boylan",
    image: "josh-boylan",
    title: "Associate",
    location: "Park City, Utah",
    telephone: "435-645-4061",
    email: "jboylan@dwhp.com",
    board: null,
    experience: [
      "United States Senate",
      "UBS"
    ],
    education: [
      "B.Sc., London School of Economics"
    ],
    bio: [
      "Prior to joining DW Healthcare Partners, Josh was an Economic Policy Fellow in the United State Senate, where he focused on Medicare and Medicaid reform. Prior to the Senate, Josh was an analyst in UBS’s Global Healthcare Group, based in London. At UBS, he advised healthcare companies and financial sponsors on mergers and acquisitions, leveraged buyouts, and financings.",
      "Josh was raised in Waitsfield, VT. He graduated from the London School of Economics with a B.Sc. in Economic History with First Class Honours."
    ]
  },
  {
    id: 11,
    type: "investment",
    name: "Aaron Kennedy",
    image: "aaron-kennedy",
    title: "Associate",
    location: "Toronto, Ontario",
    telephone: "416-583-2426",
    email: "aaron@dwhp.com",
    board: null,
    experience: [
      "Barclays",
      "VNTG Apparel"
    ],
    education: [
      "H.B.A., Ivey School of Business, The University of Western Ontario"
    ],
    bio: [
      "Prior to joining DW Healthcare Partners, Aaron worked as an Analyst at Barclays where he worked with financial sponsors and corporate clients in the telecom, power & utilities, consumer retailing, industrials, infrastructure and business services sectors. While still at University, Aaron co-Founded VNTG Apparel, a vintage style apparel brand and received a prestigious scholarship for entrepreneurship for this and other entrepreneurial activities.",
      "Aaron was raised in Vancouver and is involved in many outdoor sports, including adaptive skiing and Ironman Triathlons. He graduated on the Dean’s Honor List from the Ivey Business School at Western University where he also played Varsity Rugby."
    ]
  },
  {
    id: 12,
    type: "investment",
    name: "Michael Mitchnick",
    image: "michael-mitchnick",
    title: "Associate",
    location: "Toronto, Ontario",
    telephone: "416-583-2427",
    email: "mmitchnick@dwhp.com",
    board: null,
    experience: [
      "TD Securities"
    ],
    education: [
      "H.B.A., University of Western Ontario"
    ],
    bio: [
      "Prior to joining DW Healthcare Partners, Michael worked as an Investment Banking Associate at TD Securities in the Communications, Media and Technology Group. While at TD Securities, he advised financial sponsors and corporate clients in the communications, media and power & utilities sectors on mergers & acquisitions, restructurings and financings.",
      "Michael was raised in Toronto and was involved in many sports growing up. With a specific focus on cycling, he spent several years on the Ontario Cross-Country Mountain Bike Team. He graduated with an HBA from the Ivey Business School at Western University."
    ]
  },
  {
    id: 13,
    type: "sourcing",
    name: "Liz Null",
    image: "liz-null",
    title: "Vice President, Investment Sourcing",
    location: "Park City, Utah",
    telephone: "435-645-4058",
    email: "liz@dwhp.com",
    board: null,
    experience: [
      "Earn As You Learn",
      "Atitania",
      "Promedix",
      "MCA HealthPages"
    ],
    education: [
      "B.A., University of California, Berkeley"
    ],
    bio: [
      "Liz has 19 years of sales and marketing experience with medical manufacturers, distributors and healthcare providers. She joined DW Healthcare Partners in 2004 to help build and manage their proprietary deal origination team. Prior to DW Healthcare Partners, she worked with early stage companies to develop and launch product and service offerings in the marketplace. She has held executive positions at Earn As You Learn, an online children's literacy program; Atitania, a data management company; Promedix, an e-commerce specialty medical products company and MCA HealthPages, a healthcare focused web hosting and design firm.",
      "Liz was born in Savannah, Georgia and raised in Salt Lake City, Utah. She received a Bachelor of Arts degree, with honors, in History from the University of California, Berkeley."
    ]
  },
  {
    id: 14,
    type: "sourcing",
    name: "Lisa Downey",
    image: "lisa-downey",
    title: "Vice President, Investment Sourcing",
    location: "Toronto, Ontario",
    telephone: "416-583-2428",
    email: "lisa@dwhp.com",
    board: null,
    experience: [
      "GlobalData",
      "Heartbeat Experts",
      "Millennium Research Group",
      "University of Guelph Laboratory Services"
    ],
    education: [
      "B.Sc., University of Western Ontario"
    ],
    bio: [
      "Lisa has 10 years of international sales experience within the medical device, diagnostic imaging and pharmaceutical space. She joined DW Healthcare Partners in 2016 to help strategically build and manage their proprietary deal origination team. Prior to DWHP, she worked with various market research and analytics companies to help clients better understand their markets and competitive landscape. She has held executive positions at GlobalData, a market intelligence leader delivering research and consultancy to the healthcare industry; Heartbeat Experts, a data analytics and stakeholder management company; and Millennium Research Group, the largest provider of medical device market research in the world.",
      "Lisa was born in Guelph, Ontario. She received a Bachelor of Science degree in Chemistry from The University of Western Ontario."
    ]
  },
  {
    id: 15,
    type: "sourcing",
    name: "Alex Bronstein",
    image: "alex-bronstein",
    title: "Investment Sourcing Executive",
    location: "Toronto, Ontario",
    telephone: "416-583-2434",
    email: "abronstein@dwhp.com",
    board: null,
    experience: [
      "SimplyInsight",
      "SoapBox Innovations",
      "Big Tree Capital Partners",
      "UBS Securities",
      "SEI"
    ],
    education: [
      "M.B.A., Rotman School of Management, University of Toronto",
      "B.A., University of Toronto"
    ],
    bio: [
      "Alex Bronstein has nine years of experience in the financial sector and two years of experience in business development. Prior to DW Healthcare Partners, he sold cloud-based technology solutions for SimplyInsight and SoapBox, both tech start-ups in Toronto. He also worked as a Private Equity Associate for Big Tree Capital Partners and interned on the equity desk at UBS while completing his master’s degree. Before moving to Toronto to pursue his M.B.A, Alex worked for SEI Investments in their retail and institutional businesses, including a year spent abroad in London.",
      "Alex graduated with an M.B.A. and a B.A. in Economics from University of Toronto. He was born outside Philadelphia and enjoys weightlifting, traveling and film."
    ]
  },
  {
    id: 16,
    type: "sourcing",
    name: "Laila Fareed",
    image: "laila-fareed",
    title: "Investment Sourcing Executive",
    location: "Toronto, Ontario",
    telephone: "416-583-2433",
    email: "lfareed@dwhp.com",
    board: null,
    experience: [
      "Elavon Canada",
      "Naturalizer",
      "Southdown Animal Clinic",
      "University of Western Ontario"
    ],
    education: [
      "B.A., University of Western Ontario"
    ],
    bio: [
      "Laila Fareed has three years of sales experience and two and a half years of experience working in the medical field. Prior to DW Healthcare Partners, she was a Senior Account Executive for B2B Inside Sales where she sold Elavon Canada’s Point-Of-Sale solutions to companies in need of credit and debit card processing. In 2015, she received an award for being the top Canadian Account Executive for the company. In her years of experience at Naturalizer, she consistently exceeded monthly sales. She also spent time as a veterinary assistant, where she was heavily involved with the animals, owners, veterinarians and medical records. At her time at University of Western Ontario, she worked as the Women’s Varsity Basketball Team Manager and was also a Stage Manager for the Western Music Theatre.",
      "Laila received her Honours B.A. degree from University of Western Ontario with a specialization in Psychology and a minor in Criminology."
    ]
  },
  {
    id: 17,
    type: "sourcing",
    name: "Del Soltani",
    image: "del-soltani",
    title: "Investment Sourcing Executive",
    location: "Toronto, Ontario",
    telephone: "416-583-2432",
    email: "del@dwhp.com",
    board: null,
    experience: [
      "Checkout 51",
      "EF International Language School",
      "Efficience3",
      "Richard Ivey School of Business"
    ],
    education: [
      "B.A., Western University"
    ],
    bio: [
      "Prior to joining DW Healthcare Partners, Del worked as a Program Coordinator at Checkout 51, where she managed 40 different accounts in the CPG industry and coordinated digital campaigns with combined budgets of over $6 million. Prior to that, Del worked in direct marketing at EF International Language, where she worked as a Sales and Marketing Coordinator to generate leads, and Richard Ivey School of business, where she worked as an Alumni Contact Representative. She also has experience in market research from her time abroad at Efficience3.",
      "Del graduated with Honors in Media, Information, and Technology with a minor in Business Marketing from Western University. She is fluent in English, French, and Spanish."
    ]
  },
  {
    id: 18,
    type: "sourcing",
    name: "Erica Armstrong",
    image: "erica-armstrong",
    title: "Research Assistant",
    location: "Park City, Utah",
    telephone: "435-645-4050",
    email: "earmstrong@dwhp.com",
    board: null,
    experience: [
      "National Center for Veteran Studies",
      "CLOSE Lab, University of Utah",
      "Applied Cognition Lab, University of Utah"
    ],
    education: [
      "B.S., University of Utah"
    ],
    bio: [
      "Erica has five years of research experience working in various areas of psychology. Prior to joining DW Healthcare Partners, she worked as research associate for the National Center for Veteran Studies. Erica’s research, which focused on unit support among Special Operations Forces personnel, was published in the Journal of Special Operations Medicine.",
      "Erica was born in Maryland, and raised in Salt Lake City, Utah. She is a recent graduate of the University of Utah, with a double major in Psychology and Speech and Hearing Sciences. She graduated in the top one percent of her psychology class."
    ]
  },
  {
    id: 19,
    type: "admin",
    name: "Christina Boyle",
    image: "christina-boyle",
    title: "Executive Assistant",
    location: "Park City, Utah",
    telephone: "435-645-4069",
    email: "cboyle@dwhp.com",
    board: null,
    experience: [
      "SunTrust Investment Services",
      "UBS Private Wealth Management",
      "Smith Barney"
    ],
    education: [
      "B.A., Rollins College"
    ],
    bio: [
      "Christina has 13 years of administrative experience in private wealth management. Prior to joining DW Healthcare Partners, she worked as an Investment Associate with SunTrust Investment Services, UBS and Smith Barney in Atlanta, Georgia.",
      "Christina was born and raised in New York and received her Bachelor's degree in Sociology at Rollins College in Winter Park, Florida. She holds a series 7, 63 and 66 brokerage license and various insurance licenses."
    ]
  },
  {
    id: 20,
    type: "admin",
    name: "Monica Jensen",
    image: "monica-jensen",
    title: "Controller",
    location: "Park City, Utah",
    telephone: null,
    email: null,
    board: null,
    experience: [
      "Peterson Partners",
      "Quellos Private Capital Markets",
      "Ernst & Young LLP",
      "Arthur Andersen LLP"
    ],
    education: [
      "B.S., Emory University"
    ],
    bio: [
      "Monica has ten years of experience in accounting, with seven years dedicated to fund accounting and operations. Prior to DW Healthcare Partners, Monica was the Controller for Peterson Partners, a Salt Lake City-based private equity firm with over $300 million of capital under management. Previously, she was an Investment Operations Senior Associate for Quellos Private Capital Markets, LP in Seattle, WA. In addition, she worked for Ernst &Young LLP in Assurance and Advisory Business Services and for Arthur Andersen LLP in the tax division.",
      "Monica received her Bachelor's Degree in Business Administration from Emory University and held a CPA license in Washington, which she retired on June 30, 2006."
    ]
  },
  {
    id: 21,
    type: "admin",
    name: "Sheila Grandy",
    image: "sheila-grandy",
    title: "Executive Assistant to Andrew Carragher",
    location: "Toronto, Ontario",
    telephone: "416-583-2431",
    email: "sgrandy@dwhp.com",
    board: null,
    experience: [
      "Clairvest Group Inc.",
      "Office of the Honorable Hilary Weston",
      "Office of W. Galen Weston",
      "George Weston Ltd. Health Services"
    ],
    education: [
      "CDI College"
    ],
    bio: [
      "Sheila has 18 years of administrative experience. Prior to joining DW Healthcare Partners, she worked as an executive assistant for Clairvest Group Inc. Most notably, Sheila worked as a Personal Assistant to The Hon. Hilary M. Weston after working in various progressive positions over 13 years with George Weston Limited.",
      "Sheila was born and raised in Oakville, Ontario and worked for 10 years in Alberta prior to moving back to Toronto."
    ]
  },
  {
    id: 22,
    type: "admin",
    name: "Molly Ryan",
    image: "molly-ryan",
    title: "Office Manager, Toronto",
    location: "Toronto, Ontario",
    telephone: "416-583-2420",
    email: "mryan@dwhp.com",
    board: null,
    experience: [
      "The Intergenerational School and Near West Intergenerational School",
      "The Riverside Company",
      "The Cleveland Clinic Foundation"
    ],
    education: [
      "B.A., Furman University"
    ],
    bio: [
      "Molly Ryan has eight years of administrative experience, with five of those years as the Office Manager for the Riverside Micro-Cap Fund at The Riverside Company. Prior to joining DW Healthcare Partners, Molly worked as the Operations Manager for two charter/alternative schools, The Intergenerational School and the Near West Intergenerational School in downtown Cleveland, Ohio.",
      "Molly received her Bachelor's degree in Art Entrepreneurship at Furman University in Greenville, South Carolina."
    ]
  },
  {
    id: 23,
    type: "admin",
    name: "Dawn Smith",
    image: "dawn-smith",
    title: "Office Manager, Park City",
    location: "Park City, Utah",
    telephone: "435-645-4062",
    email: "dawn@dwhp.com",
    board: null,
    experience: [
      "American Express",
      "PacifiCorp",
      "Freeman, Spogli & Co",
      "Oaktree Capital Management"
    ],
    education: null,
    bio: [
      "Dawn has 14 years of experience within the Investment Banking/Private Equity industries, with a total of 20 years administrative experience. Prior to joining DW Healthcare Partners, Dawn worked at American Express, PacifiCorp and Qwest in Salt Lake City. Most notably, Dawn worked in Los Angeles as an Executive Assistant for Freeman, Spogli & Co. as well as Oaktree Capital Management.",
      "Dawn was born and raised in Southern California and moved to Salt Lake City in 1999. Dawn attended Los Angeles Valley College in California as well as Brigham Young University in Utah."
    ]
  }
];
