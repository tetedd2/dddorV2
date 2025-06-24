function getPrice(url, productName) {
    // ไปที่ URL
    const win = window.open(url, 'https://www.simummuangmarket.com/');
    
    // รอเวลาให้หน้าโหลด (จำเป็นต้องปรับตามความเร็วเน็ต)
    setTimeout(() => {
        try {
            const priceLa = document.evaluate('//*[@id="frontend_app"]/div[2]/main/div/div/div/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[1]/div/div/div/div[1]/strong', document, null, XPathResult.STRING_TYPE, null).stringValue;
            const priceMa = document.evaluate('//*[@id="frontend_app"]/div[2]/main/div/div/div/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[1]/div/div/div/div[1]/strong', document, null, XPathResult.STRING_TYPE, null).stringValue;
            const priceSa = document.evaluate('//*[@id="frontend_app"]/div[2]/main/div/div/div/div[1]/div[2]/div/div[3]/div[1]/div[3]/div[1]/div/div/div/div[1]/strong', document, null, XPathResult.STRING_TYPE, null).stringValue;

            console.log(`=== ${productName} ===`);
            console.log(`${productName} price: ${priceLa || '-'}`);
            console.log(`${productName} price: ${priceMa || '-'}`);
            console.log(`${productName} price: ${priceSa || '-'}`);
        } catch (e) {
            console.error("Error fetching prices:", e);
        }

        win.close();
    }, 5000); // รอ 5 วินาทีให้หน้าโหลด
}

// Loop ดึงข้อมูลทุก 10 วินาที
setInterval(() => {
    console.clear(); // ล้าง Console
    getPrice('https://www.simummuangmarket.com/product/287',  'Rambutan');
    getPrice('https://www.simummuangmarket.com/product/293',  'Durian');
}, 10000);

// รันครั้งแรก
getPrice('https://www.simummuangmarket.com/product/287',  'Rambutan');
getPrice('https://www.simummuangmarket.com/product/293',  'Durian');