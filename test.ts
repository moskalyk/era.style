const library = {
    0: '🃟',
    1: '⚚',
    2: '♕',
    3: '⚘',
    4: '♖',
    5: '♔',
    6: '☂',
    7: '♘',
    8: '☮',
    9: '☯',
    10: '☸',
    11: '⚖',
    12: '♱',
    13: '☠',
    14: '♻',
    15: '☢',
    16: '☖',
    17: '★',
    18: '☽',
    19: '☼',
    20: '⚱',
    21: '⚬',
    22: '∅',
    23: 'RED',
    24: 'ORANGE',
    25: 'YELLOW',
    26: 'GREEN',
    27: 'CYAN',
    28: '◨',
    29: '❍',
    30: '☉',
    31: '☿',
    32: '♀',
    33: '♁',
    34: '♂',
    35: '⚳',
    36: '♃',
    37: '♄',
    38: '♅',
    39: '♆',
    40: '♇',
    41: '⚀',
    42: 'Birch 𐂷 BEITH',
    43: 'Rowan 𐂷 LUIS',
    44: 'Alder 𐂷 FEARN',
    45: 'Willow 𐂷 SAILLE',
    46: 'Ash 𐂷 NUIN',
    47: 'Hawthon 𐂷 HUATHE',
    48: 'Oak 𐂷 DUIR',
    49: 'Holly 𐂷 TINNE',
    50: 'Hazel 𐂷 COLL',
    51: 'Apple 𐂷 QUERT',
    52: 'Vine 𐂷 MUIN',
    53: 'Ivy 𐂷 GORT',
    54: 'Reed 𐂷 NGETAL',
    55: 'Blackthorn 𐂷 STRAIF',
    56: 'Elder 𐂷 RUIS',
    57: 'Silver Fir 𐂷 AILIM',
    58: 'Furze 𐂷 OHN',
    59: 'Heather 𐂷 UR',
    60: 'Poplar 𐂷 EADHA',
    61: 'Yew 𐂷 IOHO',
    62: 'The Grove 𐂷 KOAD',
    63: 'Spindle 𐂷 OIR',
    64: 'Honeysuckle 𐂷 UNILEAND',
    65: 'Beech 𐂷 PHAGOS',
    66: 'The Sea 𐂷 MOR',
    67: '⚁',
    68: 'The Self ᛗ MANNAZ',
    69: 'Partnership ᚷ GEBO',
    70: 'Signals ᚫ ANSUZ',
    71: 'Seperation ᛟ OTHILA',
    72: 'Strength ᚢ URUZ',
    73: 'Initiatian ᛈ PERTH',
    74: 'Constraint ᚾ NAUTHIZ',
    75: 'Fertility ᛝ INGUZ',
    76: 'Defense ᛇ EIHWAZ',
    77: 'Protection ᛉ ALGIZ',
    78: 'Posessions ᛓ FEHU',
    79: 'Joy ᚹ WUNJO',
    80: 'Harvest ᛃ JERA',
    81: 'Opening ᚲ KANO',
    82: 'Warrior ᛏ TEIWAZ',
    83: 'Growth ᛒ BERKANA',
    84: 'Movement ᛖ EHWAZ',
    85: 'Flow ᛐ LAGUZ',
    86: 'Disruption ᚺ HAGALAZ',
    87: 'Journey ᚱ RAIDO',
    88: 'Gateway ᚦ THURISAZ',
    89: 'Breakthrough ᛞ DAGAZ',
    90: 'Standstill ᛁ ISA',
    91: 'Wholeness ᛲ SOWELU',
    92: 'Unknowable  ODIN',
    93: '⚂',
    94: '🜁',
    95: '🜂',
    96: '🜃',
    97: '🜄',
    98: '⚃',
    99: '䷀',
    100: '䷁',
    101: '䷂',
    102: '䷃',
    103: '䷄',
    104: '䷅',
    105: '䷆',
    106: '䷇',
    107: '䷈',
    108: '䷉',
    109: '䷊',
    110: '䷋',
    111: '䷌',
    112: '䷍',
    113: '䷎',
    114: '䷏',
    115: '䷐',
    116: '䷑',
    117: '䷒',
    118: '䷓',
    119: '䷔',
    120: '䷕',
    121: '䷖',
    122: '䷗',
    123: '䷘', // 25
    124: '䷙',
    125: '䷚',
    126: '䷛',
    127: '䷜',
    128: '䷝',
    129: '䷞',
    130: '䷟',
    131: '䷠',
    132: '䷡',
    133: '䷢',
    134: '䷣',
    135: '䷤',
    136: '䷥',
    137: '䷦',
    138: '䷧', // 40
    139: '䷨',
    140: '䷩',
    141: '䷪',
    142: '䷫',
    143: '䷬',
    144: '䷭',
    145: '䷮',
    146: '䷯',
    147: '䷰',
    148: '䷱', // 50
    149: '䷲',
    150: '䷳',
    151: '䷴',
    152: '䷵',
    153: '䷶',
    154: '䷷',
    155: '䷸',
    156: '䷹', /// 58
    157: '䷺',
    158: '䷻',
    159: '䷼',
    160: '䷽',
    161: '䷾',
    162: '䷿',
    163: '¤',
    164: '🃕',
    165: '🂢',
    166: '🃉',
    167: '🂾',
    168: '🃃',
    169: '🂣',
    170: '🃋',
    171: '🂶',
    172: '🃍',
    173: '🂮',
    174: '🃞',
    175: '🂪',
    176: 'MOONSTONE',
    177: 'LAPIS_LAZULI',
    178: 'FLOWER_AGATE',
    179: 'MOSS_AGATE',
    180: 'SHAKTI',
    181: 'SUNSTONE',
    182: 'HEMATITE',
    183: 'AQUAMARINE',
    184: 'MALACHITE',
    185: 'ARAGONITE',
    186: 'BLACK_TOURMALINE',
    187: 'TOURQUISE',
    188: 'CALCITE',
    189: 'ROSE_QUARTZ',
    190: 'FLOURITE',
    191: 'PINK_AMETHYST',
    192: 'SMOKY_AMAZONITE',
    193: 'CITRINE',
    194: 'PEACH_SELENITE',
    195: 'SUPER_SEVEN',
    196: 'LABRADORITE',
    197: 'LARIMAR',
    198: 'LACE_AGATE',
    199: 'PYRITE',
    200: 'RED_JASPER',
    201: 'APOPHYLLITE',
    202: 'OPAL',
    203: 'EMERALD',
    204: 'HERKIMER_DIAMOND',
    205: 'AZURITE',
    206: 'AMMONITE',
    207: 'DESERT_JASPER',
    208: 'SPIRIT_QUARTZ',
    209: '⚄',
    210: '☌',
    211: '⚯',
    212: '□',
    213: '♈︎',
    214: '⚹',
    215: '⚯',
    216: '□',
    217: 'WOOD',
    218: 'METAL',
    219: '⇠',
    220: '⇡',
    221: '⇢',
    222: '⇣',
    223: '꩜',
    224: '❀',
    225: '𑗘',
    226: '♡',
    227: '▲',
    228: 'FRIDAY',
    229: '⚅',
    230: 'WOLF',
    231: 'CAT',
    232: 'ROOSTER',
    233: 'COW',
    234: 'BUFFALO',
    235: 'SPIDER',
    236: 'HORSE',
    237: 'SNAKE',
    238: 'FISH',
    239: 'FOX',
    240: 'BAT',
    241: 'MONKEY',
    242: 'TURTLE',
    243: 'BIRD',
    244: 'GOAT',
    245: 'MALKUTH',
    246: 'YESOD',
    247: 'HOD',
    248: 'NETZACH',
    249: 'TIPARETH',
    250: 'GEBURH',
    251: 'CHESED',
    252: 'DAATH',
    253: 'BINAH',
    254: 'CHOKMAH',
    255: 'KETER'
};
  
