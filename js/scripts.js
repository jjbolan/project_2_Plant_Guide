console.log("hello")
document.title = "Plant Guide"
let data;

function appendArtwork(data) {
    const artworkRow = document.createElement("article")
    artworkRow.classList.add("artwork-row")

    const newImage = document.createElement("img")
    newImage.src = data.representation[0].id
    newImage.alt = data._label
    newImage.classList.add("new-image")

    const artworkText = document.createElement("p")
    artworkText.textContent = data._label + ", " + data.produced_by.carried_out_by[0]._label
    artworkText.classList.add("artwork-text")

    artworkRow.appendChild(newImage)
    artworkRow.appendChild(artworkText)
    document.getElementById("all-apods").appendChild(artworkRow)
}

// To call the data
const gettyURL = "https://data.getty.edu/museum/collection/object/";
const gettyObjYF = "82c62c5d-fbb5-4d82-bf5e-65b05210cf62"
const gettyObj1 = "c564f5a5-d78e-4c54-aec1-66f4a8635e08"
const gettyObj2 = "5a72a08c-6616-4bda-b4f5-b2f163f12508"
const gettyObj3 = "c57c7051-6d7b-4d21-b4be-795a74932372"
const gettyObj4 = "713525c8-5a47-409e-854d-b158271ef4e6"
const gettyObj5 = "06e2e1df-4428-496c-b9d9-68fa162aba17"
const gettyObj6 = "7915603f-213d-443c-b7a5-1b783833247f"
const gettyObj7 = "5a102581-15cb-4135-9c9b-75ca40a7da55"
const gettyObjUrlYF = gettyURL + gettyObjYF;
const gettyObjUrl1 = gettyURL + gettyObj1;
const gettyObjUrl2 = gettyURL + gettyObj2;
const gettyObjUrl3 = gettyURL + gettyObj3;
const gettyObjUrl4 = gettyURL + gettyObj4;
const gettyObjUrl5 = gettyURL + gettyObj5;
const gettyObjUrl6 = gettyURL + gettyObj6;
const gettyObjUrl7 = gettyURL + gettyObj7;

// console.log(gettyObjUrl1);

async function getGettyYF() {
      const responseYF = await fetch(gettyObjUrlYF);
    const dataYF = await responseYF.json()
  console.log(dataYF)

       // Title
    console.log(dataYF._label)
    //Image
    console.log(dataYF.representation[0].id)
    //Also Author/Creator
    console.log(dataYF.produced_by.carried_out_by[0]._label)

    appendArtwork(dataYF)
}
getGettyYF()

async function getGetty1() {


    const response = await fetch(gettyObjUrl1);
    const data = await response.json()
    console.log(data)

    // Title
    console.log(data._label)
    //Image
    console.log(data.representation[0].id)
    //Also Author/Creator
    console.log(data.produced_by.carried_out_by[0]._label)

    appendArtwork(data)
}
getGetty1()
async function getGetty2() {

    const response2 = await fetch(gettyObjUrl2);
    const data2 = await response2.json()
  console.log(data2)

       // Title
    console.log(data2._label)
    //Image
    console.log(data2.representation[0].id)
    //Also Author/Creator
    console.log(data2.produced_by.carried_out_by[0]._label)

    appendArtwork(data2)
}
getGetty2()
async function getGetty3() {

    const response3 = await fetch(gettyObjUrl3);
    const data3 = await response3.json()
  console.log(data3)

       // Title
    console.log(data3._label)
    //Image
    console.log(data3.representation[0].id)
    //Also Author/Creator
    console.log(data3.produced_by.carried_out_by[0]._label)

    appendArtwork(data3)
}
getGetty3()
async function getGetty4() {

    const response4 = await fetch(gettyObjUrl4);
    const data4 = await response4.json()
  console.log(data4)

       // Title
    console.log(data4._label)
    //Image
    console.log(data4.representation[0].id)
    //Also Author/Creator
    console.log(data4.produced_by.carried_out_by[0]._label)

    appendArtwork(data4)
}
getGetty4()
async function getGetty5() {

    const response5 = await fetch(gettyObjUrl5);
    const data5 = await response5.json()
  console.log(data5)

       // Title
    console.log(data5._label)
    //Image
    console.log(data5.representation[0].id)
    //Also Author/Creator
    console.log(data5.produced_by.carried_out_by[0]._label)

    appendArtwork(data5)
}
getGetty5()
async function getGetty6() {

    const response6 = await fetch(gettyObjUrl6);
    const data6 = await response6.json()
  console.log(data6)

       // Title
    console.log(data6._label)
    //Image
    console.log(data6.representation[0].id)
    //Also Author/Creator
    console.log(data6.produced_by.carried_out_by[0]._label)

    appendArtwork(data6)
}
getGetty6()
async function getGetty7() {

    const response7 = await fetch(gettyObjUrl7);
    const data7 = await response7.json()
  console.log(data7)

       // Title
    console.log(data7._label)
    //Image
    console.log(data7.representation[0].id)
    //Also Author/Creator
    console.log(data7.produced_by.carried_out_by[0]._label)

    appendArtwork(data7)
}
getGetty7()
