fetch('https://swapi.dev/api/planets/')
.then(data=>{
    return data.json();
})
.then(data=>{
    let d = data.results;
    console.log(d);
    return d;
})
.then(data=>{
    let dom = document.querySelector('.planetX');
    
    data.forEach(p=>{
        let ul = document.createElement('ul');
       ul.innerHTML = `
            <li>
                <h3>Name:${p.name}</h3>
                <p>Rotation Period:${p.rotation_period}</p>
                <ul>
                    <li>Population: ${p.population}</li>
                    <li>Orbital Period: ${p.orbital_period}</li>
                </ul>
                <p class="films">Films Link</p>
               
            </li>
       `;
        dom.append(ul);
    });
});
