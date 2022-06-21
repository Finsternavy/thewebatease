import axios from 'axios';

let catalog = [
    {
        _id: "1",
        price: "999.99",
        priceRate: "/each",
        title: "Custom Website",
        image: "websiteDesignServiceImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "2",
        price: "49.99",
        priceRate: "/month",
        title: "Website Maintenance",
        image: "websitemaintenanceServiceImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "3",
        price: "79.99",
        priceRate: "/hour",
        title: "SEO",
        image: "webSEOImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "4",
        price: "99.99",
        priceRate: "/session",
        title: "WebDev Training",
        image: "trainingService.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "5",
        price: "100.00",
        priceRate: "/each",
        title: "Gift Card",
        image: "giftCard.jpg",
        discount: 0,
        category: "goods"
    },
]

class DataService{

    async getCatalog(){
        // Retrieve data from the actual server
        let response = await axios.get('http://127.0.0.1:5000/api/catalog');
        let data = response.data;

        return data;
    }

    async getCoupons(){
        let response = await axios.get("http://127.0.0.1:5000/api/coupons");
        let data = response.data;

        return data;
    }

    async postProduct(product){
        console.log("Attempting to post: ", product);

        await axios.post("http://127.0.0.1:5000/api/catalog", product).then(res =>{
            console.log(res.data);
        });
    }

    async postCoupon(coupon){
        console.log("Attempting to post: ", coupon);

        await axios.post("http://127.0.0.1:5000/api/coupons", coupon).then(res =>{
            console.log(res.data);
        });
    }
}

export default DataService;