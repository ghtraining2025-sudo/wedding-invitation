const weddingData = {
    couple: {
        groom: {
            name: 'Hafez Akmal Ahmed',
            arabicName: '',
            qualification: 'MBA Systems',
            parents: 'Grandson of Late Mrs. & Mr. Shaik Ahmed',
            familyDetails: ['Founder, M.S. Beedi Factory'],
        },

        bride: {
            name: 'Aliza Aleem',
            arabicName: '',
            qualification: 'B.Sc Nutrition',
            parents: 'Granddaughter of Late Mrs. & Mr. Mohammed Khaja Moinuddin',
            familyDetails: [
                'Daughter of Mrs. & Mr. Mohammed Khaja Aleemuddin',
                'Tech Manager at Climate Control Systems',
            ],
        },
    },

    guardians: [{
            names: 'Mrs. & Mr. Nazeer Ahmed',
            designation: 'Partner, M.S. Beedi Factory',
        },
        {
            names: 'Mrs. & Mr. Afzal Ahmed',
            qualification: 'B.E. (Civil)',
            designation: 'Partner, M.S. Beedi Factory',
        },
    ],

    invitation: {
        heading: 'Wedding Invitation',

        openingMessage: 'Request the honour of your gracious presence on the occasion of Nikah & Valima Dinner.',

        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',

        weddingDate: '20 December 2026',
        day: 'Sunday',
        hijriDate: 'Rajab 1448 Hijri',
    },

    events: [{
            id: 'nikah',
            name: 'Nikah Ceremony',
            date: '20 December 2026',
            day: 'Sunday',
            hijriDate: 'Rajab 1448 Hijri',
            time: 'After Zohr prayers, 1:35 PM',
            venue: 'Jama Masjid Syedna Abubakar Siddiq Rz',
            address: 'Al Hasnath Colony, Tolichowki, Hyderabad.',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=17.3994519%2C78.4216554',
        },

        {
            id: 'valima',
            name: 'Valima Dinner',
            date: '20 December 2026',
            day: 'Sunday',
            hijriDate: 'Rajab 1448 Hijri',
            time: 'After Isha prayers, 9:00 PM onwards',
            venue: 'Metro Classic Garden',
            address: 'Aramghar, Opp. Pariwar Dhaba, Hyderabad.',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=17.3203973%2C78.4291997',
        },
    ],

    dua: {
        heading: 'A Beautiful Prayer',

        arabic: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',

        translation: 'May Allah bless you both, shower His blessings upon you, and unite you in goodness.',

        reference: 'Wedding Dua',
    },

    closing: {
        heading: 'With Love & Blessings',

        message: 'Your presence and prayers will make our special day even more memorable. We look forward to celebrating this beautiful occasion with you.',

        coupleNames: 'Hafez Akmal Ahmed & Aliza Aleem',

        footerMessage: 'May Allah bless this union with love, happiness and barakah.',

        signature: 'With warm regards, The Families',
    },
};

export default weddingData;