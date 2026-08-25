

//*ARRAY


// const mehmon1 = "Azizbek"
// const mehmon2 = "Kimdir"
// const mehmon3 = "someone"
// const mehmon4 = "anyone"

// const mehmonlar = ["Aziz", "kimdir", "someone", 18]
// // console.log(mehmonlar[0])

// // mehmonlar[0] = "0 indeksi ozgartirildi"
// // console.log(mehmonlar[0])

// let numbers = [1,2,5,5,5,5] 
// //property
// // const result = numbers.length
// // console.log(result)

// // const result = mehmonlar.indexOf("Aziz")

// const result = mehmonlar.concat(numbers)
// console.log(result)

// 1. Quyidagi futbolchilar massivini yarating:
// const myTeam = ["Ronaldo", "Neymar", "Salah"];

// // 2. Quyidagi amallarni darsda o'rgangan metodlaringiz bilan bajaring:
// //  - Massivning OXIRIGA "Messi"ni qo'shing.
// //  - Massivning BOSHIGA "Mbappe"ni qo'shing.
// //  - Massivning OXIRIDAGI elementni o'chirib tashlang.
// //  - Massiv uzunligini (length) konsolga chiqaring.

// myTeam.push("Messi")
// myTeam.unshift("Mbappe")
// myTeam.splice(myTeam.length-1)

// console.log(myTeam)

// let points 
// if( points=3) {
//     console.log("G'alaba")

// } else {
//     points=1
//     console.log("Durang")
// } 
// if (points=0) {
//     console.log("Mag'lubiyat")
// }

// const drills = ["push-ups", "planks", "squats"];
// drills.splice(0, 1)
// console.log(drills);

// // 1. Bizda mashqlar massivi bor (13-dars)
// let workouts = ["push-ups", "planks", "squats", "biceps-curl", "lat-pulldown"];

// // 2. Massivda nechta mashq borligini (uzunligini) konsolga chiqaring.
// console.log(workouts.length)
// // 3. Massivning eng oxiriga "forearm-burn" degan yangi mashq qo'shing (metod bilan).
// workouts.push("forearm-burn")
// // 4. Endi "planks" elementini o'chirib tashlang (splice metodidan foydalaning).
// workouts.splice(1,1)
// // 5. Kuchli taqqoslashdan foydalanib tekshiring (16-dars):
// // workouts massivining uzunligi (length) rostdan ham raqamli 4 ga tengmi? (=== bilan tekshiring)
// console.log(workouts.length===4)
// // Natijani console.log() ga chiqaring.
// console.log(workouts)


// let cities = ["warsaw", "krakow", "gdansk" ]
// let name = prompt("New city:")
// if(cities.includes(name) || name==="" ||name===null){
//     alert("bu shahar allaqachon bor yoki noto'g'ri kiritildi")
// }else{
//     cities.unshift(name)
// }
// console.log(cities)



// const playlist = ["Rain sound", "Piano music", "Deep meditation"];
// let ochir = playlist.pop()
// let oxirigaQosh= playlist.push("Forest birds")
// let qosh = playlist.unshift("Ocean waves")

// console.log(playlist)



// Prompt

// let name = prompt ("Ismingiz:")
// let result = name.charAt().toUpperCase()
// let kichik = name.slice(1).toLowerCase()
// let reresult = result + kichik
// alert(`salom, ${reresult}`)

// 1. Foydalanuvchidan ma'lumot so'raymiz
// let username = prompt("Ismingizni kiriting, usta:");
// let scoreInput = prompt("Bugun nechta dars ko'rdingiz?");

// // 2. String ma'lumotni Numberga aylantiramiz (Type Conversion)
// let lessonsCount = Number(scoreInput);

// // 3. Mantiqiy shart (If / Else va AND / OR)
// if (lessonsCount >= 5 && username !== null) {
//     console.log(`Daxshat, ${username}! Bugun 20-kunni portlatibsiz! 🦾`);
// } else {
//     console.log(`Charchamang, ${username}. Doimiylik (Consistency) eng muhimi! 🚀`);
// }

// * Loyiha 1

// let name = prompt("Ismingiz:")
// let age = prompt("Yoshingiz:")
// name=name.trim().toUpperCase()
// age = Number(age.trim());

// if(age<18) {
//     console.log(`Hurmatli ${name} sizga short videolar tavsiya etiladi`)
// }else if (age>=18 && age<40){
//     alert(`Hurmatli ${name}  Siz uchun toliq tahliliy videolar tayyor`)

// } else if (age>=40 || age==" "){
// alert(`Hurmatli ${name} Siz uchun tarixiy hujjatli filmlar`)
// }
// for(let i=0; i<3; i++){
//     console.log("Algoritm muvaffaqiyatli ishladi usta!")
// }

// LOYIHA  2


// let name = prompt("Ismingiz:"); 
// let birinchiHarf = name.charAt(0).toUpperCase();
// let davomi = name.slice(1).toLowerCase();
// name = birinchiHarf + davomi;

// let space = prompt("Piyoda necha km yurdingiz bugun:");
// let exercise = prompt("Bugun pull mashqlarini qilasizmi yoki qildingizmi? Ha yoki yoq deb javob bering:");

// space = Number(space);

// if (space === "" || space === null || exercise === "" || exercise === null) {
//     for (let i = 0; i < 5; i++) {
//         console.log("Malumotlar kiritilmadi");   
//     }
// }else if(space>=2 && exercise=="ha"){
//     alert(`Barakalla, ${name} Bugungi kunlik reja to'liq bajarildi`)

// }else if(space<2 || exercise=="yoq"){
//     alert(`${name} Bugun dangasalik qildingiz`)
// }

// LOYIHA 3

// let mySkills = ["html", "css", "js"];
// let newSkill = prompt("o'rganiladigan texnologiya:").toLowerCase
// if (mySkills.includes(newSkill)){
//     alert("usta bu texnologiyani allaqachon bilasiz-ku")

// } else if(newSkill==="" || newSkill === null) {
//     alert("iltimos, togri texnologiya nomini kiriting")

// } else if (newSkill==="react"){
//     mySkills.unshift(newSkill)
//     console.log("Daxshat! React royhat boshiga qoshildi")

// }else{
//     mySkills.push(newSkill)
// }
// console.log(mySkills) 




// let now = 2026
// let name = prompt("Ismingizni kiriting:")
// let age = prompt("Yoshingiz:")
// age = Number(age)
// let calculate = now-age
// calculate = Number(calculate)
// let months = age*12
// let days = age*365
// let week = days/7
// let hours = days*24
// let minutes = hours*60
// let seconds= minutes*60
// alert(`Yilingiz- ${calculate},Siz ${months}oy, ${week}hafta, ${days}kun, ${hours}soat, ${minutes}minut, ${seconds} sekund yashagansiz`)




//let ismlar = ["ahror", "sardor", "doniyor"]
// let ism= prompt("Ismni kriiting:")

// if(ism===""||ism===null){
//     alert("Ism kiritmadingiz")
    
// }else {
//   ism=  ism.toLowerCase()

// if(ismlar.includes(ism)){
//     alert("Ha bunday ism mavjud")
// }else{
//     alert("Bunday ism mavjud emas")
// }}
// const ismlar = ["ahror", "sardor", "doniyor"]
// for(let i=0; i<ismlar.length; i++){
//    ismlar[i]=ismlar[i]+"bek"

// }
// console.log(ismlar)


// let viloyat= prompt("Viloyat nomini kirit:")
// viloyat=viloyat.toLowerCase()
// switch (viloyat) {
//     case "toshkent":
//         alert("1 ta")
//         break;
// case "fargona":
//     alert("2 ta")
//     break
//     default:
//         alert("bunday viloyat yoq")
//         break;
// }


//* FUNCTIONS

// const calculator = (a,b, amal)=>{
// if (amal==="+"){
//     return a+b
// }else if    (amal==="-"){
//     return a-b
// } else if(amal==="*"){
//     return a*b
   
// }
//  return "Bunday qiymat mavjud emas"
// }
// let result= calculator(10,37,"/")
// console.log(result)


// const kattaHarf = (text) =>{
//     return text.toUpperCase()
// }
// const kichikHarf = (text) =>{
//     return text.toLowerCase()
// }
// const ismlarniFormatlash = (ism,tushunibOlamiz)=> {
// let natija = tushunibOlamiz(ism)
// console.log(natija)
// }
// ismlarniFormatlash("Diyor", kattaHarf)



// const kopaytma = (a,b) =>{
//     return a*b
// }
// const kvadratYigindisi = (a,b) =>{
//     return (a*a) + (b*b)
// }


// const sonlarniHisobla = (a, b, tushunamiz2) =>{
// let natija = tushunamiz2(a,b)
// console.log(natija)
// }
// sonlarniHisobla(4,7,kvadratYigindisi)


