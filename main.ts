enum Island {
    HUB = 'HUB',
    GOLD_MINE = 'GOLD',
    DEEP_CAVERNS = 'DEEP',
    DWARVEN_MINES = 'DWARVEN',
    CRYSTAL_HOLLOWS = 'CH',
    THE_FARMING_ISLANDS = 'FARMING',
    THE_END = 'END',
    SPIDER_DEN = 'SPIDERS',
    CRIMSON_ISLE = 'CRIMSON',
    THE_PARK = 'PARK',
    // DUNGEON_HUB,
}

class Coordinates {
    x: Number
    y: Number
    z: Number

    constructor(x: Number, y: Number, z: Number) {
        this.x = x
        this.y = y
        this.z = z
    }

    patcherCoords = (): string => `x: ${this.x}, y: ${this.y}, z: ${this.z}`
}

class EggLocation {
    island: Island
    index: number
    coordinates: Coordinates
    locationMsg: string
    imageId: string

    constructor(island: Island, index: number, coordinates: Coordinates, locationMsg: string) {
        this.island = island
        this.index = index
        this.coordinates = coordinates
        this.locationMsg = locationMsg.toLowerCase()
        this.imageId = island + index.toString()
    }
}

function parseFoundMsg(msg: string) {
    const regex = /HOPPITY'S HUNT You found a Chocolate (?<meal>\w+) Egg (?<note>.*)!/
    var match = msg.match(regex)
    console.log(match)
}

