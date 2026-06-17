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
  phone: '+917902905061',
  phoneDisplay: '+91 79029 05061',
}

export const wedding = {
  bride,
  groom,
  display: {
    initials: `${groom.monogram} & ${bride.monogram}`,
    coupleShort: `${groom.shortName} & ${bride.shortName}`,
    coupleFull: `${groom.name} & ${bride.name}`,
    documentTitle: `${groom.shortName} & ${bride.shortName} | Wedding Invitation`,
    metaDescription: `${groom.name} & ${bride.name} — You are cordially invited to the wedding reception on 29 July 2026 at White Castle Auditorium, Kannancheri, Calicut.`,
  },
  weddingDate: '2026-07-29T11:00:00',
  dateDisplay: 'Wednesday, 29 July 2026',
  schedule: {
    receptionLabel: 'Reception',
  },
  tagline: 'With hearts full of joy, we invite you to share in our happiness',
  invitation: {
    headline: 'You are cordially invited',
    subline: `to the wedding of ${groom.name} & ${bride.name}`,
    hostLine: 'With the blessings of Allah, we invite you to share in our joy',
  },
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Gracious, the Most Merciful',
  quranVerse: {
    surah: 'Az-Zumar',
    ayah: 6,
    reference: 'Surah Az-Zumar · 39:6',
    arabic:
      'خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا لِيَسْكُنَ إِلَيْهَا',
    translation:
      'He created you from a single soul, then made from it its mate, that you may find tranquility in one another.',
  },
  images: {
    hero: '/images/hero-couple-veil.jpg',
    quran:
      'https://images.unsplash.com/photo-1591604466107-d94487557561?auto=format&fit=crop&w=1920&q=80',
  },
  venue: {
    name: 'White Castle Auditorium',
    area: 'Kannancheri',
    city: 'Calicut',
    state: 'Kerala',
    full: 'White Castle Auditorium, Kannancheri, Calicut',
    address: 'White Castle Auditorium, Kannancheri, Calicut, Kerala',
    landmark: 'Kannancheri, Calicut',
    mapsQuery: 'White Castle Auditorium, Kannancheri, Calicut, Kerala',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=White+Castle+Auditorium+Kannancheri+Calicut+Kerala',
    embedUrl:
      'https://maps.google.com/maps?q=White+Castle+Auditorium,+Kannancheri,+Calicut,+Kerala&z=15&ie=UTF8&iwloc=&output=embed',
  },
  sections: {
    venue: {
      label: 'Find Us',
      title: 'The Venue',
      subtitle: 'Directions to our celebration venue',
    },
    story: {
      label: 'A Note from Our Family',
      title: 'With Love & Dua',
    },
    quran: {
      eyebrow: 'From the Quran',
    },
  },
  story: {
    title: 'A Note from Our Family',
    paragraphs: [
      `It is with immense joy and gratitude to Allah that we announce the wedding of our beloved son ${groom.name} to ${bride.name}.`,
      'We would be honoured to have you with us on this blessed day — to share in our happiness and bless them as they begin this beautiful chapter together.',
    ],
  },
  contact: {
    phone: groom.phone,
    phoneDisplay: groom.phoneDisplay,
    hostLabel: 'For enquiries, please contact the groom\'s family',
  },
}
