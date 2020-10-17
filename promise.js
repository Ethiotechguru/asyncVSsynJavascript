fetch('https://swapi.dev/api/planets/')
.then(data=>{
    return data.json();
})
.then(data=>{
    let d = data.results;
    // console.log(d);
    return d;
})
.then(data=>{
    let dom = document.querySelector('.planetX');
    
    data.forEach(p=>{
        // console.log(p.name);
        let ul = document.createElement('ul');
        ul.className = 'planet-lists';
       ul.innerHTML = `
            <li>
                <h3>Name:${p.name}</h3>
                <p>Rotation Period:${p.rotation_period}</p>
                    <p>Population: ${p.population}</p>
                    <p>Orbital Period: ${p.orbital_period}</p>
                    <p class="films">Films List</p>
               
            </li>
       `;
       let film = ul.querySelector('.films');
       p.films.forEach(f=>{
           let link = document.createElement('ul');
            if(f){
                fetch(f)
                .then(data=>{
                    return data.json();
                })
                .then(res=>{
                    // console.log(res);
                    link.innerHTML = `<li>${res.title} (<span>Director:${res.director}</span>)</li>`;
                }).catch(err=>{
                    link.innerHTML = `No movie foundS`;
                });
                
            }
            film.append(link);
       });
        dom.append(ul);
    });
});
