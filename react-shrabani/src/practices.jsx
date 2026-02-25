const Practices=()=>{
    const students=[1,2];
return(
    <>
    <h1>InterView</h1>
    {/* step1: */}
    {/* <p>{students.length && "No student Found"}</p> */}
    {/* step2: */}
    {/* <p>{students.length ==0&& "No student Found"}</p> */}
    {/* //student.length==0 is true */}
    {/* step3: */}
     <p>{!students.length&& "No student Found"}</p>
    <p>Number of student:{students.length}</p>
{/* ! is the logical NOT operator in JavaScript.
0->t
1->f
any non zero->f */}
    </>
)
}
export default Practices;
// Note======================
// && in JavaScript works like this:

// If left side is true, return right side

// If left side is false, return false