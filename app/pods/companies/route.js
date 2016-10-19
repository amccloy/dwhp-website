import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return data;
  }
});

const data = [
  {
    id: 1,
    type: "past",
    name: "ABC Medical",
    image: "abc-medical",
    invested: null,
    location: "Dallas, TX",
    bio: [
      "ABC Home Medical Supply provides catheters and other urological products to customers with chronic medical diagnoses such as spinal cord injuries, spina bifida, multiple sclerosis and transverse myelitis."
    ]
  },
  {
    id: 2,
    type: "current",
    name: "Med-Pharmex Inc.",
    image: "med-pharmex",
    invested: null,
    location: "Pomona, CA",
    bio: [
      "Med-Pharmex, Inc. is a leading manufacturer of pharmaceutical products for the animal health market which includes companion and food producing animals."
    ]
  },
  {
    id: 3,
    type: "current",
    name: "Z-Medica",
    image: "z-medica",
    invested: null,
    location: "Wallingford, CT",
    bio: [
      "Z-Medica is a leading medical device company that develops, manufactures and markets innovative hemostatic agents including the QuikClot family of products that rapidly enhance the body's natural coagulation process."
    ]
  },
  {
    id: 4,
    type: "current",
    name: "Reliant Rehabilitation",
    image: "reliant-rehabilitation",
    invested: null,
    location: "Plano, TX",
    bio: [
      "Reliant Rehabilitation is a provider of rehabilitative therapy services to patients residing in long-term care facilities."
    ]
  },
  {
    id: 5,
    type: "current",
    name: "Reliant Renal Care",
    image: "reliant-renal-care",
    invested: null,
    location: "Media, PA",
    bio: [
      "Reliant Renal Care, Inc. is a dialysis build-up that develops and acquires outpatient dialysis facilities to serve patients with end stage renal disease. "
    ]
  },
  {
    id: 6,
    type: "past",
    name: "Arteriocyte Medical Systems",
    image: "arteriocyte",
    invested: null,
    location: "Hopkinton, MA",
    bio: [
      "Arteriocyte Medical Systems is a medical device manufacturer of leading cellular therapy products in the cardiac, orthopedic and vascular surgery market. Arteriocyte's main product is the Magellan Autologous Platelet Separator System purchased from Medtronic. "
    ]
  },
  {
    id: 7,
    type: "past",
    name: "Health & Safety Institute",
    image: "hsi",
    invested: null,
    sold: "May, 2015",
    location: "Eugene, OR",
    bio: [
      "Health & Safety Institute (HSI) is one of the leading providers of safety and emergency care content and training.  In May, 2015, DWHP sold HSI to The Riverside Company, a New York based private equity fund."
    ]
  },
  {
    id: 8,
    type: "past",
    name: "Career Step",
    image: "career-step",
    invested: null,
    sold: "February, 2015",
    location: "Provo, UT",
    bio: [
      "Career Step is a leading provider of online, career-focused training programs in the high-growth healthcare sector. In February 2015, DWHP sold Career Step to Revelstoke Capital Partners, a Denver based private-equity fund."
    ]
  },
  {
    id: 9,
    type: "past",
    name: "Embassy Management",
    image: "embassy",
    invested: null,
    sold: "September, 2013",
    location: null,
    bio: [
      "St. Andrews and its management company, Embassy Management, provide community-based residential and behavioral services and support to adults and children with intellectual and developmental disabilities. In September, 2013, DWHP sold St. Andrews to Bregal Partners, a private investment firm that operates as the investment arm for Cofra Holding AG."
    ]
  },
  {
    id: 10,
    type: "past",
    name: "BGS Pharmacy Partners",
    image: "bgs",
    invested: null,
    sold: "December, 2013",
    location: "Grapevine, TX",
    bio: [
      "BGS Pharmacy Partners, a national, specialty care pharmacy company, provides consulting, management and drug dispensing to the acute, sub-acute, correctional and alternate care markets. In December 2013, PharMerica Corporation (NYSE:PMC), acquired BGS Pharmacy Partners, Inc."
    ]
  },
  {
    id: 11,
    type: "past",
    name: "Emphusion",
    image: "emphusion",
    invested: null,
    sold: null,
    location: null,
    bio: [
      "Emphusion, a Contract Research Organization, specializes in data management, statistical analysis and programming services to the biotech, medical device, and pharmaceutical industries."
    ]
  },
  {
    id: 12,
    type: "past",
    name: "Hill Top Research",
    image: "hilltop",
    invested: null,
    sold: "January, 2011",
    location: "Cincinnati, OH",
    bio: [
      "Hill Top Research is a leading provider of clinical research and microbiology services to the personal healthcare and pharmaceutical industries. Hill Top Research performs Phase 1 safety studies, Phase 2 - 4 efficacy trials, CRO services and microbiology services for its clients. In January, 2011, BA Research India acquired Hill-Top."
    ]
  },
  {
    id: 13,
    type: "past",
    name: "Verathon",
    image: "verathon",
    invested: null,
    sold: "December, 2009",
    location: null,
    bio: [
      "Verathon is a medical device manufacturer and its two principal products are the BladderScan, a noninvasive bladder volume instrument and the GlideScope, a video laryngoscope. In December, 2009, Roper Industries, Inc. (NYSE: ROP) acquired Verathon Inc."
    ]
  },
  {
    id: 14,
    type: "past",
    name: "Global Physics Solutions",
    image: "global-physics-solutions",
    invested: null,
    sold: "November, 2009",
    location: null,
    bio: [
      "Global Physics Solutions provides clinical physicist and dosimetrist support, commissioning of radiotherapy equipment and educational services to the oncology marketplace. In November, 2009, Landauer, Inc. (NYSE: LDR) acquired Global Physics Solutions."
    ]
  },
  {
    id: 15,
    type: "past",
    name: "Tandem Labs Inc.",
    image: "tandem-labs",
    invested: null,
    sold: "February, 2008",
    location: null,
    bio: [
      "Tandem Labs Inc. is a leading contract research organization (CRO) providing bioanalytical and immunoanalytical services to the pharmaceutical, biopharmaceutical and biotechnology industries to support their clinical drug development programs. In February, 2008, Laboratory Corporation of America (NYSE: LH) acquired Tandem Labs Inc."
    ]
  },
  {
    id: 16,
    type: "past",
    name: "The Radlinx Group",
    image: "radlinx-group",
    invested: null,
    sold: "April, 2007",
    location: null,
    bio: [
      "The Radlinx Group is a leading off-site teleradiology services firm providing professional radiological interpretation to physician group practices and hospitals. In April, 2007, Nighthawk Radiology (NASDAQ: NHWK) acquired The Radlinx Group."
    ]
  },
  {
    id: 17,
    type: "past",
    name: "Genesis Technology Partners",
    image: "genesis",
    invested: null,
    sold: "February, 2006",
    location: null,
    bio: [
      "Genesis Technology Partners contracts with hospitals to provide medical equipment maintenance and repair programs. In February 2006, Masterplan acquired Genesis Technology Partners."
    ]
  },
  {
    id: 18,
    type: "current",
    name: "Caregiver",
    image: "caregiver",
    invested: null,
    sold: null,
    location: null,
    bio: [
      "TODO"
    ]
  },
  {
    id: 19,
    type: "current",
    name: "EHE International",
    image: "ehe",
    invested: null,
    sold: null,
    location: null,
    bio: [
      "TODO"
    ]
  },
  {
    id: 20,
    type: "current",
    name: "Scope Care",
    image: "scope-care",
    invested: null,
    sold: null,
    location: null,
    bio: [
      "TODO"
    ]
  }
];
