
let catalog = [
    {
        _id: "1",
        price: "999.99",
        title: "Custom Website",
        image: "websiteDesignServiceImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "2",
        price: "49.99",
        title: "Website Maintenance",
        image: "websitemaintenanceServiceImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "3",
        price: "79.99",
        title: "SEO",
        image: "webSEOImg.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "4",
        price: "100.00",
        title: "WebDev Training",
        image: "trainingService.jpg",
        discount: 0,
        category: "service"
    },
    {
        _id: "5",
        price: "100.00",
        title: "Gift Card",
        image: "giftCard.jpg",
        discount: 0,
        category: "goods"
    },
]

class DataService{
    getCatalog(){
        // Retrieve data from the actual server


        return catalog;
    }
}

export default DataService;