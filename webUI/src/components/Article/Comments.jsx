import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaReply, FaSort } from "react-icons/fa";
import { motion } from "framer-motion";

// Sample Comments Data
const initialComments = [
  {
    id: 1,
    name: "Jane Doe",
    text: "This is an insightful article! 🚀",
    likes: 12,
    dislikes: 1,
    replies: [
      {
        id: 2,
        name: "John Smith",
        text: "I agree! The EV market is changing fast. 🔥",
        likes: 8,
        dislikes: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "I think autonomous driving still has a long way to go. 🤔",
    likes: 5,
    dislikes: 3,
    replies: [],
  },
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  // Handle new comment submission
  const addComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      name: "Anonymous User",
      text: newComment,
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment(""); // Clear input after posting
  };

  // Handle upvote/downvote
  const handleVote = (commentId, type) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: type === "like" ? comment.likes + 1 : comment.likes,
              dislikes: type === "dislike" ? comment.dislikes + 1 : comment.dislikes,
            }
          : comment
      )
    );
  };

  return (
    <div className="mt-12 p-6 rounded-lg bg-[#1f1f1f] text-white shadow-lg">
      {/* 🔥 Title & Sorting */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">💬 Comments ({comments.length})</h3>
        <div className="flex items-center space-x-2">
          <FaSort size={18} />
          <select
            className="bg-transparent border-b border-gray-500 text-gray-300 p-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most Liked</option>
          </select>
        </div>
      </div>

      {/* ✍️ Comment Input */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 text-white bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
          onClick={addComment}
        >
          Post Comment
        </button>
      </div>

      {/* 📝 Display Comments */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-[#2a2a2a] rounded-lg shadow-md"
          >
            {/* 🔥 Comment Header */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                {comment.name.charAt(0)}
              </div>
              <h4 className="font-semibold">{comment.name}</h4>
            </div>

            {/* 💬 Comment Content */}
            <p className="mt-2 text-gray-300">{comment.text}</p>

            {/* 👍 Like & Reply Section */}
            <div className="mt-3 flex items-center space-x-4 text-gray-400">
              <button
                className="flex items-center space-x-1 hover:text-blue-400 transition"
                onClick={() => handleVote(comment.id, "like")}
              >
                <FaThumbsUp /> <span>{comment.likes}</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-red-400 transition"
                onClick={() => handleVote(comment.id, "dislike")}
              >
                <FaThumbsDown /> <span>{comment.dislikes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-400 transition">
                <FaReply /> <span>Reply</span>
              </button>
            </div>

            {/* 🔄 Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 pl-6 border-l border-gray-500 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="p-3 bg-[#3a3a3a] rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                        {reply.name.charAt(0)}
                      </div>
                      <h4 className="font-semibold">{reply.name}</h4>
                    </div>
                    <p className="mt-2 text-gray-300">{reply.text}</p>
                    <div className="mt-2 flex items-center space-x-3 text-gray-400">
                      <button className="flex items-center space-x-1 hover:text-blue-400 transition">
                        <FaThumbsUp /> <span>{reply.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-red-400 transition">
                        <FaThumbsDown /> <span>{reply.dislikes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Comments;