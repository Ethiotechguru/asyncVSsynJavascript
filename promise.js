fetch('https://swapi.dev/api/planets/')
.then(data=>{
    return data.json();
})
.then(data=>{
    let d = data.results;
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
                <h3>${p.name}</h3>
                <p>Rotation Period:${p.rotation_period}</p>
                    <p>Population: ${p.population}</p>
                    <p>Orbital Period: ${p.orbital_period}</p>
                    <div class="films">
                        <h5>Films List<h5>
                    </div>
                    <div class = "resident">
                        <h5 >Residents</h5>
                    </div>
                    
            </li>
       `;
       let film = ul.querySelector('.films');
       let resident = ul.querySelector('.resident');
       p.films.forEach(f=>{
           let list = document.createElement('ul');
            if(f){
                fetch(f)
                .then(data=>{
                    return data.json();
                })
                .then(res=>{
                    list.innerHTML = `<li>${res.title} (<span>Director:${res.director}</span>)</li>`;
                }).catch(err=>{
                    list.innerHTML = `No movie foundS`;
                });
                
            }
            film.append(list);
       });
       p.residents.forEach(person=>{
        let resList = document.createElement('ul');
         if(person){
             fetch(person)
             .then(data=>{
                 return data.json();
             })
             .then(res=>{
                 resList.innerHTML = `<li>${res.name} (<span>${res.gender}</span>)</li>`;
             }).catch(err=>{
                 resList.innerHTML = `No movie foundS`;
             });
             
         }
         resident.append(resList);
    });
        dom.append(ul);
    });
});
