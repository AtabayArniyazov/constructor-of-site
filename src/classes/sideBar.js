import { block } from '../utils';
import { TextBlock, TitleBlock } from './blocks';

export class SideBar {
    constructor(selector, updateCallback){
        this.$el = document.querySelector(selector);
        this.update = updateCallback;

        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', SideBar.template);
        this.$el.addEventListener('submit', this.add.bind(this));
    }

    static get template() {
        return [
            block('Text'),
            block('Title')
        ].join('');
    }

    add(event) {
        event.preventDefault();

        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        let newBlock = type === 'text'
            ? new TextBlock(value, {styles: styles})
            : new TitleBlock(value, {styles: styles});

        this.update(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';
    }
}
