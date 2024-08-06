const newsItems = [
  {
    href: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/budget-2024-proposal-to-insert-section-11a-in-gst-act-aimed-at-exceptional-cases-only-says-revenue-secretary/112056517",
    text: "Budget 2024: Proposal to insert Section 11A in GST Act aimed at exceptional cases only, says Revenue Secretary",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/blog/a-tax-roadmap-for-viksit-bharat/112046515",
    text: "A tax roadmap for Viksit Bharat",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/policy/corporate-insights-navigating-through-budget-2024/112040293",
    text: "Corporate Insights: Navigating through Budget 2024",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/economy/will-the-union-budget-create-jobs/112029224",
    text: "Will the Union Budget create jobs?",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/policy/dgft-enhances-epcg-scheme-to-improve-ease-of-doing-business-for-exporters/112044234",
    text: "DGFT enhances EPCG scheme to improve ease of doing business for exporters",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/policy/budget-2024-cfos-laud-measures-for-infrastructure-skills-sustainability-and-viksit-bharat/112031051",
    text: "Budget 2024: CFOs laud measures for infrastructure, skills, sustainability and Viksit Bharat",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/budget-2024-gives-push-to-gst-simplification-and-transparency-say-experts/112012939",
    text: "Budget 2024 gives push to GST simplification and transparency, say experts",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/policy/union-budget-24-25good-not-so-good-noise-hiddengems/112003160",
    text: "UNION BUDGET 24-25:GOOD, NOT SO GOOD, NOISE & HIDDEN GEMS",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/policy/challenge-is-to-provide-more-clarity-to-our-relationships-with-china-niti-aayog-vice-chairman-suman-bery/112002625",
    text: "Challenge is to provide more clarity to our relationships with China: NITI Aayog vice chairman Suman Bery",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/big-gst-relief-in-budget-2024-no-need-to-pay-interest-and-penalty-for-these-gst-notices/112002241",
    text: "Big GST relief in budget 2024: No need to pay interest and penalty for these GST notices",
  },
];
export default function ETTopStories() {
  return (
    <ul className="mt-8 space-y-2 list-disc list-inside ">
      {newsItems.map((item, index) => (
        <li key={index}>
          <span>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800  hover:underline"
            >
              {item.text}
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
}
