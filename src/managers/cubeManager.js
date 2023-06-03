const uniqid = require('uniqid');
const cubes = [{
    id: '125481237129',
    name: 'World of Warcraft',
    description:'sss',
    imageUrl: 'https://th.bing.com/th/id/R.fada8d30b58ff00dabc96e1d6ec0869c?rik=B7r9c2UGqgfQvQ&riu=http%3a%2f%2fwww.techdigest.tv%2fworld+of+warcraft.jpg&ehk=a03l8csm%2bUBVYFLefBFlUxAghirBFmooSc56EPVQ%2bSU%3d&risl=&pid=ImgRaw&r=0',
    difficultyLevel: 5,
}];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId); 

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid,
        ...cubeData,
    }
    cubes.push(newCube);

    return newCube;
};