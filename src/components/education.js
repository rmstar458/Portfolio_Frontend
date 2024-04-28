import "../style/education.css";
function Education() {
  return (
    <div id="table_main">
      <h1>Education</h1>
      <table className="table">
        <tr>
          <th>Institute Name</th>
          <th>Degree Name</th>
          <th>Year</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td>Thapar University</td>
          <td>B.E. CSE</td>
          <td>2020-2024</td>
          <td>8.06</td>
        </tr>
        <tr>
          <td>St. Farid Public School</td>
          <td>Senior Secondary</td>
          <td>2019-2020</td>
          <td>94.40</td>
        </tr>
        <tr>
          <td>St. Farid Public School</td>
          <td>Secondary</td>
          <td>2017-2018</td>
          <td>94.00</td>
        </tr>
      </table>
    </div>
  );
}
export default Education;