// const neonEffectQoshish = (videoNomi) =>{
//     return videoNomi + "" + "✨ Neon Effekt"
// }
// const relaxAudioQoshish = (videoNomi) => {
//     return videoNomi + "" + "🎧 Relax Audio"
// }
// const videoTayyorlash = (videoNomi, callback) => {
//     let result = callback(videoNomi)
//     console.log(result)
// }
// videoTayyorlash("Football geniuses", relaxAudioQoshish)
// videoTayyorlash("Calm Mind Audio", neonEffectQoshish)


//* ARRAY AND FOREACH


// const oluvchi = (callback) =>{
//     return callback
// }
// const obunachilar = [1200, 4500, 800, 2300, 5000];
// obunachilar.forEach((callback) => {
//     console.log(`Kanal obunachilari soni: ${callback}`);
    
// });

// const daromadlarUSD = [50, 120, 80, 200];
// daromadlarUSD.forEach(daromadim => {
//     let result = daromadim*13000
//     console.log(`Mening daromadim: ${result} som boldi`)
// });


// *  OBYEKT

// const youtubeChannel = {
//     channeName: "Leaders of football",
//     videosCount: 200,
//     isMonetized: false,
//     uploadVideo: function() {
//         this.videosCount++
//         console.log(`Football Geniuses #3 yuklandi! Jami videolar: ${this.videosCount} ta`)
//     }
// }
// youtubeChannel.uploadVideo()



// const userProfile = {
//     firstName: "Kimdir",
//     lastName: "Kimdirov",
//     age: 33,
//     celebrateBirthday: function(){
//         this.age++
//         console.log(`Tabriklaymiz ${this.firstName} ${this.lastName}! Siz ${this.age} yoshga kirdingiz!`)
//     }
// }
// userProfile.celebrateBirthday()


// *  MATH OBJECT

// const getLuckyNumber = () =>{
//     let val = Math.random(1,10);
//    let kopaytir = val*10 
//    let natija = Math.trunc(kopaytir)+1
//     return natija
// }
// let result = getLuckyNumber()
// if(result===7){
//     console.log("siz daxshatli jekpot yutdingiz 🏆")
// } else{
//     console.log(`afsus! yana urinib koring. Chiqqan son: ${result}`)
// }



// const checkTitle= (title)=>{
//     let natija = title.toLowerCase()
//     if(natija.includes("football")){
//         return("Bu kanal futbolga mos")
//     } else {
//         return("Bu kanal futbolga mos emas")
//     }
// }
// console.log(checkTitle("LEADERS OF FOOTBALL"))
// console.log(checkTitle("calm mind"))


//* TYPE CONVERSION

// let son1 = Number("40")
// let son2 = Number("50")
// // son1 = Number(son1)
// // son2 = Number(son2)
// let result = son1 +son2
// console.log(result)


//* MARAFON AMALIYOTLAR

// const checkMathResult = (result) =>{
//     result=result.toLowerCase()
//     switch (result) {
//         case "win":
//             return "Klub daxshatli g'alabaga erishdi! 🏆"
//             break;
//             case "draw":
//                 return "O'yin durang bilan yakunlandi. 🤝"
//                 break;
//                 case "lose":
//                     return "Afsus, jamoa mag'lub bo'ldi. 💔"

    
//         default:
//           return  "Bunday natija mavjud emas"
//             break;
//     }
// }
// console.log(checkMathResult("WIN"))
// console.log(checkMathResult("DRAW"))
// console.log(checkMathResult("hechnarsa"))



// const removeSpaces = (matn)=> {
// return matn.trim()
// }
// const addHashtag = (matn)=> {
//     return "#"+matn
// }
// const cleanText = (matn, callback) => {
//    let natija = callback(matn)
//     return natija 
// }

// console.log(cleanText("  leaders of football  ", removeSpaces))
// console.log(cleanText("calmmind", addHashtag))


// const makeUppercase = (title) => {
// return title.toUpperCase()
// }
// const makeShort = ( title) => {
//     return title.slice(0,10) + "..."
// }

// const formatVideoTitle = (title, callback) => {
//     let natija = callback(title)
//     return natija
// }
// console.log(formatVideoTitle("leaders of football", makeUppercase))
// console.log(formatVideoTitle("Calm Mind Audio Relaxation Music", makeShort))




// const playerPrices = [45, 80, 120, 15];
// playerPrices.forEach(price => {
//     console.log(`Bu  futbolchining narxi: ${price} million yevro`)
// });


//* MARAFON AMALIYOTLAR 2

// const myChannel = {
//     name: "Calm Mind Audio",
//     videos: ["Rain Sound", "Piano Music", "Forest Birds"],
//     showAllVideos: function() {
//         this.videos.forEach(videolar => {
//             console.log(`${this.name} kanalidagi video: ${videolar}`)
                
//         });

//     }
// }
//  myChannel.showAllVideos()   



// const getShortComment =(comment) => {
// if(comment.length>20){
//     return comment.slice(0,20)+"..."
// }else {
//     return comment
// }
// }
// console.log(getShortComment("Bu darslar "))


// let raqam = String(100);
// let matn = "100";
// console.log(matn===raqam)
// console.log(typeof raqam)



// const videoLengths = [1, 5, 0.5, 15, 0.8, 22];
// videoLengths.forEach(videos => {
//     if (videos<1) {
//         console.log(`Bu video shorts uchun mos: ${videos} minut`)
//     }else {
//         console.log( `Bu uzun video: ${videos} minut`)
//     }
// });



// const checkVideoStatus = (hasCopyright, views) => {
//     if (hasCopyright===true && views>100000){
//         return "Bu video bloklanishi mumkin! ⚠️"
//     }else if(hasCopyright===false || views<=100000) {
//         return "Video xavfsiz, kanalda qolishi mumkin. ✅"
//     }
// }
// console.log(checkVideoStatus(true, 150000))
// console.log(checkVideoStatus(true, 1500))



// const footballTeam = {
//     teamName: "Real Madrid",

// playersCount: 25,

// marketValue: 1000,
// getAveragePlayerPrice: function() {
//    let ortacha = this.marketValue/this.playersCount
//     return ortacha
// }
// }
// console.log(`${footballTeam.getAveragePlayerPrice()} Million yevro`)



// const cookShashlik = (ovqatnomi) => {
//     return `Usta hozir daxshatli ${ovqatnomi} pishirmoqda... 🔥`
// }
// const eatOats = (ovqatnomi) => {
//     return `Dasturchi sport rejimida hozir u: ${ovqatnomi} yeyyapti` 
// }
// const processOrder = (ovqatnomi, callback) => {
//     let natija = callback(ovqatnomi)
//     return natija
// }
// console.log(processOrder("Shashlik", cookShashlik))
// console.log(processOrder("Shashlik", eatOats))


// const developer = {
//     firstName: "Usta",

// targetCountry: "Poland",

// getJobMessage: function(){
//     return `${this.firstName} yaqin orada ${this.targetCountry} davlatida frontedn dasturchi bolib ishga kiradi `
// }
// }
// console.log(developer.getJobMessage())


// const myChannels = ["  leaders of football  ", "  kurtlar vadisi  ", "  calm mind audio  "];
// myChannels.forEach(kanalNomi => {
//     console.log( kanalNomi.trim().toUpperCase())
// });


// let comments = ["bu qaysi bo'lim?", "efsane vadi sahnesi", "super video", "kvp polat alemdar"];
// for (let i =0; i<comments.length; i++) {
// console.log(comments[i].includes("vadi"))
// }



// let players = ["Di Maria", "Stam", "Messi"];
// players.forEach(ism => {

//     console.log(ism.toUpperCase())
// });


// let myChannel = {
//     name: "Leaders of Football",
//     videosCount: 4,
//     status: "active" // Bu yerda "active", "review" yoki "suspended" bo'lishi mumkin
// };
// switch (myChannel.status) {
//     case "active":
//         console.log("Kanal ishchi holatda, videolarni portlatamiz!")
//         break;
// case "review": 
// console.log( "Kanal hozir tekshiruvda, kutib turamiz.")
// break;
//     default:
//         console.log( "Xatolik: Kanal holati aniqlanmadi!")
//         break;
// }





// const company ={
//     name: "nom",
//     grossSalary: 4000,
//     contractType: "B2B",
//     calculateNetSalary: function(){
//         switch (company.contractType) {
//             case "B2B":
//                 return this.grossSalary*0.9
//                 case "UoP":
//                     return this.grossSalary *0.8
//             default:
//                 return this.grossSalary
//         }
//     }
    
// }
// console.log(company.calculateNetSalary())



// let cleanTeam = []
// let developers = ["  Lukasz ", "Jan  ", "  Mateusz", "Anna"];

// developers.forEach(ism => {
//     cleanTeam.push(ism.trim())
// });


