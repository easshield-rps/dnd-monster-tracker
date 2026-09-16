const data=[
['Aberration',50],['Beast',29.8],['Celestial',14.3],['Construct',56.3],['Dragon',24.4],['Elemental',30.4],['Fey',42.9],['Fiend',18.9],['Giant',30.8],['Humanoid',33.8],['Monstrosity',15.7],['Ooze',50],['Plant',35.7],['Undead',35.5]];
const c=document.getElementById('cats');
data.forEach(d=>{const div=document.createElement('div');div.className='card';div.innerHTML=`<h3>${d[0]}</h3><p>${d[1]}%</p>`;c.appendChild(div);});
const p=document.getElementById('progress');const r=35,circ=2*Math.PI*r,val=29.95;
p.setAttribute('stroke-dasharray',circ);p.setAttribute('stroke-dashoffset',circ*(1-val/100));