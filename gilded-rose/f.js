/** @type {(item: Item) => Item} */
module.exports = item => {
    const type = item.type;
    const sellInDelta = -1;
    const pastSellIn = item.sellIn === 0;
    const qualityDelta = (type === 'hot' ? 2 : 1) * (pastSellIn ? 2 : 1) * -1;

    const quality = Math.max(item.quality + qualityDelta, 0);
    const sellIn = Math.max(item.sellIn + sellInDelta, 0);

    return {
        type,
        quality,
        sellIn,
    };
};