(() => {
    const indexes = [0, 1, 2, 3, 4, 5, 6, 7]
    const keys = ['☷','☶','☵','☴','☳','☲','☱','☰']
    const talis = Object.values(library)
    const values = Object.values(library).slice(99,163)
    const businessess = []
    
    // or you can personalize
    const startingCoord = { lng: -79.39496398, lat: 43.66845366 };

    // Function to generate random longitude and latitude within a radius in kilometers
    function getRandomCoords(center: any, radiusKm: any, numPoints: any) {
        const getRandomBusinessName = () => `Business_${Math.random().toString(36).substring(7)}`;
        const coords = [];
    
        while (coords.length < numPoints) {
            const randomAngle = Math.random() * 2 * Math.PI; // Random angle
            const randomRadius = Math.random() * radiusKm; // Random radius within the specified radius
            const randomPoint = {
                lng: center.lng + (randomRadius / 111) * Math.cos(randomAngle),
                lat: center.lat + (randomRadius / 111) * Math.sin(randomAngle) / Math.cos(center.lat * Math.PI / 180),
                businessName: getRandomBusinessName()
            };
    
            coords.push(randomPoint);
        }
    
        return coords;
    }
    
    // Function to classify points into 8 sectors based on their bearing from the center
    function classifyPoints(coords: any, center: any) {
        const sectors: any = Array.from({ length: 8 }, () => []);
    
        coords.forEach((point: any) => {
            const bearing = Math.atan2(point.lat - center.lat, point.lng - center.lng) * 180 / Math.PI + 180;
            const sector = Math.floor(((bearing + 22.5) % 360) / 45);
            sectors[sector].push(point.businessName);
        });
    
        return sectors;
    }
    
    // Generate random points
    const randomCoords = getRandomCoords(startingCoord, 10, 50);
    
    // Classify the points into sectors
    const sectors = classifyPoints(randomCoords, startingCoord);
    
    // Function to print businesses in a sector by index (0-7)
    function printBusinessesInSector(sectorIndex: any) {
        if (sectorIndex < 0 || sectorIndex >= sectors.length) {
            console.log("Invalid sector index. Please use a value between 0 and 7.");
            return;
        }
        console.log(`Businesses in sector ${sectorIndex} ${keys[sectorIndex]} :`, sectors[sectorIndex]);
    }
    
    // Example usage
    const directions = []

    function getDayOfYear() {
        const now: any = new Date();
        const start: any = new Date(now.getFullYear(), 0, 1); // January 1st of current year
        const diff = now - start; // difference in milliseconds
        const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
        const day = Math.floor(diff / oneDay);
        return day + 1; // +1 because we start counting from 1
    }

    const sign = talis[getDayOfYear()+3]

    switch(sign){
        case values[0]:
            directions.push(indexes[7])
            break;
        case values[1]:
            directions.push(indexes[0])
            break;
        case values[2]:
            directions.push(indexes[2])
            directions.push(indexes[4])
            break;
        case values[3]:
            directions.push(indexes[1])
            directions.push(indexes[2])
            break;
        case values[4]:
            directions.push(indexes[2])
            directions.push(indexes[7])
            break;
        case values[5]:
            directions.push(indexes[7])
            directions.push(indexes[2])
            break;
        case values[6]:
            directions.push(indexes[0])
            directions.push(indexes[2])
            break;
        case values[7]:
            directions.push(indexes[2])
            directions.push(indexes[0])
            break;
        case values[8]:
            directions.push(indexes[3])
            directions.push(indexes[7])
            break;
        case values[9]:
            directions.push(indexes[7])
            directions.push(indexes[6])
            break;
        case values[10]:
            directions.push(indexes[0])
            directions.push(indexes[7])
            break;
        case values[11]:
            directions.push(indexes[7])
            directions.push(indexes[0])
            break;
        case values[12]:
            directions.push(indexes[7])
            directions.push(indexes[5])
            break;
        case values[13]:
            directions.push(indexes[5])
            directions.push(indexes[7])
            break;
        case values[14]:
            directions.push(indexes[0])
            directions.push(indexes[1])
            break;
        case values[15]:
            directions.push(indexes[4])
            directions.push(indexes[0])
            break;
        case values[16]:
            directions.push(indexes[6])
            directions.push(indexes[4])
            break;
        case values[17]:
            directions.push(indexes[1])
            directions.push(indexes[3])
            break;
        case values[18]:
            directions.push(indexes[0])
            directions.push(indexes[6])
            break;
        case values[19]:
            directions.push(indexes[3])
            directions.push(indexes[0])
            break;
        case values[20]:
            directions.push(indexes[5])
            directions.push(indexes[4])
            break;
        case values[21]:
            directions.push(indexes[1])
            directions.push(indexes[5])
            break;
        case values[22]:
            directions.push(indexes[1])
            directions.push(indexes[0])
            break;
        case values[23]:
            directions.push(indexes[0])
            directions.push(indexes[4])
            break;
        case values[24]:
            directions.push(indexes[3])
            directions.push(indexes[4])
            break;
        case values[25]:
            directions.push(indexes[1])
            directions.push(indexes[7])
            break;
        case values[26]:
            directions.push(indexes[1])
            directions.push(indexes[4])
            break;
        case values[27]:
            directions.push(indexes[6])
            directions.push(indexes[3])
            break;
        case values[28]:
            directions.push(indexes[2])
            break;
        case values[29]:
            directions.push(indexes[5])
            break;
        case values[30]:
            directions.push(indexes[6])
            directions.push(indexes[1])
            break;
        case values[31]:
            directions.push(indexes[4])
            directions.push(indexes[3])
            break;
        case values[32]:
            directions.push(indexes[7])
            directions.push(indexes[1])
            break;
        case values[33]:
            directions.push(indexes[7])
            directions.push(indexes[4])
            break;
        case values[34]:
            directions.push(indexes[5])
            directions.push(indexes[0])
            break;
        case values[35]:
            directions.push(indexes[0])
            directions.push(indexes[5])
            break;
        case values[36]:
            directions.push(indexes[3])
            directions.push(indexes[5])
            break;
        case values[37]:
            directions.push(indexes[5])
            directions.push(indexes[6])
            break;
        case values[38]:
            directions.push(indexes[2])
            directions.push(indexes[1])
            break;
        case values[39]:
            directions.push(indexes[4])
            directions.push(indexes[2])
            break;
        case values[40]:
            directions.push(indexes[1])
            directions.push(indexes[6])
            break;
        case values[41]:
            directions.push(indexes[3])
            directions.push(indexes[4])
            break;
        case values[42]:
            directions.push(indexes[6])
            directions.push(indexes[7])
            break;
        case values[43]:
            directions.push(indexes[7])
            directions.push(indexes[3])
            break;
        case values[44]:
            directions.push(indexes[6])
            directions.push(indexes[0])
            break;
        case values[45]:
            directions.push(indexes[0])
            directions.push(indexes[3])
            break;
        case values[46]:
            directions.push(indexes[2])
            directions.push(indexes[6])
            break;
        case values[47]:
            directions.push(indexes[2])
            directions.push(indexes[3])
            break;
        case values[48]:
            directions.push(indexes[6])
            directions.push(indexes[5])
            break;
        case values[49]:
            directions.push(indexes[5])
            directions.push(indexes[3])
            break;
        case values[50]:
            directions.push(indexes[4])
            directions.push(indexes[4])
            break;
        case values[51]:
            directions.push(indexes[1])
            break;
        case values[52]:
            directions.push(indexes[3])
            directions.push(indexes[1])
            break;
        case values[53]:
            directions.push(indexes[4])
            directions.push(indexes[6])
            break;
        case values[54]:
            directions.push(indexes[4])
            directions.push(indexes[5])
            break;
        case values[55]:
            directions.push(indexes[5])
            directions.push(indexes[1])
            break;
        case values[56]:
            directions.push(indexes[3])
            directions.push(indexes[3])
            break;
        case values[57]:
            directions.push(indexes[6])
            directions.push(indexes[6])
            break;
        case values[58]:
            directions.push(indexes[3])
            directions.push(indexes[2])
            break;
        case values[59]:
            directions.push(indexes[2])
            directions.push(indexes[6])
            break;
        case values[60]:
            directions.push(indexes[3])
            directions.push(indexes[6])
            break;
        case values[61]:
            directions.push(indexes[4])
            directions.push(indexes[1])
            break;
        case values[62]:
            directions.push(indexes[2])
            directions.push(indexes[5])
            break;
        case values[63]:
            directions.push(indexes[5])
            directions.push(indexes[2])
            break;
    }

    printBusinessesInSector(directions[0]);
    directions[1] && printBusinessesInSector(directions[1]);
})()