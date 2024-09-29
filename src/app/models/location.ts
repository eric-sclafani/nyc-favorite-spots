interface Location {
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
        review: '',
        favoriteOrders: ['Steak nachos', 'Fries', 'Quesadillas'],
        link: 'https://www.clover.com/online-ordering/jauja-mexican-kitchen-food-brooklyn-new-york'
    },
    {
        name: 'Dave\'s Hot Chicken',
        lat: 40.692906591390994,
        long:  -73.98847380498599,
        review: '',
        favoriteOrders: ['2 Sliders with fries, added cheese, medium spice level'],
        link: 'https://restaurants.daveshotchicken.com/ny/brooklyn/hot-chicken-adams-st/'
    },
    {
        name: 'Blank Street Coffee',
        lat: 40.69348794968939,
        long:  -73.98597859260254,
        review: '',
        favoriteOrders:['Cold brew, black', 'Banana bread'],
        link: 'https://www.blankstreet.com/en-US/locations/new-york/L0ZQGWDTP9ZSJ-metrotech-center'
    },
    {
        name: 'Headrest Coffee',
        lat: 40.699770938457334,
        long: -73.9159079355029,
        review: '',
        favoriteOrders: ['Cold brew, black', "Bacon, egg, cheese on everything bagel"],
        link: 'https://headrestcoffee.com/'
    },
    {
        name: 'Tony\s Pizza',
        lat: 40.69923416773374,
        long:  -73.91882022580194,
        review: '',
        favoriteOrders: ['Regular slice', "Chicken parm slice", "Scilian slice"],
        link: 'http://places.singleplatform.com/tonys-pizzeria--restaurant-0/menu?ref=google'
    },
    {
        name: 'Ramen Danbo Park Slope',
        lat: 40.67614876425373, 
        long: -73.97452541647573,
        review: '',
        favoriteOrders: ['Classic tonkatsu ramen'],
        link: 'https://ramendanbo.com/our-menu-park-slope/'
    },
    {
        name: 'Amaranto',
        lat: 40.703158557122784, 
        long: -73.92185981658916,
        review: '',
        favoriteOrders: ['Steak burrito', 'Spicy guacamole, chips'],
        link: 'http://www.amarantobklyn.com/'
    }
]