const LOCATIONS_DATA: EggLocation[] = [
    new EggLocation(Island.HUB, 0, new Coordinates(161, 71, 157), 'within the wither cage'),
    new EggLocation(Island.HUB, 1, new Coordinates(125, 74, 168), 'x: 125, y: 74, z: 168'),
    new EggLocation(Island.HUB, 2, new Coordinates(147, 113, 117), "at the Fisherman's Hut"),
    new EggLocation(Island.HUB, 3, new Coordinates(35, 72, 79), 'x: 35, y: 72, z: 79'),
    new EggLocation(Island.HUB, 4, new Coordinates(160, 97, -71), 'x: 160, y: 97, z: -71'),
    new EggLocation(Island.HUB, 5, new Coordinates(169, 72, 36), 'x: 169, y: 72, z: 36'),
    new EggLocation(Island.HUB, 6, new Coordinates(44, 71, -137), 'x: 44, y: 71, z: -137'),
    new EggLocation(Island.HUB, 7, new Coordinates(-38, 70, -135), 'x: -38, y: 70, z: -135'),
    new EggLocation(Island.HUB, 8, new Coordinates(-40, 70, -74), 'x: -40, y: 70, z: -74'),
    new EggLocation(Island.HUB, 9, new Coordinates(18, 70, -77), 'x: 18, y: 70, z: -77'),
    new EggLocation(Island.HUB, 10, new Coordinates(-127, 73, -126), 'x: -127, y: 73, z: -126'),
    new EggLocation(Island.HUB, 11, new Coordinates(-61, 80, -38), 'x: -61, y: 80, z: -38'),
    new EggLocation(Island.HUB, 12, new Coordinates(-153, 74, -40), 'x: -153, y: 74, z: -40'),
    new EggLocation(Island.HUB, 13, new Coordinates(-186, 87, 81), 'x: -186, y: 87, z: 81'),
    new EggLocation(Island.HUB, 14, new Coordinates(-7, 70, 188), 'x: -7, y: 70, z: 188'),
    new EggLocation(Island.HUB, 15, new Coordinates(-38, 193, 35), 'x: -38, y: 193, z: 35'),
    new EggLocation(Island.HUB, 16, new Coordinates(-1, 144, 51), 'x: -1, y: 144, z: 51'),
    // GOLD_MINES locations
    new EggLocation(Island.GOLD_MINE, 0, new Coordinates(-15, 104, -313), 'x: -15, y: 104, z: -313'),
    new EggLocation(Island.GOLD_MINE, 1, new Coordinates(-19, 25, -305), 'x: -19, y: 25, z: -305'),
    new EggLocation(Island.GOLD_MINE, 2, new Coordinates(-19, 143, -361), 'x: -19, y: 143, z: -361'),
    new EggLocation(Island.GOLD_MINE, 3, new Coordinates(-25, 78, -328), 'x: -25, y: 78, z: -328'),
    new EggLocation(Island.GOLD_MINE, 4, new Coordinates(-30, 74, -293), 'x: -30, y: 74, z: -293'),
    new EggLocation(Island.GOLD_MINE, 5, new Coordinates(-44, 77, -303), 'x: -44, y: 77, z: -303'),
    new EggLocation(Island.GOLD_MINE, 6, new Coordinates(15, 75, -290), 'x: 15, y: 75, z: -290'),
    new EggLocation(Island.GOLD_MINE, 7, new Coordinates(-1, 78, -325), 'x: -1, y: 78, z: -325'),
    new EggLocation(Island.GOLD_MINE, 8, new Coordinates(0, 76, -307), 'x: 0, y: 76, z: -307'),
    new EggLocation(Island.GOLD_MINE, 9, new Coordinates(17, 57, -340), 'x: 17, y: 57, z: -340'),
    new EggLocation(Island.GOLD_MINE, 10, new Coordinates(-35, 77, -313), 'x: -35, y: 77, z: -313'),
    new EggLocation(Island.GOLD_MINE, 11, new Coordinates(-18, 62, -353), 'x: -18, y: 62, z: -353'),
    new EggLocation(Island.GOLD_MINE, 12, new Coordinates(-11, 68, -397), 'x: -11, y: 68, z: -397'),
    new EggLocation(Island.GOLD_MINE, 13, new Coordinates(-22, 37, -336), 'x: -22, y: 37, z: -336'),
    new EggLocation(Island.GOLD_MINE, 14, new Coordinates(-25, 79, -282), 'x: -25, y: 79, z: -282'),
    new EggLocation(Island.GOLD_MINE, 15, new Coordinates(41, 80, -311), 'x: 41, y: 80, z: -311'),
    new EggLocation(Island.GOLD_MINE, 16, new Coordinates(-49, 94, -335), 'x: -49, y: 94, z: -335'),
    new EggLocation(Island.GOLD_MINE, 17, new Coordinates(-2, 82, -309), 'x: -2, y: 82, z: -309'),
    // DEEP_CAVERNS locations
    new EggLocation(Island.DEEP_CAVERNS, 0, new Coordinates(4, 148, 88), 'x: 4, y: 148, z: 88'),
    new EggLocation(Island.DEEP_CAVERNS, 1, new Coordinates(24, 156, -38), 'x: 24, y: 156, z: -38'),
    new EggLocation(Island.DEEP_CAVERNS, 2, new Coordinates(22, 159, 27), 'x: 22, y: 159, z: 27'),
    new EggLocation(Island.DEEP_CAVERNS, 3, new Coordinates(56, 151, 23), 'x: 56, y: 151, z: 23'),
    new EggLocation(Island.DEEP_CAVERNS, 4, new Coordinates(1, 153, 37), 'x: 1, y: 153, z: 37'),
    new EggLocation(Island.DEEP_CAVERNS, 5, new Coordinates(11, 176, 58), 'x: 11, y: 176, z: 58'),
    new EggLocation(Island.DEEP_CAVERNS, 6, new Coordinates(-34, 207, 38), 'x: -34, y: 207, z: 38'),
    new EggLocation(Island.DEEP_CAVERNS, 7, new Coordinates(46, 38, 22), 'x: 46, y: 38, z: 22'),
    new EggLocation(Island.DEEP_CAVERNS, 8, new Coordinates(20, 68, 43), 'x: 20, y: 68, z: 43'),
    new EggLocation(Island.DEEP_CAVERNS, 9, new Coordinates(21, 104, 17), 'x: 21, y: 104, z: 17'),
    new EggLocation(Island.DEEP_CAVERNS, 10, new Coordinates(-11, 120, 37), 'x: -11, y: 120, z: 37'),
    new EggLocation(Island.DEEP_CAVERNS, 11, new Coordinates(1, 110, 45), 'x: 1, y: 110, z: 45'),
    new EggLocation(Island.DEEP_CAVERNS, 12, new Coordinates(38, 12, 20), 'x: 38, y: 12, z: 20'),
    new EggLocation(Island.DEEP_CAVERNS, 13, new Coordinates(31, 12, 13), 'x: 31, y: 12, z: 13'),
    new EggLocation(Island.DEEP_CAVERNS, 14, new Coordinates(7, 157, 63), 'x: 7, y: 157, z: 63'),
    // DWARVEN_MINES locations
    new EggLocation(Island.DWARVEN_MINES, 0, new Coordinates(32, 179, 103), 'x: 32, y: 179, z: 103'),
    new EggLocation(Island.DWARVEN_MINES, 1, new Coordinates(-17, 128, 177), 'x: -17, y: 128, z: 177'),
    new EggLocation(Island.DWARVEN_MINES, 2, new Coordinates(87, 193, -44), 'x: 87, y: 193, z: -44'),
    new EggLocation(Island.DWARVEN_MINES, 3, new Coordinates(126, 197, 187), 'x: 126, y: 197, z: 187'),
    new EggLocation(Island.DWARVEN_MINES, 4, new Coordinates(78, 188, 126), 'x: 78, y: 188, z: 126'),
    new EggLocation(Island.DWARVEN_MINES, 5, new Coordinates(-93, 200, -122), 'x: -93, y: 200, z: -122'),
    new EggLocation(Island.DWARVEN_MINES, 6, new Coordinates(-73, 222, -139), 'x: -73, y: 222, z: -139'),
    new EggLocation(Island.DWARVEN_MINES, 7, new Coordinates(13, 201, -150), 'x: 13, y: 201, z: -150'),
    new EggLocation(Island.DWARVEN_MINES, 8, new Coordinates(-134, 174, -51), 'x: -134, y: 174, z: -51'),
    new EggLocation(Island.DWARVEN_MINES, 9, new Coordinates(91, 199, -123), 'x: 91, y: 199, z: -123'),
    new EggLocation(Island.DWARVEN_MINES, 10, new Coordinates(36, 128, 50), 'x: 36, y: 128, z: 50'),
    new EggLocation(Island.DWARVEN_MINES, 11, new Coordinates(104, 151, 142), 'x: 104, y: 151, z: 142'),
    new EggLocation(Island.DWARVEN_MINES, 12, new Coordinates(-146, 144, 148), 'x: -146, y: 144, z: 148'),
    new EggLocation(Island.DWARVEN_MINES, 13, new Coordinates(-2, 147, -52), 'x: -2, y: 147, z: -52'),
    new EggLocation(Island.DWARVEN_MINES, 14, new Coordinates(-1, 183, 26), 'x: -1, y: 183, z: 26'),
    // CRYSTAL_HOLLOWS locations
    new EggLocation(Island.CRYSTAL_HOLLOWS, 0, new Coordinates(-321, 99, 101), 'x: -321, y: 99, z: 101'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 1, new Coordinates(-356, 94, 123), 'x: -356, y: 94, z: 123'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 2, new Coordinates(-353, 84, 55), 'x: -353, y: 84, z: 55'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 3, new Coordinates(-365, 81, 15), 'x: -365, y: 81, z: 15'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 4, new Coordinates(-309, 77, 4), 'x: -309, y: 77, z: 4'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 5, new Coordinates(-317, 85, -20), 'x: -317, y: 85, z: -20'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 6, new Coordinates(-319, 77, -61), 'x: -319, y: 77, z: -61'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 7, new Coordinates(-290, 68, -16), 'x: -290, y: 68, z: -16'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 8, new Coordinates(-331, 68, 61), 'x: -331, y: 68, z: 61'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 9, new Coordinates(-294, 80, 92), 'x: -294, y: 80, z: 92'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 10, new Coordinates(-308, 74, 32), 'x: -308, y: 74, z: 32'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 11, new Coordinates(-347, 79, 101), 'x: -347, y: 79, z: 101'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 12, new Coordinates(-338, 79, 89), 'x: -338, y: 79, z: 89'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 13, new Coordinates(-315, 77, 82), 'x: -315, y: 77, z: 82'),
    new EggLocation(Island.CRYSTAL_HOLLOWS, 14, new Coordinates(-318, 77, 70), 'x: -318, y: 77, z: 70'),

    // FARMING_ISLAND locations
    new EggLocation(Island.THE_FARMING_ISLANDS, 0, new Coordinates(152, 72, -217), 'x: 152, y: 72, z: -217'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 1, new Coordinates(146, 81, -242), 'x: 146, y: 81, z: -242'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 2, new Coordinates(204, 54, -503), 'x: 204, y: 54, z:-503'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 3, new Coordinates(225, 62, -521), 'x: 225, y: 62, z: -521'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 4, new Coordinates(213, 46, -586), 'x: 213, y: 46, z: -586'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 5, new Coordinates(196, 79, -558), 'x: 196, y: 79, z: -558'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 6, new Coordinates(259, 61, -502), 'x: 259, y: 61, z: -502'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 7, new Coordinates(199, 57, -442), 'x: 199, y: 57, z: -442'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 8, new Coordinates(147, 71, -383), 'x: 147, y: 71, z: -383'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 9, new Coordinates(230, 53, -462), 'x: 230, y: 53, z: -462'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 10, new Coordinates(165, 61, -509), 'x: 165, y: 61, z: -509'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 11, new Coordinates(218, 45, -482), 'x: 218, y: 45, z: -482'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 12, new Coordinates(224, 46, -567), 'x: 224, y: 46, z: -567'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 13, new Coordinates(166, 43, -464), 'x: 166, y: 43, z: -464'),
    new EggLocation(Island.THE_FARMING_ISLANDS, 14, new Coordinates(191, 81, -444), 'x: 191, y: 81, z: -444'),

    // SPIDER_DEN locations
    new EggLocation(Island.SPIDER_DEN, 0, new Coordinates(-303, 65, -182), 'x: -303, y: 65, z: -182'),
    new EggLocation(Island.SPIDER_DEN, 1, new Coordinates(-266, 72, -191), 'x: -266, y: 72, z: -191'),
    new EggLocation(Island.SPIDER_DEN, 2, new Coordinates(-355, 111, -293), 'x: -355, y: 111, z: -293'),
    new EggLocation(Island.SPIDER_DEN, 3, new Coordinates(-155, 86, -351), 'x: -155, y: 86, z: -351'),
    new EggLocation(Island.SPIDER_DEN, 4, new Coordinates(-360, 85, -356), 'x: -360, y: 85, z: -356'),
    new EggLocation(Island.SPIDER_DEN, 5, new Coordinates(-353, 124, -250), 'x: -353, y: 124, z: -250'),
    new EggLocation(Island.SPIDER_DEN, 6, new Coordinates(-293, 36, -271), 'x: -293, y: 36, z: -271'),
    new EggLocation(Island.SPIDER_DEN, 7, new Coordinates(-181, 61, -312), 'x: -181, y: 61, z: -312'),
    new EggLocation(Island.SPIDER_DEN, 8, new Coordinates(-217, 75, -345), 'x: -217, y: 75, z: -345'),
    new EggLocation(Island.SPIDER_DEN, 9, new Coordinates(-202, 83, -238), 'x: -202, y: 83, z: -238'),
    new EggLocation(Island.SPIDER_DEN, 10, new Coordinates(-299, 97, -167), 'x: -299, y: 97, z: -167'),
    new EggLocation(Island.SPIDER_DEN, 11, new Coordinates(-280, 115, -181), 'x: -280, y: 115, z: -181'),
    new EggLocation(Island.SPIDER_DEN, 12, new Coordinates(-398, 139, -250), 'x: -398, y: 139, z: -250'),
    new EggLocation(Island.SPIDER_DEN, 13, new Coordinates(-283, 129, -185), 'x: -283, y: 129, z: -185'),
    new EggLocation(Island.SPIDER_DEN, 14, new Coordinates(-200, 174, -313), 'x: -200, y: 174, z: -313'),

    // THE_PARK locations
    new EggLocation(Island.THE_PARK, 0, new Coordinates(-149, 71, 73), 'x: -149, y: 71, z: 73'),
    new EggLocation(Island.THE_PARK, 1, new Coordinates(-104, 75, 54), 'x: -104, y: 75, z: 54'),
    new EggLocation(Island.THE_PARK, 2, new Coordinates(-118, 70, 4), 'x: -118, y: 70, z: 4'),
    new EggLocation(Island.THE_PARK, 3, new Coordinates(-154, 71, -29), 'x: -154, y: 71, z: -29'),
    new EggLocation(Island.THE_PARK, 4, new Coordinates(-132, 71, -63), 'x: -132, y: 71, z: -63'),
    new EggLocation(Island.THE_PARK, 5, new Coordinates(-99, 76, -28), 'x: -99, y: 76, z: -28'),
    new EggLocation(Island.THE_PARK, 6, new Coordinates(-117, 71, -69), 'x: -117, y: 71, z: -69'),
    new EggLocation(Island.THE_PARK, 7, new Coordinates(-109, 67, -71), 'x: -109, y: 67, z: -71'),
    new EggLocation(Island.THE_PARK, 8, new Coordinates(-141, 70, -84), 'x: -141, y: 70, z: -84'),
    new EggLocation(Island.THE_PARK, 9, new Coordinates(-90, 71, -42), 'x: -90, y: 71, z: -42'),
    new EggLocation(Island.THE_PARK, 10, new Coordinates(-102, 72, -98), 'x: -102, y: 72, z: -98'),
    new EggLocation(Island.THE_PARK, 11, new Coordinates(-132, 71, -104), 'x: -132, y: 71, z: -104'),
    new EggLocation(Island.THE_PARK, 12, new Coordinates(-119, 67, -128), 'x: -119, y: 67, z: -128'),
    new EggLocation(Island.THE_PARK, 13, new Coordinates(-94, 71, -61), 'x: -94, y: 71, z: -61'),
    new EggLocation(Island.THE_PARK, 14, new Coordinates(-116, 71, -44), 'x: -116, y: 71, z: -44'),
    // THE_END locations
    new EggLocation(Island.THE_END, 0, new Coordinates(-451, 50, -274), 'x: -451, y: 50, z: -274'),
    new EggLocation(Island.THE_END, 1, new Coordinates(-539, 102, -271), 'x: -539, y: 102, z: -271'),
    new EggLocation(Island.THE_END, 2, new Coordinates(-551, 56, -239), 'x: -551, y: 56, z: -239'),
    new EggLocation(Island.THE_END, 3, new Coordinates(-566, 7, -316), 'x: -566, y: 7, z: -316'),
    new EggLocation(Island.THE_END, 4, new Coordinates(-584, 211, -272), 'x: -584, y: 211, z: -272'),
    new EggLocation(Island.THE_END, 5, new Coordinates(-591, 5, -276), 'x: -591, y: 5, z: -276'),
    new EggLocation(Island.THE_END, 6, new Coordinates(-600, 21, -255), 'x: -600, y: 21, z: -255'),
    new EggLocation(Island.THE_END, 7, new Coordinates(-667, 33, -210), 'x: -667, y: 33, z: -210'),
    new EggLocation(Island.THE_END, 8, new Coordinates(-672, 77, -276), 'x: -672, y: 77, z: -276'),
    new EggLocation(Island.THE_END, 9, new Coordinates(-714, 41, -315), 'x: -714, y: 41, z: -315'),
    new EggLocation(Island.THE_END, 10, new Coordinates(-722, 56, -232), 'x: -722, y: 56, z: -232'),
    new EggLocation(Island.THE_END, 11, new Coordinates(-778, 101, -300), 'x: -778, y: 101, z: -300'),
    new EggLocation(Island.THE_END, 12, new Coordinates(-510, 110, -250), 'x: -510, y: 110, z: -250'),
    new EggLocation(Island.THE_END, 13, new Coordinates(-661, 5, -248), 'x: -661, y: 5, z: -248'),
    new EggLocation(Island.THE_END, 14, new Coordinates(-502, 103, -299), 'x: -502, y: 103, z: -299'),
    // CRIMSON_ISLE locations
    new EggLocation(Island.CRIMSON_ISLE, 0, new Coordinates(-270, 83, -496), 'x: -270, y: 83, z: -496'),
    new EggLocation(Island.CRIMSON_ISLE, 1, new Coordinates(-289, 127, -985), 'x: -289, y: 127, z: -985'),
    new EggLocation(Island.CRIMSON_ISLE, 2, new Coordinates(-376, 207, -809), 'x: -376, y: 207, z: -809'),
    new EggLocation(Island.CRIMSON_ISLE, 3, new Coordinates(-33, 114, -937), 'x: -33, y: 114, z: -937'),
    new EggLocation(Island.CRIMSON_ISLE, 4, new Coordinates(-237, 108, -605), 'x: -237, y: 108, z: -605'),
    new EggLocation(Island.CRIMSON_ISLE, 5, new Coordinates(-695, 98, -795), 'x: -695, y: 98, z: -795'),
    new EggLocation(Island.CRIMSON_ISLE, 6, new Coordinates(-641, 101, -822), 'x: -641, y: 101, z: -822'),
    new EggLocation(Island.CRIMSON_ISLE, 7, new Coordinates(-375, 121, -1009), 'x: -375, y: 121, z: -1009'),
    new EggLocation(Island.CRIMSON_ISLE, 8, new Coordinates(-295, 93, -689), 'x: -295, y: 93, z: -689'),
    new EggLocation(Island.CRIMSON_ISLE, 9, new Coordinates(-376, 63, -802), 'x: -376, y: 63, z: -802'),
    new EggLocation(Island.CRIMSON_ISLE, 10, new Coordinates(-469, 135, -1020), 'x: -469, y: 135, z: -1020'),
    new EggLocation(Island.CRIMSON_ISLE, 11, new Coordinates(-375, 83, -709), 'x: -375, y: 83, z: -709'),
    new EggLocation(Island.CRIMSON_ISLE, 12, new Coordinates(-62, 107, -811), 'x: -62, y: 107, z: -811'),
    new EggLocation(Island.CRIMSON_ISLE, 13, new Coordinates(-631, 141, -926), 'x: -631, y: 141, z: -926'),
    new EggLocation(Island.CRIMSON_ISLE, 14, new Coordinates(-358, 80, -442), 'x: -358, y: 80, z: -442'),

    // DUNGEON_HUB locations
    // new EggLocation(Island.DUNGEON_HUB, 0, new Coordinates(5, 11, -1), 'x: 5, y: 11, z: -1'),
    // new EggLocation(Island.DUNGEON_HUB, 1, new Coordinates(0, 146, -78), 'x: 0, y: 146, z: -78'),
    // new EggLocation(Island.DUNGEON_HUB, 2, new Coordinates(-21, 120, -16), 'x: -21, y: 120, z: -16'),
    // new EggLocation(Island.DUNGEON_HUB, 3, new Coordinates(-34, 119, 9), 'x: -34, y: 119, z: 9'),
    // new EggLocation(Island.DUNGEON_HUB, 4, new Coordinates(-23, 86, -3), 'x: -23, y: 86, z: -3'),
    // new EggLocation(Island.DUNGEON_HUB, 5, new Coordinates(-52, 156, 0), 'x: -52, y: 156, z: 0'),
    // new EggLocation(Island.DUNGEON_HUB, 6, new Coordinates(-54, 119, -13), 'x: -54, y: 119, z: -13'),
    // new EggLocation(Island.DUNGEON_HUB, 7, new Coordinates(0, 108, 0), 'x: 0, y: 108, z: 0'),
    // new EggLocation(Island.DUNGEON_HUB, 8, new Coordinates(-5, 23, 98), 'x: -5, y: 23, z: 98'),
    // new EggLocation(Island.DUNGEON_HUB, 9, new Coordinates(-138, 21, -7), 'x: -138, y: 21, z: -7'),
    // new EggLocation(Island.DUNGEON_HUB, 10, new Coordinates(-62, 121, -7), 'x: -62, y: 121, z: -7'),
    // new EggLocation(Island.DUNGEON_HUB, 11, new Coordinates(-62, 122, 28), 'x: -62, y: 122, z: 28'),
    // new EggLocation(Island.DUNGEON_HUB, 12, new Coordinates(16, 125, 3), 'x: 16, y: 125, z: 3'),
    // new EggLocation(Island.DUNGEON_HUB, 13, new Coordinates(-18, 87, -27), 'x: -18, y: 87, z: -27'),
    // new EggLocation(Island.DUNGEON_HUB, 14, new Coordinates(-66, 121, 6), 'x: -66, y: 121, z: 6'),
]

