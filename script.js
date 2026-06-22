const button = document.getElementById("boredBtn");

const box = document.getElementById("messageBox");

const messages = [

"itta hi bore horha merko message krle chumtad",

"hatt naa",

"mwahhhh toh mai kya krun tu bore horha toh",

"anpadh gawaar, koi kaam dhoond",

"phone sex??",

"bore ho toh mujhe khana khilaado babyy",

"merko whatsapp pe 1234getonthedancefloor bhejo toh aapke liye belly dancing video banaaungi",

"daaruuu????",

"belly dancing wala video record krdo mere liye itne hi free ho toh",

"dance seekh ke bhejo jo jo maine bole",

"uss din raat ke 1 baje tu apni family ke liye kaunsa kaam kr rha tha jo tune aaj tak nahi bataya aur jo paper se pehle krna zaroori tha",

"chalo gend oopar kro aur isi baat pe mujhe apne chhed ki photo bhej doo",

"SWIMMING SEEKHO PUTRRR SEEKHNE KE BAAD TUMHE BHOUT MAZE AAENGE 10/10 GUARANTEE",

"AAO MERSE RAKHI BANDHWA LO APNE BHAI BEHEN KA RISHTA PAKKAA KRLENGE APKE ISS FREE TIME MEIN",

"Gana gaake sunaadu cutuu??",

"Toh mai kya krun? naachun?",

"awwwww movie dekhogi cutuu??",

"random sentence website: https://randomwordgenerator.com/sentence.php",

"offline hote toh massage dedeti par kya kr sakte bore hi raho",

"our anniversary date: 18 nov 2025, first break up date: 20 nov 2025 <3 made for each other<33",

"Aaja na chhoole meri chunari sanam kuchh na mai bolun tujhe meri kasam, aayi jawaani sar pe mereeee tere binn kya krun jawaai pe rehemm",

"waise mujhse kapde pehen ke baat krte ho toh mujhe accha nahi lagta dil mein dard hone lagta inhe utaar diya kro pleasee",

"mere das inch ka lauda apke liye khadaa hi rehta",

"jokes aside, aap merko chhoo te nahi ho bilkul bhi",

"aap mere rehte bore kaise ho sakte hoo mai aisa kya kr rhin hun jo apse baat nahi kr paa rhi?? hawww",

"fuck me daddyy",

"JA JAAKE APNI SIDE CHICK SE BAAR KR HATT NA",

"RAJ KI GEND MEIN 100 DANDE",

"RAJ NARAK KI AGNI MEIN BHASAM HO JAAYE",

"AAP ABDULLA SE ZYADA PYAAR KRTE HO NA PATAA THI MUJHE",

"MERSE HI SHADI KROGE KYAA HAWWW",

"BORE HORI HO? AWWWWWWWLOVEYOUIDONTCAREE",

"Aap na akbar birbal ke birbal ki tarah dikhte ho (bas moochhe same hain)",

"poti aa rhi, poti aa rhi, dheere dheere put put, poti aar rahi",

"skills you can learn in your free time: terpe free time bhi hota?! chal msg kr mujhe chumtad",

"ghar ka chhota beta v/s ghar ki badi beti, badi beti jeet gyi tan tan tan",

"2468kissphoto ye code merko bhejo mai chummi ki photo dungi (whatsapp pe bhejna)"

];

button.addEventListener("click", () => {

    const randomIndex =
    Math.floor(Math.random() * messages.length);

    box.textContent =
    messages[randomIndex];

});