const bride = {
  name: 'Mehanas MA',
  shortName: 'Mehanas',
  father: 'Muhammed Ashraf K',
  mother: 'Seenath P',
  address: 'Meshkaat, Chalad, Kannur',
  monogram: 'M',
}

const groom = {
  name: 'Abdul Adil EP',
  shortName: 'Abdul Adil',
  father: 'Akbar EP',
  mother: 'Sakeena V',
  address: "Bicha's, Idiyangara, Calicut",
  monogram: 'A',
}

export const wedding = {
  bride,
  groom,
  display: {
    initials: `${bride.monogram} & ${groom.monogram}`,
    coupleShort: `${bride.shortName} & ${groom.shortName}`,
    coupleFull: `${bride.name} & ${groom.name}`,
    documentTitle: `${bride.shortName} & ${groom.shortName} | Wedding Invitation`,
    metaDescription: `${bride.name} & ${groom.name} — You are cordially invited to the wedding. Nikah & reception on 26 July 2026 at NNS Auditorium, Thayyil.`,
  },
  weddingDate: '2026-07-26T11:00:00',
  schedule: {
    nikahTime: '11:00 AM',
    receptionLabel: 'Reception',
  },
  tagline: 'With hearts full of joy, we invite you to share in our happiness',
  invitation: {
    headline: 'You are cordially invited',
    subline: `to the wedding of ${bride.name} & ${groom.name}`,
    hostLine: 'With the blessings of Allah, we invite you to share in our joy',
  },
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Gracious, the Most Merciful',
  quranVerse: {
    surah: 'Ar-Rum',
    ayah: 21,
    reference: 'Surah Ar-Rum · 30:21',
    arabic:
      'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    translation:
      'And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts. Verily in that are signs for those who reflect.',
  },
  images: {
    hero: '/images/hero-couple-veil.jpg',
    quran:
      'https://images.unsplash.com/photo-1591604466107-d94487557561?auto=format&fit=crop&w=1920&q=80',
  },
  venue: {
    name: 'NNS Auditorium',
    area: 'Thayyil',
    city: 'Kannur',
    state: 'Kerala',
    full: 'NNS Auditorium, Thayyil, Kannur',
    address: 'NNS Auditorium, Thayyil, Kannur, Kerala',
    landmark: 'Thayyil, Kannur',
    mapsQuery: 'NNS Auditorium, Thayyil, Kannur, Kerala',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=NNS+Auditorium+Thayyil+Kannur+Kerala',
    embedUrl:
      'https://maps.google.com/maps?q=NNS+Auditorium,+Thayyil,+Kannur,+Kerala&z=15&ie=UTF8&iwloc=&output=embed',
  },
  story: {
    title: 'A Note from Our Family',
    paragraphs: [
      `It is with immense joy and gratitude to Allah that we announce the wedding of our beloved daughter ${bride.name} to ${groom.name}.`,
      'We would be honoured to have you with us on this blessed day — to witness their nikah, share in our happiness, and bless them as they begin this beautiful chapter together.',
    ],
  },
  contact: {
    bridePhone: '+919746538606',
    phoneDisplay: '+91 97465 38606',
    hostLabel: 'For enquiries, please contact the bride\'s family',
  },
}
