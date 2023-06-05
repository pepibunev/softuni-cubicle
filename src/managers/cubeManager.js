const uniqid = require('uniqid');
const cubes = [{
    id: '125481237129',
    name: 'World of Warcraft',
    description:'sss',
    imageUrl: 'https://th.bing.com/th/id/R.fada8d30b58ff00dabc96e1d6ec0869c?rik=B7r9c2UGqgfQvQ&riu=http%3a%2f%2fwww.techdigest.tv%2fworld+of+warcraft.jpg&ehk=a03l8csm%2bUBVYFLefBFlUxAghirBFmooSc56EPVQ%2bSU%3d&risl=&pid=ImgRaw&r=0',
    difficultyLevel: 5,
},
{
    id: '122321237129',
    name: 'Gan356 Air SM',
    description:'sss',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
    difficultyLevel: 3,
},
{
    id: '125423237129',
    name: 'Eco-Dark',
    description:'sss',
    imageUrl: 'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg',
    difficultyLevel: 6,
},
{
    id: '1785481237129',
    name: 'Pyraminx',
    description:'sss',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg',
    difficultyLevel: 1,
},
{
    id: '125480237129',
    name: 'Megaminx',
    description:'sss',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg',
    difficultyLevel: 3,
}
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search){
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId); 

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid,
        ...cubeData,
    }
    cubes.push(newCube);
    console.log(newCube);

    return newCube;
};