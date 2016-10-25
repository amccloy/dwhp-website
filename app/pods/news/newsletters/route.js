import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return data;
  },
});

const data = [
  {
    id: 11,
    title: "Increase Your Company's Value With These 10 Long-Term Strategies",
    subtitle: "Utilize these strategies to help maximize the value of your company.",
    file: "april_article2014.pdf"
  },
  {
    id: 10,
    title: "Is 2012 The Right Time To Sell",
    subtitle: "Five questions to ask yourself as you contemplate whether or not 2012 is the right time to sell a portion or all of your business.",
    file: "5Questions_e.pdf"
  },
  {
    id: 9,
    title: "Tax Increases",
    subtitle: "Higher taxes are coming...are you ready?",
    file: "Tax2012_e.pdf"
  },
  {
    id: 8,
    title: "DW Healthcare Partners' Overview",
    subtitle: "DW Healthcare Partners (DWHP), a healthcare focused private equity firm, invests in companies at the smaller end of the middle market, generating over $3 million in EBITDA.",
    file: "ibanker_web_e.pdf"
  },
  {
    id: 7,
    title: "Greater Economic Uncertainty",
    subtitle: "Tax increases and greater economic uncertainty lie ahead for business owners. It may be time to diversify your assets.",
    file: "TaxIncrease_e.pdf"
  },
  {
    id: 6,
    title: "Tax Increases",
    subtitle: "Higher tax rates will reduce the net proceeds from the future sales of your business.",
    file: "July10_e.pdf"
  },
  {
    id: 5,
    title: "Reinvesting in Your Business",
    subtitle: "Is now the time to reinvest in your business?",
    file: "time_e.pdf"
  },
  {
    id: 4,
    title: "Current Market Conditions",
    subtitle: "Capitalize on the current market conditions.",
    file: "jan09_e.pdf"
  },
  {
    id: 3,
    title: "Capital Gains",
    subtitle: "Long-term capital gains tax rates may be increasing. Business owners should consider the potential impact.",
    file: "capgains_e.pdf"
  },
  {
    id: 2,
    title: "Raising Capital Today",
    subtitle: "Raising capital today might be the smartest move you make.",
    file: "Coaster_e.pdf"
  },
  {
    id: 1,
    title: "Debt",
    subtitle: "What is the big deal about debt in private equity transactions?",
    file: "debt_e.pdf"
  }
];
