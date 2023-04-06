// Section 2 - Selecting element--------------------------------
// Contoh 1: Mengubah warna elemen HTML
const nama = document.getElementById('in-hd');
nama.style.color = "magenta";

// Contoh 2: Menambahkan elemen baru (p) ke dalam halaman HTML
const elemenBaru = document.createElement('p');
elemenBaru.innerHTML = 'Ini adalah contoh elemen baru';
document.body.appendChild(elemenBaru);

// Contoh 3: Menangkap event button dan menampilkan alert
let tombolTekan= document.getElementById('btnL');
tombolTekan.addEventListener('click', () => {
  let kepala = document.getElementsByTagName('p');
  alert(`Jumlah tag p ada : ${kepala.length}`)
})


// Section 3 - Traversing the DOM--------------------------------
// Contoh 1: Menelusuri elemen parent dan ditampilkan dengan warna
let myElemen = document.getElementById('img2');
let parentElemen = myElemen.parentNode;
parentElemen.style.backgroundColor = 'orange';

// Contoh 2: Menelusuri elemen sibling
let elSodar = document.getElementById('mylist');
let elSibling = elSodar.previousElementSibling;
elSibling.style.color = 'blue';


// Section 4 - Manipulating Elements--------------------------------
// Contoh 1: Mengubah isi teks dari elemen HTML
let gantiElem = document.getElementById('p1');
gantiElem.innerHTML = 'Hello, world!';

// Contoh 2: Mengubah atribut 'src' pada elemen gambar
const myImg = document.getElementById('img2');
myImg.setAttribute('src', 'img/cat.jpg');


// // Section 5 - Working with Attributes--------------------------------
// // Contoh 1: Get
let link = document.querySelector('#w3sc');
        if (link) {
            let target = link.getAttribute('target');
            console.log(target);
        }

// Contoh 2: Menghapus elemen tertentu dari halaman HTML
const elRem = document.getElementById('p4');
elRem.parentNode.removeChild(elRem);


// Section 6 - Manipulating Element’s Styles--------------------------------
// Contoh 1: Classname
let menu = document.querySelector('#mylist');
console.log(menu.className);

// Contoh 2: Mengganti style
let p = document.querySelector('#p2');
p.style.color = 'green';
p.style.fontWeight = 'bold';


// Section 7 - Events:
// Contoh 1: Menunjukkan bahwa button diklik
let btn = document.querySelector('#submity');

btn.onclick = (event) => {
    console.log('clicked');
};

// Contoh 2: Menunjukkan keyboard events
let textBox = document.getElementById('input');
        textBox.addEventListener('keydown', (event) => {
            console.log(`key=${event.key},code=${event.code}`);

        });


// Section 8 - Events:
// Contoh 1: Menunjukkan hasil click
const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="size"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});

// Contoh 2: Menujukkan checkbox
const cb = document.querySelector('#accept');
console.log(cb.checked);