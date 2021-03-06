Ext.define('HisnulMuslim.store.ChaptersStore', {
    extend: 'Ext.data.Store',
    xtype: 'chaptersstore',

    requires: [
        'HisnulMuslim.model.Chapter'],

    config: {
        model: 'HisnulMuslim.model.Chapter',
        sorters: 'id',
        data: [{
            "id": 131,
            "title": "General and beneficent rules",
            "duas": [{
                "id": 267,
                "meaning": "When night falls, restrain your children (from going out) because at such time the devils spread about. After a period of time has passed, let them be. Shut your doors and mention AllahÂ’s name, for verily the devil does not open a shut door, tie up your water-skins and mention AllahÂ’s name, cover your vessels with anything and mention AllahÂ’s name and put out your lamps.",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 130,
            "title": "How the Prophet (saws) made tasbeeh",
            "duas": [{
                "id": 266,
                "meaning": "[AAabdullah Ibn AAamr said : I saw the Prophet (saws)make tasbeeh with his right hand.]<br ?><br ?>",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 129,
            "title": "Excellence of remembrance and glorification of Allah",
            "duas": [{
                "id": 254,
                "meaning": "How perfect Allah is and I praise Him.[one hundred times daily]",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1583;&#1616;&#1607;&#1616;",
                "transliteration": "Sub<u>h</u>ana l-lahi wa bi-<u>h</u>amdihi. (100 fois)",
                "audio": "audio/254.mp3"
            }, {
                "id": 255,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise and He is over all things omnipotent. [ten times]",
                "arabic": "&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615; &#1604;&#1614;&#1575; &#1588;&#1614;&#1585;&#1616;&#1610;&#1603;&#1614; &#1604;&#1614;&#1607;&#1615;&#1548; &#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1618;&#1603;&#1615; &#1608;&#1614;&#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1614;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1583;&#1610;&#1585;&#1612;",
                "transliteration": "La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-hamdu, wa huwa <sup>c</sup>ala kulli shay'in qadir. (10 fois)",
                "audio": "audio/255.mp3"
            }, {
                "id": 256,
                "meaning": "[Aboo Hurayrah reported that the Messenger of Allah (saws) said : (There are) two words, (which are) light on the tongue, heavy on the scale and beloved to The Most Gracious :]How perfect Allah is and I praise Him. How perfect Allah is, The Supreme.<br ?>",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1583;&#1616;&#1607;&#1616; &#1608;&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1616;&#1610;&#1605;&#1616;",
                "transliteration": "Sub<u>h</u>ana l-lahi wa bi-<u>h</u>amdihi. Sub<u>h</u>ana l-lahi-l-<sup>c</sup>a<u>z</u>im.",
                "audio": "audio/256.mp3"
            }, {
                "id": 257,
                "meaning": "[Aboo Hurayrah reported that the Messenger of Allah (saws)said :  Saying ... :] How perfect Allah is, and all praise is for Allah. None has the right to be worshipped except Allah, and Allah is the greatest. [...is more beloved to me than everything the sun has risen over.]<br ?>",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616;&#1548; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1615;",
                "transliteration": "Sub<u>h</u>ana l-lahi, wa-l-<u>h</u>amdu li-l-lahi, wa la ilaha illa l-lahu, wa l-lahu akbar.",
                "audio": "audio/257.mp3"
            }, {
                "id": 258,
                "meaning": "How perfect Allah is and I praise Him. [one hundred times]",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;",
                "transliteration": "Sub<u>h</u>ana l-lahi. (100 fois)",
                "audio": "audio/258.mp3"
            }, {
                "id": 259,
                "meaning": "[Jabbir related that the Prophet (saws) said : Whoever says :] How perfect Allah is, The Supreme, and I praise Him. [...a palm tree is planted for him in paradise.]<br ?>",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1616;&#1610;&#1605;&#1616; &#1608;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1583;&#1616;&#1607;&#1616;",
                "transliteration": "Sub<u>h</u>ana l-lahi-l-<sup>c</sup>a<u>z</u>imi wa bi-<u>h</u>amdihi.",
                "audio": "audio/259.mp3"
            }, {
                "id": 260,
                "meaning": "There is no might nor power except with Allah.",
                "arabic": "&#1604;&#1614;&#1575; &#1581;&#1614;&#1608;&#1613;&#1604;&#1614; &#1608;&#1614;&#1604;&#1614;&#1575; &#1602;&#1615;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616;",
                "transliteration": "La <u>h</u>awla wa la quwwata illa bi-l-lahi.",
                "audio": "audio/260.mp3"
            }, {
                "id": 261,
                "meaning": "How perfect Allah is, and all praise is for Allah. None has the right to be worshipped except Allah, and Allah is the greatest.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1615;",
                "transliteration": "Sub<u>h</u>ana l-lahi, wa-l-<u>h</u>amdu li-l-lahi, wa la ilaha illa l-lahu, wa l-lahu akbar.",
                "audio": "audio/261.mp3"
            }, {
                "id": 262,
                "meaning": "None has the right to be worshipped except Allah, alone without partener. Allah is most great and much praise is for Allah. How perfect Allah is, Lord of the worlds. There is no might nor power except with Allah, The Exalted in might, The Wise.<br /> O Allah, forgive me, have mercy upon me, guide me and grant me sustenance.",
                "arabic": "&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615; &#1604;&#1614;&#1575; &#1588;&#1614;&#1585;&#1616;&#1610;&#1603;&#1614; &#1604;&#1614;&#1607;&#1615;&#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1615; &#1603;&#1614;&#1576;&#1610;&#1585;&#1575;&#1614; &#1608;&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1603;&#1614;&#1579;&#1610;&#1585;&#1575;&#1611;&#1548; &#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1593;&#1614;&#1575;&#1604;&#1614;&#1605;&#1610;&#1606;&#1614;&#1548; &#1604;&#1614;&#1575; &#1581;&#1614;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1614;&#1575; &#1602;&#1615;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1617;&#1575; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1593;&#1614;&#1586;&#1610;&#1586;&#1616; &#1575;&#1604;&#1618;&#1581;&#1614;&#1603;&#1616;&#1610;&#1605;&#1616;.&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1616;&#1610;&#1548; &#1608;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1606;&#1616;&#1610;&#1548; &#1608;&#1575;&#1607;&#1618;&#1583;&#1616;&#1606;&#1616;&#1610;&#1548; &#1608;&#1575;&#1585;&#1618;&#1586;&#1615;&#1602;&#1618;&#1606;&#1616;&#1610;",
                "transliteration": "La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu. Allahu akbaru kabiran, wa-l-<u>h</u>amdu li-l-lahi kathiran. Sub<u>h</u>ana l-lahi rabbi-l-<sup>c</sup>alamina. La <u>h</u>awla wa la quwwata illa bi-l-lahi-l-<sup>c</sup>azizi-l-<u>h</u>akim.<br /> Allahumma ghfir li, wa r<u>h</u>amni, wa hdini, wa rzuqni."
            }, {
                "id": 263,
                "meaning": "O Allah, forgive me, have mercy upon me, guide me, give me health and grant me sustenance.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1616; &#1604;&#1616;&#1610;&#1548; &#1608;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1606;&#1616;&#1610;&#1548; &#1608;&#1575;&#1607;&#1618;&#1583;&#1616;&#1606;&#1616;&#1610;&#1548; &#1608;&#1593;&#1614;&#1575;&#1601;&#1616;&#1606;&#1616;&#1610; &#1608;&#1575;&#1585;&#1618;&#1586;&#1615;&#1602;&#1618;&#1606;&#1616;&#1610;",
                "transliteration": "Allahumma ghfir li, wa r<u>h</u>amni, wa hdini, wa <sup>c</sup>afini, wa rzuqni.",
                "audio": "audio/263.mp3"
            }, {
                "id": 264,
                "meaning": "All praise is for Allah.<br ?>None has the right to be worshipped except Allah.",
                "arabic": "&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616;.&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615;",
                "transliteration": "Al <u>h</u>amdu li-l-lah.<br ?>La ilaha illa l-lah.",
                "audio": "audio/264.mp3"
            }, {
                "id": 265,
                "meaning": "How perfect Allah is, and all praise is for Allah. None has the right to be worshipped except Allah, and Allah is the greatest. There is no might nor power except with Allah.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616;&#1548; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1614;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1615; &#1608;&#1614;&#1604;&#1614;&#1575; &#1581;&#1614;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1614;&#1575; &#1602;&#1615;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1604;&#1617;&#1614;&#1575; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616;",
                "transliteration": "Sub<u>h</u>ana l-lahi, wa-l-<u>h</u>amdu li-l-lahi, wa la ilaha illa l-lahu, wa l-lahu akbaru, wa la <u>h</u>awla wa la quwwata illa bi-l-lahi.",
                "audio": "audio/265.mp3"
            }]
        }, {
            "id": 128,
            "title": "Seeking forgiveness and repentance",
            "duas": [{
                "id": 248,
                "meaning": "[The Messenger of Allah (saws) said : 'By Allah, I seek forgiveness and repent to Allah, more than seventy times a day.']",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 249,
                "meaning": "[The Messenger of Allah (saws) said : Â‘O People, Repent! Verily I repent to Allah, a hundred times a day.']",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 250,
                "meaning": "I seek AllahÂ’s forgiveness, besides whom, none has the right to be worshipped except He, The Ever Living, The Self-Subsisting and Supporter of all, and I turn to Him in repentance.",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1604;&#1607;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1604;&#1617;&#1614;&#1575; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1581;&#1614;&#1610;&#1617;&#1615; &#1575;&#1604;&#1602;&#1614;&#1610;&#1617;&#1608;&#1615;&#1605;&#1615; &#1608;&#1571;&#1614;&#1578;&#1615;&#1608;&#1576;&#1615; &#1573;&#1616;&#1604;&#1614;&#1610;&#1607;&#1616;",
                "transliteration": "Astaghfiru l-laha-l-<sup>c</sup>a<u>z</u>ima l-ladhi la ilaha illa huwa-l-<u>h</u>ayyu-l-qayyÃ»mu, wa atÃ»bu ilayhi.",
                "audio": "audio/250.mp3"
            }, {
                "id": 251,
                "meaning": "[The Messenger of Allah (saws) said : Â‘The nearest the Lord comes to His servant is in the middle of the night, so if you are able to be of those who remember Allah at that time, then be so.']",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 252,
                "meaning": "[The Messenger of Allah (saws) said : Â‘The nearest a servant is to his Lord is when he is prostrating, so supplicate much therein.']",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 253,
                "meaning": "[The Messenger of Allah (saws) said : Â‘Verily my heart becomes preoccupied, and verily I seek AllahÂ’s forgiveness a hundred times a day.']",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 127,
            "title": "To ward off the deception of the Obstinate Shaytans",
            "duas": [{
                "id": 247,
                "meaning": "I take refuge within AllahÂ’s perfect words which no righteous or unrighteous person can transgress, from all the evil that He has created, made and originated. (I take refuge) from the evil that descends from the sky and the evil that rises up to it. (I take refuge) from the evil that is spread on Earth and the evil that springs from her, and I take refuge from the evil of the tribulations of night and day, and the evil of one who visits at night except the one who brings good, O Merciful One.",
                "arabic": "&#1571;&#1614;&#1593;&#1615;&#1608;&#1584;&#1615; &#1576;&#1603;&#1614;&#1604;&#1616;&#1605;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1578;&#1617;&#1614;&#1575;&#1605;&#1617;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1617;&#1614;&#1578;&#1616;&#1610; &#1604;&#1614;&#1575; &#1610;&#1615;&#1580;&#1614;&#1575;&#1608;&#1616;&#1586;&#1615;&#1607;&#1615;&#1606;&#1617;&#1614; &#1576;&#1614;&#1585;&#1617;&#1612; &#1608;&#1604;&#1614;&#1575; &#1601;&#1614;&#1575;&#1580;&#1585;&#1612; &#1605;&#1616;&#1606;&#1618; &#1588;&#1617;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1582;&#1614;&#1604;&#1602;&#1614;&#1548; &#1608;&#1576;&#1614;&#1585;&#1614;&#1571;&#1614; &#1608;&#1584;&#1614;&#1585;&#1614;&#1571;&#1614;&#1548; &#1608;&#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1610;&#1614;&#1606;&#1618;&#1586;&#1616;&#1604;&#1615; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1569;&#1616; &#1608;&#1616;&#1605;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1610;&#1614;&#1593;&#1618;&#1585;&#1615;&#1580;&#1615; &#1601;&#1610;&#1607;&#1614;&#1575;&#1548; &#1608;&#1605;&#1616;&#1606; &#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1584;&#1614;&#1585;&#1614;&#1571;&#1614; &#1601;&#1610; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1610;&#1614;&#1582;&#1618;&#1585;&#1615;&#1580;&#1615; &#1605;&#1616;&#1606;&#1618;&#1607;&#1614;&#1575;&#1548; &#1608;&#1616;&#1605;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1601;&#1616;&#1578;&#1614;&#1606;&#1616; &#1575;&#1604;&#1604;&#1617;&#1614;&#1610;&#1618;&#1604;&#1616; &#1608;&#1575;&#1604;&#1606;&#1617;&#1614;&#1607;&#1575;&#1585;&#1616;&#1548; &#1608;&#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1603;&#1615;&#1604;&#1617;&#1616; &#1591;&#1575;&#1585;&#1616;&#1602;&#1613; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1591;&#1614;&#1575;&#1585;&#1616;&#1602;&#1575;&#1611; &#1610;&#1614;&#1591;&#1618;&#1585;&#1615;&#1602;&#1615; &#1576;&#1582;&#1614;&#1610;&#1618;&#1585;&#1613; &#1610;&#1614;&#1575; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1615;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-kalimati l-lahi t-tammati l-lati la yujawaizuhunna barrun wa la farijun min sharri ma khalaqa wa bara'a wa dhara'a, wa min sharri ma ya<sup>c</sup>rujuhu fiha, wa min sharri ma dhara'a fi-l-ar<u>d</u>i wa min sharri ma yakhruju minha, wa min sharri fitani l-layli wa n-nahari, wa min sharri kulli <u>t</u>ariqin illa <u>t</u>ariqan ya<u>t</u>ruqu bi-khayrin ya ra<u>h</u>man.",
                "audio": "audio/247.mp3"
            }]
        }, {
            "id": 126,
            "title": "When slaughtering or offering a sacrifice",
            "duas": [{
                "id": 246,
                "meaning": "In the name of Allah, and Allah is the greatest. O Allah, (it is) from You and belongs to You, O Allah, accept this from me.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1615; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1605;&#1616;&#1606;&#1618;&#1603;&#1614; &#1608;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1578;&#1614;&#1602;&#1614;&#1576;&#1617;&#1614;&#1604;&#1618; &#1605;&#1616;&#1606;&#1617;&#1616;&#1610;",
                "transliteration": "Bismi l-lahi wa l-lahu akbar. [Allahumma minka wa laka]. Allahumma taqabbal minni.",
                "audio": "audio/246.mp3"
            }]
        }, {
            "id": 125,
            "title": "When startled",
            "duas": [{
                "id": 245,
                "meaning": "None has the right to be worshipped except Allah.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;",
                "transliteration": "La ilaha illa l-lahu.",
                "audio": "audio/245.mp3"
            }]
        }, {
            "id": 124,
            "title": "When in fear of afflicting something or someone with one&#146;s eye",
            "duas": [{
                "id": 244,
                "meaning": "[If you see something from your brother, yourself or wealth which you find impressing, then invoke blessings for it, for the evil eye is indeed true.]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1607;",
                "transliteration": "Allahumma barik <sup>c</sup>alayhi."
            }]
        }, {
            "id": 123,
            "title": "When feeling some pain in the body",
            "duas": [{
                "id": 243,
                "meaning": "In the name of Allah. (three times)<br /> I take refuge in Allah and within His omnipotence from the evil that I feel and am wary of. (seven times)",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; (&#1579;&#1614;&#1604;&#1575;&#1579;&#1575;&#1611;( &#1571;&#1614;&#1593;&#1615;&#1608;&#1584;&#1615; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1602;&#1615;&#1583;&#1618;&#1585;&#1614;&#1578;&#1616;&#1607;&#1616; &#1605;&#1614;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1614;&#1575; &#1571;&#1614;&#1580;&#1616;&#1583;&#1615; &#1608;&#1614;&#1571;&#1615;&#1581;&#1614;&#1575;&#1584;&#1616;&#1585;&#1615;. (&#1587;&#1576;&#1593; &#1605;&#1585;&#1575;&#1578;)",
                "transliteration": "Bismi l-lahi (3 fois), puis : A<sup>c</sup>Ã»dhu bi-l-lahi wa qudratihi min sharri ma ajidu wa u<u>h</u>adhiru (7 fois).",
                "audio": "audio/243.mp3"
            }]
        }, {
            "id": 122,
            "title": "Upon receiving pleasant news",
            "duas": [{
                "id": 242,
                "meaning": "[The Prophet (saws) would prostrate in gratitude to Allah upon receiving news which pleased him or which caused pleasure.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 121,
            "title": "At times of amazement and delight",
            "duas": [{
                "id": 240,
                "meaning": "How perfect Allah is.",
                "arabic": " &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Sub<u>h</u>ana l-lah.",
                "audio": "audio/240.mp3"
            }, {
                "id": 241,
                "meaning": "Allah is the greatest.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;",
                "transliteration": "Allahu akbar.",
                "audio": "audio/241.mp3"
            }]
        }, {
            "id": 120,
            "title": "When throwing each pebble at the Jamarat",
            "duas": [{
                "id": 239,
                "meaning": "[Every time the Prophet (saws) threw a pebble at any of the three jamarat, he would say :] Allah is the greatest. [Â…on completion of the first jamarah, he advanced a little, stood facing the qiblah, raised his hands and supplicated. He also did this after the second jamarah but not the third.]",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1618;&#1576;&#1614;&#1585;",
                "transliteration": "Allahu akbar.",
                "audio": "audio/239.mp3"
            }]
        }, {
            "id": 119,
            "title": "Remembrance at Muzdalifa",
            "duas": [{
                "id": 238,
                "meaning": "[Jabir t said : 'He (saws) rode Al-Qaswa until he reached Al-MashAAar Al-Haram, he then faced the qiblah, supplicated to Allah, and extoled His greatness and oneness. He stood until the sun shone but left before it rose.'}",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 118,
            "title": "The Day of 'Arafah",
            "duas": [{
                "id": 237,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all praise and sovereignty and He is over all things omnipotent.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1600;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1600;&#1583;&#1548; &#1608;&#1607;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1610;&#1569;&#1613; &#1602;&#1583;&#1610;&#1585;",
                "transliteration": "La ilaha illa l-lahu wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu l<u>h</u>amdu, wa huwa <sup>c</sup>ala kulli shayÂ’in qadir.",
                "audio": "audio/237.mp3"
            }]
        }, {
            "id": 117,
            "title": "When at Mount Safa and Mount Marwah",
            "duas": [{
                "id": 236,
                "meaning": "Indeed Safa and Marwah are from the places of worship of AllahÂ…<br /> None has the right to be worshipped except Allah, Allah is the greatest.<br /> None has the right to be worshipped except Allah, alone, without partner.To Him belongs all sovereignty and praise and He is over all things amnipotent. None has the right to be worshipped except Allah alone. He fulfilled His promise, aided His Servant and single-handedly defeated the allies.",
                "arabic": "&#1573;&#1616;&#1606;&#1617;&#1614; &#1575;&#1604;&#1589;&#1617;&#1614;&#1601;&#1614;&#1575; &#1608;&#1575;&#1604;&#1605;&#1614;&#1585;&#1618;&#1608;&#1614;&#1577;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1593;&#1575;&#1574;&#1585;&#1616; &#1575;&#1604;&#1604;&#1607;.  &#1571;&#1614;&#1576;&#1618;&#1583;&#1614;&#1571;&#1615; &#1576;&#1616;&#1605;&#1614;&#1575; &#1576;&#1614;&#1583;&#1614;&#1571;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1576;&#1616;&#1607;&#1616;.  &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615; &#1604;&#1614;&#1575; &#1588;&#1614;&#1585;&#1616;&#1610;&#1603;&#1614; &#1604;&#1614;&#1607;&#1615;&#1548; &#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1618;&#1603;&#1615; &#1608;&#1614;&#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1614;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1583;&#1610;&#1585;&#1612;&#1548; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615; &#1571;&#1614;&#1606;&#1618;&#1580;&#1614;&#1586;&#1614; &#1608;&#1614;&#1593;&#1618;&#1583;&#1614;&#1607;&#1615;&#1548; &#1608;&#1614;&#1606;&#1614;&#1589;&#1614;&#1585;&#1614; &#1593;&#1614;&#1576;&#1618;&#1583;&#1614;&#1607;&#1615; &#1608;&#1614;&#1607;&#1614;&#1586;&#1614;&#1605;&#1614; &#1575;&#1604;&#1571;&#1614;&#1581;&#1618;&#1586;&#1614;&#1575;&#1576;&#1614; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615;",
                "transliteration": "Vers <u>S</u>afa : Inna <u>s</u>-<u>s</u>afa wa-l-marwata min sha<sup>c</sup>a'iri l-lah. Abda'u bima badaa l-lahu bihi.<br /> Vers la Ka<sup>c</sup>ba : La ilaha illa l-lahu, Allahu akbar, La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu, wa huwa <sup>c</sup>ala kulli shay'in qadirun. La ilaha illa l-lahu wa<u>h</u>dahu. Anjaza wa<sup>c</sup>dahu, wa na<u>s</u>ara <sup>c</sup>abdahu, wa hamaza-l-a<u>h</u>zaba wa<u>h</u>dahu."
            }]
        }, {
            "id": 116,
            "title": "Between the Yemeni corner and the black stone",
            "duas": [{
                "id": 235,
                "meaning": "O our Lord, grant us the best in this life and the best in the next life, and protect us from the punishment of the Fire.",
                "arabic": "&#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1570;&#1578;&#1616;&#1606;&#1614;&#1575; &#1601;&#1610; &#1575;&#1604;&#1583;&#1617;&#1615;&#1606;&#1618;&#1610;&#1614;&#1575; &#1581;&#1587;&#1614;&#1606;&#1614;&#1577;&#1611; &#1608;&#1601;&#1610; &#1575;&#1604;&#1570;&#1582;&#1616;&#1585;&#1614;&#1577;&#1616; &#1581;&#1587;&#1614;&#1606;&#1577;&#1611; &#1608;&#1602;&#1616;&#1606;&#1614;&#1575; &#1593;&#1584;&#1614;&#1575;&#1576;&#1614; &#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1585;&#1616;",
                "transliteration": "Rabbana atina fi d-dunya <u>h</u>asanatan wa fi-l-akhirati <u>h</u>asanatan wa qina <sup>c</sup>adhaba n-nar.",
                "audio": "audio/235.mp3"
            }]
        }, {
            "id": 115,
            "title": "The Takbir passing the black stone",
            "duas": [{
                "id": 234,
                "meaning": "Allah is the greatest.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;",
                "transliteration": "Allahu akbar.",
                "audio": "audio/234.mp3"
            }]
        }, {
            "id": 114,
            "title": "The Talbiya for the one doing Haj or 'Omra",
            "duas": [{
                "id": 233,
                "meaning": "Here I am O Allah, (in response to Your call), here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
                "arabic": "&#1604;&#1614;&#1576;&#1617;&#1614;&#1610;&#1618;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1604;&#1614;&#1576;&#1617;&#1614;&#1610;&#1618;&#1603;&#1614;&#1548; &#1604;&#1614;&#1576;&#1617;&#1614;&#1610;&#1618;&#1603;&#1614; &#1604;&#1575;&#1614; &#1588;&#1614;&#1585;&#1616;&#1610;&#1603;&#1614; &#1604;&#1614;&#1603;&#1614; &#1604;&#1614;&#1576;&#1617;&#1614;&#1610;&#1618;&#1603;&#1614;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1614; &#1608;&#1575;&#1604;&#1606;&#1617;&#1616;&#1593;&#1618;&#1605;&#1614;&#1577;&#1616;&#1548; &#1604;&#1614;&#1603;&#1614; &#1608;&#1575;&#1604;&#1605;&#1615;&#1604;&#1618;&#1603;&#1615;&#1548; &#1604;&#1614;&#1575; &#1588;&#1614;&#1585;&#1616;&#1610;&#1603;&#1614; &#1604;&#1614;&#1603;&#1614;",
                "transliteration": "Labbayka l-lahumma labbayka. La sharika laka labbayka. Inna-l-<u>h</u>amda wa n-ni<sup>c</sup>mata laka wa-l-mulku. La sharika laka.",
                "audio": "audio/233.mp3"
            }]
        }, {
            "id": 113,
            "title": "For the one that have been praised",
            "duas": [{
                "id": 232,
                "meaning": "O Allah, don't punish me for what they say, forgive me for what they don't know, (and make me better than what they think of me)",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1604;&#1575;&#1614; &#1578;&#1615;&#1572;&#1614;&#1575;&#1582;&#1616;&#1584;&#1618;&#1606;&#1616;&#1610; &#1576;&#1616;&#1605;&#1614;&#1575; &#1610;&#1614;&#1602;&#1615;&#1608;&#1604;&#1615;&#1608;&#1606;&#1614;, &#1608;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1616;&#1610; &#1605;&#1614;&#1575; &#1604;&#1575;&#1614; &#1610;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615;&#1608;&#1606;&#1614; [&#1608;&#1614; &#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618;&#1606;&#1616;&#1610; &#1582;&#1614;&#1610;&#1618;&#1585;&#1611;&#1575; &#1605;&#1616;&#1605;&#1617;&#1614;&#1575; &#1610;&#1614;&#1590;&#1615;&#1606;&#1617;&#1615;&#1608;&#1606;]",
                "transliteration": "Allahumma la tu'akhidhni bi-ma yaqÃ»lÃ»na, wa ghfir li ma la ya<sup>c</sup>lamun, [wa j<sup>c</sup>alni khayran mimma ya<u>z</u>unnÃ»n].",
                "audio": "audio/232.mp3"
            }]
        }, {
            "id": 112,
            "title": "The etiquette of praising a fellow Muslim",
            "duas": [{
                "id": 231,
                "meaning": "I deem so-and-so to beÂ…and Allah is his reckonerÂ…and I donÂ’t praise anyone, putting it (i.e. my praising) forward, in front of AllahÂ’s commendation, however I assume him so and soÂ’Â…if he knows that of him.",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 111,
            "title": "For one you have insulted",
            "duas": [{
                "id": 230,
                "meaning": "O Allah, to any believer whom I have insulted, let that be cause to draw him near to You on the Day of Resurrection.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1605;&#1617;&#1614; &#1601;&#1571;&#1614;&#1610;&#1617;&#1615;&#1605;&#1614;&#1575; &#1605;&#1615;&#1572;&#1618;&#1605;&#1616;&#1606;&#1613; &#1587;&#1614;&#1576;&#1614;&#1576;&#1618;&#1578;&#1615;&#1607;&#1615; &#1601;&#1614;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618; &#1584;&#1614;&#1604;&#1616;&#1603;&#1614; &#1604;&#1607;&#1615; &#1602;&#1615;&#1585;&#1618;&#1576;&#1577;&#1611; &#1573;&#1604;&#1610;&#1603;&#1614; &#1610;&#1614;&#1608;&#1618;&#1605;&#1614; &#1575;&#1604;&#1602;&#1616;&#1610;&#1614;&#1575;&#1605;&#1577;&#1616;",
                "transliteration": "Allahumma fa-ayyuma mu'minin sababtuhu, fa-j<sup>c</sup>al dhalika lahu qurbatan ilayka yawma-l-qiyamati.",
                "audio": "audio/230.mp3"
            }]
        }, {
            "id": 110,
            "title": "Upon hearing the barking of dogs at night",
            "duas": [{
                "id": 229,
                "meaning": "[If you hear the barking of dogs or the braying of asses at night, seek refuge in Allah for they see what you do not.]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605; ",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/229.mp3"
            }]
        }, {
            "id": 109,
            "title": "Upon hearing a rooster crow or the braying of an ass",
            "duas": [{
                "id": 228,
                "meaning": "[If you hear the crow of a rooster, ask Allah for his bounty for it has seen an angel and if you hear the braying of an ass, seek refuge in Allah for it has seen a devil.]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605; ",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/228.mp3"
            }]
        }, {
            "id": 108,
            "title": "Returning a greeting to a misbeliever",
            "duas": [{
                "id": 227,
                "meaning": "And upon you.",
                "arabic": "&#1608;&#1614; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1603;&#1615;&#1605;",
                "transliteration": "Wa <sup>c</sup>alaykum.",
                "audio": "audio/227.mp3"
            }]
        }, {
            "id": 107,
            "title": "Excellence of spreading the Islamic greeting",
            "duas": [{
                "id": 224,
                "meaning": "[The Messenger of Allah (saws) said : You shall not enter paradise until you believe, and you shall not believe until you love one another. Shall I not inform you of something, if you were to act upon it, you will indeed achieve mutual love for one another? Spread the greeting amongst yourselves.]",
                "arabic": "&#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1603;&#1615;&#1605;",
                "transliteration": "As-salamu <sup>c</sup>alaykum."
            }, {
                "id": 225,
                "meaning": "[AAammar t said : Three characteristics, whoever combines them, has completed his faith: to be just, to spread greetings to all people and to spend (charitably) out of the little you have.]",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 226,
                "meaning": "[AAabdullah Ibn AAamr t reported that a man asked the Prophet (saws) : Â‘Which Islam is the best?Â’. He (saws) replied : 'Feed (the poor), and greet those whom you know as well as those whom you do not.Â’]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 106,
            "title": "Excellence of sending prayers upon the Prophet (saws)",
            "duas": [{
                "id": 219,
                "meaning": "[The Prophet (saws) said : Whoever sends a prayer upon me, Allah sends ten upon him.]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1589;&#1614;&#1604;&#1617;&#1616; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1589;&#1614;&#1604;&#1617;&#1614;&#1610;&#1600;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583;",
                "transliteration": "Allahumma <u>s</u>alli <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama <u>s</u>allayta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. Allahumma barik <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama barakta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. ",
                "audio": "audio/219.mp3"
            }, {
                "id": 220,
                "meaning": "The Prophet (saws) said : Do not take my grave as a place of habitual ceremony. Send prayers upon me, for verily your prayers reach me wherever you are.]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1589;&#1614;&#1604;&#1617;&#1616; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1589;&#1614;&#1604;&#1617;&#1614;&#1610;&#1600;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583;",
                "transliteration": "Allahumma <u>s</u>alli <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama <u>s</u>allayta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. Allahumma barik <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama barakta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. ",
                "audio": "audio/220.mp3"
            }, {
                "id": 221,
                "meaning": "[The Prophet (saws) said : A miser is one whom when I am mentioned to him, fails to send prayers upon me.]",
                "arabic": "&#8207;&#1589;&#1614;&#1604;&#1609; &#1575;&#1604;&#1604;&#1607;&#1615; &#1593;&#1614;&#1604;&#1610;&#1618;&#1607;&#1616; &#1608;&#1614;&#1587;&#1614;&#1604;&#1605;&#1614;",
                "transliteration": "<u>S</u>alla l-lahu <sup>c</sup>alayhi wa sallam.",
                "audio": "audio/221.mp3"
            }, {
                "id": 222,
                "meaning": "The Prophet (saws) : &quot;Allah exalted He is has got angels scouring the earth to spread the salutations of my community.&quot;",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 223,
                "meaning": "The Prophet (saws) said : Every time somebody greets me, Allah gives me back my soul for me to answer this greeting.&quot;",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 105,
            "title": "What to say upon receiving pleasing or displeasing news",
            "duas": [{
                "id": 218,
                "meaning": "All Praise is for Allah by whose favour good works are accomplished.<br /> All Praise is for Allah in all circumstances.",
                "arabic": "&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1617;&#1614;&#1584;&#1610; &#1576;&#1616;&#1606;&#1616;&#1600;&#1593;&#1618;&#1605;&#1614;&#1578;&#1616;&#1607;&#1616; &#1578;&#1614;&#1578;&#1616;&#1600;&#1605;&#1617;&#1615; &#1575;&#1604;&#1589;&#1617;&#1600;&#1575;&#1604;&#1616;&#1581;&#1575;&#1578; / &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1593;&#1604;&#1609; &#1603;&#1615;&#1600;&#1604;&#1617;&#1616; &#1581;&#1575;&#1604;",
                "transliteration": "Al <u>h</u>amdu li-l-lahi l-ladhi bi-ni<sup>c</sup>matihi tatimmu <u>s</u>-<u>s</u>ali<u>h</u>atu.<br /> Al <u>h</u>amdu li-l-lahi <sup>c</sup>ala kulli <u>h</u>alin.",
                "audio": "audio/218.mp3"
            }]
        }, {
            "id": 104,
            "title": "While returning from travel",
            "duas": [{
                "id": 217,
                "meaning": "Allah is the greatest, Allah is the greatest, Allah is the greatest.<br /> None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. We return, repent, worship and praise our Lord. Allah fulfilled His promise, aided His Servant, and single-handedly defeated the allies.",
                "arabic": "&#1575; &#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1575; &#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1575; &#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;]] &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1604;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1548; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1600;&#1583;&#1610;&#1585;&#1548; &#1570;&#1610;&#1616;&#1576;&#1600;&#1608;&#1606;&#1614; &#1578;&#1575;&#1574;&#1616;&#1576;&#1600;&#1608;&#1606;&#1614; &#1593;&#1575;&#1576;&#1616;&#1600;&#1583;&#1608;&#1606;&#1614; &#1604;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1606;&#1575; &#1581;&#1600;&#1575;&#1605;&#1616;&#1600;&#1583;&#1608;&#1606;&#1548; &#1589;&#1614;&#1583;&#1614;&#1602;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;&#1548; &#1608;&#1614;&#1606;&#1614;&#1589;&#1614;&#1600;&#1585;&#1614; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1614;&#1607;&#1548; &#1608;&#1614;&#1607;&#1614;&#1586;&#1614;&#1605;&#1614; &#1575;&#1604;&#1571;&#1614;&#1581;&#1618;&#1600;&#1586;&#1575;&#1576;&#1614; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;",
                "transliteration": "Chaque fois que l'on atteint un point Ã©levÃ© : Allahu akbar (trois fois).<br /> Dire ensuite : La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu, wa huwa <sup>c</sup>ala kulli shay'in qadirun. ayibÃ»na, ta'ibÃ»na, <sup>c</sup>abidÃ»na, li-rabbina <u>h</u>amidÃ»n.<br /> <u>S</u>adaqa l-lahu wa<sup>c</sup>dahu, wa na<u>s</u>ara <sup>c</sup>abdahu wa hazama-l-a<u>h</u>zaba wa<u>h</u>dahu.",
                "audio": "audio/217.mp3"
            }]
        }, {
            "id": 103,
            "title": "Stopping or lodging somewhere",
            "duas": [{
                "id": 216,
                "meaning": "I take refuge in AllahÂ’s perfect words from the evil that He has created.",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614;&#1604;&#1616;&#1600;&#1605;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1578;&#1617;&#1600;&#1575;&#1605;&#1617;&#1575;&#1578;&#1616; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1582;&#1614;&#1604;&#1614;&#1600;&#1602;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-kalimati l-lahi t-tammati min sharri ma khalaq.",
                "audio": "audio/216.mp3"
            }]
        }, {
            "id": 102,
            "title": "Prayer of the traveller as dawn approaches",
            "duas": [{
                "id": 215,
                "meaning": "May a witness, be witness to our praise of Allah for His favours and bounties upon us. Our Lord, protect us, show favour on us and deliver us from every evil. I take refuge in Allah from the fire.",
                "arabic": "&#1587;&#1614;&#1605;&#1616;&#1600;&#1593;&#1614; &#1587;&#1600;&#1575;&#1605;&#1616;&#1593;&#1615; &#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1581;&#1615;&#1587;&#1618;&#1600;&#1606;&#1616; &#1576;&#1614;&#1604;&#1575;&#1574;&#1616;&#1600;&#1607;&#1616; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575;. &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1600;&#1575; &#1589;&#1600;&#1575;&#1581;&#1616;&#1576;&#1618;&#1600;&#1606;&#1575; &#1608;&#1614;&#1571;&#1614;&#1601;&#1618;&#1600;&#1590;&#1616;&#1604; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575; &#1593;&#1575;&#1574;&#1616;&#1584;&#1575;&#1611; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1585;",
                "transliteration": "Samma<sup>c</sup>a sami<sup>c</sup>un bi-<u>h</u>amdi l-lahi, wa <u>h</u>usni bala'ihi <sup>c</sup>alayna. Rabbana <u>s</u>a<u>h</u>ibna wa af<u>d</u>il <sup>c</sup>alayna <sup>c</sup>a'idhan bi-l-lahi mina n-nar.",
                "audio": "audio/215.mp3"
            }]
        }, {
            "id": 101,
            "title": "Remembrance while ascending or descending",
            "duas": [{
                "id": 214,
                "meaning": "[While ascending :] Allah is the greatest.<br ?>[and when descending :] How perfect Allah is.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585; / &#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607; ",
                "transliteration": "Lors d'une montÃ©e : Allahu akbar.<br ?>Lors d'une descente : Sub<u>h</u>anallah."
            }]
        }, {
            "id": 100,
            "title": "Supplication of the resident for the traveller",
            "duas": [{
                "id": 212,
                "meaning": "I place your religion, your faithfulness and the ends of your deeds in the trust of Allah.",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1600;&#1608;&#1618;&#1583;&#1616;&#1593;&#1615; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1614; &#1583;&#1610;&#1600;&#1606;&#1614;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1605;&#1575;&#1606;&#1614;&#1578;&#1614;&#1600;&#1603;&#1614;&#1548; &#1608;&#1614;&#1582;&#1614;&#1600;&#1608;&#1575;&#1578;&#1610;&#1600;&#1605;&#1614; &#1593;&#1614;&#1605;&#1614;&#1600;&#1604;&#1616;&#1603;",
                "transliteration": "Astawdi<sup>c</sup>u l-laha dinaka wa amanataka wa khawatima <sup>c</sup>amalika.",
                "audio": "audio/212.mp3"
            }, {
                "id": 213,
                "meaning": "May Allah endow you with taqwa, forgive your sins and facilitate all good for you, wherever you be.",
                "arabic": "&#1586;&#1614;&#1608;&#1617;&#1614;&#1583;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615; &#1575;&#1604;&#1578;&#1602;&#1618;&#1608;&#1609;&#1548; &#1608;&#1614;&#1594;&#1614;&#1601;&#1614;&#1600;&#1585;&#1614;&#1584;&#1614;&#1606;&#1618;&#1600;&#1576;&#1614;&#1603;&#1614;&#1548; &#1608;&#1614;&#1610;&#1614;&#1587;&#1617;&#1614;&#1600;&#1585;&#1614; &#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1581;&#1614;&#1610;&#1618;&#1600;&#1579;&#1615;&#1605;&#1575; &#1603;&#1615;&#1606;&#1618;&#1600;&#1578;",
                "transliteration": "Zawwadaka l-lahu t-taqwa, wa ghafara dhanbaka, wa yassara laka-l-khayra <u>h</u>aythu ma kunta.",
                "audio": "audio/213.mp3"
            }]
        }, {
            "id": 99,
            "title": "Supplication of the traveller for the resident",
            "duas": [{
                "id": 211,
                "meaning": "I place you in the trust of Allah, whose trust is never misplaced.",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1600;&#1608;&#1618;&#1583;&#1616;&#1593;&#1615;&#1603;&#1615;&#1600;&#1605;&#1615; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1610; &#1604;&#1575; &#1578;&#1614;&#1590;&#1600;&#1610;&#1593;&#1615; &#1608;&#1614;&#1583;&#1575;&#1574;&#1616;&#1593;&#1615;&#1600;&#1607;",
                "transliteration": "Astawdi<sup>c</sup>ukumu l-laha l-ladhi la ta<u>d</u>i<sup>c</sup>u wada'i<sup>c</sup>uhu.",
                "auidio": "audio/211.mp3"
            }]
        }, {
            "id": 98,
            "title": "When the mounted animal (or mean of transport) stumbles",
            "duas": [{
                "id": 210,
                "meaning": "In the name of Allah.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; ",
                "transliteration": "Bismillah.",
                "audio": "audio/210.mp3"
            }]
        }, {
            "id": 97,
            "title": "When entering the market",
            "duas": [{
                "id": 209,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise. He gives life and causes death, and He is living and does not die. In His hand is all good and He is over all things, omnipotent.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607; &#1608;&#1581;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1618;&#1600;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1548; &#1610;&#1615;&#1581;&#1618;&#1610;&#1600;&#1610; &#1608;&#1614;&#1610;&#1615;&#1605;&#1610;&#1600;&#1578;&#1615; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1581;&#1614;&#1610;&#1617;&#1612; &#1604;&#1575; &#1610;&#1614;&#1605;&#1600;&#1608;&#1578;&#1548; &#1576;&#1616;&#1610;&#1614;&#1600;&#1583;&#1616;&#1607;&#1616; &#1575;&#1604;&#1618;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1615; &#1608;&#1614;&#1607;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1610;&#1569;&#1613; &#1602;&#1583;&#1610;&#1585;",
                "transliteration": "La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu, yu<u>h</u>yi wa yumitu, wa huwa <u>h</u>ayyun la yamÃ»tu, bi-yadihi-l-khayru, wa huwa <sup>c</sup>ala kulli shay'in qadir.",
                "audio": "audio/209.mp3"
            }]
        }, {
            "id": 96,
            "title": "Upon entering a town or village",
            "duas": [{
                "id": 208,
                "meaning": "O Allah, Lord of the seven heavens and all that they envelop, Lord of the seven earths and all that they carry, Lord of the devils and all whom they misguide, Lord of the winds and all whom they whisk away. I ask You for the goodness of this village, the goodness of its inhabitants and for all the goodness found within it and I take refuge with You from the evil of this village, the evil of its inhabitants and from all the evil found within it.",
                "arabic": "&#1571;&#1604;&#1604;&#1617;&#1600;&#1607;&#1615;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1575;&#1604;&#1587;&#1617;&#1600;&#1576;&#1618;&#1593;&#1616; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1592;&#1618;&#1604;&#1614;&#1604;&#1614;&#1600;&#1606;&#1548; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1571;&#1614;&#1585;&#1575;&#1590;&#1610;&#1600;&#1606;&#1614; &#1575;&#1604;&#1587;&#1617;&#1600;&#1576;&#1618;&#1593;&#1616; &#1608;&#1614;&#1605;&#1575; &#1571;&#1602;&#1618;&#1604;&#1614;&#1604;&#1618;&#1600;&#1606;&#1548; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1600;&#1575;&#1591;&#1610;&#1606;&#1616; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1590;&#1618;&#1604;&#1614;&#1604;&#1618;&#1600;&#1606;&#1548; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1585;&#1617;&#1616;&#1610;&#1575;&#1581;&#1616; &#1608;&#1614;&#1605;&#1575; &#1584;&#1614;&#1585;&#1614;&#1610;&#1618;&#1600;&#1606;&#1548; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1607;&#1584;&#1607;&#1616; &#1575;&#1604;&#1618;&#1602;&#1614;&#1600;&#1585;&#1618;&#1610;&#1614;&#1577;&#1616; &#1608;&#1614;&#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616;&#1600;&#1607;&#1575;&#1548; &#1608;&#1614;&#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1605;&#1575; &#1601;&#1610;&#1607;&#1575;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616;&#1607;&#1575; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616;&#1600;&#1607;&#1575;&#1548; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1601;&#1610;&#1607;&#1575;",
                "transliteration": "Allahumma rabba s-samawati s-sab<sup>c</sup>i wa ma z<u>z</u>lalna, wa rabba-l-ara<u>d</u>ina s-sab<sup>c</sup>i wa ma aqlalna, wa rabba sh-shaya<u>t</u>ini wa ma a<u>d</u>lalna, wa rabba r-riya<u>h</u>i wa ma dharayna. As'alukakhayra hadhihi-l-qaryati wa khayra ahliha wa khayra ma fiha, wa a<sup>c</sup>Ã»dhu bika min sharriha wa sharri ahliha wa sharri ma fiha.",
                "audio": "audio/208.mp3"
            }]
        }, {
            "id": 95,
            "title": "For travel",
            "duas": [{
                "id": 207,
                "meaning": "Allah is the greatest, Allah is the greatest, Allah is the greatest, How perfect He is, The One Who has placed this (transport) at our service, and we ourselves would not have been capable of that, and to our Lord is our final destiny. O Allah, we ask You for birr and taqwa in this journey of ours, and we ask You for deeds which please You. O Allah, facilitate our journey and let us cover itÂ’s distance quickly. O Allah, You are The Companion on the journey and The Successor over the family, O Allah, I take refuge with You from the difficulties of travel, from having a change of hearts and being in a bad predicament, and I take refuge in You from an ill fated outcome with wealth and family. [upon returning the same supplication is recited with the following addition :] (We return, repent, worship and praise our Lord.)",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1576;&#1614;&#1585; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1576;&#1614;&#1585; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1576;&#1614;&#1585;&#1548; &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1610; &#1587;&#1614;&#1582;&#1617;&#1614;&#1600;&#1585;&#1614; &#1604;&#1614;&#1606;&#1575; &#1607;&#1584;&#1575; &#1608;&#1614;&#1605;&#1575; &#1603;&#1615;&#1606;&#1617;&#1575; &#1604;&#1614;&#1607;&#1615; &#1605;&#1615;&#1602;&#1618;&#1600;&#1585;&#1616;&#1606;&#1610;&#1606;&#1548; &#1608;&#1614;&#1573;&#1616;&#1606;&#1617;&#1575; &#1573;&#1616;&#1604;&#1609; &#1585;&#1614;&#1576;&#1617;&#1616;&#1606;&#1600;&#1575; &#1604;&#1614;&#1605;&#1615;&#1606;&#1618;&#1602;&#1614;&#1600;&#1604;&#1616;&#1576;&#1608;&#1606;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1575; &#1606;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1603;&#1614; &#1601;&#1610; &#1587;&#1614;&#1601;&#1614;&#1600;&#1585;&#1616;&#1606;&#1575; &#1607;&#1584;&#1575; &#1575;&#1604;&#1576;&#1616;&#1600;&#1585;&#1617;&#1614; &#1608;&#1614;&#1575;&#1604;&#1578;&#1617;&#1614;&#1600;&#1602;&#1618;&#1608;&#1609;&#1548; &#1608;&#1614;&#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1605;&#1614;&#1600;&#1604;&#1616; &#1605;&#1575; &#1578;&#1614;&#1600;&#1585;&#1618;&#1590;&#1609;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1607;&#1614;&#1608;&#1617;&#1616;&#1606;&#1618; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1606;&#1575; &#1587;&#1614;&#1601;&#1614;&#1585;&#1614;&#1606;&#1575; &#1607;&#1584;&#1575; &#1608;&#1614;&#1575;&#1591;&#1618;&#1608;&#1616; &#1593;&#1614;&#1606;&#1617;&#1575; &#1576;&#1615;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1589;&#1617;&#1600;&#1575;&#1581;&#1616;&#1576;&#1615; &#1601;&#1610; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1601;&#1614;&#1585;&#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1582;&#1614;&#1604;&#1600;&#1610;&#1601;&#1614;&#1577;&#1615; &#1601;&#1610; &#1575;&#1604;&#1571;&#1607;&#1600;&#1604;&#1616;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1608;&#1614;&#1593;&#1618;&#1600;&#1579;&#1575;&#1569;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1601;&#1614;&#1585;&#1548; &#1608;&#1614;&#1603;&#1614;&#1570;&#1576;&#1614;&#1577;&#1616; &#1575;&#1604;&#1618;&#1605;&#1614;&#1606;&#1618;&#1600;&#1592;&#1614;&#1585;&#1548; &#1608;&#1614;&#1587;&#1608;&#1569;&#1616; &#1575;&#1604;&#1618;&#1605;&#1615;&#1606;&#1618;&#1600;&#1602;&#1614;&#1604;&#1614;&#1576;&#1616; &#1601;&#1610; &#1575;&#1604;&#1605;&#1600;&#1575;&#1604;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1607;&#1618;&#1600;&#1604; + &#1570;&#1610;&#1616;&#1576;&#1600;&#1608;&#1606;&#1614; &#1578;&#1575;&#1574;&#1616;&#1576;&#1600;&#1608;&#1606;&#1614; &#1593;&#1575;&#1576;&#1616;&#1600;&#1583;&#1608;&#1606;&#1614; &#1604;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1606;&#1575; &#1581;&#1600;&#1575;&#1605;&#1616;&#1600;&#1583;&#1608;&#1606; ",
                "transliteration": "Allahu akbaru, Allahu akbaru, Allahu akbaru. Sub<u>h</u>ana l-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina la-munqalibÃ»n. Allahumma inna nas-aluka fi safarina hadha al-birra wa t-taqwa wa mina-l-<sup>c</sup>amali ma tar<u>d</u>a. Allahumma hawwin <sup>c</sup>alayna safarana hadha wa <u>t</u>wi <sup>c</sup>anna bu<sup>c</sup>dahu. Allahumma anta <u>s</u>-<u>s</u>a<u>h</u>ibu fi s-safari, wa-l-khalifatu fi-l-ahli. Allahumma inni a<sup>c</sup>Ã»dhu bika min wa<sup>c</sup>tha'i s-safari wa ka'abati-l-man<u>z</u>ari, wa sÃ»'i-l-munqalabi fi-lmali wa-l-ahli.<br ?>Au retour, rÃ©pÃ©ter l'invocation et ajouter : <br ?>ayibÃ»n, ta'ibÃ»n, <sup>c</sup>abidÃ»n, li-rabbina <u>h</u>amidÃ»n.",
                "audio": "audio/207.mp3"
            }]
        }, {
            "id": 94,
            "title": "When mounting an animal or any means of transport",
            "duas": [{
                "id": 206,
                "meaning": "In the name of Allah and all praise is for Allah. How perfect He is, the One Who has placed this (transport) at our service and we ourselves would not have been capable of that, and to our Lord is our final destiny. All praise is for Allah, All praise is for Allah, All praise is for Allah, Allah is the greatest, Allah is the greatest, Allah is the greatest. How perfect You are, O Allah, verily I have wronged my soul, so forgive me, for surely none can forgive sins except You.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1548; &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1617;&#1584;&#1610; &#1587;&#1614;&#1582;&#1617;&#1614;&#1600;&#1585;&#1614; &#1604;&#1614;&#1606;&#1575; &#1607;&#1584;&#1575; &#1608;&#1614;&#1605;&#1575; &#1603;&#1615;&#1606;&#1617;&#1575; &#1604;&#1614;&#1607;&#1615; &#1605;&#1615;&#1602;&#1618;&#1600;&#1585;&#1616;&#1606;&#1610;&#1606;&#1548; &#1608;&#1614;&#1573;&#1616;&#1606;&#1617;&#1575; &#1573;&#1616;&#1604;&#1609; &#1585;&#1614;&#1576;&#1617;&#1616;&#1606;&#1575; &#1604;&#1614;&#1605;&#1615;&#1606;&#1600;&#1602;&#1614;&#1604;&#1616;&#1576;&#1608;&#1606;&#1548; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1548; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1548; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1610; &#1592;&#1614;&#1604;&#1614;&#1600;&#1605;&#1618;&#1578;&#1615; &#1606;&#1614;&#1601;&#1618;&#1587;&#1610; &#1601;&#1614;&#1575;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1618; &#1604;&#1610;&#1548; &#1601;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614;&#1607;&#1615; &#1604;&#1575; &#1610;&#1614;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1615; &#1575;&#1604;&#1584;&#1617;&#1615;&#1606;&#1608;&#1576;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;",
                "transliteration": "Bismi l-lahi. Al <u>h</u>amdu li-l-lahi. Sub<u>h</u>ana l-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina la-munqalibÃ»n. Al <u>h</u>amdu li-l-lahi, al <u>h</u>amdu li-l-lahi, al <u>h</u>amdu li-l-lahi. Allahu akbaru, Allahu akbaru, Allahu akbaru. Sub<u>h</u>anaka l-lahumma inni <u>z</u>alamtu nafsi, fa-ghfir li, fa-innahu la yaghfiru dh-dhunÃ»ba illa ant.",
                "audio": "audio/206.mp3"
            }]
        }, {
            "id": 93,
            "title": "Forbiddance of ascribing things to omens",
            "duas": [{
                "id": 205,
                "meaning": "O Allah, there is no omen but there is reliance on You, there is no good except Your good and none has the right to be worshipped except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1575; &#1591;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1591;&#1614;&#1610;&#1618;&#1600;&#1585;&#1615;&#1603;&#1548; &#1608;&#1614;&#1604;&#1575; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1615;&#1603;&#1548; &#1608;&#1614;&#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1594;&#1614;&#1610;&#1618;&#1600;&#1585;&#1615;&#1603;",
                "transliteration": "Allahumma, la <u>t</u>ayra illa <u>t</u>ayruka, wa la khayra illa khayruka, wa la ilaha ghayruka.",
                "audio": "audio/205.mp3"
            }]
        }, {
            "id": 92,
            "title": "Returning a supplication after having bestowed a gift or charity upon someone",
            "duas": [{
                "id": 204,
                "meaning": "May Allah bless you all.",
                "arabic": "&#1608;&#1614;&#1601;&#1610;&#1603;&#1614; &#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Wa fika barakallah",
                "audio": "audio/204.mp3"
            }]
        }, {
            "id": 91,
            "title": "For fear of shirk",
            "duas": [{
                "id": 203,
                "meaning": "O Allah, I take refuge in You lest I should commit shirk with You knowingly and I seek Your forgiveness for what I do unknowingly.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618; &#1571;&#1615;&#1588;&#1618;&#1600;&#1585;&#1616;&#1603;&#1614; &#1576;&#1616;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1606;&#1575; &#1571;&#1614;&#1593;&#1618;&#1600;&#1604;&#1614;&#1605;&#1618;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1600;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615;&#1603;&#1614; &#1604;&#1616;&#1605;&#1575; &#1604;&#1575; &#1571;&#1614;&#1593;&#1618;&#1600;&#1604;&#1614;&#1605;",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika an ushrika bika wa ana a<sup>c</sup>lamu, wa astaghfiruka li-ma la a<sup>c</sup>lam.",
                "audio": "audio/203.mp3"
            }]
        }, {
            "id": 90,
            "title": "To the debtor when his debt is settled",
            "duas": [{
                "id": 202,
                "meaning": "May Allah bless for you, your family and wealth. Surely commendation and payment are the reward for a loan.",
                "arabic": "&#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1614;&#1603;&#1614; &#1601;&#1610; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616;&#1603;&#1614; &#1608;&#1614;&#1605;&#1575;&#1604;&#1616;&#1603;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1605;&#1575; &#1580;&#1614;&#1600;&#1586;&#1575;&#1569;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1614;&#1601;&#1616; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1608;&#1575;&#1604;&#1571;&#1614;&#1583;&#1575;&#1569;",
                "transliteration": "Baraka l-lahu laka fi ahlika wa malika. Innama jaza'u s-salafi-l-<u>h</u>amdu wa-l-ada'.",
                "audio": "audio/202.mp3"
            }]
        }, {
            "id": 89,
            "title": "To one who has offered you some of his wealth",
            "duas": [{
                "id": 201,
                "meaning": "May Allah bless for you, your family and wealth.",
                "arabic": "&#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1614;&#1603;&#1614; &#1601;&#1610; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616;&#1603;&#1614; &#1608;&#1614;&#1605;&#1575;&#1604;&#1616;&#1603;",
                "transliteration": "Baraka l-lahu laka fi ahlika wa malika.",
                "audio": "audio/201.mp3"
            }]
        }, {
            "id": 88,
            "title": "To one who pronounces his love for you, for Allah&#146;s sake",
            "duas": [{
                "id": 200,
                "meaning": "May He, for whom you have loved me, love you.",
                "arabic": "&#1571;&#1614;&#1581;&#1614;&#1576;&#1617;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1617;&#1584;&#1610; &#1571;&#1614;&#1581;&#1618;&#1576;&#1614;&#1576;&#1618;&#1600;&#1578;&#1614;&#1606;&#1610; &#1604;&#1614;&#1607;",
                "transliteration": "A<u>h</u>abbaka l-ladhi a<u>h</u>babtani lahu.",
                "audio": "audio/200.mp3"
            }]
        }, {
            "id": 87,
            "title": "Protection from the Dajjal",
            "duas": [{
                "id": 199,
                "meaning": "[Whoever memorises the first ten verses of soorat Al-Kahf will be protected from Dajjal. One should also seek refuge with Allah from the tribulations of the Dajjal after the last tashahhud in prayer.]",
                "arabic": " .",
                "transliteration": "- Voir invocations nÂ°55 et 56"
            }]
        }, {
            "id": 86,
            "title": "To one who does you a favour",
            "duas": [{
                "id": 198,
                "meaning": "May Allah reward you with goodness.",
                "arabic": "&#1580;&#1614;&#1586;&#1575;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611;",
                "transliteration": "Jazaka l-lahu khayran.",
                "audio": "audio/198.mp3"
            }]
        }, {
            "id": 85,
            "title": "Returning a supplication of forgiveness",
            "duas": [{
                "id": 197,
                "meaning": "... and you!",
                "arabic": "&#1608;&#1614;&#1604;&#1614;&#1603;&#1614;",
                "transliteration": "Wa laka.",
                "audio": "audio/197.mp3"
            }]
        }, {
            "id": 84,
            "title": "For the expiation of sins, said at the conclusion of a sitting or gathering",
            "duas": [{
                "id": 196,
                "meaning": "How perfect You are O Allah, and I praise You. I bear witness that None has the right to be worshipped except You. I seek Your forgiveness and turn to You in repentance.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1600;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1583;&#1616;&#1603;&#1548; &#1571;&#1614;&#1588;&#1618;&#1607;&#1614;&#1600;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1578;&#1608;&#1576;&#1615; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;",
                "transliteration": "Sub<u>h</u>anaka l-lahumma wa bi-<u>h</u>amdika. Ash-hadu an la ilaha illa anta, astaghfiruka wa atÃ»bu ilayka.",
                "audio": "audio/196.mp3"
            }]
        }, {
            "id": 83,
            "title": "At a sitting or gathering",
            "duas": [{
                "id": 195,
                "meaning": "O my Lord, forgive me and turn towards me (to accept my repentance). Verily You are The Oft-Returning. The Oft-Forgiving.",
                "arabic": "&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610;&#1548; &#1608;&#1614;&#1578;&#1615;&#1576;&#1618; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1617;&#1614;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1578;&#1617;&#1614;&#1600;&#1608;&#1617;&#1575;&#1576;&#1615; &#1575;&#1604;&#1594;&#1614;&#1600;&#1601;&#1608;&#1585;",
                "transliteration": "Rabbi ghfir li wa tub <sup>c</sup>alayya. Innaka anta t-tawwabu-l-ghafÃ»r.",
                "audio": "audio/195.mp3"
            }]
        }, {
            "id": 82,
            "title": "Upon seeing someone in trial or tribulation",
            "duas": [{
                "id": 194,
                "meaning": "All praise is for Allah Who saved me from that which He tested you with and Who most certainly favoured me over much of His creation.",
                "arabic": "&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1617;&#1584;&#1610; &#1593;&#1575;&#1601;&#1575;&#1606;&#1610; &#1605;&#1616;&#1605;&#1617;&#1575; &#1575;&#1576;&#1618;&#1578;&#1614;&#1600;&#1604;&#1575;&#1603;&#1614; &#1576;&#1616;&#1607;&#1616;&#1548; &#1608;&#1614;&#1601;&#1614;&#1590;&#1617;&#1614;&#1604;&#1614;&#1600;&#1606;&#1610; &#1593;&#1614;&#1604;&#1609; &#1603;&#1614;&#1579;&#1610;&#1600;&#1585;&#1613; &#1605;&#1616;&#1605;&#1617;&#1614;&#1606;&#1618; &#1582;&#1614;&#1604;&#1614;&#1600;&#1602;&#1614; &#1578;&#1614;&#1601;&#1618;&#1590;&#1600;&#1610;&#1604;&#1575;",
                "transliteration": "Al <u>h</u>amdu li-l-lahi l-ladhi <sup>c</sup>afani mimma btalaka bihi wa fa<u>d</u><u>d</u>alani <sup>c</sup>ala kathirin mimman khalaqa taf<u>d</u>ilan.",
                "audio": "audio/194.mp3"
            }]
        }, {
            "id": 81,
            "title": "When angry",
            "duas": [{
                "id": 193,
                "meaning": "I take refuge with Allah from the accursed devil.",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/193.mp3"
            }]
        }, {
            "id": 80,
            "title": "Before sexual intercourse",
            "duas": [{
                "id": 192,
                "meaning": "In the name of Allah. O Allah, keep the devil away from us and keep the devil away from what you have blessed us with.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1580;&#1614;&#1606;&#1617;&#1616;&#1576;&#1618;&#1606;&#1575; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1614;&#1548; &#1608;&#1614;&#1580;&#1614;&#1606;&#1617;&#1616;&#1576;&#1616; &#1575;&#1604;&#1588;&#1617;&#1614;&#1600;&#1610;&#1618;&#1591;&#1575;&#1606;&#1614; &#1605;&#1575; &#1585;&#1614;&#1586;&#1614;&#1602;&#1618;&#1600;&#1578;&#1614;&#1606;&#1575;",
                "transliteration": "Bismi l-lahi. Allahumma jannibna sh-shay<u>t</u>ana, wa jannibi sh-shay<u>t</u>ana ma razaqtana.",
                "audio": "audio/192.mp3"
            }]
        }, {
            "id": 79,
            "title": "On the wedding night or when buying an animal",
            "duas": [{
                "id": 191,
                "meaning": "O Allah, I ask You for the goodness within her and the goodness that you have made her inclined towards, and I take refuge with You from the evil within her and the evil that you have made her inclined towards.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614;&#1607;&#1575;&#1548; &#1608;&#1614;&#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1605;&#1575; &#1580;&#1614;&#1576;&#1614;&#1604;&#1618;&#1600;&#1578;&#1614;&#1607;&#1600;&#1575; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1607;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616;&#1607;&#1575;&#1548; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1580;&#1614;&#1576;&#1614;&#1604;&#1618;&#1600;&#1578;&#1614;&#1607;&#1600;&#1575; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1607;",
                "transliteration": "Allahumma inni as'aluka khayraha, wa khayra ma jabaltaha <sup>c</sup>alayhi. Wa a<sup>c</sup>Ã»dhu bika min sharriha wa sharri ma jabaltaha <sup>c</sup>alayhi.",
                "audio": "audio/191.mp3"
            }]
        }, {
            "id": 78,
            "title": "To the newlywed",
            "duas": [{
                "id": 190,
                "meaning": "May Allah bless for you (your spouse) and bless you, and may He unite both of you in goodness.",
                "arabic": "&#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1604;&#1614;&#1603;&#1548; &#1608;&#1614;&#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1548; &#1608;&#1614;&#1580;&#1614;&#1605;&#1614;&#1593;&#1614; &#1576;&#1614;&#1610;&#1618;&#1600;&#1606;&#1614;&#1603;&#1615;&#1605;&#1575; &#1601;&#1610; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585; ",
                "transliteration": "Baraka l-lahu laka, wa baraka <sup>c</sup>alayka, wa jama<sup>c</sup>a baynakuma fi khayrin.",
                "audio": "audio/190.mp3"
            }]
        }, {
            "id": 77,
            "title": "When a misbeliever praise Allah after sneezing",
            "duas": [{
                "id": 189,
                "meaning": "May Allah guide you and rectify your condition.",
                "arabic": "&#1610;&#1614;&#1607;&#1618;&#1600;&#1583;&#1610;&#1603;&#1615;&#1600;&#1605;&#1615; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1610;&#1615;&#1589;&#1618;&#1600;&#1604;&#1616;&#1581;&#1615; &#1576;&#1575;&#1604;&#1614;&#1600;&#1603;&#1615;&#1605;",
                "transliteration": "Yahdikumu l-lahu wa yu<u>s</u>li<u>h</u>u balakum."
            }]
        }, {
            "id": 76,
            "title": "Upon sneezing",
            "duas": [{
                "id": 188,
                "meaning": "[When one of you sneezes he should say :] All praise if for Allah.<br /> [and his brother or companion should say to him :] May Allah have mercy upon you.<br /> [and the one who sneezed replies back to him :] May Allah guide you and rectify your condition.",
                "arabic": "-&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; -&#1610;&#1614;&#1585;&#1618;&#1581;&#1614;&#1605;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607; -&#1610;&#1614;&#1607;&#1618;&#1600;&#1583;&#1610;&#1603;&#1615;&#1600;&#1605;&#1615; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1610;&#1615;&#1589;&#1618;&#1600;&#1604;&#1616;&#1581;&#1615; &#1576;&#1575;&#1604;&#1614;&#1600;&#1603;&#1615;&#1605;",
                "transliteration": "- Al <u>h</u>amdu li-l-lahi.<br ?>- Yar<u>h</u>amuka l-lahu.<br ?>- Yahdikumu l-lahu wa yu<u>s</u>li<u>h</u>u balakum."
            }]
        }, {
            "id": 75,
            "title": "Upon seeing the early or premature fruit",
            "duas": [{
                "id": 187,
                "meaning": "O Allah, bless our fruit for us, bless our town for us, bless our saAA for us and bless our mudd for us.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610; &#1579;&#1614;&#1605;&#1614;&#1600;&#1585;&#1616;&#1606;&#1575;&#1548; &#1608;&#1614;&#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610; &#1605;&#1614;&#1583;&#1610;&#1606;&#1614;&#1578;&#1616;&#1606;&#1600;&#1575;&#1548; &#1608;&#1614;&#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610; &#1589;&#1575;&#1593;&#1616;&#1606;&#1600;&#1575;&#1548; &#1608;&#1614;&#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610; &#1605;&#1615;&#1583;&#1617;&#1616;&#1606;&#1575;",
                "transliteration": "Ammahumma barik lana fi thamarina, wa barik lana fi madinatina, wa barik lana fi <u>s</u>a<sup>c</sup>ina, wa barik lana fi muddina.",
                "audio": "audio/187.mp3"
            }]
        }, {
            "id": 74,
            "title": "When insulted while fasting",
            "duas": [{
                "id": 186,
                "meaning": "I am fasting, I am fasting.",
                "arabic": "&#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1589;&#1614;&#1575;&#1574;&#1616;&#1605;&#1612;&#1548; &#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1589;&#1614;&#1575;&#1574;&#1616;&#1605;&#1612;",
                "transliteration": "Inni <u>s</u>aimun ! Inni <u>s</u>aimun !",
                "audio": "audio/186.mp3"
            }]
        }, {
            "id": 73,
            "title": "By one fasting when presented with food and does not break his fast",
            "duas": [{
                "id": 185,
                "meaning": "[If you are not invited (to a meal) then answer. If you happen to be fasting, then supplicate (for those present) and if you are not fasting, then eat.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 72,
            "title": "When breaking fast in someone&#146;s home",
            "duas": [{
                "id": 184,
                "meaning": "May the fasting break their fast in your home, and may the dutiful and pious eat your food, and may the angles send prayers upon you.",
                "arabic": "&#1571;&#1614;&#1601;&#1618;&#1591;&#1614;&#1600;&#1585;&#1614; &#1593;&#1616;&#1606;&#1618;&#1583;&#1614;&#1603;&#1615;&#1605; &#1575;&#1604;&#1589;&#1617;&#1600;&#1575;&#1574;&#1616;&#1605;&#1608;&#1606;&#1614; &#1608;&#1614;&#1571;&#1614;&#1603;&#1614;&#1604;&#1614; &#1591;&#1614;&#1593;&#1575;&#1605;&#1614;&#1600;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1571;&#1576;&#1618;&#1600;&#1585;&#1575;&#1585;&#1548; &#1608;&#1614;&#1589;&#1614;&#1604;&#1617;&#1614;&#1600;&#1578;&#1618; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1605;&#1604;&#1575;&#1574;&#1616;&#1603;&#1614;&#1600;&#1577;",
                "transliteration": "Af<u>t</u>ara <sup>c</sup>indakumu <u>s</u>-<u>s</u>a'imÃ»na, wa akala <u>t</u>a<sup>c</sup>amakumu-l-abraru, wa <u>s</u>allat <sup>c</sup>alaykumu-l-mala'ikatu.",
                "audio": "audio/184.mp3"
            }]
        }, {
            "id": 71,
            "title": "To one offering a drink or to one who intended to do that",
            "duas": [{
                "id": 183,
                "meaning": "O Allah, feed him who fed me, and provide with drink him who provided me with drink.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1591;&#1618;&#1593;&#1616;&#1605;&#1618; &#1605;&#1614;&#1606; &#1571;&#1614;&#1591;&#1618;&#1593;&#1614;&#1605;&#1614;&#1606;&#1610;&#1548; &#1608;&#1614;&#1575;&#1587;&#1618;&#1602;&#1616; &#1605;&#1614;&#1606; &#1587;&#1602;&#1575;&#1606;&#1610;",
                "transliteration": "Allahumma a<u>t</u><sup>c</sup>im man a<u>t</u><sup>c</sup>amani wa sqi man saqani.",
                "audio": "audio/183.mp3"
            }]
        }, {
            "id": 70,
            "title": "Of the guest for the host",
            "duas": [{
                "id": 182,
                "meaning": "O Allah, bless for them, that which You have provided them, forgive them and have mercy upon them.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1601;&#1610;&#1605;&#1575; &#1585;&#1614;&#1586;&#1614;&#1602;&#1618;&#1600;&#1578;&#1614;&#1607;&#1615;&#1605;&#1548; &#1608;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1614;&#1607;&#1615;&#1600;&#1605;&#1618; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1607;&#1615;&#1605;&#1618;",
                "transliteration": "Allahumma barik lahum fima razaqtahum wa ghfir lahum wa r<u>h</u>amhum.",
                "audio": "audio/182.mp3"
            }]
        }, {
            "id": 69,
            "title": "Upon completing the meal",
            "duas": [{
                "id": 180,
                "meaning": "All praise is for Allah who fed me this and provided it for me without any might nor power from myself.",
                "arabic": "&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1617;&#1614;&#1584;&#1610; &#1571;&#1614;&#1591;&#1618;&#1593;&#1614;&#1605;&#1614;&#1606;&#1600;&#1610; &#1607;&#1600;&#1584;&#1575; &#1608;&#1614;&#1585;&#1614;&#1586;&#1614;&#1602;&#1614;&#1606;&#1600;&#1610;&#1607;&#1616; &#1605;&#1616;&#1606;&#1618; &#1594;&#1614;&#1600;&#1610;&#1618;&#1585;&#1616; &#1581;&#1614;&#1608;&#1618;&#1604;&#1613; &#1605;&#1616;&#1606;&#1617;&#1616;&#1610; &#1608;&#1614;&#1604;&#1575; &#1602;&#1615;&#1608;&#1617;&#1614;&#1577; ",
                "transliteration": "Al <u>h</u>amdu li-l-lahi ladhi a<u>t</u><sup>c</sup>amani hadha wa razaqanihi min ghayrin <u>h</u>awlin minni wa la quwwatin.",
                "audio": "audio/180.mp3"
            }, {
                "id": 181,
                "meaning": "Allah be praised with an abundant beautiful blessed praise, a never-ending praise, a praise which we will never bid farewell to and an indispensable praise, He is our Lord.",
                "arabic": "&#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1575;&#1611; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575;&#1611; &#1591;&#1614;&#1610;&#1617;&#1616;&#1600;&#1576;&#1575;&#1611; &#1605;&#1615;&#1576;&#1600;&#1575;&#1585;&#1614;&#1603;&#1575;&#1611; &#1601;&#1610;&#1607;&#1548; &#1594;&#1614;&#1610;&#1618;&#1585;&#1614; &#1605;&#1614;&#1603;&#1618;&#1601;&#1616;&#1610;&#1617;&#1613; &#1608;&#1614;&#1604;&#1575; &#1605;&#1615;&#1608;&#1614;&#1583;&#1617;&#1614;&#1593;&#1613; &#1608;&#1614;&#1604;&#1575; &#1605;&#1615;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1600;&#1606;&#1609;&#1611; &#1593;&#1614;&#1606;&#1618;&#1600;&#1607;&#1615; &#1585;&#1614;&#1576;&#1617;&#1615;&#1600;&#1606;&#1575; ",
                "transliteration": "Al <u>h</u>amdu li-l-lahi <u>h</u>amdan kathiran, <u>t</u>ayyiban, mubarakan fihi, ghayra makfiyyin wa la muwadda<sup>c</sup>in, wa la mustaghnan <sup>c</sup>anhu rabbana.",
                "audio": "audio/181.mp3"
            }]
        }, {
            "id": 68,
            "title": "Before eating",
            "duas": [{
                "id": 178,
                "meaning": "In the name of Allah (in itÂ’s beginning and end).",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;/ &#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1601;&#1610; &#1571;&#1614;&#1608;&#1617;&#1614;&#1604;&#1616;&#1607;&#1616; &#1608;&#1614;&#1570;&#1582;&#1616;&#1600;&#1585;&#1616;&#1607; ",
                "transliteration": "Au dÃ©but du repas : Bismi l-lahi.<br ?>En cas d'oubli : Bismi l-lahi fi awwalihi wa akhirihi.",
                "audio": "audio/178.mp3"
            }, {
                "id": 179,
                "meaning": "O Allah, bless it for us and feed us better than it.<br ?>O Allah, bless it fo it for usand give us more of it.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610;&#1607;&#1616; &#1608;&#1614;&#1571;&#1614;&#1591;&#1618;&#1600;&#1593;&#1616;&#1605;&#1618;&#1606;&#1575; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618;&#1600;&#1607;/ &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1614;&#1606;&#1575; &#1601;&#1610;&#1607;&#1616; &#1608;&#1614;&#1586;&#1616;&#1583;&#1618;&#1606;&#1575; &#1605;&#1616;&#1606;&#1618;&#1607;",
                "transliteration": "Allahumma barik lana fihi, wa a<u>t</u><sup>c</sup>imna khayran minhu.<br ?>Allahumma barik lana fihi wa zidna minhu.",
                "audio": "audio/179.mp3"
            }]
        }, {
            "id": 67,
            "title": "Upon breaking fast",
            "duas": [{
                "id": 176,
                "meaning": "The thirst has gone and the veins are quenched, and reward is confirmed, if Allah wills.",
                "arabic": "&#1584;&#1614;&#1607;&#1614;&#1600;&#1576;&#1614; &#1575;&#1604;&#1592;&#1617;&#1614;&#1605;&#1614;&#1600;&#1571;&#1615;&#1548; &#1608;&#1614;&#1575;&#1576;&#1618;&#1578;&#1614;&#1604;&#1617;&#1614;&#1600;&#1578;&#1616; &#1575;&#1604;&#1593;&#1615;&#1600;&#1585;&#1608;&#1602;&#1548; &#1608;&#1614;&#1579;&#1614;&#1576;&#1614;&#1600;&#1578;&#1614; &#1575;&#1604;&#1571;&#1580;&#1618;&#1600;&#1585;&#1615; &#1573;&#1616;&#1606;&#1618; &#1588;&#1600;&#1575;&#1569;&#1614; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Dhahaba <u>z</u>-<u>z</u>ama'u wa btallati-l-<sup>c</sup>urÃ»qu wa thabata-l-ajru in sha'a l-lahu.",
                "audio": "audio/176.mp3"
            }, {
                "id": 177,
                "meaning": "O Allah, I ask You by Your mercy which envelopes all things, that You forgive me.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1576;&#1616;&#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1614; &#1575;&#1604;&#1617;&#1578;&#1610; &#1608;&#1614;&#1587;&#1616;&#1600;&#1593;&#1614;&#1578; &#1603;&#1615;&#1604;&#1617;&#1614; &#1588;&#1610;&#1569;&#1548; &#1571;&#1614;&#1606;&#1618; &#1578;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1614; &#1604;&#1610; ",
                "transliteration": "Allahumma inni as'aluka bi-ra<u>h</u>matika l-lati wasi<sup>c</sup>at kulla shay'in an taghfira li.",
                "audio": "audio/177.mp3"
            }]
        }, {
            "id": 66,
            "title": "Upon sighting the crescent moon",
            "duas": [{
                "id": 175,
                "meaning": "Allah is the greatest. O Allah, let the crescent loom above us in safety, faith, peace, and Islam, and in agreement with all that You love and pleases You. Our Lord and your Lord is Allah.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1571;&#1614;&#1607;&#1616;&#1604;&#1617;&#1614;&#1600;&#1607;&#1615; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575; &#1576;&#1616;&#1575;&#1604;&#1571;&#1605;&#1618;&#1600;&#1606;&#1616; &#1608;&#1614;&#1575;&#1604;&#1573;&#1610;&#1605;&#1600;&#1575;&#1606;&#1548; &#1608;&#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1614;&#1600;&#1577;&#1616; &#1608;&#1575;&#1604;&#1573;&#1587;&#1618;&#1604;&#1575;&#1605;&#1548; &#1608;&#1614;&#1575;&#1604;&#1578;&#1617;&#1614;&#1600;&#1608;&#1618;&#1601;&#1610;&#1600;&#1602;&#1616; &#1604;&#1616;&#1605;&#1575; &#1578;&#1615;&#1581;&#1616;&#1600;&#1576;&#1617;&#1615; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1600;&#1575; &#1608;&#1614;&#1578;&#1614;&#1600;&#1585;&#1618;&#1590;&#1600;&#1609;&#1548; &#1585;&#1614;&#1576;&#1617;&#1615;&#1606;&#1600;&#1575; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1615;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Allahu akbaru. Allahumma ahillahu <sup>c</sup>alayna bi-l-amni, wa-l-imani, wa s-salamati, wa-l-islami, wa t-tawfiqi lima tu<u>h</u>ibbu rabbana wa tar<u>d</u>a. Rabbuna wa rabbuka l-lahu.",
                "audio": "audio/175.mp3"
            }]
        }, {
            "id": 65,
            "title": "Asking for clear skies",
            "duas": [{
                "id": 174,
                "meaning": "O Allah, let the rain fall around us and not upon us, O Allah, (let it fall) on the pastures, hills, valleys and the roots of trees.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1581;&#1614;&#1608;&#1575;&#1604;&#1614;&#1610;&#1618;&#1606;&#1575; &#1608;&#1614;&#1604;&#1575; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1593;&#1614;&#1604;&#1609; &#1575;&#1604;&#1570;&#1603;&#1600;&#1575;&#1605;&#1616; &#1608;&#1614;&#1575;&#1604;&#1592;&#1617;&#1616;&#1600;&#1585;&#1575;&#1576;&#1548; &#1608;&#1614;&#1576;&#1615;&#1591;&#1600;&#1608;&#1606;&#1616; &#1575;&#1604;&#1571;&#1608;&#1618;&#1583;&#1616;&#1610;&#1577;&#1548; &#1608;&#1614;&#1605;&#1614;&#1606;&#1600;&#1575;&#1576;&#1616;&#1578;&#1616; &#1575;&#1604;&#1588;&#1617;&#1614;&#1580;&#1600;&#1585;",
                "transliteration": "Allahumma <u>h</u>awalayna wa la <sup>c</sup>alayna. Allahumma <sup>c</sup>ala-l-akami wa <u>z</u>-<u>z</u>irabi wa bu<u>t</u>Ã»ni-l-awdiyati wa manabiti sh-shajari.",
                "audio": "audio/174.mp3"
            }]
        }, {
            "id": 64,
            "title": "After rainfall",
            "duas": [{
                "id": 173,
                "meaning": "We have been given rain by the grace and mercy of Allah.",
                "arabic": "&#1605;&#1615;&#1591;&#1616;&#1600;&#1585;&#1618;&#1606;&#1575; &#1576;&#1616;&#1601;&#1614;&#1590;&#1618;&#1600;&#1604;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1616;&#1607;",
                "transliteration": "Mu<u>t</u>irna bi-fa<u>d</u>li l-lahi wa ra<u>h</u>matihi.",
                "audio": "audio/173.mp3"
            }]
        }, {
            "id": 63,
            "title": "When it rains",
            "duas": [{
                "id": 172,
                "meaning": "O Allah, may it be a beneficial rain cloud.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1589;&#1614;&#1610;&#1617;&#1616;&#1600;&#1576;&#1575;&#1611; &#1606;&#1575;&#1601;&#1616;&#1600;&#1593;&#1575;&#1611; ",
                "transliteration": "Allahumma <u>s</u>ayyiban nafi<sup>c</sup>an.",
                "audio": "audio/172.mp3"
            }]
        }, {
            "id": 62,
            "title": "For rain",
            "duas": [{
                "id": 169,
                "meaning": "O Allah, send upon us helpful, wholesome and healthy rain, beneficial not harmful rain, now, not later.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1587;&#1618;&#1602;&#1616;&#1600;&#1606;&#1575; &#1594;&#1614;&#1610;&#1618;&#1600;&#1579;&#1575;&#1611; &#1605;&#1615;&#1594;&#1610;&#1600;&#1579;&#1575;&#1611; &#1605;&#1614;&#1585;&#1610;&#1574;&#1575;&#1611; &#1605;&#1615;&#1585;&#1610;&#1600;&#1593;&#1575;&#1611;&#1548; &#1606;&#1575;&#1601;&#1616;&#1593;&#1600;&#1575;&#1611; &#1594;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1590;&#1575;&#1585;&#1548; &#1593;&#1575;&#1580;&#1616;&#1600;&#1604;&#1575;&#1611; &#1594;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1570;&#1580;&#1616;&#1604;",
                "transliteration": "Allahumma sqina ghaytan mughithan, mari'an, muri<sup>c</sup>an, nafi<sup>c</sup>an ghayra <u>d</u>arrin, <sup>c</sup>ajilan ghayra ajilin.",
                "audio": "audio/169.mp3"
            }, {
                "id": 170,
                "meaning": "O Allah, relieve us, O Allah, relieve us, O Allah, relieve us.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1571;&#1594;&#1616;&#1579;&#1618;&#1606;&#1600;&#1575;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1571;&#1594;&#1616;&#1579;&#1618;&#1606;&#1600;&#1575;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1571;&#1594;&#1616;&#1579;&#1618;&#1606;&#1600;&#1575;",
                "transliteration": "Allahumma aghithna ! Allahumma aghithna ! Allahumma aghithna !",
                "audio": "audio/170.mp3"
            }, {
                "id": 171,
                "meaning": "O Allah, provide water for Your servants and Your cattle, spread out Your mercy and resurrect Your dead land.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1587;&#1618;&#1602;&#1616; &#1593;&#1616;&#1576;&#1575;&#1583;&#1614;&#1603;&#1614; &#1608;&#1614;&#1576;&#1614;&#1607;&#1600;&#1575;&#1574;&#1616;&#1605;&#1614;&#1603;&#1548; &#1608;&#1614;&#1575;&#1606;&#1618;&#1588;&#1615;&#1600;&#1585;&#1618; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1614;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1581;&#1618;&#1610;&#1616;&#1610; &#1576;&#1614;&#1604;&#1614;&#1600;&#1583;&#1614;&#1603;&#1614; &#1575;&#1604;&#1605;&#1614;&#1610;&#1617;&#1616;&#1600;&#1578;",
                "transliteration": "Allahumma sqi <sup>c</sup>ibadaka wa baha'imaka. Wa bshur ra<u>h</u>mataka, wa a<u>h</u>yi baladaka-l-mayyita.",
                "audio": "audio/171.mp3"
            }]
        }, {
            "id": 61,
            "title": "Upon hearing thunder",
            "duas": [{
                "id": 168,
                "meaning": "How perfect He is, (The One) Whom the thunder declares His perfection with His praise, as do the angles out of fear of Him.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1617;&#1584;&#1610; &#1610;&#1615;&#1587;&#1614;&#1576;&#1617;&#1616;&#1600;&#1581;&#1615; &#1575;&#1604;&#1600;&#1585;&#1617;&#1614;&#1593;&#1618;&#1583;&#1615; &#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1616;&#1607;&#1616;&#1548; &#1608;&#1614;&#1575;&#1604;&#1605;&#1604;&#1575;&#1574;&#1616;&#1603;&#1600;&#1577;&#1615; &#1605;&#1616;&#1606;&#1618; &#1582;&#1610;&#1600;&#1601;&#1614;&#1578;&#1607;",
                "transliteration": "Sub<u>h</u>ana l-ladhi yusabbi<u>h</u>u r-ra<sup>c</sup>du bi-<u>h</u>amdihi wa-l-mala'ikatu min khifatihi.",
                "audio": "audio/168.mp3"
            }]
        }, {
            "id": 60,
            "title": "During a wind storm",
            "duas": [{
                "id": 166,
                "meaning": "O Allah, I ask You for itÂ’s goodness and I take refuge with You from itÂ’s evil.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614;&#1607;&#1575;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616;&#1607;&#1575;",
                "transliteration": "Allahumma inni as'aluka khayraha wa a<sup>c</sup>Ã»dhu bika min sharriha.",
                "audio": "audio/166.mp3"
            }, {
                "id": 167,
                "meaning": "O Allah, I ask You for itÂ’s goodness, the good within it, and the good it was sent with, and I take refuge with You from itÂ’s evil, the evil within it, and from the evil it was sent with.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614;&#1607;&#1575;&#1548; &#1608;&#1614;&#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1605;&#1575; &#1601;&#1610;&#1607;&#1600;&#1575;&#1548; &#1608;&#1614;&#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1614; &#1605;&#1575; &#1575;&#1615;&#1585;&#1618;&#1587;&#1616;&#1604;&#1614;&#1600;&#1578;&#1618; &#1576;&#1616;&#1607;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616;&#1607;&#1575;&#1548; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1601;&#1610;&#1607;&#1600;&#1575;&#1548; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1575;&#1615;&#1585;&#1618;&#1587;&#1616;&#1604;&#1614;&#1600;&#1578;&#1618; &#1576;&#1616;&#1607;",
                "transliteration": "Allahumma inni as'aluka khayraha wa khayra ma fiha, wa khayra ma ursilat bihi. Wa a<sup>c</sup>Ã»dhu bika min sharriha, wa sharri ma fiha, wa sharri ma ursilat bihi.",
                "audio": "audio/167.mp3"
            }]
        }, {
            "id": 59,
            "title": "Visiting the graves",
            "duas": [{
                "id": 165,
                "meaning": "Peace be upon you all, O inhabitants of the graves, amongst the believers and the Muslims. Verily we will, Allah willing, be united with you, we ask Allah for well-being for us and you.",
                "arabic": "&#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1615;&#1605;&#1618; &#1571;&#1614;&#1607;&#1618;&#1604;&#1614; &#1575;&#1604;&#1583;&#1617;&#1616;&#1610;&#1575;&#1585;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1572;&#1618;&#1605;&#1616;&#1606;&#1610;&#1600;&#1606;&#1614; &#1608;&#1614;&#1575;&#1604;&#1618;&#1605;&#1615;&#1587;&#1618;&#1604;&#1616;&#1605;&#1610;&#1606;&#1548; &#1608;&#1614;&#1573;&#1616;&#1606;&#1617;&#1575; &#1573;&#1616;&#1606;&#1618; &#1588;&#1575;&#1569;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1576;&#1616;&#1603;&#1615;&#1600;&#1605;&#1618; &#1604;&#1575;&#1581;&#1616;&#1602;&#1600;&#1608;&#1606;&#1548; &#1606;&#1614;&#1587;&#1618;&#1600;&#1575;&#1614;&#1604;&#1615; &#1575;&#1604;&#1604;&#1607;&#1614; &#1604;&#1606;&#1600;&#1575; &#1608;&#1614;&#1604;&#1614;&#1603;&#1615;&#1600;&#1605;&#1618; &#1575;&#1604;&#1593;&#1600;&#1575;&#1601;&#1616;&#1610;&#1614;&#1577;",
                "transliteration": "As-salamu <sup>c</sup>alaykum ahla d-diyari mina-l-muminina wa-l-muslimina. Wa inna in sha'a l-lahu bikum la<u>h</u>iqÃ»na [wa yar<u>h</u>amu l-lahu-l-mustaqdimina minna wa-l-musta'khirina.] As'alu l-laha lana wa lakumu-l-<sup>c</sup>afiyata.",
                "audio": "audio/165.mp3"
            }]
        }, {
            "id": 58,
            "title": "After burying the deceased",
            "duas": [{
                "id": 164,
                "meaning": "[Seek forgiveness for your brother and pray that he remains firm, for he is now being questioned.]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1614;&#1607;&#1615;, &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1579;&#1614;&#1576;&#1616;&#1617;&#1578;&#1618;&#1607;&#1615;",
                "transliteration": "Allahumma ghfir lahu, Allahumma thabbit-hu.",
                "audio": "audio/164.mp3"
            }]
        }, {
            "id": 57,
            "title": "Placing the deceased in the grave",
            "duas": [{
                "id": 163,
                "meaning": "In the name of Allah and upon the sunnah of the Messenger of Allah.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1587;&#1615;&#1600;&#1606;&#1617;&#1614;&#1577;&#1616; &#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1616; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Bismi l-lahi wa <sup>c</sup>ala sunnati rasÃ»li l-lahi.",
                "audio": "audio/163.mp3"
            }]
        }, {
            "id": 56,
            "title": "Condolence",
            "duas": [{
                "id": 162,
                "meaning": "Verily to Allah, belongs what He took and to Him belongs what He gave, and everything with Him has an appointed timeÂ…and then he r ordered for her to be patient and hope for AllahÂ’s reward.(May Allah magnify your reward, make better your solace and forgive your deceased.)",
                "arabic": "&#1573;&#1616;&#1606;&#1617;&#1614; &#1604;&#1604;&#1607;&#1616; &#1605;&#1575; &#1571;&#1614;&#1582;&#1614;&#1584;&#1548; &#1608;&#1614;&#1604;&#1614;&#1607;&#1615; &#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1600;&#1591;&#1600;&#1609;&#1548; &#1608;&#1614;&#1603;&#1615;&#1600;&#1604;&#1617;&#1615; &#1588;&#1614;&#1610;&#1569;&#1613; &#1593;&#1616;&#1606;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1576;&#1616;&#1571;&#1614;&#1580;&#1614;&#1604;&#1613; &#1605;&#1615;&#1587;&#1614;&#1600;&#1605;&#1617;&#1614;&#1609;.&#1601;&#1614;&#1604;&#1618;&#1578;&#1614;&#1589;&#1618;&#1600;&#1576;&#1616;&#1585; &#1608;&#1614;&#1604;&#1618;&#1578;&#1614;&#1581;&#1618;&#1600;&#1578;&#1614;&#1587;&#1616;&#1576;.  &#1571;&#1614;&#1593;&#1618;&#1592;&#1614;&#1600;&#1605;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1580;&#1618;&#1600;&#1585;&#1614;&#1603;&#1548; &#1608;&#1614;&#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1600;&#1606;&#1614; &#1593;&#1614;&#1600;&#1586;&#1575;&#1569;&#1614; &#1603;&#1548; &#1608;&#1614;&#1594;&#1614;&#1601;&#1614;&#1600;&#1585;&#1614; &#1604;&#1616;&#1605;&#1614;&#1600;&#1610;&#1617;&#1616;&#1578;&#1616;&#1603;",
                "transliteration": "Inna li-l-lahi ma akhadha wa li-l-lahi ma a<sup>c</sup><u>t</u>a, wa kullu shay'in <sup>c</sup>indahu bi-ajalin musamman... Fa-l-ta<u>s</u>bir wa-l-ta<u>h</u>tasib.<br ?><br ?>A<sup>c</sup><u>z</u>ama l-lahu ajraka, wa a<u>h</u>sana <sup>c</sup>aza'ka, wa ghafara li-mayyitika.",
                "audio": "audio/162.mp3"
            }]
        }, {
            "id": 55,
            "title": "When the deceased is a child, during the funeral prayer",
            "duas": [{
                "id": 160,
                "meaning": "O Lord, protect him from the punishment of the grave (* O Lord, make him a preceding reward and a stored treasure for his parents, and an answered intercessor. O Allah, through him, make heavy their scales and magnify their reward. Unite him with the righteous believers, place him under the care of Ibraheem, and protect him by Your mercy from the torment of Hell. Give him in exchange a better residence and a better family than his. O Allah, forgive our ancestors and our descendants and those who came before us with faith.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618;&#1600;&#1607;&#1615; &#1601;&#1614;&#1585;&#1614;&#1591;&#1600;&#1575;&#1611; &#1608;&#1614;&#1584;&#1615;&#1582;&#1618;&#1600;&#1585;&#1575;&#1611; &#1604;&#1616;&#1608;&#1575;&#1604;&#1616;&#1600;&#1583;&#1614;&#1610;&#1607;&#1548; &#1608;&#1614;&#1588;&#1614;&#1601;&#1600;&#1610;&#1593;&#1575;&#1611; &#1605;&#1615;&#1580;&#1600;&#1575;&#1576;&#1575;&#1611;&#1548; &#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1579;&#1614;&#1600;&#1602;&#1617;&#1616;&#1604;&#1618; &#1576;&#1616;&#1607;&#1616; &#1605;&#1614;&#1608;&#1575;&#1586;&#1610;&#1600;&#1606;&#1614;&#1607;&#1615;&#1605;&#1575;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1618;&#1600;&#1592;&#1616;&#1605;&#1618; &#1576;&#1616;&#1607;&#1616; &#1571;&#1615;&#1580;&#1600;&#1608;&#1585;&#1614;&#1607;&#1615;&#1600;&#1605;&#1575;&#1548; &#1608;&#1614;&#1571;&#1614;&#1604;&#1618;&#1600;&#1581;&#1616;&#1602;&#1618;&#1600;&#1607;&#1615; &#1576;&#1616;&#1589;&#1575;&#1604;&#1616;&#1600;&#1581;&#1616; &#1575;&#1604;&#1600;&#1605;&#1572;&#1618;&#1605;&#1616;&#1606;&#1600;&#1610;&#1606;&#1548; &#1608;&#1614;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618;&#1600;&#1607;&#1615; &#1601;&#1610; &#1603;&#1614;&#1601;&#1600;&#1575;&#1604;&#1614;&#1577;&#1616; &#1573;&#1616;&#1576;&#1618;&#1600;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1548; &#1608;&#1614;&#1602;&#1616;&#1607;&#1616; &#1576;&#1616;&#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1614; &#1593;&#1614;&#1584;&#1575;&#1576;&#1614; &#1575;&#1604;&#1618;&#1580;&#1614;&#1600;&#1581;&#1610;&#1605;",
                "transliteration": "Allahumma a<sup>c</sup>idh-hu min <sup>c</sup>adhabi-l-qabr.<br ?>Allahumma j<sup>c</sup>alhu fara<u>t</u>an wa dhukran li-walidayhi, wa shafi<sup>c</sup>an mujaban. Allahumma thaqqil bihi mawazinahuma, wa a<sup>c</sup><u>z</u>im bihi ijÃ»rahuma, wa al<u>h</u>iqhu bi-<u>s</u>ali<u>h</u>i-l-mu'minina. Wa j<sup>c</sup>alhu fi kafalati Ibrahima, wa qihi bi-ra<u>h</u>matika <sup>c</sup>adhaba-l-ja<u>h</u>imi. Wa abdilhu daran khayran min darihi, wa ahlan khayran min ahlihi. Allahumma ghfir li-aslafina wa afra<u>t</u>ina wa man sabaqana bi-l-iman",
                "audio": "audio/160.mp3"
            }, {
                "id": 161,
                "meaning": "O Allah, make him a preceding reward, a prepayment and a recompense for us.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618;&#1600;&#1607;&#1615; &#1604;&#1614;&#1606;&#1575; &#1601;&#1614;&#1585;&#1614;&#1591;&#1600;&#1575;&#1611;&#1548; &#1608;&#1614;&#1587;&#1614;&#1604;&#1614;&#1600;&#1601;&#1575;&#1611; &#1608;&#1614;&#1571;&#1614;&#1580;&#1618;&#1600;&#1585;&#1575;&#1611;",
                "transliteration": "Allahumma j<sup>c</sup>alhu lana fara<u>t</u>an wa salafan wa ajran.",
                "audio": "audio/161.mp3"
            }]
        }, {
            "id": 54,
            "title": "For the deceased at the funeral prayer",
            "duas": [{
                "id": 156,
                "meaning": "O Allah, forgive and have mercy upon him, excuse him and pardon him, and make honourable his reception. Expand his entry, and cleanse him with water, snow, and ice, and purify him of sin as a white robe is purified of filth. Exchange his home for a better home, and his family for a better family, and his spouse for a better spouse. Admit him into the Garden, protect him from the punishment of the grave and the torment of the Fire.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1614;&#1607;&#1615; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1607; &#1548; &#1608;&#1614;&#1593;&#1575;&#1601;&#1616;&#1607;&#1616; &#1608;&#1614;&#1575;&#1593;&#1618;&#1601;&#1615; &#1593;&#1614;&#1606;&#1618;&#1600;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1603;&#1618;&#1600;&#1585;&#1616;&#1605;&#1618; &#1606;&#1615;&#1586;&#1615;&#1604;&#1614;&#1600;&#1607; &#1548; &#1608;&#1614;&#1608;&#1614;&#1587;&#1617;&#1616;&#1600;&#1593;&#1618; &#1605;&#1615;&#1583;&#1618;&#1582;&#1614;&#1600;&#1604;&#1614;&#1607; &#1548; &#1608;&#1614;&#1575;&#1594;&#1618;&#1587;&#1616;&#1604;&#1618;&#1600;&#1607;&#1615; &#1576;&#1616;&#1575;&#1604;&#1618;&#1605;&#1600;&#1575;&#1569;&#1616; &#1608;&#1614;&#1575;&#1604;&#1579;&#1617;&#1614;&#1600;&#1604;&#1618;&#1580;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1576;&#1614;&#1600;&#1585;&#1614;&#1583;&#1618; &#1548; &#1608;&#1614;&#1606;&#1614;&#1602;&#1617;&#1616;&#1600;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1582;&#1591;&#1600;&#1575;&#1610;&#1575; &#1603;&#1614;&#1605;&#1575; &#1606;&#1614;&#1600;&#1602;&#1617;&#1610;&#1618;&#1578;&#1614; &#1575;&#1604;&#1600;&#1579;&#1617;&#1614;&#1608;&#1618;&#1576;&#1615; &#1575;&#1604;&#1571;&#1614;&#1576;&#1618;&#1610;&#1614;&#1600;&#1590;&#1615; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1583;&#1617;&#1614;&#1606;&#1614;&#1600;&#1587;&#1618; &#1548; &#1608;&#1614;&#1571;&#1614;&#1576;&#1618;&#1600;&#1583;&#1616;&#1604;&#1618;&#1607;&#1615; &#1583;&#1575;&#1585;&#1575;&#1611; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618; &#1583;&#1575;&#1585;&#1616;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1607;&#1618;&#1604;&#1575;&#1611; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616;&#1600;&#1607; &#1548; &#1608;&#1614;&#1586;&#1614;&#1608;&#1618;&#1580;&#1614;&#1600;&#1575;&#1611; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618; &#1586;&#1614;&#1608;&#1618;&#1580;&#1616;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1583;&#1618;&#1582;&#1616;&#1600;&#1604;&#1618;&#1607;&#1615; &#1575;&#1604;&#1618;&#1580;&#1614;&#1600;&#1606;&#1617;&#1614;&#1577; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1616;&#1600;&#1584;&#1618;&#1607;&#1615; &#1605;&#1616;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585; &#1608;&#1614;&#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1585; ",
                "transliteration": "Allahumma ghfir lahu wa r<u>h</u>amhu wa <sup>c</sup>afihi, wa <sup>c</sup>fu <sup>c</sup>anhu, wa akrim nuzulahu, wa wassi<sup>c</sup> mudkhalahu, wa ghsilhu bi-l-ma'i wa th-thalji wa-l-baradi. Wa naqqihi mina-l-kha<u>t</u>aya kama naqqayta th-thawba-l-abya<u>d</u>a mina d-danasi. Wa abdilhu daran khayran min darihi, wa ahlan khayran min ahlihi, wa zawjan khayran min zawjihi. Wa dkhilhu-l-jannata wa a<sup>c</sup>idh-hu min <sup>c</sup>adhabi-l-qaqbr [wa <sup>c</sup>adhabi n-nar].",
                "audio": "audio/156.mp3"
            }, {
                "id": 157,
                "meaning": "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whom amongst us You keep alive, then let such a life be upon Islam, and whom amongst us You take unto Yourself, then let such a death be upon faith. O Allah, do not deprive us of his reward and do not let us stray after him.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1616;&#1581;&#1614;&#1610;&#1617;&#1616;&#1600;&#1606;&#1575; &#1608;&#1614;&#1605;&#1614;&#1610;&#1617;&#1616;&#1578;&#1616;&#1600;&#1606;&#1575; &#1608;&#1614;&#1588;&#1600;&#1575;&#1607;&#1616;&#1583;&#1616;&#1606;&#1575; &#1548; &#1608;&#1614;&#1594;&#1575;&#1574;&#1616;&#1576;&#1616;&#1600;&#1606;&#1575; &#1548; &#1608;&#1614;&#1589;&#1614;&#1594;&#1610;&#1600;&#1585;&#1616;&#1606;&#1575; &#1608;&#1614;&#1603;&#1614;&#1576;&#1610;&#1600;&#1585;&#1616;&#1606;&#1575; &#1548; &#1608;&#1614;&#1584;&#1614;&#1603;&#1614;&#1600;&#1585;&#1616;&#1606;&#1575; &#1608;&#1614;&#1571;&#1615;&#1606;&#1618;&#1579;&#1600;&#1575;&#1606;&#1575; . &#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1605;&#1614;&#1606;&#1618; &#1571;&#1614;&#1581;&#1618;&#1610;&#1614;&#1610;&#1618;&#1600;&#1578;&#1614;&#1607;&#1615; &#1605;&#1616;&#1606;&#1617;&#1575; &#1601;&#1614;&#1571;&#1614;&#1581;&#1618;&#1610;&#1616;&#1600;&#1607;&#1616; &#1593;&#1614;&#1604;&#1609; &#1575;&#1604;&#1573;&#1616;&#1587;&#1618;&#1604;&#1575;&#1605; &#1548;&#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1578;&#1614;&#1608;&#1614;&#1601;&#1617;&#1614;&#1600;&#1610;&#1618;&#1578;&#1614;&#1607;&#1615; &#1605;&#1616;&#1606;&#1617;&#1575; &#1601;&#1614;&#1578;&#1614;&#1608;&#1614;&#1601;&#1617;&#1614;&#1600;&#1607;&#1615; &#1593;&#1614;&#1604;&#1609; &#1575;&#1604;&#1573;&#1616;&#1610;&#1600;&#1605;&#1575;&#1606; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1604;&#1575; &#1578;&#1614;&#1581;&#1618;&#1600;&#1585;&#1616;&#1605;&#1618;&#1606;&#1600;&#1575; &#1571;&#1614;&#1580;&#1618;&#1600;&#1585;&#1614;&#1607; &#1548; &#1608;&#1614;&#1604;&#1575; &#1578;&#1615;&#1590;&#1616;&#1600;&#1604;&#1617;&#1614;&#1606;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;",
                "transliteration": "Allahumma ghfir li-<u>h</u>ayyina wa mayyitina, wa shahidina wa gha'ibina, wa <u>s</u>aghirina wa kabirina, wa dhakarina wa unthana. Allahumma man a<u>h</u>yaytahu minna fa-a<u>h</u>yihi <sup>c</sup>ala-l-islami. Wa man tawaffaytahu minna fa-tawaffahu <sup>c</sup>ala-l-imani. Allahumma la ta<u>h</u>rimna ajrahu wa la tu<u>d</u>illaba ba<sup>c</sup>dahu.",
                "audio": "audio/157.mp3"
            }, {
                "id": 158,
                "meaning": "O Allah, so-and-so is under Your care and protection so protect him from the trial of the grave and torment of the Fire. Indeed You are faithful and truthful. Forgive and have mercy upon him, surely You are The Oft-Forgiving, The Most-Merciful.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1573;&#1616;&#1606;&#1617;&#1614; &#1601;&#1615;&#1604;&#1575;&#1606;&#1614; &#1576;&#1618;&#1606;&#1614; &#1601;&#1615;&#1604;&#1575;&#1606;&#1613; &#1601;&#1610; &#1584;&#1616;&#1605;&#1617;&#1614;&#1600;&#1578;&#1616;&#1603; &#1548; &#1608;&#1614;&#1581;&#1614;&#1576;&#1618;&#1600;&#1604;&#1616; &#1580;&#1616;&#1600;&#1608;&#1575;&#1585;&#1616;&#1603; &#1548; &#1601;&#1614;&#1602;&#1616;&#1600;&#1607;&#1616; &#1605;&#1616;&#1606;&#1618; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1616; &#1575;&#1604;&#1618;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585;&#1616; &#1608;&#1614;&#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1585; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1571;&#1614;&#1607;&#1618;&#1604;&#1615; &#1575;&#1604;&#1618;&#1608;&#1614;&#1601;&#1600;&#1575;&#1569;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1600;&#1581;&#1614;&#1602;&#1617;&#1616; &#1548; &#1601;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1614;&#1607;&#1615; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1607;&#1615; &#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1594;&#1614;&#1600;&#1601;&#1608;&#1585;&#1615; &#1575;&#1604;&#1600;&#1585;&#1617;&#1614;&#1581;&#1610;&#1605; ",
                "transliteration": "Allahumma inna (citer le nom) fi dhimmatika wa <u>h</u>abli jiwarika. Fa-qihi min fitnati-l-qabri wa <sup>c</sup>adhabi n-nari. Wa anta ahlu-l-wafa'i wa-l-<u>h</u>haqqi. Fa-ghfir lahu wa r<u>h</u>amhu, innaka anta-l-ghafÃ»ru r-ra<u>h</u>im.",
                "audio": "audio/158.mp3"
            }, {
                "id": 159,
                "meaning": "O Allah, Your servant and the son of Your maidservant is in need of Your mercy and You are without need of his punishment. If he was righteous then increase his reward and if he was wicked then look over his sins.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1603;&#1614; &#1608;&#1614;&#1575;&#1576;&#1618;&#1606;&#1615; &#1571;&#1614;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1548; &#1575;&#1581;&#1618;&#1578;&#1600;&#1575;&#1580;&#1614; &#1573;&#1616;&#1604;&#1609; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1594;&#1614;&#1606;&#1616;&#1600;&#1610;&#1617;&#1612; &#1593;&#1614;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616;&#1600;&#1607;&#1548; &#1573;&#1616;&#1606;&#1618; &#1603;&#1575;&#1606;&#1614; &#1605;&#1615;&#1581;&#1618;&#1600;&#1587;&#1616;&#1606;&#1575;&#1611; &#1601;&#1614;&#1586;&#1616;&#1583;&#1618; &#1601;&#1610; &#1581;&#1614;&#1587;&#1614;&#1600;&#1606;&#1575;&#1578;&#1616;&#1607;&#1548; &#1608;&#1614;&#1573;&#1616;&#1606;&#1618; &#1603;&#1575;&#1606;&#1614; &#1605;&#1615;&#1587;&#1600;&#1610;&#1574;&#1575;&#1611; &#1601;&#1614;&#1578;&#1614;&#1600;&#1580;&#1575;&#1608;&#1614;&#1586;&#1618; &#1593;&#1614;&#1606;&#1618;&#1600;&#1607;",
                "transliteration": "Allahumma <sup>c</sup>abduka wa bnu amatika i<u>h</u>taja ila ra<u>h</u>matika. Wa anta ghaniyyun <sup>c</sup>an <sup>c</sup>adhabihi. In kana mu<u>h</u>sinan, fa-zid fi <u>h</u>asanatihi. Wa in kana musi'an fa-tajawaz <sup>c</sup>anhu.",
                "audio": "audio/159.mp3"
            }]
        }, {
            "id": 53,
            "title": "When closing the eyes of the deceased",
            "duas": [{
                "id": 155,
                "meaning": "O Allah, forgive -here the name of the deceased is mentioned- and raise his rank among the rightly guided, and be a successor to whom he has left behind, and forgive us and him O Lord of the worlds. Make spacious his grave and illuminate it for him.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1616;&#1600;-&#1601;&#1604;&#1575;&#1606; &#1576;&#1575;&#1587;&#1600;&#1605;&#1607;- &#1608;&#1614;&#1575;&#1585;&#1618;&#1601;&#1614;&#1593;&#1618; &#1583;&#1614;&#1585;&#1614;&#1580;&#1614;&#1578;&#1614;&#1600;&#1607;&#1615; &#1601;&#1610; &#1575;&#1604;&#1605;&#1614;&#1607;&#1618;&#1600;&#1583;&#1616;&#1610;&#1610;&#1600;&#1606; &#1548; &#1608;&#1614;&#1575;&#1582;&#1618;&#1600;&#1604;&#1615;&#1601;&#1618;&#1600;&#1607;&#1615; &#1601;&#1610; &#1593;&#1614;&#1602;&#1616;&#1600;&#1576;&#1616;&#1607;&#1616; &#1601;&#1610; &#1575;&#1604;&#1594;&#1575;&#1576;&#1616;&#1600;&#1585;&#1610;&#1606;&#1548; &#1608;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1614;&#1606;&#1600;&#1575; &#1608;&#1614;&#1604;&#1614;&#1600;&#1607;&#1615; &#1610;&#1575; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1593;&#1600;&#1575;&#1604;&#1614;&#1605;&#1600;&#1610;&#1606;&#1548; &#1608;&#1614;&#1575;&#1601;&#1618;&#1587;&#1614;&#1600;&#1581;&#1618; &#1604;&#1614;&#1607;&#1615; &#1601;&#1610; &#1602;&#1614;&#1576;&#1618;&#1600;&#1585;&#1616;&#1607;&#1616; &#1608;&#1614;&#1606;&#1614;&#1600;&#1608;&#1617;&#1616;&#1585;&#1618; &#1604;&#1614;&#1607;&#1615; &#1601;&#1610;&#1607;",
                "transliteration": "Allahumma ghfir li-fulanin (citer son nom) wa rfa<sup>c</sup> darajatahu fi-l-mahdiyyina, wa khlufhu fi <sup>c</sup>aqibihi fi-l-ghabirina. Wa ghfir lana wa lahu, ya rabba-l-<sup>c</sup>alamina, wa fsa<u>h</u> lahu fi qabrihi wa nawwir lahu fihi.",
                "audio": "audio/155.mp3"
            }]
        }, {
            "id": 52,
            "title": "For one afflicted by a calamity",
            "duas": [{
                "id": 154,
                "meaning": "To Allah we belong and unto Him is our return.O Allah, recompense me for my affliction and replace it for me with something better.",
                "arabic": "&#1573;&#1616;&#1606;&#1617;&#1575; &#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1573;&#1616;&#1606;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1607;&#1616; &#1585;&#1575;&#1580;&#1616;&#1593;&#1600;&#1608;&#1606; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615;&#1600;&#1605;&#1617;&#1616; &#1575;&#1618;&#1580;&#1615;&#1600;&#1585;&#1618;&#1606;&#1610; &#1601;&#1610; &#1605;&#1615;&#1589;&#1600;&#1610;&#1576;&#1614;&#1578;&#1610;&#1548; &#1608;&#1614;&#1575;&#1582;&#1618;&#1604;&#1615;&#1600;&#1601;&#1618; &#1604;&#1610; &#1582;&#1614;&#1610;&#1618;&#1600;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618;&#1600;&#1607;&#1575;",
                "transliteration": "Inna li-l-lahi wa inna ilayhi raji<sup>c</sup>una. Allahumma 'jurni mu<u>s</u>ibati wa khluf li khayran minha.",
                "audio": "audio/154.mp3"
            }]
        }, {
            "id": 51,
            "title": "Instruction for the one nearing death",
            "duas": [{
                "id": 153,
                "meaning": "None has the right to be worshipped except Allah.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;",
                "transliteration": "La ilaha illa l-lahu ",
                "audio": "audio/153.mp3"
            }]
        }, {
            "id": 50,
            "title": "When the sick have renounced all hope of life",
            "duas": [{
                "id": 150,
                "meaning": "O Allah, forgive me, have mercy upon me and unite me with the higher companions.",
                "arabic": "&#1571;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1606;&#1610; &#1608;&#1614;&#1571;&#1614;&#1604;&#1618;&#1581;&#1616;&#1602;&#1618;&#1600;&#1606;&#1610; &#1576;&#1616;&#1575;&#1604;&#1585;&#1617;&#1614;&#1601;&#1600;&#1610;&#1602;&#1616; &#1575;&#1604;&#1571;&#1617;&#1593;&#1618;&#1604;&#1600;&#1609; ",
                "transliteration": "Allahumma ghfir li, wa r<u>h</u>amni, wa al<u>h</u>iqni bi-r-rafiqi-l-a<sup>c</sup>la.",
                "audio": "audio/150.mp3"
            }, {
                "id": 151,
                "meaning": "None has the right to be worshipped except Allah, death does indeed contain agony.",
                "arabic": "&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1607;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614; &#1604;&#1604;&#1605;&#1614;&#1600;&#1608;&#1618;&#1578;&#1616; &#1604;&#1614;&#1587;&#1614;&#1603;&#1614;&#1600;&#1585;&#1575;&#1578;",
                "transliteration": "La ilaha illa l-lahu. Inna li-l-mawti la-sakaratin.",
                "audio": "audio/151.mp3"
            }, {
                "id": 152,
                "meaning": "None has the right to be worshipped except Allah and Allah is the greatest.None has the right to be worshipped except Allah, alone.None has the right to be worshipped except Allah, alone, without partner.None has the right to be worshipped except Allah, to Him belongs all sovereignty and praise. None has the right to be worshipped except Allah and there is no might and no power except with Allah.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1600;&#1585;&#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1604;&#1575; &#1581;&#1614;&#1600;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1575; &#1602;&#1615;&#1600;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;",
                "transliteration": "La ilaha illa l-lahu wa l-lahu akbar. La ilaha illa l-lahu wa<u>h</u>dahu. La ilaha illa l-lahu wa<u>h</u>dahu la sharika lahu. La ilaha illa l-lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu. La ilaha illa l-lahu, wa la <u>h</u>awla wa la quwwata illa bi-l-lahi.",
                "audio": "audio/152.mp3"
            }]
        }, {
            "id": 49,
            "title": "Excellence of visiting the sick",
            "duas": [{
                "id": 149,
                "meaning": "[If a man calls on his sick Muslim brother, it is as if he walks reaping the fruits of Paradise until he sits, and when he sits he is showered in mercy, and if this was in the morning, seventy thousand angles send prayers upon him until the evening, and if this was in the evening, seventy thousand angles send prayers upon him until the morning.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 48,
            "title": "When visiting the sick",
            "duas": [{
                "id": 147,
                "meaning": "Never mind, may it (the sickness) be a purification, if Allah wills.",
                "arabic": "&#1604;&#1575; &#1576;&#1571;&#1618;&#1587;&#1614; &#1591;&#1614;&#1607;&#1600;&#1608;&#1585;&#1612; &#1573;&#1616;&#1606;&#1618; &#1588;&#1600;&#1575;&#1569;&#1614; &#1575;&#1604;&#1604;&#1607; ",
                "transliteration": "La ba'sa, <u>t</u>ahÃ»run in sha'a l-lahu.",
                "audio": "audio/147.mp3"
            }, {
                "id": 148,
                "meaning": "I ask Allah The Supreme, Lord of the magnificent throne to cure you. [seven times]",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615; &#1575;&#1604;&#1604;&#1607;&#1614; &#1575;&#1604;&#1593;&#1614;&#1600;&#1592;&#1610;&#1600;&#1605;&#1548; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1593;&#1614;&#1600;&#1585;&#1618;&#1588;&#1616; &#1575;&#1604;&#1593;&#1614;&#1600;&#1592;&#1610;&#1600;&#1605; &#1571;&#1614;&#1606;&#1618; &#1610;&#1614;&#1588;&#1618;&#1601;&#1600;&#1610;&#1603; .(&#1587;&#1576;&#1593; &#1605;&#1585;&#1575;&#1578;)",
                "transliteration": "As'alu l-laha-l-<sup>c</sup>a<u>z</u>ima, rabba-l-<sup>c</sup>arshi-l-<sup>c</sup>a<u>z</u>imi, an yashfiyaka.",
                "audio": "audio/148.mp3"
            }]
        }, {
            "id": 47,
            "title": "Placing childen under Allah&#146;s protection",
            "duas": [{
                "id": 146,
                "meaning": "I commend you to the protection of AllahÂ’s perfect words from every devil, vermin, and every evil eye.",
                "arabic": "&#1571;&#1615;&#1593;&#1610;&#1600;&#1584;&#1615;&#1603;&#1615;&#1605;&#1600;&#1575; &#1576;&#1616;&#1603;&#1614;&#1604;&#1616;&#1600;&#1605;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1578;&#1617;&#1600;&#1575;&#1605;&#1617;&#1614;&#1577;&#1548; &#1605;&#1616;&#1606;&#1618; &#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1613; &#1608;&#1614;&#1607;&#1600;&#1575;&#1605;&#1617;&#1614;&#1577;&#1548; &#1608;&#1614;&#1605;&#1616;&#1606;&#1618; &#1603;&#1615;&#1600;&#1604;&#1617;&#1616; &#1593;&#1614;&#1600;&#1610;&#1618;&#1606;&#1613; &#1604;&#1575;&#1605;&#1617;&#1614;&#1600;&#1577;",
                "transliteration": "U<sup>c</sup>idhukuma bi-kalimati l-lahi t-tammati min kulli shay<u>t</u>anin wa hammatin, wa min kulli <sup>c</sup>aynin lammatin.",
                "audio": "audio/146.mp3"
            }]
        }, {
            "id": 46,
            "title": "Congratulation on the occasion of a birth",
            "duas": [{
                "id": 145,
                "meaning": "May Allah bless what He allots to you (this child) and may you be grateful to the One who allots him to you. May he (this child) come to maturity and may Allah allot him the good behaviour towards you.<br /> <br /> [Answer :] May Allah bless every thing that He allots to you ! May Allah reward you by His forgiveness, allot a new-born like mine to you and give you an abundant retribution.",
                "arabic": "&#1576;&#1614;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1614;&#1603;&#1614; &#1601;&#1616;&#1575;&#1604;&#1618;&#1605;&#1614;&#1608;&#1618;&#1607;&#1615;&#1608;&#1576;&#1616;, &#1608;&#1614; &#1588;&#1614;&#1603;&#1614;&#1585;&#1618;&#1578;&#1614; &#1575;&#1604;&#1618;&#1608;&#1614;&#1575;&#1607;&#1616;&#1576;, &#1608;&#1614; &#1576;&#1614;&#1604;&#1614;&#1594;&#1614; &#1571;&#1614;&#1588;&#1615;&#1583;&#1617;&#1614;&#1607;&#1615;, &#1608;&#1614; &#1585;&#1615;&#1586;&#1616;&#1602;&#1618;&#1578;&#1614; &#1576;&#1585;&#1617;&#1614;&#1607; --- &#1576;&#1614;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1614;&#1603;&#1614; &#1608;&#1614; &#1576;&#1614;&#1575;&#1585;&#1614;&#1603;&#1614; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1603;&#1614;&#1548; &#1614;&#1608;&#1580;&#1614;&#1586;&#1614;&#1575;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1582;&#1614;&#1610;&#1618;&#1585;&#1575;&#1611;&#1548; &#1608;&#1614;&#1585;&#1614;&#1586;&#1614;&#1602;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1605;&#1616;&#1579;&#1618;&#1604;&#1614;&#1607;&#1615;&#1548; &#1608;&#1571;&#1614;&#1580;&#1618;&#1586;&#1614;&#1604;&#1614; &#1579;&#1614;&#1608;&#1614;&#1575;&#1576;&#1614;&#1603;&#1614;",
                "transliteration": "Baraka l-lahu laka fi-l-mawhÃ»bi laka, wa shakarta-l-wahiba, wa balagha ashuddahu, wa ruziqta birrahu.<br ?>Ce Ã  quoi on rÃ©pond :<br ?>Baraka l-lahu laka, wa baraka <sup>c</sup>alayka, wa jazaka l-lahu khayran, wa razaqaka l-lahu mithlahu, wa ajzala thawabaka.",
                "audio": "audio/145.mp3"
            }]
        }, {
            "id": 45,
            "title": "When stricken with a mishap or overtaken by an affair",
            "duas": [{
                "id": 144,
                "meaning": "Allah has decreed and what He wills, He does.",
                "arabic": "&#1602;&#1614;&#1583;&#1617;&#1614;&#1585;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1605;&#1575; &#1588;&#1600;&#1575;&#1569;&#1614; &#1601;&#1614;&#1593;&#1614;&#1600;&#1604; ",
                "transliteration": "Qaddaru l-lahi wa ma sha'a fa<sup>c</sup>ala.",
                "audio": "audio/144.mp3"
            }]
        }, {
            "id": 44,
            "title": "For expelling the devil and his whisperings",
            "duas": [{
                "id": 141,
                "meaning": "[Seek refuge from him.]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/141.mp3"
            }, {
                "id": 142,
                "meaning": "[the athan (call to prayer)]",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 143,
                "meaning": "[Recitation of the Quran and the authentic texts of remembrance and supplications.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 43,
            "title": "Upon committing a sin",
            "duas": [{
                "id": 140,
                "meaning": "[Any servant who commits a sin and as a result, performs ablution, prays two units of prayer and then seeks AllahÂ’s forgiveness, Allah would forgive him.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 42,
            "title": "For one whose affairs have become difficult",
            "duas": [{
                "id": 139,
                "meaning": "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1575; &#1587;&#1614;&#1600;&#1607;&#1618;&#1604;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1605;&#1575; &#1580;&#1614;&#1593;&#1614;&#1604;&#1600;&#1578;&#1614;&#1607;&#1615; &#1587;&#1614;&#1607;&#1600;&#1604;&#1575;&#1611;&#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1578;&#1614;&#1580;&#1618;&#1600;&#1593;&#1614;&#1604;&#1615; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1586;&#1614;&#1606;&#1614; &#1573;&#1616;&#1584;&#1575; &#1588;&#1616;&#1600;&#1574;&#1618;&#1578;&#1614; &#1587;&#1614;&#1607;&#1600;&#1618;&#1604;&#1575;&#1611;",
                "transliteration": "Allahumma la sahla illa ma ja<sup>c</sup>altahu sahlan, wa anta taj<sup>c</sup>alu-l-<u>h</u>azana idha shi'ta sahlan.",
                "audio": "audio/139.mp3"
            }]
        }, {
            "id": 41,
            "title": "for one afflicted by whisperings in prayer or recitation",
            "duas": [{
                "id": 138,
                "meaning": "[Seek refuge in Allah from him and spit on your left side three times.]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/138.mp3"
            }]
        }, {
            "id": 40,
            "title": "Settling a debt",
            "duas": [{
                "id": 136,
                "meaning": "O Allah, make what is lawful enough for me, as opposed to what is unlawful, and spare me by Your grace, of need of others.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1603;&#1618;&#1601;&#1616;&#1600;&#1606;&#1610; &#1576;&#1616;&#1581;&#1614;&#1604;&#1575;&#1604;&#1616;&#1600;&#1603;&#1614; &#1593;&#1614;&#1606;&#1618; &#1581;&#1614;&#1600;&#1585;&#1575;&#1605;&#1616;&#1600;&#1603;&#1548; &#1608;&#1614;&#1571;&#1614;&#1594;&#1618;&#1606;&#1616;&#1600;&#1606;&#1610; &#1576;&#1616;&#1601;&#1614;&#1590;&#1618;&#1600;&#1604;&#1616;&#1603;&#1616; &#1593;&#1614;&#1605;&#1617;&#1614;&#1600;&#1606;&#1618; &#1587;&#1616;&#1600;&#1608;&#1575;&#1603; ",
                "transliteration": "Allahumma kfini bi-<u>h</u>alalika <sup>c</sup>an <u>h</u>aramika wa ghnini bi-fa<u>d</u>lika <sup>c</sup>amman siwak.",
                "audio": "audio/136.mp3"
            }, {
                "id": 137,
                "meaning": "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1571;&#1614;&#1593;&#1618;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1607;&#1614;&#1600;&#1605;&#1617;&#1616; &#1608;&#1614; &#1575;&#1604;&#1618;&#1581;&#1615;&#1600;&#1586;&#1618;&#1606;&#1616;&#1548; &#1608;&#1575;&#1604;&#1593;&#1611;&#1580;&#1618;&#1600;&#1586;&#1616; &#1608;&#1575;&#1604;&#1603;&#1614;&#1587;&#1614;&#1604;&#1616; &#1608;&#1575;&#1604;&#1576;&#1615;&#1582;&#1618;&#1600;&#1604;&#1616; &#1608;&#1575;&#1604;&#1580;&#1615;&#1600;&#1576;&#1618;&#1606;&#1616;&#1548; &#1608;&#1590;&#1614;&#1604;&#1618;&#1600;&#1593;&#1616; &#1575;&#1604;&#1600;&#1583;&#1617;&#1614;&#1610;&#1618;&#1606;&#1616; &#1608;&#1594;&#1614;&#1604;&#1614;&#1576;&#1614;&#1600;&#1577;&#1616; &#1575;&#1604;&#1585;&#1617;&#1616;&#1580;&#1575;&#1604;",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika mina-l-hammi wa-l-<u>h</u>azani, wa-l-<sup>c</sup>ajzi wa-l-kasali, wa-l-bukhli wa-l-jubni, wa <u>d</u>dala<sup>c</sup>i d-dayni wa ghalabati r-rijal.",
                "audio": "audio/137.mp3"
            }]
        }, {
            "id": 39,
            "title": "For one afflicted with doubt in his faith",
            "duas": [{
                "id": 133,
                "meaning": "[He should seek refuge in Allah, and renounce that which is causing such doubt.]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1610;&#1600;&#1605; ",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/133.mp3"
            }, {
                "id": 134,
                "meaning": "I have believed in Allah and His Messenger.",
                "arabic": "&#1570;&#1605;&#1614;&#1606;&#1618;&#1600;&#1578;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1585;&#1615;&#1587;&#1615;&#1600;&#1604;&#1616;&#1607;",
                "transliteration": "amantu bi-l-lahi wa rusÃ»lihi.",
                "audio": "audio/134.mp3"
            }, {
                "id": 135,
                "meaning": "He is The First and The Last, Aththahir and Al-Batin and He knows well all things.",
                "arabic": "&#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1571;&#1608;&#1617;&#1614;&#1604;&#1615;&#1548; &#1608;&#1614;&#1575;&#1604;&#1570;&#1582;&#1616;&#1600;&#1585;&#1615;&#1548; &#1608;&#1614;&#1575;&#1604;&#1592;&#1617;&#1600;&#1575;&#1607;&#1616;&#1600;&#1585;&#1615;&#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1576;&#1600;&#1575;&#1591;&#1616;&#1600;&#1606;&#1615;&#1548; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1576;&#1616;&#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1610;&#1569;&#1613; &#1593;&#1614;&#1604;&#1600;&#1610;&#1605; ",
                "transliteration": "Huwa-l-awwalu wa-l-akhiru wa <u>z</u>-<u>z</u>ahiru wa-l-ba<u>t</u>inu, wa huwa bi-kulli shay'in <sup>c</sup>alim.",
                "audio": "audio/135.mp3"
            }]
        }, {
            "id": 38,
            "title": "When being afraid of a group of people",
            "duas": [{
                "id": 132,
                "meaning": "O Allah, protect me from them with what You choose.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1603;&#1618;&#1601;&#1616;&#1604;&#1618;&#1606;&#1616;&#1610;&#1607;&#1616;&#1605; &#1576;&#1605;&#1614;&#1575; &#1588;&#1616;&#1574;&#1618;&#1578;",
                "transliteration": "Allahumma kfinihim bima shi'ta.",
                "audio": "audio/132.mp3"
            }]
        }, {
            "id": 37,
            "title": "Against enemies",
            "duas": [{
                "id": 131,
                "meaning": "O Allah, Revealer of the Book, Swift at reckoning, defeat the confederates. O Allah, defeat them and convulse them.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1605;&#1615;&#1606;&#1618;&#1586;&#1616;&#1604;&#1614; &#1575;&#1604;&#1618;&#1603;&#1616;&#1578;&#1614;&#1575;&#1576;, &#1587;&#1614;&#1585;&#1616;&#1610;&#1593;&#1614; &#1575;&#1604;&#1618;&#1581;&#1616;&#1587;&#1614;&#1575;&#1576;, &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1607;&#1618;&#1586;&#1616;&#1605;&#1618;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614; &#1586;&#1614;&#1604;&#1618;&#1586;&#1616;&#1604;&#1618;&#1607;&#1615;&#1605;",
                "transliteration": "Allahumma ! Munzila-l-kitabi, sari<sup>c</sup>a-l-<u>h</u>isabi ! Ihzimi-l-a<u>h</u>zaba. Allahumma hzimhum wa zalzilhum.",
                "audio": "audio/131.mp3"
            }]
        }, {
            "id": 36,
            "title": "For one afraid of governor's injustice",
            "duas": [{
                "id": 129,
                "meaning": "O Allah, Lord of the seven heavens and the earth and the great throne, protect me from so-and-so [tell the name of the person] and from his allies among your creatures, and from being subjected by their abus or tyranny. Honoured is your protected, exalted is your praise, none has the right to be worshipped except You.<br ?>",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1576;&#1593;&#1616;, &#1608;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1593;&#1614;&#1585;&#1588;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1616;&#1610;&#1605;&#1616;, &#1603;&#1615;&#1606; &#1604;&#1616;&#1610; &#1580;&#1614;&#1575;&#1585;&#1575;&#1611; &#1605;&#1616;&#1606; (&#1575;&#1616;&#1587;&#1605;&#1615;&#1607;&#1615;( &#1608;&#1614; &#1571;&#1614;&#1581;&#1586;&#1614;&#1575;&#1576;&#1616;&#1607;&#1616; &#1605;&#1616;&#1606; &#1582;&#1614;&#1604;&#1575;&#1574;&#1616;&#1602;&#1616;&#1603;&#1614;, &#1571;&#1614;&#1606; &#1610;&#1614;&#1601;&#1585;&#1615;&#1591;&#1614; &#1593;&#1614;&#1604;&#1614;&#1610;&#1617;&#1614; &#1571;&#1614;&#1581;&#1614;&#1583;&#1612; &#1605;&#1616;&#1606;&#1607;&#1615;&#1605; &#1608;&#1614; &#1610;&#1614;&#1591;&#1594;&#1614;&#1609; &#1593;&#1614;&#1586;&#1617;&#1614; &#1580;&#1614;&#1575;&#1585;&#1615;&#1603;&#1614; &#1608;&#1614; &#1580;&#1614;&#1604;&#1617;&#1614;  &#1579;&#1614;&#1606;&#1614;&#1575;&#1574;&#1615;&#1603;&#1614;, &#1608;&#1614; &#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575; &#1571;&#1614;&#1606;&#1578;",
                "transliteration": "Allahumma rabba s-samawati s-sab<sup>c</sup>i, wa rabba-l-<sup>c</sup>arshi-l-<sup>c</sup>a<u>z</u>imi. Kun li jaran min (citer son nom) wa a<u>h</u>zabihi min khala'iqika, an yafru<u>t</u>a <sup>c</sup>alayya a<u>h</u>adun minhum wa ya<u>t</u>gha.<sup>c</sup>Azza jaruka, wa jalla thana'uka, wa la ilaha illa ant.",
                "audio": "audio/129.mp3"
            }, {
                "id": 130,
                "meaning": "Allah is the greatest, Allah is mightier than all things. Allah is mightier than the one I'm afraid of and I mistrust. I take refuge in Allah, none has the right to be worshipped except Allah, who hold back the seven heavens from falling on earth except when he'll allowed this, from the misdeeds of You slave so-and-so [tell the name of the person], from his soldiers, from his partisans among the djinns and the human beings. &Ocirc; Lord ! Be my protector from their misdeeds. Exalted is Your praise, honoured is Your protected, blessed is Your name and none has the right to be worshipped except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;, &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1593;&#1614;&#1586;&#1617;&#1615; &#1605;&#1616;&#1606;&#1618; &#1582;&#1614;&#1604;&#1618;&#1602;&#1616;&#1607;&#1616; &#1580;&#1614;&#1605;&#1616;&#1610;&#1593;&#1611;&#1575;, &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1593;&#1614;&#1586;&#1617;&#1615; &#1605;&#1616;&#1605;&#1617;&#1614;&#1575; &#1571;&#1614;&#1582;&#1614;&#1575;&#1601;&#1615; &#1608;&#1614; &#1571;&#1614;&#1581;&#1618;&#1584;&#1614;&#1585;, &#1571;&#1614;&#1593;&#1615;&#1608;&#1584;&#1615; &#1576;&#1575;&#1604;&#1604;&#1616;&#1607; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1604;&#1575;&#1614; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1607;&#1615;&#1608;, , &#1575;&#1604;&#1618;&#1605;&#1615;&#1605;&#1618;&#1587;&#1616;&#1603;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1576;&#1618;&#1593;&#1616; &#1571;&#1614;&#1606;&#1618; &#1610;&#1614;&#1602;&#1614;&#1593;&#1618;&#1606;&#1614; &#1593;&#1614;&#1604;&#1614;&#1609; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1576;&#1616;&#1573;&#1616;&#1584;&#1618;&#1606;&#1616;&#1607;, &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616; &#1593;&#1614;&#1576;&#1618;&#1583;&#1616;&#1603;&#1614; &#1601;&#1615;&#1604;&#1575;&#1614;&#1606;&#1613;, &#1608;&#1614; &#1580;&#1615;&#1606;&#1615;&#1608;&#1583;&#1614;&#1607;&#1615; &#1608;&#1614; &#1571;&#1614;&#1578;&#1618;&#1576;&#1614;&#1575;&#1593;&#1614;&#1607;&#1615; &#1608;&#1614; &#1571;&#1614;&#1588;&#1618;&#1610;&#1614;&#1575;&#1593;&#1614;&#1607;, &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1580;&#1616;&#1606;&#1617;&#1616; &#1608;&#1614; &#1575;&#1604;&#1573;&#1616;&#1606;&#1618;&#1587;, &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1603;&#1615;&#1606; &#1604;&#1616;&#1610; &#1580;&#1614;&#1575;&#1585;&#1611;&#1575; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1585;&#1617;&#1616;&#1607;&#1616;&#1605;, &#1580;&#1614;&#1604;&#1617;&#1614; &#1579;&#1614;&#1606;&#1614;&#1575;&#1572;&#1615;&#1603; &#1608;&#1614; &#1593;&#1614;&#1586;&#1617;&#1614; &#1580;&#1614;&#1575;&#1585;&#1615;&#1603;, &#1608;&#1614; &#1580;&#1614;&#1604;&#1617;&#1614; &#1579;&#1614;&#1606;&#1614;&#1575;&#1572;&#1615;&#1603;, &#1608;&#1614; &#1604;&#1575;&#1614; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;",
                "transliteration": "Allahu akbaru. Allahu a<sup>c</sup>azzu min khalqihi jami<sup>c</sup>an. Allahu a<sup>c</sup>azzu mimma akhafu wa a<u>h</u>dharu. A<sup>c</sup>Ã»dhu bi-l-lahi l-ladhi la ilaha illa huwa-l-mumsiki s-samawati s-sab<sup>c</sup>i an yaqa<sup>c</sup>na <sup>c</sup>ala-l-ar<u>d</u>i illa bi-idhnihi, min sharri <sup>c</sup>abdika (citer son nom) wa junÃ»dihi wa atba<sup>c</sup>ihi wa ashya<sup>c</sup>ihi mina-l-jinni wa-l-insi. Allahumma kun li jaran min sharrihim. Jalla thana'uka wa <sup>c</sup>azza aruka, wa tabaraka smuka, wa la ilaha ghayruka.",
                "audio": "audio/130.mp3"
            }]
        }, {
            "id": 35,
            "title": "Upon encountering an enemy or those of authority",
            "duas": [{
                "id": 126,
                "meaning": "O Allah, we place You before them and we take refuge in You from their evil.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1575; &#1606;&#1614;&#1580;&#1618;&#1600;&#1593;&#1614;&#1604;&#1615;&#1603;&#1614; &#1601;&#1610; &#1606;&#1615;&#1581;&#1600;&#1608;&#1585;&#1616;&#1607;&#1616;&#1600;&#1605;&#1548; &#1608;&#1614;&#1606;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1615;&#1585;&#1608;&#1585;&#1616;&#1607;&#1600;&#1605;&#1618; ",
                "transliteration": "Allahumma inna naj<sup>c</sup>aluka fi nu<u>h</u>Ã» rihim, wa na<sup>c</sup>Ã»dhu bika min shurÃ»rihim.",
                "audio": "audio/126.mp3"
            }, {
                "id": 127,
                "meaning": "O Allah, You are my supporter and You are my helper, by You I move and by You I attack and by You I battle.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1593;&#1614;&#1590;&#1615;&#1600;&#1583;&#1610;&#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1606;&#1614;&#1589;&#1600;&#1610;&#1585;&#1610;&#1548; &#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1580;&#1600;&#1608;&#1604;&#1615; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1589;&#1600;&#1608;&#1604;&#1615; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1571;&#1615;&#1602;&#1600;&#1575;&#1578;&#1616;&#1604; ",
                "transliteration": "Allahumma anta <sup>c</sup>a<u>d</u>udi, wa anta na<u>s</u>iri. Bika ajÃ»lu, wa bika a<u>s</u>sÃ»lu, wa bika uqatil.",
                "audio": "audio/127.mp3"
            }, {
                "id": 128,
                "meaning": "Allah is sufficient for us, and how fine a trustee (He is).",
                "arabic": "&#1581;&#1614;&#1587;&#1618;&#1576;&#1615;&#1600;&#1606;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1606;&#1616;&#1593;&#1618;&#1600;&#1605;&#1614; &#1575;&#1604;&#1608;&#1614;&#1603;&#1600;&#1610;&#1604;",
                "transliteration": "<u>H</u>asbuna l-lahu, wa ni<sup>c</sup>ma-l-wakil.",
                "audio": "audio/128.mp3"
            }]
        }, {
            "id": 34,
            "title": "For one in distress",
            "duas": [{
                "id": 122,
                "meaning": "None has the right to be worshipped except Allah Forbearing. None has the right to be worshipped except Allah, Lord of the magnificent throne. None has the right to be worshipped except Allah, Lord of the heavens, Lord of the Earth and Lord of the noble throne.",
                "arabic": "&#1604;&#1614;&#1575; &#1573;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615; &#1575;&#1604;&#1618;&#1593;&#1614;&#1592;&#1600;&#1610;&#1605;&#1615; &#1575;&#1604;&#1618;&#1581;&#1614;&#1604;&#1616;&#1600;&#1610;&#1605;&#1618;&#1548; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1593;&#1614;&#1600;&#1585;&#1618;&#1588;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1616;&#1610;&#1600;&#1605;&#1616;&#1548; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1618; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1600;&#1608;&#1617;&#1575;&#1578;&#1616; &#1608;&#1585;&#1617;&#1576;&#1617;&#1615; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1593;&#1614;&#1585;&#1618;&#1588;&#1616; &#1575;&#1604;&#1603;&#1614;&#1600;&#1585;&#1610;&#1605;",
                "transliteration": "La ilaha illa l-lahu-l-<sup>c</sup>a<u>z</u>imu-l-<u>h</u>alimu. La ilaha illa l-lahu, rabbu-l-<sup>c</sup>arshi-l-<sup>c</sup>a<u>z</u>im. La ilaha illa l-lahu, rabbu s-samawati wa rabbu-l-ar<u>d</u>i wa rabbu-l-<sup>c</sup>arshi-l-karim.",
                "audio": "audio/122.mp3"
            }, {
                "id": 123,
                "meaning": "O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye and rectify for me all of my affairs. None has the right to be worshipped except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1578;&#1614;&#1600;&#1603;&#1614; &#1571;&#1614;&#1585;&#1618;&#1580;&#1600;&#1608;&#1601;&#1614;&#1604;&#1575; &#1578;&#1614;&#1603;&#1616;&#1604;&#1600;&#1606;&#1610; &#1573;&#1616;&#1604;&#1609; &#1606;&#1614;&#1601;&#1618;&#1600;&#1587;&#1610; &#1591;&#1614;&#1600;&#1585;&#1618;&#1601;&#1614;&#1577;&#1614; &#1593;&#1614;&#1600;&#1610;&#1618;&#1606;&#1548; &#1608;&#1614;&#1571;&#1614;&#1589;&#1618;&#1604;&#1616;&#1600;&#1581;&#1618; &#1604;&#1610; &#1588;&#1614;&#1571;&#1618;&#1606;&#1600;&#1610; &#1603;&#1615;&#1604;&#1617;&#1614;&#1600;&#1607; &#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1571;&#1606;&#1618;&#1600;&#1578;",
                "transliteration": "Allahumma ra<u>h</u>mataka arjÃ». Fala takilni ila nafsi <u>t</u>arfata <sup>c</sup>aynin, wa a<u>s</u>li<u>h</u> li sha'ni kullahu. La ilaha illa anta.",
                "audio": "audio/123.mp3"
            }, {
                "id": 124,
                "meaning": "None has the right to be worshipped except You. How perfect You are, verily I was among the wrong-doers.",
                "arabic": "&#1604;&#1614;&#1575; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1617;&#1614;&#1575; &#1571;&#1606;&#1618;&#1600;&#1578; &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614;&#1603;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1603;&#1615;&#1606;&#1618;&#1600;&#1578;&#1615; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1592;&#1617;&#1600;&#1575;&#1604;&#1616;&#1605;&#1610;&#1600;&#1606;",
                "transliteration": "La ilaha illa anta, sub<u>h</u>anaka, inni kuntu mina <u>z</u>-<u>z</u>alimin.",
                "audio": "audio/124.mp3"
            }, {
                "id": 125,
                "meaning": "Allah, Allah is my Lord, I do not associate anything with Him.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1575;&#1604;&#1604;&#1607;&#1615; &#1585;&#1614;&#1576;&#1617;&#1616; &#1604;&#1575; &#1571;&#1615;&#1588;&#1618;&#1600;&#1585;&#1616;&#1603;&#1615; &#1576;&#1616;&#1607;&#1616; &#1588;&#1614;&#1610;&#1618;&#1600;&#1574;&#1575;&#1611;",
                "transliteration": "Allahu, Allahu rabbi. La ushriku bihi shay'an.",
                "audio": "audio/125.mp3"
            }]
        }, {
            "id": 33,
            "title": "For anxiety and sorrow",
            "duas": [{
                "id": 120,
                "meaning": "O Allah, I am Your servant, son of Your servant, son of Your maidservant, my forelock is in Your hand, Your command over me is forever executed and Your decree over me is just. I ask You by every name belonging to You which You named Yourself with, or revealed in Your Book, or You taught to any of Your creation, or You have preserved in the knowledge of the unseen with You, that You make the Quran the life of my heart and the light of my breast, and a departure for my sorrow and a release for my anxiety.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1603;&#1614; &#1575;&#1576;&#1618;&#1606;&#1615; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1616;&#1603;&#1614; &#1575;&#1576;&#1618;&#1606;&#1615; &#1571;&#1614;&#1605;&#1614;&#1578;&#1616;&#1600;&#1603;&#1614; &#1606;&#1614;&#1575;&#1589;&#1616;&#1610;&#1614;&#1578;&#1616;&#1610; &#1576;&#1616;&#1610;&#1614;&#1600;&#1583;&#1616;&#1603;&#1614;&#1548; &#1605;&#1614;&#1575;&#1590;&#1613; &#1601;&#1616;&#1610;&#1617;&#1614; &#1581;&#1615;&#1603;&#1618;&#1605;&#1615;&#1603;&#1614;&#1548; &#1593;&#1614;&#1583;&#1618;&#1604;&#1612; &#1601;&#1616;&#1610;&#1617;&#1614; &#1602;&#1614;&#1590;&#1614;&#1575;&#1572;&#1603;&#1614; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1576;&#1616;&#1603;&#1615;&#1604;&#1617;&#1616; &#1575;&#1587;&#1618;&#1605;&#1613; &#1607;&#1615;&#1608;&#1614; &#1604;&#1614;&#1603;&#1614; &#1587;&#1614;&#1605;&#1617;&#1614;&#1600;&#1610;&#1618;&#1578;&#1614; &#1576;&#1616;&#1607;&#1616; &#1606;&#1614;&#1601;&#1618;&#1587;&#1614;&#1603;&#1614; &#1571;&#1616;&#1608;&#1618; &#1571;&#1614;&#1606;&#1618;&#1586;&#1614;&#1604;&#1618;&#1578;&#1614;&#1600;&#1607;&#1615; &#1601;&#1616;&#1610; &#1603;&#1616;&#1578;&#1614;&#1575;&#1576;&#1616;&#1603;&#1614;&#1548; &#1571;&#1614;&#1608;&#1618; &#1593;&#1614;&#1604;&#1617;&#1614;&#1605;&#1618;&#1600;&#1578;&#1614;&#1607;&#1615; &#1571;&#1614;&#1581;&#1614;&#1583;&#1575;&#1611; &#1605;&#1616;&#1606;&#1618; &#1582;&#1614;&#1604;&#1618;&#1602;&#1616;&#1600;&#1603;&#1614; &#1571;&#1614;&#1608;&#1616; &#1575;&#1587;&#1618;&#1578;&#1614;&#1600;&#1571;&#1618;&#1579;&#1614;&#1585;&#1618;&#1578;&#1614; &#1576;&#1616;&#1607;&#1616; &#1601;&#1616;&#1610; &#1593;&#1616;&#1604;&#1618;&#1605;&#1616; &#1575;&#1604;&#1594;&#1614;&#1610;&#1618;&#1600;&#1576;&#1616; &#1593;&#1616;&#1606;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618; &#1578;&#1614;&#1580;&#1618;&#1600;&#1593;&#1614;&#1604;&#1614; &#1575;&#1604;&#1602;&#1615;&#1585;&#1618;&#1570;&#1606;&#1614; &#1585;&#1614;&#1576;&#1616;&#1610;&#1600;&#1593;&#1614; &#1602;&#1614;&#1604;&#1618;&#1576;&#1616;&#1600;&#1610;&#1548; &#1608;&#1614;&#1606;&#1608;&#1585;&#1614; &#1589;&#1614;&#1600;&#1583;&#1618;&#1585;&#1616;&#1610; &#1608;&#1580;&#1614;&#1604;&#1614;&#1575;&#1569;&#1614; &#1581;&#1615;&#1600;&#1586;&#1618;&#1606;&#1616;&#1610; &#1608;&#1584;&#1614;&#1607;&#1614;&#1575;&#1576;&#1614; &#1607;&#1614;&#1605;&#1617;&#1616;&#1600;&#1610;",
                "transliteration": "Allahumma inni <sup>c</sup>abduka, ibnu <sup>c</sup>abdika, ibnu amatika. Na<u>s</u>iyati bi-yadika. Ma<u>d</u>in fiyya <u>h</u>ukmuka, <sup>c</sup>adlun fiyya qa<u>d</u>a'uka. As'aluka bi-kulli smin huwa laka, sammayta bihi nafsaka, aw anzaltahu fi kitabika, aw <sup>c</sup>allamtahu a<u>h</u>adan min khalqika, aw ista'tharta bihi fi <sup>c</sup>ilmi-l-ghaybi <sup>c</sup>indaka, an taj<sup>c</sup>ala-l-qur'ana rabi<sup>c</sup>a qalbi, wa nÃ»ra <u>s</u>sadri, wa jala'a <u>h</u>uzni, wa dhahaba hammi.",
                "audio": "audio/120.mp3"
            }, {
                "id": 121,
                "meaning": "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1610; &#1571;&#1614;&#1593;&#1618;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1607;&#1614;&#1600;&#1605;&#1617;&#1616; &#1608;&#1614; &#1575;&#1604;&#1618;&#1581;&#1615;&#1600;&#1586;&#1618;&#1606;&#1616;&#1548; &#1608;&#1575;&#1604;&#1593;&#1611;&#1580;&#1618;&#1600;&#1586;&#1616; &#1608;&#1575;&#1604;&#1603;&#1614;&#1587;&#1614;&#1604;&#1616; &#1608;&#1575;&#1604;&#1576;&#1615;&#1582;&#1618;&#1600;&#1604;&#1616; &#1608;&#1575;&#1604;&#1580;&#1615;&#1600;&#1576;&#1618;&#1606;&#1616;&#1548; &#1608;&#1590;&#1614;&#1604;&#1618;&#1600;&#1593;&#1616; &#1575;&#1604;&#1600;&#1583;&#1617;&#1614;&#1610;&#1618;&#1606;&#1616; &#1608;&#1594;&#1614;&#1604;&#1614;&#1576;&#1614;&#1600;&#1577;&#1616; &#1575;&#1604;&#1585;&#1617;&#1616;&#1580;&#1575;&#1604;",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika mina-l-hammi wa-l-<u>h</u>azani, wa-l-<sup>c</sup>ajzi wa-l-kasali, wa-l-bukhli wa-l-jubni, wa <u>d</u>ala<sup>c</sup>i d-dayni wa ghalabati r-rijal.",
                "audio": "audio/121.mp3"
            }]
        }, {
            "id": 32,
            "title": "Immediately after salam of the witr prayer",
            "duas": [{
                "id": 119,
                "meaning": "How perfect The King, The Holy One is [three times]. Lord of the angels and the Rooh.",
                "arabic": "&#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1605;&#1614;&#1604;&#1616;&#1603;&#1616; &#1575;&#1604;&#1602;&#1615;&#1583;&#1617;&#1608;&#1587;,&#1585;&#1576;&#1617;&#1616; &#1575;&#1604;&#1605;&#1604;&#1575;&#1574;&#1603;&#1577;&#1616; &#1608;&#1575;&#1604;&#1585;&#1617;&#1608;&#1581;",
                "transliteration": "Sub<u>h</u>ana-l-maliki-l-quddÃ»si. [Rabbi-l-mala'ikati wa r-rÃ»hi.]",
                "audio": "audio/119.mp3"
            }]
        }, {
            "id": 31,
            "title": "Qunoot Al-Witr",
            "duas": [{
                "id": 116,
                "meaning": "O Allah, guide me along with those whom You have guided, pardon me along with those whom You have pardoned, be an ally to me along with those whom You are an ally to and bless for me that which You have bestowed. Protect me from the evil You have decreed for verily You decree and none can decree over You.For surety, he whom you show allegiance to is never abased and he whom You take as an enemy is never honoured and mighty. O our Lord, Blessed and Exalted are You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1607;&#1618;&#1600;&#1583;&#1616;&#1606;&#1600;&#1610; &#1601;&#1600;&#1610;&#1605;&#1614;&#1606;&#1618; &#1607;&#1614;&#1600;&#1583;&#1614;&#1610;&#1618;&#1600;&#1578;&#1548; &#1608;&#1614;&#1593;&#1600;&#1575;&#1601;&#1616;&#1606;&#1600;&#1610; &#1601;&#1600;&#1610;&#1605;&#1614;&#1606;&#1618; &#1593;&#1575;&#1601;&#1614;&#1600;&#1610;&#1618;&#1578;&#1548; &#1608;&#1614;&#1578;&#1614;&#1608;&#1614;&#1604;&#1617;&#1614;&#1600;&#1606;&#1610; &#1601;&#1600;&#1610;&#1605;&#1614;&#1606;&#1618; &#1578;&#1614;&#1608;&#1614;&#1604;&#1617;&#1614;&#1600;&#1610;&#1618;&#1578; &#1548; &#1608;&#1614;&#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1600;&#1610; &#1601;&#1600;&#1610;&#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1591;&#1614;&#1600;&#1610;&#1618;&#1578;&#1548; &#1608;&#1614;&#1602;&#1616;&#1600;&#1606;&#1610; &#1588;&#1614;&#1585;&#1617;&#1614; &#1605;&#1575; &#1602;&#1614;&#1590;&#1614;&#1600;&#1610;&#1618;&#1578;&#1548; &#1601;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1578;&#1614;&#1602;&#1618;&#1600;&#1590;&#1610; &#1608;&#1614;&#1604;&#1575; &#1610;&#1615;&#1602;&#1618;&#1600;&#1590;&#1609; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603; &#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1607;&#1615; &#1604;&#1575; &#1610;&#1614;&#1600;&#1584;&#1616;&#1604;&#1617;&#1615; &#1605;&#1614;&#1606;&#1618; &#1608;&#1575;&#1604;&#1614;&#1600;&#1610;&#1618;&#1578;&#1548; [ &#1608;&#1614;&#1604;&#1575; &#1610;&#1614;&#1593;&#1616;&#1600;&#1586;&#1617;&#1615; &#1605;&#1614;&#1606; &#1593;&#1600;&#1575;&#1583;&#1614;&#1610;&#1618;&#1578; ]&#1548; &#1578;&#1614;&#1576;&#1600;&#1575;&#1585;&#1614;&#1603;&#1618;&#1600;&#1578;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1600;&#1606;&#1575; &#1608;&#1614;&#1578;&#1614;&#1593;&#1600;&#1575;&#1604;&#1614;&#1600;&#1610;&#1618;&#1578;",
                "transliteration": "Allahumma hdini fiman hadayta wa <sup>c</sup>afini fiman <sup>c</sup>afayta, wa tawallani fiman tawallayta, wa barik li fima a<sup>c</sup><u>t</u>ayta, wa qini sharra ma qa<u>d</u>ayta. Fa-innaka taq<u>d</u>i wa la yuq<u>d</u>a <sup>c</sup>alayka. Innahu la yadhillu man walayta [wa la ya<sup>c</sup>izzu man <sup>c</sup>adayta]. Tabarakata rabbana wa ta<sup>c</sup>alayta.",
                "audio": "audio/116.mp3"
            }, {
                "id": 117,
                "meaning": "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise. You are as You have praised Yourself.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1616;&#1590;&#1600;&#1575;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1587;&#1614;&#1582;&#1614;&#1591;&#1616;&#1600;&#1603;&#1548; &#1608;&#1614;&#1576;&#1616;&#1605;&#1615;&#1593;&#1600;&#1575;&#1601;&#1575;&#1578;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1593;&#1615;&#1602;&#1608;&#1576;&#1614;&#1600;&#1578;&#1616;&#1603;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618;&#1600;&#1603;&#1548; &#1604;&#1575; &#1571;&#1615;&#1581;&#1618;&#1589;&#1600;&#1610; &#1579;&#1614;&#1606;&#1600;&#1575;&#1569;&#1611; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1548; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1603;&#1614;&#1605;&#1600;&#1575; &#1571;&#1614;&#1579;&#1618;&#1606;&#1614;&#1600;&#1610;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1616;&#1603;",
                "transliteration": "Allahumma inni a<sup>c</sup>udhu bi-ri<u>d</u>aka min sakha<u>t</u>tika, wa bi-mu<sup>c</sup>afatika min <sup>c</sup>uqÃ»batika. Wa a<sup>c</sup>Ã»dhu bika minka. La u<u>h</u><u>s</u> thana'an <sup>c</sup>alayka, anta kama athnayta <sup>c</sup>ala nafsik.",
                "audio": "audio/117.mp3"
            }, {
                "id": 118,
                "meaning": "O Allah, it is You we worship, and unto You we pray and prostrate, and towards You we hasten and You we serve. We hope for Your mercy and fear Your punishment, verily Your punishment will fall upon the disbelievers.O Allah, we seek Your aid and ask Your pardon, we praise You with all good and do not disbelieve in You.We believe in You and submit unto You, and we disown and reject those who disbelieve in You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1610;&#1617;&#1600;&#1575;&#1603;&#1614; &#1606;&#1593;&#1618;&#1600;&#1576;&#1615;&#1583;&#1618;&#1548; &#1608;&#1614;&#1604;&#1614;&#1600;&#1603;&#1614; &#1606;&#1615;&#1589;&#1614;&#1604;&#1617;&#1600;&#1610; &#1608;&#1614;&#1606;&#1614;&#1587;&#1618;&#1600;&#1580;&#1615;&#1583;&#1548; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1606;&#1614;&#1587;&#1618;&#1600;&#1593;&#1609; &#1608;&#1614;&#1606;&#1614;&#1581;&#1618;&#1600;&#1601;&#1616;&#1583;&#1548; &#1606;&#1614;&#1600;&#1585;&#1618;&#1580;&#1608; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1614;&#1603;&#1548; &#1608;&#1614;&#1606;&#1614;&#1582;&#1618;&#1588;&#1600;&#1609; &#1593;&#1614;&#1600;&#1584;&#1575;&#1576;&#1614;&#1603;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614; &#1593;&#1614;&#1600;&#1584;&#1575;&#1576;&#1614;&#1603;&#1614; &#1576;&#1575;&#1604;&#1603;&#1600;&#1575;&#1601;&#1585;&#1610;&#1606; &#1605;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602;. &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1575; &#1606;&#1614;&#1587;&#1618;&#1578;&#1614;&#1593;&#1600;&#1610;&#1606;&#1615;&#1603;&#1614; &#1608;&#1614;&#1606;&#1614;&#1587;&#1618;&#1578;&#1614;&#1600;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615;&#1603;&#1548; &#1608;&#1614;&#1606;&#1615;&#1579;&#1618;&#1600;&#1606;&#1600;&#1610; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603; &#1575;&#1604;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614;&#1548; &#1608;&#1614;&#1604;&#1575; &#1606;&#1614;&#1603;&#1618;&#1600;&#1601;&#1615;&#1585;&#1615;&#1603;&#1548; &#1608;&#1614;&#1606;&#1615;&#1600;&#1572;&#1618;&#1605;&#1616;&#1606;&#1615; &#1576;&#1616;&#1603;&#1548; &#1608;&#1614;&#1606;&#1614;&#1582;&#1618;&#1600;&#1590;&#1614;&#1593;&#1615; &#1604;&#1614;&#1603;&#1614; &#1608;&#1614;&#1606;&#1614;&#1582;&#1618;&#1600;&#1604;&#1614;&#1593;&#1615; &#1605;&#1614;&#1606;&#1618; &#1610;&#1614;&#1603;&#1618;&#1600;&#1601;&#1585;&#1615;&#1603;",
                "transliteration": "Allahumma iyyaka na<sup>c</sup>budu, wa laka nu<u>s</u>alli wa nasjudu, wa ilayka nas<sup>c</sup>a wa na<u>h</u>fidu, najrÃ» ra<u>h</u>mataka wa nakhsha <sup>c</sup>adhabaka, inna <sup>c</sup>adhabaka bi-l-kafirina mul<u>h</u>aqun. Allahumma inna nasta<sup>c</sup>inuka wa nastaghfiruka, wa nuthni <sup>c</sup>alayka-l-khayra wa la nakfuruka, wa nu'minu bika, wa nakh<u>d</u>a<sup>c</sup>u laka, wa nakhla<sup>c</sup>u man yakfuruka.",
                "audio": "audio/118.mp3"
            }]
        }, {
            "id": 30,
            "title": "Upon seeing a good dream or a bad dream",
            "duas": [{
                "id": 114,
                "meaning": "[Spit on your left three times, seek refuge in Allah from shaytan and the evil of what you saw, do not relate it to anyone, turn and sleep on the opposite side to which you were sleeping on previously.]",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 115,
                "meaning": "[Get up and pray if you so desire.]",
                "arabic": ".",
                "transliteration": "."
            }]
        }, {
            "id": 29,
            "title": "Upon experiencing unrest, fear, apprehensiveness... during sleep",
            "duas": [{
                "id": 113,
                "meaning": "I take refuge in the perfect words of Allah from His anger and punishment, and from the evil of His servants, and from the madness and appearance of devils.",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614;&#1604;&#1616;&#1605;&#1600;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1578;&#1617;&#1600;&#1575;&#1605;&#1617;&#1600;&#1575;&#1578;&#1616; &#1605;&#1616;&#1606; &#1594;&#1614;&#1590;&#1614;&#1600;&#1576;&#1616;&#1607;&#1616; &#1608;&#1614;&#1593;&#1616;&#1600;&#1602;&#1575;&#1576;&#1616;&#1607;&#1616; &#1548; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1616;&#1607;&#1616; &#1608;&#1614;&#1605;&#1616;&#1606;&#1618; &#1607;&#1614;&#1605;&#1614;&#1600;&#1586;&#1575;&#1578;&#1616; &#1575;&#1604;&#1588;&#1617;&#1614;&#1600;&#1610;&#1575;&#1591;&#1610;&#1606;&#1616; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618; &#1610;&#1614;&#1581;&#1618;&#1590;&#1600;&#1585;&#1608;&#1606;",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-kalimati l-lahi t-tammati min gha<u>d</u>abihi, wa <sup>c</sup>iqabihi, wa sharri <sup>c</sup>ibadihi, wa min hamazati sh-shaya<u>t</u>ini, wa an ya<u>h</u><u>d</u>urÃ»ni.",
                "audio": "audio/113.mp3"
            }]
        }, {
            "id": 28,
            "title": "When turning over during the night",
            "duas": [{
                "id": 112,
                "meaning": "None has the right to be worshipped except Allah, The One, AL-Qahhar. Lord of the heavens and the Earth and all between them, The Exalted in Might, The Oft-Forgiving.",
                "arabic": "&#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1607;&#1615; &#1575;&#1604;&#1600;&#1608;&#1575;&#1581;&#1616;&#1583;&#1615; &#1575;&#1604;&#1602;&#1614;&#1607;&#1617;&#1600;&#1575;&#1585; &#1548; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1605;&#1575; &#1576;&#1614;&#1610;&#1618;&#1600;&#1606;&#1614;&#1607;&#1600;&#1605;&#1575; &#1548; &#1575;&#1604;&#1593;&#1614;&#1586;&#1610;&#1600;&#1586;&#1615; &#1575;&#1604;&#1594;&#1614;&#1600;&#1601;&#1617;&#1575;&#1585;",
                "transliteration": "La ilaha illa l-lahu-l-wa<u>h</u>idu-l-qahharu, rabbu s-samawati wa-l-ar<u>d</u>i wa ma baynahuma-l-<sup>c</sup>azizu-l-ghaffar.",
                "audio": "audio/112.mp3"
            }]
        }, {
            "id": 27,
            "title": "Before sleeping",
            "duas": [{
                "id": 99,
                "meaning": "[When retiring to his bed every night, the Prophet (saws) would hold his palms together, spit (A form of spitting comprising mainly of air with little spittle) in them, recite the last three chapters (Al-Ikhlas, Al-Falaq, An-Nas) of the Quran and then wipe over his entire body as much as possible with his hands, beginning with his head and face and then all parts of the body, he would do this three times.]",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 100,
                "meaning": "[verse of the foot-stool : II,255]",
                "arabic": "(&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1602;&#1616;&#1606;&#1600;&#1610; &#1593;&#1614;&#1584;&#1575;&#1576;&#1614;&#1600;&#1603;&#1614; &#1610;&#1614;&#1600;&#1608;&#1618;&#1605;&#1614; &#1578;&#1614;&#1576;&#1618;&#1600;&#1593;&#1614;&#1579;&#1615; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1614;&#1603; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;",
                "transliteration": ""
            }, {
                "id": 101,
                "meaning": "[The last two verses of Surat Al-Baqarah]",
                "arabic": " &#1569;&#1575;&#1605;&#1614;&#1606;&#1614; &#1575;&#1604;&#1585;&#1617;&#1614;&#1587;&#1615;&#1608;&#1604;&#1615; &#1576;&#1616;&#1605;&#1614;&#1575; &#1571;&#1615;&#1606;&#1586;&#1616;&#1604;&#1614; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616; &#1605;&#1616;&#1606; &#1585;&#1617;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1605;&#1615;&#1572;&#1618;&#1605;&#1616;&#1606;&#1615;&#1608;&#1606;&#1614; &#1603;&#1615;&#1604;&#1617;&#1612; &#1569;&#1575;&#1605;&#1614;&#1606;&#1614; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1605;&#1614;&#1604;&#1570;&#1574;&#1616;&#1603;&#1614;&#1578;&#1616;&#1607;&#1616; &#1608;&#1614;&#1603;&#1615;&#1578;&#1615;&#1576;&#1616;&#1607;&#1616; &#1608;&#1614;&#1585;&#1615;&#1587;&#1615;&#1604;&#1616;&#1607;&#1616; &#1604;&#1575;&#1614; &#1606;&#1615;&#1601;&#1614;&#1585;&#1617;&#1616;&#1602;&#1615; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614; &#1571;&#1614;&#1581;&#1614;&#1583;&#1613; &#1605;&#1617;&#1616;&#1606; &#1585;&#1617;&#1615;&#1587;&#1615;&#1604;&#1616;&#1607;&#1616; &#1608;&#1614;&#1602;&#1614;&#1575;&#1604;&#1615;&#1608;&#1575;&#1618; &#1587;&#1614;&#1605;&#1616;&#1593;&#1618;&#1606;&#1614;&#1575; &#1608;&#1614;&#1571;&#1614;&#1591;&#1614;&#1593;&#1618;&#1606;&#1614;&#1575; &#1594;&#1615;&#1601;&#1618;&#1585;&#1614;&#1575;&#1606;&#1614;&#1603;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1603;&#1614; &#1575;&#1604;&#1618;&#1605;&#1614;&#1589;&#1616;&#1610;&#1585;&#1615; {285} &#1604;&#1575;&#1614; &#1610;&#1615;&#1603;&#1614;&#1604;&#1617;&#1616;&#1601;&#1615; &#1575;&#1604;&#1604;&#1607;&#1615; &#1606;&#1614;&#1601;&#1618;&#1587;&#1611;&#1575; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1608;&#1615;&#1587;&#1618;&#1593;&#1614;&#1607;&#1614;&#1575; &#1604;&#1614;&#1607;&#1614;&#1575; &#1605;&#1614;&#1575; &#1603;&#1614;&#1587;&#1614;&#1576;&#1614;&#1578;&#1618; &#1608;&#1614;&#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1607;&#1614;&#1575; &#1605;&#1614;&#1575; &#1575;&#1603;&#1618;&#1578;&#1614;&#1587;&#1614;&#1576;&#1614;&#1578;&#1618; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1604;&#1575;&#1614; &#1578;&#1615;&#1572;&#1614;&#1575;&#1582;&#1616;&#1584;&#1618;&#1606;&#1614;&#1575; &#1573;&#1616;&#1606; &#1606;&#1617;&#1614;&#1587;&#1616;&#1610;&#1606;&#1614;&#1575; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1582;&#1618;&#1591;&#1614;&#1571;&#1618;&#1606;&#1614;&#1575; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1604;&#1575;&#1614; &#1578;&#1614;&#1581;&#1618;&#1605;&#1616;&#1604;&#1618; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1606;&#1614;&#1575; &#1573;&#1616;&#1589;&#1618;&#1585;&#1611;&#1575; &#1603;&#1614;&#1605;&#1614;&#1575; &#1581;&#1614;&#1605;&#1614;&#1604;&#1618;&#1578;&#1614;&#1607;&#1615; &#1593;&#1614;&#1604;&#1614;&#1609; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1605;&#1616;&#1606; &#1602;&#1614;&#1576;&#1618;&#1604;&#1616;&#1606;&#1614;&#1575; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1604;&#1575;&#1614; &#1578;&#1615;&#1581;&#1614;&#1605;&#1617;&#1616;&#1604;&#1618;&#1606;&#1614;&#1575; &#1605;&#1614;&#1575; &#1604;&#1575;&#1614; &#1591;&#1614;&#1575;&#1602;&#1614;&#1577;&#1614; &#1604;&#1614;&#1606;&#1614;&#1575; &#1576;&#1616;&#1607;&#1616; &#1608;&#1614;&#1575;&#1593;&#1618;&#1601;&#1615; &#1593;&#1614;&#1606;&#1617;&#1614;&#1575; &#1608;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1606;&#1614;&#1570; &#1571;&#1614;&#1606;&#1578;&#1614; &#1605;&#1614;&#1608;&#1618;&#1604;&#1575;&#1614;&#1606;&#1614;&#1575; &#1601;&#1614;&#1575;&#1606;&#1589;&#1615;&#1585;&#1618;&#1606;&#1614;&#1575; &#1593;&#1614;&#1604;&#1614;&#1609; &#1575;&#1604;&#1618;&#1602;&#1614;&#1608;&#1618;&#1605;&#1616; &#1575;&#1604;&#1618;&#1603;&#1614;&#1575;&#1601;&#1616;&#1585;&#1616;&#1610;&#1606;&#1614; {286}",
                "transliteration": ""
            }, {
                "id": 102,
                "meaning": "In Your name my Lord, I lie down and in Your name I rise, so if You should take my soul then have mercy upon it, and if You should return my soul then protect it in the manner You do so with Your righteous servants.",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 103,
                "meaning": "O Allah, verily You have created my soul and You shall take itÂ’s life, to You belongs itÂ’s life and death. If You should keep my soul alive then protect it, and if You should take itÂ’s life then forgive it. O Allah, I ask You to grant me good health.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1587;&#1617;&#1605;&#1600;&#1608;&#1575;&#1578;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1576;&#1618;&#1600;&#1593;&#1616; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1614; &#1575;&#1604;&#1593;&#1614;&#1600;&#1585;&#1618;&#1588;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1600;&#1610;&#1605; &#1548; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1600;&#1575; &#1608;&#1614;&#1585;&#1614;&#1576;&#1617;&#1614; &#1603;&#1615;&#1600;&#1604;&#1617;&#1616; &#1588;&#1614;&#1600;&#1610;&#1569; &#1548; &#1601;&#1575;&#1604;&#1616;&#1600;&#1602;&#1614; &#1575;&#1604;&#1581;&#1614;&#1600;&#1576;&#1617;&#1616; &#1608;&#1614;&#1575;&#1604;&#1606;&#1617;&#1614;&#1600;&#1608;&#1609; &#1548; &#1608;&#1614;&#1605;&#1615;&#1600;&#1606;&#1614;&#1586;&#1617;&#1616;&#1604;&#1614; &#1575;&#1604;&#1578;&#1617;&#1614;&#1600;&#1608;&#1618;&#1585;&#1575;&#1577;&#1616; &#1608;&#1614;&#1575;&#1604;&#1573;&#1606;&#1618;&#1580;&#1600;&#1610;&#1604; &#1548; &#1608;&#1575;&#1604;&#1601;&#1615;&#1600;&#1585;&#1618;&#1602;&#1575;&#1606; &#1548; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1606; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1603;&#1615;&#1600;&#1604;&#1617;&#1616; &#1588;&#1614;&#1600;&#1610;&#1569;&#1613; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1570;&#1582;&#1616;&#1600;&#1584;&#1612; &#1576;&#1616;&#1606;&#1600;&#1575;&#1589;&#1616;&#1600;&#1610;&#1614;&#1578;&#1616;&#1607; . &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1571;&#1608;&#1617;&#1614;&#1604;&#1615; &#1601;&#1614;&#1604;&#1614;&#1600;&#1610;&#1587;&#1614; &#1602;&#1614;&#1576;&#1618;&#1600;&#1604;&#1614;&#1603;&#1614; &#1588;&#1614;&#1610;&#1569; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1570;&#1582;&#1616;&#1600;&#1585;&#1615;&#1601;&#1614;&#1604;&#1614;&#1600;&#1610;&#1587;&#1614; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1588;&#1614;&#1610;&#1569; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1592;&#1617;&#1600;&#1575;&#1607;&#1616;&#1600;&#1585;&#1615;&#1601;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1587;&#1614; &#1601;&#1614;&#1600;&#1608;&#1618;&#1602;&#1614;&#1600;&#1603;&#1614; &#1588;&#1614;&#1610;&#1569; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1618;&#1576;&#1600;&#1575;&#1591;&#1616;&#1600;&#1606;&#1615; &#1601;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1587;&#1614; &#1583;&#1608;&#1606;&#1614;&#1600;&#1603;&#1614; &#1588;&#1614;&#1610;&#1569; &#1548; &#1575;&#1602;&#1600;&#1618;&#1590;&#1616; &#1593;&#1614;&#1606;&#1617;&#1600;&#1575; &#1575;&#1604;&#1600;&#1583;&#1617;&#1614;&#1610;&#1618;&#1600;&#1606;&#1614; &#1608;&#1614;&#1571;&#1614;&#1594;&#1618;&#1600;&#1606;&#1616;&#1606;&#1600;&#1575; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1601;&#1614;&#1600;&#1602;&#1618;&#1585;",
                "transliteration": ""
            }, {
                "id": 104,
                "meaning": "O Allah, protect me from Your punishment on the day Your servants are resurrected. [three times]",
                "arabic": "(&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1602;&#1616;&#1606;&#1600;&#1610; &#1593;&#1614;&#1584;&#1575;&#1576;&#1614;&#1600;&#1603;&#1614; &#1610;&#1614;&#1600;&#1608;&#1618;&#1605;&#1614; &#1578;&#1614;&#1576;&#1618;&#1600;&#1593;&#1614;&#1579;&#1615; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1614;&#1603; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;",
                "transliteration": ""
            }, {
                "id": 105,
                "meaning": "In Your name O Allah, I live and die.",
                "arabic": "&#1576;&#1616;&#1575;&#1587;&#1618;&#1600;&#1605;&#1616;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1605;&#1600;&#1608;&#1578;&#1615; &#1608;&#1614;&#1571;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575;",
                "transliteration": ""
            }, {
                "id": 106,
                "meaning": "How Perfect Allah is [thirty-three times]. All praise is for Allah [thirty-three times]. Allah is the greatest. [thirty-four times]",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 107,
                "meaning": "O Allah, Lord of the seven heavens and the exalted throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Tawrah, the Injeel and the Furqan, I take refuge in You from the evil of all things You shall seize by the forelock. O Allah, You are The First so there is nothing before You and You are The Last so there is nothing after You.You are Aththahir so there is nothing above You and You are Al-Batin so there is nothing closer than You.Settle our debt for us and spare us from poverty.",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 108,
                "meaning": "All praise is for Allah, Who fed us and gave us drink, and Who is sufficient for us and has sheltered us, for how many have none to suffice them or shelter them.",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 109,
                "meaning": "O Allah, Knower of the seen and the unseen, Creator of the heavens and the earth, Lord and Sovereign of all things I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.",
                "arabic": "",
                "transliteration": ""
            }, {
                "id": 110,
                "meaning": "[Surat As-Sajdah : XXXII, Surat Al-Mulk  : LXVII]",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1616;&#1610;&#1605;&#1616; &#1575;&#1604;&#1605; {1} &#1578;&#1614;&#1606;&#1586;&#1616;&#1610;&#1604;&#1615; &#1575;&#1604;&#1618;&#1603;&#1616;&#1578;&#1614;&#1575;&#1576;&#1616; &#1604;&#1575; &#1585;&#1614;&#1610;&#1618;&#1576;&#1614; &#1601;&#1616;&#1610;&#1607;&#1616; &#1605;&#1616;&#1606; &#1585;&#1617;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1618;&#1593;&#1614;&#1575;&#1604;&#1614;&#1605;&#1616;&#1610;&#1606;&#1614; {2} &#1571;&#1614;&#1605;&#1618; &#1610;&#1614;&#1602;&#1615;&#1608;&#1604;&#1615;&#1608;&#1606;&#1614; &#1575;&#1601;&#1618;&#1578;&#1614;&#1585;&#1614;&#1575;&#1607;&#1615; &#1576;&#1614;&#1604;&#1618; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1602;&#1617;&#1615; &#1605;&#1616;&#1606; &#1585;&#1617;&#1614;&#1576;&#1617;&#1616;&#1603;&#1614; &#1604;&#1616;&#1578;&#1615;&#1606;&#1584;&#1616;&#1585;&#1614; &#1602;&#1614;&#1608;&#1618;&#1605;&#1611;&#1575; &#1605;&#1617;&#1614;&#1575; &#1571;&#1614;&#1578;&#1614;&#1575;&#1607;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1606;&#1617;&#1614;&#1584;&#1616;&#1610;&#1585;&#1613; &#1605;&#1617;&#1616;&#1606; &#1602;&#1614;&#1576;&#1618;&#1604;&#1616;&#1603;&#1614; &#1604;&#1614;&#1593;&#1614;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1610;&#1614;&#1607;&#1618;&#1578;&#1614;&#1583;&#1615;&#1608;&#1606;&#1614; {3} &#1575;&#1604;&#1604;&#1607;&#1615; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1608;&#1614;&#1605;&#1614;&#1575; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614;&#1607;&#1615;&#1605;&#1614;&#1575; &#1601;&#1616;&#1610; &#1587;&#1616;&#1578;&#1617;&#1614;&#1577;&#1616; &#1571;&#1614;&#1610;&#1617;&#1614;&#1575;&#1605;&#1613; &#1579;&#1615;&#1605;&#1617;&#1614; &#1575;&#1587;&#1618;&#1578;&#1614;&#1608;&#1614;&#1609; &#1593;&#1614;&#1604;&#1614;&#1609; &#1575;&#1604;&#1618;&#1593;&#1614;&#1585;&#1618;&#1588;&#1616; &#1605;&#1614;&#1575; &#1604;&#1614;&#1603;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1583;&#1615;&#1608;&#1606;&#1616;&#1607;&#1616; &#1605;&#1616;&#1606; &#1608;&#1614;&#1604;&#1616;&#1610;&#1617;&#1613; &#1608;&#1614;&#1604;&#1575; &#1588;&#1614;&#1601;&#1616;&#1610;&#1593;&#1613; &#1571;&#1614;&#1601;&#1614;&#1604;&#1575; &#1578;&#1614;&#1578;&#1614;&#1584;&#1614;&#1603;&#1617;&#1614;&#1585;&#1615;&#1608;&#1606;&#1614; {4} &#1610;&#1615;&#1583;&#1614;&#1576;&#1617;&#1616;&#1585;&#1615; &#1575;&#1604;&#1571;&#1614;&#1605;&#1618;&#1585;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1569; &#1573;&#1616;&#1604;&#1614;&#1609; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1579;&#1615;&#1605;&#1617;&#1614; &#1610;&#1614;&#1593;&#1618;&#1585;&#1615;&#1580;&#1615; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616; &#1601;&#1616;&#1610; &#1610;&#1614;&#1608;&#1618;&#1605;&#1613; &#1603;&#1614;&#1575;&#1606;&#1614; &#1605;&#1616;&#1602;&#1618;&#1583;&#1614;&#1575;&#1585;&#1615;&#1607;&#1615; &#1571;&#1614;&#1604;&#1618;&#1601;&#1614; &#1587;&#1614;&#1606;&#1614;&#1577;&#1613; &#1605;&#1617;&#1616;&#1605;&#1617;&#1614;&#1575; &#1578;&#1614;&#1593;&#1615;&#1583;&#1617;&#1615;&#1608;&#1606;&#1614; {5} &#1584;&#1614;&#1604;&#1616;&#1603;&#1614; &#1593;&#1614;&#1575;&#1604;&#1616;&#1605;&#1615; &#1575;&#1604;&#1618;&#1594;&#1614;&#1610;&#1618;&#1576;&#1616; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1614;&#1607;&#1614;&#1575;&#1583;&#1614;&#1577;&#1616; &#1575;&#1604;&#1618;&#1593;&#1614;&#1586;&#1616;&#1610;&#1586;&#1615; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1616;&#1610;&#1605;&#1615; {6} &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1606;&#1614; &#1603;&#1615;&#1604;&#1617;&#1614; &#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614;&#1607;&#1615; &#1608;&#1614;&#1576;&#1614;&#1583;&#1614;&#1571;&#1614; &#1582;&#1614;&#1604;&#1618;&#1602;&#1614; &#1575;&#1604;&#1573;&#1616;&#1606;&#1587;&#1614;&#1575;&#1606;&#1616; &#1605;&#1616;&#1606; &#1591;&#1616;&#1610;&#1606;&#1613; {7} &#1579;&#1615;&#1605;&#1617;&#1614; &#1580;&#1614;&#1593;&#1614;&#1604;&#1614; &#1606;&#1614;&#1587;&#1618;&#1604;&#1614;&#1607;&#1615; &#1605;&#1616;&#1606; &#1587;&#1615;&#1604;&#1575;&#1604;&#1614;&#1577;&#1613; &#1605;&#1617;&#1616;&#1606; &#1605;&#1617;&#1614;&#1575;&#1569; &#1605;&#1617;&#1614;&#1607;&#1616;&#1610;&#1606;&#1613; {8} &#1579;&#1615;&#1605;&#1617;&#1614; &#1587;&#1614;&#1608;&#1617;&#1614;&#1575;&#1607;&#1615; &#1608;&#1614;&#1606;&#1614;&#1601;&#1614;&#1582;&#1614; &#1601;&#1616;&#1610;&#1607;&#1616; &#1605;&#1616;&#1606; &#1585;&#1617;&#1615;&#1608;&#1581;&#1616;&#1607;&#1616; &#1608;&#1614;&#1580;&#1614;&#1593;&#1614;&#1604;&#1614; &#1604;&#1614;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1618;&#1593;&#1614; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1576;&#1618;&#1589;&#1614;&#1575;&#1585;&#1614; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1601;&#1618;&#1574;&#1616;&#1583;&#1614;&#1577;&#1614; &#1602;&#1614;&#1604;&#1616;&#1610;&#1604;&#1575;&#1611; &#1605;&#1617;&#1614;&#1575; &#1578;&#1614;&#1588;&#1618;&#1603;&#1615;&#1585;&#1615;&#1608;&#1606;&#1614; {9} &#1608;&#1614;&#1602;&#1614;&#1575;&#1604;&#1615;&#1608;&#1575; &#1571;&#1614;&#1574;&#1616;&#1584;&#1614;&#1575; &#1590;&#1614;&#1604;&#1614;&#1604;&#1618;&#1606;&#1614;&#1575; &#1601;&#1616;&#1610; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1571;&#1614;&#1574;&#1616;&#1606;&#1617;&#1614;&#1575; &#1604;&#1614;&#1601;&#1616;&#1610; &#1582;&#1614;&#1604;&#1618;&#1602;&#1613; &#1580;&#1614;&#1583;&#1616;&#1610;&#1583;&#1613; &#1576;&#1614;&#1604;&#1618; &#1607;&#1615;&#1605; &#1576;&#1616;&#1604;&#1616;&#1602;&#1614;&#1575;&#1569; &#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616;&#1605;&#1618; &#1603;&#1614;&#1575;&#1601;&#1616;&#1585;&#1615;&#1608;&#1606;&#1614; {10} &#1602;&#1615;&#1604;&#1618; &#1610;&#1614;&#1578;&#1614;&#1608;&#1614;&#1601;&#1617;&#1614;&#1575;&#1603;&#1615;&#1605; &#1605;&#1617;&#1614;&#1604;&#1614;&#1603;&#1615; &#1575;&#1604;&#1618;&#1605;&#1614;&#1608;&#1618;&#1578;&#1616; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1608;&#1615;&#1603;&#1617;&#1616;&#1604;&#1614; &#1576;&#1616;&#1603;&#1615;&#1605;&#1618; &#1579;&#1615;&#1605;&#1617;&#1614; &#1573;&#1616;&#1604;&#1614;&#1609; &#1585;&#1614;&#1576;&#1617;&#1616;&#1603;&#1615;&#1605;&#1618; &#1578;&#1615;&#1585;&#1618;&#1580;&#1614;&#1593;&#1615;&#1608;&#1606;&#1614; {11} &#1608;&#1614;&#1604;&#1614;&#1608;&#1618; &#1578;&#1614;&#1585;&#1614;&#1609; &#1573;&#1616;&#1584;&#1616; &#1575;&#1604;&#1618;&#1605;&#1615;&#1580;&#1618;&#1585;&#1616;&#1605;&#1615;&#1608;&#1606;&#1614; &#1606;&#1614;&#1575;&#1603;&#1616;&#1587;&#1615;&#1608; &#1585;&#1615;&#1572;&#1615;&#1608;&#1587;&#1616;&#1607;&#1616;&#1605;&#1618; &#1593;&#1616;&#1606;&#1583;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616;&#1605;&#1618; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1571;&#1614;&#1576;&#1618;&#1589;&#1614;&#1585;&#1618;&#1606;&#1614;&#1575; &#1608;&#1614;&#1587;&#1614;&#1605;&#1616;&#1593;&#1618;&#1606;&#1614;&#1575; &#1601;&#1614;&#1575;&#1585;&#1618;&#1580;&#1616;&#1593;&#1618;&#1606;&#1614;&#1575; &#1606;&#1614;&#1593;&#1618;&#1605;&#1614;&#1604;&#1618; &#1589;&#1614;&#1575;&#1604;&#1616;&#1581;&#1611;&#1575; &#1573;&#1616;&#1606;&#1617;&#1614;&#1575; &#1605;&#1615;&#1608;&#1602;&#1616;&#1606;&#1615;&#1608;&#1606;&#1614; {12} &#1608;&#1614;&#1604;&#1614;&#1608;&#1618; &#1588;&#1616;&#1574;&#1618;&#1606;&#1614;&#1575; &#1604;&#1570;&#1578;&#1614;&#1610;&#1618;&#1606;&#1614;&#1575; &#1603;&#1615;&#1604;&#1617;&#1614; &#1606;&#1614;&#1601;&#1618;&#1587;&#1613; &#1607;&#1615;&#1583;&#1614;&#1575;&#1607;&#1614;&#1575; &#1608;&#1614;&#1604;&#1614;&#1603;&#1616;&#1606;&#1618; &#1581;&#1614;&#1602;&#1617;&#1614; &#1575;&#1604;&#1618;&#1602;&#1614;&#1608;&#1618;&#1604;&#1615; &#1605;&#1616;&#1606;&#1617;&#1616;&#1610; &#1604;&#1571;&#1614;&#1605;&#1618;&#1604;&#1571;&#1614;&#1606;&#1617;&#1614; &#1580;&#1614;&#1607;&#1614;&#1606;&#1617;&#1614;&#1605;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1580;&#1616;&#1606;&#1617;&#1614;&#1577;&#1616; &#1608;&#1614;&#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1587;&#1616; &#1571;&#1614;&#1580;&#1618;&#1605;&#1614;&#1593;&#1616;&#1610;&#1606;&#1614; {13} &#1601;&#1614;&#1584;&#1615;&#1608;&#1602;&#1615;&#1608;&#1575; &#1576;&#1616;&#1605;&#1614;&#1575; &#1606;&#1614;&#1587;&#1616;&#1610;&#1578;&#1615;&#1605;&#1618; &#1604;&#1616;&#1602;&#1614;&#1575;&#1569; &#1610;&#1614;&#1608;&#1618;&#1605;&#1616;&#1603;&#1615;&#1605;&#1618; &#1607;&#1614;&#1584;&#1614;&#1575; &#1573;&#1616;&#1606;&#1617;&#1614;&#1575; &#1606;&#1614;&#1587;&#1616;&#1610;&#1606;&#1614;&#1575;&#1603;&#1615;&#1605;&#1618; &#1608;&#1614;&#1584;&#1615;&#1608;&#1602;&#1615;&#1608;&#1575; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1614; &#1575;&#1604;&#1618;&#1582;&#1615;&#1604;&#1618;&#1583;&#1616; &#1576;&#1616;&#1605;&#1614;&#1575; &#1603;&#1615;&#1606;&#1578;&#1615;&#1605;&#1618; &#1578;&#1614;&#1593;&#1618;&#1605;&#1614;&#1604;&#1615;&#1608;&#1606;&#1614; {14} &#1573;&#1616;&#1606;&#1617;&#1614;&#1605;&#1614;&#1575; &#1610;&#1615;&#1572;&#1618;&#1605;&#1616;&#1606;&#1615; &#1576;&#1616;&#1570;&#1610;&#1614;&#1575;&#1578;&#1616;&#1606;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1573;&#1616;&#1584;&#1614;&#1575; &#1584;&#1615;&#1603;&#1617;&#1616;&#1585;&#1615;&#1608;&#1575; &#1576;&#1616;&#1607;&#1614;&#1575; &#1582;&#1614;&#1585;&#1617;&#1615;&#1608;&#1575; &#1587;&#1615;&#1580;&#1617;&#1614;&#1583;&#1611;&#1575; &#1608;&#1614;&#1587;&#1614;&#1576;&#1617;&#1614;&#1581;&#1615;&#1608;&#1575; &#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1583;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1607;&#1615;&#1605;&#1618; &#1604;&#1575; &#1610;&#1614;&#1587;&#1618;&#1578;&#1614;&#1603;&#1618;&#1576;&#1616;&#1585;&#1615;&#1608;&#1606;&#1614; {15} {&#1587;&#1580;&#1583;&#1577;} &#1578;&#1614;&#1578;&#1614;&#1580;&#1614;&#1575;&#1601;&#1614;&#1609; &#1580;&#1615;&#1606;&#1615;&#1608;&#1576;&#1615;&#1607;&#1615;&#1605;&#1618; &#1593;&#1614;&#1606;&#1616; &#1575;&#1604;&#1618;&#1605;&#1614;&#1590;&#1614;&#1575;&#1580;&#1616;&#1593;&#1616; &#1610;&#1614;&#1583;&#1618;&#1593;&#1615;&#1608;&#1606;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1582;&#1614;&#1608;&#1618;&#1601;&#1611;&#1575; &#1608;&#1614;&#1591;&#1614;&#1605;&#1614;&#1593;&#1611;&#1575; &#1608;&#1614;&#1605;&#1616;&#1605;&#1617;&#1614;&#1575; &#1585;&#1614;&#1586;&#1614;&#1602;&#1618;&#1606;&#1614;&#1575;&#1607;&#1615;&#1605;&#1618; &#1610;&#1615;&#1606;&#1601;&#1616;&#1602;&#1615;&#1608;&#1606;&#1614; {16} &#1601;&#1614;&#1604;&#1575; &#1578;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615; &#1606;&#1614;&#1601;&#1618;&#1587;&#1612; &#1605;&#1617;&#1614;&#1575; &#1571;&#1615;&#1582;&#1618;&#1601;&#1616;&#1610;&#1614; &#1604;&#1614;&#1607;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1602;&#1615;&#1585;&#1617;&#1614;&#1577;&#1616; &#1571;&#1614;&#1593;&#1618;&#1610;&#1615;&#1606;&#1613; &#1580;&#1614;&#1586;&#1614;&#1575;&#1569; &#1576;&#1616;&#1605;&#1614;&#1575; &#1603;&#1614;&#1575;&#1606;&#1615;&#1608;&#1575; &#1610;&#1614;&#1593;&#1618;&#1605;&#1614;&#1604;&#1615;&#1608;&#1606;&#1614; {17} &#1571;&#1614;&#1601;&#1614;&#1605;&#1614;&#1606; &#1603;&#1614;&#1575;&#1606;&#1614; &#1605;&#1615;&#1572;&#1618;&#1605;&#1616;&#1606;&#1611;&#1575; &#1603;&#1614;&#1605;&#1614;&#1606; &#1603;&#1614;&#1575;&#1606;&#1614; &#1601;&#1614;&#1575;&#1587;&#1616;&#1602;&#1611;&#1575; &#1604;&#1575; &#1610;&#1614;&#1587;&#1618;&#1578;&#1614;&#1608;&#1615;&#1608;&#1606;&#1614; {18} &#1571;&#1614;&#1605;&#1617;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1569;&#1575;&#1605;&#1614;&#1606;&#1615;&#1608;&#1575; &#1608;&#1614;&#1593;&#1614;&#1605;&#1616;&#1604;&#1615;&#1608;&#1575; &#1575;&#1604;&#1589;&#1617;&#1614;&#1575;&#1604;&#1616;&#1581;&#1614;&#1575;&#1578;&#1616; &#1601;&#1614;&#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1580;&#1614;&#1606;&#1617;&#1614;&#1575;&#1578;&#1615; &#1575;&#1604;&#1618;&#1605;&#1614;&#1571;&#1618;&#1608;&#1614;&#1609; &#1606;&#1615;&#1586;&#1615;&#1604;&#1575;&#1611; &#1576;&#1616;&#1605;&#1614;&#1575; &#1603;&#1614;&#1575;&#1606;&#1615;&#1608;&#1575; &#1610;&#1614;&#1593;&#1618;&#1605;&#1614;&#1604;&#1615;&#1608;&#1606;&#1614; {19} &#1608;&#1614;&#1571;&#1614;&#1605;&#1617;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1601;&#1614;&#1587;&#1614;&#1602;&#1615;&#1608;&#1575; &#1601;&#1614;&#1605;&#1614;&#1571;&#1618;&#1608;&#1614;&#1575;&#1607;&#1615;&#1605;&#1615; &#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1585;&#1615; &#1603;&#1615;&#1604;&#1617;&#1614;&#1605;&#1614;&#1575; &#1571;&#1614;&#1585;&#1614;&#1575;&#1583;&#1615;&#1608;&#1575; &#1571;&#1614;&#1606; &#1610;&#1614;&#1582;&#1618;&#1585;&#1615;&#1580;&#1615;&#1608;&#1575; &#1605;&#1616;&#1606;&#1618;&#1607;&#1614;&#1575; &#1571;&#1615;&#1593;&#1616;&#1610;&#1583;&#1615;&#1608;&#1575; &#1601;&#1616;&#1610;&#1607;&#1614;&#1575; &#1608;&#1614;&#1602;&#1616;&#1610;&#1604;&#1614; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1584;&#1615;&#1608;&#1602;&#1615;&#1608;&#1575; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1614; &#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1585;&#1616; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1603;&#1615;&#1606;&#1578;&#1615;&#1605; &#1576;&#1616;&#1607;&#1616; &#1578;&#1615;&#1603;&#1614;&#1584;&#1617;&#1616;&#1576;&#1615;&#1608;&#1606;&#1614; {20} &#1608;&#1614;&#1604;&#1614;&#1606;&#1615;&#1584;&#1616;&#1610;&#1602;&#1614;&#1606;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1616; &#1575;&#1604;&#1571;&#1614;&#1583;&#1618;&#1606;&#1614;&#1609; &#1583;&#1615;&#1608;&#1606;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1616; &#1575;&#1604;&#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1585;&#1616; &#1604;&#1614;&#1593;&#1614;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1610;&#1614;&#1585;&#1618;&#1580;&#1616;&#1593;&#1615;&#1608;&#1606;&#1614; {21} &#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1571;&#1614;&#1592;&#1618;&#1604;&#1614;&#1605;&#1615; &#1605;&#1616;&#1605;&#1617;&#1614;&#1606; &#1584;&#1615;&#1603;&#1617;&#1616;&#1585;&#1614; &#1576;&#1616;&#1570;&#1610;&#1614;&#1575;&#1578;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616; &#1579;&#1615;&#1605;&#1617;&#1614; &#1571;&#1614;&#1593;&#1618;&#1585;&#1614;&#1590;&#1614; &#1593;&#1614;&#1606;&#1618;&#1607;&#1614;&#1575; &#1573;&#1616;&#1606;&#1617;&#1614;&#1575; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1605;&#1615;&#1580;&#1618;&#1585;&#1616;&#1605;&#1616;&#1610;&#1606;&#1614; &#1605;&#1615;&#1606;&#1578;&#1614;&#1602;&#1616;&#1605;&#1615;&#1608;&#1606;&#1614; {22} &#1608;&#1614;&#1604;&#1614;&#1602;&#1614;&#1583;&#1618; &#1569;&#1575;&#1578;&#1614;&#1610;&#1618;&#1606;&#1614;&#1575; &#1605;&#1615;&#1608;&#1587;&#1614;&#1609; &#1575;&#1604;&#1618;&#1603;&#1616;&#1578;&#1614;&#1575;&#1576;&#1614; &#1601;&#1614;&#1604;&#1575; &#1578;&#1614;&#1603;&#1615;&#1606; &#1601;&#1616;&#1610; &#1605;&#1616;&#1585;&#1618;&#1610;&#1614;&#1577;&#1613; &#1605;&#1617;&#1616;&#1606; &#1604;&#1617;&#1616;&#1602;&#1614;&#1575;&#1574;&#1616;&#1607;&#1616; &#1608;&#1614;&#1580;&#1614;&#1593;&#1614;&#1604;&#1618;&#1606;&#1614;&#1575;&#1607;&#1615; &#1607;&#1615;&#1583;&#1611;&#1609; &#1604;&#1617;&#1616;&#1576;&#1614;&#1606;&#1616;&#1610; &#1573;&#1616;&#1587;&#1618;&#1585;&#1614;&#1575;&#1574;&#1616;&#1610;&#1604;&#1614; {23} &#1608;&#1614;&#1580;&#1614;&#1593;&#1614;&#1604;&#1618;&#1606;&#1614;&#1575; &#1605;&#1616;&#1606;&#1618;&#1607;&#1615;&#1605;&#1618; &#1571;&#1614;&#1574;&#1616;&#1605;&#1617;&#1614;&#1577;&#1611; &#1610;&#1614;&#1607;&#1618;&#1583;&#1615;&#1608;&#1606;&#1614; &#1576;&#1616;&#1571;&#1614;&#1605;&#1618;&#1585;&#1616;&#1606;&#1614;&#1575; &#1604;&#1614;&#1605;&#1617;&#1614;&#1575; &#1589;&#1614;&#1576;&#1614;&#1585;&#1615;&#1608;&#1575; &#1608;&#1614;&#1603;&#1614;&#1575;&#1606;&#1615;&#1608;&#1575; &#1576;&#1616;&#1570;&#1610;&#1614;&#1575;&#1578;&#1616;&#1606;&#1614;&#1575; &#1610;&#1615;&#1608;&#1602;&#1616;&#1606;&#1615;&#1608;&#1606;&#1614; {24} &#1573;&#1616;&#1606;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1603;&#1614; &#1607;&#1615;&#1608;&#1614; &#1610;&#1614;&#1601;&#1618;&#1589;&#1616;&#1604;&#1615; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614;&#1607;&#1615;&#1605;&#1618; &#1610;&#1614;&#1608;&#1618;&#1605;&#1614; &#1575;&#1604;&#1618;&#1602;&#1616;&#1610;&#1614;&#1575;&#1605;&#1614;&#1577;&#1616; &#1601;&#1616;&#1610;&#1605;&#1614;&#1575; &#1603;&#1614;&#1575;&#1606;&#1615;&#1608;&#1575; &#1601;&#1616;&#1610;&#1607;&#1616; &#1610;&#1614;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1615;&#1608;&#1606;&#1614; {25} &#1571;&#1614;&#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1607;&#1618;&#1583;&#1616; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1603;&#1614;&#1605;&#1618; &#1571;&#1614;&#1607;&#1618;&#1604;&#1614;&#1603;&#1618;&#1606;&#1614;&#1575; &#1605;&#1616;&#1606; &#1602;&#1614;&#1576;&#1618;&#1604;&#1616;&#1607;&#1616;&#1605; &#1605;&#1617;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1602;&#1615;&#1585;&#1615;&#1608;&#1606;&#1616; &#1610;&#1614;&#1605;&#1618;&#1588;&#1615;&#1608;&#1606;&#1614; &#1601;&#1616;&#1610; &#1605;&#1614;&#1587;&#1614;&#1575;&#1603;&#1616;&#1606;&#1616;&#1607;&#1616;&#1605;&#1618; &#1573;&#1616;&#1606;&#1617;&#1614; &#1601;&#1616;&#1610; &#1584;&#1614;&#1604;&#1616;&#1603;&#1614; &#1604;&#1570;&#1610;&#1614;&#1575;&#1578;&#1613; &#1571;&#1614;&#1601;&#1614;&#1604;&#1575; &#1610;&#1614;&#1587;&#1618;&#1605;&#1614;&#1593;&#1615;&#1608;&#1606;&#1614; {26} &#1571;&#1614;&#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1585;&#1614;&#1608;&#1618;&#1575; &#1571;&#1614;&#1606;&#1617;&#1614;&#1575; &#1606;&#1614;&#1587;&#1615;&#1608;&#1602;&#1615; &#1575;&#1604;&#1618;&#1605;&#1614;&#1575;&#1569; &#1573;&#1616;&#1604;&#1614;&#1609; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1575;&#1604;&#1618;&#1580;&#1615;&#1585;&#1615;&#1586;&#1616; &#1601;&#1614;&#1606;&#1615;&#1582;&#1618;&#1585;&#1616;&#1580;&#1615; &#1576;&#1616;&#1607;&#1616; &#1586;&#1614;&#1585;&#1618;&#1593;&#1611;&#1575; &#1578;&#1614;&#1571;&#1618;&#1603;&#1615;&#1604;&#1615; &#1605;&#1616;&#1606;&#1618;&#1607;&#1615; &#1571;&#1614;&#1606;&#1618;&#1593;&#1614;&#1575;&#1605;&#1615;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614;&#1571;&#1614;&#1606;&#1601;&#1615;&#1587;&#1615;&#1607;&#1615;&#1605;&#1618; &#1571;&#1614;&#1601;&#1614;&#1604;&#1575; &#1610;&#1615;&#1576;&#1618;&#1589;&#1616;&#1585;&#1615;&#1608;&#1606;&#1614; {27} &#1608;&#1614;&#1610;&#1614;&#1602;&#1615;&#1608;&#1604;&#1615;&#1608;&#1606;&#1614; &#1605;&#1614;&#1578;&#1614;&#1609; &#1607;&#1614;&#1584;&#1614;&#1575; &#1575;&#1604;&#1618;&#1601;&#1614;&#1578;&#1618;&#1581;&#1615; &#1573;&#1616;&#1606; &#1603;&#1615;&#1606;&#1578;&#1615;&#1605;&#1618; &#1589;&#1614;&#1575;&#1583;&#1616;&#1602;&#1616;&#1610;&#1606;&#1614; {28} &#1602;&#1615;&#1604;&#1618; &#1610;&#1614;&#1608;&#1618;&#1605;&#1614; &#1575;&#1604;&#1618;&#1601;&#1614;&#1578;&#1618;&#1581;&#1616; &#1604;&#1575; &#1610;&#1614;&#1606;&#1601;&#1614;&#1593;&#1615; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1603;&#1614;&#1601;&#1614;&#1585;&#1615;&#1608;&#1575; &#1573;&#1616;&#1610;&#1605;&#1614;&#1575;&#1606;&#1615;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614;&#1604;&#1575; &#1607;&#1615;&#1605;&#1618; &#1610;&#1615;&#1606;&#1592;&#1614;&#1585;&#1615;&#1608;&#1606;&#1614; {29} &#1601;&#1614;&#1571;&#1614;&#1593;&#1618;&#1585;&#1616;&#1590;&#1618; &#1593;&#1614;&#1606;&#1618;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614;&#1575;&#1606;&#1578;&#1614;&#1592;&#1616;&#1585;&#1618; &#1573;&#1616;&#1606;&#1617;&#1614;&#1607;&#1615;&#1605; &#1605;&#1617;&#1615;&#1606;&#1578;&#1614;&#1592;&#1616;&#1585;&#1615;&#1608;&#1606;&#1614; {30} <br />----------------------------------------<br /> &#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1616;&#1610;&#1605;&#1616; &#1578;&#1614;&#1576;&#1614;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1576;&#1616;&#1610;&#1614;&#1583;&#1616;&#1607;&#1616; &#1575;&#1604;&#1618;&#1605;&#1615;&#1604;&#1618;&#1603;&#1615; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1593;&#1614;&#1604;&#1614;&#1609; &#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1602;&#1614;&#1583;&#1616;&#1610;&#1585;&#1612; {1} &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614; &#1575;&#1604;&#1618;&#1605;&#1614;&#1608;&#1618;&#1578;&#1614; &#1608;&#1614;&#1575;&#1604;&#1618;&#1581;&#1614;&#1610;&#1614;&#1575;&#1577;&#1614; &#1604;&#1616;&#1610;&#1614;&#1576;&#1618;&#1604;&#1615;&#1608;&#1614;&#1603;&#1615;&#1605;&#1618; &#1571;&#1614;&#1610;&#1617;&#1615;&#1603;&#1615;&#1605;&#1618; &#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1606;&#1615; &#1593;&#1614;&#1605;&#1614;&#1604;&#1575;&#1611; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1586;&#1616;&#1610;&#1586;&#1615; &#1575;&#1604;&#1618;&#1594;&#1614;&#1601;&#1615;&#1608;&#1585;&#1615; {2} &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614; &#1587;&#1614;&#1576;&#1618;&#1593;&#1614; &#1587;&#1614;&#1605;&#1614;&#1608;&#1614;&#1575;&#1578;&#1613; &#1591;&#1616;&#1576;&#1614;&#1575;&#1602;&#1611;&#1575; &#1605;&#1617;&#1614;&#1575; &#1578;&#1614;&#1585;&#1614;&#1609; &#1601;&#1616;&#1610; &#1582;&#1614;&#1604;&#1618;&#1602;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1616; &#1605;&#1616;&#1606; &#1578;&#1614;&#1601;&#1614;&#1575;&#1608;&#1615;&#1578;&#1613; &#1601;&#1614;&#1575;&#1585;&#1618;&#1580;&#1616;&#1593;&#1616; &#1575;&#1604;&#1618;&#1576;&#1614;&#1589;&#1614;&#1585;&#1614; &#1607;&#1614;&#1604;&#1618; &#1578;&#1614;&#1585;&#1614;&#1609; &#1605;&#1616;&#1606; &#1601;&#1615;&#1591;&#1615;&#1608;&#1585;&#1613; {3} &#1579;&#1615;&#1605;&#1617;&#1614; &#1575;&#1585;&#1618;&#1580;&#1616;&#1593;&#1616; &#1575;&#1604;&#1618;&#1576;&#1614;&#1589;&#1614;&#1585;&#1614; &#1603;&#1614;&#1585;&#1617;&#1614;&#1578;&#1614;&#1610;&#1618;&#1606;&#1616; &#1610;&#1614;&#1606;&#1602;&#1614;&#1604;&#1616;&#1576;&#1618; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1603;&#1614; &#1575;&#1604;&#1618;&#1576;&#1614;&#1589;&#1614;&#1585;&#1615; &#1582;&#1614;&#1575;&#1587;&#1616;&#1571;&#1611; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1581;&#1614;&#1587;&#1616;&#1610;&#1585;&#1612; {4} &#1608;&#1614;&#1604;&#1614;&#1602;&#1614;&#1583;&#1618; &#1586;&#1614;&#1610;&#1617;&#1614;&#1606;&#1617;&#1614;&#1575; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1569; &#1575;&#1604;&#1583;&#1617;&#1615;&#1606;&#1618;&#1610;&#1614;&#1575; &#1576;&#1616;&#1605;&#1614;&#1589;&#1614;&#1575;&#1576;&#1616;&#1610;&#1581;&#1614; &#1608;&#1614;&#1580;&#1614;&#1593;&#1614;&#1604;&#1618;&#1606;&#1614;&#1575;&#1607;&#1614;&#1575; &#1585;&#1615;&#1580;&#1615;&#1608;&#1605;&#1611;&#1575; &#1604;&#1617;&#1616;&#1604;&#1588;&#1617;&#1614;&#1610;&#1614;&#1575;&#1591;&#1616;&#1610;&#1606;&#1616; &#1608;&#1614;&#1571;&#1614;&#1593;&#1618;&#1578;&#1614;&#1583;&#1618;&#1606;&#1614;&#1575; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1593;&#1616;&#1610;&#1585;&#1616; {5} &#1608;&#1614;&#1604;&#1616;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1603;&#1614;&#1601;&#1614;&#1585;&#1615;&#1608;&#1575; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616;&#1605;&#1618; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1615; &#1580;&#1614;&#1607;&#1614;&#1606;&#1617;&#1614;&#1605;&#1614; &#1608;&#1614;&#1576;&#1616;&#1574;&#1618;&#1587;&#1614; &#1575;&#1604;&#1618;&#1605;&#1614;&#1589;&#1616;&#1610;&#1585;&#1615; {6} &#1573;&#1616;&#1584;&#1614;&#1575; &#1571;&#1615;&#1604;&#1618;&#1602;&#1615;&#1608;&#1575; &#1601;&#1616;&#1610;&#1607;&#1614;&#1575; &#1587;&#1614;&#1605;&#1616;&#1593;&#1615;&#1608;&#1575; &#1604;&#1614;&#1607;&#1614;&#1575; &#1588;&#1614;&#1607;&#1616;&#1610;&#1602;&#1611;&#1575; &#1608;&#1614;&#1607;&#1616;&#1610;&#1614; &#1578;&#1614;&#1601;&#1615;&#1608;&#1585;&#1615; {7} &#1578;&#1614;&#1603;&#1614;&#1575;&#1583;&#1615; &#1578;&#1614;&#1605;&#1614;&#1610;&#1617;&#1614;&#1586;&#1615; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1594;&#1614;&#1610;&#1618;&#1592;&#1616; &#1603;&#1615;&#1604;&#1617;&#1614;&#1605;&#1614;&#1575; &#1571;&#1615;&#1604;&#1618;&#1602;&#1616;&#1610;&#1614; &#1601;&#1616;&#1610;&#1607;&#1614;&#1575; &#1601;&#1614;&#1608;&#1618;&#1580;&#1612; &#1587;&#1614;&#1571;&#1614;&#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1582;&#1614;&#1586;&#1614;&#1606;&#1614;&#1578;&#1615;&#1607;&#1614;&#1575; &#1571;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1571;&#1618;&#1578;&#1616;&#1603;&#1615;&#1605;&#1618; &#1606;&#1614;&#1584;&#1616;&#1610;&#1585;&#1612; {8} &#1602;&#1614;&#1575;&#1604;&#1615;&#1608;&#1575; &#1576;&#1614;&#1604;&#1614;&#1609; &#1602;&#1614;&#1583;&#1618; &#1580;&#1614;&#1575;&#1569;&#1606;&#1614;&#1575; &#1606;&#1614;&#1584;&#1616;&#1610;&#1585;&#1612; &#1601;&#1614;&#1603;&#1614;&#1584;&#1617;&#1614;&#1576;&#1618;&#1606;&#1614;&#1575; &#1608;&#1614;&#1602;&#1615;&#1604;&#1618;&#1606;&#1614;&#1575; &#1605;&#1614;&#1575; &#1606;&#1614;&#1586;&#1617;&#1614;&#1604;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1605;&#1616;&#1606; &#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1573;&#1616;&#1606;&#1618; &#1571;&#1614;&#1606;&#1578;&#1615;&#1605;&#1618; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1601;&#1616;&#1610; &#1590;&#1614;&#1604;&#1575;&#1604;&#1613; &#1603;&#1614;&#1576;&#1616;&#1610;&#1585;&#1613; {9} &#1608;&#1614;&#1602;&#1614;&#1575;&#1604;&#1615;&#1608;&#1575; &#1604;&#1614;&#1608;&#1618; &#1603;&#1615;&#1606;&#1617;&#1614;&#1575; &#1606;&#1614;&#1587;&#1618;&#1605;&#1614;&#1593;&#1615; &#1571;&#1614;&#1608;&#1618; &#1606;&#1614;&#1593;&#1618;&#1602;&#1616;&#1604;&#1615; &#1605;&#1614;&#1575; &#1603;&#1615;&#1606;&#1617;&#1614;&#1575; &#1601;&#1616;&#1610; &#1571;&#1614;&#1589;&#1618;&#1581;&#1614;&#1575;&#1576;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1593;&#1616;&#1610;&#1585;&#1616; {10} &#1601;&#1614;&#1575;&#1593;&#1618;&#1578;&#1614;&#1585;&#1614;&#1601;&#1615;&#1608;&#1575; &#1576;&#1616;&#1584;&#1614;&#1606;&#1576;&#1616;&#1607;&#1616;&#1605;&#1618; &#1601;&#1614;&#1587;&#1615;&#1581;&#1618;&#1602;&#1611;&#1575; &#1604;&#1571;&#1614;&#1589;&#1618;&#1581;&#1614;&#1575;&#1576;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1593;&#1616;&#1610;&#1585;&#1616; {11} &#1573;&#1616;&#1606;&#1617;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1610;&#1614;&#1582;&#1618;&#1588;&#1614;&#1608;&#1618;&#1606;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1607;&#1615;&#1605; &#1576;&#1616;&#1575;&#1604;&#1618;&#1594;&#1614;&#1610;&#1618;&#1576;&#1616; &#1604;&#1614;&#1607;&#1615;&#1605; &#1605;&#1617;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1614;&#1577;&#1612; &#1608;&#1614;&#1571;&#1614;&#1580;&#1618;&#1585;&#1612; &#1603;&#1614;&#1576;&#1616;&#1610;&#1585;&#1612; {12} &#1608;&#1614;&#1571;&#1614;&#1587;&#1616;&#1585;&#1617;&#1615;&#1608;&#1575; &#1602;&#1614;&#1608;&#1618;&#1604;&#1614;&#1603;&#1615;&#1605;&#1618; &#1571;&#1614;&#1608;&#1616; &#1575;&#1580;&#1618;&#1607;&#1614;&#1585;&#1615;&#1608;&#1575; &#1576;&#1616;&#1607;&#1616; &#1573;&#1616;&#1606;&#1617;&#1614;&#1607;&#1615; &#1593;&#1614;&#1604;&#1616;&#1610;&#1605;&#1612; &#1576;&#1616;&#1584;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1589;&#1617;&#1615;&#1583;&#1615;&#1608;&#1585;&#1616; {13} &#1571;&#1614;&#1604;&#1575; &#1610;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615; &#1605;&#1614;&#1606;&#1618; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1604;&#1617;&#1614;&#1591;&#1616;&#1610;&#1601;&#1615; &#1575;&#1604;&#1618;&#1582;&#1614;&#1576;&#1616;&#1610;&#1585;&#1615; {14} &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1580;&#1614;&#1593;&#1614;&#1604;&#1614; &#1604;&#1614;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1584;&#1614;&#1604;&#1615;&#1608;&#1604;&#1575;&#1611; &#1601;&#1614;&#1575;&#1605;&#1618;&#1588;&#1615;&#1608;&#1575; &#1601;&#1616;&#1610; &#1605;&#1614;&#1606;&#1614;&#1575;&#1603;&#1616;&#1576;&#1616;&#1607;&#1614;&#1575; &#1608;&#1614;&#1603;&#1615;&#1604;&#1615;&#1608;&#1575; &#1605;&#1616;&#1606; &#1585;&#1617;&#1616;&#1586;&#1618;&#1602;&#1616;&#1607;&#1616; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616; &#1575;&#1604;&#1606;&#1617;&#1615;&#1588;&#1615;&#1608;&#1585;&#1615; {15} &#1571;&#1614;&#1571;&#1614;&#1605;&#1616;&#1606;&#1578;&#1615;&#1605; &#1605;&#1617;&#1614;&#1606; &#1601;&#1616;&#1610; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1569; &#1571;&#1614;&#1606; &#1610;&#1614;&#1582;&#1618;&#1587;&#1616;&#1601;&#1614; &#1576;&#1616;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1601;&#1614;&#1573;&#1616;&#1584;&#1614;&#1575; &#1607;&#1616;&#1610;&#1614; &#1578;&#1614;&#1605;&#1615;&#1608;&#1585;&#1615; {16} &#1571;&#1614;&#1605;&#1618; &#1571;&#1614;&#1605;&#1616;&#1606;&#1578;&#1615;&#1605; &#1605;&#1617;&#1614;&#1606; &#1601;&#1616;&#1610; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1569; &#1571;&#1614;&#1606; &#1610;&#1615;&#1585;&#1618;&#1587;&#1616;&#1604;&#1614; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1603;&#1615;&#1605;&#1618; &#1581;&#1614;&#1575;&#1589;&#1616;&#1576;&#1611;&#1575; &#1601;&#1614;&#1587;&#1614;&#1578;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615;&#1608;&#1606;&#1614; &#1603;&#1614;&#1610;&#1618;&#1601;&#1614; &#1606;&#1614;&#1584;&#1616;&#1610;&#1585;&#1616; {17} &#1608;&#1614;&#1604;&#1614;&#1602;&#1614;&#1583;&#1618; &#1603;&#1614;&#1584;&#1617;&#1614;&#1576;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1605;&#1616;&#1606; &#1602;&#1614;&#1576;&#1618;&#1604;&#1616;&#1607;&#1616;&#1605;&#1618; &#1601;&#1614;&#1603;&#1614;&#1610;&#1618;&#1601;&#1614; &#1603;&#1614;&#1575;&#1606;&#1614; &#1606;&#1614;&#1603;&#1616;&#1610;&#1585;&#1616; {18} &#1571;&#1614;&#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1585;&#1614;&#1608;&#1618;&#1575; &#1573;&#1616;&#1604;&#1614;&#1609; &#1575;&#1604;&#1591;&#1617;&#1614;&#1610;&#1618;&#1585;&#1616; &#1601;&#1614;&#1608;&#1618;&#1602;&#1614;&#1607;&#1615;&#1605;&#1618; &#1589;&#1614;&#1575;&#1601;&#1617;&#1614;&#1575;&#1578;&#1613; &#1608;&#1614;&#1610;&#1614;&#1602;&#1618;&#1576;&#1616;&#1590;&#1618;&#1606;&#1614; &#1605;&#1614;&#1575; &#1610;&#1615;&#1605;&#1618;&#1587;&#1616;&#1603;&#1615;&#1607;&#1615;&#1606;&#1617;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1615; &#1573;&#1616;&#1606;&#1617;&#1614;&#1607;&#1615; &#1576;&#1616;&#1603;&#1615;&#1604;&#1617;&#1616; &#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1576;&#1614;&#1589;&#1616;&#1610;&#1585;&#1612; {19} &#1571;&#1614;&#1605;&#1617;&#1614;&#1606;&#1618; &#1607;&#1614;&#1584;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1607;&#1615;&#1608;&#1614; &#1580;&#1615;&#1606;&#1583;&#1612; &#1604;&#1617;&#1614;&#1603;&#1615;&#1605;&#1618; &#1610;&#1614;&#1606;&#1589;&#1615;&#1585;&#1615;&#1603;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1583;&#1615;&#1608;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1616; &#1573;&#1616;&#1606;&#1616; &#1575;&#1604;&#1618;&#1603;&#1614;&#1575;&#1601;&#1616;&#1585;&#1615;&#1608;&#1606;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1601;&#1616;&#1610; &#1594;&#1615;&#1585;&#1615;&#1608;&#1585;&#1613; {20} &#1571;&#1614;&#1605;&#1617;&#1614;&#1606;&#1618; &#1607;&#1614;&#1584;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1610;&#1614;&#1585;&#1618;&#1586;&#1615;&#1602;&#1615;&#1603;&#1615;&#1605;&#1618; &#1573;&#1616;&#1606;&#1618; &#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1603;&#1614; &#1585;&#1616;&#1586;&#1618;&#1602;&#1614;&#1607;&#1615; &#1576;&#1614;&#1604; &#1604;&#1617;&#1614;&#1580;&#1617;&#1615;&#1608;&#1575; &#1601;&#1616;&#1610; &#1593;&#1615;&#1578;&#1615;&#1608;&#1617;&#1613; &#1608;&#1614;&#1606;&#1615;&#1601;&#1615;&#1608;&#1585;&#1613; {21} &#1571;&#1614;&#1601;&#1614;&#1605;&#1614;&#1606; &#1610;&#1614;&#1605;&#1618;&#1588;&#1616;&#1610; &#1605;&#1615;&#1603;&#1616;&#1576;&#1617;&#1611;&#1575; &#1593;&#1614;&#1604;&#1614;&#1609; &#1608;&#1614;&#1580;&#1618;&#1607;&#1616;&#1607;&#1616; &#1571;&#1614;&#1607;&#1618;&#1583;&#1614;&#1609; &#1571;&#1614;&#1605;&#1617;&#1614;&#1606; &#1610;&#1614;&#1605;&#1618;&#1588;&#1616;&#1610; &#1587;&#1614;&#1608;&#1616;&#1610;&#1617;&#1611;&#1575; &#1593;&#1614;&#1604;&#1614;&#1609; &#1589;&#1616;&#1585;&#1614;&#1575;&#1591;&#1613; &#1605;&#1617;&#1615;&#1587;&#1618;&#1578;&#1614;&#1602;&#1616;&#1610;&#1605;&#1613; {22} &#1602;&#1615;&#1604;&#1618; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1571;&#1614;&#1606;&#1588;&#1614;&#1571;&#1614;&#1603;&#1615;&#1605;&#1618; &#1608;&#1614;&#1580;&#1614;&#1593;&#1614;&#1604;&#1614; &#1604;&#1614;&#1603;&#1615;&#1605;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1618;&#1593;&#1614; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1576;&#1618;&#1589;&#1614;&#1575;&#1585;&#1614; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1601;&#1618;&#1574;&#1616;&#1583;&#1614;&#1577;&#1614; &#1602;&#1614;&#1604;&#1616;&#1610;&#1604;&#1575;&#1611; &#1605;&#1617;&#1614;&#1575; &#1578;&#1614;&#1588;&#1618;&#1603;&#1615;&#1585;&#1615;&#1608;&#1606;&#1614; {23} &#1602;&#1615;&#1604;&#1618; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1584;&#1614;&#1585;&#1614;&#1571;&#1614;&#1603;&#1615;&#1605;&#1618; &#1601;&#1616;&#1610; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616; &#1578;&#1615;&#1581;&#1618;&#1588;&#1614;&#1585;&#1615;&#1608;&#1606;&#1614; {24} &#1608;&#1614;&#1610;&#1614;&#1602;&#1615;&#1608;&#1604;&#1615;&#1608;&#1606;&#1614; &#1605;&#1614;&#1578;&#1614;&#1609; &#1607;&#1614;&#1584;&#1614;&#1575; &#1575;&#1604;&#1618;&#1608;&#1614;&#1593;&#1618;&#1583;&#1615; &#1573;&#1616;&#1606; &#1603;&#1615;&#1606;&#1578;&#1615;&#1605;&#1618; &#1589;&#1614;&#1575;&#1583;&#1616;&#1602;&#1616;&#1610;&#1606;&#1614; {25} &#1602;&#1615;&#1604;&#1618; &#1573;&#1616;&#1606;&#1617;&#1614;&#1605;&#1614;&#1575; &#1575;&#1604;&#1618;&#1593;&#1616;&#1604;&#1618;&#1605;&#1615; &#1593;&#1616;&#1606;&#1583;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614;&#1605;&#1614;&#1575; &#1571;&#1614;&#1606;&#1614;&#1575; &#1606;&#1614;&#1584;&#1616;&#1610;&#1585;&#1612; &#1605;&#1617;&#1615;&#1576;&#1616;&#1610;&#1606;&#1612; {26} &#1601;&#1614;&#1604;&#1614;&#1605;&#1617;&#1614;&#1575; &#1585;&#1614;&#1571;&#1614;&#1608;&#1618;&#1607;&#1615; &#1586;&#1615;&#1604;&#1618;&#1601;&#1614;&#1577;&#1611; &#1587;&#1616;&#1610;&#1574;&#1614;&#1578;&#1618; &#1608;&#1615;&#1580;&#1615;&#1608;&#1607;&#1615; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1603;&#1614;&#1601;&#1614;&#1585;&#1615;&#1608;&#1575; &#1608;&#1614;&#1602;&#1616;&#1610;&#1604;&#1614; &#1607;&#1614;&#1584;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1603;&#1615;&#1606;&#1578;&#1615;&#1605; &#1576;&#1616;&#1607;&#1616; &#1578;&#1614;&#1583;&#1617;&#1614;&#1593;&#1615;&#1608;&#1606;&#1614; {27} &#1602;&#1615;&#1604;&#1618; &#1571;&#1614;&#1585;&#1614;&#1571;&#1614;&#1610;&#1618;&#1578;&#1615;&#1605;&#1618; &#1573;&#1616;&#1606;&#1618; &#1571;&#1614;&#1607;&#1618;&#1604;&#1614;&#1603;&#1614;&#1606;&#1616;&#1610;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1605;&#1614;&#1606; &#1605;&#1617;&#1614;&#1593;&#1616;&#1610;&#1614; &#1571;&#1614;&#1608;&#1618; &#1585;&#1614;&#1581;&#1616;&#1605;&#1614;&#1606;&#1614;&#1575; &#1601;&#1614;&#1605;&#1614;&#1606; &#1610;&#1615;&#1580;&#1616;&#1610;&#1585;&#1615; &#1575;&#1604;&#1618;&#1603;&#1614;&#1575;&#1601;&#1616;&#1585;&#1616;&#1610;&#1606;&#1614; &#1605;&#1616;&#1606;&#1618; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1613; &#1571;&#1614;&#1604;&#1616;&#1610;&#1605;&#1613; {28} &#1602;&#1615;&#1604;&#1618; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1618;&#1605;&#1614;&#1606;&#1615; &#1569;&#1575;&#1605;&#1614;&#1606;&#1617;&#1614;&#1575; &#1576;&#1616;&#1607;&#1616; &#1608;&#1614;&#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616; &#1578;&#1614;&#1608;&#1614;&#1603;&#1617;&#1614;&#1604;&#1618;&#1606;&#1614;&#1575; &#1601;&#1614;&#1587;&#1614;&#1578;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615;&#1608;&#1606;&#1614; &#1605;&#1614;&#1606;&#1618; &#1607;&#1615;&#1608;&#1614; &#1601;&#1616;&#1610; &#1590;&#1614;&#1604;&#1575;&#1604;&#1613; &#1605;&#1617;&#1615;&#1576;&#1616;&#1610;&#1606;&#1613; {29} &#1602;&#1615;&#1604;&#1618; &#1571;&#1614;&#1585;&#1614;&#1571;&#1614;&#1610;&#1618;&#1578;&#1615;&#1605;&#1618; &#1573;&#1616;&#1606;&#1618; &#1571;&#1614;&#1589;&#1618;&#1576;&#1614;&#1581;&#1614; &#1605;&#1614;&#1575;&#1572;&#1615;&#1603;&#1615;&#1605;&#1618; &#1594;&#1614;&#1608;&#1618;&#1585;&#1611;&#1575; &#1601;&#1614;&#1605;&#1614;&#1606; &#1610;&#1614;&#1571;&#1618;&#1578;&#1616;&#1610;&#1603;&#1615;&#1605; &#1576;&#1616;&#1605;&#1614;&#1575;&#1569; &#1605;&#1617;&#1614;&#1593;&#1616;&#1610;&#1606;&#1613; {30} ",
                "transliteration": ""
            }, {
                "id": 111,
                "meaning": "O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You. Verily there is no refuge nor safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1587;&#1618;&#1600;&#1604;&#1614;&#1605;&#1618;&#1578;&#1615; &#1606;&#1614;&#1601;&#1618;&#1600;&#1587;&#1610; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1608;&#1614;&#1601;&#1614;&#1608;&#1617;&#1614;&#1590;&#1618;&#1600;&#1578;&#1615; &#1571;&#1614;&#1605;&#1618;&#1600;&#1585;&#1610; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1608;&#1614;&#1608;&#1614;&#1580;&#1617;&#1614;&#1600;&#1607;&#1618;&#1578;&#1615; &#1608;&#1614;&#1580;&#1618;&#1600;&#1607;&#1610; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1608;&#1614;&#1571;&#1614;&#1604;&#1618;&#1600;&#1580;&#1614;&#1600;&#1575;&#1618;&#1578;&#1615; &#1592;&#1614;&#1607;&#1600;&#1585;&#1610; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1585;&#1614;&#1594;&#1618;&#1576;&#1614;&#1600;&#1577;&#1611; &#1608;&#1614;&#1585;&#1614;&#1607;&#1618;&#1600;&#1576;&#1614;&#1577;&#1611; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1604;&#1575; &#1605;&#1614;&#1604;&#1618;&#1580;&#1614;&#1600;&#1571;&#1614; &#1608;&#1614;&#1604;&#1575; &#1605;&#1614;&#1606;&#1618;&#1600;&#1580;&#1600;&#1575; &#1605;&#1616;&#1606;&#1618;&#1600;&#1603;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614;&#1548; &#1570;&#1605;&#1614;&#1606;&#1618;&#1600;&#1578;&#1615; &#1576;&#1616;&#1603;&#1616;&#1578;&#1600;&#1575;&#1576;&#1616;&#1603;&#1614; &#1575;&#1604;&#1617;&#1600;&#1584;&#1610; &#1571;&#1614;&#1606;&#1618;&#1586;&#1614;&#1604;&#1618;&#1600;&#1578;&#1614; &#1608;&#1614;&#1576;&#1616;&#1606;&#1614;&#1576;&#1616;&#1600;&#1610;&#1617;&#1616;&#1600;&#1603;&#1614; &#1575;&#1604;&#1617;&#1600;&#1584;&#1610; &#1571;&#1614;&#1585;&#1618;&#1587;&#1614;&#1604;&#1618;&#1600;&#1578;",
                "transliteration": ""
            }]
        }, {
            "id": 26,
            "title": "In the morning and evening",
            "duas": [{
                "id": 75,
                "meaning": "[the verse of the Footstool (Ayat-Al-Kursiy) : surat &amp;#1615;Al-Baqarah:255]<br ?>",
                "arabic": " &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1575;&#1614; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1610;&#1617;&#1615; &#1575;&#1604;&#1618;&#1602;&#1614;&#1610;&#1617;&#1615;&#1608;&#1605;&#1615; &#1604;&#1575;&#1614; &#1578;&#1614;&#1571;&#1618;&#1582;&#1615;&#1584;&#1615;&#1607;&#1615; &#1587;&#1616;&#1606;&#1614;&#1577;&#1612; &#1608;&#1614;&#1604;&#1575;&#1614; &#1606;&#1614;&#1608;&#1618;&#1605;&#1612; &#1604;&#1617;&#1614;&#1607;&#1615; &#1605;&#1614;&#1575; &#1601;&#1616;&#1610; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1605;&#1614;&#1575; &#1601;&#1616;&#1610; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1605;&#1614;&#1606; &#1584;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1610;&#1614;&#1588;&#1618;&#1601;&#1614;&#1593;&#1615; &#1593;&#1616;&#1606;&#1618;&#1583;&#1614;&#1607;&#1615; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1576;&#1616;&#1573;&#1616;&#1584;&#1618;&#1606;&#1616;&#1607;&#1616; &#1610;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615; &#1605;&#1614;&#1575; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614; &#1571;&#1614;&#1610;&#1618;&#1583;&#1616;&#1610;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1605;&#1614;&#1575; &#1582;&#1614;&#1604;&#1618;&#1601;&#1614;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614;&#1604;&#1575;&#1614; &#1610;&#1615;&#1581;&#1616;&#1610;&#1591;&#1615;&#1608;&#1606;&#1614; &#1576;&#1616;&#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1605;&#1617;&#1616;&#1606;&#1618; &#1593;&#1616;&#1604;&#1618;&#1605;&#1616;&#1607;&#1616; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1576;&#1616;&#1605;&#1614;&#1575; &#1588;&#1614;&#1575;&#1569; &#1608;&#1614;&#1587;&#1616;&#1593;&#1614; &#1603;&#1615;&#1585;&#1618;&#1587;&#1616;&#1610;&#1617;&#1615;&#1607;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1608;&#1614;&#1604;&#1575;&#1614; &#1610;&#1614;&#1572;&#1615;&#1608;&#1583;&#1615;&#1607;&#1615; &#1581;&#1616;&#1601;&#1618;&#1592;&#1615;&#1607;&#1615;&#1605;&#1614;&#1575; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1604;&#1616;&#1610;&#1617;&#1615; &#1575;&#1604;&#1618;&#1593;&#1614;&#1592;&#1616;&#1610;&#1605;&#1615;",
                "transliteration": "Allahu la ilaha illa huwa-l-<u>h</u>ayyu-l-qayyÃ»m. La ta'khudhuhu sinatun wa la nawm, lahu ma fi s-samawati wa ma fi-l-ar<u>d</u>. Man dha l-ladhi yashfa<sup>c</sup>u <sup>c</sup>indahu illa bi-idhnihi. Ya<sup>c</sup>lamu ma bayna aydihim wa ma khalfahum. Wa la yu<u>h</u>i<u>t</u>Ã»na bi-shay'in min <sup>c</sup>ilmihi illa bi-ma sha'a. Wasi<sup>c</sup>a kursiyyuhu s-samawati wa-l-ar<u>d</u>. Wa la ya'Ã»duhu <u>h</u>if<u>z</u>uhuma, wa huwa-l-<sup>c</sup>aliyyu-l-<sup>c</sup>a<u>z</u>im.",
                "audio": "audio/75.mp3"
            }, {
                "id": 76,
                "meaning": "[chapters Al-Ikhlas, Al-Falaq and An-Nas] (three times after each prayer)<br ?>",
                "arabic": "&#1602;&#1615;&#1600;&#1604;&#1618; &#1607;&#1615;&#1600;&#1608;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1581;&#1614;&#1600;&#1583;&#1612; Â…..( [ &#1575;&#1604;&#1573;&#1616;&#1582;&#1618;&#1600;&#1604;&#1575;&#1589;&#1618; ] ) &#1602;&#1615;&#1600;&#1604;&#1618; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1601;&#1614;&#1604;&#1614;&#1600;&#1602;&#1616;Â…..( [ &#1575;&#1604;&#1601;&#1614;&#1604;&#1614;&#1600;&#1602;&#1618; ] ) &#1602;&#1615;&#1600;&#1604;&#1618; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1587;&#1616;Â…..([ &#1575;&#1604;&#1600;&#1606;&#1617;&#1575;&#1587;([",
                "transliteration": "",
                "audio": "audio/76.mp3"
            }, {
                "id": 77,
                "meaning": "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it and I take refuge in You from the evil of this night and the evil of what follows it. My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.",
                "arabic": "&#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575; &#1608;&#1614;&#1571;&#1614;&#1605;&#1618;&#1587;&#1600;&#1609; &#1575;&#1604;&#1605;&#1600;&#1604;&#1603;&#1615; &#1604;&#1604;&#1607; &#1608;&#1614;&#1575;&#1604;&#1581;&#1614;&#1605;&#1583;&#1615; &#1604;&#1604;&#1607; &#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1581;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1548; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1583;&#1610;&#1585; &#1548; &#1585;&#1614;&#1576;&#1617;&#1616; &#1571;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1600;&#1610;&#1585;&#1614; &#1605;&#1575; &#1601;&#1610; &#1607;&#1600;&#1584;&#1607;&#1616; &#1575;&#1604;&#1604;&#1617;&#1614;&#1600;&#1610;&#1618;&#1604;&#1614;&#1577;&#1616; &#1608;&#1614;&#1582;&#1614;&#1600;&#1610;&#1585;&#1614; &#1605;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;&#1600;&#1575; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1607;&#1600;&#1584;&#1607;&#1616; &#1575;&#1604;&#1604;&#1617;&#1614;&#1600;&#1610;&#1618;&#1604;&#1577;&#1616; &#1608;&#1614;&#1588;&#1614;&#1585;&#1617;&#1616; &#1605;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;&#1600;&#1575; &#1548; &#1585;&#1614;&#1576;&#1617;&#1616; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1603;&#1614;&#1587;&#1614;&#1600;&#1604;&#1616; &#1608;&#1614;&#1587;&#1600;&#1608;&#1569;&#1616; &#1575;&#1604;&#1618;&#1603;&#1616;&#1600;&#1576;&#1614;&#1585; &#1548; &#1585;&#1614;&#1576;&#1617;&#1616; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1593;&#1614;&#1600;&#1584;&#1575;&#1576;&#1613; &#1601;&#1610; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1585;&#1616; &#1608;&#1614;&#1593;&#1614;&#1600;&#1584;&#1575;&#1576;&#1613; &#1601;&#1610; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585;",
                "transliteration": "",
                "audio": "audio/77.mp3"
            }, {
                "id": 78,
                "meaning": "[In the morning :] O Allah, by your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection. / [In the evening :] O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1589;&#1618;&#1600;&#1576;&#1614;&#1581;&#1618;&#1606;&#1575; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1600;&#1610;&#1606;&#1575; &#1548; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1606;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1606;&#1614;&#1605;&#1600;&#1608;&#1578;&#1615; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1575;&#1604;&#1606;&#1617;&#1616;&#1600;&#1588;&#1608;&#1585; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1600;&#1610;&#1606;&#1575;&#1548; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1589;&#1618;&#1600;&#1576;&#1614;&#1581;&#1618;&#1606;&#1575;&#1548; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1606;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575;&#1548; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1606;&#1614;&#1605;&#1600;&#1608;&#1578;&#1615; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1575;&#1604;&#1605;&#1614;&#1589;&#1600;&#1610;&#1585;",
                "transliteration": ""
            }, {
                "id": 79,
                "meaning": "O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil of which I have committed. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1610; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1548; &#1582;&#1614;&#1604;&#1614;&#1602;&#1618;&#1578;&#1614;&#1606;&#1600;&#1610; &#1608;&#1614;&#1571;&#1614;&#1606;&#1575; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1603; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1575; &#1593;&#1614;&#1604;&#1600;&#1609; &#1593;&#1614;&#1607;&#1618;&#1600;&#1583;&#1616;&#1603;&#1614; &#1608;&#1614;&#1608;&#1614;&#1593;&#1618;&#1600;&#1583;&#1616;&#1603;&#1614; &#1605;&#1575; &#1575;&#1587;&#1618;&#1578;&#1614;&#1600;&#1591;&#1614;&#1593;&#1618;&#1600;&#1578; &#1548; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1589;&#1614;&#1606;&#1614;&#1600;&#1593;&#1618;&#1578; &#1548; &#1571;&#1614;&#1576;&#1600;&#1608;&#1569;&#1615; &#1604;&#1614;&#1600;&#1603;&#1614; &#1576;&#1616;&#1606;&#1616;&#1593;&#1618;&#1600;&#1605;&#1614;&#1578;&#1616;&#1600;&#1603;&#1614; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1617;&#1614; &#1608;&#1614;&#1571;&#1614;&#1576;&#1600;&#1608;&#1569;&#1615; &#1576;&#1616;&#1584;&#1614;&#1606;&#1618;&#1600;&#1576;&#1610; &#1601;&#1614;&#1575;&#1594;&#1618;&#1601;&#1600;&#1616;&#1585;&#1618; &#1604;&#1610; &#1601;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1607;&#1615; &#1604;&#1575; &#1610;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1584;&#1617;&#1615;&#1606;&#1600;&#1608;&#1576;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; ",
                "transliteration": "Allahumma anta rabbi, la ilaha illa anta.<br /> Khalaqtani wa ana <sup>c</sup>abduka, wa ana <sup>c</sup>ala <sup>c</sup>ahdika wa wa<sup>c</sup>dika ma s<u>t</u>ata'tu.<br /> A<sup>c</sup>Ã»dhu bika min sharri ma <u>s</u>ana'tu. AbÃ»'u laka bi-ni<sup>c</sup>matika <sup>c</sup>alayya wa abÃ»'u bi-dhanbi.<br /> Fa-ghfir li fa-innahu la yaghfiru dh-dhunÃ»ba illa ant.",
                "audio": "audio/79.mp3"
            }, {
                "id": 80,
                "meaning": "O Allah, verily I have reached the morning and call on You, the bearers of Your throne, Your angles, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner and that Muhammad is Your Servant and Messenger. [Four times in the morning and evening]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1589;&#1618;&#1576;&#1614;&#1600;&#1581;&#1618;&#1578;&#1615; &#1571;&#1614;&#1615;&#1588;&#1618;&#1600;&#1607;&#1616;&#1583;&#1615;&#1603; &#1548; &#1608;&#1614;&#1571;&#1615;&#1588;&#1618;&#1600;&#1607;&#1616;&#1583;&#1615; &#1581;&#1614;&#1605;&#1614;&#1604;&#1614;&#1600;&#1577;&#1614; &#1593;&#1614;&#1600;&#1585;&#1618;&#1588;&#1616;&#1600;&#1603; &#1548; &#1608;&#1614;&#1605;&#1614;&#1604;&#1575;&#1574;&#1616;&#1603;&#1614;&#1578;&#1616;&#1603; &#1548; &#1608;&#1614;&#1580;&#1614;&#1605;&#1600;&#1610;&#1593;&#1614; &#1582;&#1614;&#1604;&#1618;&#1600;&#1602;&#1616;&#1603; &#1548; &#1571;&#1614;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1604;&#1575; &#1588;&#1614;&#1585;&#1610;&#1603;&#1614; &#1604;&#1614;&#1600;&#1603; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1617;&#1614; &#1615; &#1605;&#1615;&#1581;&#1614;&#1605;&#1617;&#1600;&#1583;&#1575;&#1611; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1603;&#1614; &#1608;&#1614;&#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1615;&#1600;&#1603; .(&#1571;&#1585;&#1576;&#1593; &#1605;&#1585;&#1575;&#1578; &#1581;&#1610;&#1606;&#1614; &#1610;&#1589;&#1618;&#1576;&#1616;&#1581; &#1571;&#1608;&#1618; &#1610;&#1605;&#1587;&#1610;)",
                "transliteration": "",
                "audio": "audio/80.mp3"
            }, {
                "id": 81,
                "meaning": "O Allah, what blessing I or any of Your creation have risen upon, is from You alone, without partner, so for You is all praise and unto You all thanks.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1605;&#1575; &#1571;&#1614;&#1589;&#1618;&#1576;&#1614;&#1600;&#1614;&#1581;&#1614; &#1576;&#1610; &#1605;&#1616;&#1600;&#1606;&#1618; &#1606;&#1616;&#1593;&#1618;&#1600;&#1605;&#1614;&#1577;&#1613; &#1571;&#1614;&#1608; &#1576;&#1616;&#1571;&#1614;&#1581;&#1614;&#1600;&#1583;&#1613; &#1605;&#1616;&#1600;&#1606;&#1618; &#1582;&#1614;&#1604;&#1618;&#1600;&#1602;&#1616;&#1603; &#1548; &#1601;&#1614;&#1605;&#1616;&#1600;&#1606;&#1618;&#1603;&#1614; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1614;&#1600;&#1603; &#1548; &#1601;&#1614;&#1604;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1608;&#1614;&#1604;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1588;&#1617;&#1615;&#1603;&#1618;&#1600;&#1585;",
                "transliteration": "",
                "audio": "audio/81.mp3"
            }, {
                "id": 82,
                "meaning": "O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. None has the right to be worshipped except You [Three times]. O Allah, I take refuge with You from disbelief and poverty, and I take refuge with You from the punishment of the grave ; none has the right to be worshipped except You [Three times].",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1593;&#1575;&#1601;&#1616;&#1600;&#1606;&#1610; &#1601;&#1610; &#1576;&#1614;&#1583;&#1614;&#1606;&#1600;&#1610; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1593;&#1575;&#1601;&#1616;&#1600;&#1606;&#1610; &#1601;&#1610; &#1587;&#1614;&#1605;&#1618;&#1600;&#1593;&#1610; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1593;&#1575;&#1601;&#1616;&#1600;&#1606;&#1610; &#1601;&#1610; &#1576;&#1614;&#1589;&#1614;&#1600;&#1585;&#1610; &#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; . &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1603;&#1615;&#1600;&#1601;&#1585; &#1548; &#1608;&#1614;&#1575;&#1604;&#1601;&#1614;&#1600;&#1602;&#1618;&#1585; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585; &#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; .(&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;)",
                "transliteration": "",
                "audio": "audio/82.mp3"
            }, {
                "id": 83,
                "meaning": "Allah is Sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the exalted throne. [Seven times morning and evening]",
                "arabic": "&#1581;&#1614;&#1587;&#1618;&#1576;&#1616;&#1600;&#1610;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1607;&#1615;&#1608;&#1614; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1607;&#1616; &#1578;&#1614;&#1608;&#1614;&#1603;&#1617;&#1614;&#1600;&#1604;&#1578;&#1615; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1593;&#1614;&#1585;&#1618;&#1588;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1600;&#1610;&#1605; . (&#1587;&#1576;&#1593;) ",
                "transliteration": "Hasbiya l-lahu la ilaha illa huwa <sup>c</sup>alayhi tawakkaltu, wa huwa rabbu-l-<sup>c</sup>arshi-l-<sup>c</sup>a<u>z</u>imi. (7fois)",
                "audio": "audio/83.mp3"
            }, {
                "id": 84,
                "meaning": "O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay. O Allah, preserve me from the front and from behind and on my right and on my left and from above, and I take refuge with You lest I be swallowed up by the earth.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1593;&#1614;&#1600;&#1601;&#1618;&#1608;&#1614; &#1608;&#1614;&#1575;&#1604;&#1593;&#1600;&#1575;&#1601;&#1616;&#1600;&#1610;&#1577;&#1614; &#1601;&#1610; &#1575;&#1604;&#1583;&#1617;&#1615;&#1606;&#1618;&#1600;&#1610;&#1575; &#1608;&#1614;&#1575;&#1604;&#1570;&#1582;&#1616;&#1600;&#1585;&#1614;&#1577; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1593;&#1614;&#1600;&#1601;&#1618;&#1608;&#1614; &#1608;&#1614;&#1575;&#1604;&#1593;&#1600;&#1575;&#1601;&#1616;&#1600;&#1610;&#1577;&#1614; &#1601;&#1610; &#1583;&#1610;&#1606;&#1610; &#1608;&#1614;&#1583;&#1615;&#1606;&#1618;&#1600;&#1610;&#1575;&#1610;&#1614; &#1608;&#1614;&#1571;&#1607;&#1618;&#1600;&#1604;&#1610; &#1608;&#1614;&#1605;&#1575;&#1604;&#1600;&#1610; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1587;&#1618;&#1578;&#1615;&#1600;&#1585;&#1618; &#1593;&#1600;&#1608;&#1618;&#1585;&#1575;&#1578;&#1610; &#1608;&#1614;&#1570;&#1605;&#1616;&#1600;&#1606;&#1618; &#1585;&#1614;&#1608;&#1618;&#1593;&#1575;&#1578;&#1600;&#1610; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1581;&#1618;&#1601;&#1614;&#1592;&#1618;&#1600;&#1606;&#1610; &#1605;&#1616;&#1606; &#1576;&#1614;&#1600;&#1610;&#1606;&#1616; &#1610;&#1614;&#1583;&#1614;&#1610;&#1617;&#1614; &#1608;&#1614;&#1605;&#1616;&#1606; &#1582;&#1614;&#1604;&#1618;&#1601;&#1600;&#1610; &#1608;&#1614;&#1593;&#1614;&#1606; &#1610;&#1614;&#1605;&#1600;&#1610;&#1606;&#1610; &#1608;&#1614;&#1593;&#1614;&#1606; &#1588;&#1616;&#1605;&#1600;&#1575;&#1604;&#1610; &#1548; &#1608;&#1614;&#1605;&#1616;&#1606; &#1601;&#1614;&#1608;&#1618;&#1602;&#1600;&#1610; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1593;&#1614;&#1592;&#1614;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1614; &#1571;&#1614;&#1606; &#1571;&#1615;&#1594;&#1618;&#1600;&#1578;&#1575;&#1604;&#1614; &#1605;&#1616;&#1606; &#1578;&#1614;&#1581;&#1618;&#1578;&#1600;&#1610;",
                "transliteration": "",
                "audio": "audio/84.mp3"
            }, {
                "id": 85,
                "meaning": "O Allah, Knower of the unseen and the seen, Creator of the heavens and the Earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1593;&#1575;&#1604;&#1616;&#1600;&#1605;&#1614; &#1575;&#1604;&#1594;&#1614;&#1600;&#1610;&#1618;&#1576;&#1616; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1600;&#1607;&#1575;&#1583;&#1614;&#1577;&#1616; &#1601;&#1575;&#1591;&#1616;&#1600;&#1585;&#1614; &#1575;&#1604;&#1587;&#1617;&#1605;&#1575;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1585;&#1618;&#1590;&#1616; &#1585;&#1614;&#1576;&#1617;&#1614; &#1603;&#1600;&#1604;&#1617;&#1616; &#1588;&#1614;&#1600;&#1610;&#1569;&#1613; &#1608;&#1614;&#1605;&#1614;&#1604;&#1610;&#1600;&#1603;&#1614;&#1607; &#1548; &#1571;&#1614;&#1588;&#1618;&#1607;&#1614;&#1600;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578; &#1548; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1610; &#1608;&#1614;&#1605;&#1616;&#1606; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1608;&#1614;&#1588;&#1616;&#1600;&#1585;&#1618;&#1603;&#1616;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618; &#1571;&#1614;&#1602;&#1618;&#1578;&#1614;&#1600;&#1585;&#1616;&#1601;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1610; &#1587;&#1608;&#1569;&#1575;&#1611; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1580;&#1615;&#1600;&#1585;&#1617;&#1614;&#1607;&#1615; &#1573;&#1616;&#1604;&#1600;&#1609; &#1605;&#1615;&#1587;&#1618;&#1600;&#1604;&#1616;&#1605;",
                "transliteration": "",
                "audio": "audio/85.mp3"
            }, {
                "id": 86,
                "meaning": "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing. [Three times]",
                "arabic": "&#1576;&#1616;&#1587;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1584;&#1610; &#1604;&#1575; &#1610;&#1614;&#1590;&#1615;&#1600;&#1585;&#1617;&#1615; &#1605;&#1614;&#1593;&#1614; &#1575;&#1587;&#1605;&#1616;&#1600;&#1607;&#1616; &#1588;&#1614;&#1610;&#1569;&#1612; &#1601;&#1610; &#1575;&#1604;&#1571;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1604;&#1575; &#1601;&#1610; &#1575;&#1604;&#1587;&#1617;&#1605;&#1600;&#1575;&#1569;&#1616; &#1608;&#1614;&#1607;&#1600;&#1608;&#1614; &#1575;&#1604;&#1587;&#1617;&#1605;&#1600;&#1610;&#1593;&#1615; &#1575;&#1604;&#1593;&#1614;&#1604;&#1600;&#1610;&#1605; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;( ",
                "transliteration": "",
                "audio": "audio/86.mp3"
            }, {
                "id": 87,
                "meaning": "I am pleased with Allah as a Lord, and Islam as a religion and Muhammad  (saws) as a Prophet. [Three times]",
                "arabic": "&#1585;&#1614;&#1590;&#1610;&#1600;&#1578;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1614;&#1600;&#1575;&#1611; &#1608;&#1614;&#1576;&#1616;&#1575;&#1604;&#1573;&#1587;&#1618;&#1604;&#1575;&#1605;&#1616; &#1583;&#1610;&#1600;&#1606;&#1575;&#1611; &#1608;&#1614;&#1576;&#1616;&#1605;&#1615;&#1581;&#1614;&#1600;&#1605;&#1617;&#1614;&#1583;&#1613; &#1606;&#1614;&#1576;&#1616;&#1610;&#1617;&#1600;&#1575;&#1611; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;)",
                "transliteration": "",
                "audio": "audio/87.mp3"
            }, {
                "id": 88,
                "meaning": "O Ever Living, O Self-Subsisting and Supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
                "arabic": "&#1610;&#1575; &#1581;&#1614;&#1600;&#1610;&#1617;&#1615; &#1610;&#1575; &#1602;&#1614;&#1610;&#1617;&#1600;&#1608;&#1605;&#1615; &#1576;&#1616;&#1600;&#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1578;&#1616;&#1603;&#1616; &#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1600;&#1594;&#1600;&#1610;&#1579; &#1548; &#1571;&#1614;&#1589;&#1618;&#1604;&#1616;&#1600;&#1581;&#1618; &#1604;&#1610; &#1588;&#1614;&#1600;&#1571;&#1618;&#1606;&#1600;&#1610; &#1603;&#1615;&#1604;&#1617;&#1614;&#1600;&#1607; &#1548; &#1608;&#1614;&#1604;&#1575; &#1578;&#1614;&#1603;&#1616;&#1604;&#1600;&#1606;&#1610; &#1573;&#1616;&#1604;&#1609; &#1606;&#1614;&#1601;&#1618;&#1600;&#1587;&#1610; &#1591;&#1614;&#1600;&#1585;&#1618;&#1601;&#1614;&#1577;&#1614; &#1593;&#1614;&#1600;&#1610;&#1606;",
                "transliteration": "",
                "audio": "audio/88.mp3"
            }, {
                "id": 89,
                "meaning": "[In the morning :] We have reached the morning and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day, its triumphs and its victories, its light and its blessings and its guidance, and I take refuge in You from the evil of this day and the evil that follows it. / [In the envening :] We have reached the evening and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of tonight, its triumphs and its victories, its light and its blessings and its guidance, and I take refuge in You from the evil of tonight and the evil that follows it.",
                "arabic": "&#1571;&#1614;&#1589;&#1618;&#1576;&#1614;&#1600;&#1581;&#1618;&#1600;&#1606;&#1575; &#1608;&#1614;&#1571;&#1614;&#1589;&#1618;&#1576;&#1614;&#1600;&#1581;&#1618; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1603;&#1615; &#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1593;&#1600;&#1575;&#1604;&#1614;&#1605;&#1600;&#1610;&#1606; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1607;&#1600;&#1584;&#1575; &#1575;&#1604;&#1600;&#1610;&#1614;&#1608;&#1618;&#1605; &#1548; &#1601;&#1614;&#1600;&#1578;&#1618;&#1581;&#1614;&#1607;&#1615; &#1548; &#1608;&#1614;&#1606;&#1614;&#1589;&#1618;&#1600;&#1585;&#1614;&#1607;&#1615; &#1548; &#1608;&#1614;&#1606;&#1600;&#1608;&#1585;&#1614;&#1607;&#1615; &#1608;&#1614;&#1576;&#1614;&#1600;&#1585;&#1614;&#1603;&#1614;&#1578;&#1614;&#1600;&#1607;&#1615; &#1548; &#1608;&#1614;&#1607;&#1615;&#1600;&#1583;&#1575;&#1607;&#1615; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1601;&#1600;&#1610;&#1607;&#1616; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607; / &#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575; &#1608;&#1614;&#1571;&#1614;&#1605;&#1618;&#1587;&#1600;&#1609; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1603;&#1615; &#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1593;&#1600;&#1575;&#1604;&#1614;&#1605;&#1600;&#1610;&#1606; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1607;&#1600;&#1584;&#1607;&#1616; &#1575;&#1604;&#1604;&#1617;&#1614;&#1600;&#1610;&#1618;&#1604;&#1614;&#1577; &#1548; &#1601;&#1614;&#1578;&#1618;&#1581;&#1614;&#1607;&#1600;&#1575; &#1548; &#1608;&#1614;&#1606;&#1614;&#1589;&#1618;&#1600;&#1585;&#1614;&#1607;&#1600;&#1575; &#1548; &#1608;&#1614;&#1606;&#1600;&#1608;&#1585;&#1614;&#1607;&#1600;&#1575; &#1608;&#1614;&#1576;&#1614;&#1600;&#1585;&#1614;&#1603;&#1614;&#1578;&#1614;&#1600;&#1607;&#1600;&#1575; &#1548; &#1608;&#1614;&#1607;&#1615;&#1600;&#1583;&#1575;&#1607;&#1600;&#1575; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1601;&#1600;&#1610;&#1607;&#1600;&#1575;&#1616; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1607;&#1600;&#1575; ",
                "transliteration": "",
                "audio": "audio/89.mp3"
            }, {
                "id": 90,
                "meaning": "We rise upon the fitrah of Islam, and the word of pure faith, and upon the religion of our Prophet Muhammad (saws) and the religion of our forefather Ibraheem, who was a Muslim and of true faith and was not of those who associate others with Allah.",
                "arabic": "&#1571;&#1614;&#1589;&#1618;&#1600;&#1576;&#1614;&#1581;&#1618;&#1606;&#1575;[&#1571;&#1614;&#1605;&#1618;&#1587;&#1614;&#1600;&#1610;&#1606;&#1575;] &#1593;&#1604;&#1600;&#1609; &#1601;&#1616;&#1591;&#1618;&#1600;&#1585;&#1614;&#1577;&#1616; &#1575;&#1604;&#1573;&#1587;&#1618;&#1604;&#1575;&#1605; &#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1603;&#1614;&#1604;&#1616;&#1600;&#1605;&#1614;&#1577;&#1616; &#1575;&#1604;&#1573;&#1582;&#1618;&#1600;&#1604;&#1575;&#1589; &#1548; &#1608;&#1614;&#1593;&#1604;&#1600;&#1609; &#1583;&#1610;&#1606;&#1616; &#1606;&#1614;&#1576;&#1616;&#1600;&#1610;&#1617;&#1616;&#1606;&#1575; &#1605;&#1615;&#1581;&#1614;&#1600;&#1605;&#1617;&#1614;&#1583;&#1613;  &#1608;&#1614;&#1593;&#1614;&#1575;&#1600;&#1609; &#1605;&#1616;&#1604;&#1617;&#1614;&#1600;&#1577;&#1616; &#1571;&#1576;&#1610;&#1606;&#1600;&#1575; &#1573;&#1616;&#1576;&#1618;&#1600;&#1585;&#1575;&#1607;&#1610;&#1600;&#1605;&#1614; &#1581;&#1614;&#1606;&#1610;&#1600;&#1601;&#1575;&#1611; &#1605;&#1615;&#1587;&#1618;&#1604;&#1616;&#1600;&#1605;&#1575;&#1611; &#1608;&#1614;&#1605;&#1600;&#1575; &#1603;&#1600;&#1575;&#1606;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1615;&#1588;&#1600;&#1585;&#1616;&#1603;&#1610;&#1600;&#1606; ",
                "transliteration": "",
                "audio": "audio/90.mp3"
            }, {
                "id": 91,
                "meaning": "How perfect Allah is and I praise Him. [one hundred times]",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1600;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1616;&#1607;&#1616; . (&#1605;&#1575;&#1574;&#1577; &#1605;&#1585;&#1577;)",
                "transliteration": "",
                "audio": "audio/91.mp3"
            }, {
                "id": 92,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. [ten times, or just once]",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1618;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1548; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1583;&#1610;&#1585; . ",
                "transliteration": "",
                "audio": "audio/92.mp3"
            }, {
                "id": 93,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent. [one hundred times every day]",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1618;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1548; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1583;&#1610;&#1585; . (&#1605;&#1575;&#1574;&#1577; &#1605;&#1585;&#1577;)",
                "transliteration": "",
                "audio": "audio/93.mp3"
            }, {
                "id": 94,
                "meaning": "How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His throne, and the ink of His words. [three times]",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1600;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1616;&#1607;&#1616; &#1593;&#1614;&#1583;&#1614;&#1583;&#1614; &#1582;&#1614;&#1604;&#1618;&#1600;&#1602;&#1616;&#1607; &#1548; &#1608;&#1614;&#1585;&#1616;&#1590;&#1600;&#1575; &#1606;&#1614;&#1601;&#1618;&#1587;&#1616;&#1600;&#1607; &#1548; &#1608;&#1614;&#1586;&#1616;&#1606;&#1614;&#1600;&#1577;&#1614; &#1593;&#1614;&#1600;&#1585;&#1618;&#1588;&#1616;&#1600;&#1607; &#1548; &#1608;&#1614;&#1605;&#1616;&#1600;&#1583;&#1575;&#1583;&#1614; &#1603;&#1614;&#1604;&#1616;&#1605;&#1600;&#1575;&#1578;&#1616;&#1600;&#1607; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;)",
                "transliteration": "",
                "audio": "audio/94.mp3"
            }, {
                "id": 95,
                "meaning": "O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable. (To be said after giving salam for the fajr prayer)<br ?>",
                "arabic": "",
                "transliteration": "",
                "audio": "audio/95.mp3"
            }, {
                "id": 96,
                "meaning": "I seek Your forgiveness, Allah, and repent unto You.Â’",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1614; &#1608;&#1614;&#1571;&#1614;&#1578;&#1615;&#1608;&#1576;&#1615; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616;",
                "transliteration": "",
                "audio": "audio/96.mp3"
            }, {
                "id": 97,
                "meaning": "I take refuge in AllahÂ’s perfect words from the evil He has created. [Three times in the evening]",
                "arabic": "&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615;&#1576;&#1616;&#1603;&#1614;&#1604;&#1616;&#1605;&#1600;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1578;&#1617;&#1600;&#1575;&#1605;&#1617;&#1600;&#1575;&#1578;&#1616; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1575; &#1582;&#1614;&#1604;&#1614;&#1600;&#1602; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611; &#1573;&#1616;&#1584;&#1575; &#1571;&#1605;&#1587;&#1609;)",
                "transliteration": "",
                "audio": "audio/97.mp3"
            }, {
                "id": 98,
                "meaning": "O Allah, send prayers and blessings upon our prophet Muhammad. (ten times)",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1589;&#1614;&#1604;&#1617;&#1616; &#1608;&#1614; &#1587;&#1614;&#1604;&#1617;&#1616;&#1605;&#1618; &#1593;&#1614;&#1604;&#1614;&#1609; &#1606;&#1614;&#1576;&#1616;&#1610;&#1617;&#1616;&#1606;&#1614;&#1575; &#1605;&#1615;&#1581;&#1614;&#1605;&#1617;&#1614;&#1583;&#1613;",
                "transliteration": "Allahumma <u>s</u>alli wa sallim <sup>c</sup>ala nabiyyina Mu<u>h</u>ammad.",
                "audio": "audio/98.mp3"
            }]
        }, {
            "id": 25,
            "title": "For seeking guidance in forming a decision or choosing the proper course",
            "duas": [{
                "id": 74,
                "meaning": "O Allah, I seek Your counsel by Your knowledge and by Your power I seek strength and I ask You from Your immense favour, for verily You are able while I am not and verily You know while I do not and You are the Knower of the unseen. O Allah, if You know this affair -and here he mentions his need- to be good for me in relation to my religion, my life, and end, then decree and facilitate it for me, and bless me with it, and if You know this affair to be ill for me towards my religion, my life, and end, then remove it from me and remove me from it, and decree for me what is good wherever it be and make me satisfied with such.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1582;&#1610;&#1600;&#1585;&#1615;&#1603;&#1614; &#1576;&#1616;&#1593;&#1616;&#1575;&#1618;&#1600;&#1605;&#1616;&#1603;&#1548; &#1608;&#1614;&#1571;&#1587;&#1618;&#1578;&#1614;&#1602;&#1618;&#1600;&#1583;&#1616;&#1585;&#1615;&#1603;&#1614; &#1576;&#1616;&#1602;&#1615;&#1600;&#1583;&#1618;&#1585;&#1614;&#1578;&#1616;&#1600;&#1603;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1604;&#1615;&#1600;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1601;&#1614;&#1590;&#1618;&#1600;&#1604;&#1616;&#1603;&#1614; &#1575;&#1604;&#1593;&#1614;&#1592;&#1600;&#1610;&#1605;&#1548; &#1601;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1578;&#1614;&#1602;&#1618;&#1600;&#1583;&#1616;&#1585;&#1615; &#1608;&#1614;&#1604;&#1575; &#1571;&#1614;&#1602;&#1618;&#1600;&#1583;&#1616;&#1585;&#1548; &#1608;&#1614;&#1578;&#1614;&#1600;&#1593;&#1618;&#1604;&#1614;&#1600;&#1605;&#1615; &#1608;&#1614;&#1604;&#1575; &#1571;&#1614;&#1593;&#1618;&#1604;&#1614;&#1600;&#1605;&#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1593;&#1614;&#1604;&#1575;&#1617;&#1605;&#1615; &#1575;&#1604;&#1594;&#1615;&#1600;&#1610;&#1608;&#1576;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1618; &#1603;&#1615;&#1606;&#1618;&#1600;&#1578;&#1614; &#1578;&#1614;&#1593;&#1618;&#1600;&#1604;&#1614;&#1605;&#1615; &#1571;&#1614;&#1606;&#1617;&#1614; &#1607;&#1600;&#1584;&#1575; &#1575;&#1604;&#1571;&#1605;&#1618;&#1600;&#1585;&#1614;- &#1608;&#1614;&#1610;&#1615;&#1587;&#1614;&#1600;&#1605;&#1617;&#1616;&#1610; &#1581;&#1575;&#1580;&#1614;&#1578;&#1614;&#1600;&#1607; - &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1612; &#1604;&#1610; &#1601;&#1610; &#1583;&#1610;&#1606;&#1600;&#1610; &#1608;&#1614;&#1605;&#1614;&#1593;&#1600;&#1575;&#1588;&#1610; &#1608;&#1614;&#1593;&#1575;&#1602;&#1616;&#1600;&#1576;&#1614;&#1577;&#1616; &#1571;&#1614;&#1605;&#1618;&#1600;&#1585;&#1610;&#1548; &#1601;&#1614;&#1575;&#1602;&#1618;&#1600;&#1583;&#1615;&#1585;&#1618;&#1607;&#1615; &#1604;&#1610; &#1608;&#1614;&#1610;&#1614;&#1587;&#1617;&#1616;&#1600;&#1585;&#1618;&#1607;&#1615; &#1604;&#1610; &#1579;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1604;&#1610; &#1601;&#1610;&#1600;&#1607;&#1548; &#1608;&#1614;&#1573;&#1616;&#1606;&#1618; &#1603;&#1615;&#1606;&#1618;&#1600;&#1578;&#1614; &#1578;&#1614;&#1593;&#1618;&#1600;&#1604;&#1614;&#1605;&#1615; &#1571;&#1614;&#1606;&#1617;&#1614; &#1607;&#1600;&#1584;&#1575; &#1575;&#1604;&#1571;&#1605;&#1618;&#1600;&#1585;&#1614; &#1588;&#1614;&#1600;&#1585;&#1612; &#1604;&#1610; &#1601;&#1610; &#1583;&#1610;&#1606;&#1600;&#1610; &#1608;&#1614;&#1605;&#1614;&#1593;&#1600;&#1575;&#1588;&#1610; &#1608;&#1614;&#1593;&#1575;&#1602;&#1616;&#1600;&#1576;&#1614;&#1577;&#1616; &#1571;&#1614;&#1605;&#1618;&#1600;&#1585;&#1610;&#1548; &#1601;&#1614;&#1575;&#1589;&#1618;&#1585;&#1616;&#1601;&#1618;&#1600;&#1607;&#1615; &#1608;&#1614;&#1575;&#1589;&#1618;&#1585;&#1616;&#1601;&#1618;&#1606;&#1610; &#1593;&#1614;&#1606;&#1618;&#1600;&#1607;&#1615; &#1608;&#1614;&#1575;&#1602;&#1618;&#1600;&#1583;&#1615;&#1585;&#1618; &#1604;&#1610; &#1575;&#1604;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1614; &#1581;&#1614;&#1610;&#1618;&#1600;&#1579;&#1615; &#1603;&#1575;&#1606;&#1614; &#1579;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1585;&#1618;&#1590;&#1616;&#1600;&#1606;&#1610; &#1576;&#1616;&#1600;&#1607; ",
                "transliteration": "Allahumma inni astakhiruka bi-<sup>c</sup>ilmika wa astaqdiruka bi-qudratika, wa as-aluka min fa<u>d</u>lika-l-<sup>c</sup>a<u>z</u>imi. Fa-innaka taqdiru wa la aqdiru, wa ta<sup>c</sup>lamu wa la a<sup>c</sup>lamu, wa anta <sup>c</sup>allamu-l-ghuyÃ»bi. Allahumma in kunta ta<sup>c</sup>lamu anna hadha-l-amra (que l'on explicite) khayrun li fi dini wa ma<sup>c</sup>ashi, wa <sup>c</sup>aqibati amri (ou : <sup>c</sup>ajilihi wa ajilihi) fa-qdurhu li, wa yassirhu li, thumma barik li fihi. Wa in kunta ta<sup>c</sup>lamu anna hadha-l-amra (que l'on explicite) sharrun li fi dini wa ma<sup>c</sup>ashi, , wa <sup>c</sup>aqibati amri (ou : <sup>c</sup>ajilihi wa ajilihi) fa-<u>s</u>rifhu <sup>c</sup>anni, wa <u>s</u>rifni <sup>c</sup>anhu, wa qdur li-l-khayra <u>h</u>aythu kana thumma ar<u>d</u>dini bihi.",
                "audio": "audio/74.mp3"
            }]
        }, {
            "id": 24,
            "title": "After salam",
            "duas": [{
                "id": 66,
                "meaning": "O Allah, You are As-Salam and from You is all peace, blessed are You, O Possessor of majesty and honour.",
                "arabic": "&#1571;&#1614;&#1587;&#1618;&#1600;&#1578;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1604;&#1607; . (&#1579;&#1614;&#1604;&#1575;&#1579;&#1575;&#1611;) &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1548; &#1608;&#1614;&#1605;&#1616;&#1600;&#1606;&#1618;&#1603;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605; &#1548; &#1578;&#1614;&#1576;&#1575;&#1585;&#1614;&#1603;&#1618;&#1578;&#1614; &#1610;&#1575; &#1584;&#1575; &#1575;&#1604;&#1580;&#1614;&#1600;&#1604;&#1575;&#1604;&#1616; &#1608;&#1614;&#1575;&#1604;&#1573;&#1616;&#1603;&#1618;&#1600;&#1585;&#1575;&#1605;",
                "transliteration": "Astaghfiru l-laha (3 fois). Allahumma anta s-salamu wa minka s-salamu, tabarakta ya dha-l-jalali wa-l-ikram.",
                "audio": "audio/66.mp3"
            }, {
                "id": 67,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.O Allah, none can prevent what You have willed to bestow and none can bestow what You have willed to prevent, and no wealth or majesty can benefit anyone, as from You is all wealth and majesty.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1581;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1600;&#1604;&#1618;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1548; &#1608;&#1607;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1583;&#1610;&#1585;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1575; &#1605;&#1575;&#1606;&#1616;&#1593;&#1614; &#1604;&#1616;&#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1591;&#1614;&#1600;&#1610;&#1618;&#1578;&#1548; &#1608;&#1614;&#1604;&#1575; &#1605;&#1615;&#1593;&#1618;&#1591;&#1616;&#1600;&#1610;&#1614; &#1604;&#1616;&#1605;&#1575; &#1605;&#1614;&#1606;&#1614;&#1600;&#1593;&#1618;&#1578;&#1548; &#1608;&#1614;&#1604;&#1575; &#1610;&#1614;&#1606;&#1618;&#1601;&#1614;&#1600;&#1593;&#1615; &#1584;&#1575; &#1575;&#1604;&#1580;&#1614;&#1600;&#1583;&#1617;&#1616; &#1605;&#1616;&#1606;&#1618;&#1600;&#1603;&#1614; &#1575;&#1604;&#1580;&#1614;&#1600;&#1583;",
                "transliteration": "La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu wa huwa <sup>c</sup>ala kulli shay'in qadir. Allahumma la mani<sup>c</sup>a lima a<sup>c</sup><u>t</u>ayta wa la mu<sup>c</sup><u>t</u>iya lima mana<sup>c</sup>ta wa la yanfa<sup>c</sup>u dha-l-jaddi minka-l-jaddu.",
                "audio": "audio/67.mp3"
            }, {
                "id": 68,
                "meaning": "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. There is no might nor power except with Allah, none has the right to be worshipped except Allah and we worship none except Him. For Him is all favour, grace, and glorious praise. None has the right to be worshipped except Allah and we are sincere in faith and devotion to Him although the disbelievers detest it.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;, &#1608;&#1581;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1604;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1583;&#1548; &#1608;&#1607;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1610;&#1569;&#1613; &#1602;&#1583;&#1610;&#1585;&#1548; &#1604;&#1575; &#1581;&#1614;&#1600;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1575; &#1602;&#1600;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1600;&#1607;&#1548; &#1608;&#1614;&#1604;&#1575; &#1606;&#1614;&#1593;&#1618;&#1600;&#1576;&#1615;&#1600;&#1583;&#1615; &#1573;&#1616;&#1604;&#1575;&#1617; &#1573;&#1610;&#1617;&#1600;&#1575;&#1607;, &#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1606;&#1617;&#1616;&#1593;&#1618;&#1600;&#1605;&#1614;&#1577;&#1615; &#1608;&#1614;&#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1601;&#1614;&#1590;&#1618;&#1604; &#1608;&#1614;&#1604;&#1614;&#1607;&#1615; &#1575;&#1604;&#1579;&#1617;&#1614;&#1600;&#1606;&#1575;&#1569;&#1615; &#1575;&#1604;&#1581;&#1614;&#1600;&#1587;&#1614;&#1606;&#1548; &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1605;&#1582;&#1618;&#1604;&#1616;&#1589;&#1600;&#1610;&#1606;&#1614; &#1604;&#1614;&#1600;&#1607;&#1615; &#1575;&#1604;&#1583;&#1617;&#1616;&#1610;&#1606;&#1614; &#1608;&#1614;&#1604;&#1614;&#1608;&#1618; &#1603;&#1614;&#1600;&#1585;&#1616;&#1607;&#1614; &#1575;&#1604;&#1603;&#1600;&#1575;&#1601;&#1616;&#1585;&#1608;&#1606;",
                "transliteration": "La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu wa huwa <sup>c</sup>ala kulli shay'in qadirun. La <u>h</u>awla wa la quwwata illa bi-l-lahi.La ilaha illa l-lahu, wa la na<sup>c</sup>budu illa iyyahu, lahu n-ni<sup>c</sup>matu wa lahu-l-fa<u>d</u>lu wa lahu th-thana'u-l-<u>h</u>asanu. La ilaha illa l-lahu, mukhli<u>s</u>ina lahu d-dina wa law kariha-l-kafirÃ»n.",
                "audio": "audio/68.mp3"
            }, {
                "id": 69,
                "meaning": "How perfect Allah is, all praise is for Allah, and Allah is the greatest [thirty-three times]. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
                "arabic": "&#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607; &#1548; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1618;&#1600;&#1576;&#1614;&#1585; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611; &#1608;&#1579;&#1604;&#1575;&#1579;&#1610;&#1606;) &#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1615;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1604;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1583;&#1548; &#1608;&#1607;&#1615;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1615;&#1604;&#1617; &#1588;&#1614;&#1610;&#1569;&#1613; &#1602;&#1614;&#1600;&#1583;&#1610;&#1585; ",
                "transliteration": "Sub<u>h</u>ana l-lahi, wa-l-<u>h</u>amdu li-l-lahi, wa l-lahu akbar (33 fois). La ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu-l-<u>h</u>amdu wa huwa <sup>c</sup>ala kulli shay'in qadir.",
                "audio": "audio/69.mp3"
            }, {
                "id": 70,
                "meaning": "[surat Al-Ikhlas, Al-Falaq and An-Nas]",
                "arabic": ") &#1602;&#1615;&#1600;&#1604;&#1618; &#1607;&#1615;&#1600;&#1608;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1581;&#1614;&#1600;&#1583;&#1612; Â…..( [ &#1575;&#1604;&#1573;&#1616;&#1582;&#1618;&#1600;&#1604;&#1575;&#1589;&#1618; ]) &#1602;&#1615;&#1600;&#1604;&#1618; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1601;&#1614;&#1604;&#1614;&#1600;&#1602;&#1616;Â…..( [ &#1575;&#1604;&#1601;&#1614;&#1604;&#1614;&#1600;&#1602;&#1618; ]) &#1602;&#1615;&#1600;&#1604;&#1618; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1587;&#1616;Â…..([ &#1575;&#1604;&#1600;&#1606;&#1617;&#1575;&#1587; ]",
                "transliteration": "Bismi l-lahi r-ra<u>h</u>mani r-ra<u>h</u>imi.<br /> Qul huwa l-lahu a<u>h</u>ad. Allahu <u>s</u>-<u>s</u>amad, Lam yalid wa lam yÃ»lad, wa lam yakun lahu kufuan a<u>h</u>ad.<br /> <br /> Bismi l-lahi r-ra<u>h</u>mani r-ra<u>h</u>imi.<br /> Qul a<sup>c</sup>Ã»dhu bi-rabbi-l-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharri n-naffathati fi-l-<sup>c</sup>uqad, wa min sharri <u>h</u>asidin idha <u>h</u>asad.<br /> <br /> Bismi l-lahi r-ra<u>h</u>mani r-ra<u>h</u>imi.<br /> Qul a<sup>c</sup>Ã»dhu bi-rabbi n-nas, maliki n-nas, ilahi n-nas, min sharri-l-waswasi-l-khannas, al-ladhi yuwaswisu fi <u>s</u>udÃ»ri n-nas, mina-l-jinnati wa n-nas.",
                "audio": "audio/70.mp3"
            }, {
                "id": 71,
                "meaning": "[the verse of the Footstool (Ayat-Al-Kursiy) : II,255]",
                "arabic": " &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1575;&#1614; &#1573;&#1616;&#1604;&#1614;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1610;&#1617;&#1615; &#1575;&#1604;&#1618;&#1602;&#1614;&#1610;&#1617;&#1615;&#1608;&#1605;&#1615; &#1604;&#1575;&#1614; &#1578;&#1614;&#1571;&#1618;&#1582;&#1615;&#1584;&#1615;&#1607;&#1615; &#1587;&#1616;&#1606;&#1614;&#1577;&#1612; &#1608;&#1614;&#1604;&#1575;&#1614; &#1606;&#1614;&#1608;&#1618;&#1605;&#1612; &#1604;&#1617;&#1614;&#1607;&#1615; &#1605;&#1614;&#1575; &#1601;&#1616;&#1610; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1605;&#1614;&#1575; &#1601;&#1616;&#1610; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1605;&#1614;&#1606; &#1584;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610; &#1610;&#1614;&#1588;&#1618;&#1601;&#1614;&#1593;&#1615; &#1593;&#1616;&#1606;&#1618;&#1583;&#1614;&#1607;&#1615; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1576;&#1616;&#1573;&#1616;&#1584;&#1618;&#1606;&#1616;&#1607;&#1616; &#1610;&#1614;&#1593;&#1618;&#1604;&#1614;&#1605;&#1615; &#1605;&#1614;&#1575; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614; &#1571;&#1614;&#1610;&#1618;&#1583;&#1616;&#1610;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1605;&#1614;&#1575; &#1582;&#1614;&#1604;&#1618;&#1601;&#1614;&#1607;&#1615;&#1605;&#1618; &#1608;&#1614;&#1604;&#1575;&#1614; &#1610;&#1615;&#1581;&#1616;&#1610;&#1591;&#1615;&#1608;&#1606;&#1614; &#1576;&#1616;&#1588;&#1614;&#1609;&#1618;&#1569;&#1613; &#1605;&#1617;&#1616;&#1606;&#1618; &#1593;&#1616;&#1604;&#1618;&#1605;&#1616;&#1607;&#1616; &#1573;&#1616;&#1604;&#1575;&#1617;&#1614; &#1576;&#1616;&#1605;&#1614;&#1575; &#1588;&#1614;&#1575;&#1569; &#1608;&#1614;&#1587;&#1616;&#1593;&#1614; &#1603;&#1615;&#1585;&#1618;&#1587;&#1616;&#1610;&#1617;&#1615;&#1607;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1575;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1608;&#1614;&#1604;&#1575;&#1614; &#1610;&#1614;&#1572;&#1615;&#1608;&#1583;&#1615;&#1607;&#1615; &#1581;&#1616;&#1601;&#1618;&#1592;&#1615;&#1607;&#1615;&#1605;&#1614;&#1575; &#1608;&#1614;&#1607;&#1615;&#1608;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1604;&#1616;&#1610;&#1617;&#1615; &#1575;&#1604;&#1618;&#1593;&#1614;&#1592;&#1616;&#1610;&#1605;&#1615;",
                "transliteration": "Allahu la ilaha illa huwa-l-<u>h</u>ayyu-l-qayyÃ»m. La ta'khudhuhu sinatun wa la nawm, lahu ma fi s-samawati wa ma fi-l-ar<u>d</u>. Man dha l-ladhi yashfa<sup>c</sup>u <sup>c</sup>indahu illa bi-idhnihi. Ya<sup>c</sup>lamu ma bayna aydihim wa ma khalfahum. Wa la yu<u>h</u>i<u>t</u>Ã»na bi-shay'in min <sup>c</sup>ilmihi illa bi-ma sha'a. Wasi<sup>c</sup>a kursiyyuhu s-samawati wa-l-ar<u>d</u>. Wa la ya'Ã»duhu <u>h</u>if<u>z</u>uhuma, wa huwa-l-<sup>c</sup>aliyyu-l-<sup>c</sup>a<u>z</u>im.",
                "audio": "audio/71.mp3"
            }, {
                "id": 73,
                "meaning": "O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable. [to be said after giving salam for the fajr prayer]",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1593;&#1616;&#1604;&#1618;&#1605;&#1600;&#1575;&#1611; &#1606;&#1575;&#1601;&#1616;&#1593;&#1600;&#1575;&#1611; &#1608;&#1614;&#1585;&#1616;&#1586;&#1618;&#1602;&#1600;&#1575;&#1611; &#1591;&#1614;&#1610;&#1617;&#1616;&#1600;&#1576;&#1575;&#1611; &#1548; &#1608;&#1614;&#1593;&#1614;&#1605;&#1614;&#1600;&#1604;&#1575;&#1611; &#1605;&#1615;&#1578;&#1614;&#1602;&#1614;&#1600;&#1576;&#1617;&#1614;&#1604;&#1575;&#1611;",
                "transliteration": "Allahumma inni as'aluka <sup>c</sup>ilman nafi<sup>c</sup>an, wa rizqan <u>t</u>ayyiban, wa <sup>c</sup>amalan mutaqabbalan.",
                "audio": "audio/73.mp3"
            }]
        }, {
            "id": 23,
            "title": "After the last tashahhud and before salam",
            "duas": [{
                "id": 55,
                "meaning": "O Allah, I take refuge in You from the punishment of the grave, from the torment of the Fire, from the trials and tribulations of life and death and from the evil affliction of Al-Maseeh Ad-Dajjal.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585;&#1548; &#1608;&#1614;&#1605;&#1616;&#1600;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1580;&#1614;&#1607;&#1614;&#1600;&#1606;&#1617;&#1614;&#1605;&#1548; &#1608;&#1614;&#1605;&#1616;&#1600;&#1606;&#1618; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1616; &#1575;&#1604;&#1605;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575; &#1608;&#1614;&#1575;&#1604;&#1605;&#1614;&#1605;&#1600;&#1575;&#1578;&#1548; &#1608;&#1614;&#1605;&#1616;&#1600;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1616; &#1575;&#1604;&#1605;&#1614;&#1587;&#1610;&#1581;&#1616; &#1575;&#1604;&#1583;&#1617;&#1614;&#1580;&#1617;&#1575;&#1604;",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika min <sup>c</sup>adhabi-l-qabri, wa min <sup>c</sup>adhabi jahannama, wa min fitnati-l-ma<u>h</u>ya wa-l-mamati, wa min sharri fitnati-l-masihi d-dajjal.",
                "audio": "audio/55.mp3"
            }, {
                "id": 56,
                "meaning": "O Allah, I take refuge in You from the punishment of the grave, and I take refuge in You from the temptation and trial of Al-Maseeh Ad-Dajjal, and I take refuge in You from the trials and tribulations of life and death. O Allah, I take refuge in You from sin and debt.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1593;&#1614;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1616; &#1575;&#1604;&#1605;&#1614;&#1587;&#1610;&#1581;&#1616; &#1575;&#1604;&#1583;&#1617;&#1614;&#1580;&#1617;&#1600;&#1575;&#1604; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1616; &#1575;&#1604;&#1605;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575; &#1608;&#1614;&#1575;&#1604;&#1605;&#1614;&#1605;&#1600;&#1575;&#1578; . &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1614;&#1571;&#1618;&#1579;&#1614;&#1600;&#1605;&#1616; &#1608;&#1614;&#1575;&#1604;&#1605;&#1614;&#1594;&#1618;&#1600;&#1585;&#1614;&#1605; ",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika min <sup>c</sup>adhabi-l-qabri, wa a<sup>c</sup>Ã»dhu bika min fitnati-l-masihi d-dajjal, wa a<sup>c</sup>Ã»dhu bika min fitnati-l-ma<u>h</u>ya wa-l-mamati. Allahumma inni a<sup>c</sup>Ã»dhu bika mina-l-ma'thami wa-l-maghrami.",
                "audio": "audio/56.mp3"
            }, {
                "id": 57,
                "meaning": "O Allah, I have indeed oppressed my soul excessively and none can forgive sin except You, so forgive me a forgiveness from Yourself and have mercy upon me. Surely, You are The Most-Forgiving, The Most-Merciful.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1592;&#1614;&#1604;&#1614;&#1600;&#1605;&#1618;&#1578;&#1615; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1610; &#1592;&#1615;&#1604;&#1618;&#1605;&#1600;&#1575;&#1611; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575;&#1611; &#1608;&#1614;&#1604;&#1575; &#1610;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1584;&#1617;&#1615;&#1606;&#1600;&#1608;&#1576;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578; &#1548; &#1601;&#1614;&#1575;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585; &#1604;&#1610; &#1605;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1614;&#1577;&#1611; &#1605;&#1616;&#1606;&#1618; &#1593;&#1616;&#1606;&#1618;&#1600;&#1583;&#1616;&#1603; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1606;&#1610;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1594;&#1614;&#1600;&#1601;&#1608;&#1585;&#1615; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1600;&#1610;&#1605;",
                "transliteration": "Allahumma inni <u>z</u>alamtu nafsi <u>z</u>ulman kathiran, wa la yaghfiru dh-dhunÃ»ba illa anta. Fa-ghfir li maghfiratan min <sup>c</sup>indika, wa r<u>h</u>amni, innaka anta-l-ghafÃ»ru r-ra<u>h</u>im.",
                "audio": "audio/57.mp3"
            }, {
                "id": 58,
                "meaning": "O Allah, forgive me for those sins which have come to pass as well as those which shall come to pass, and those I have committed in secret as well as those I have made public, and where I have exceeded all bounds as well as those things about which You are more knowledgeable. You are Al-Muqaddim and Al-Mu-akhkhir. None has the right to be worshipped except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1618; &#1604;&#1610; &#1605;&#1575; &#1602;&#1614;&#1583;&#1617;&#1614;&#1605;&#1618;&#1600;&#1578;&#1615; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1582;&#1617;&#1614;&#1585;&#1618;&#1578; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1587;&#1618;&#1600;&#1585;&#1614;&#1585;&#1618;&#1578;&#1615; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1604;&#1614;&#1600;&#1606;&#1618;&#1578; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1587;&#1618;&#1600;&#1585;&#1614;&#1601;&#1618;&#1578; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1571;&#1614;&#1593;&#1618;&#1600;&#1604;&#1614;&#1605;&#1615; &#1576;&#1616;&#1607;&#1616; &#1605;&#1616;&#1606;&#1617;&#1616;&#1610; . &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1605;&#1615;&#1602;&#1614;&#1600;&#1583;&#1617;&#1616;&#1605;&#1615;&#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1605;&#1615;&#1600;&#1572;&#1614;&#1582;&#1617;&#1616;&#1600;&#1585;&#1615; &#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578; ",
                "transliteration": "Allahumma ghfir li ma qaddamatu, wa ma akhkhartu, wa ma asrartu, wa ma a<sup>c</sup>lantu, wa ma asraftu, wa ma anta a<sup>c</sup>lamu bihi minni. Anta-l-muqaddimu wa anta-l-mu'akhkhiru. La ilaha illa anta.",
                "audio": "audio/58.mp3"
            }, {
                "id": 59,
                "meaning": "O Allah, help me to remember You, to thank You, and to worship You in the best of manners.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1593;&#1616;&#1600;&#1606;&#1617;&#1616;&#1610; &#1593;&#1614;&#1604;&#1600;&#1609; &#1584;&#1616;&#1603;&#1618;&#1600;&#1585;&#1616;&#1603;&#1614; &#1608;&#1614;&#1588;&#1615;&#1603;&#1618;&#1600;&#1585;&#1616;&#1603; &#1548; &#1608;&#1614;&#1581;&#1615;&#1587;&#1618;&#1600;&#1606;&#1616; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1614;&#1578;&#1616;&#1600;&#1603; ",
                "transliteration": "Allahumma a<sup>c</sup>inni <sup>c</sup>ala dhikrika, wa shukrika, wu <u>h</u>usni <sup>c</sup>ibadatik.",
                "audio": "audio/59.mp3"
            }, {
                "id": 60,
                "meaning": "O Allah, I take refuge in You from miserliness and cowardice, I take refuge in You lest I be returned to the worst of lives, and I take refuge in You from the trials and tribulations of this life and the punishment of the grave.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1576;&#1615;&#1582;&#1618;&#1600;&#1604;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1580;&#1615;&#1600;&#1576;&#1618;&#1606;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1571;&#1614;&#1606;&#1618; &#1571;&#1615;&#1585;&#1614;&#1583;&#1617;&#1614; &#1573;&#1616;&#1604;&#1609; &#1571;&#1614;&#1585;&#1618;&#1584;&#1614;&#1604;&#1616; &#1575;&#1604;&#1600;&#1593;&#1615;&#1605;&#1615;&#1585;&#1548; &#1608;&#1614;&#1571;&#1614;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1601;&#1616;&#1578;&#1618;&#1606;&#1614;&#1600;&#1577;&#1616; &#1575;&#1604;&#1583;&#1617;&#1615;&#1606;&#1618;&#1600;&#1610;&#1575; &#1608;&#1614;&#1593;&#1614;&#1600;&#1584;&#1575;&#1576;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1576;&#1618;&#1585; ",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika min al bukhli, wa a<sup>c</sup>Ã»dhu bika min al jubni, wa a<sup>c</sup>Ã»dhu bika min an uradda ila ardhali-l-<sup>c</sup>umur. Wa a<sup>c</sup>Ã»dhu bika min fitnati d-dunya wa <sup>c</sup>adhabi-l-qabri.",
                "audio": "audio/60.mp3"
            }, {
                "id": 61,
                "meaning": "O Allah, I ask You to grant me Paradise and I take refuge in You from the Fire.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1580;&#1614;&#1600;&#1606;&#1617;&#1614;&#1577;&#1614; &#1608;&#1571;&#1614;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1614; &#1575;&#1604;&#1600;&#1606;&#1617;&#1575;&#1585;",
                "transliteration": "Allahumma inni as'aluka-l-jannata wa a<sup>c</sup>Ã»dhu bika mina n-nar.",
                "audio": "audio/61.mp3"
            }, {
                "id": 62,
                "meaning": "O Allah, by Your knowledge of the unseen and Your power over creation, keep me alive so long as You know such life to be good for me and take me if You know death to be better for me. O Allah, make me fearful of You whether in secret or in public and I ask You to make me true in speech, in times of pleasure and anger.I ask you to make me moderate in times of wealth and poverty and I ask You for everlasting bliss and joy which will never cease.I ask You to make me pleased with what You have decreed and for an easy life after death.I ask You for the sweetness of looking upon Your Face and a longing to encounter You in a manner which does not entail a calamity which will bring about harm nor a trial which will cause deviation. O Allah, beautify us with the adornment of faith and make us of those who guide and are rightly guided.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1616;&#1593;&#1616;&#1604;&#1618;&#1600;&#1605;&#1616;&#1603;&#1614; &#1575;&#1604;&#1594;&#1614;&#1600;&#1610;&#1618;&#1576;&#1616; &#1608;&#1614;&#1602;&#1615;&#1600;&#1583;&#1618;&#1585;&#1614;&#1578;&#1616;&#1600;&#1603;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1575;&#1604;&#1618;&#1582;&#1614;&#1604;&#1602;&#1616; &#1571;&#1614;&#1581;&#1618;&#1600;&#1610;&#1616;&#1606;&#1610; &#1605;&#1575; &#1593;&#1614;&#1604;&#1616;&#1600;&#1605;&#1618;&#1578;&#1614; &#1575;&#1604;&#1581;&#1600;&#1610;&#1575;&#1577;&#1614; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1604;&#1600;&#1610;&#1548; &#1608;&#1614;&#1578;&#1614;&#1608;&#1614;&#1601;&#1617;&#1614;&#1600;&#1606;&#1610; &#1573;&#1616;&#1584;&#1575; &#1593;&#1614;&#1604;&#1616;&#1600;&#1605;&#1618;&#1578;&#1614; &#1575;&#1604;&#1608;&#1614;&#1601;&#1600;&#1575;&#1577;&#1614; &#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1575;&#1611; &#1604;&#1600;&#1610;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1582;&#1614;&#1588;&#1618;&#1610;&#1614;&#1578;&#1614;&#1600;&#1603;&#1614; &#1601;&#1610; &#1575;&#1604;&#1594;&#1614;&#1600;&#1610;&#1618;&#1576;&#1616; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1614;&#1607;&#1600;&#1575;&#1583;&#1614;&#1577;&#1616;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1603;&#1614;&#1604;&#1616;&#1605;&#1614;&#1600;&#1577;&#1614; &#1575;&#1604;&#1581;&#1614;&#1600;&#1602;&#1617;&#1616; &#1601;&#1610; &#1575;&#1604;&#1585;&#1617;&#1616;&#1590;&#1600;&#1575; &#1608;&#1614;&#1575;&#1604;&#1594;&#1614;&#1590;&#1614;&#1600;&#1576;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1602;&#1614;&#1589;&#1618;&#1583;&#1614; &#1601;&#1610; &#1575;&#1604;&#1594;&#1616;&#1606;&#1600;&#1609; &#1608;&#1614;&#1575;&#1604;&#1601;&#1614;&#1602;&#1618;&#1600;&#1585;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1606;&#1614;&#1593;&#1600;&#1610;&#1605;&#1575;&#1611; &#1604;&#1575; &#1610;&#1614;&#1606;&#1618;&#1601;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1602;&#1615;&#1600;&#1585;&#1617;&#1614;&#1577;&#1614; &#1593;&#1614;&#1610;&#1618;&#1600;&#1606;&#1613; &#1604;&#1575; &#1578;&#1614;&#1606;&#1618;&#1600;&#1602;&#1614;&#1591;&#1616;&#1593;&#1618; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1585;&#1617;&#1616;&#1590;&#1600;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614; &#1575;&#1604;&#1602;&#1614;&#1590;&#1600;&#1575;&#1569;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1576;&#1611;&#1600;&#1585;&#1618;&#1583;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1600;&#1610;&#1618;&#1588;&#1616; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614; &#1575;&#1604;&#1618;&#1605;&#1614;&#1600;&#1608;&#1618;&#1578;&#1548; &#1608;&#1614;&#1571;&#1614;&#1587;&#1618;&#1600;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1604;&#1614;&#1600;&#1584;&#1617;&#1614;&#1577;&#1614; &#1575;&#1604;&#1606;&#1617;&#1614;&#1592;&#1614;&#1600;&#1585;&#1616; &#1573;&#1616;&#1604;&#1600;&#1609; &#1608;&#1614;&#1580;&#1618;&#1600;&#1607;&#1616;&#1603;&#1614; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1614;&#1600;&#1608;&#1618;&#1602;&#1614; &#1573;&#1616;&#1604;&#1600;&#1609; &#1604;&#1616;&#1602;&#1600;&#1575;&#1574;&#1616;&#1600;&#1603;&#1548; &#1601;&#1610; &#1594;&#1614;&#1600;&#1610;&#1585;&#1616; &#1590;&#1614;&#1600;&#1585;&#1617;&#1575;&#1569;&#1614; &#1605;&#1615;&#1590;&#1616;&#1600;&#1585;&#1617;&#1614;&#1577;&#1548; &#1608;&#1614;&#1604;&#1575; &#1601;&#1616;&#1578;&#1618;&#1600;&#1606;&#1614;&#1577;&#1613; &#1605;&#1615;&#1590;&#1600;&#1604;&#1617;&#1614;&#1577;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1586;&#1614;&#1610;&#1617;&#1616;&#1600;&#1606;&#1617;&#1575; &#1576;&#1616;&#1586;&#1610;&#1606;&#1614;&#1600;&#1577;&#1616; &#1575;&#1604;&#1573;&#1610;&#1600;&#1605;&#1575;&#1606;&#1548; &#1608;&#1614;&#1575;&#1580;&#1618;&#1600;&#1593;&#1614;&#1604;&#1606;&#1575; &#1607;&#1615;&#1600;&#1583;&#1575;&#1577;&#1611; &#1605;&#1615;&#1607;&#1618;&#1600;&#1578;&#1614;&#1583;&#1610;&#1606; ",
                "transliteration": "Allahumma, bi-<sup>c</sup>ilmika-l-ghayba wa qudratika <sup>c</sup>ala-l-khalqi, a<u>h</u>yini ma <sup>c</sup>alimta-l-<u>h</u>ayata khayran li, wa tawwafani idha <sup>c</sup>alimta-l-wafata khayran li. Allahumma inni as'aluka khashyataka fi-l-ghaybi wa sh-shahadati. Wa as'aluka kalimata-l-haqqi fi r-ri<u>d</u>a wa-l-gha<u>d</u>abi. Wa as'aluka-l-qa<u>s</u>da fi-l-ghina wa-l-faqri. Wa as'aluka na<sup>c</sup>iman la yanfadu wa as'aluka qurrata <sup>c</sup>aynin la tanqa<u>t</u>i<sup>c</sup>u. Wa as'aluka r-ri<u>d</u>a ba<sup>c</sup>da-l-qa<u>d</u>a, wa as'aluka barda-l-<sup>c</sup>ayshi ba<sup>c</sup>da-l-mawti. Wa as'aluka ladhdhata n-na<u>z</u>ari ila wajhika wa sh-shawqa ila liqa'ika fi ghayri <u>d</u>arra'a mu<u>d</u>irratin wa la fitnatin mu<u>d</u>illatin. Allahumma zayyinna bi-zinati-l-imani, wa j<sup>c</sup>alna hudatan muhtadin.",
                "audio": "audio/62.mp3"
            }, {
                "id": 63,
                "meaning": "O Allah, I ask You O Allah, as You are The One, The Only, AS-Samad, The One who begets not, nor was He begotten and there is none like unto Him that You forgive me my sins for verily You are The Oft-Forgiving, Most-Merciful.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1610;&#1575; &#1575;&#1604;&#1604;&#1607;&#1615; &#1576;&#1616;&#1571;&#1614;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1608;&#1575;&#1581;&#1616;&#1600;&#1583;&#1615; &#1575;&#1604;&#1571;&#1614;&#1581;&#1614;&#1600;&#1583; &#1548;&#1575;&#1604;&#1589;&#1617;&#1614;&#1600;&#1605;&#1614;&#1583;&#1615; &#1575;&#1604;&#1617;&#1614;&#1600;&#1584;&#1610; &#1604;&#1614;&#1600;&#1605;&#1618; &#1610;&#1614;&#1604;&#1616;&#1600;&#1583;&#1618; &#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1608;&#1604;&#1614;&#1583;&#1618;&#1548; &#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1603;&#1600;&#1606;&#1618; &#1604;&#1614;&#1607;&#1615; &#1603;&#1615;&#1600;&#1601;&#1615;&#1608;&#1575;&#1611; &#1571;&#1614;&#1581;&#1614;&#1600;&#1583; &#1548; &#1571;&#1614;&#1606;&#1618; &#1578;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1618; &#1604;&#1610; &#1584;&#1615;&#1606;&#1600;&#1608;&#1576;&#1610; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1594;&#1614;&#1601;&#1600;&#1608;&#1585;&#1615; &#1575;&#1604;&#1585;&#1617;&#1614;&#1581;&#1617;&#1616;&#1600;&#1610;&#1605;",
                "transliteration": "Allahumma inni as'aluka, ya Allahu, bi-annaka-l-wa<u>h</u>idu-l-a<u>h</u>adu <u>s</u>-<u>s</u>amadu, al-ladhi lam yalid wa lam yÃ»lad, wa lam yakun lahu kufuan a<u>h</u>adun, an taghfira li dhunÃ»bi. Innaka anta-l-ghafÃ»ru r-ra<u>h</u>im.",
                "audio": "audio/63.mp3"
            }, {
                "id": 64,
                "meaning": "O Allah, I ask You as unto You is all praise, none has the right to be worshipped except You, alone, without partner. You are the Benefactor. O Originator of the heavens and the Earth, O Possessor of majesty and honour, O Ever Living, O Self-Subsisting and Supporter of all, verily I ask You for Paradise and I take refuge with You from the Fire.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1576;&#1616;&#1571;&#1614;&#1606;&#1617;&#1614; &#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1615; &#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1605;&#1614;&#1606;&#1617;&#1600;&#1575;&#1606;&#1615; &#1610;&#1575; &#1576;&#1614;&#1583;&#1610;&#1600;&#1593;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1610;&#1575; &#1584;&#1575; &#1575;&#1604;&#1580;&#1614;&#1604;&#1575;&#1604;&#1616; &#1608;&#1614;&#1575;&#1604;&#1573;&#1616;&#1603;&#1618;&#1600;&#1585;&#1575;&#1605;&#1548; &#1610;&#1575; &#1581;&#1614;&#1600;&#1610;&#1617;&#1615; &#1610;&#1575; &#1602;&#1614;&#1600;&#1610;&#1617;&#1608;&#1605;&#1615; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1580;&#1614;&#1600;&#1606;&#1617;&#1614;&#1577;&#1614; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1600;&#1606;&#1617;&#1575;&#1585; ",
                "transliteration": "Allahumma inni as'aluka bi-anna laka-l-<u>h</u>amd, la ilaha illa anta wa<u>h</u>daka la sharika laka, al mannanu. Ya badi<sup>c</sup>u s-samawati wa-l-ar<u>d</u>i ! Ya dha-l-jalali wa-l-ikrami. Ya <u>h</u>ayyu, ya qayyÃ»mu ! Inni as'aluka-l-jannata wa a<sup>c</sup>Ã»dhu bika mina n-nar.",
                "audio": "audio/64.mp3"
            }, {
                "id": 65,
                "meaning": "O Allah, I ask You, as I bear witness that You are Allah, none has the right to be worshipped except You, The One, AS-Samad Who begets not nor was He begotten and there is none like unto Him.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1576;&#1616;&#1571;&#1614;&#1606;&#1617;&#1614;&#1600;&#1610; &#1571;&#1614;&#1588;&#1618;&#1600;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1571;&#1606;&#1618;&#1600;&#1578;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578; &#1548; &#1575;&#1604;&#1571;&#1614;&#1581;&#1614;&#1600;&#1583;&#1615; &#1575;&#1604;&#1589;&#1617;&#1614;&#1600;&#1605;&#1614;&#1583;&#1615; &#1575;&#1604;&#1617;&#1614;&#1600;&#1584;&#1610; &#1604;&#1614;&#1600;&#1605;&#1618; &#1610;&#1614;&#1604;&#1616;&#1600;&#1583;&#1618; &#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1608;&#1604;&#1614;&#1600;&#1583;&#1618; &#1548; &#1608;&#1614;&#1604;&#1614;&#1605;&#1618; &#1610;&#1614;&#1603;&#1600;&#1606;&#1618; &#1604;&#1614;&#1607;&#1615; &#1603;&#1615;&#1600;&#1601;&#1615;&#1608;&#1575;&#1611; &#1571;&#1614;&#1581;&#1614;&#1600;&#1583;",
                "transliteration": "Allahumma inni as'aluka bi-anni ash-hadu annaka anta l-lahu la ilaha ukka anta-l-a<u>h</u>adu <u>s</u>-<u>s</u>amadu, al-ladhi lam yalid wa lam yÃ»lad, wa lam yakun lahu kufuan a<u>h</u>ad.",
                "audio": "audio/65.mp3"
            }]
        }, {
            "id": 22,
            "title": "Prayers upon the Prophet (saws) after the tashahhud",
            "duas": [{
                "id": 53,
                "meaning": "O Allah, send prayers upon Muhammad and the followers of Muhammad, just as You sent prayers upon Ibraheem and upon the followers of Ibraheem. Verily, You are full of praise and majesty. O Allah, send blessings upon Muhammad and upon the family of Muhammad, just as You sent blessings upon Ibraheem and upon the family of Ibraheem. Verily, You are full of praise and majesty.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1589;&#1614;&#1604;&#1617;&#1616; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1589;&#1614;&#1604;&#1617;&#1614;&#1610;&#1600;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609;&#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605;&#1614; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1610;&#1605;&#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583;",
                "transliteration": "Allahumma <u>s</u>alli <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama <u>s</u>allayta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. Allahumma barik <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala ali Mu<u>h</u>ammadin kama barakta <sup>c</sup>ala Ibrahima wa <sup>c</sup>ala ali Ibrahima. Innaka <u>h</u>amidun, majid. ",
                "audio": "audio/53.mp3"
            }, {
                "id": 54,
                "meaning": "O Allah, send prayers upon Muhammad and upon the wives and descendants of Muhammad, just as You sent prayers upon the family of Ibraheem, and send blessings upon Muhammad and upon the wives and descendants of Muhammad, just as You sent blessings upon the family of Ibraheem. Verily, You are full of praise and majesty.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1589;&#1614;&#1604;&#1617;&#1616; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1613; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609;&#1571;&#1614;&#1586;&#1618;&#1608;&#1575;&#1580;&#1616;&#1600;&#1607;&#1616; &#1608;&#1614;&#1584;&#1615;&#1585;&#1617;&#1616;&#1610;&#1617;&#1614;&#1600;&#1578;&#1616;&#1607;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1589;&#1614;&#1604;&#1617;&#1614;&#1610;&#1618;&#1600;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605; . &#1608;&#1614;&#1576;&#1575;&#1585;&#1616;&#1603;&#1618; &#1593;&#1614;&#1604;&#1600;&#1609; &#1605;&#1615;&#1581;&#1605;&#1617;&#1614;&#1600;&#1583;&#1613; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609;&#1571;&#1614;&#1586;&#1618;&#1608;&#1575;&#1580;&#1616;&#1600;&#1607;&#1616; &#1608;&#1614;&#1584;&#1615;&#1585;&#1617;&#1616;&#1610;&#1617;&#1614;&#1600;&#1578;&#1616;&#1607;&#1548; &#1603;&#1614;&#1605;&#1600;&#1575; &#1576;&#1575;&#1585;&#1616;&#1603;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1570;&#1604;&#1616; &#1573;&#1576;&#1618;&#1585;&#1575;&#1607;&#1600;&#1610;&#1605; . &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1612; &#1605;&#1614;&#1580;&#1600;&#1610;&#1583;",
                "transliteration": "Allahumma <u>s</u>alli <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala azwajihi wa dhurriyyatihi kama <u>s</u>allayta <sup>c</sup>ala ali Ibrahim. Wa barik <sup>c</sup>ala Mu<u>h</u>ammadin wa <sup>c</sup>ala azwajihi wa dhurriyyatihi kama barakta <sup>c</sup>ala ali Ibrahim. Innaka <u>h</u>amidun majid.",
                "audio": "audio/54.mp3"
            }]
        }, {
            "id": 21,
            "title": "The Tashahhud",
            "duas": [{
                "id": 52,
                "meaning": "At-tahiyyat is for Allah. All acts of worship and good deeds are for Him. Peace and the mercy and blessings of Allah be upon you O Prophet. Peace be upon us and all of AllahÂ’s righteous servants. I bear witness that none has the right to be worshipped except Allah and I bear witness that Muhammad is His slave and Messenger.",
                "arabic": "&#1575;&#1604;&#1578;&#1617;&#1614;&#1581;&#1616;&#1610;&#1617;&#1600;&#1575;&#1578;&#1615; &#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1575;&#1604;&#1589;&#1617;&#1614;&#1604;&#1614;&#1600;&#1608;&#1575;&#1578;&#1615; &#1608;&#1575;&#1604;&#1591;&#1617;&#1614;&#1610;&#1617;&#1616;&#1600;&#1576;&#1575;&#1578; &#1548; &#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1614;&#1610;&#1600;&#1603;&#1614; &#1571;&#1614;&#1610;&#1617;&#1615;&#1607;&#1600;&#1575; &#1575;&#1604;&#1606;&#1617;&#1614;&#1576;&#1616;&#1600;&#1610;&#1617;&#1615; &#1608;&#1614;&#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1600;&#1577;&#1615; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1576;&#1614;&#1585;&#1614;&#1603;&#1600;&#1575;&#1578;&#1615;&#1607; &#1548; &#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1614;&#1610;&#1618;&#1600;&#1606;&#1575; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1616; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1589;&#1617;&#1614;&#1600;&#1575;&#1604;&#1616;&#1581;&#1600;&#1610;&#1606; . &#1571;&#1614;&#1588;&#1618;&#1600;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1588;&#1618;&#1600;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1617;&#1614; &#1605;&#1615;&#1581;&#1614;&#1605;&#1617;&#1600;&#1583;&#1575;&#1611; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1607;&#1615; &#1608;&#1614;&#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1615;&#1607;",
                "transliteration": "At-ta<u>h</u>iyyatu li-l-lahi, wa <u>s</u>-<u>s</u>alawatu wa <u>t</u>-<u>t</u>ayyibatu. As-salamu <sup>c</sup>alayka ayyuha n-nabiyyu wa ra<u>h</u>matu l-lahi wa barakatuhu. As-salamu <sup>c</sup>alayna wa <sup>c</sup>ala <sup>c</sup>ibadi l-lahi <u>s</u>-<u>s</u>ali<u>h</u>ina. Ash-hadu an la ilaha illa l-lahu, wa ash-hadu anna Mu<u>h</u>ammadan <sup>c</sup>abduhu wa rasÃ»luhu.",
                "audio": "audio/52.mp3"
            }]
        }, {
            "id": 20,
            "title": "When prostrating due to recitation of the Quran",
            "duas": [{
                "id": 50,
                "meaning": "My face fell prostrate before He who created it and brought forth its faculties of hearing and seeing by His might and power. (So Blessed is Allah, the best of creators). ",
                "arabic": "&#1587;&#1614;&#1580;&#1614;&#1600;&#1583;&#1614; &#1608;&#1614;&#1580;&#1618;&#1607;&#1600;&#1610; &#1604;&#1604;&#1617;&#1614;&#1600;&#1584;&#1610; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1589;&#1614;&#1600;&#1608;&#1617;&#1614;&#1585;&#1614;&#1607;&#1615; &#1608;&#1614;&#1588;&#1614;&#1602;&#1617;&#1614; &#1587;&#1614;&#1605;&#1618;&#1600;&#1593;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1576;&#1614;&#1589;&#1614;&#1600;&#1585;&#1614;&#1607;&#1615; &#1576;&#1616;&#1581;&#1614;&#1600;&#1608;&#1618;&#1604;&#1616;&#1600;&#1607;&#1616; &#1608;&#1614;&#1602;&#1615;&#1600;&#1608;&#1617;&#1614;&#1578;&#1616;&#1607;&#1616;(&#1578;&#1614;&#1576;&#1600;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1600;&#1606;&#1615; &#1575;&#1604;&#1582;&#1600;&#1575;&#1604;&#1616;&#1602;&#1610;&#1600;&#1606;",
                "transliteration": "Sajada wajhi li-l-ladhi khalaqahu wa <u>s</u>awwarahu wa shaqqa sam<sup>c</sup>ahu wa ba<u>s</u>arahu bi-<u>h</u>awlihi wa quwwatihi, fa tabaraka l-lahu a<u>h</u>sanu-l-khaliqin.",
                "audio": "audio/50.mp3"
            }, {
                "id": 51,
                "meaning": "O Allah, record for me a reward for this (prostration), and remove from me a sin. Save it for me and accept it from me just as You had accepted it from Your servant Dawood.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1603;&#1618;&#1578;&#1615;&#1600;&#1576;&#1618; &#1604;&#1610; &#1576;&#1616;&#1607;&#1600;&#1575; &#1593;&#1616;&#1606;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1571;&#1614;&#1580;&#1618;&#1600;&#1585;&#1575;&#1611; &#1548; &#1608;&#1614;&#1590;&#1614;&#1600;&#1593;&#1618; &#1593;&#1614;&#1606;&#1617;&#1616;&#1600;&#1610; &#1576;&#1616;&#1607;&#1600;&#1575; &#1608;&#1616;&#1586;&#1618;&#1585;&#1575;&#1611; &#1548; &#1608;&#1614;&#1575;&#1580;&#1618;&#1593;&#1614;&#1600;&#1604;&#1607;&#1575; &#1604;&#1610; &#1593;&#1616;&#1606;&#1618;&#1600;&#1583;&#1614;&#1603;&#1614; &#1584;&#1615;&#1582;&#1618;&#1600;&#1585;&#1575;&#1611; &#1548; &#1608;&#1614;&#1578;&#1614;&#1602;&#1614;&#1576;&#1617;&#1614;&#1600;&#1604;&#1607;&#1575;",
                "transliteration": "Allahumma ktub li biha <sup>c</sup>indaka ajran, wa <u>d</u>a<sup>c</sup> <sup>c</sup>anni biha wizran, wa j<sup>c</sup>alha li <sup>c</sup>indaka dhukhran, wa taqabbalha minni kama taqabbaltaha min <sup>c</sup>abdika DawÃ»d.",
                "audio": "audio/51.mp3"
            }]
        }, {
            "id": 19,
            "title": "Between the two prostrations",
            "duas": [{
                "id": 48,
                "meaning": "My Lord forgive me, My Lord forgive me.",
                "arabic": "&#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; &#1548; &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610;",
                "transliteration": "Rabbi ghfir li ! Rabbi ghfir li !",
                "audio": "audio/48.mp3"
            }, {
                "id": 49,
                "meaning": "O Allah, forgive me, have mercy upon me, guide me, enrich me, give me health, grant me sustenance and raise my rank.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; &#1548; &#1608;&#1614;&#1575;&#1585;&#1618;&#1581;&#1614;&#1605;&#1618;&#1600;&#1606;&#1610; &#1548; &#1608;&#1614;&#1575;&#1607;&#1618;&#1583;&#1616;&#1606;&#1600;&#1610; &#1548; &#1608;&#1614;&#1575;&#1580;&#1618;&#1576;&#1615;&#1585;&#1618;&#1606;&#1600;&#1610; &#1548; &#1608;&#1614;&#1593;&#1575;&#1601;&#1616;&#1606;&#1600;&#1610; &#1608;&#1614;&#1575;&#1585;&#1618;&#1586;&#1615;&#1602;&#1618;&#1606;&#1600;&#1610; &#1608;&#1614;&#1575;&#1585;&#1618;&#1601;&#1614;&#1593;&#1618;&#1600;&#1606;&#1610;",
                "transliteration": "Allahumma ghfir li, wa r<u>h</u>amni, wa hdini, wa jburni, wa <sup>c</sup>afini, wa rzuqni, wa rfa<sup>c</sup>ni.",
                "audio": "audio/49.mp3"
            }]
        }, {
            "id": 18,
            "title": "While prostrating",
            "duas": [{
                "id": 41,
                "meaning": "How perfect my Lord is, The Most High [three times].",
                "arabic": "(&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1610;&#1614; &#1575;&#1604;&#1571;&#1614;&#1593;&#1618;&#1604;&#1600;&#1609; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;",
                "transliteration": "Sub<u>h</u>ana rabbiya-l-a<sup>c</sup>la.",
                "audio": "audio/41.mp3"
            }, {
                "id": 42,
                "meaning": "How perfect You are O Allah, our Lord, and I praise You. O Allah, forgive me.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1600;&#1606;&#1575; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1616;&#1603;&#1614; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1610;",
                "transliteration": "Sub<u>h</u>anaka l-lahumma rabbana wa bi-hamdika. Allahumma ghfir li.",
                "audio": "audio/42.mp3"
            }, {
                "id": 43,
                "meaning": "Perfect and Holy (He is), Lord of the angles and the Rooh.",
                "arabic": "&#1587;&#1615;&#1576;&#1600;&#1617;&#1608;&#1581;&#1612; &#1602;&#1615;&#1600;&#1583;&#1617;&#1608;&#1587;&#1548; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1605;&#1604;&#1575;&#1574;&#1616;&#1603;&#1614;&#1600;&#1577;&#1616; &#1608;&#1614;&#1575;&#1604;&#1600;&#1585;&#1617;&#1615;&#1608;&#1581;",
                "transliteration": "SubbÃ»<u>h</u>un, quddÃ»sun, rabbu-l-mala'ikati wa r-rÃ»<u>h</u>.",
                "audio": "audio/43.mp3"
            }, {
                "id": 44,
                "meaning": "O Allah, unto You I have prostrated and in You I have believed, and unto You I have submitted. My face has prostrated before He Who created it and fashioned it, and brought forth its faculties of hearing and seeing. Blessed is Allah, the Best of creators.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1614;&#1603;&#1614; &#1587;&#1614;&#1600;&#1580;&#1614;&#1583;&#1618;&#1578;&#1615; &#1608;&#1614;&#1576;&#1616;&#1600;&#1603;&#1614; &#1570;&#1605;&#1614;&#1606;&#1618;&#1600;&#1578; &#1548; &#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1571;&#1614;&#1587;&#1618;&#1604;&#1614;&#1600;&#1605;&#1618;&#1578; &#1548; &#1587;&#1614;&#1580;&#1614;&#1600;&#1583;&#1614; &#1608;&#1614;&#1580;&#1618;&#1607;&#1600;&#1610; &#1604;&#1604;&#1617;&#1614;&#1600;&#1584;&#1610; &#1582;&#1614;&#1604;&#1614;&#1602;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1589;&#1614;&#1600;&#1608;&#1617;&#1614;&#1585;&#1614;&#1607;&#1615; &#1608;&#1614;&#1588;&#1614;&#1602;&#1617;&#1614; &#1587;&#1614;&#1605;&#1618;&#1600;&#1593;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1576;&#1614;&#1589;&#1614;&#1600;&#1585;&#1614;&#1607; &#1548; &#1578;&#1614;&#1576;&#1600;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1581;&#1618;&#1587;&#1600;&#1606;&#1615; &#1575;&#1604;&#1582;&#1600;&#1575;&#1604;&#1616;&#1602;&#1610;&#1600;&#1606;",
                "transliteration": "Allahumma laka sajadtu, wa bika amantu, wa laka 'aslamtu. Sajada wajhi li-l-ladhi khalaqahu wa <u>s</u>awwarahu wa shaqqa sam<sup>c</sup>ahu wa ba<u>s</u>arahu. Tabaraka l-lahu a<u>h</u>sanu-l-khaliqin.",
                "audio": "audio/44.mp3"
            }, {
                "id": 45,
                "meaning": "How perfect He is, The Possessor of total power, sovereignty, magnificence and grandeur.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1584;&#1610; &#1575;&#1604;&#1618;&#1580;&#1614;&#1576;&#1614;&#1600;&#1585;&#1608;&#1578; &#1548; &#1608;&#1575;&#1604;&#1605;&#1614;&#1604;&#1614;&#1603;&#1600;&#1608;&#1578; &#1548; &#1608;&#1575;&#1604;&#1603;&#1616;&#1576;&#1618;&#1600;&#1585;&#1616;&#1610;&#1575;&#1569; &#1548; &#1608;&#1614;&#1575;&#1604;&#1593;&#1614;&#1592;&#1614;&#1605;&#1614;&#1600;&#1607; ",
                "transliteration": "Sub<u>h</u>ana dhi-l-jabarÃ»ti, wa-l-malakÃ»ti, wa-l-kibriya'i, wa-l-<sup>c</sup>a<u>z</u>amati.",
                "audio": "audio/45.mp3"
            }, {
                "id": 46,
                "meaning": "O Allah, forgive me all of my sins, the small and great of them, the first and last of them, and the seen and hidden of them.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; &#1584;&#1614;&#1606;&#1618;&#1600;&#1576;&#1610; &#1603;&#1615;&#1604;&#1617;&#1614;&#1600;&#1607; &#1548; &#1583;&#1616;&#1602;&#1617;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1580;&#1616;&#1604;&#1617;&#1614;&#1600;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1608;&#1617;&#1614;&#1604;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1570;&#1582;&#1616;&#1600;&#1585;&#1614;&#1607; &#1608;&#1614;&#1593;&#1614;&#1604;&#1575;&#1606;&#1616;&#1610;&#1617;&#1614;&#1578;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1587;&#1616;&#1600;&#1585;&#1617;&#1614;&#1607;",
                "transliteration": "Allahumma ghfir li dhanbi kullahu, diqqahu wa jillahu, wa awwalahu wa akhirahu, wa <sup>c</sup>alaniyyatahu wa sirrahu.",
                "audio": "audio/46.mp3"
            }, {
                "id": 47,
                "meaning": "O Allah, I take refuge within Your pleasure from Your displeasure and within Your pardon from Your punishment, and I take refuge in You from You. I cannot enumerate Your praise, You are as You have praised Yourself.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1585;&#1616;&#1590;&#1600;&#1575;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1587;&#1614;&#1582;&#1614;&#1591;&#1616;&#1600;&#1603; &#1548; &#1608;&#1614;&#1576;&#1616;&#1605;&#1593;&#1600;&#1575;&#1601;&#1575;&#1578;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618; &#1593;&#1615;&#1602;&#1608;&#1576;&#1614;&#1600;&#1578;&#1616;&#1603; &#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1606;&#1618;&#1600;&#1603; &#1548; &#1604;&#1575; &#1571;&#1615;&#1581;&#1618;&#1589;&#1600;&#1610; &#1579;&#1614;&#1606;&#1600;&#1575;&#1569;&#1611; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603; &#1548; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1603;&#1614;&#1605;&#1600;&#1575; &#1571;&#1614;&#1579;&#1618;&#1606;&#1614;&#1600;&#1610;&#1618;&#1578;&#1614; &#1593;&#1614;&#1604;&#1600;&#1609; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1616;&#1603;",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bi-ridaka min sakha<u>t</u>ika, wa bi-mu<sup>c</sup>afatika min <sup>c</sup>uqÃ»batika. Wa a<sup>c</sup>Ã»dhu bika minka. La u<u>h</u><u>s</u>i thana'an <sup>c</sup>alayka, anta kama athnayta <sup>c</sup>ala nafsika.",
                "audio": "audio/47.mp3"
            }]
        }, {
            "id": 17,
            "title": "Upon rising from the bowing position",
            "duas": [{
                "id": 38,
                "meaning": "May Allah answer he who praises Him [This supplication is to be made while rising].",
                "arabic": "&#1587;&#1614;&#1605;&#1616;&#1600;&#1593;&#1614; &#1575;&#1604;&#1604;&#1607;&#1615; &#1604;&#1616;&#1605;&#1614;&#1600;&#1606;&#1618; &#1581;&#1614;&#1605;&#1616;&#1600;&#1583;&#1614;&#1607; ",
                "transliteration": "Sami<sup>c</sup>a l-lahu liman <u>h</u>amidah.",
                "audio": "audio/38.mp3"
            }, {
                "id": 39,
                "meaning": "Our Lord, for You is all praise, an abundant beautiful blessed praise.",
                "arabic": "&#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1600;&#1575; &#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1575;&#1611; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575;&#1611; &#1591;&#1614;&#1610;&#1617;&#1616;&#1600;&#1576;&#1575;&#1611; &#1605;&#1615;&#1600;&#1576;&#1575;&#1585;&#1614;&#1603;&#1575;&#1611; &#1601;&#1610;&#1607;",
                "transliteration": "Rabbana wa laka-l-<u>h</u>amdu, <u>h</u>amdan kathiran, <u>t</u>ayyiban, mubarakan fihi.",
                "audio": "audio/39.mp3"
            }, {
                "id": 40,
                "meaning": "The heavens and the Earth and all between them abound with Your praises, and all that You will abounds with Your praises. O Possessor of praise and majesty, the truest thing a slave has said (of You) and we are all Your slaves. O Allah, none can prevent what You have willed to bestow and none can bestow what You have willed to prevent, and no wealth or majesty can benefit anyone, as from You is all wealth and majesty.",
                "arabic": "&#1605;&#1616;&#1604;&#1618;&#1569;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1600;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1605;&#1616;&#1604;&#1618;&#1569;&#1614; &#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590; &#1548; &#1608;&#1614;&#1605;&#1575; &#1576;&#1614;&#1610;&#1618;&#1600;&#1606;&#1614;&#1607;&#1615;&#1605;&#1600;&#1575; &#1548; &#1608;&#1614;&#1605;&#1616;&#1604;&#1618;&#1569;&#1614; &#1605;&#1575; &#1588;&#1616;&#1574;&#1618;&#1600;&#1578;&#1614; &#1605;&#1616;&#1606;&#1618; &#1588;&#1614;&#1610;&#1569;&#1613; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1618; . &#1571;&#1614;&#1607;&#1600;&#1604;&#1614; &#1575;&#1604;&#1579;&#1617;&#1614;&#1600;&#1606;&#1575;&#1569;&#1616; &#1608;&#1614;&#1575;&#1604;&#1605;&#1614;&#1580;&#1600;&#1583;&#1618; &#1548; &#1571;&#1614;&#1614;&#1581;&#1614;&#1600;&#1602;&#1617;&#1615; &#1605;&#1575; &#1602;&#1575;&#1604;&#1614; &#1575;&#1604;&#1593;&#1614;&#1576;&#1618;&#1600;&#1583; &#1548; &#1608;&#1614;&#1603;&#1615;&#1604;&#1617;&#1615;&#1600;&#1606;&#1575; &#1604;&#1614;&#1603;&#1614; &#1593;&#1614;&#1600;&#1576;&#1583;&#1618; . &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1575; &#1605;&#1575;&#1606;&#1616;&#1593;&#1614; &#1604;&#1616;&#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1591;&#1614;&#1600;&#1610;&#1618;&#1578; &#1548; &#1608;&#1614;&#1604;&#1575; &#1605;&#1615;&#1593;&#1618;&#1591;&#1616;&#1600;&#1610;&#1614; &#1604;&#1616;&#1605;&#1575; &#1605;&#1614;&#1606;&#1614;&#1600;&#1593;&#1618;&#1578; &#1548; &#1608;&#1614;&#1604;&#1575; &#1610;&#1614;&#1606;&#1618;&#1601;&#1614;&#1600;&#1593;&#1615; &#1584;&#1575; &#1575;&#1604;&#1580;&#1614;&#1600;&#1583;&#1617;&#1616; &#1605;&#1616;&#1606;&#1618;&#1600;&#1603;&#1614; &#1575;&#1604;&#1580;&#1614;&#1600;&#1583; ",
                "transliteration": "Mil'a s-samawati wa mil'a-l-ar<u>d</u>i wa ma baynahuma, wa mil'a ma shi'ta min shay'in ba<sup>c</sup>du. Ahlu th-thana'i wa-l-majdi. A<u>h</u>aqqu ma qala-l-<sup>c</sup>abdu, wa kulluna laka <sup>c</sup>abdun. Allahumma la mani<sup>c</sup>a li-ma a<sup>c</sup><u>t</u>yta, wa la mu<sup>c</sup><u>t</u>iya lima mana<sup>c</sup>ta, wa la yanfa<sup>c</sup>u dha-l-jaddi minka-m-jaddu.",
                "audio": "audio/40.mp3"
            }]
        }, {
            "id": 16,
            "title": "While bowing in prayer",
            "duas": [{
                "id": 33,
                "meaning": "How perfect my Lord is, The Supreme. [three times]",
                "arabic": "(&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1610;&#1614; &#1575;&#1604;&#1618;&#1593;&#1614;&#1592;&#1600;&#1610;&#1605; . (&#1579;&#1604;&#1575;&#1579;&#1575;&#1611;",
                "transliteration": "Sub<u>h</u>ana rabbiya-l-<sup>c</sup>a<u>z</u>im",
                "audio": "audio/33.mp3"
            }, {
                "id": 34,
                "meaning": "How perfect You are O Allah, our Lord and I praise You. O Allah, forgive me.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614;&#1600;&#1606;&#1575; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1616;&#1603; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; ",
                "transliteration": "Sub<u>h</u>anaka l-lahumma rabbana wa bi-<u>h</u>amdika. Allahumma ghfir li.",
                "audio": "audio/34.mp3"
            }, {
                "id": 35,
                "meaning": "Perfect and Holy (He is), Lord of the angles and the Rooh.",
                "arabic": "&#1587;&#1615;&#1576;&#1600;&#1617;&#1608;&#1581;&#1612; &#1602;&#1615;&#1600;&#1583;&#1617;&#1618;&#1608;&#1587; &#1548; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1605;&#1604;&#1575;&#1574;&#1616;&#1603;&#1614;&#1600;&#1577;&#1616; &#1608;&#1614;&#1575;&#1604;&#1600;&#1585;&#1617;&#1615;&#1608;&#1581; ",
                "transliteration": "SubbÃ»<u>h</u>un, quddÃ»sun, rabbu-l-mala'ikati wa r-rÃ»<u>h</u>.",
                "audio": "audio/35.mp3"
            }, {
                "id": 36,
                "meaning": "O Allah, unto You I have bowed, and in You I have believed, and to You I have submitted. My hearing, sight, mind, bones, tendons and what my feet carry are humbled before You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1614;&#1603;&#1614; &#1585;&#1614;&#1603;&#1614;&#1600;&#1593;&#1618;&#1578;&#1615; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1570;&#1605;&#1614;&#1600;&#1606;&#1618;&#1578; &#1548; &#1608;&#1604;&#1614;&#1603;&#1614; &#1571;&#1614;&#1587;&#1618;&#1604;&#1614;&#1600;&#1605;&#1618;&#1578; &#1548; &#1582;&#1614;&#1588;&#1614;&#1600;&#1593;&#1614; &#1604;&#1614;&#1603;&#1614; &#1587;&#1614;&#1605;&#1618;&#1600;&#1593;&#1610; &#1548; &#1608;&#1614;&#1576;&#1614;&#1589;&#1614;&#1600;&#1585;&#1610; &#1548; &#1608;&#1614;&#1605;&#1615;&#1582;&#1617;&#1616;&#1600;&#1610; &#1548; &#1608;&#1614;&#1593;&#1614;&#1592;&#1618;&#1605;&#1600;&#1610; &#1548; &#1608;&#1614;&#1593;&#1614;&#1589;&#1614;&#1600;&#1576;&#1610; &#1548; &#1608;&#1614;&#1605;&#1575; &#1575;&#1587;&#1578;&#1614;&#1602;&#1614;&#1600;&#1604;&#1617;&#1614; &#1576;&#1616;&#1607;&#1616; &#1602;&#1614;&#1583;&#1614;&#1605;&#1610;",
                "transliteration": "Allahumma laka raka<sup>c</sup>tu, wa bika amantu, wa laka 'aslamtu. Khasha<sup>c</sup>a laka sam<sup>c</sup>i, wa ba<u>s</u>ari, wa mukhkhi, wa <sup>c</sup>a<u>z</u>mi, wa <sup>c</sup>a<u>s</u>sabi wa ma staqalla bihi qadami.",
                "audio": "audio/36.mp3"
            }, {
                "id": 37,
                "meaning": "How perfect He is, The Possessor of total power, sovereignty, magnificence and grandeur.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1584;&#1610; &#1575;&#1604;&#1618;&#1580;&#1614;&#1576;&#1614;&#1600;&#1585;&#1608;&#1578; &#1548;&#1608;&#1575;&#1604;&#1605;&#1614;&#1604;&#1614;&#1600;&#1603;&#1608;&#1578; &#1548; &#1608;&#1614;&#1575;&#1604;&#1603;&#1616;&#1576;&#1618;&#1600;&#1585;&#1616;&#1610;&#1575;&#1569; &#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1593;&#1614;&#1592;&#1614;&#1600;&#1605;&#1614;&#1607;",
                "transliteration": "Sub<u>h</u>ana dhi-l-jabarÃ»ti, wa-l-malakÃ»ti, wa-l-kibriya'i, wa-l-<sup>c</sup>a<u>z</u>amati.",
                "audio": "audio/37.mp3"
            }]
        }, {
            "id": 15,
            "title": "At the start of the prayer (after takbeer)",
            "duas": [{
                "id": 28,
                "meaning": "How perfect You are O Allah, and I praise You. Blessed be Your name, and lofty is Your position and none has the right to be worshipped except You.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1616;&#1603;&#1614; &#1608;&#1614;&#1578;&#1614;&#1576;&#1575;&#1585;&#1614;&#1603;&#1614; &#1575;&#1587;&#1618;&#1605;&#1615;&#1600;&#1603;&#1614; &#1608;&#1614;&#1578;&#1614;&#1593;&#1600;&#1575;&#1604;&#1609; &#1580;&#1614;&#1600;&#1583;&#1617;&#1615;&#1603;&#1614; &#1608;&#1614;&#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1594;&#1614;&#1610;&#1618;&#1585;&#1615;&#1603;",
                "transliteration": "Subb<u>h</u>anaka l-lahumma wa bi-<u>h</u>amdika, wa tabaraka smuka wa ta<sup>c</sup>ala jadduka, wa la ilaha ghayruka.",
                "audio": "audio/28.mp3"
            }, {
                "id": 29,
                "meaning": "I have turned my face sincerely towards He who has brought forth the heavens and the Earth and I am not of those who associate (others with Allah). Indeed my prayer, my sacrifice, my life and my death are for Allah, Lord of the worlds, no partner has He, with this I am commanded and I am of the Muslims. O Allah, You are the Sovereign, none has the right to be worshipped except You. You are my Lord and I am Your servant, I have wronged my own soul and have acknowledged my sin, so forgive me all my sins for no one forgives sins except You. Guide me to the best of characters for none can guide to it other than You, and deliver me from the worst of characters for none can deliver me from it other than You. Here I am, in answer to Your call, happy to serve you. All good is within Your hands and evil does not stem from You. I exist by your will and will return to you. Blessed and High are You, I seek Your forgiveness and repent unto You.",
                "arabic": "&#1608;&#1614;&#1580;&#1617;&#1614;&#1607;&#1600;&#1578;&#1615; &#1608;&#1614;&#1580;&#1618;&#1607;&#1616;&#1600;&#1610;&#1614; &#1604;&#1616;&#1604;&#1617;&#1614;&#1584;&#1610; &#1601;&#1614;&#1591;&#1614;&#1585;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1600;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1614; &#1581;&#1614;&#1606;&#1600;&#1610;&#1601;&#1614;&#1575;&#1611; &#1608;&#1614;&#1605;&#1600;&#1575; &#1571;&#1614;&#1606;&#1575; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1588;&#1618;&#1585;&#1616;&#1603;&#1610;&#1606; &#1548; &#1573;&#1616;&#1606;&#1617;&#1614; &#1589;&#1614;&#1604;&#1575;&#1578;&#1600;&#1610; &#1548; &#1608;&#1614;&#1606;&#1615;&#1587;&#1615;&#1603;&#1610; &#1548; &#1608;&#1614;&#1605;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575;&#1610;&#1614; &#1548; &#1608;&#1614;&#1605;&#1614;&#1605;&#1575;&#1578;&#1600;&#1610; &#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1604;&#1593;&#1575;&#1604;&#1614;&#1605;&#1610;&#1606; &#1548; &#1604;&#1575; &#1588;&#1614;&#1585;&#1610;&#1600;&#1603;&#1614; &#1604;&#1614;&#1607;&#1615; &#1608;&#1614;&#1576;&#1616;&#1584;&#1604;&#1603;&#1614; &#1571;&#1615;&#1605;&#1616;&#1585;&#1618;&#1578;&#1615; &#1608;&#1614;&#1571;&#1614;&#1606;&#1575; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1587;&#1618;&#1604;&#1616;&#1600;&#1605;&#1610;&#1606; . &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1605;&#1614;&#1604;&#1616;&#1603;&#1615; &#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578; &#1548;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1600;&#1610; &#1608;&#1614;&#1571;&#1614;&#1606;&#1600;&#1575; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1603; &#1548; &#1592;&#1614;&#1604;&#1614;&#1605;&#1618;&#1600;&#1578;&#1615; &#1606;&#1614;&#1601;&#1618;&#1587;&#1600;&#1610; &#1608;&#1614;&#1575;&#1593;&#1618;&#1600;&#1578;&#1614;&#1585;&#1614;&#1601;&#1618;&#1578;&#1615; &#1576;&#1616;&#1584;&#1614;&#1606;&#1618;&#1576;&#1600;&#1610; &#1601;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1610; &#1584;&#1615;&#1606;&#1608;&#1576;&#1610; &#1580;&#1614;&#1605;&#1610;&#1593;&#1575;&#1611; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1607; &#1604;&#1575; &#1610;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1615; &#1575;&#1604;&#1584;&#1617;&#1615;&#1606;&#1600;&#1608;&#1576;&#1614; &#1573;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578; .&#1608;&#1614;&#1575;&#1607;&#1618;&#1583;&#1616;&#1606;&#1600;&#1610; &#1604;&#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1606;&#1616; &#1575;&#1604;&#1571;&#1614;&#1582;&#1618;&#1604;&#1575;&#1602;&#1616; &#1604;&#1575; &#1610;&#1614;&#1607;&#1618;&#1600;&#1583;&#1610; &#1604;&#1571;&#1614;&#1581;&#1618;&#1587;&#1614;&#1600;&#1606;&#1616;&#1607;&#1575; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578; &#1548; &#1608;&#1614;&#1575;&#1589;&#1618;&#1600;&#1585;&#1616;&#1601; &#1593;&#1614;&#1600;&#1606;&#1617;&#1618;&#1610; &#1587;&#1614;&#1610;&#1617;&#1616;&#1574;&#1614;&#1607;&#1600;&#1575; &#1548; &#1604;&#1575; &#1610;&#1614;&#1589;&#1618;&#1585;&#1616;&#1601;&#1615; &#1593;&#1614;&#1600;&#1606;&#1617;&#1618;&#1610; &#1587;&#1614;&#1610;&#1617;&#1616;&#1574;&#1614;&#1607;&#1600;&#1575; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578; &#1548; &#1604;&#1614;&#1576;&#1617;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1608;&#1614;&#1587;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614;&#1610;&#1618;&#1603; &#1548; &#1608;&#1614;&#1575;&#1604;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1615; &#1603;&#1615;&#1604;&#1617;&#1615;&#1600;&#1607;&#1615; &#1576;&#1616;&#1610;&#1614;&#1600;&#1583;&#1614;&#1610;&#1618;&#1600;&#1603; &#1548; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1614;&#1585;&#1617;&#1615; &#1604;&#1614;&#1610;&#1618;&#1600;&#1587;&#1614; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603; &#1548; &#1571;&#1614;&#1606;&#1575; &#1576;&#1616;&#1603;&#1614; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1600;&#1603; &#1548; &#1578;&#1614;&#1576;&#1600;&#1575;&#1585;&#1614;&#1603;&#1618;&#1578;&#1614; &#1608;&#1614;&#1578;&#1614;&#1593;&#1600;&#1575;&#1604;&#1614;&#1610;&#1578;&#1614; &#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1600;&#1601;&#1616;&#1585;&#1615;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1578;&#1608;&#1576;&#1615; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1603;",
                "transliteration": "Wajjahtu wajhiya li-l-ladhi fa<u>t</u>ara s-samawati wa-l-ar<u>d</u>a, <u>h</u>anifan wa ma ana mina-l-mushrikina. Inna <u>s</u>alati wa nusuki, wa ma<u>h</u>yaya wa mamati li-l-lahi rabbi-l-<sup>c</sup>alamina, la sharika lahu. Wa bi-dhalika umirtu wa ana mina-l-muslimina. Allahumma anta-l-maliku la ilaha illa anta. Anta rabbi wa ana <sup>c</sup>abduka, <u>z</u>alamtu nafsi wa <sup>c</sup>taraftu bi-dhanbi. Fa-ghfir li dhunÃ»bi jami<sup>c</sup>an, innahu la yaghfiru dh-dhunÃ»ba illa anta. Wa hdini li-a<u>h</u>sani-l-akhlaqi, la yahdi li-a<u>h</u>saniha illa anta. Wa <u>s</u>rif <sup>c</sup>anni sayyi'aha, la ya<u>s</u>rifu <sup>c</sup>anni sayy'aha illa anta. Labbayka wa sa<sup>c</sup>dayka, wa-l-khayru kulluhu bi-yadayka, wa sh-sharru laysa ilayka, ana bika wa ilayka, tabarakta wa ta<sup>c</sup>alayta, astaghfiruka wa atÃ»bu ilayka.",
                "audio": "audio/29.mp3"
            }, {
                "id": 30,
                "meaning": "O Allah, Lord of Jibra-eel, Meeka-eel and Israfeel (great angles), Creator of the heavens and the Earth, Knower of the seen and the unseen. You are the arbitrator between Your servants in that which they have disputed. Guide me to the truth by Your leave, in that which they have differed, for verily You guide whom You will to a straight path.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1580;&#1616;&#1600;&#1576;&#1618;&#1585;&#1575;&#1574;&#1610;&#1604; &#1548; &#1608;&#1614;&#1605;&#1610;&#1603;&#1600;&#1575;&#1574;&#1610;&#1604; &#1548; &#1608;&#1614;&#1573;&#1616;&#1587;&#1618;&#1600;&#1585;&#1575;&#1601;&#1610;&#1604;&#1548; &#1601;&#1575;&#1591;&#1616;&#1600;&#1585;&#1614; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590; &#1548; &#1593;&#1575;&#1604;&#1600;&#1616;&#1605;&#1614; &#1575;&#1604;&#1594;&#1614;&#1610;&#1618;&#1600;&#1576;&#1616; &#1608;&#1614;&#1575;&#1604;&#1588;&#1617;&#1614;&#1607;&#1600;&#1575;&#1583;&#1614;&#1577;&#1616; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1578;&#1614;&#1581;&#1618;&#1600;&#1603;&#1605;&#1615; &#1576;&#1614;&#1610;&#1618;&#1600;&#1606;&#1614; &#1593;&#1616;&#1576;&#1600;&#1575;&#1583;&#1616;&#1603;&#1614; &#1601;&#1610;&#1600;&#1605;&#1575; &#1603;&#1575;&#1606;&#1608;&#1575; &#1601;&#1610;&#1607;&#1616; &#1610;&#1614;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1600;&#1608;&#1606;. &#1575;&#1607;&#1583;&#1616;&#1606;&#1600;&#1610; &#1604;&#1616;&#1605;&#1600;&#1575; &#1575;&#1582;&#1618;&#1578;&#1615;&#1600;&#1604;&#1616;&#1601;&#1614; &#1601;&#1610;&#1600;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602;&#1617;&#1616; &#1576;&#1616;&#1573;&#1616;&#1584;&#1618;&#1606;&#1616;&#1603; &#1548; &#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1578;&#1614;&#1607;&#1618;&#1600;&#1583;&#1610; &#1605;&#1614;&#1606;&#1618; &#1578;&#1614;&#1588;&#1600;&#1575;&#1569;&#1615; &#1573;&#1616;&#1604;&#1609; &#1589;&#1616;&#1585;&#1575;&#1591;&#1613; &#1605;&#1615;&#1587;&#1618;&#1578;&#1614;&#1602;&#1600;&#1610;&#1605;",
                "transliteration": "Allahumma, rabba Jibra'ila, wa Mika'ila, wa Israfila ! Fatira s-samawati wa-l-ar<u>d</u>i, <sup>c</sup>alima l-ghaybi wa sh-shahadati, anta ta<u>h</u>kumu bayna <sup>c</sup>ibadika fima kanÃ» fihi yakhtalifÃ»na. Ihdini li-ma khtulifa fihi mina-l-<u>h</u>aqqi bi-idhnika. Innaka tahdi man tasha'u ila <u>s</u>ira<u>t</u>in mustaqim.",
                "audio": "audio/30.mp3"
            }, {
                "id": 31,
                "meaning": "Allah is Most Great, Allah is Most Great, Allah is Most Great, much praise is for Allah, much praise is for Allah, much praise is for Allah, and I declare the perfection of Allah in the early morning and in the late afternoon [three times]. I take refuge with Allah from the devil, from his pride, his poetry and his madness.",
                "arabic": "&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1600;&#1585;&#1615; &#1603;&#1614;&#1576;&#1600;&#1610;&#1585;&#1575; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1600;&#1585;&#1615; &#1603;&#1614;&#1576;&#1600;&#1610;&#1585;&#1575; &#1548; &#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1614;&#1603;&#1618;&#1576;&#1614;&#1600;&#1585;&#1615; &#1603;&#1614;&#1576;&#1600;&#1610;&#1585;&#1575; &#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575; &#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575; &#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1605;&#1618;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1603;&#1614;&#1579;&#1600;&#1610;&#1585;&#1575; &#1548; &#1608;&#1614;&#1587;&#1615;&#1576;&#1618;&#1600;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1576;&#1603;&#1618;&#1600;&#1585;&#1614;&#1577;&#1611; &#1608;&#1614;&#1571;&#1614;&#1589;&#1610;&#1600;&#1604;&#1575; . ( &#1579;&#1614;&#1604;&#1575;&#1579;&#1575;&#1611; ) &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1600;&#1610;&#1618;&#1591;&#1575;&#1606;&#1616; &#1605;&#1616;&#1606;&#1618; &#1606;&#1614;&#1601;&#1618;&#1582;&#1616;&#1600;&#1607;&#1616; &#1608;&#1614;&#1606;&#1614;&#1601;&#1618;&#1600;&#1579;&#1616;&#1607;&#1616; &#1608;&#1614;&#1607;&#1614;&#1605;&#1618;&#1600;&#1586;&#1616;&#1607; ",
                "transliteration": "Allahu akbaru kabiran. Allahu akbaru kabiran. Allahu akbaru kabiran. Wa-l-<u>h</u>amdu li-l-ahi kathiran. Wa-l-<u>h</u>amdu li-l-ahi kathiran. Wa-l-<u>h</u>amdu li-l-ahi kathiran. Wa sub<u>h</u>ana l-lahi bukratan wa a<u>s</u>ilan. (3 fois),<br /> puis : A<sup>c</sup>Ã»dhu bi-l-lahi mina sh-shay<u>t</u>ani min nafkhihi, wa naftihi, wa hamzihi.",
                "audio": "audio/31.mp3"
            }, {
                "id": 32,
                "meaning": "O Allah, to You belongs all praise, You are the Light of the heavens and the Earth and all that is within them. To You belongs all praise, You are the Sustainer of the heavens and the Earth and all that is within them. To You belongs all praise. You are Lord of the heavens and the Earth and all that is within them. To You belongs all praise and the kingdom of the heavens and the Earth and all that is within them. To You belongs all praise, You are the King of the heavens and the Earth and to You belongs all praise. You are The Truth, Your promise is true, your Word is true, and the Day in which we will encounter You is true, the Garden of Paradise is true and the Fire is true, and the Prophets are true, Muhammad r is true and the Final Hour is true. O Allah, unto You I have submitted, and upon You I have relied, and in You I have believed, and to You I have turned in repentance, and over You I have disputed, and to You I have turned for judgment. So forgive me for what has come to pass of my sins and what will come to pass, and what I have hidden and what I have made public. You are Al-Muqaddim and Al-Mu-akhkhir. None has the right to be worshipped except You, You are my Deity, none has the right to be worshipped except You.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1606;&#1600;&#1608;&#1585;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1600;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1601;&#1610;&#1600;&#1607;&#1616;&#1606; &#1548; &#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1602;&#1614;&#1600;&#1610;&#1617;&#1616;&#1605;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1601;&#1610;&#1600;&#1607;&#1616;&#1606; &#1548; [&#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1585;&#1614;&#1576;&#1617;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1601;&#1610;&#1600;&#1607;&#1616;&#1606;] [&#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1604;&#1614;&#1603;&#1614; &#1605;&#1615;&#1604;&#1618;&#1600;&#1603;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1605;&#1614;&#1606;&#1618; &#1601;&#1610;&#1600;&#1607;&#1616;&#1606;] [&#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1605;&#1614;&#1604;&#1616;&#1600;&#1603;&#1615; &#1575;&#1604;&#1587;&#1617;&#1614;&#1600;&#1605;&#1608;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; ] [&#1608;&#1614;&#1604;&#1614;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1605;&#1618;&#1583;&#1615;] [&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602;&#1617; &#1608;&#1614;&#1608;&#1614;&#1593;&#1618;&#1600;&#1583;&#1615;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1602;&#1614;&#1608;&#1618;&#1604;&#1615;&#1600;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1604;&#1616;&#1602;&#1600;&#1575;&#1572;&#1615;&#1603;&#1614; &#1575;&#1604;&#1618;&#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1575;&#1604;&#1618;&#1580;&#1614;&#1600;&#1606;&#1617;&#1614;&#1577;&#1615;&#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1575;&#1604;&#1606;&#1617;&#1600;&#1575;&#1585;&#1615; &#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1575;&#1604;&#1606;&#1617;&#1614;&#1576;&#1616;&#1600;&#1610;&#1617;&#1608;&#1606;&#1614; &#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1605;&#1600;&#1581;&#1614;&#1605;&#1617;&#1614;&#1583;&#1612; &#1581;&#1614;&#1600;&#1602; &#1548; &#1608;&#1614;&#1575;&#1604;&#1587;&#1617;&#1600;&#1575;&#1593;&#1614;&#1577;&#1615;&#1581;&#1614;&#1600;&#1602;] [&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1614;&#1603;&#1614; &#1571;&#1614;&#1587;&#1618;&#1604;&#1614;&#1605;&#1578; &#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1578;&#1614;&#1608;&#1614;&#1603;&#1617;&#1614;&#1604;&#1618;&#1600;&#1578; &#1548; &#1608;&#1614;&#1576;&#1616;&#1603;&#1614; &#1570;&#1605;&#1614;&#1606;&#1618;&#1600;&#1578; &#1548; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1571;&#1614;&#1606;&#1614;&#1576;&#1618;&#1600;&#1578; &#1548; &#1608;&#1614;&#1576;&#1616;&#1600;&#1603;&#1614; &#1582;&#1575;&#1589;&#1614;&#1605;&#1618;&#1578; &#1548; &#1608;&#1614;&#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;&#1614; &#1581;&#1575;&#1603;&#1614;&#1605;&#1618;&#1600;&#1578; . &#1601;&#1575;&#1594;&#1618;&#1601;&#1616;&#1600;&#1585;&#1618; &#1604;&#1610; &#1605;&#1600;&#1575; &#1602;&#1614;&#1583;&#1617;&#1614;&#1605;&#1618;&#1578;&#1615; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1582;&#1617;&#1614;&#1600;&#1585;&#1618;&#1578; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1587;&#1618;&#1600;&#1585;&#1614;&#1585;&#1618;&#1578; &#1548; &#1608;&#1614;&#1605;&#1575; &#1571;&#1614;&#1593;&#1618;&#1604;&#1614;&#1600;&#1606;&#1618;&#1578; ] [&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1605;&#1615;&#1602;&#1614;&#1600;&#1583;&#1617;&#1616;&#1605;&#1615; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1575;&#1604;&#1605;&#1615;&#1600;&#1572;&#1614;&#1582;&#1617;&#1616;&#1585; &#1548; &#1604;&#1575; &#1573;&#1616;&#1575;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;] [&#1571;&#1614;&#1606;&#1618;&#1600;&#1578;&#1614; &#1573;&#1616;&#1604;&#1600;&#1607;&#1610; &#1604;&#1575; &#1573;&#1616;&#1575;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1600;&#1578;",
                "transliteration": "Allahumma laka-l-<u>h</u>amdu anta nÃ»ru s-samawati wa-l-ar<u>d</u>i wa man fihinn. Wa laka-l-<u>h</u>amdu. Anta qayyimu s-samawati wa-l-ar<u>d</u>i wa man fihinn, [Wa laka-l-<u>h</u>amdu. Anta rabbu s-samawati wa-l-ar<u>d</u>i wa man fihinna.] [Wa laka-l-<u>h</u>amdu. Laka mulku s-samawati wa-l-ar<u>d</u>i wa man fihinn.] [Wa laka-l-<u>h</u>amdu. Anta maliku s-samawati wa-l-ar<u>d</u>i.] [Wa laka-l-<u>h</u>amdu.] [Anta-l-haqqu, wa wa<sup>c</sup>duka-l-haqqu, wa qawluka-l-<u>h</u>aqqu, wa liqa'uka-l-<u>h</u>aqqu, wa-l-jannatu <u>h</u>aqqun, wa n-naru <u>h</u>aqqun, wa n-nabiyyÃ»na <u>h</u>aqqun, wa Mu<u>h</u>ammadun <u>h</u>aqqun, wa s-sa<sup>c</sup>atu <u>h</u>aqqun.] [Allahumma laka aslamtu, wa <sup>c</sup>alayka tawwakaltu, wa bika amantu, wa ilayka anabtu, wa bika kha<u>s</u>amtu, wa ilayka <u>h</u>akamtu.<br /> Fa-ghfir li ma qaddamatu, wa ma akhkhartu, wa ma asrartu, wa ma a<sup>c</sup>lantu.]<br /> [Anta-l-muqaddimu wa anta-l-mu'akhkhiru. La ilaha illa anta.] [Anta ilahi la ilaha illa anta.]",
                "audio": "audio/32.mp3"
            }]
        }, {
            "id": 14,
            "title": "Concerning the athan (the call to prayer)",
            "duas": [{
                "id": 22,
                "meaning": "[One repeats just as the mu-athin (one who calls to prayer) says, except when he says : Â‘come to prayer, come to successÂ’. Instead, one should say : Â‘There is no might nor power except with Allah.Â’].<br ?>",
                "arabic": "&#1604;&#1575; &#1581;&#1614;&#1600;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1575; &#1602;&#1615;&#1600;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;",
                "transliteration": "La <u>h</u>awla wa la quwwata illa bi-l-lahi.",
                "audio": "audio/22.mp3"
            }, {
                "id": 23,
                "meaning": "And I too bear witness that none has the right to be worshipped except Allah, alone, without partner, and that Muhammad is His salve and Messenger. I am pleased with Allah as a Lord, and Muhammad as a Messenger and Islam as a religion.",
                "arabic": "&#1608;&#1614;&#1571;&#1614;&#1606;&#1575; &#1571;&#1614;&#1588;&#1618;&#1600;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1614;&#1600;&#1607; &#1548; &#1608;&#1614;&#1571;&#1614;&#1606;&#1617;&#1614; &#1605;&#1581;&#1614;&#1605;&#1617;&#1600;&#1583;&#1575;&#1611; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1607;&#1615; &#1608;&#1614;&#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1615;&#1607; &#1548; &#1585;&#1614;&#1590;&#1610;&#1600;&#1578;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1585;&#1614;&#1576;&#1617;&#1614;&#1575;&#1611; &#1548; &#1608;&#1614;&#1576;&#1616;&#1605;&#1615;&#1581;&#1614;&#1605;&#1617;&#1614;&#1600;&#1583;&#1613; &#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1575;&#1611; &#1608;&#1614;&#1576;&#1616;&#1575;&#1604;&#1573;&#1616;&#1587;&#1618;&#1604;&#1575;&#1605;&#1616; &#1583;&#1610;&#1606;&#1614;&#1600;&#1575;&#1611; ",
                "transliteration": "Wa ana ash-hadu an la ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, wa anna Mu<u>h</u>ammadan <sup>c</sup>abduhu wa rasÃ»luhu. Ra<u>d</u>itu bi-l-lahi rabban, wa bi-mu<u>h</u>ammadin rasÃ»lan, wa bi-l-islami dinan.",
                "audio": "audio/23.mp3"
            }, {
                "id": 24,
                "meaning": "[One should then send prayers on the Prophet (saws) after answering the call of the mu-athin].",
                "arabic": ".",
                "transliteration": "Allahumma <u>s</u>alli <sup>c</sup>ala sayyidina Mu<u>h</u>ammadin wa <sup>c</sup>ala alihi wa <u>s</u>a<u>h</u>bihi wa sallim."
            }, {
                "id": 25,
                "meaning": "O Allah, Owner of this perfect call and Owner of this prayer to be performed, bestow upon Muhammad al-waseelah and al-fadeelah and send him upon a praised platform which You have promised him. Verily, You never fail in Your promise.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1585;&#1614;&#1576;&#1617;&#1614; &#1607;&#1614;&#1584;&#1616;&#1607;&#1616; &#1575;&#1604;&#1583;&#1617;&#1593;&#1618;&#1600;&#1608;&#1614;&#1577;&#1616; &#1575;&#1604;&#1578;&#1617;&#1600;&#1575;&#1605;&#1617;&#1614;&#1577; &#1608;&#1614;&#1575;&#1604;&#1589;&#1617;&#1604;&#1575;&#1577;&#1616; &#1575;&#1604;&#1602;&#1614;&#1600;&#1575;&#1574;&#1616;&#1605;&#1614;&#1577; &#1570;&#1578;&#1616; &#1605;&#1581;&#1614;&#1600;&#1605;&#1617;&#1614;&#1583;&#1575;&#1611; &#1575;&#1604;&#1608;&#1614;&#1587;&#1610;&#1600;&#1604;&#1577;&#1614; &#1608;&#1614;&#1575;&#1604;&#1618;&#1601;&#1614;&#1590;&#1600;&#1610;&#1604;&#1614;&#1577; &#1608;&#1614;&#1575;&#1576;&#1618;&#1593;&#1614;&#1600;&#1579;&#1618;&#1607; &#1605;&#1614;&#1602;&#1600;&#1575;&#1605;&#1600;&#1575;&#1611; &#1605;&#1614;&#1581;&#1600;&#1605;&#1608;&#1583;&#1575;&#1611; &#1575;&#1604;&#1617;&#1614;&#1584;&#1610; &#1608;&#1614;&#1593;&#1614;&#1600;&#1583;&#1618;&#1578;&#1614;&#1607; [&#1573;&#1616;&#1606;&#1617;&#1614;&#1600;&#1603;&#1614; &#1604;&#1575; &#1578;&#1615;&#1600;&#1582;&#1618;&#1604;&#1616;&#1601;&#1615; &#1575;&#1604;&#1605;&#1610;&#1600;&#1593;&#1575;&#1583;",
                "transliteration": "Allahumma rabba hadhihi d-da<sup>c</sup>wati t-ammati, wa <u>s</u>-<u>s</u>alati-l-qa'imati.ati Mu<u>h</u>ammadan al wasilata wa-l-fa<u>d</u>ilata, wa b<sup>c</sup>ath-hu maqaman ma<u>h</u>mÃ»dan al-ladhi wa<sup>c</sup>adtahu. [Innaka la tukhlifu-l-mi<sup>c</sup>ad.]",
                "audio": "audio/25.mp3"
            }, {
                "id": 26,
                "meaning": "[One should also supplicate for himself during the time between the athan and the iqamah as supplication at such time is not rejected].",
                "arabic": ".",
                "transliteration": "."
            }, {
                "id": 27,
                "meaning": "O Allah, distance me from my sins just as You have distanced The East from The West, O Allah, purify me of my sins as a white robe is purified of filth, O Allah, cleanse me of my sins with snow, water, and ice.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1576;&#1575;&#1593;&#1616;&#1600;&#1583;&#1618; &#1576;&#1614;&#1610;&#1600;&#1606;&#1610; &#1608;&#1614;&#1576;&#1614;&#1610;&#1618;&#1606;&#1614; &#1582;&#1614;&#1591;&#1600;&#1575;&#1610;&#1575;&#1610;&#1614; &#1603;&#1614;&#1605;&#1575; &#1576;&#1575;&#1593;&#1614;&#1583;&#1618;&#1578;&#1614; &#1576;&#1614;&#1610;&#1618;&#1606;&#1614; &#1575;&#1604;&#1605;&#1614;&#1588;&#1618;&#1585;&#1616;&#1602;&#1616; &#1608;&#1614;&#1575;&#1604;&#1605;&#1614;&#1594;&#1618;&#1585;&#1616;&#1576;&#1618; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1606;&#1614;&#1602;&#1617;&#1616;&#1606;&#1600;&#1610; &#1605;&#1616;&#1606;&#1618; &#1582;&#1614;&#1591;&#1575;&#1610;&#1575;&#1610;&#1614; &#1603;&#1614;&#1605;&#1600;&#1575; &#1610;&#1615;&#1600;&#1606;&#1614;&#1602;&#1617;&#1614;&#1609; &#1575;&#1604;&#1579;&#1617;&#1614;&#1600;&#1608;&#1618;&#1576;&#1615; &#1575;&#1604;&#1571;&#1614;&#1576;&#1618;&#1610;&#1614;&#1590;&#1615; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1583;&#1617;&#1614;&#1606;&#1614;&#1587;&#1618; &#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1594;&#1618;&#1587;&#1616;&#1604;&#1618;&#1606;&#1600;&#1610; &#1605;&#1616;&#1606;&#1618; &#1582;&#1614;&#1591;&#1575;&#1610;&#1600;&#1575;&#1610;&#1614; &#1576;&#1616;&#1575;&#1604;&#1579;&#1617;&#1614;&#1604;&#1600;&#1580;&#1616; &#1608;&#1614;&#1575;&#1604;&#1605;&#1600;&#1575;&#1569;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1576;&#1614;&#1585;&#1614;&#1583;&#1618; ",
                "transliteration": "Allahumma ba<sup>c</sup>id bayni wa bayna kha<u>t</u>ayaya kama ba<sup>c</sup>adta bayna-l-mashriqi wa-l-maghribi. Allahumma naqqini min kha<u>t</u>ayaya kama yunaqqa th-thawbu-l-abya<u>d</u>u mina d-danasi. Allahumma ghsilni min kha<u>t</u>ayaya bi th-thalji wa-l-ma'i wa-l-barad.",
                "audio": "audio/27.mp3"
            }]
        }, {
            "id": 13,
            "title": "Upon leaving the mosque",
            "duas": [{
                "id": 21,
                "meaning": "In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favour. O Allah, guard me from the accursed devil.",
                "arabic": "&#1576;&#1616;&#1587;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607; &#1608;&#1614;&#1575;&#1604;&#1589;&#1617;&#1604;&#1575;&#1577;&#1615; &#1608;&#1614;&#1575;&#1604;&#1587;&#1617;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1609; &#1585;&#1614;&#1587;&#1608;&#1604;&#1616; &#1575;&#1604;&#1604;&#1607;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1600;&#1610; &#1571;&#1614;&#1587;&#1618;&#1571;&#1614;&#1604;&#1615;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1601;&#1614;&#1590;&#1618;&#1600;&#1604;&#1616;&#1603;&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1593;&#1589;&#1616;&#1605;&#1618;&#1606;&#1600;&#1610; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1614;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1600;&#1610;&#1605;",
                "transliteration": "Bismi l-lahi, wa <u>s</u>-<u>s</u>alatu wa s-salamu <sup>c</sup>ala rasÃ»li l-lahi. Allahumma inni as'aluka min fa<u>d</u>lika. Allahumma <sup>c</sup><u>s</u>imni mina sh-shay<u>t</u>ani r-rajim.",
                "audio": "audio/21.mp3"
            }]
        }, {
            "id": 12,
            "title": "Upon entering the mosque",
            "duas": [{
                "id": 20,
                "meaning": "I take refuge with Allah, The Supreme and with His Noble Face, and His eternal authority from the accursed devil. In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, open the gates of Your mercy for me.",
                "arabic": "&#1571;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1575;&#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1593;&#1614;&#1592;&#1610;&#1600;&#1605; &#1608;&#1614;&#1576;&#1616;&#1608;&#1614;&#1580;&#1618;&#1607;&#1616;&#1600;&#1607;&#1616; &#1575;&#1604;&#1603;&#1614;&#1585;&#1616;&#1610;&#1600;&#1605; &#1608;&#1614;&#1587;&#1615;&#1604;&#1618;&#1591;&#1600;&#1575;&#1606;&#1616;&#1607; &#1575;&#1604;&#1602;&#1614;&#1583;&#1610;&#1600;&#1605; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1588;&#1617;&#1610;&#1618;&#1600;&#1591;&#1575;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1614;&#1580;&#1600;&#1610;&#1605;&#1548;[ &#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1548; &#1608;&#1614;&#1575;&#1604;&#1589;&#1617;&#1614;&#1604;&#1575;&#1577;&#1615; &#1608;&#1614;&#1575;&#1604;&#1587;&#1617;&#1614;&#1604;&#1575;&#1605;&#1615; &#1593;&#1614;&#1604;&#1609; &#1585;&#1614;&#1587;&#1608;&#1604;&#1616; &#1575;&#1604;&#1604;&#1607;]&#1548; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1601;&#1618;&#1578;&#1614;&#1600;&#1581;&#1618; &#1604;&#1610; &#1571;&#1614;&#1576;&#1618;&#1608;&#1575;&#1576;&#1614; &#1585;&#1614;&#1581;&#1618;&#1605;&#1614;&#1578;&#1600;&#1616;&#1603; ",
                "transliteration": "A<sup>c</sup>Ã»dhu bi-l-lahi-l-<sup>c</sup>a<u>z</u>imi, wa bi-wajhihi-l-karimi, wa sultanihi-l-qadimi, mina sh-shay<u>t</u>ani r-rajim.<br /> [Bismi l-lahi, wa <u>s</u>-<u>s</u>alatu wa s-salamu <sup>c</sup>ala rasÃ»li l-lahi]. Allahumma fta<u>h</u> li abwaba ra<u>h</u>matik.",
                "audio": "audio/20.mp3"
            }]
        }, {
            "id": 11,
            "title": "When going to the mosque",
            "duas": [{
                "id": 19,
                "meaning": "O Allah, place within my heart light, and upon my tongue light, and within my ears light, and within my eyes light, and place behind me light and in front of me light and above me light and beneath me light. O Allah, bestow upon me light.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1580;&#1618;&#1593;&#1614;&#1600;&#1604;&#1618; &#1601;&#1616;&#1610; &#1602;&#1614;&#1604;&#1618;&#1576;&#1600;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; &#1548; &#1608;&#1614;&#1601;&#1610; &#1604;&#1616;&#1587;&#1614;&#1600;&#1575;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;&#1548;   &#1608;&#1614;&#1601;&#1616;&#1610; &#1587;&#1614;&#1605;&#1618;&#1593;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1601;&#1616;&#1610; &#1576;&#1614;&#1589;&#1614;&#1585;&#1616;&#1610;&#1616; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1605;&#1616;&#1606;&#1618; &#1601;&#1614;&#1614;&#1608;&#1618;&#1602;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; , &#1608;&#1614; &#1605;&#1616;&#1606;&#1618; &#1578;&#1614;&#1581;&#1618;&#1578;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614; &#1593;&#1614;&#1606;&#1618; &#1610;&#1614;&#1605;&#1616;&#1610;&#1606;&#1610;&#1616; &#1606;&#1615;&#1608;&#1585;&#1575;&#1614;, &#1608;&#1593;&#1614;&#1606;&#1618; &#1588;&#1616;&#1605;&#1614;&#1575;&#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1605;&#1618;&#1606; &#1571;&#1614;&#1605;&#1575;&#1614;&#1605;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1605;&#1616;&#1606;&#1618; &#1582;&#1614;&#1604;&#1618;&#1601;&#1610;&#1616; &#1606;&#1615;&#1608;&#1585;&#1575;&#1614;, &#1608;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618; &#1601;&#1616;&#1610; &#1606;&#1614;&#1601;&#1618;&#1587;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1571;&#1614;&#1593;&#1618;&#1592;&#1616;&#1605;&#1618; &#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1593;&#1592;&#1617;&#1616;&#1605;&#1618; &#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618; &#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1571;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1571;&#1614;&#1593;&#1618;&#1591;&#1616;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1618; &#1601;&#1616;&#1610; &#1593;&#1614;&#1589;&#1614;&#1576;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1601;&#1616;&#1610; &#1604;&#1614;&#1581;&#1618;&#1605;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1601;&#1616;&#1610; &#1583;&#1614;&#1605;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; &#1608;&#1614;&#1601;&#1616;&#1610; &#1588;&#1614;&#1593;&#1618;&#1585;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1601;&#1616;&#1610; &#1576;&#1614;&#1588;&#1614;&#1585;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; (&#1571;&#1614;&#1604;&#1604;&#1617;&#1614;&#1607;&#1615;&#1605;&#1617;&#1614; &#1575;&#1580;&#1616;&#1593;&#1614;&#1604;&#1618; &#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; &#1601;&#1616;&#1610; &#1602;&#1617;&#1576;&#1618;&#1585;&#1616;&#1610;  &#1608;&#1614; &#1606;&#1615;&#1608;&#1585;&#1575;&#1614; &#1601;&#1616;&#1610; &#1593;&#1616;&#1592;&#1575;&#1614;&#1605;&#1616;&#1610;) (&#1608;&#1614;&#1586;&#1616;&#1583;&#1618;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;, &#1608;&#1614;&#1586;&#1616;&#1583;&#1618;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1614; , &#1608;&#1614;&#1586;&#1616;&#1583;&#1618;&#1606;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611;) (&#1608;&#1614;&#1607;&#1614;&#1576;&#1618; &#1604;&#1616;&#1610; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; &#1593;&#1614;&#1604;&#1614;&#1609; &#1606;&#1615;&#1608;&#1585;&#1575;&#1611; )",
                "transliteration": "Allahumma j<sup>c</sup>al fi qalbi nÃ»ran, wa fi lisani nÃ»ran, wa fi sam<sup>c</sup>i nÃ»ran, wa fi ba<u>s</u>ari nÃ»ran, wa min fawqi nÃ»ran, wa min ta<u>h</u>ti nÃ»ran, wa <sup>c</sup>an yamini nÃ»ran, wa <sup>c</sup>an shimali nÃ»ran, wa min amami nÃ»ran, wa min khalfi nÃ»ran. Wa j<sup>c</sup>al fi nafsi nÃ»ran, wa a<sup>c</sup><u>z</u>im li nÃ»ran, wa <sup>c</sup>a<u>z</u><u>z</u>im li nÃ»ran. Wa j<sup>c</sup>al li nÃ»ran, wa j<sup>c</sup>alni nÃ»ran. Allahumma a<sup>c</sup><u>t</u>ini nÃ»ran, wa j<sup>c</sup>al fi <sup>c</sup>a<u>s</u>abi nÃ»ran, wa fi la<u>h</u>mi nÃ»ran, wa fi dami nÃ»ran, wa fi sha<sup>c</sup>ri nÃ»ran, wa fi bashari nÃ»ran.<br /> <br /> [Allahumma j<sup>c</sup>al li nÃ»ran fi qabri, wa nÃ»ran fi <sup>c</sup>i<u>z</u>ami.]<br /> <br /> [Wa zidni nÃ»ran, wa zidni nÃ»ran, wa zidni nÃ»ran.]<br /> <br /> [Wa hab li nÃ»ran <sup>c</sup>ala nÃ»r.]",
                "audio": "audio/19.mp3"
            }]
        }, {
            "id": 10,
            "title": "Upon entering / when leaving the home",
            "duas": [{
                "id": 16,
                "meaning": "[Upon leaving :] In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1548; &#1578;&#1614;&#1608;&#1614;&#1603;&#1617;&#1614;&#1604;&#1618;&#1600;&#1578;&#1615; &#1593;&#1614;&#1604;&#1609; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1604;&#1575; &#1581;&#1614;&#1608;&#1618;&#1604;&#1614; &#1608;&#1614;&#1604;&#1575; &#1602;&#1615;&#1600;&#1608;&#1617;&#1614;&#1577;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607; ",
                "transliteration": "Bismi l-lahi, tawakkaltu <sup>c</sup>ala l-lahi, wa la <u>h</u>awla wa la quwwata illa bi-l-lahi.",
                "audio": "audio/16.mp3"
            }, {
                "id": 17,
                "meaning": "[When leaving :] O Allah, I take refuge with You lest I should stray or be led astray, or slip or be tripped, or oppress or be oppressed, or behave foolishly or be treated foolishly.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1571;&#1614;&#1606;&#1618; &#1571;&#1614;&#1590;&#1616;&#1600;&#1604;&#1617;&#1614; &#1571;&#1614;&#1608;&#1618; &#1571;&#1615;&#1590;&#1614;&#1600;&#1604; &#1548; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1586;&#1616;&#1604;&#1617;&#1614; &#1571;&#1614;&#1608;&#1618; &#1571;&#1615;&#1586;&#1614;&#1604; &#1548; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1592;&#1618;&#1604;&#1616;&#1600;&#1605;&#1614; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1615;&#1592;&#1618;&#1604;&#1614;&#1600;&#1605; &#1548; &#1571;&#1614;&#1608;&#1618; &#1571;&#1614;&#1580;&#1618;&#1607;&#1614;&#1604;&#1614; &#1571;&#1614;&#1608;&#1618; &#1610;&#1615;&#1600;&#1580;&#1618;&#1607;&#1614;&#1604;&#1614; &#1593;&#1614;&#1604;&#1614;&#1600;&#1610;&#1617; ",
                "transliteration": "Allahumma inni a<sup>c</sup>Ã»dhu bika an a<u>d</u>illa aw u<u>d</u>alla, aw azilla aw uzalla, aw a<u>z</u>lima, aw u<u>z</u>lama, aw ajhala, aw yujhala <sup>c</sup>alayya.",
                "audio": "audio/17.mp3"
            }, {
                "id": 18,
                "meaning": "[Upon entering] In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we place our trust.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1604;&#1614;&#1580;&#1618;&#1606;&#1600;&#1575;&#1548; &#1608;&#1614;&#1576;&#1616;&#1587;&#1618;&#1600;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1582;&#1614;&#1600;&#1585;&#1614;&#1580;&#1618;&#1606;&#1600;&#1575;&#1548; &#1608;&#1614;&#1593;&#1614;&#1604;&#1600;&#1609; &#1585;&#1614;&#1576;&#1617;&#1616;&#1606;&#1600;&#1575; &#1578;&#1614;&#1608;&#1614;&#1603;&#1617;&#1604;&#1618;&#1600;&#1606;&#1575; ",
                "transliteration": "Bismi l-lahi walajna, wa bismi l-lahi kharajna, wa <sup>c</sup>ala l-lahi tawakkalna.",
                "audio": "audio/18.mp3"
            }]
        }, {
            "id": 9,
            "title": "Upon completing the ablution",
            "duas": [{
                "id": 13,
                "meaning": "I bear witness that none has the right to be worshipped except Allah, alone without partner, and I bear witness that Muhammad is His slave and Messenger.",
                "arabic": "&#1571;&#1614;&#1588;&#1618;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1614;&#1600;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1585;&#1610;&#1600;&#1603;&#1614; &#1604;&#1614;&#1600;&#1607;&#1615; &#1608;&#1614;&#1571;&#1614;&#1588;&#1618;&#1607;&#1614;&#1583;&#1615; &#1571;&#1614;&#1606;&#1617;&#1614; &#1605;&#1615;&#1581;&#1614;&#1605;&#1617;&#1600;&#1583;&#1575;&#1611; &#1593;&#1614;&#1576;&#1618;&#1600;&#1583;&#1615;&#1607;&#1615; &#1608;&#1614;&#1585;&#1614;&#1587;&#1600;&#1608;&#1604;&#1615;&#1600;&#1607;",
                "transliteration": "Ash-hadu an la ilaha illa l-lahu, wa<u>h</u>dahu la sharika lahu, wa ash-hadu anna Mu<u>h</u>ammadan <sup>c</sup>abdÃ»hu wa rasÃ»luhu.",
                "audio": "audio/13.mp3"
            }, {
                "id": 14,
                "meaning": "O Allah, make me of those who return to You often in repentance and make me of those who remain clean and pure.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1575;&#1580;&#1618;&#1593;&#1614;&#1604;&#1606;&#1600;&#1610; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1578;&#1617;&#1614;&#1600;&#1608;&#1617;&#1575;&#1576;&#1610;&#1606;&#1614; &#1608;&#1614;&#1575;&#1580;&#1618;&#1593;&#1614;&#1600;&#1604;&#1618;&#1606;&#1610; &#1605;&#1616;&#1606;&#1614; &#1575;&#1604;&#1605;&#1578;&#1614;&#1591;&#1614;&#1607;&#1617;&#1600;&#1585;&#1610;&#1606; &#1575;&#1604;&#1604;&#1607; &#1571;&#1603;&#1576;&#1585;",
                "transliteration": "Allahumma j<sup>c</sup>alni mina t-tawwabina wa j<sup>c</sup>alni mina-l-muta<u>t</u>ahhirin.",
                "audio": "audio/14.mp3"
            }, {
                "id": 15,
                "meaning": "How perfect You are O Allah, and I praise You, I bear witness that none has the right to be worshipped except You, I seek Your forgiveness and turn in repentance to You.",
                "arabic": "&#1587;&#1615;&#1576;&#1618;&#1581;&#1600;&#1575;&#1606;&#1614;&#1603;&#1614; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1608;&#1614;&#1576;&#1616;&#1581;&#1614;&#1605;&#1583;&#1616;&#1603; &#1571;&#1614;&#1588;&#1618;&#1607;&#1614;&#1600;&#1583;&#1615; &#1571;&#1614;&#1606;&#1618; &#1604;&#1575; &#1573;&#1616;&#1604;&#1607;&#1614; &#1573;&#1616;&#1604;&#1575;&#1617; &#1571;&#1614;&#1606;&#1618;&#1578;&#1614; &#1571;&#1614;&#1587;&#1618;&#1578;&#1614;&#1594;&#1618;&#1601;&#1616;&#1585;&#1615;&#1603;&#1614; &#1608;&#1614;&#1571;&#1614;&#1578;&#1608;&#1576;&#1615; &#1573;&#1616;&#1604;&#1614;&#1600;&#1610;&#1618;&#1603;",
                "transliteration": "Sub<u>h</u>anaka l-lahumma wa bi-<u>h</u>amdika. Ash-hadu an la ilaha illa anta, astaghfiruka wa atÃ»bu ilayka.",
                "audio": "audio/15.mp3"
            }]
        }, {
            "id": 8,
            "title": "When starting ablution",
            "duas": [{
                "id": 12,
                "meaning": "In the name of Allah.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Bismi l-lahi.",
                "audio": "audio/12.mp3"
            }]
        }, {
            "id": 7,
            "title": "After leaving the toilet",
            "duas": [{
                "id": 11,
                "meaning": "I ask You (Allah) for forgiveness.",
                "arabic": "&#1594;&#1615;&#1601;&#1618;&#1600;&#1585;&#1575;&#1606;&#1614;&#1603;",
                "transliteration": "Ghufranak.",
                "audio": "audio/11.mp3"
            }]
        }, {
            "id": 6,
            "title": "Before entering the toilet",
            "duas": [{
                "id": 10,
                "meaning": "(In the name of Allah). O Allah, I take refuge with you from all evil and evil-doers.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607; ) &#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1573;&#1616;&#1606;&#1617;&#1616;&#1600;&#1610; &#1571;&#1614;&#1593;&#1600;&#1608;&#1584;&#1615; &#1576;&#1616;&#1600;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1614; &#1575;&#1604;&#1618;&#1582;&#1615;&#1600;&#1576;&#1618;&#1579;&#1616; &#1608;&#1614;&#1575;&#1604;&#1618;&#1582;&#1614;&#1576;&#1575;&#1574;&#1616;&#1579;)",
                "transliteration": "(Bismi l-lahi). Allahumma inni a<sup>c</sup>Ã»dhu bika mina-l-khubthi wa-l-khabaÂ’ith.",
                "audio": "audio/10.mp3"
            }]
        }, {
            "id": 5,
            "title": "Before undressing",
            "duas": [{
                "id": 9,
                "meaning": "In the name of Allah.",
                "arabic": "&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1607;",
                "transliteration": "Bismi l-lahi.",
                "audio": "audio/9.mp3"
            }]
        }, {
            "id": 4,
            "title": "To someone wearing a new garment",
            "duas": [{
                "id": 7,
                "meaning": "May you wear it out and Allah replace it (with another).",
                "arabic": "&#1578;&#1615;&#1576;&#1618;&#1600;&#1604;&#1610; &#1608;&#1614;&#1610;&#1615;&#1600;&#1582;&#1618;&#1604;&#1616;&#1601;&#1615; &#1575;&#1604;&#1604;&#1607;&#1615; &#1578;&#1614;&#1593;&#1614;&#1575;&#1604;&#1609;",
                "transliteration": "Tubli wa yukhlifu l-lahu ta<sup>c</sup>ala.",
                "audio": "audio/7.mp3"
            }, {
                "id": 8,
                "meaning": "Wear anew, live commendably and die a shaheed.",
                "arabic": "&#1575;&#1616;&#1604;&#1576;&#1614;&#1600;&#1587; &#1580;&#1614;&#1583;&#1610;&#1600;&#1583;&#1575;&#1611; &#1608;&#1614;&#1593;&#1616;&#1600;&#1588;&#1618; &#1581;&#1614;&#1605;&#1600;&#1610;&#1583;&#1575;&#1611; &#1608;&#1614;&#1605;&#1615;&#1600;&#1578;&#1618; &#1588;&#1607;&#1610;&#1583;&#1575;&#1611;",
                "transliteration": "Ilbis jadidan, wa <sup>c</sup>ish <u>h</u>amidan, wa mut shahidan.",
                "audio": "audio/8.mp3"
            }]
        }, {
            "id": 3,
            "title": "When wearing a new garment",
            "duas": [{
                "id": 6,
                "meaning": "O Allah, for You is all praise, You have clothed me with it (i.e. the garment), I ask You for the good of it and the good for which it was made, and I seek refuge with You from the evil of it and the evil for which it was made.",
                "arabic": "&#1575;&#1604;&#1604;&#1617;&#1607;&#1615;&#1600;&#1605;&#1617;&#1614; &#1604;&#1614;&#1600;&#1603;&#1614; &#1575;&#1604;&#1581;&#1614;&#1600;&#1605;&#1618;&#1600;&#1583;&#1615; &#1571;&#1606;&#1618;&#1600;&#1578;&#1614; &#1603;&#1614;&#1587;&#1614;&#1600;&#1608;&#1618;&#1578;&#1614;&#1606;&#1610;&#1607;&#1616;&#1548; &#1571;&#1614;&#1614;&#1587;&#1618;&#1571;&#1614;&#1614;&#1604;&#1615;&#1600;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1582;&#1614;&#1600;&#1610;&#1585;&#1616;&#1607;&#1616; &#1608;&#1614;&#1582;&#1614;&#1600;&#1610;&#1618;&#1585;&#1616; &#1605;&#1614;&#1575; &#1589;&#1615;&#1606;&#1616;&#1593;&#1614; &#1604;&#1614;&#1600;&#1607;&#1548; &#1608;&#1614;&#1571;&#1614;&#1593;&#1608;&#1584;&#1615; &#1576;&#1616;&#1603;&#1614; &#1605;&#1616;&#1600;&#1606;&#1618; &#1588;&#1614;&#1600;&#1585;&#1617;&#1616;&#1607;&#1616; &#1608;&#1614;&#1588;&#1614;&#1600;&#1585;&#1617;&#1616; &#1605;&#1600;&#1575; &#1589;&#1615;&#1606;&#1616;&#1593;&#1614; &#1604;&#1614;&#1600;&#1607;&#1615;",
                "transliteration": "Allahumma laka-l-<u>h</u>amdu. Anta kasawtanihi. AsÂ’aluka min khayrihi wa khayri ma <u>s</u>uni<sup>c</sup>a lahu, wa a<sup>c</sup>udhu bika min sharrihi wa sharri ma <u>s</u>uni<sup>c</sup>a lahu.",
                "audio": "audio/6.mp3"
            }]
        }, {
            "id": 2,
            "title": "When wearing a garment",
            "duas": [{
                "id": 5,
                "meaning": "All Praise is for Allah who has clothed me with this garment and provided it for me, with no power nor might from myself.",
                "arabic": "&#1575;&#1604;&#1581;&#1605;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1617;&#1584;&#1610; &#1603;&#1614;&#1587;&#1575;&#1606;&#1610; &#1607;&#1584;&#1575; (&#1575;&#1604;&#1579;&#1617;&#1608;&#1576;) &#1608;&#1614;&#1585;&#1614;&#1586;&#1614;&#1602;&#1614;&#1606;&#1610;&#1607; &#1605;&#1616;&#1606;&#1618; &#1594;&#1614;&#1600;&#1610;&#1600;&#1618;&#1585;&#1616; &#1581;&#1614;&#1608;&#1604;&#1613; &#1605;&#1616;&#1606;&#1617;&#1610; &#1608;&#1614;&#1604;&#1575; &#1602;&#1600;&#1608;&#1617;&#1577; ",
                "transliteration": "Al <u>h</u>amdu li-l-lahi l-ladhi kasani hadha th-thawbawa razaqanihi min ghayri <u>h</u>awlin minni wa la quwwatin.",
                "audio": "audio/5.mp3"
            }]
        }, {
            "id": 1,
            "title": "When waking up",
            "duas": [{
                "id": 1,
                "meaning": "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
                "arabic": "&#1575;&#1604;&#1581;&#1614;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1616;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1617;&#1584;&#1610; &#1571;&#1614;&#1581;&#1618;&#1600;&#1610;&#1575;&#1606;&#1575; &#1576;&#1614;&#1593;&#1618;&#1600;&#1583;&#1614; &#1605;&#1575; &#1571;&#1614;&#1605;&#1575;&#1578;&#1614;&#1600;&#1606;&#1575; &#1608;&#1614;&#1573;&#1604;&#1610;&#1607; &#1575;&#1604;&#1606;&#1617;&#1615;&#1600;&#1588;&#1608;&#1585;",
                "transliteration": "Al-<u>h</u>amdu li-l-lahi l-ladhi a<u>h</u>yana ba<sup>c</sup>da ma amatana wa ilayhi n-nushÃ»r.",
                "audio": "audio/1.mp3"
            }, {
                "id": 2,
                "meaning": "None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme. O my Lord forgive me.",
                "arabic": "&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1617;&#1607;&#1615; &#1608;&#1614;&#1581;&#1618;&#1600;&#1583;&#1614;&#1607;&#1615; &#1604;&#1575; &#1588;&#1614;&#1600;&#1585;&#1610;&#1603;&#1614; &#1604;&#1607;&#1548; &#1604;&#1607;&#1615; &#1575;&#1604;&#1605;&#1615;&#1604;&#1600;&#1603;&#1615; &#1608;&#1604;&#1607;&#1615; &#1575;&#1604;&#1581;&#1614;&#1605;&#1600;&#1583;&#1548; &#1608;&#1607;&#1608;&#1614; &#1593;&#1604;&#1609; &#1603;&#1604;&#1617; &#1588;&#1610;&#1569;&#1613; &#1602;&#1583;&#1610;&#1585;&#1548; &#1587;&#1615;&#1600;&#1576;&#1618;&#1581;&#1575;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616;&#1548; &#1608;&#1575;&#1604;&#1581;&#1605;&#1618;&#1600;&#1583;&#1615; &#1604;&#1604;&#1607; &#1548; &#1608;&#1604;&#1575; &#1573;&#1604;&#1607;&#1614; &#1573;&#1604;&#1575;&#1617; &#1575;&#1604;&#1604;&#1607;&#1615; &#1608;&#1575;&#1604;&#1604;&#1607;&#1615; &#1571;&#1603;&#1576;&#1614;&#1585;&#1548; &#1608;&#1614;&#1604;&#1575; &#1581;&#1614;&#1608;&#1604;&#1614; &#1608;&#1614;&#1604;&#1575; &#1602;&#1608;&#1617;&#1577; &#1573;&#1604;&#1575;&#1617; &#1576;&#1575;&#1604;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1593;&#1604;&#1610;&#1617; &#1575;&#1604;&#1593;&#1592;&#1610;&#1605; , &#1585;&#1614;&#1576;&#1617;&#1616; &#1575;&#1594;&#1618;&#1601;&#1585;&#1618; &#1604;&#1610;",
                "transliteration": "La ilaha illa l-lahu wa<u>h</u>dahu la sharika lahu, lahu-l-mulku wa lahu l<u>h</u>amdu, wa huwa <sup>c</sup>ala kulli shayÂ’in qadir. Sub<u>h</u>ana l-lahi, wa-l-<u>h</u>amdu li-l-lahi, wa la ilaha illa l-lahu, wa l-lahu akbaru, wa la <u>h</u>awla wa la quwwata illa bi-l-lahi-l-<sup>c</sup>aliyyi-l-<sup>c</sup>azim. Rabbi ghfir li.",
                "audio": "audio/2.mp3"
            }, {
                "id": 3,
                "meaning": "All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.",
                "arabic": "&#1575;&#1604;&#1581;&#1605;&#1583;&#1615; &#1604;&#1604;&#1607;&#1616; &#1575;&#1604;&#1584;&#1610; &#1593;&#1575;&#1601;&#1575;&#1606;&#1610; &#1601;&#1610; &#1580;&#1614;&#1587;&#1614;&#1583;&#1610; &#1608;&#1614;&#1585;&#1614;&#1583;&#1617; &#1593;&#1614;&#1604;&#1610;&#1617; &#1585;&#1608;&#1581;&#1610; &#1608;&#1614;&#1571;&#1614;&#1584;&#1616;&#1606;&#1614; &#1604;&#1610; &#1576;&#1616;&#1584;&#1616;&#1603;&#1618;&#1585;&#1616;&#1607;",
                "transliteration": "Al <u>h</u>amdu li-l-lahi l-ladhi <sup>c</sup>afani fi jasadi wa radda <sup>c</sup>alayya rÃ»<u>h</u>i, wa adhina li bi-dhikrihi.",
                "audio": "audio/3.mp3"
            }, {
                "id": 4,
                "meaning": "From Verse III,190 till the end of the chapter &quot;Al Imran&quot;.",
                "arabic": " &#1573;&#1616;&#1606;&#1617;&#1614; &#1601;&#1616;&#1610; &#1582;&#1614;&#1604;&#1618;&#1602;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1608;&#1614;&#1575;&#1582;&#1618;&#1578;&#1616;&#1604;&#1575;&#1614;&#1601;&#1616; &#1575;&#1604;&#1604;&#1617;&#1614;&#1610;&#1618;&#1604;&#1616; &#1608;&#1614;&#1575;&#1604;&#1606;&#1617;&#1614;&#1607;&#1614;&#1575;&#1585;&#1616; &#1604;&#1570;&#1610;&#1614;&#1575;&#1578;&#1613; &#1604;&#1571;&#1615;&#1608;&#1618;&#1604;&#1616;&#1610; &#1575;&#1604;&#1571;&#1604;&#1618;&#1576;&#1614;&#1575;&#1576;&#1616; {190} &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1610;&#1614;&#1584;&#1618;&#1603;&#1615;&#1585;&#1615;&#1608;&#1606;&#1614; &#1575;&#1604;&#1604;&#1607;&#1614; &#1602;&#1616;&#1610;&#1614;&#1575;&#1605;&#1611;&#1575; &#1608;&#1614;&#1602;&#1615;&#1593;&#1615;&#1608;&#1583;&#1611;&#1575; &#1608;&#1614;&#1593;&#1614;&#1604;&#1614;&#1609;&#1614; &#1580;&#1615;&#1606;&#1615;&#1608;&#1576;&#1616;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1610;&#1614;&#1578;&#1614;&#1601;&#1614;&#1603;&#1617;&#1614;&#1585;&#1615;&#1608;&#1606;&#1614; &#1601;&#1616;&#1610; &#1582;&#1614;&#1604;&#1618;&#1602;&#1616; &#1575;&#1604;&#1587;&#1617;&#1614;&#1605;&#1614;&#1608;&#1614;&#1575;&#1578;&#1616; &#1608;&#1614;&#1575;&#1604;&#1571;&#1614;&#1585;&#1618;&#1590;&#1616; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1605;&#1614;&#1575; &#1582;&#1614;&#1604;&#1614;&#1602;&#1618;&#1578;&#1614; &#1607;&#1614;&#1584;&#1575; &#1576;&#1614;&#1575;&#1591;&#1616;&#1604;&#1575;&#1611; &#1587;&#1615;&#1576;&#1618;&#1581;&#1614;&#1575;&#1606;&#1614;&#1603;&#1614; &#1601;&#1614;&#1602;&#1616;&#1606;&#1614;&#1575; &#1593;&#1614;&#1584;&#1614;&#1575;&#1576;&#1614; &#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1585;&#1616; {191} &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1605;&#1614;&#1606; &#1578;&#1615;&#1583;&#1618;&#1582;&#1616;&#1604;&#1616; &#1575;&#1604;&#1606;&#1617;&#1614;&#1575;&#1585;&#1614; &#1601;&#1614;&#1602;&#1614;&#1583;&#1618; &#1571;&#1614;&#1582;&#1618;&#1586;&#1614;&#1610;&#1618;&#1578;&#1614;&#1607;&#1615; &#1608;&#1614;&#1605;&#1614;&#1575; &#1604;&#1616;&#1604;&#1592;&#1617;&#1614;&#1575;&#1604;&#1616;&#1605;&#1616;&#1610;&#1606;&#1614; &#1605;&#1616;&#1606;&#1618; &#1571;&#1614;&#1606;&#1589;&#1614;&#1575;&#1585;&#1613; {192} &#1585;&#1617;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1573;&#1616;&#1606;&#1617;&#1614;&#1606;&#1614;&#1575; &#1587;&#1614;&#1605;&#1616;&#1593;&#1618;&#1606;&#1614;&#1575; &#1605;&#1615;&#1606;&#1614;&#1575;&#1583;&#1616;&#1610;&#1611;&#1575; &#1610;&#1615;&#1606;&#1614;&#1575;&#1583;&#1616;&#1610; &#1604;&#1616;&#1604;&#1573;&#1616;&#1610;&#1605;&#1614;&#1575;&#1606;&#1616; &#1571;&#1614;&#1606;&#1618; &#1569;&#1575;&#1605;&#1616;&#1606;&#1615;&#1608;&#1575;&#1618; &#1576;&#1616;&#1585;&#1614;&#1576;&#1617;&#1616;&#1603;&#1615;&#1605;&#1618; &#1601;&#1614;&#1570;&#1605;&#1614;&#1606;&#1617;&#1614;&#1575; &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1601;&#1614;&#1575;&#1594;&#1618;&#1601;&#1616;&#1585;&#1618; &#1604;&#1614;&#1606;&#1614;&#1575; &#1584;&#1615;&#1606;&#1615;&#1608;&#1576;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1603;&#1614;&#1601;&#1617;&#1616;&#1585;&#1618; &#1593;&#1614;&#1606;&#1617;&#1614;&#1575; &#1587;&#1614;&#1610;&#1617;&#1616;&#1574;&#1614;&#1575;&#1578;&#1616;&#1606;&#1614;&#1575; &#1608;&#1614;&#1578;&#1614;&#1608;&#1614;&#1601;&#1617;&#1614;&#1606;&#1614;&#1575; &#1605;&#1614;&#1593;&#1614; &#1575;&#1604;&#1571;&#1576;&#1618;&#1585;&#1614;&#1575;&#1585;&#1616; {193} &#1585;&#1614;&#1576;&#1617;&#1614;&#1606;&#1614;&#1575; &#1608;&#1614;&#1569;&#1575;&#1578;&#1616;&#1606;&#1614;&#1575; &#1605;&#1614;&#1575; &#1608;&#1614;&#1593;&#1614;&#1583;&#1578;&#1617;&#1614;&#1606;&#1614;&#1575; &#1593;&#1614;&#1604;&#1614;&#1609; &#1585;&#1615;&#1587;&#1615;&#1604;&#1616;&#1603;&#1614; &#1608;&#1614;&#1604;&#1575;&#1614; &#1578;&#1615;&#1582;&#1618;&#1586;&#1616;&#1606;&#1614;&#1575; &#1610;&#1614;&#1608;&#1618;&#1605;&#1614; &#1575;&#1604;&#1618;&#1602;&#1616;&#1610;&#1614;&#1575;&#1605;&#1614;&#1577;&#1616; &#1573;&#1616;&#1606;&#1617;&#1614;&#1603;&#1614; &#1604;&#1575;&#1614; &#1578;&#1615;&#1582;&#1618;&#1604;&#1616;&#1601;&#1615; &#1575;&#1604;&#1618;&#1605;&#1616;&#1610;&#1593;&#1614;&#1575;&#1583;&#1614; {194} &#1601;&#1614;&#1575;&#1587;&#1618;&#1578;&#1614;&#1580;&#1614;&#1575;&#1576;&#1614; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1585;&#1614;&#1576;&#1617;&#1615;&#1607;&#1615;&#1605;&#1618; &#1571;&#1614;&#1606;&#1617;&#1616;&#1610; &#1604;&#1575;&#1614; &#1571;&#1615;&#1590;&#1616;&#1610;&#1593;&#1615; &#1593;&#1614;&#1605;&#1614;&#1604;&#1614; &#1593;&#1614;&#1575;&#1605;&#1616;&#1604;&#1613; &#1605;&#1617;&#1616;&#1606;&#1603;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1584;&#1614;&#1603;&#1614;&#1585;&#1613; &#1571;&#1614;&#1608;&#1618; &#1571;&#1615;&#1606;&#1579;&#1614;&#1609; &#1576;&#1614;&#1593;&#1618;&#1590;&#1615;&#1603;&#1615;&#1605; &#1605;&#1617;&#1616;&#1606; &#1576;&#1614;&#1593;&#1618;&#1590;&#1613; &#1601;&#1614;&#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1607;&#1614;&#1575;&#1580;&#1614;&#1585;&#1615;&#1608;&#1575;&#1618; &#1608;&#1614;&#1571;&#1615;&#1582;&#1618;&#1585;&#1616;&#1580;&#1615;&#1608;&#1575;&#1618; &#1605;&#1616;&#1606; &#1583;&#1616;&#1610;&#1614;&#1575;&#1585;&#1616;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1571;&#1615;&#1608;&#1584;&#1615;&#1608;&#1575;&#1618; &#1601;&#1616;&#1610; &#1587;&#1614;&#1576;&#1616;&#1610;&#1604;&#1616;&#1610; &#1608;&#1614;&#1602;&#1614;&#1575;&#1578;&#1614;&#1604;&#1615;&#1608;&#1575;&#1618; &#1608;&#1614;&#1602;&#1615;&#1578;&#1616;&#1604;&#1615;&#1608;&#1575;&#1618; &#1604;&#1571;&#1615;&#1603;&#1614;&#1601;&#1617;&#1616;&#1585;&#1614;&#1606;&#1617;&#1614; &#1593;&#1614;&#1606;&#1618;&#1607;&#1615;&#1605;&#1618; &#1587;&#1614;&#1610;&#1617;&#1616;&#1574;&#1614;&#1575;&#1578;&#1616;&#1607;&#1616;&#1605;&#1618; &#1608;&#1614;&#1604;&#1571;&#1615;&#1583;&#1618;&#1582;&#1616;&#1604;&#1614;&#1606;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1580;&#1614;&#1606;&#1617;&#1614;&#1575;&#1578;&#1613; &#1578;&#1614;&#1580;&#1618;&#1585;&#1616;&#1610; &#1605;&#1616;&#1606; &#1578;&#1614;&#1581;&#1618;&#1578;&#1616;&#1607;&#1614;&#1575; &#1575;&#1604;&#1571;&#1614;&#1606;&#1618;&#1607;&#1614;&#1575;&#1585;&#1615; &#1579;&#1614;&#1608;&#1614;&#1575;&#1576;&#1611;&#1575; &#1605;&#1617;&#1616;&#1606; &#1593;&#1616;&#1606;&#1583;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1575;&#1604;&#1604;&#1607;&#1615; &#1593;&#1616;&#1606;&#1583;&#1614;&#1607;&#1615; &#1581;&#1615;&#1587;&#1618;&#1606;&#1615; &#1575;&#1604;&#1579;&#1617;&#1614;&#1608;&#1614;&#1575;&#1576;&#1616; {195} &#1604;&#1575;&#1614; &#1610;&#1614;&#1594;&#1615;&#1585;&#1617;&#1614;&#1606;&#1617;&#1614;&#1603;&#1614; &#1578;&#1614;&#1602;&#1614;&#1604;&#1617;&#1615;&#1576;&#1615; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1603;&#1614;&#1601;&#1614;&#1585;&#1615;&#1608;&#1575;&#1618; &#1601;&#1616;&#1610; &#1575;&#1604;&#1618;&#1576;&#1616;&#1604;&#1575;&#1614;&#1583;&#1616; {196} &#1605;&#1614;&#1578;&#1614;&#1575;&#1593;&#1612; &#1602;&#1614;&#1604;&#1616;&#1610;&#1604;&#1612; &#1579;&#1615;&#1605;&#1617;&#1614; &#1605;&#1614;&#1571;&#1618;&#1608;&#1614;&#1575;&#1607;&#1615;&#1605;&#1618; &#1580;&#1614;&#1607;&#1614;&#1606;&#1617;&#1614;&#1605;&#1615; &#1608;&#1614;&#1576;&#1616;&#1574;&#1618;&#1587;&#1614; &#1575;&#1604;&#1618;&#1605;&#1616;&#1607;&#1614;&#1575;&#1583;&#1615; {197} &#1604;&#1614;&#1603;&#1616;&#1606;&#1616; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1575;&#1578;&#1617;&#1614;&#1602;&#1614;&#1608;&#1618;&#1575;&#1618; &#1585;&#1614;&#1576;&#1617;&#1614;&#1607;&#1615;&#1605;&#1618; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1580;&#1614;&#1606;&#1617;&#1614;&#1575;&#1578;&#1612; &#1578;&#1614;&#1580;&#1618;&#1585;&#1616;&#1610; &#1605;&#1616;&#1606; &#1578;&#1614;&#1581;&#1618;&#1578;&#1616;&#1607;&#1614;&#1575; &#1575;&#1604;&#1571;&#1614;&#1606;&#1618;&#1607;&#1614;&#1575;&#1585;&#1615; &#1582;&#1614;&#1575;&#1604;&#1616;&#1583;&#1616;&#1610;&#1606;&#1614; &#1601;&#1616;&#1610;&#1607;&#1614;&#1575; &#1606;&#1615;&#1586;&#1615;&#1604;&#1575;&#1611; &#1605;&#1617;&#1616;&#1606;&#1618; &#1593;&#1616;&#1606;&#1583;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1605;&#1614;&#1575; &#1593;&#1616;&#1606;&#1583;&#1614; &#1575;&#1604;&#1604;&#1607;&#1616; &#1582;&#1614;&#1610;&#1618;&#1585;&#1612; &#1604;&#1617;&#1616;&#1604;&#1571;&#1614;&#1576;&#1618;&#1585;&#1614;&#1575;&#1585;&#1616; {198} &#1608;&#1614;&#1573;&#1616;&#1606;&#1617;&#1614; &#1605;&#1616;&#1606;&#1618; &#1571;&#1614;&#1607;&#1618;&#1604;&#1616; &#1575;&#1604;&#1618;&#1603;&#1616;&#1578;&#1614;&#1575;&#1576;&#1616; &#1604;&#1614;&#1605;&#1614;&#1606; &#1610;&#1615;&#1572;&#1618;&#1605;&#1616;&#1606;&#1615; &#1576;&#1616;&#1575;&#1604;&#1604;&#1607;&#1616; &#1608;&#1614;&#1605;&#1614;&#1575; &#1571;&#1615;&#1606;&#1586;&#1616;&#1604;&#1614; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1603;&#1615;&#1605;&#1618; &#1608;&#1614;&#1605;&#1614;&#1570; &#1571;&#1615;&#1606;&#1586;&#1616;&#1604;&#1614; &#1573;&#1616;&#1604;&#1614;&#1610;&#1618;&#1607;&#1616;&#1605;&#1618; &#1582;&#1614;&#1575;&#1588;&#1616;&#1593;&#1616;&#1610;&#1606;&#1614; &#1604;&#1604;&#1607;&#1616; &#1604;&#1575;&#1614; &#1610;&#1614;&#1588;&#1618;&#1578;&#1614;&#1585;&#1615;&#1608;&#1606;&#1614; &#1576;&#1616;&#1570;&#1610;&#1614;&#1575;&#1578;&#1616; &#1575;&#1604;&#1604;&#1607;&#1616; &#1579;&#1614;&#1605;&#1614;&#1606;&#1611;&#1575; &#1602;&#1614;&#1604;&#1616;&#1610;&#1604;&#1575;&#1611; &#1571;&#1615;&#1608;&#1618;&#1604;&#1614;&#1574;&#1616;&#1603;&#1614; &#1604;&#1614;&#1607;&#1615;&#1605;&#1618; &#1571;&#1614;&#1580;&#1618;&#1585;&#1615;&#1607;&#1615;&#1605;&#1618; &#1593;&#1616;&#1606;&#1583;&#1614; &#1585;&#1614;&#1576;&#1617;&#1616;&#1607;&#1616;&#1605;&#1618; &#1573;&#1616;&#1606;&#1617;&#1614; &#1575;&#1604;&#1604;&#1607;&#1614; &#1587;&#1614;&#1585;&#1616;&#1610;&#1593;&#1615; &#1575;&#1604;&#1618;&#1581;&#1616;&#1587;&#1614;&#1575;&#1576;&#1616; {199} &#1610;&#1614;&#1575; &#1571;&#1614;&#1610;&#1617;&#1615;&#1607;&#1614;&#1575; &#1575;&#1604;&#1617;&#1614;&#1584;&#1616;&#1610;&#1606;&#1614; &#1569;&#1575;&#1605;&#1614;&#1606;&#1615;&#1608;&#1575;&#1618; &#1575;&#1589;&#1618;&#1576;&#1616;&#1585;&#1615;&#1608;&#1575;&#1618; &#1608;&#1614;&#1589;&#1614;&#1575;&#1576;&#1616;&#1585;&#1615;&#1608;&#1575;&#1618; &#1608;&#1614;&#1585;&#1614;&#1575;&#1576;&#1616;&#1591;&#1615;&#1608;&#1575;&#1618; &#1608;&#1614;&#1575;&#1578;&#1617;&#1614;&#1602;&#1615;&#1608;&#1575;&#1618; &#1575;&#1604;&#1604;&#1607;&#1614; &#1604;&#1614;&#1593;&#1614;&#1604;&#1617;&#1614;&#1603;&#1615;&#1605;&#1618; &#1578;&#1615;&#1601;&#1618;&#1604;&#1616;&#1581;&#1615;&#1608;&#1606;&#1614; {200}",
                "transliteration": "Inna fi khalqi s-samawati wa-l-ar<u>d</u>i wa khtilafi l-layli wa n-nahari la-ayatin li-Ã»li-l-albab. Al-ladhina yadhkurÃ»na l-laha qiyaman wa qu<sup>c</sup>Ã»dan wa <sup>c</sup>ala junÃ»bihim, wa yatafakkarÃ»na fi khalqi s-samawati wa-l-ar<u>d</u>i, rabbana ! ma khalaqta  hadha ba<u>t</u>ilan sub<u>h</u>anaka fa-qina <sup>c</sup>adhaba n-nar.<br /> Rabbana ! Innaka man tudkhili n-nara fa-qad akhzaytahu wa ma li-<u>z</u>alimina min an<u>s</u>ar.<br /> Rabbana ! Innana sami<sup>c</sup>na munadiyan yunadi li-l-imani an aminÃ» bi-rabbikum fa-amanna.<br /> Rabbana ! Fa-ghfir lana dhunÃ»bana wa kaffir <sup>c</sup>anna sayyi'atina wa tawaffana ma<sup>c</sup>a-l-abrar.<br /> Rabbana ! Wa atina ma wa<sup>c</sup>adtana <sup>c</sup>ala rusulika wa la tukhzina yawma-l-qiyamati, innaka la tukhlifu-l-mi<sup>c</sup>ad.<br /> Fa-stajaba lahum rabbuhum anni la u<u>d</u>i<sup>c</sup>u <sup>c</sup>amala <sup>c</sup>amilin minkum m-min dhakarin aw untha, ba<sup>c</sup><u>d</u>ukum min ba<sup>c</sup><u>d</u>in, fa-l-ladhina hajarÃ» wa ukhrijÃ» min diyarihim wa Ã»dhÃ» fi sabili wa qatalÃ» wa qutilÃ», la-ukaffiranna <sup>c</sup>anhum sayyi'atihim wa la-udkhilannahum jannatin tajri min ta<u>h</u>tiha-l-anharu, thawaban min <sup>c</sup>indi l-lahi, wa l-lahu <sup>c</sup>indahu <u>h</u>usnu-ththawab.<br /> La yaghurrannaka taqallubu l-ladhina kafarÃ» fi-l-bilad, mata<sup>c</sup> qalilun, thumma ma'wahum jahannamu wa bi'sa-l-mihad.<br /> Lakini l-ladhina t-taqaw rabbahum lahum jannatun tajri min ta<u>h</u>a-l-anharu khalidina fiha, nuzulan m-min <sup>c</sup>indi l-lahi wa ma <sup>c</sup>inda l-lahi khayrun li-l-abrar.<br /> Wa inna min ahli-l-kitabi la-man yu'minu bi-l-lahi wa ma unzila ilaykum wa ma unzila ilayhim, khashi<sup>c</sup>ina li-l-lahi, la yashtarÃ»na bi-ayati l-lahi thamanan qalilan. Uwla-ika lahum ajruhum <sup>c</sup>inda rabbihim, inna l-l^haa sari<sup>c</sup>-l-<u>h</u>isab.<br /> Ya ayyuha l-ladhina amanÃ»-<u>s</u>birÃ» wa <u>s</u>abirÃ» wa rabi<u>t</u>Ã» wa t-taqÃ» l-laha la<sup>c</sup>allakum tufli<u>h</u>Ã»n."
            }]
        }]

    }
});