// console.log(cleanTeam)



// function checkMatchResult(result) {
//     switch (result) {
//         case "win":
//             return "Klub daxshatli g'alabaga erishdi! 🏆";
//         case "lose":
//             return "Klub maglub boldi";
//             case "draw":
//                 return  "Klub durrang natija qayd etdi"
//             default:  
//                 return "Bunday natija mavjud emas"
//     }
// }

// // Tekshirish uchun:
// console.log(checkMatchResult("win"));
// console.log(checkMatchResult("lose"));



// const removespaces = (text) => {
//     return text.trim()
    
// }

// const addHashtag = (text) => {
//     text = "#"+text
//     return text
// }

// const cleanText = (text, callback) => {
//     let natija = callback(text)
//     return natija
// }

// console.log(cleanText("  ishladi   ",addHashtag))




// const playerPrices = [45, 80, 120, 15];
// playerPrices.forEach(price => {
//    console.log( `Bu futbolchining narxi: ${price} million evro.`)
    
// });


// let player1 = {
//     name: "Di Maria",
//     goals: 15
// };

// let player2 = player1; 
// player2.goals = 20;

// function checkLegendStatus(player) {
//     switch (player.goals) {
//         case 15:
//             return `${player.name} - Yaxshi natija!`;
//         case 20:
//             return `${player.name} - Daxshatli afsona!`;
//         default:
//             return "Statistika topilmadi.";
//     }
// }

// console.log(checkLegendStatus(player1));



// const doubleSalary = (money) => money * 2;
// const addBonus = (money) => money + 500;

// const processFinances = (amount, callback1, callback2) => {
//     // DIQQAT: Tuzoq mana shu yerda!
//     let step1 = callback1(amount);
//     let step2 = callback2(step1);
//     console.log(step2);
// };

// const salaries = [1000, 2000];

// salaries.forEach(salary => {
//     processFinances(salary, doubleSalary, addBonus);
// });



// let globalScore = 0;

// const goalScored = () => {
//     globalScore = globalScore + 1;
//     return globalScore;
// };

// const matchSimulation = (callback) => {
//     let globalScore = 10; // DIQQAT: Ichki o'zgaruvchi!
//     let finalResult = callback();
//     console.log("Ichki natija:", finalResult);
// };

// matchSimulation(goalScored);
// console.log("Tashqi natija:", globalScore);


//* AKHROR WEB AMALIYOT 3

// const myArray = [[false, true], [1, 2], 99, "yaxshi"]
// console.log(myArray.indexOf("yaxshi"))



// const data = [[1,2,3], "qizil", [4,5,6], true, false]
// let newData= data.flat()
// let onlyNumbers = newData.filter((item) => {
//     return typeof item === 'number'
// })
// console.log(onlyNumbers)



// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
// const filteredData = checkData.filter((element) => {
//     return Boolean(element); 
// });
// console.log(filteredData)



// const word = "Samarqand"
// let splitqil = word.split("")
// let newword = splitqil.reverse()
// let result = newword.join("")
// console.log(result)

// const str = "AsSSalamu ALAyKUM YaxShimisiz";
// let words = str.split(" ");
// let updatedWords = words.map((word) => {
//     let firstLetter = word[0].toLowerCase();
//     let restOfWord = word.slice(1).toUpperCase();
//     return firstLetter + restOfWord;
// });
// let result = updatedWords.join(" ");
// console.log(result);


// * DOM SELECTORS

// const bu = document.querySelector('mening-qutim')
// console.log(bu.textContent)



// const box = document.getElementById('notification-box');
// box.innerHTML = `
//     <div style="background-color: red; color: white; padding: 15px; border-radius: 5px;">
//         <h3>Diqqat xatolik!</h3>
//         <p>Siz kiritgan parol noto'g'ri. Iltimos, qaytadan urinib ko'ring.</p>
//     </div>
// `;


// const catcher = document.getElementById('car-market')
// catcher.innerHTML += `
// <h1>Ustaning innerhtml qoshishi</h1>
// <ul>
// <li>ishladimi</li>
// </ul>`

// const listCatcher = document.getElementById('mashinalar-royxati')
// listCatcher.innerHTML += `<li>qoshildimi</li>`



// const statusText = document.getElementById('status-text');
// const toggleBtn = document.getElementById('toggle-btn');
// toggleBtn.addEventListener('click', function() {
//     statusText.innerHTML = '<h1>Chiroq yondi! 💡</h1>'
//     statusText.classList.add('active');
// });




// let count = 0

// const catcher = document.getElementById('counter-text')
// const catcher1 = document.getElementById('plus-btn')

// catcher1.addEventListener('click', function() {
//  count++
// catcher.innerHTML = count
// if (count>5){
//    catcher.classList.add('danger')
// }
// })



// const catcher = document.getElementById('buy-btn')
// const catcher1 = document.getElementById('cart-box')

// catcher.addEventListener('click', function(){
//     catcher1.innerHTML = "<h2>MacBook Pro — Savatchaga qo'shildi! 💻</h2>"
// })


// const catcher = document.querySelector('#password-input')
// const catcher1 = document.querySelector('#show-btn')
// catcher1.addEventListener('click', function() {
//     catcher.setAttribute('type', 'text')
// }) 


// const catcher = document.querySelector('#theme-box')
// const catcher1 = document.querySelector('#theme-btn')
// catcher1.addEventListener('click', function() {
//     let joriyMavzu = catcher.getAttribute('data-theme');
//     if(joriyMavzu==='light') {
//         catcher.setAttribute('data-theme', 'dark')
//     } else {
//         catcher.setAttribute('data-theme', 'light')

//     }
// })


// const catcher = document.querySelector('#main-image')
// const catcher1= document.querySelector('#change-btn')

// catcher1.addEventListener('click', function() {
//     let joriySrc = catcher.getAttribute('src');
//     if (joriySrc ==='https://picsum.photos/id/1071/300/200') {
//         catcher.setAttribute('src','https://picsum.photos/id/1071/600/400')
//     } else {
//         catcher.setAttribute('src','https://picsum.photos/id/1071/300/200')
//     }
// })


// const catcher = document.querySelector('#box')
// const catcher1 = document.querySelector('#grow-btn')

// catcher1.addEventListener('click', function() {
//     catcher.style.width = '200px'
//     catcher.style.height = '200px'
//     catcher.style.backgroundColor = 'blue'
// })



// const catcher=document.querySelector('#secret-text')
// const catcher1 = document.querySelector('#toggle-btn')

//  catcher1.addEventListener('click', function()  {
// let holat = catcher.style.display;
// if (holat=== 'block'){
//     catcher.style.display= 'none'
//     catcher1.innerHTML= 'Korsatish'
// } else {
//     catcher.style.display= 'block'
//     catcher1.innerHTML= 'Yashirish'
// }

//  })




// const content = document.querySelectorAll('p')
// content.forEach(teglar => {
//     if(teglar.textContent.includes('success')){
//         teglar.classList.add('success')
//     } else if (teglar.textContent.includes('error')) {
//         teglar.classList.add('error')
//     }
// });




// const dasturchilar = [
//     { ism: 'Anvar', yosh: 22, status: false },
//     { ism: 'Olim', yosh: 25, status: false },
//     { ism: 'Ali', yosh: 20, status: false }
// ];
// dasturchilar.forEach((inson) => {
//     if(inson.ism.includes('a') || inson.ism.includes('A')) {
// inson.status = true;
//     }
// });
// console.log(dasturchilar)



// const jamoa = [
//     { ism: 'Anvar', rol: 'Frontend', tajriba: 'Senior' },
//     { ism: 'Olim', rol: 'Backend', tajriba: 'Junior' },
//     { ism: 'Ali', rol: 'React Developer', tajriba: 'Middle' }
// ];


// const catcher = document.querySelector('#team-wrapper')
// jamoa.forEach(element => {
// catcher.innerHTML += `<div style="border: 2px solid blue; margin: 10px; padding: 10px;">
//     <h3>Ism: ${element.ism}</h3>
//     <p>Rol: ${element.rol} - Tajriba: ${element.tajriba}</p>
// </div>`
// });


// const ism = 'usta'
// const yosh = 5
// const shahar = 'noaniq'
// console.log(`ismim ${ism}, yoshim ${yosh} da, manzilim ${shahar} `)


// const footballers = ['ronaldo', 'messi', 'neymar', 'ramos']
//  footballers.push('bergkamp')
//  footballers.shift()

// console.log(footballers.length, footballers)




// const numbers= [2, 5, 8, 11, 14, 17]
// for (let i =0; i<numbers.length; i++){
//     if(numbers[i]>10) {
//         console.log(`katta son ${numbers[i]}`)
//     }else {
//         console.log(`kichik son ${numbers[i]}`)
//     }
// }




