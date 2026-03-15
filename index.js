document.body.style.backgroundColor="#D1EAF0";
document.body.style.fontFamily="Segoe UI";
document.body.innerHTML=`
<div id="base" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100vw>
<h1 id="heading" style="font-family:'Comic Sans MS';text-align:center;"><strong>Data Entry Project</strong></h1><br><br>
<input type="number" id="rollNumber" placeholder="Roll number"><br>
<input type="text" id="name" placeholder="Please enter Name"><br>
<input type="number" id="Class" placeholder="Class"><br>
<input type="number" id="science" placeholder="Science Marks"><br>
<input type="number" id="maths" placeholder="Mathematics Marks"><br>
<input type="number" id="english" placeholder="English Marks"><br>
<input type="number" id="hindi" placeholder="Hindi Marks"><br>
<input type="number" id="ssc" placeholder="Social Science Marks"><br>
<button id="submit" style="padding:10px;border-radius:3px;">Submit</button>
</div><hr>
<div id="result"></div>`
const btn=document.getElementById("submit");
document.querySelector("#submit").addEventListener("click",function(){
    document.querySelector("#result").innerHTML=`<h1>Welcome ${document.querySelector("#name").value}</h1>`;
    const rollNumber=document.querySelector("#rollNumber").value;
    const name=document.querySelector("#name").value;
    const Class=document.querySelector("#Class").value;
    const science=Number(document.querySelector("#science").value);
    const maths=Number(document.querySelector("#maths").value);
    const english=Number(document.querySelector("#english").value);
    const hindi=Number(document.querySelector("#hindi").value);
    const ssc=Number(document.querySelector("#ssc").value);
    const total=science+maths+english+hindi+ssc;
    const percentage=(total/500)*100;
   let fin; 
if(percentage>=33)
    {
       fin= "Passed"
    }
    else{
       fin= "Failed"
    }
    const result= {
        rollNumber:document.querySelector("#rollNumber").value,
        name:document.querySelector("#name").value,
        Class:document.querySelector("#Class").value,
        percentage:percentage,
        totalMarks:total,
        }
 document.querySelector('#result').innerHTML=`<h1 "heading" style="font-family:'Comic Sans MS';text-align:center;">Result</h1><br><strong>Roll Number:</strong> ${result.rollNumber}<br>
    Name: ${result.name}<br>
    Class: ${result.Class}<br>
    Percentage: ${result.percentage.toFixed(2)}<br>
    <p><strong>Hi ${name},you have ${fin} the exam , with total marks ${total} and percentage ${percentage}</strong></p>
`
});

