// Mock Data

const usersData = [
    {id: '1', name: 'Jon', age: 36, profession: 'Android Architect/Principal Engineer'},
    {id: '13', name: 'Caitlin', age: 26, profession: 'Veterinarian'},
    {id: '211', name: 'Angelina', age: 27, profession: 'Star'},
    {id: '19', name: 'Jennifer', age: 29, profession: 'Home Maker'},
    {id: '150', name: 'Nicole', age: 23, profession: 'Free Lancer'}
];

const hobbiesData = [
    {id: '1', title: 'Programming', description: 'Using computers to make the world a better place', userId: '150'},
    {id: '2', title: 'Rowing', description: 'Sweat and feel better before eating donuts', userId: '211'},
    {id: '3', title: 'Swimming', description: 'Get in the water and learn to become the water', userId: '211'},
    {id: '4', title: 'Fencing', description: 'A hobby for fency people', userId: '13'},
    {id: '5', title: 'Hiking', description: 'Wear hiking boots and explore the world', userId: '150'},
];

const postsData = [
    {id: '1', comment: 'Building a Mind', userId: '1'},
    {id: '2', comment: 'GraphQL is Amazing', userId: '1'},
    {id: '3', comment: 'How to Change the World', userId: '19'},
    {id: '4', comment: 'How to Change the World', userId: '211'},
    {id: '5', comment: 'How to Change the World', userId: '1'}
];

module.exports = {
    usersData,
    hobbiesData,
    postsData
}