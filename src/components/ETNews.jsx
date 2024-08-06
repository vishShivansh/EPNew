const newsItems = [
  {
    href: "https://cfo.economictimes.indiatimes.com/news//110349608",
    text: "Running toward success: How Zetwerk's CFO Pulkit Bhandari uses fitness to solve complex problems",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//109970004",
    text: "Dr Reddy's CFO Parag Agarwal to Retire, M V Narasimham Takes Over",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//89478445",
    text: "Sundaram-Clayton appoints K Gopala Desikan as Group CFO",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//75353085",
    text: "Covid-19 Policy Response: The Case for Promoting Equity Investments",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//65166199",
    text: "Amazon's growth is leaving the shop behind",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//65150387",
    text: "GSK can do without distraction of a breakup",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//63513979",
    text: "ETCFO Insight: The promise of project finance",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//61463204",
    text: "RBI asks large borrowers to obtain unique code from banks",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//59630913",
    text: "Air India which way to go? Govt weighs options on Rs 30,000 crore debt",
  },
  {
    href: "https://cfo.economictimes.indiatimes.com/news//59529742",
    text: "GMR secures Rs 1,330cr funding for Goa airport from Axis Bank",
  },
];
export default function ETNews() {
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
