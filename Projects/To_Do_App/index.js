const tasklist=[]
const itemlist=[]
let next = 0;

let notask = document.getElementById("notask");
let pop_up = document.getElementById("pop-up");
let body = document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];

function addtask(){
    notask.style.display="none";
    pop_up.style.display="block";
    pop_up.className = "noblur";
    header.className = "blur";
}

function return_to_main(){
    if(!document.getElementById("card-item")){
        notask.style.display="block";
    }
    pop_up.style.display="none";
    header.className = "noblur";
}

function start_new_list(){
    const new_list = document.getElementById("new-list").value;
    if (new_list != ""){
    const temp ={
        id : Date.now(),
        taskname : new_list
    }
    tasklist.push(temp);
    pop_up.style.display="none";
    header.className = "noblur";
    new_list_created()
    }
    
}

function new_list_created(){
    const card_element = document.createElement("div");
    card_element.id = "card-item";
    card_element.style.display = "block";
    const card_container = document.getElementById("card-container");
    card_container.appendChild(card_element);
    let heading = document.createElement("h3")
    heading.className = ("heading")
    heading.innerText = tasklist[tasklist.length-1].taskname;
    next = Date.now()
    heading.id = next;
    heading.setAttribute("onclick" , "expand(this.id)")

    let hr = document.createElement("hr");
    let add = document.createElement("button");
    let del = document.createElement("button");

    add.className = ("fa-solid fa-square-plus");
    del.className = ("fa-solid fa-trash-can");

    del.id = Date.now()
    add.id = Date.now()

    card_element.appendChild(heading)
    card_element.appendChild(hr)
    card_element.appendChild(add)
    card_element.appendChild(del)
    
    add.setAttribute("onclick" , "add(this.id)")
    del.setAttribute("onclick" , "delList(this.id)")
}

const delList = (box_id) => {
    let del_id = box_id;
    let parent = document.getElementById(del_id).parentElement
    parent.style.display = "none"
    tasklist.length=tasklist.length-1
   if (tasklist.length == 0)
   {
    notask.style.display="block"
   }
}

function add(box_id){
    document.getElementById("card-container").style.display = "none";;
    header.className = "blur";

    let pop_up1 = document.getElementById("pop-up1");
    pop_up1.style.display="block";
    pop_up1.className = "noblur";

    let h3 = document.getElementById("listname")
    h3.innerText = tasklist[tasklist.length-1].taskname;
    let addtolist = document.getElementById("addtolist")
    let ids = box_id;
    addtolist.onclick = function() {add_item(ids)}
}

function add_item(box_id){
    let new_id = box_id;
    let new_item = document.getElementById("new-item").value;
        const temp ={
            id : Date.now(),
            newitem : new_item
        }
        itemlist.push(temp);
        function addtolist(){
            let parent =  document.getElementById(new_id).parentElement
            const Div = document.createElement('div');
            Div.className = "list-components";
            parent.appendChild(Div)
            const span = document.createElement('span'); 
            span.className = 'span1';
            span.innerText = new_item;
            Div.appendChild(span)
            const a = document.createElement('a');
            a.className = 'done';              
            let mark = Date.now()
            a.id = mark;                    
            a.innerText = "Mark Done"
            a.setAttribute('onclick','cross(this.id)')
            Div.appendChild(a)
        }
    addtolist()
    closeListPopUp()

}

function cancel_this(){
    closeListPopUp()
}

const cross = (itemid) => {
    let id =itemid
    let item = document.getElementById(id).style.display="none"
    let crossed = document.getElementById(id).previousSibling.style.textDecoration = "line-through"
 }

function closeListPopUp(){
    document.getElementById("pop-up1").style.display = "none";
    document.getElementById("card-container").style.display = "flex";
    header.className = "noblur"
}