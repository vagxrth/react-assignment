import React from 'react'
import { Link } from 'react-router-dom';

const Problems = () => {

  const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
  }, {
    title: "1. Two Sum",
    difficulty: "Easy",
    acceptance: "53.1%"
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
  }];

  function ProblemStatments(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    const getDifficultyColor = (difficulty) => {
      switch (difficulty) {
        case 'Hard':
          return 'red';
        case 'Medium':
          return 'yellow';
        case 'Easy':
          return 'green';
        default:
          return 'black';
      }
    };

    const difficultyColor = getDifficultyColor(difficulty);

    return (
      <div className='flex flex-col m-5 cursor-pointer border-2 border-black rounded-lg hover:bg-slate-100'>
        <Link to={`/problems/${encodeURIComponent(title)}`}>
          <tr>
            <td className='pr-5'>
              {title}
            </td>
            <td className='pr-5'>
              {acceptance}
            </td>
            <td style={{ color: difficultyColor }}>
              {difficulty}
            </td>
          </tr>
        </Link >
      </div>
    )
  }

  return (
    <div>
      {problems.map((problem) => <ProblemStatments {...problem} />)}
    </div>
  )
}

export default Problems