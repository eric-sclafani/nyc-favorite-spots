interface Location {
    locId: number,
    name: string;
    lat: number;
    long: number;
    desc: string | null;
    rating: number // out of ten
    favoriteOrders: string[] | null;
}

export const locations: Location[] = [
    {
        locId: 0,
        name: 'Juaja',
        lat: 40.65629271345367,
        long: -73.9597840610175,
        desc: "",
        rating: 9,
        favoriteOrders: ['Steak Nachos', 'Fries', 'Quesadillas']
    }
]