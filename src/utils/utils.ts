import {
    grTokenDefault1,
    grTokenDefault2,
    grTokenDefault3,
    grTokenDefault4,
    grTokenDefault5
} from '@styles/assets'

const stringToTokenImage: Record<string, string> = {
    0: grTokenDefault1,
    1: grTokenDefault2,
    2: grTokenDefault3,
    3: grTokenDefault4,
    4: grTokenDefault5,
}

export const getRandomTokenImage = () => {
    return stringToTokenImage[Math.floor(Math.random() * 4)]
}