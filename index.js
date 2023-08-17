
let rated = [
    {
        id:"1",
        name:"john doe",
        rating:4
    },
    {
        id:"2",
        name:"kebede",
        rating:3
    },
    {
        id:"3",
        name:"Chala",
        rating:4.3
    },
    {
        id:"4",
        name:"Abebe",
        rating:2.3
    }
] 
let ratings = [
    {
        id:"",
        desc:"",
        ratedId:""
    }
]
let selectedId = 0
function saveRating(id,desc,rate) {
    for(let i=0;i<ratings.length;i++){
        if(ratings[i].id==id){
            ratings.push({
                id:id,
                desc:desc,
                ratedId:rate
            })
        }
    }
}

let search =document.getElementById('txtsearch') 

search.addEventListener('keypress',((ev)=>{
    console.log(ev);
    if(ev.key == 13){
        console.log(rated);
        for(let i=0;i<rated.length;i++){
            console.log(rated);
            if(rated[i].name == search.value){
                selectedId=i
                document.getElementById('name').innerText = rated[i].name
                document.getElementById('lblrating').innerText = rated[i].rating
            }
        }
    }
}))

document.getElementById('form').addEventListener('submit',((eve)=>{
    saveRating(selectedId,document.getElementById('desc').value,0)
    console.log(ratings);
}))