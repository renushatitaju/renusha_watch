
import rolex from '../assets/rolex.avif'

import apple_series10 from '../assets/apple_series10.webp'

import audemars_piguet from '../assets/audemars_piguet.jpg'
import men_cartier from '../assets/men_cartier.webp'
import men_hublot from '../assets/men_hublot.png'
import men_zenith from '../assets/men_zenith.jpg'
let men = [
    

    {
       id: 2,
        name: "Rolex",
        category: "mens",
        image: rolex ,
        new_price: "$800000",
        old_price: "$760000"
    },

    

    {
       id: 4,
        name: "Apple series 10",
        category: "mens",
        image: apple_series10,
        new_price: "$79000",
        old_price: "$70000"
    },

    

    {
       id: 6,
        name: "Audemars Piguet",
        category: "mens",
        image: audemars_piguet,
        new_price: "$800000",
        old_price: "$760000"
    },

    {
           id: 7,
            name: "Cartier",
            category: "mens",
            image: men_cartier,
            new_price: "$4,000-$10,000",
            old_price: "$3,900"
        },
    
        {
           id: 8,
            name: "Hublot",
            category: "mens",
            image: men_hublot,
            new_price: "$8,000-$20,000",
            old_price: "$9,900"
        },
    
        {
           id: 9,
            name: "Zenith",
            category: "mens",
            image: men_zenith,
            new_price: "$4,700-$100,000",
            old_price: "$9,900"
        },
]

export default men;