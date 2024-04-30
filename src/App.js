// import React, { useState, useEffect } from 'react'
// import { FaAngleDoubleRight } from 'react-icons/fa'
// const url = 'https://course-api.com/react-tabs-project'

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   {/*at beginning job is an empty array*/ }
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(0);

//   const fetchJobs = async () => {
//     const response = await fetch(url)
//     const newJobs = await response.json()
//     setJobs(newJobs)
//     setLoading(false)
//   }
//   useEffect(() => {
//     fetchJobs()
//   }, [])
//   if (loading) {
//     return (
//       <section className="section loading">
//         <h1>Loading...</h1>
//       </section>
//     )
//   }
//   {/* destructing jobs array here - get the properties */ }
//   const { company, dates, duties, title } = jobs[value]
//    return(
//     <section className="section">
//     <div className="title">
//       <h2>experience</h2>
//       <div className="underline"></div>
//     </div>
//     <div className="jobs-center">
//       {/* btn container */}
//       <div className="btn-container">
//         {
//           jobs.map((item, index) => {
//             return (
//             <button 
//               key={item.id}
//               onClick={() => setValue(index)}
//               className={`job-btn ${index === value && 'active-btn'}`}>
//                 { item.company }
//             </button>)
//           })
//         }
//       </div>

//       {/* job info */}
//       <article className="job-info">
//         <h3>{title}</h3>
//         <h4>{company}</h4>
//         <p className="job-date">{dates}</p>
//         {duties.map((duty, index) => {
//           return <div key={index} className="job-desc">
//             <FaAngleDoubleRight className="job-icon" />
//             <p>{duty}</p>
//           </div>
//         })}
//       </article>
//     </div>
//     <button type="button" className="btn">
//       more info
//     </button>
//   </section>
//    );
// };
// export default App;

/* Steps to understand the code 
1)Setting up fetch functionality - url 
2)By default --> loading(true), jobs([]),value(0)
3)Fetch api - passing url to fetch in response,getting response in json  
4)Setting jobs in new job and setLoading will be false 
 5)useEffect - initial render will be fetch(invoke fn)
6)If we destructure at the top- we will get error so we are destructing right after loading  
7)After loading my jobs wont be empty array it will be  array of jobs coming from api 
Btn-container
8)setValue(index) - grabbing the index which replaces the array
=> once it clicked we can change our state value -once it changed we can also change UI 
9)Template string(use of conditional rendering) - check index equal to value and activeBtn*/



import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://www.course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    
   try{
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching jobs: ${response.status} ${response.statusText}`);
    }
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
   }catch (error) {
    console.log('Error fetching jobs:', error);
    setLoading(false);
  };
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default App