import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      investment: investment,
      sourcing: sourcing,
      administration: administration
    }
  },
});

const investment = [
  {
    id: 1,
    name: "Andrew Carragher",
    image: "andrew-carragher",
    title: "Founder & Managing Director",
    telephone: "416-583-2421",
    email: "acarragher@dwhp.com",
    board: [
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
        url: "http://www.masterplan-inc.com/index.html"
      },
      {
        name: "Health & Safety Institute",
        url: "http://www.hsi.com/"
      },
      {
        name: "Pentec Health",
        url: "http://www.pentechealth.com/"
      },
      {
        name: "Reliant Renal Care, Inc.",
        url: "http://www.reliantrenalcare.com/"
      },
      {
        name: "Reliant Rehabilitation",
        url: "http://www.reliant-rehab.com/"
      },
      {
        name: "Tandem Labs, Inc.",
        url: "http://www.tandemlabs.com/"
      },
      {
        name: "Verathon",
        url: "http://www.verathon.com/"
      },
      {
        name: "Z-Medica Corporation",
        url: "http://www.z-medica.com/"
      },
    ],
    experience: [
      "Ventro Corporation",
      "Total Renal Care (Davita)",
      "Bain & Company"
    ],
    education: [
      "B.S., University of Western Ontario",
      "M.B.A, Harvard Business School"
    ],
    bio: [
      "Andrew is a Founder and Managing Director of DW Healthcare Partners, a private equity fund that invests exclusively in healthcare companies. He has and currently sits on the Board of Directors of Genesis Technology Partners, Verathon, Tandem Labs, Reliant Renal Care, Reliant Rehabilitation, Pentec Health, Career Step, Z-Medica Corporation, Health & Safety Institute, ABC Home Medical Supply and Aerosol Science Laboratories Inc. Andrew's investment experience includes clinical research organizations, dialysis clinics, specialty infusion, clinical labs and medical devices. He has considerable experience in building and operating healthcare companies, overseeing mergers and acquisitions, and raising capital.",
      "Prior to co-founding DWHP, Andrew was Vice President of Business Development at Ventro Corporation, a builder and aggregator of electronic marketplaces. Andrew joined Ventro prior to its IPO and was involved in the strategic planning and capital raising process, in which Ventro raised over $40 million in private capital and over $360 million in the public markets, both in the U.S. and Europe. He was also responsible for over $1.2 billion in mergers and acquisitions, including Ventro's purchase of Promedix Corporation and SpecialtyMD. During his tenure at Ventro, Andrew helped create and raise capital for Broadlane, a joint venture between Tenet Healthcare and Ventro.",
      "Prior to Ventro, Andrew was Director of Corporate Development/Mergers and Acquisitions at Total Renal Care (now Davita), an operator of 500 dialysis clinics. Andrew completed over 25 transactions with an aggregate value of $2.3 billion. The company raised over $200 million in public equity, $250 million in public convertible debt, and over $1 billion in syndicated debt.",
      "Before Total Renal Care, Andrew was a Divisional Manager at Weston Foods in New York City, a 200-employee manufacturing and distribution business in the bakery and confectionary business.",
      "Andrew also worked for Bain & Company, a leading international strategy and consulting firm. While there, he advised clients in a number of industries, including telecommunications, airlines and real estate.",
      "Andrew was raised in Toronto, Canada. He received his Bachelors degree in Business Administration from the University of Western Ontario and his MBA from Harvard Business School.",
      "Andrew was recognized in 2006 as one of Utah's Top 40 Under 40 and was a previous member of Utah's YPO chapter."
    ]
  },
  {
    id: 2,
    name: "Doug Schillinger",
    image: "doug-schillinger",
    title: "Managing Director",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 3,
    name: "Rod Boone",
    image: "rod-boone",
    title: "Managing Director",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 4,
    name: "Jay Benear",
    image: "jay-benear",
    title: "Founder & Managing Director",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 5,
    name: "Lance Ruud",
    image: "lance-ruud",
    title: "Managing Director & Chief Financial Officer",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 6,
    name: "Aly Champsi",
    image: "aly-champsi",
    title: "Principal",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 7,
    name: "Gabe Becher",
    image: "gabe-becher",
    title: "Principal",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 8,
    name: "Eric Moore",
    image: "eric-moore",
    title: "Senior Associate",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 9,
    name: "Ajay Shivdasani",
    image: "ajay-shivdasani",
    title: "Associate",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 10,
    name: "Josh Boylan",
    image: "josh-boylan",
    title: "Associate",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 11,
    name: "Aaron Kennedy",
    image: "aaron-kennedy",
    title: "Associate",
    telephone: "416-583-2426",
    email: "aaron@dwhp.com",
    experience: [
      "Barclays",
      "VNTG Apparel"
    ],
    education: [
      "H.B.A., University of Western Ontario"
    ],
    bio: [
      "Prior to joining DWHP, Aaron worked as an Analyst at Barclays where he worked with financial sponsors and corporate clients in the telecom, power & utilities, consumer retailing, industrials, infrastructure and business services sectors. At Barclays, Aaron performed financial analyses and was responsible for building and running various operating, valuation, leveraged buyout and merger models as the lead Analyst on a number of sell-side and buy-side M&A mandates, capital markets financings and leveraged buyouts. While still at University, Aaron co-Founded VNTG Apparel, a vintage style apparel brand and received a prestigious scholarship for entrepreneurship for this and other entrepreneurial activities.",
      "Aaron was raised in Vancouver and is involved in many outdoor sports, including adaptive skiing and Ironman Triathlons. He graduated on the Dean’s Honor List from the Ivey Business School at Western University where he also played Varsity Rugby."
    ]
  },
  {
    id: 12,
    name: "Michael Mitchnick",
    image: "michael-mitchnick",
    title: "Associate",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  }
];

const sourcing = [
  {
    id: 1,
    name: "Liz Null",
    image: "liz-null",
    title: "Vice President, Investment Sourcing",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 2,
    name: "Lisa Downey",
    image: "lisa-downey",
    title: "Vice President, Investment Sourcing",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 3,
    name: "Alex Bronstein",
    image: "alex-bronstein",
    title: "Investment Sourcing Executive",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 4,
    name: "Laila Fareed",
    image: "laila-fareed",
    title: "Investment Sourcing Executive",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 5,
    name: "Del Soltani",
    image: "del-soltani",
    title: "Investment Sourcing Executive",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 6,
    name: "Erica Armstrong",
    image: "erica-armstrong",
    title: "Research Assistant",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  }
];

const administration = [
  {
    id: 1,
    name: "Christina Boyle",
    image: "christina-boyle",
    title: "Executive Assistant",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 2,
    name: "Monica Jensen",
    image: "monica-jensen",
    title: "Controller",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 3,
    name: "Sheila Grandy",
    image: "sheila-grandy",
    title: "Executive Assistant to Andrew Carragher",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id: 4,
    name: "Molly Ryan",
    image: "molly-ryan",
    title: "Administration",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  },
  {
    id:5,
    name: "Dawn Smith",
    image: "dawn-smith",
    title: "Office Manager",
    telephone: "",
    email: "",
    experience: [
      ""
    ],
    education: [
      ""
    ],
    bio: [
      ""
    ]
  }
];
