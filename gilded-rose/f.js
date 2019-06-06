/** @type {(item: Item) => Item} */
module.exports = item => {
    const type = item.type;
    const sellIn = Math.max(item.sellIn - 1, 0);
    const degradationRate = item.sellIn === 0 ? 2 : 1;
    const quality = Math.max(item.quality - degradationRate, 0);

    return {
        type,
        quality,
        sellIn,
    };
};
