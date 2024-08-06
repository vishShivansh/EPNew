const newsItems = [
  {
    href: "https://www.caclubindia.com/news/gstn-issues-advisory-for-form-gstr-1a-23641.asp",
    text: "GSTN issues Advisory for Form GSTR-1A",
  },
  {
    href: "https://www.caclubindia.com/news/amendments-to-sections-201-and-206c-time-limit-for-deeming-assessee-in-default-reduced-23640.asp",
    text: "Amendments to Sections 201 and 206C: Time Limit for Deeming Assessee in Default Reduced",
  },
  {
    href: "https://www.caclubindia.com/news/proposed-amendments-to-section-276b-rationalising-prosecution-for-delayed-tax-payments-23639.asp",
    text: "Proposed Amendments to Section 276B: Rationalising Prosecution for Delayed Tax Payments",
  },
  {
    href: "https://www.caclubindia.com/news/amendments-to-black-money-act-2015-increased-penalty-threshold-for-undisclosed-foreign-assets-in-itr-23638.asp",
    text: "Amendments to Black Money Act 2015: Increased Penalty Threshold for Undisclosed Foreign Assets in ITR",
  },
  {
    href: "https://www.caclubindia.com/news/amendment-to-equalisation-levy-provisions-key-changes-effective-1st-august-2024-23637.asp",
    text: "Amendment to Equalisation Levy Provisions: Key Changes Effective 1st August 2024",
  },
  {
    href: "https://www.caclubindia.com/news/direct-tax-vivad-se-vishwas-scheme-2024-key-features-23636.asp",
    text: "Direct Tax Vivad se Vishwas Scheme 2024: Key Features",
  },
  {
    href: "https://www.caclubindia.com/news/new-tds-rules-for-floating-rate-savings-bonds-w-e-f-1st-october-2024-23635.asp",
    text: "New TDS Rules for Floating Rate Savings Bonds w.e.f 1st October 2024",
  },
  {
    href: "https://www.caclubindia.com/news/amendment-to-section-37-disallowance-of-settlement-amounts-for-legal-contraventions-from-april-2025-23634.asp",
    text: "Amendment to Section 37: Disallowance of Settlement Amounts for Legal Contraventions from April 2025",
  },
  {
    href: "https://www.caclubindia.com/news/proposed-amendment-to-section-55-clarification-on-cost-of-acquisition-for-equity-shares-in-ofs-and-ipos-23633.asp",
    text: "Proposed Amendment to Section 55: Clarification on Cost of Acquisition for Equity Shares in OFS and IPOs",
  },
  {
    href: "https://www.caclubindia.com/news/budget-2024-exclusion-of-section-194j-payments-from-section-194c-w-e-f-1st-oct-2024-23632.asp",
    text: "Budget 2024: Exclusion of Section 194J Payments from Section 194C w.e.f 1st Oct 2024",
  },
];
export default function CAClubNews() {
  return (
    <ul className="mt-8 space-y-2 list-disc list-inside">
      {newsItems.map((item, index) => (
        <li key={index}>
          <span>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              {item.text}
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
}
