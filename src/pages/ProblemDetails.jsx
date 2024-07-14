import React from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetails = () => {
  const { title } = useParams();

  const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    description: "Given a range [m, n] of 32 bit integers, return the bitwise AND of all integers in this range.",
    difficulty: "Medium",
    acceptance: "42%"
  }, {
    title: "1. Two Sum",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    acceptance: "53.1%"
  }, {
    title: "202. Happy Number",
    description: "Write an algorithm to determine if a number is happy.",
    difficulty: "Easy",
    acceptance: "54.9%"
  }, {
    title: "203. Remove Linked List Elements",
    description: "Remove all elements from a linked list of integers that have value val.",
    difficulty: "Hard",
    acceptance: "42%"
  }];

  const problem = problems.find(p => p.title === title);

  return (
    <div className='flex p-4 m-4'>
      <div className='flex-1 border-2 border-black rounded-lg p-4 mr-2'>
        <h1 className='text-2xl font-bold'>{problem.title}</h1>
        <p className='mt-2'><strong>Description:</strong> {problem.description}</p>
        <p className='mt-2'><strong>Difficulty:</strong> {problem.difficulty}</p>
        <p className='mt-2'><strong>Acceptance:</strong> {problem.acceptance}</p>
      </div>
      <div className='flex-1'>
        <input type="text" className='w-full border-2 border-black rounded-lg p-2 min-h-48' placeholder='Enter your solution here...' />
        <div className='flex justify-end mt-4'>
          <button className='bg-slate-500 text-white px-4 py-2 rounded-lg'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetails;
