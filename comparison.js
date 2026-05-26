const sa = parseFloat(prompt("Enter value for sa:"));
const sd = parseFloat(prompt("Enter value for sd:"));
const sf = parseFloat(prompt("Enter value for sf:"));

if (sa >= sd) {
    if (sa >= sf) {

        console.log("sa is the greatest: " + sa);
    } else {

        console.log("sf is the greatest: " + sf);
    }
} else {
    if (sd >= sf) {

        console.log("sd is the greatest: " + sd);
    } else {

        console.log("sf is the greatest: " + sf);
    }
}




for(i=0;i<6;i++)
