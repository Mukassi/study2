lcs=a=>{b=a.slice(2);s=b.reduce((c,a)=>c.length<=a.length?c:a);r=[];e=s.length;for(i=0;i<e;i++)for(j=i+1;j<=e;j++){m=true;for(w of b)if(!w.includes(s.slice(i,j)))m=false;if(m)r.push(s.slice(i,j))}if(r.length>0){return r.reduce((a,b)=>a.length>b.length?a:b)}else{return r.join()}};t=process.argv;3>t.length?console.log(""):console.log(lcs(t))