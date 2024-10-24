//array

let names = ["ema", "danu", "gayana", 5, true, 5.6]
//mengakses indeks ke 0 pada array
let ema = names[0]

// menambahkan data 
names.push("angel")
names.push("yanti")

//mengubah data
names[0] = "ivan"

//menghapus data
names.pop()
names.pop()

console.log (names)

// object

let data = {
    nama: "danu",
    nim: 2301020069,
    married: true,
    anak: {
        anak1: "fajar",
        anak2: "bayu",
        anak3: "valen"
    }
}

//mengakses object

const nama = data.nama
console.log (nama)

//menambahkan data ke object

data.umur = 20


//mengubah data

data.married = false

//menghapus data

delete data.nim

console.log(data)
console.log(data.anak)

// javascript dom (document object model)

// const btn = document.querySelector(".btn")
// btn.style.color = "navy"
// btn.style.border = "2px dashed blue"

// //event listener 

// btn.onclick = () => {
//     console.log("gayana cakep banget cuy")
// }

// btn.onmouseenter = () => {
//     console.log("bayar gacoan sendiri sendiri")
// }

const btnYes1 = document.querySelector(".btn-yes1")
const btnYes2 = document.querySelector(".btn-yes2")
const btnNo = document.querySelector(".btn-no")


btnYes1.onclick = () => {
    alert("Fix Kamu Suka aku!")
}
btnYes2.onclick = () => {
    alert("Tembak Aku Sekarang!")
}
btnNo.onclick = () => {
    let left = Math.floor(Math.random()*300) + 1
    let top = Math.floor(Math.random()+100) + btnNo.offsetTop
    btnNo.style.position = "absolute"
    btnNo.style.left = left + "px"
    btnNo.style.top = top + "px"g
    // btnNo.style.right = right + "px"
    // btnNo.style.bottom = bottom + "px"

}

//math itu library JS , yang ini kita buat untuk generate angka random
