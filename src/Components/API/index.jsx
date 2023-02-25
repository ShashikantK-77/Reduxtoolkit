import Chance from "chance";

const chance = Chance();

export const fakeuserdat = () =>{

    return  (chance.name({middle:true}))
}

// fakeuserdat();