// const tekshiruvchi = (ism, yosh) => {
//     if (yosh>=18) {
//         return `${ism}, siz darslarni davom ettirishingiz mumkin.`
//     } else {
//         return ` ${ism}, siz hali 18 yosh to'lmagansiz.`
//     }
// }
// console.log(tekshiruvchi('vali', 20))


// const telefon = {
//     brend: 'samsung', 
//     model: 's20 ultra',
//     narx: 800,
//     malumotChiqar: function() {
//         console.log(`Ushbu qurilma ${this.brend} ${this.model} bo'lib, uning narxi ${this.narx}$ hisoblanadi.`)
//     }
// }
// telefon.malumotChiqar()




// let yosh = '20' 

// switch(yosh) {
//         case 20:
//             console.log("siz 20 yoshdasiz")
//             break;
//             case '20':
//                 console.log('mana endi ishladi!')
//                 break
// }




// const darsniBoshlash = (fan, callback) => {
//         console.log(`Hozir ${fan} darsni boshlandi`)
//         callback()
// }
// darsniBoshlash('Javascript', ()=> {
//     console.log('darslar tugadi endi amaliyot qilamiz')
// })




// const otaFunktsiya = () => {
//     let unvon = "Usta";
    
//     const bolaFunktsiya = () => {
//         // Bola funktsiya ota muhitidagi 'unvon'ni meros qilib oladi
//         console.log(`Salom, ${unvon}!`); 
//     };
    
//     return bolaFunktsiya;
// };

// const jangchi = otaFunktsiya();
// jangchi(); // "Salom, Usta!" deb chiqadi, garchi otaFunktsiya allaqachon bajarilib bo'lgan bo'lsa ham!

// const mashinaSotibOlish = (mashinaNomi, callback) => {
//  switch (mashinaNomi) {
//             case 'gentra':
//                 return callback("Gentra narxi 13,000$")
              
//             case 'byd': 
//                 return callback("BYD narxi 25,000$")
//             default:
//                 return callback("Bunday mashina salonda yo'q!")
        
//         }
// }

// const avtoSalon = {
//     salonNomi: 'daxshatli auto',
//     mashinalar: ['cobalt', 'gentra', 'byd'],
//     hisobChiqar: (matn) => {
//         console.log(matn)
       
//     }
// }
// mashinaSotibOlish('byd', avtoSalon.hisobChiqar)


// const biletSotibOlish = (kinoNomi, callback) => {
//     switch (kinoNomi) {
//         case 'Avatar':
//             return callback('avatar kinosiga bilet narxi 5 $')
//         case 'Interstellar':
//             return callback('interstellar kinosiga bilet narxi 8$')
    
//         default:
//         return callback('bunday kino royxatda yoq')
//     }
// }


// const kinoTeatr = {
//     teatrNomi: 'daxshatli cinema',
//     kinolar: ['Avatar', 'Interstellar', 'Gladiator'],
//     biletniChopEt: (matn) => {
//         console.log(matn)
//     }
// }
// biletSotibOlish('Avatar', kinoTeatr.biletniChopEt)



// const dasturchi = {
//     ism: 'Usta',
//     yonalish: 'React Developer',
//     tillar: ['JavaScript', 'TypeScript', 'HTML', 'CSS'], // 💡 Obyekt ichida array
// };
// for (let i=0; i<dasturchi.tillar.length; i++) {
//     console.log(`men ${dasturchi.tillar[i]} tilini bilaman `)
// }



// const shortKanallar = [
//     { nomi: 'Leaders of Football', obunachilar: 5000 },
//     { nomi: 'Kurtlar Vadisi', obunachilar: 12000 },
//     { nomi: 'Calm Mind Audio', obunachilar: 2500 }
// ];

// for (let i =0; i<shortKanallar.length; i++) {
//     console.log(`Kanal ${shortKanallar[i].nomi}`)
// }



// const kunlikTaomlar = [
//     { nomi: 'Tuxum', protein: 24 },
//     { nomi: 'GURUCH', protein: 8 },
//     { nomi: 'Tovuq goshti', protein: 45 },
//     { nomi: 'Tvorog', protein: 30 }
// ];
// const yordamchi = (matn) => {
//     console.log(matn)
// }

// const asosiy = (taomlar, callback) => {
// for (let i =0; i<taomlar.length; i++) {
//     if (taomlar[i].protein>20) {
//     callback(`katta energiya: ${taomlar[i].nomi}`)
//     }
// }
// }
// asosiy(kunlikTaomlar, yordamchi)




// const shortsVideolar = [
//     { sarlavha: 'Ronaldoni toping', korishlar: 3500 },
//     { sarlavha: 'Messining daxshatli goli', korishlar: 12000 },
//     { sarlavha: 'Neymar qayerda?', korishlar: 1800 },
//     { sarlavha: 'Mbappe tezligi', korishlar: 8500 }
// ];


// const yordamchi = (matn) => {
//     console.log(matn)
// }

// const asosiy = (trend, callback) => {
//     for(let i =0; i<trend.length; i++) {
//  if (trend[i].korishlar>3000) {
//     callback(`🔥 TREND: ${trend[i].sarlavha} ${trend[i].korishlar} marta ko'rildi!`)
//  }
//     }
// }
// asosiy(shortsVideolar, yordamchi)

// const fitnessReja = [
//     { kun: 'Dushanba', turi: 'push', vaqt: 35 },
//     { kun: 'Seshanba', turi: 'pull', vaqt: 25 },
//     { kun: 'Chorshanba', turi: 'legs', vaqt: 30 },
//     { kun: 'Payshanba', turi: 'dam', vaqt: 0 }
// ];


// const yordamchi = (matn) => { 
//     console.log(matn)
// }


// const asosiy = (mashq, callback) => {
//     let belgi = "";
//     for (let i=0; i<mashq.length; i++) {
//         switch (mashq[i].turi) {
//     case 'push':
//         belgi = "💪"; 
//         break;       
        


//     case 'pull':
//         belgi = "🏹";
//         break;
        
//     case 'legs':
//         belgi = "🦵";
//         break;
        
//     default:
//         belgi = "🛌";
// }
//         if (mashq[i].vaqt>=30){
//             console.log(`${belgi} ${mashq[i].kun} kuni ${mashq[i].vaqt} daqiqa ${mashq[i].turi} mashguloti bajarildi`)
//         }
      



//     }
// }
// asosiy(fitnessReja, yordamchi)









// const kanalDaromadi = [
//     { kun: 'Juma', turi: 'neon video', foyda: 45 },
//     { kun: 'Shanba', turi: 'aI ovozli', foyda: 15 },
//     { kun: 'Yakka', turi: 'neon video', foyda: 60 },
//     { kun: 'Dushanba', turi: 'kino kesim', foyda: 8 }
// ];

// const yordamchi = (matn) => {
//     console.log(matn)
// }




// const asosiy = (daromad, callback) => {
//      let belgi = ""
//      for (let i=0; i<daromad.length; i++) {
//         switch (daromad[i].turi) {
//             case 'neon video':
//                 belgi = "🎨"
//                 break;
//             case 'ai ovozli':
//                 belgi = "🤖"
//                 break;
//             case 'kino kesim':
//                 belgi= "🎬"
//                 break
//          default:
//             belgi = "📊"
              
//         }
//         if (daromad[i].foyda>=20) {
//             console.log(`${belgi} ${daromad[i].kun} kuni ${daromad[i].turi} turi orqali ${daromad[i].foyda} $ foyda keldi`)
//         }
//      }
// }
// asosiy(kanalDaromadi, yordamchi)




// const musiqaRuyxati = [
//     { nomi: 'Yomgir ovozi', holat: 'tinchlik', uzunlik: 45 },
//     { nomi: 'Kosmik sayohat', holat: 'fokus', uzunlik: 15 },
//     { nomi: 'Chuqur uyqu', holat: 'uyqu', uzunlik: 60 },
//     { nomi: 'Tonggi shabadalar', holat: 'energiya', uzunlik: 8 }
// ];



// const yordamchi = (matn) => {
//     console.log(matn)
// }


// const asosiy = (musiqa, callback) => {
//     let  belgi = ""
//     for (let i =0; i<musiqa.length; i++) {
//         switch (musiqa.holat) {
//             case 'tinchlik' :
//             belgi = "🧘"
//             break
//             case 'fokus':
//             belgi = "🧠"
//             break
//             case 'uyqu': 
//             belgi = "🌙"
//             break
//             default:
//             belgi = "⚡"
//         }
//         if (musiqa[i].uzunlik>=30) {
//             console.log(`${musiqa[i].nomi} treki ${musiqa[i].holat} holati uchun ${musiqa[i].uzunlik} daqiqa chalindi`)
//         }
//     }
// }

