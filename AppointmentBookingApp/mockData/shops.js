/* eslint-disable global-require */
export default [
    {
        shopId: 1,
        shopName: 'Tony & Guy',
        rating: 4,
        address: 'XYZ street, Chennai',
        image: require('../assets/pop1.png'),
        about: `${'A celebrated hairdresser himself, Francesco Mascolo had taught all of his sons to cut hair from an early age and despite Toni’s interest in academic studies and a desire to pursue a career in law, his move to London put an end to that dream and Toni began working as his father’s assistant in a busy London salon.'
        + 'Toni soon realised how much he enjoyed working as a hairdresser and continued to work alongside his father building a large clientele at Viccari’s salon in Cox Street, Mayfair. When this salon was sold, Francesco secured a place at the award-winning Renato’s in Dover Street, where Guy his younger son joined him to fulfill his apprenticeship.'
        + 'Following three days of unemployment (the only such period in his lifetime), a young Toni Mascolo grew a moustache to create a more ‘mature’ appearance and became the manager of South London salon, Gerard’s, at just 16. Always keen to better himself, it wasn’t long before Toni moved back to Victoria Street, near Westminster, enjoying a high profile clientele and working gruelling fourteen-hour-long days in an effort to save enough money to buy his mother a house of her own. Meanwhile, Guy moved back to South London where his talent saw him headhunted to join busy Clapham salon, Cecile Moss.'
        + '12th December 1962 saw the tragic loss of their beloved mother and the realisation for Toni and Guy that they would now have to support their father and three younger brothers, the youngest of which, Anthony, was just five years old.'}${
            +'In 1963 Guy was offered the opportunity to take over the salon where he worked. Despite the huge risk involved, Toni elected to leave his well-paid job in a central London salon to join his brother in Clapham, though it would mean abandoning the large, loyal client base he had built.'
        }${+'In January 1963 the first TONI&GUY salon opened its doors and the brothers worked hard to build the business. With a large rent to pay, it was a struggle to survive. Having inherited some busy stylists from the original salon, including a young Pauline O’Donnell (later to be Mascolo, when she marries Toni in 1970), helped to boost the salon’s business, which quickly gained momentum. The brothers’ early promotional activity included leaflet drops in the local area advertising their ‘Italian style’.'
        }A time of extreme change in youth culture, the 1960’s saw an explosion in fashion as attitudes were changing. TONI&GUY offered a unisex service in contrast to the traditional culture of salons and barbershops that were unable to cope with the new graphic shapes for women and men’s longer styles. By the end of 1964 the salon was fully booked and the brothers realised that they were destined for bigger things.`,
        services: [
            {
                name: 'Hair Cut',
                price: 300,
            },
            {
                name: 'Trimming / Shaving',
                price: 200,
            },
            {
                name: 'Facial',
                price: 2400,
            },
            {
                name: 'Body Massage',
                price: 2200,
            },
        ],
        openingTime: 9,
        closingTime: 21,
    },
    {
        shopId: 2,
        shopName: 'Green Trends',
        rating: 4.2,
        address: 'ABC street, Chennai',
        image: require('../assets/pop2.png'),
        services: [
            {
                name: 'Hair Cut',
                price: 280,
            },
            {
                name: 'Trimming / Shaving',
                price: 150,
            },
            {
                name: 'Facial',
                price: 2200,
            },
            {
                name: 'Body Massage',
                price: 2000,
            },
        ],
        openingTime: 9,
        closingTime: 21,
    },
    {
        shopId: 3,
        shopName: 'Wink',
        rating: 3.6,
        image: require('../assets/pop4.png'),
        address: 'DEF street, Chennai',
        services: [
            {
                name: 'Hair Cut',
                price: 300,
            },
            {
                name: 'Trimming / Shaving',
                price: 200,
            },
            {
                name: 'Facial',
                price: 2400,
            },
            {
                name: 'Body Massage',
                price: 2200,
            },
        ],
        openingTime: 9,
        closingTime: 21,
    },
    {
        shopId: 4,
        shopName: 'Lakme Salon',
        rating: 4.1,
        image: require('../assets/pop5.png'),
        address: 'PQR street, Chennai',
        services: [
            {
                name: 'Hair Cut',
                price: 300,
            },
            {
                name: 'Trimming / Shaving',
                price: 200,
            },
            {
                name: 'Facial',
                price: 2400,
            },
            {
                name: 'Body Massage',
                price: 2200,
            },
        ],
        openingTime: 9,
        closingTime: 21,
    },
];
