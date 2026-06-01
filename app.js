

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


const catcher = document.getElementById('car-market')
catcher.innerHTML += `
<h1>Ustaning innerhtml qoshishi</h1>
<ul>
<li>ishladimi</li>
</ul>`

const listCatcher = document.getElementById('mashinalar-royxati')
listCatcher.innerHTML += `<li>qoshildimi</li>`