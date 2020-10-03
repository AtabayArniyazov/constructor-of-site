import { Site } from './site';
import { SideBar } from './sideBar';

export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        const site = new Site('#site');
        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        };

        site.render(this.model);

        new SideBar('#panel', updateCallback);
    }

}