// asosiy(musiqaRuyxati, yordamchi)



    // const tizimDrayverlari = [
    //     { nomi: 'Network Driver', turi: 'tarmoq', versiyaYoshi: 18 },
    //     { nomi: 'SSD Firmware', turi: 'xotira', versiyaYoshi: 3 },
    //     { nomi: 'NVIDIA Graphics', turi: 'video', versiyaYoshi: 24 },
    //     { nomi: 'Audio Codec', turi: 'ovoz', versiyaYoshi: 5 }
    // ];


    // const yordamchi = (matn) => {
    //     console.log(matn)
    // }



    // const asosiy = (driver, callback) => {
    //     let belgi = ""
    //     for ( let i =0; i<driver.length; i++) {
    //         switch (driver[i].turi) {
    //             case 'tarmoq':
    //                 belgi = "🌐"
    //                 break;
    //                 case 'xotira':
    //                     belgi = "💾"
    //                     break
    //                     case 'video':
    //                         belgi = "🎮"
    //             default:
    //                 belgi="⚙️"
    //         }
    //         if(driver[i].versiyaYoshi>=12) {
    //             console.log(`${belgi} ${driver[i].nomi} drayveri ${driver[i].turi} turi uchun ${driver[i].versiyaYoshi} oydan beri yangilanmagan. Danger!`)
    //         }
    //     }
    // }

    // asosiy(tizimDrayverlari, yordamchi)



    // const catcher = document.querySelector('#bosh-sarlavha')
    // const catcher1 = document.querySelector('.yozilish-tugmasi')

    // console.log(catcher, catcher1)








//     const shortslarOmbori = [
//     { sarlavha: 'Ronaldoni toping', turi: 'Neon draw', statistika: { korishlar: [4500, 12000, 3200], yoqtirishlar: 850 } },
//     { sarlavha: 'Messining daxshatli goli', turi: 'Find player', statistika: { korishlar: [15000, 22000], yoqtirishlar: 2100 } },
//     { sarlavha: 'Neymar qayerda?', turi: 'Neon draw', statistika: { korishlar: [1200, 2500, 1800], yoqtirishlar: 150 } },
//     { sarlavha: 'Mbappe tezligi', turi: 'Oddiy', statistika: { korishlar: [8500, 9200, 11000], yoqtirishlar: 1300 } }
// ];



// const yordamchi = (matn) => {
//     console.log(matn)
// }


// const asosiy = (mostWatched, callback) => {
//     let belgi = ""
//     for(let i=0; i<mostWatched.length; i++) {
//     switch (mostWatched[i].turi) {
//         case 'Neon draw':
//             belgi=  "🎨"
//             break;
//         case 'Find player':
//             belgi="🔎"
//             break
//         case 'Oddiy':
//             belgi="📹"
//             break
            
//         default:
//             belgi="📊"
//     }
//     let oxirgi = mostWatched[i].statistika.korishlar[mostWatched[i].statistika.korishlar.length - 1];
//     if(oxirgi>=5000) {
//         callback(`${belgi} ${mostWatched[i].sarlavha} ${(mostWatched[i].turi)} loyihasi trendda! Oxirgi korish ${oxirgi} marta`)
//     }
//     }
// }  
// asosiy(shortslarOmbori, yordamchi)






// const taomlarOmbori = [
//     { nomi: 'Tovuq filesi', turi: 'gosht', porsiyalar: [150, 200, 250] },
//     { nomi: 'Tuxum oqi', turi: 'nonushta', porsiyalar: [4, 6] },
//     { nomi: 'Balerina tvorog', turi: 'sutli', porsiyalar: [100, 150, 120] },
//     { nomi: 'Grechka kabob', turi: 'guruchli', porsiyalar: [90, 80] }
// ];


// const yordamchi=(matn) => {
// console.log(matn)
// }



// const asosiy = (ovqat, helper) => {
//     let belgi=""
//     for (let i=0; i<ovqat.length; i++) {
//     switch (ovqat[i].turi) {
//         case 'gosht':
//         belgi="🍗"    
//             break;
//         case 'nonushta':
//         belgi="🍳"
//             break;
//         case 'sutli':
//         belgi="🥛"
//             break;
//         default:
//         belgi="🥗";
//     }
//     let hisobchi = ovqat[i].porsiyalar[ovqat[i].porsiyalar.length-1]
//     if(hisobchi>=150) {
//         helper(`${belgi} ${ovqat[i].nomi} ${ovqat[i].turi}i daxshatli yuqori! Oxirgi porsiya: ${hisobchi}g`)
//     }
//     }
// }
// asosiy(taomlarOmbori, yordamchi)






// const ishUrinlari = [
//     { kompaniya: 'Warsaw Tech', lavozim: 'React Developer', maoshlar: [8000, 12000, 15000] },
//     { kompaniya: 'Krakow Soft', lavozim: 'Junior JS Intern', maoshlar: [4000, 4500] },
//     { kompaniya: 'Wroclaw Digital', lavozim: 'React Developer', maoshlar: [14000, 19000, 22000] },
//     { kompaniya: 'Gdansk IT', lavozim: 'QA Manual', maoshlar: [6000, 7000, 6500] }
// ];


// const yordamchi=(matn) => {
//     console.log(matn)
// }



// const asosiy=(orin, helper) => {
//     let belgi =""
//     for (let i=0; i<orin.length; i++) {
//         switch (true) {
//             case orin[i].kompaniya.includes('Warsaw'):
//             belgi="🏰"    
//                 break;
//             case orin[i].kompaniya.includes('Wroclaw'):
//             belgi="🏙️"
//                 break;    
//             default:
//             belgi="🇵🇱"
//         }
//         let hisobchi = orin[i].maoshlar[orin[i].maoshlar.length-1]
//         if(orin[i].lavozim==='React Developer' && hisobchi >=15000) {
//             helper(`${belgi} ${orin[i].kompaniya} (${orin[i].lavozim}) - Top taklif: ${hisobchi} `)
//         }
//     }
// }

// asosiy(ishUrinlari, yordamchi)



// const catcher= document.getElementById('channel-title')
// catcher.classList.add('neon-effect')


// const catcher1= document.querySelector('#warning-message')
// catcher1.remove()


// const catcher2=document.querySelector('.video-card')
// catcher2.classList.remove('old-design')
// catcher2.classList.add('modern-design')




// const videoNavbati = ['Di Maria magic', 'Ronaldinho jozibasi', 'Van Basten gollari', 'Zidane taktikasi'];
// let firstVideo=videoNavbati[0]
// let lastVideo=videoNavbati[videoNavbati.length-1]
// videoNavbati[2]='Messi Miami Inter'
// videoNavbati[videoNavbati.length]='Neymar drible'
// console.log(`Birinchi video: ${firstVideo} 
// Oxirgi video: ${lastVideo} 
// Yangilangan toliq navbat: ${videoNavbati}`)




// const montajchilar = ['Ali', 'Vali', 'Sardor'];

// montajchilar.push('Nodir')
// montajchilar.unshift('Usta')
// montajchilar.pop([montajchilar.length-1])
// montajchilar.shift()

// console.log(montajchilar)



// const pleymeykerlar = ['Zidane', 'Xavi', 'Iniesta', 'Pirlo', 'Modric'];
// pleymeykerlar.splice(1, 2, 'Ronaldinho')

// console.log(pleymeykerlar)



// const taqiqlanganMavzular = ['haqorat', 'reklama', 'fake news', 'siyosat'];
// let reklama = taqiqlanganMavzular.includes('reklama')
// let saver = taqiqlanganMavzular.indexOf('haqorat')
// let futbl = taqiqlanganMavzular.indexOf('futbol')
// console.log(`Reklama bormi: ${reklama}
// Haqorat sozining indeksi: ${saver}, ${taqiqlanganMavzular[0]}
// Futbol sozining indeksi: ${futbl}`)






// const evroVideolar = ['Ronaldo revansh', 'Mbappe jarohat', 'Yamal mojarosi'];
// const jchVideolar = ['Messi kubok', 'Neymar kozyosh', 'Maradona xotira'];
// let toliqArxiv=evroVideolar.concat(jchVideolar)
// let trendVideolar= toliqArxiv.slice(1,4)

// console.log(toliqArxiv,
// trendVideolar
// )




// const xomSarlavhalar = ['ronaldo tezkori', 'messi sehrgar', 'neymar raqsi'];
// const tayyorSarlavhalar = xomSarlavhalar.map((son) => {
//      return son + ' (shorts)'
// })
   
// tayyorSarlavhalar.forEach(element => {
   
//     console.log(element)
// });



// const videolarOmbori = [
//     { sarlavha: 'ronaldo tezkori', turi: 'Shorts', kurishlar: [4000, 7000, 12000] },
//     { sarlavha: 'messi sehrgar', turi: 'Uzun video', kurishlar: [25000, 45000] },
//     { sarlavha: 'neymar raqsi', turi: 'Shorts', kurishlar: [1500, 3000, 4500] }
// ];

