/** @type {(item: Item) => Item} */
module.exports = item => {
    const type = item.quality === 0 ? 'trash' : item.type;
    const sellInDelta = -1;
    const pastSellIn = item.sellIn === 0;
    const qualityDelta = (type === 'hot' ? 2 : 1) * (pastSellIn ? 2 : 1) * -1;

    const quality = Math.max(item.quality + qualityDelta, 0);
    const sellIn = type === 'trash' ? 0 : Math.max(item.sellIn + sellInDelta, 0);

    return {
        type,
        quality,
        sellIn,
    };
};
