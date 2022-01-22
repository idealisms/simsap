
import Giraffe from './sprites/Giraffe_2x.png';
import Leopard from './sprites/Leopard_2x.png';
import Rooster from './sprites/Rooster_2x.png';

const ANIMALS = [
    Giraffe,
    Leopard,
    Rooster,
];

function AnimalSelector() {
    return <img src={ANIMALS[Math.floor(Math.random() * 3)]} alt=""/>;
}

export default AnimalSelector;