// // 1. map orqali ob'ektning faqat sarlavhasini katta harfga o'giramiz va yangi massiv quramiz
// const correctVideos = videolarOmbori.map((video) => {
//     return {
//         sarlavha: video.sarlavha.toUpperCase(), // 💡 Faqat matn qismini toUpperCase qilamiz
//         turi: video.turi,
//         kurishlar: video.kurishlar
//     };
// });

// // 2. Yangi massivni forEach bilan aylanamiz
// correctVideos.forEach(element => {
//     let belgi = ""; // Belgi har safar tozalanishi uchun ichkarida ochgan ma'qul

//     // 💡 element.turi deb ob'ekt ichiga kiramiz
//     switch (element.turi) {
//         case 'Shorts':
//             belgi = "📱";    
//             break;
//         case 'Uzun video':
//             belgi = "🎬";
//             break;    
//     }

//     // 💡 element.kurishlar orqali oxirgi ko'rishni dynamic ushlaymiz
//     let hisobchi = element.kurishlar[element.kurishlar.length - 1];

//     if (hisobchi > 10000) {
//         // 💡 Nomlarni ham element.sarlavha va element.turi deb chiqaramiz
//         console.log(`🔥 DAXSHATLI REKORD: ${belgi} ${element.sarlavha} (${element.turi}) — Oxirgi ko'rishlar: ${hisobchi}`);
//     }
// });






// const dasturchilar = [
//     { ism: 'Ali', daraja: 'Junior', maoshlar: [4000, 5000] },
//     { ism: 'Vali', daraja: 'Senior', maoshlar: [12000, 16000, 18000] },
//     { ism: 'Sardor', daraja: 'Middle', maoshlar: [7000, 9000] }
// ];
// dasturchilar.forEach(element => {
//     if(element.daraja==='Senior' && element.maoshlar[0]>10000) {
//         console.log(`Senior developer: ${element.ism}. ilk shartnoma maoshi: ${element.maoshlar[0]} PL`)
//     }
// });




// const catcher = document.querySelector('#match-title')
// catcher.textContent= 'Live'
// const catcher1 = document.querySelector('#score-board')
// catcher1.innerHTML = "<b style='color: red;'>2 : 1</b>"
// const catcher2 = document.querySelector('#score-board')
// catcher2.classList.remove('old-score')
// catcher2.classList.add('live-score')
//  const catcher3 = document.querySelector('#match-status')
//  catcher3.textContent = 'Gooool! Ikkinchi taym tugadi!'



// const catcher = document.querySelector('#counter-value')
// const btn = document.querySelector('#click-btn')
// btn.addEventListener('click', function()  {
//     let currentNumber = Number(catcher.textContent);
//   catcher.textContent = currentNumber + 1;
// }) 


// const catcher = document.querySelector('#like-count')
// const catcher1=document.querySelector('#like-btn')
// catcher1.addEventListener('click', function() {
// let currentNumber= Number(catcher.textContent)
// catcher.textContent= currentNumber+1
// })

// const catcher2 = document.querySelector('#dislike-count')
// const catcher3 = document.querySelector('#dislike-btn')
// catcher3.addEventListener('click', function() {
//     let currentNumber1 = Number(catcher2.textContent)
//     catcher2.textContent= currentNumber1 + 1
// })






// const catcher = document.querySelector('a')
// console.log(catcher.getAttribute('href'))
// catcher.setAttribute('href', 'https://www.google.com')
// catcher.textContent='This is google main site'

// const catcher1=document.querySelector('p')

// console.log(catcher1.getAttribute('class'))

// catcher1.setAttribute('class', 'success')
// catcher1.setAttribute('style','color: red')
// catcher1.style.margin = '50px'
// catcher1.style.color = 'crimson'
// catcher1.style.fontSize = '40px'
// catcher1.style.margin = ''




// const teg = document.querySelectorAll('p')
// teg.forEach((text) => {
//     if (text.textContent.includes('success')) {
//         text.classList.add('success')
//     }
//     if(text.textContent.includes('error')) {
//         text.classList.add('error')
//     }
// })

// const tag = document.querySelector('h1')
// tag.classList.toggle('success')



// const videoInput = document.getElementById('video-input');
// const addBtn = document.getElementById('add-btn');
// const previewTitle = document.getElementById('preview-title');

// addBtn.addEventListener('click', function() {

//     const inputValue = videoInput.value;

//     previewTitle.textContent = inputValue;

//     videoInput.value = '';
// });





// const catcher = document.querySelector('#video-card')
// const btn = document.querySelector('#style-btn')
// btn.addEventListener('click', function() {
//     catcher.classList.toggle('Highlight-mode')
// })






// const target = document.querySelector('#target')
// target.previousElementSibling.style.color = 'blue'
// target.nextElementSibling.style.color = 'red'



// const image = document.querySelector('#player-img')
// const btn = document.querySelector('#change-btn')
// btn.addEventListener('click', function() {
//     console.log(image.getAttribute('data-status'))
//     image.setAttribute('src', 'messi.jpg')
// })



// const btn = document.querySelector('#delete-btn')
// btn.addEventListener('click', function() {
//    console.log(btn.parentElement.remove()) 
// })



// const forward = document.querySelector('#center-forward')
// forward.previousElementSibling.textContent = 'Neymar'
// forward.nextElementSibling.textContent = 'Messi'




// const link = document.querySelector('#video-link')
// const btn = document.querySelector('#update-btn')
// btn.addEventListener('click', function() {
// link.setAttribute('href', 'https://youtube.com/leadersoffootball')
// })




// const btn=document.querySelector('#close-btn')
// btn.addEventListener('click', function() {
//     btn.parentElement.remove()
// })





// const list = document.querySelectorAll('#task-list')
// list.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target.style.textDecoration = 'line-through')

//     })
// });





// const img = document.querySelector('#player-fade-img')
// img.addEventListener('mouseover', (e)=> {
//     e.target.style.opacity= '0.5'
// })



// let team = document.querySelector('#selected-team')
// const teg = document.querySelector('#teams-group')
// teg.addEventListener('click', (e) => {
//   team.textContent = e.target.textContent;
// })



// const thumb = document.querySelector('#thumbnail-box')
// thumb.addEventListener('click', (e) => {
//   e.target.style.opacity = '0.3'   
// })




// const list = document.querySelector('#player-list')
// list.addEventListener('click', (e) => {
//     e.target.style.textDecoration= 'line-through'
// })



// const head = document.querySelector('#main-heading')
// const group = document.querySelector('#btn-group')
// group.addEventListener('click', (e) => {
//     head.textContent = e.target.textContent 
// })




// * REMOVE & ADD & CREATE

// const remover = document.querySelector('h2')
// remover.remove()

// const group = document.querySelector('#btn-group')
// const adder = document.querySelector('h2')
// group.addEventListener('click', (e) => {
//    adder.innerHTML += '<h2> NIMADIR</h2>' 
// })
  

// const creater =document.createElement('li')
// creater.textContent =  'Create ishladi'
// adder.prepend,appendchild(creater)


// const catcher = document.querySelector('#video-header')
// const creator = document.createElement('span')
// creator.textContent = '🔴 JONLI EFIR'
// catcher.prepend(creator)




// const catcher=document.querySelector('#comments-wrapper')
// const btn = document.querySelector('#add-comment-btn')

// btn.addEventListener('click', () => {
//     const creator = document.createElement('li')
// creator.textContent = '🔥 Leaders of Football olga!'
// catcher.appendChild(creator)
// })




// const konteyner = document.querySelector('#user-profile')
// const btn = document.querySelector('#ban-btn')
// btn.addEventListener('click', () => {
// konteyner.innerHTML = "<h2 style='color: red;'>Ushbu foydalanuvchi qoidalarni buzgani uchun bloklandi!</h2>"
// })


// const input = document.querySelector('#text')
// const teg = document.querySelector('h2')
// const btn = document.querySelector('#btn')
// const royxat = document.querySelector('#royxat')
// let son = 0
// btn.addEventListener('click', (e) => {
//     const ism = input.value
//     const li = document.createElement('li')
//     li.textContent = ism
//     royxat.append(li)
//     son++
// teg.textContent = 'Jami: ' + son + " ta odam"
// input.value = ""
// })


// const natija = document.querySelector('#natija')
// const input = document.querySelector('#son1')
// const input1 = document.querySelector('#son2')

// const btn1 = document.querySelector('#plus-btn')
// btn1.addEventListener('click', (e) => {
//     const son1 = Number(input.value)
//     const son2 = Number(input1.value)
//     natija.textContent = son1 + son2

// })

// const btn2 = document.querySelector('#minus-btn')
// btn2.addEventListener('click', (e) => {
//     const son1 = Number(input.value)
//     const son2 = Number(input1.value)
//     natija.textContent = son1 - son2
// })

