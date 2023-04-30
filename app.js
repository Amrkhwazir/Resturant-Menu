const button = document.querySelector(".buttons");
// console.log(button);

// for buttons //

const buttonArr = ["All","Breakfast","Lunch","Dinner","Shakes",];
const emptyArr = []
buttonArr.forEach((btn)=> {
    let btnstr = `<button onclick="filterBtn('${btn}')">${btn}</button>`
    // console.log(btnstr)
    emptyArr.push(btnstr);
    // console.log(emptyArr.push(btnstr))
})

button.innerHTML = emptyArr.join('')
// console.log(emptyArr.join(''))

// for menuitems //

const menuitems = document.querySelector(".menuBox");
// console.log(menuitems)

const menuArr = [
    {
        id: 1,
        src: "https://www.eatingwell.com/thmb/vFO43UyAy2NBfjOG6wADLLCE-Kc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-sandwich-eddcc95811f5426094ea5dbea6a6b026.jpg",
        title:'Sandwitch',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Breakfast'
    },{
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSvG0yuGRhVaBR_hDtBSsYVMNfXgo04Iqgw&usqp=CAU",
        title:'Burger',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'

    },{
        id: 3,
        src: "https://th.bing.com/th/id/OIP.4c-wAyuG_aZcWxCpOuhcOwHaE8?pid=ImgDet&rs=1",
        title:'Pizza',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Dinner'
    },{
        id: 4,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgfschPRmOmxQ8RiF8WLtewGEAFX9qXkeUA&usqp=CAU",
        title:'Omlet',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Breakfast'
    },{
        id: 5,
        src: "https://th.bing.com/th/id/OIP.sORUCLQs6IFavbrcEWRPgAHaE8?pid=ImgDet&rs=1",
        title:'Coffee',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Shakes'
    },
    {
        id: 5,
        src: "https://th.bing.com/th/id/OIP.OrD-0SE3pvuxamciektv-AHaE8?pid=ImgDet&rs=1",
        title:'Green Tea',
        pric: '$ 18.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Shakes'
        
    },
    {
        id: 6,
        src: "https://th.bing.com/th/id/R.5ff83380155632c45fb133ddc2837a74?rik=BmA6N%2fz64%2fNCQw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Pt6bRq1cHzI%2fT38shmXqBkI%2fAAAAAAAAO6c%2flicqd4YCqzA%2fs1600%2fchic%2bkorma%2blength.jpg&ehk=nJaByOLokPZcacnnjiQe3s7T1GYrkw7miAkqib4e%2fcE%3d&risl=&pid=ImgRaw&r=0",
        title:'korma',
        pric: '$ 12.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'
    },
    
    {
        id: 7,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4P-MgwnzRRt0VpYcT7hN98yqm3tXiZpnOw&usqp=CAU",
        title:'Honey Cake',
        pric: '$ 15.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Breakfast'

    },
    {
        id: 8,
        src: "https://th.bing.com/th/id/R.0c1bef830a14504a36f5faa87435946a?rik=jFc%2fsLwYTA8x3w&pid=ImgRaw&r=0",
        title:'Biryani',
        pric: '$25.00',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam.ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam',
        category: 'Dinner'

    },
    {
        id: 9,
        src: "https://th.bing.com/th/id/OIP.G4wW8a8uzqDF7HBzFpehPgHaFk?pid=ImgDet&rs=1",
        title:'Nihari',
        pric: '$ 20.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Dinner'

    }
];
// console.log(menuArr);

const emptyMenuArr = []

menuArr.map((item)=>{

    let menustr = `
    <div class="menuitems">
    <div class="image">
    <img src = ${item.src} alt="">
    </div>
    <div class="para">
                <h1 class="title">${item.title}</h1>
                <p class="price">${item.pric}</p>
                <p class="desc">${item.desc}</p>
            </div>
            </div>`
    emptyMenuArr.push(menustr);
});
menuitems.innerHTML =  emptyMenuArr.join(''); 
// console.log(emptyMenuArr.join(''))

const filterBtn = (filter) => {
    console.log(filter)
    if(filter === "All"){
        menuitems.innerHTML =  emptyMenuArr.join(''); 
    }else{
        const filteredArray = menuArr.filter((menu) => menu.category.toLowerCase() === filter.toLowerCase()).map((menu) => {
            return   `
            <div class="menuitems">
         <div class="image">
         <img src = ${menu.src} alt="">
         </div>
         <div class="para">
                     <h1 class="title">${menu.title}</h1>
                     <p class="price">${menu.pric}</p>
                     <p class="desc">${menu.desc}</p>
                 </div>
                 </div>
        
                 `
        })
        console.log(filteredArray, "==>>filtered Array")
        menuitems.innerHTML = filteredArray.join("")
        
    //    const filterArry = menuArr.filter((menu)=>menu.category.toLowerCase() === filter.toLowerCase()).map((menu) => {
    //  `<div class="menuitems">
    // <div class="image">
    // <img src = ${menu.src} alt="">
    // </div>
    // <div class="para">
    //             <h1 class="title">${menu.title}</h1>
    //             <p class="price">${menu.pric}</p>
    //             <p class="desc">${menu.desc}</p>
    //         </div>`
    //    }) 
    // //    console.log(filterArry.join(''))
    //    menuitems.innerHTML =  filterArry.join(''); 
    }
} 