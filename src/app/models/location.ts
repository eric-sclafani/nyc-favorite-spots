export interface Location {
    name: string;
    lat: number;
    long: number;
    review: string | null;
    link: string | null;
    favoriteOrders: string[] | null;
}

export const locations: Location[] = [
    {
        name: 'Juaja',
        lat: 40.65629271345367,
        long: -73.9597840610175,
        review: 'My favorite Mexican food in NYC so far. Chill atmosphere, nice employees, and killer steak nachos.',
        favoriteOrders: ['Steak nachos', 'Fries', 'Quesadillas'],
        link: 'https://www.clover.com/online-ordering/jauja-mexican-kitchen-food-brooklyn-new-york'
    },
    {
        name: 'Dave\'s Hot Chicken',
        lat: 40.692906591390994,
        long:  -73.98847380498599,
        review: 'Really great chicken sandwhiches. Prepares them differently than most places I\'ve been to.',
        favoriteOrders: ['2 Sliders with cheese, medium spice level', 'Fries'],
        link: 'https://restaurants.daveshotchicken.com/ny/brooklyn/hot-chicken-adams-st/'
    },
    {
        name: 'Blank Street Coffee',
        lat: 40.69348794968939,
        long:  -73.98597859260254,
        review: 'My favorite coffee in NYC so far. Friendly staff, good location to my work.',
        favoriteOrders:['Cold brew, black', 'Banana bread'],
        link: 'https://www.blankstreet.com/en-US/locations/new-york/L0ZQGWDTP9ZSJ-metrotech-center'
    },
    {
        name: 'Headrest Coffee',
        lat: 40.699770938457334,
        long: -73.9159079355029,
        review: 'Best non-chain coffee I\'ve had. Very chill, hipster vibes to it.',
        favoriteOrders: ['Cold brew, black', "Bacon, egg, cheese on everything bagel"],
        link: 'https://headrestcoffee.com/'
    },
    {
        name: 'Tony\s Pizza',
        lat: 40.69923416773374,
        long:  -73.91882022580194,
        review: 'Best pizza in Bushwick. They have creative slices and it all tastes great.',
        favoriteOrders: ['Regular slice', "Chicken parm slice", "Scilian slice"],
        link: 'http://places.singleplatform.com/tonys-pizzeria--restaurant-0/menu?ref=google'
    },
    {
        name: 'Ramen Danbo',
        lat: 40.67614876425373, 
        long: -73.97452541647573,
        review: 'Nice but very busy place. Fantastic ramen.',
        favoriteOrders: ['Classic tonkatsu ramen'],
        link: 'https://ramendanbo.com/our-menu-park-slope/'
    },
    {
        name: 'Amaranto',
        lat: 40.703158557122784, 
        long: -73.92185981658916,
        review: 'Nice family-owned place. Best burritos I\'ve ever had in NYC so far.',
        favoriteOrders: ['Steak burrito', 'Spicy guacamole, chips'],
        link: 'http://www.amarantobklyn.com/'
    },
    {
        name: 'Aromi',
        lat: 40.675087368581, 
        long: -73.99968032120483,
        review: 'Fancy and expensive Italian place. Really great pizza.',
        favoriteOrders: ['Margherita pizza','Grissini Al Forno Con Nutella', 'Tiramisu', 'Aperol Spritz', 'Lemon Spritz'],
        link: 'https://www.arominyc.com/'
    },
    {
        name: 'Barboncino Pizza',
        lat: 40.672125527803985, 
        long: -73.95716047845684,
        review: 'Amazing personal pizzas',
        favoriteOrders: ['Margherita pizza'],
        link:'http://places.singleplatform.com/barboncino-pizza--bar/menu?ref=google'
    }
]