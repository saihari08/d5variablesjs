import React from 'react'

function marksheet(props) {

  let scimarks=Number(props.scimarks);
  let engmarks=Number(props.engmarks);
  let hinmarks=Number(props.hinmarks);
  let telmarks=Number(props.telmarks);
  let matmarks=Number(props.matmarks);
  let socmarks=Number(props.socmarks);
  let totalmarks=scimarks+engmarks+hinmarks+
  telmarks+matmarks+socmarks;

  let perc=totalmarks/600*100;

  return (
    <div>
 <table>
    <caption>Marks Sheet of {props.name}</caption>
<thead>
    <tr>
      <th>Subject</th>
      <th>Max.Marks</th>
      <th>Marks Obtained</th>
      <th>Result</th>
      <th>Remarks</th>
    </tr>
</thead>
   
<tbody>
  <tr>
    <td>Science</td>
    <td>100</td>
    <td>{scimarks}</td>
    <td>{scimarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>

  <tr>
    <td>English</td>
    <td>100</td>
    <td>{engmarks}</td>
    <td>{engmarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>

  <tr>
    <td>Hindi</td>
    <td>100</td>
    <td>{hinmarks}</td>
    <td>{hinmarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>

  <tr>
    <td>Telugu</td>
    <td>100</td>
    <td>{telmarks}</td>
    <td>{telmarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>

  <tr>
    <td>Maths</td>
    <td>100</td>
    <td>{matmarks}</td>
    <td>{matmarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>

  <tr>
    <td>Social</td>
    <td>100</td>
    <td>{socmarks}</td>
    <td>{socmarks>=35? "Pass" : "Fail"}</td>
    <td>Excellent</td>
  </tr>
</tbody>

<tfoot>
 <tr>
    <th>Total</th>
    <th>600</th>
    <th>{totalmarks}({perc}%)</th>
    <th>pass</th>
    <th>Excellent</th>
  </tr>
</tfoot>
</table>


    </div>
  )
}

export default marksheet
