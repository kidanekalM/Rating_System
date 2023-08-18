
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
/** @desc saves a single rating on an array in memory @param id of the person being rated @param desc string description of the rating @param rate a number from 0 to 5 */
function saveRating(id,desc,rate) {
    let person = rated.find((r)=>{r.id==id})
    person.rating = ((person.rating+(parseInt(rate)))/2)
    ratings.push({
        id:id,
        desc:desc,
        ratedId:rate
    })

}

let search =document.getElementById('txtsearch') 
/** Add event istener to take the search input and process */
search.addEventListener('keypress',((ev)=>{
    console.log(ev);
    if(ev.key == "Enter"){
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
/** Adding an event when the submit button is clicked to save the ratings */

document.getElementById('submit').addEventListener('click',((eve)=>{
    let hasRated = false
    if(hasRated == false){
        saveRating(selectedId,document.getElementById('desc').value,0)
        console.log(ratings);
        hasRated = true
    }
}))