import React from 'react'

const Problems = () => {

  const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
  }, {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "41.2%"
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
      switch(difficulty) {
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
      <div className='flex flex-col m-5'>
        <tr>
          <td className='pr-5'>
            {title}
          </td>
          <td className='pr-5'>
            {acceptance}
          </td>
          <td style={{color: difficultyColor}}>
            {difficulty}
          </td>
        </tr>
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