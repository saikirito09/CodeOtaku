"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const CodeJudgePlatform = () => {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      solved: false,
    },
    {
      id: 2,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      category: "Array",
      solved: false,
    },
    {
      id: 3,
      title: "Contains Duplicate",
      difficulty: "Easy",
      category: "Array",
      solved: false,
    },
    {
      id: 4,
      title: "Product of Array Except Self",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 5,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 6,
      title: "Maximum Product Subarray",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 7,
      title: "Find Minimum in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 8,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 9,
      title: "3Sum",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 10,
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array",
      solved: false,
    },
    {
      id: 11,
      title: "Sum of Two Integers",
      difficulty: "Medium",
      category: "Binary",
      solved: false,
    },
    {
      id: 12,
      title: "Number of 1 Bits",
      difficulty: "Easy",
      category: "Binary",
      solved: false,
    },
    {
      id: 13,
      title: "Counting Bits",
      difficulty: "Easy",
      category: "Binary",
      solved: false,
    },
    {
      id: 14,
      title: "Missing Number",
      difficulty: "Easy",
      category: "Binary",
      solved: false,
    },
    {
      id: 15,
      title: "Reverse Bits",
      difficulty: "Easy",
      category: "Binary",
      solved: false,
    },
    {
      id: 16,
      title: "Climbing Stairs",
      difficulty: "Easy",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 17,
      title: "Coin Change",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 18,
      title: "Longest Increasing Subsequence",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 19,
      title: "Word Break",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 20,
      title: "Combination Sum",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 21,
      title: "House Robber",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 22,
      title: "House Robber II",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 23,
      title: "Decode Ways",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 24,
      title: "Unique Paths",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 25,
      title: "Jump Game",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solved: false,
    },
    {
      id: 26,
      title: "Clone Graph",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 27,
      title: "Course Schedule",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 28,
      title: "Pacific Atlantic Water Flow",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 29,
      title: "Number of Islands",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 30,
      title: "Longest Consecutive Sequence",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 31,
      title: "Alien Dictionary",
      difficulty: "Hard",
      category: "Graph",
      solved: false,
    },
    {
      id: 32,
      title: "Graph Valid Tree",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 33,
      title: "Number of Connected Components in Graph",
      difficulty: "Medium",
      category: "Graph",
      solved: false,
    },
    {
      id: 34,
      title: "Insert Interval",
      difficulty: "Medium",
      category: "Interval",
      solved: false,
    },
    {
      id: 35,
      title: "Merge Intervals",
      difficulty: "Medium",
      category: "Interval",
      solved: false,
    },
    {
      id: 36,
      title: "Non-overlapping Intervals",
      difficulty: "Medium",
      category: "Interval",
      solved: false,
    },
    {
      id: 37,
      title: "Meeting Rooms",
      difficulty: "Easy",
      category: "Interval",
      solved: false,
    },
    {
      id: 38,
      title: "Meeting Rooms II",
      difficulty: "Medium",
      category: "Interval",
      solved: false,
    },
    {
      id: 39,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked List",
      solved: false,
    },
    {
      id: 40,
      title: "Linked List Cycle",
      difficulty: "Easy",
      category: "Linked List",
      solved: false,
    },
    {
      id: 41,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      category: "Linked List",
      solved: false,
    },
    {
      id: 42,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      solved: false,
    },
    {
      id: 43,
      title: "Remove Nth Node From End Of List",
      difficulty: "Medium",
      category: "Linked List",
      solved: false,
    },
    {
      id: 44,
      title: "Reorder List",
      difficulty: "Medium",
      category: "Linked List",
      solved: false,
    },
    {
      id: 45,
      title: "Set Matrix Zeroes",
      difficulty: "Medium",
      category: "Matrix",
      solved: false,
    },
    {
      id: 46,
      title: "Spiral Matrix",
      difficulty: "Medium",
      category: "Matrix",
      solved: false,
    },
    {
      id: 47,
      title: "Rotate Image",
      difficulty: "Medium",
      category: "Matrix",
      solved: false,
    },
    {
      id: 48,
      title: "Word Search",
      difficulty: "Medium",
      category: "Matrix",
      solved: false,
    },
    {
      id: 49,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 50,
      title: "Longest Repeating Character Replacement",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 51,
      title: "Minimum Window Substring",
      difficulty: "Hard",
      category: "String",
      solved: false,
    },
    {
      id: 52,
      title: "Valid Anagram",
      difficulty: "Easy",
      category: "String",
      solved: false,
    },
    {
      id: 53,
      title: "Group Anagrams",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 54,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "String",
      solved: false,
    },
    {
      id: 55,
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "String",
      solved: false,
    },
    {
      id: 56,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 57,
      title: "Palindromic Substrings",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 58,
      title: "Encode and Decode Strings",
      difficulty: "Medium",
      category: "String",
      solved: false,
    },
    {
      id: 59,
      title: "Maximum Depth of Binary Tree",
      difficulty: "Easy",
      category: "Tree",
      solved: false,
    },
    {
      id: 60,
      title: "Same Tree",
      difficulty: "Easy",
      category: "Tree",
      solved: false,
    },
    {
      id: 61,
      title: "Invert Binary Tree",
      difficulty: "Easy",
      category: "Tree",
      solved: false,
    },
    {
      id: 62,
      title: "Binary Tree Maximum Path Sum",
      difficulty: "Hard",
      category: "Tree",
      solved: false,
    },
    {
      id: 63,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 64,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      category: "Tree",
      solved: false,
    },
    {
      id: 65,
      title: "Subtree of Another Tree",
      difficulty: "Easy",
      category: "Tree",
      solved: false,
    },
    {
      id: 66,
      title: "Construct Binary Tree from Preorder and Inorder Traversal",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 67,
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 68,
      title: "Kth Smallest Element in a BST",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 69,
      title: "Lowest Common Ancestor of BST",
      difficulty: "Easy",
      category: "Tree",
      solved: false,
    },
    {
      id: 70,
      title: "Implement Trie (Prefix Tree)",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 71,
      title: "Add and Search Word",
      difficulty: "Medium",
      category: "Tree",
      solved: false,
    },
    {
      id: 72,
      title: "Word Search II",
      difficulty: "Hard",
      category: "Tree",
      solved: false,
    },
    {
      id: 73,
      title: "Find Median from Data Stream",
      difficulty: "Hard",
      category: "Heap",
      solved: false,
    },
    {
      id: 74,
      title: "Top K Frequent Elements",
      difficulty: "Medium",
      category: "Heap",
      solved: false,
    },
    {
      id: 75,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Heap",
      solved: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(problems.length / ITEMS_PER_PAGE);
  const paginatedProblems = problems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Difficulty color mapping
  const difficultyColors = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blind 75 Problems</h1>

      {/* Problems Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left border-b">Status</th>
              <th className="p-4 text-left border-b">Title</th>
              <th className="p-4 text-left border-b">Difficulty</th>
              <th className="p-4 text-left border-b">Category</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProblems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">
                  <input
                    type="checkbox"
                    checked={problem.solved}
                    onChange={() => {
                      // Handle problem solved status
                    }}
                    className="h-4 w-4"
                  />
                </td>
                <td className="p-4 border-b font-medium">{problem.title}</td>
                <td
                  className={`p-4 border-b ${difficultyColors[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </td>
                <td className="p-4 border-b">{problem.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
          {Math.min(currentPage * ITEMS_PER_PAGE, problems.length)} of{" "}
          {problems.length} problems
        </span>
        <div className="flex gap-2">
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeJudgePlatform;
