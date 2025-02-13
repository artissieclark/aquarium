player.onChat("run", function () {
	
})
player.onItemInteracted(TRIDENT, function () {
    blocks.fill(
    GLASS,
    pos(5, 0, -10),
    pos(12, 7, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(6, 1, -9),
    pos(11, 6, 9),
    FillOperation.Replace
    )
    for (let index = 0; index < 4; index++) {
        mobs.spawn(SALMON, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(SQUID, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        blocks.place(FIRE_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(HORN_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
    }
})
