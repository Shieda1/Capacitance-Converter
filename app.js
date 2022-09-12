// https://www.omnicalculator.com/conversion/capacitance-conversion

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mFRadio = document.getElementById('mFRadio');
const FRadio = document.getElementById('FRadio');

let mF;
let F = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

mFRadio.addEventListener('click', function() {
  variable1.textContent = 'F';
  F = v1;
  result.textContent = '';
});

FRadio.addEventListener('click', function() {
  variable1.textContent = 'mF';
  mF = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mFRadio.checked)
    result.textContent = `mF = ${computemF().toFixed(5)}`;

  else if(FRadio.checked)
    result.textContent = `F = ${computeF().toFixed(5)}`;
})

// calculation

function computemF() {
  return Number(F.value) * 1000;
}

function computeF() {
  return Number(mF.value) / 1000;
}