import { useDashboardStore } from "../store";

export default function SearchBar() {
  const searchQuery = useDashboardStore((s) => s.searchQuery);
  const searchResults = useDashboardStore((s) => s.searchResults);
  const setSearchQuery = useDashboardStore((s) => s.setSearchQuery);

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
      <svg
        className="w-4 h-4 text-gray-400 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search nodes by name, summary, or tags..."
        className="flex-1 bg-gray-700 text-white text-sm rounded px-3 py-1.5 border border-gray-600 focus:outline-none focus:border-blue-500 placeholder-gray-400"
      />
      {searchQuery.trim() && (
        <span className="text-xs text-gray-400 shrink-0">
          {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
