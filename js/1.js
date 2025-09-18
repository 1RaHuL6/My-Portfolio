

const urledu = 'http://127.0.0.1:8000/api/education/'
const urlexp = 'http://127.0.0.1:8000/api/experience/'
const urlsoc ='http://127.0.0.1:8000/api/socialLinks/'
const urlpro = 'http://127.0.0.1:8000/api/projects/'


async function fetchedudata () {


    try {
        const serverresponse = await fetch(urlpro);
        const jsonresponse = await serverresponse.json();
        // console.log(jsonresponse);
        return jsonresponse;
       
    }
    catch (error) 
    {
        console.log(error, "Error");
    }
}

async function data() {
const jsonresponse = await fetchedudata();
// console.log(jsonresponse);
jsonresponse.forEach((data)=> {
   
    console.log(data.title);
})




}

data();

// const id1 = jsonresponse.find(item => item.currently_working ==false);
//         console.log(id1.role);
//         console.log("sync");
    


// fetch(url)
// .then (response => {
//     return response.json();
// })
// .then( edudata => {
//     console.log(edudata);
//     return edudata;
// })
// .then(data => {
//    const id1 = data.find(i => i.end_year=="2025");
//    console.log(id1.degree);
// })
// .then(console.log('sync'))
// .catch(error => {console.error('Error1', error)})




// .then(response => {
//     return response.json();
// })
// .then (data => {
// const edu = data.find(item => item.id ==1);
// console.log(edu.degree);
// })
// .catch(error => console.error('error', error));



// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));


// // Regular function
// function square(x) {
//     return x * x;
// }

// // Arrow function
// const square = (x) => {
//     return x * x;
// };

// // Even shorter (parentheses optional for single parameter)
// const square = x => x * x;




 {/* GitHub */}
    <a href="https://github.com/1RaHuL6" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github fa-2x"></i>
    </a>

    {/* Twitter/X */}
    <a href="https://twitter.com/RAhul16kadam" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-x-twitter fa-2x"></i>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/rahul_1_6__" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram fa-2x"></i>
    </a>

    {/* Email */}
    <a href="mailto:16rahulkadam16@gmail.com">
      <i className="fas fa-envelope fa-2x"></i>