// const btn3 = document.querySelector('#times-btn')
// btn3.addEventListener('click', (e) => {
//     const son1 = Number(input.value)
//     const son2 = Number(input1.value)
//     natija.textContent = son1 * son2
// })

// const btn4 = document.querySelector('#divide-btn')
// btn4.addEventListener('click', (e) => {
//     const son1 = Number(input.value)
//     const son2 = Number(input1.value)
//     natija.textContent = son1 / son2
// })




// function salomlash(ism) {
//     return "Salom " + ism
// }
// const salomlash2 = function(ism) {
//     return "Salom " + ism
// }
// const salomlash3 = (ism) => "Salom " + ism
// console.log(salomlash3('abror'))



// const hisobchi = (a, b) => {
// return a+b
// }

// function hisobla(a, b, amal) {
//     return amal(a, b)
    
// }
// console.log( hisobla(3, 5, hisobchi) )



// const sonlar = [1, 2, 3, 4, 5]
// sonlar.forEach(son => {
//     console.log(son * 2)
// });


// const mevalar = ["olma", "nok", "banan", "uzum"]
// mevalar.splice(2, 1)
// mevalar.push('gilos')
// console.log(mevalar.length, mevalar[0])


// const talaba = {
//     ism: "Ali",
//     yosh: 22,
//     fakultet: "IT"
// }
// talaba.ball = 95
// delete talaba.fakultet
// console.log(talaba.yosh)




// const talabalar = [
//     { ism: "Ali", ball: 95 },
//     { ism: "Vali", ball: 72 },
//     { ism: "Guli", ball: 88 }
// ]
// talabalar.forEach(element => {
//     console.log(`${element.ism}: ${element.ball} `)
// });





// const talabalar = [
//     { ism: "Ali", ball: 95 },
//     { ism: "Vali", ball: 72 },
//     { ism: "Guli", ball: 88 }
// ]
// talabalar.forEach(element => {
//     console.log(element)
// });



// const sarlevha = document.getElementById('sarlavha')

// const text = document.querySelector('.matn')

// const classlar = document.getElementsByClassName('matn')
// console.log(sarlevha, text, classlar)


// const result = document.querySelector('#natija')
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', (e) => {
// result.textContent = 'Tugma bosildi'
// })

// const royxat = document.querySelector('#royxat')
// const creator1 = document.createElement('li')
// creator1.textContent = 'element 1'
// royxat.appendChild(creator1)

// const creator2 = document.createElement('li')
// creator2.textContent = 'element 2'
// royxat.appendChild(creator2)

// const creator3 = document.createElement('li')
// creator3.textContent = 'element 3'
// royxat.prepend(creator3)


// const ochirish = document.querySelector('.yashil')
// ochirish.classList.toggle('yashil')
// ochirish.classList.toggle('qizil')
// ochirish.setAttribute('id', 'yangiQuti')




// const oldTitles = ["Ronaldinho sehrgarligi", "Di Maria afsonasi", "Van Basten gollari"];
// const newtitles = oldTitles.map((kelganElement) => {
//     return 'Video:' + kelganElement
// })
// console.log(newtitles)




// const views = [45, 120, 85, 230, 90, 400];

// const topViews = views.filter((tushundim) => {
//     return tushundim>100
// })

// console.log(topViews)


// const ota = document.querySelector('#ota-quti');
// const bola = document.querySelector('#bola-tugma');

// ota.addEventListener('click', () => {
//     console.log("Ota quti bosildi!");
// });

// bola.addEventListener('click', (e) => {
//     // Agar mana shu buyruqni bermasak, tugma bosilganda "Ota quti bosildi!" ham konsolga chiqib ketadi.
//     e.stopPropagation(); 
//     console.log("Faqat bola tugmaning o'zi bosildi!");
// });



// const otaQuti = document.querySelector('#video-card')
// const bolaTugma = document.querySelector('#subscribe-btn')

// otaQuti.addEventListener('click', (e) => {
//     console.log('Ota quti bosildi')
// })


// bolaTugma.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log('bola tugma bosildi')
// })




// const konteyner = document.querySelector('#elements-wrapper')
// konteyner.addEventListener('click', (e) => {
//     if(e.target.nodeName==='BUTTON') {
//         console.log("Tugma bosildi!")
//     }
//     console.log(e.target.nodeName)
// })








// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const juft =  sonlar.filter((son) => {
//     return son%2 ===0
// })
// console.log(juft)





// const ismlar = ["ali", "vali", "guli", "hasan"]

// const map = ismlar.map((ism) => {
//     return ism[0].toUpperCase() + ism.slice(1, ism.length)
// })

// console.log(map)



// const talabalar = [
//     { ism: "Ali", ball: 95 },
//     { ism: "Vali", ball: 45 },
//     { ism: "Guli", ball: 78 },
//     { ism: "Hasan", ball: 38 },
//     { ism: "Malika", ball: 88 }
// ]

// const filter = talabalar.filter((bal) => {
//     return bal.ball > 60
// })

// const map = filter.map((ismi) => {
//     return ismi.ism 
// })

// console.log(map)




// const thernery = prompt('Yoshingizni kiriting:', 18)
// thernery >= 18 ? alert('siz voyaga yetgansiz') : alert('siz voyaga yetmagansiz')






// const yosh = 20 
// yosh < 18 ? console.log('siz voyaga yetmagansiz') : console.log('siz voyaga yetgansiz');



// const [olma, nok, ...boshqa] = ["olma", "nok", "banan", "uzum"]
// console.log(olma, nok, boshqa);



// const {ism, ball, ...rest} = {
//     ism: "Ali",
//     yosh: 22,
//     ball: 95,
//     shahar: "Toshkent"
// }
// console.log(`${ism}, ${ball} yoshda}`, rest);




// const talabalar = [
//     { ism: "Ali", ball: 95 },
//     { ism: "Vali", ball: 45 },
//     { ism: "Guli", ball: 78 },
// ]
// const natija = talabalar.map((talaba) => {
//     const { ism, ball } = talaba
//     return ball > 60 ? `✅ ${ism} o'tdi` : `❌ ${ism} o'tmadi`
// })
// console.log(natija)




// const mahsulotlar = [
//     { nomi: "Telefon", narx: 500 },
//     { nomi: "Noutbuk", narx: 1500 },
//     { nomi: "Quloqchin", narx: 50 },
//     { nomi: "Soat", narx: 800 },
// ]
// const res = mahsulotlar.map((mahsulot) => {
// const {nomi, narx} = mahsulot
// return narx>100 ? `${nomi} qimmat` : `${nomi} arzon `
// })
// console.log(res)



// const foydalanuvchi = {
//     ism: "Ali",
//     yosh: 22,
//     shahar: "Toshkent"
// }
// localStorage.setItem('foydalan', JSON.stringify(foydalanuvchi))
// const getName = JSON.parse(localStorage.getItem('foydalan'))
// console.log(getName)






// // const {strikerName, goals} = {
// //     strikerName: "Haaland",
// //     goals: 35,
// //     league: "Premier League"
// // };
// // console.log(strikerName, goals)



// // const videoViews = 150000; // 150 ming marta ko'rilgan
// // videoViews > 100000 ? console.log('trendda') : console.log('oddiy video')


// const playlists = ["Taktik Tahlillar", "Futbol Tarixi", "Sirlar va Faktlar"];
// const formattedPlaylists = playlists.map((text) => {
//     return 'leadersoffootball ' + text
// })
// console.log(formattedPlaylists)


// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', () => {
//     if(request.readyState ===4) {
//         console.log(request.responseText)
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
// request.send()




// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4) {
//         if(request.status === 200) {
//             console.log('muvaffaqiyatli: ', request.responseText)
//         } else {
//             console.log('xatolik: ', request.responseText)
//         }
        
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/NOTFOUND_URL')
// request.send()



// const club = {
//     name: "Real Madrid",
//     uclTitles: 15
// };
// localStorage.setItem('klub', JSON.stringify(club))
// const getName = JSON.parse(localStorage.getItem('klub'))
// console.log(getName)


// const getPost =(callback) => {
// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200) {
//         callback( undefined , request.responseText)
//         } else if (request.readyState === 4) {
//             callback('malumot olinmadi: ', undefined)
        
        
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
// request.send()
// }

// getPost((err, data) => {
// if(err) {
//     console.log(err)
// }else {
//     console.log(data)
// }
// })


// const getPostPromise = () => {
// return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState===4 && request.status ===200) {
//             resolve(request.responseText)
//         } else if (request.readyState===4) {
//             reject("sorry i did not find any data")
//         }
//     })
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts/1")
//     request.send()
// })
// }
// getPostPromise()
//     .then(data => console.log("Muvaffaqiyatli:", data))
//     .catch(err => console.log("Xato:", err));


