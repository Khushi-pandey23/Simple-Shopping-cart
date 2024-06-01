let items = []
let images = ['Dry cleaning.jpeg','Clean Stain.jpeg','Clean Wedding Dress.jpeg','Folded clothes.jpeg','Ironing.jpeg','leather cleaning.jpeg']
let itemList = [
    {SNo:1,ServiceName:"Dry Cleaning",Price:200,src:'Dry cleaning.jpeg'},
    {SNo:2,ServiceName:"Leather & Suede Cleaning",Price:999,src:'leather cleaning.jpeg'},
    {SNo:3,ServiceName:"Ironing",Price:30,src:'Ironing.jpeg'},
    {SNo:4,ServiceName:"Wedding dress cleaning",Price:240,src:'Clean Wedding Dress.jpeg'},
    {SNo:5,ServiceName:"Wash and fold",Price:140,src:'Folded clothes.jpeg'},
    {SNo:6,ServiceName:"Stain removal",Price:500,src:'Clean Stain.jpeg'}
]

const bookNowButton = document.getElementById("btn")
const warning = document.getElementById("warning")
let count = 0;
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phoneNo = document.getElementById("phone")


function bookNow(){
    if (items.length == 0){
        if (count == 0){
            const i = document.createElement("i")
            i.className = "bi bi-info-circle";
            warning.appendChild(i)
            const text = document.createElement("p")
            text.innerHTML = "Add the items to the cart to book"
            text.style.marginTop = '0px'
            warning.appendChild(text)
            count++
            setTimeout(()=>{
                warning.style.display = 'none'
                count--
            },2000)
        }
    }
    else{
        const confirm = document.getElementById('confirm')
        
        // creating i with circle
        const i = document.createElement("i")
        i.className = "bi bi-info-circle";
        confirm.appendChild(i)
        
        // creating p tag with message
        const text = document.createElement("p")
        text.innerHTML = "Items booked successfully"
        text.style.marginTop = '0px'
        confirm.appendChild(text)
        confirm.style.color = 'green'
        confirm.style.display = 'flex'
        confirm.style.gap = '5px'
    }
}

const imgTag = document.getElementById("item-image")
let i = 0
let serviceName = document.getElementById("service-name")
let serviceCost = document.getElementById("service-cost")
let costDiv = document.getElementById("cost")

function skipItem(){
    if (items.length == 6){
        imgTag.setAttribute('src','blank page.jpeg')

    }
    else{
        const temp = images[++i % images.length]
        imgTag.setAttribute('src',temp)
        for (let j=0;j<itemList.length;j++){
            if (itemList[j].src == temp){
                serviceName.innerText = itemList[j].ServiceName
                serviceCost.innerText = '$' + itemList[j].Price
            }
        }        
    }
}

const noitems = document.getElementById('noItems')
const table = document.getElementById('table')
let TotalAmt = document.getElementById('sum')
let sum = 0
TotalAmt.textContent = `$${sum}`


function addItem(){
    if (items.length == 5){
        items.push(serviceName.textContent)
        console.log(items);
        var row = table.insertRow()
        var sno = row.insertCell()
        var name = row.insertCell()
        var amt = row.insertCell()
        sno.innerHTML = items.length
        name.innerHTML = serviceName.textContent
        amt.innerHTML = serviceCost.textContent
        for (let j=0;j<itemList.length;j++){
            if (itemList[j].ServiceName == serviceName.innerText){
                sum = sum + itemList[j].Price
                TotalAmt.textContent = `$${sum}`
            }
        }
        imgTag.setAttribute('src','blank page.jpeg')
        serviceName.innerText = ''
        serviceCost.innerText = ''
    }
    else{
        if (items.length == 0){
            noitems.style.display = 'none';
        }

        // Adding service name to items list
        items.push(serviceName.textContent)
        console.log(items);
        bookNowButton.style.opacity = 1;

        // Filling up the table
        var row = table.insertRow()
        var sno = row.insertCell()
        var name = row.insertCell()
        var amt = row.insertCell()
        sno.innerHTML = items.length
        name.innerHTML = serviceName.textContent
        amt.innerHTML = serviceCost.textContent

        // Displaying total amount 

        for (let j=0;j<itemList.length;j++){
            if (itemList[j].ServiceName == serviceName.innerText){
                sum = sum + itemList[j].Price
                TotalAmt.textContent = `$${sum}`
            }
        }

        // Removing elements of items from images

        let index;
        for(let i = 0 ; i<=itemList.length; i++){
            if (serviceName.textContent == itemList[i].ServiceName){
                index = i;
                break;                
            }
        }
        let imageSrc = itemList[index].src
        for(let j=0; j<=images.length; j++){
            if (images[j]==imageSrc){
                index = j
            }
        }
        images.splice(index,1)
        
        // Skipping the selected image

        temp = images[++i % images.length]
        imgTag.setAttribute('src',temp)
        for (let j=0;j<itemList.length;j++){
            if (itemList[j].src == temp){
                serviceName.innerText = itemList[j].ServiceName
                serviceCost.innerText = '$' + itemList[j].Price
            }
        }

    }
}
