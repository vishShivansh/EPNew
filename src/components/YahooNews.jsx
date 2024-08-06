const newsItems = [
  {
    href: "https://finance.yahoo.com/news/automakers-hit-significant-storm-buyers-201410852.html",
    text: "Automakers hit 'significant storm,' as buyers reject lofty prices at time of huge capital outlays",
  },
  {
    href: "https://www.yahoo.com/news/london-5bn-super-sewer-warns-120000766.html",
    text: "London’s £5bn ‘super sewer’ warns of fallout from Thames Water crisis",
  },
  {
    href: "https://www.yahoo.com/lifestyle/august-horoscope-says-mercury-retrograde-175255007.html",
    text: "Your August Horoscope Says Mercury Retrograde Is Turning Summer into a Bummer",
  },
  {
    href: "https://www.yahoo.com/news/hungarys-orban-says-russia-stands-115859509.html",
    text: "Hungary's Orban says Russia stands to gain as 'irrational' West loses power",
  },
  {
    href: "https://www.yahoo.com/news/oregon-wildfires-close-popular-camping-110320264.html",
    text: "Oregon wildfires close these popular camping, hiking spots in Cascade Mountains",
  },
  {
    href: "https://www.yahoo.com/news/alison-chao-father-arrested-monterey-191621242.html",
    text: "Alison Chao’s father arrested by Monterey Park police",
  },
  {
    href: "https://www.autoblog.com/2024/07/26/toyota-will-replace-engines-in-recalled-tundras-and-lexus-lxs/",
    text: "Toyota will replace engines in 100,000 recalled Tundras and Lexus LXs",
  },
  {
    href: "https://www.yahoo.com/news/2-000-old-sarcophagus-just-144500866.html",
    text: "A 2,000-Year-Old Sarcophagus Was Just Unsealed—and the Mummy Inside is Mind-Blowing",
  },
  {
    href: "https://www.yahoo.com/news/grandmother-kills-college-track-coach-194803999.html",
    text: "Grandmother kills college track coach in murder-suicide in wealthy New York neighborhood: police",
  },
  {
    href: "https://www.yahoo.com/news/black-bear-cub-destroy-car-215006816.html",
    text: "Black bear and cub destroy car in Connecticut after getting trapped inside",
  },
];
export default function YahooNews() {
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