type IslandMap = { [key: string]: number[] }
class FoundInfo {
    ISLANDS: Island[] = [
        Island.HUB,
        Island.GOLD_MINE,
        Island.DEEP_CAVERNS,
        Island.DWARVEN_MINES,
        Island.CRYSTAL_HOLLOWS,
        Island.THE_FARMING_ISLANDS,
        Island.THE_PARK,
        Island.SPIDER_DEN,
        Island.THE_END,
        Island.CRIMSON_ISLE,
    ]
    LS_KEY = 'lsFOUND'

    found: IslandMap

    constructor() {
        this.found = this.getFromLocalStorage()
    }

    createFoundObject() {
        var temp: IslandMap = {}
        this.ISLANDS.forEach((island: string, _) => (temp[island] = []))
        return temp
    }

    getFromLocalStorage() {
        if (!localStorage.getItem(this.LS_KEY)) return this.createFoundObject()
        return JSON.parse(localStorage.getItem(this.LS_KEY)!)
    }

    saveToLocalStorage() {
        localStorage.setItem(this.LS_KEY, JSON.stringify(this.found))
    }
}

let state = new FoundInfo()
console.log(state)

let island_containers: Map<Island, HTMLElement> = new Map<Island, HTMLElement>()
for (const [key, value] of Object.entries(state.found)) {
    island_containers.set(key as Island, document.getElementById(key.toLowerCase())!)
}

