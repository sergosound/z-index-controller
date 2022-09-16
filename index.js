class ZIndexController {
    indexesTable;

    constructor(minimumIndex = 1) {
        this.minimumIndex = minimumIndex
        this.layers = ['thead', 'dropdown', 'modal']
        this.initializeIndexes()
    }

    initializeIndexes() {
        let index = this.minimumIndex
        this.indexesTable = this.layers.reduce((acc, layer) => {
            acc[layer] = index;
            index++;
            return acc
        }, {})
    }

    getZIndex(layer) {
        return this.indexesTable[layer]
    }
}

export const zIndexController = new ZIndexController()