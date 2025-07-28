"use client"; // This page is highly interactive (filters, modals).

import { useState, useEffect } from "react";
import { X, Book } from "lucide-react";

// Centralized book data. Each entry defines title, author, category and description.
const books: { title: string; author: string; category: string; description: string }[] = [
  {
    title: "Write with AI",
    author: "Rob Kosberg (2024)",
    category: "AI Books",
    description:
      "Conquer writer's block, unleash your creativity, and write your book using artificial intelligence.",
  },
  {
    title: "The Rise of the AI Author",
    author: "Eldar Haber (2025)",
    category: "AI Books",
    description: "The complete guide to writing with artificial intelligence.",
  },
  {
    title: "Co-Intelligence",
    author: "Ethan Mollick (2024)",
    category: "AI Books",
    description: "The definitive, bestselling guide to living and working with AI.",
  },
  {
    title: "AI Snake Oil",
    author: "A. Narayanan & S. Kapoor (2024)",
    category: "AI Books",
    description: "What artificial intelligence can do, what it can’t, and how to tell the difference.",
  },
  // Writing Fundamentals
  {
    title: "On Writing: A Memoir of the Craft",
    author: "Stephen King (2020)",
    category: "Fundamentals",
    description:
      "This seminal work fuses autobiography with practical writing wisdom. King's core message remains powerfully direct: 'If you want to be a writer, you must do two things above all others: read a lot and write a lot'.",
  },
  {
    title: "Bird by Bird",
    author: "Anne Lamott (1994)",
    category: "Fundamentals",
    description:
      "Lamott champions breaking down daunting writing projects into manageable pieces—tackling them 'bird by bird.' The book confronts the psychological hurdles inherent in writing, from crippling perfectionism to gnawing self‑doubt.",
  },
  // ... Add the rest of your books here to keep the list complete
];

// Define the structure of a book object for TypeScript
interface BookItem {
  title: string;
  author: string;
  category: string;
  description: string;
}

export default function ReadingListPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const categories: string[] = [
    "All",
    ...Array.from(new Set(books.map((book) => book.category))),
  ];

  const filteredBooks = activeFilter === "All" ? books : books.filter((book) => book.category === activeFilter);

  // Effect to handle body scroll when modal is open/closed
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBook]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl lg:text-6xl">Essential Reading List</h1>
        <div className="mt-6 max-w-3xl mx-auto space-y-4 font-body text-ink/80 dark:text-canvas/80 leading-relaxed">
          <p>
            Pursuing a Master of Fine Arts in writing is more than an academic path; it's an intensive journey demanding both technical mastery and a
            refined artistic vision. To navigate this challenging pursuit, certain books stand as indispensable guides.
          </p>
          <p className="text-sm italic">
            AI Writers’ Retreat offers these book recommendations independently. We receive no affiliation or sponsorship from the authors or booksellers
            mentioned.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`font-ui font-medium py-2 px-4 rounded-full text-sm transition-colors focus-ring ${
              activeFilter === category
                ? "bg-glow text-ink font-bold"
                : "bg-gray-200/80 dark:bg-gray-800/80 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {filteredBooks.map((book) => (
          <div key={book.title} className="space-y-2">
            <button
              onClick={() => setSelectedBook(book)}
              className="book-card w-full aspect-[2/3] bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden transition-transform duration-200 hover:scale-105 flex items-center justify-center text-gray-400 focus-ring"
            >
              <Book className="w-10 h-10" />
            </button>
            <div className="text-center">
              <p className="font-bold font-display text-sm truncate">{book.title}</p>
              <p className="text-xs text-ink/70 dark:text-canvas/70">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
          onClick={() => setSelectedBook(null)} // Close on overlay click
        >
          <div
            className="bg-canvas dark:bg-canvasDark rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="w-full md:w-1/3 flex-shrink-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center aspect-[2/3] md:aspect-auto text-gray-400">
              <Book className="w-20 h-20" />
            </div>
            <div className="p-6 flex flex-col overflow-y-auto relative">
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus-ring"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex-grow pr-8">
                <h2 className="text-2xl font-bold font-display mb-1">{selectedBook.title}</h2>
                <p className="text-md text-ink/70 dark:text-canvas/70 mb-4">{selectedBook.author}</p>
                <p className="font-body leading-relaxed text-ink/90 dark:text-canvas/90">{selectedBook.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}