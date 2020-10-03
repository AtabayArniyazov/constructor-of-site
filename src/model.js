import image from './assets/image.png';

export const model = [
    {
        type: 'title',
        value: 'Constructor of sites on pure JS!',
        options: {
            tag: 'h2',
            styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;`
        }
    },
    {type: 'text', value: 'Here we go some text'},
    {type: 'columns', value: ['1111', '2222', '3333']},
    {type: 'image', value: image}
];
