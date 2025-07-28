// components/SearchDialog.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command as CommandPrimitive } from "cmdk";
import { Search, Book, Bot, FileText, Library } from "lucide-react";
import { searchableData, type SearchableItem } from "@/lib/search-data";

// Helper to map category to an icon
const getIconForCategory = (category: string) => {
  switch (category) {
    case "DIY MFA":
      return <Book className="h-4 w-4" />;
    case "AI for Writers":
      return <Bot className="h-4 w-4" />;
    case "Resources":
      return <Library className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

export function SearchDialog() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  // Keyboard shortcut to open the dialog (Cmd+K or Ctrl+K)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Function to run when an item is selected
  const runCommand = React.useCallback((command: () => unknown) => {
    setIsOpen(false);
    command();
  }, []);

  const filteredData =
    query === ""
      ? searchableData
      : searchableData.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Open Search</span>
      </button>

      {/* The Dialog itself */}
      <CommandPrimitive.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        // WCAG: Sets aria-labelledby to the dialog's visible title
        aria-label="Search the site"
        // Custom styles for the dialog container and overlay
        className="[&_[cmdk-dialog]]:max-w-xl [&_[cmdk-dialog]]:rounded-2xl [&_[cmdk-dialog]]:shadow-2xl"
      >
        {/* Search Input */}
        <div className="flex items-center border-b px-3 border-gray-200 dark:border-gray-800">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandPrimitive.Input
            value={query}
            onValueChange={setQuery}
            placeholder="Search lessons, articles, and resources..."
            className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-ink/60 dark:placeholder:text-canvas/60"
          />
        </div>

        {/* Results List */}
        <CommandPrimitive.List className="max-h-[400px] overflow-y-auto overflow-x-hidden p-2">
          {/* A11Y: Shows a message when no results are found */}
          <CommandPrimitive.Empty className="py-6 text-center text-sm">
            No results found.
          </CommandPrimitive.Empty>

          {/* Map over filtered results */}
          {filteredData.map((item: SearchableItem) => (
            <CommandPrimitive.Item
              key={item.href}
              value={item.title}
              onSelect={() => {
                runCommand(() => router.push(item.href));
              }}
              className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm outline-none aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <div className="mr-3 text-ink/60 dark:text-canvas/60">
                {getIconForCategory(item.category)}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-ink dark:text-canvas">
                  {item.title}
                </span>
                <span className="text-xs text-ink/60 dark:text-canvas/60">
                  {item.category}
                </span>
              </div>
            </CommandPrimitive.Item>
          ))}
        </CommandPrimitive.List>
      </CommandPrimitive.Dialog>
    </>
  );
}
