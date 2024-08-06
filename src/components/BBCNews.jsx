const newsItems = [
  {
    href: "https://www.bbc.com/news/articles/c1e5y8ny1l4o",
    text: "Israeli strike on Gaza school 'kills 30'",
  },
  {
    href: "https://www.bbc.com/news/articles/cjm9gez8e8mo",
    text: "Summer Covid wave and whooping cough may explain why people feel grotty",
  },
  {
    href: "https://www.bbc.com/news/articles/cp68rz0zrrwo",
    text: "Canadians mourn as Jasper, jewel of the Rockies, burns",
  },
  {
    href: "https://www.bbc.com/news/articles/c97d3v8vpl3o",
    text: "Vulnerable, messy and brat: The pop girlies having a moment",
  },
  {
    href: "https://www.bbc.com/news/articles/c28eym731zjo",
    text: "Questions surround German man sentenced to death in Belarus",
  },
  {
    href: "https://www.bbc.com/news/articles/c6p21e7m43ro",
    text: "Cineworld to shut six branches as part of restructure",
  },
  {
    href: "https://www.bbc.com/news/articles/c147yn4xxx4o",
    text: "Trump running mate defends 'childless cat ladies' comment",
  },
  {
    href: "https://www.bbc.com/news/articles/crg4p4ndkr0o",
    text: "Three ways Trump is trying to end the Harris honeymoon",
  },
  {
    href: "https://www.bbc.com/news/articles/c51yk1xn0ndo",
    text: "'My body just keeps swelling and swelling'",
  },
  {
    href: "https://www.bbc.com/news/articles/cjk3gznk5vmo",
    text: "Families pay tribute to four friends killed in crash",
  },
];
export default function BBCNews() {
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
