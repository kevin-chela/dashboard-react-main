const orders = [{
    id: "1",
    client_Profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTM6f1ng6a-pVOvmv_tiXZ6u5XwJ--XzwrxFc5y05mRu6EVm9Li",
    client_Email: "kevin@gmail.com",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-m2u4D7pcHl_H3bWYU_eKK-MS90We3FI3hMafhN8mwpN2uU6UHJTojNFAXgloHrmaOsA&usqp=CAU",
    img2: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRQPzc4k1-zFDk_8ZisIIETHCTqjbugwvf5M5KrewWAoOpydBn",
    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8BvW51EKAuC_ouss-jfT28RWL3sA7DrC8VBHrkq_NGrVdLF5",
    img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2Ckp_e6ggcP3tSh4XjSrh1blzdAi7mEV9w&usqp=CAU",
    total_price: "35.99",
    review: "80"
},{
    id: "2",
    client_Profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRshN1Hprkl5n7SEtOMheWJtBCCK6riCm8iw_ziT7ZyDg81w-aF",
    client_Email: "chirchir@gmail.com",
    img6: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9zS9-ePplxmSM99XZWeyaDJLzyyZ6xg-SASfPAsuFSynEdrN4",
    img5: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRQPzc4k1-zFDk_8ZisIIETHCTqjbugwvf5M5KrewWAoOpydBn",
    img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8BvW51EKAuC_ouss-jfT28RWL3sA7DrC8VBHrkq_NGrVdLF5",
    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2Ckp_e6ggcP3tSh4XjSrh1blzdAi7mEV9w&usqp=CAU",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm52ve0F5gJDfNUN8ip3fUd5kRYgk31nzhZ10PJEVWhtKug8Wgnc2ut4aviiUEEgWW83k&usqp=CAU",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9K33zFQthyYHlqN2gPQ6FBVzB1HvfoyGcg&usqp=CAU",
    total_price: "105.99",
    review: "90"
},{
    id: "3",
    client_Profile: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVKRJ7YSdLF6KTLnqrcjgmVqd44XAq4_lIQ3EKKEI96cbXS5qR",
    client_Email: "mike@gmail.com",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2Ckp_e6ggcP3tSh4XjSrh1blzdAi7mEV9w&usqp=CAU",
    img2: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7rWY-_ga-rsaGPVKP2fSvNHhe_ecGq1X4FDqhURvsxzcWJ-E-",
    total_price: "25.99",
    review: "60"
},{
    id: "4",
    client_Profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx6KPOFdCAwAQdddQ9oWKJ-k4EIMSPBV-Ow&usqp=CAU",
    client_Email: "fatso@gmail.com",
    img1: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvK9bXoJBe9-i3Dk1Zz6fBt4E1rS18skDTZ9TD5FCWINkdN--K",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-m2u4D7pcHl_H3bWYU_eKK-MS90We3FI3hMafhN8mwpN2uU6UHJTojNFAXgloHrmaOsA&usqp=CAU",
    img3: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRQPzc4k1-zFDk_8ZisIIETHCTqjbugwvf5M5KrewWAoOpydBn",
    img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8BvW51EKAuC_ouss-jfT28RWL3sA7DrC8VBHrkq_NGrVdLF5",
    img5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm52ve0F5gJDfNUN8ip3fUd5kRYgk31nzhZ10PJEVWhtKug8Wgnc2ut4aviiUEEgWW83k&usqp=CAU",
    img6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujT5Yz6VqWzAAKK90iGE9r-pl9G11S0-e66MM3DeecjO9wfdhWb6qposBk73DKiCNqQI&usqp=CAU",
    img7: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSblUWlLQvcwaUFT6wfCPojPBmmRnBVNc7-zYzJmWqcBZRHtUtj",
    total_price: "195.99",
    review: "98"
},{
    id: "5",
    client_Profile: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhGj5G4OQsWHjgrZT4SZBzrxkyzh9o12Xuvur_wYCtvuTCQ8G_",
    client_Email: "sarah@gmail.com",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9K33zFQthyYHlqN2gPQ6FBVzB1HvfoyGcg&usqp=CAU",
    total_price: "10.99",
    review: "93"
}]

export default orders