// const getPost = (url) => {
//     return new Promise((reslolve, reject) => {
//         const request = new XMLHttpRequest()
//         request.addEventListener("readystatechange", () =>{
//             if(request.readyState===4 && request.status===200){
//                 reslolve(JSON.parse(request.responseText))
//             } else if (request.readyState===4) {
//                 reject("Xatolik yuz berdi")
//             }
//         })
//         request.open("GET", url)
//         request.send()
//     })
// }
// getPost("https://jsonplaceholder.typicode.com/posts/1")
// .then((data1) => {
//     console.log("1-post keldi: ", data1.title)
//     return getPost("https://jsonplaceholder.typicode.com/posts/2")
// })
// .then((data2) => {
//     console.log("2-post keldi: ", data2.title)
//     return getPost("https://jsonplaceholder.typicode.com/posts/3")
// })
// .then((data3) => {
//     console.log("3-post keldi: ", data3.title)
// })
// .catch((err) => {
//     console.log("Zanjirda xatolik: ", err)
// })


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      resolve("Malumot keldi")   
//     }, 2000);
    
// })
// promise.then((data) => {
// console.log(data)
// })



// const mevaPromise = new Promise((resolve) => {
//     resolve("Olma");
// });

// mevaPromise
//     .then(meva => meva + " pishdi")
//     .then(natija => console.log(natija));



// const eskiUser = {
//     ism: "Asilbek",
//     yosh: 20,
//     status: "talaba"
// };


// const yangiUser = {...eskiUser, status: "dasturchi", tillar: [" JS, React"]}
// console.log(yangiUser);





// const harajatlar = [
//     { nom: "Internet", summa: 150 },
//     { nom: "Kurs", summa: 300 },
//     { nom: "Kitob", summa: 50 }
// ];

// const jamiHarajat = harajatlar.reduce((jami, sarf) => jami + sarf.summa, 0)
// console.log(jamiHarajat); 




// const matnPromise = new Promise((resolve) => {
//     resolve("javascript");
// });

// matnPromise
//     .then(soz => {
//        return soz.toUpperCase();
//     })
//     .then(yangiMatn => console.log("Natija:", yangiMatn)); 




// async function getPostData() {
//     try {
//         const response  = await fetch("https://typicode.com")
//         const data = await response.json()
//         console.log("post keldi:", data)
//     } catch (error) {
//         console.log("Xatolik:", error)
//     }
// }
// getPostData()







// async function malumotOl() {
//  try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await res.json()
//     console.log("Post keldi: ", data)
//  } catch (error) {
//     console.log("Xatolik: ", error)
    
//  }
// }
// malumotOl()





// 1. Funksiyani async kalit so'zi bilan yaratamiz
// async function getAllPosts() {
//     try {
//         // 1-postni chaqiramiz va javob kelguncha kutamiz
//         const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data1 = await response1.json(); // matnni obyektga o'giramiz
//         console.log("1-post keldi: ", data1.title);

//         // 2-postni chaqiramiz va javob kelguncha kutamiz
//         const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         const data2 = await response2.json();
//         console.log("2-post keldi: ", data2.title);

//         // 3-postni chaqiramiz va javob kelguncha kutamiz
//         const response3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//         const data3 = await response3.json();
//         console.log("3-post keldi: ", data3.title);

//     } catch (err) {
//         // Zanjirning istalgan joyida (masalan internet o'chsa) xato bo'lsa, shu yer ishlaydi
//         console.log("Zanjirda xatolik: ", err);
//     }
// }

// // 2. Funksiyani ishga tushiramiz
// getAllPosts();


// 

// async function postlarOl() {
//     try {
//         // 1. URL ga so'rov yuboramiz
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        
//         // 2. Javobni JSON ga o'giramiz
//         const data = await res.json()
        
//         // 3. data — 100 ta postli massiv
//         // Faqat birinchi 3 tasini olamiz
//         const uch = data.slice(0, 3)
        
//         // 4. Chiqaramiz
//         console.log(uch)
        
//     } catch (error) {
//         console.log("Xato:", error)
//     }
// }

// postlarOl()




// const polindron = (text) => {
//       let matn = ""
// for (let i=text.length-1; i>=0; i-- ) {
  
//     matn = matn + text[i]
// }
// if(matn===text) {
//     console.log("Polindorne")
// } else {
//     console.log("polindron emas")
// }
// }
// polindron("aba")
// polindron('aba')




// const talabalar = [
//     { ism: "Ali", ball: 95 },
//     { ism: "Vali", ball: 55 },
//     { ism: "Guli", ball: 78 },
//     { ism: "Zafar", ball: 45 }
// ]

// const filter = talabalar.filter(son =>son.ball>60)
// const map = filter.map(name => name.ism)
// console.log(map)




// const input = document.querySelector('#input')
// const qoshBtn = document.querySelector('#qoshBtn')
// const royxat = document.querySelector('#royxat')
// let todolar = JSON.parse(localStorage.getItem('todolar')) || []

// qoshBtn.addEventListener('click', () => {
//     const matn = input.value
//     if (matn === "") return
//     todoYarat(matn, true)  // true = yangi todo
//     input.value = ''
// })

// function todoYarat(matn, yangi = false) {
//     if (yangi) {
//         todolar.push(matn)
//         localStorage.setItem('todolar', JSON.stringify(todolar))
//     }

//     const li = document.createElement('li')
//     li.textContent = matn
//     const bajarildiBtn = document.createElement('button')
//     bajarildiBtn.textContent = "Bajarildi"
//     const ochirBtn = document.createElement('button')
//     ochirBtn.textContent = "O'chir"
//     li.append(bajarildiBtn)
//     bajarildiBtn.addEventListener('click', () => {
//         li.style.textDecoration = "line-through"
//     })
//     ochirBtn.addEventListener('click', () => {
//         todolar = todolar.filter(t => t !== matn)
//         localStorage.setItem('todolar', JSON.stringify(todolar))
//         li.remove()
//     })
//     royxat.append(li)
// }

// todolar.forEach(matn => todoYarat(matn))






// const myInput = document.querySelector('#myInput');
// const addBtn = document.querySelector('#addBtn');
// const myList = document.querySelector('#myList');

// addBtn.addEventListener('click', () => {
//     const matn = myInput.value
    
//    if( matn === '') return
    
//     const li = document.createElement("li")
    
//     li.textContent = matn
    
//     myList.append(li)
//     li.addEventListener('click', () => {
//       return li.style.textDecoration= "line-through"
//     })
    
    
//     myInput.value = ""
// });



// const catcher = document.querySelector('#input-box')
// const input = document.querySelector("#vazifaInput")
// const list = document.querySelector("#vazifaRoyxati")
// const qoshBtn = document.querySelector("#addBtn")
// qoshBtn.addEventListener("click", () => {
//     const li = document.createElement('li')
//     const text = input.value
//     if(text==="") {
//         return  alert("xato")
//     }
//     li.textContent = text
//     const ochirBtn = document.createElement('button')
//     ochirBtn.textContent = "Ochirish"
//     ochirBtn.classList.add('delete-btn')
//     li.appendChild(ochirBtn)
    
//     ochirBtn.addEventListener("click", () => {
//         li.remove()
//     })
//     list.appendChild(li)
//     input.value = ""

// })





// const talabalar = [
//     { ism: "Ali", baho: 85 },
//     { ism: "Vali", baho: 45 },
//     { ism: "Sami", baho: 70 },
//     { ism: "Olim", baho: 55 }
// ];

// const otganTalabalar = talabalar.filter(ball=> ball.baho>=60) 

// console.log(otganTalabalar);






// const mashina = {
//     model: "Gentra",
//     rang: "Qora",
//     yil: 2024,
//     narx: 13000
// };

// const {model, yil} = mashina

// console.log(model); // "Gentra" chiqishi kerak
// console.log(yil);   // 2024 chiqishi kerak






// async function vazifalarniOlibKel() {
//     try{
//         const javob = await fetch('https://typicode.com')
//         const foydalanuvchilar = await javob.json()
//         console.log(foydalanuvchilar)
         
//     } catch (xato) {
//         console.log("xatolik yuz berdi: ", xato)
//     }
// }
// vazifalarniOlibKel()





const list = document.querySelector("#vazifaRoyxati");

async function vazifalarniOlibKel() {
    try {
        const javob = await fetch('https://jsonplaceholder.typicode.com/posts');
        const vazifalar = await javob.json();
        const kichikMassiv = vazifalar.slice(0, 5);
        
        kichikMassiv.map((element) => {
            const li = document.createElement('li')
            li.textContent = element.title
            list.appendChild(li)
        })      
    } catch (xato) {
        console.log("Xatolik yuz berdi: ", xato);
    }
}


vazifalarniOlibKel();