const setImageClass = (elem: HTMLElement, shouldBeFound: boolean) => (elem.className = shouldBeFound ? 'found' : 'not-found')

function updateUI() {
    island_containers.forEach((container, island) => {
        let [name, count, images_container] = container.children
        images_container.replaceChildren()

        let eggs_in_island_data = LOCATIONS_DATA.filter((egg) => egg.island == island)

        let total_in_island = eggs_in_island_data.length
        let found_in_island = state.found[island].length

        count.innerHTML = `${found_in_island} / 15 (Total ${total_in_island})`

        console.log(state.found[island])

        eggs_in_island_data.forEach((egg, _) => {
            var elem = document.createElement('img')
            elem.addEventListener('click', () => onClickImage(island, egg.index))
            elem.setAttribute('src', `/static/images/${egg.island.toLowerCase()}/${egg.index}.png`)
            
            setImageClass(elem, state.found[island].includes(egg.index))

            images_container.appendChild(elem)
        })
    })
}

console.log(island_containers)
updateUI()

function onClickImage(island: Island, index: number) {
    if (state.found[island].includes(index)) state.found[island] = state.found[island].filter((item) => item !== index)
    else state.found[island].push(index)
    state.saveToLocalStorage()
    updateUI()
}

function onSubmitMsg() {}
