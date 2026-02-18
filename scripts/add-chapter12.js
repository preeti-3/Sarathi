const fs = require('fs');
const path = require('path');

// Chapter 12 - Bhakti Yoga (The Yoga of Devotion) - All 20 verses
const chapter12Verses = [
    {
        id: "12-1",
        chapter: 12,
        verse: 1,
        sanskrit: "अर्जुन उवाच। एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते। ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः॥",
        transliteration: "arjuna uvācha evaṁ satata-yuktā ye bhaktās tvāṁ paryupāsate ye chāpy akṣharam avyaktaṁ teṣhāṁ ke yoga-vittamāḥ",
        simpleMeaning: "Arjuna asked: Between those devotees who worship You as the personal form, always connected, and those who worship the imperishable, unmanifest Brahman — which are better versed in yoga?",
        practicalExplanation: "Arjuna asks the crucial question: is it better to worship a personal God or the impersonal absolute? This question touches the heart of spiritual practice. The answer will guide seekers in choosing their approach to the Divine.",
        strengthReflection: "I consider which approach to the Divine suits my nature and capacity.",
        devotionalSurrender: "O Lord, guide me to understand the best path for reaching You.",
        emotions: ["curiosity", "seeking", "sincerity"],
        audioUrl: null
    },
    {
        id: "12-2",
        chapter: 12,
        verse: 2,
        sanskrit: "श्रीभगवानुवाच। मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते। श्रद्धया परयोपेतास्ते मे युक्ततमा मताः॥",
        transliteration: "śhrī bhagavān uvācha mayy āveśhya mano ye māṁ nitya-yuktā upāsate śhraddhayā parayopetās te me yuktatamā matāḥ",
        simpleMeaning: "The Supreme Lord said: Those who fix their minds on Me and always worship Me with supreme faith — I consider them to be the most perfect in yoga.",
        practicalExplanation: "Krishna's clear answer: those who worship His personal form with mind focused, constant connection, and supreme faith are the most perfect yogis. This isn't dismissing other paths but recognizing that personal devotion is most accessible and effective for most seekers.",
        strengthReflection: "Personal devotion with focused mind and supreme faith is the most direct path.",
        devotionalSurrender: "O Lord, I fix my mind on You with utmost faith. Make me a perfect yogi.",
        emotions: ["faith", "devotion", "focus"],
        audioUrl: null
    },
    {
        id: "12-3",
        chapter: 12,
        verse: 3,
        sanskrit: "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते। सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम्॥",
        transliteration: "ye tv akṣharam anirdeśhyam avyaktaṁ paryupāsate sarvatra-gam achintyaṁ cha kūṭa-stham achalaṁ dhruvam",
        simpleMeaning: "But those who worship the imperishable, indefinable, unmanifest, all-pervading, inconceivable, unchanging, immovable, and eternal...",
        practicalExplanation: "Now Krishna describes the other path: worship of the formless absolute — imperishable, beyond description, unmanifest, everywhere, inconceivable, unchanging, immovable, eternal. These are valid attributes of the ultimate reality.",
        strengthReflection: "The formless Divine is real — imperishable, unchanging, beyond description.",
        devotionalSurrender: "O formless Lord, I honor Your aspect beyond all conception.",
        emotions: ["reverence", "transcendence", "humility"],
        audioUrl: null
    },
    {
        id: "12-4",
        chapter: 12,
        verse: 4,
        sanskrit: "सन्नियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः। ते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः॥",
        transliteration: "sanniyamyendriya-grāmaṁ sarvatra sama-buddhayaḥ te prāpnuvanti mām eva sarva-bhūta-hite ratāḥ",
        simpleMeaning: "...controlling all their senses, equal-minded everywhere, engaged in the welfare of all beings — they also attain Me.",
        practicalExplanation: "Those worshipping the formless also reach God — if they control senses, are equanimous everywhere, and serve all beings' welfare. The formless path requires these disciplines. Both paths reach the same destination, but with different requirements.",
        strengthReflection: "The formless path requires sense control, equanimity, and universal service.",
        devotionalSurrender: "O Lord, whether through form or formless, may I reach You through discipline.",
        emotions: ["discipline", "equanimity", "service"],
        audioUrl: null
    },
    {
        id: "12-5",
        chapter: 12,
        verse: 5,
        sanskrit: "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्। अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते॥",
        transliteration: "kleśho 'dhikataras teṣhām avyaktāsakta-chetasām avyaktā hi gatir duḥkhaṁ dehavadbhir avāpyate",
        simpleMeaning: "Greater is the difficulty for those whose minds are attached to the unmanifest, for the path of the unmanifest is hard for embodied beings to attain.",
        practicalExplanation: "Here's the practical consideration: the formless path is harder for embodied beings. We have bodies and minds that naturally attach to forms. Pursuing the formless requires greater struggle (klesha). The personal path, while equally valid, is more natural for humans.",
        strengthReflection: "I acknowledge my embodied nature and choose a path suited to it.",
        devotionalSurrender: "O Lord, guide me to the path suited to my nature. Help me avoid needless struggle.",
        emotions: ["practicality", "wisdom", "self-awareness"],
        audioUrl: null
    },
    {
        id: "12-6",
        chapter: 12,
        verse: 6,
        sanskrit: "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः। अनन्येनैव योगेन मां ध्यायन्त उपासते॥",
        transliteration: "ye tu sarvāṇi karmāṇi mayi sannyasya mat-parāḥ ananyenaiva yogena māṁ dhyāyanta upāsate",
        simpleMeaning: "But those who worship Me, dedicating all actions to Me, regarding Me as the Supreme, meditating on Me with exclusive devotion...",
        practicalExplanation: "Krishna describes the personal devotee: all actions offered to Him, He is the supreme goal, meditation is on Him alone, devotion is exclusive. This verse begins the promise to such devotees.",
        strengthReflection: "I dedicate all actions to God, make God my supreme goal, meditate exclusively on God.",
        devotionalSurrender: "O Lord, all my actions are Yours. You are my supreme goal. I meditate on You alone.",
        emotions: ["dedication", "surrender", "focus"],
        audioUrl: null
    },
    {
        id: "12-7",
        chapter: 12,
        verse: 7,
        sanskrit: "तेषामहं समुद्धर्ता मृत्युसंसारसागरात्। भवामि नचिरात्पार्थ मय्यावेशितचेतसाम्॥",
        transliteration: "teṣhām ahaṁ samuddhartā mṛityu-sansāra-sāgarāt bhavāmi na chirāt pārtha mayy āveśhita-chetasām",
        simpleMeaning: "...for those whose minds are absorbed in Me, I become their swift deliverer from the ocean of mortal existence, O Arjuna.",
        practicalExplanation: "The magnificent promise: for those absorbed in Krishna, He Himself becomes the deliverer from the ocean of death and rebirth. And not eventually, but swiftly (na chirat). Personal devotion brings swift divine rescue.",
        strengthReflection: "The Divine Himself rescues those absorbed in Him from the ocean of mortality.",
        devotionalSurrender: "O Lord, my mind is absorbed in You. Be my swift deliverer from all suffering.",
        emotions: ["hope", "faith", "surrender"],
        audioUrl: null
    },
    {
        id: "12-8",
        chapter: 12,
        verse: 8,
        sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय। निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥",
        transliteration: "mayy eva mana ādhatsva mayi buddhiṁ niveśhaya nivasiṣhyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ",
        simpleMeaning: "Fix your mind on Me alone, let your intellect dwell in Me. Thereafter you shall live in Me alone. Of this there is no doubt.",
        practicalExplanation: "The instruction: put your mind (manas) on Me, place your intellect (buddhi) in Me. The result is living in God — not just after death but now and ever after. No doubt about this. Mind and intellect, both given to God, ensure divine dwelling.",
        strengthReflection: "I give my mind and intellect to God and thereby live in God.",
        devotionalSurrender: "O Lord, my mind is on You, my intellect rests in You. Let me live in You always.",
        emotions: ["focus", "surrender", "assurance"],
        audioUrl: null
    },
    {
        id: "12-9",
        chapter: 12,
        verse: 9,
        sanskrit: "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम्। अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय॥",
        transliteration: "atha chittaṁ samādhātuṁ na śhaknoṣhi mayi sthiram abhyāsa-yogena tato mām ichchhāptuṁ dhanañjaya",
        simpleMeaning: "If you cannot fix your mind steadily on Me, then seek to reach Me through the yoga of practice (repetition), O Arjuna.",
        practicalExplanation: "If steady focus isn't possible (which is normal for most), then practice repeatedly. Abhyasa yoga — the discipline of repetition — develops the capacity that isn't natural at first. Keep trying; consistency builds capability.",
        strengthReflection: "If steady focus is hard, I practice repeatedly. Consistency builds capability.",
        devotionalSurrender: "O Lord, when steady focus fails, I return again and again through practice.",
        emotions: ["perseverance", "patience", "practice"],
        audioUrl: null
    },
    {
        id: "12-10",
        chapter: 12,
        verse: 10,
        sanskrit: "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव। मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि॥",
        transliteration: "abhyāse 'py asamartho 'si mat-karma-paramo bhava mad-artham api karmāṇi kurvan siddhim avāpsyasi",
        simpleMeaning: "If you are unable even to practice, be intent on acting for My sake. Even by performing actions for My sake, you shall attain perfection.",
        practicalExplanation: "Even if formal practice is difficult, work for God's sake. Dedicate your actions to the Divine. Karma yoga becomes bhakti yoga when actions are offered to God. This is accessible to everyone — even busy people can work for God.",
        strengthReflection: "Even when I can't practice formally, I dedicate my work to God.",
        devotionalSurrender: "O Lord, I work for Your sake. Accept my actions as my offering.",
        emotions: ["dedication", "practicality", "service"],
        audioUrl: null
    },
    {
        id: "12-11",
        chapter: 12,
        verse: 11,
        sanskrit: "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः। सर्वकर्मफलत्यागं ततः कुरु यतात्मवान्॥",
        transliteration: "athaitad apy aśhakto 'si kartuṁ mad-yogam āśhritaḥ sarva-karma-phala-tyāgaṁ tataḥ kuru yatātmavān",
        simpleMeaning: "If you are unable to do even this, then taking refuge in My yoga, renounce the fruits of all actions with self-control.",
        practicalExplanation: "The final fallback: if even working for God seems impossible, simply renounce the fruits of your actions while taking refuge in divine yoga. Don't cling to results. This inner renunciation purifies even ordinary actions.",
        strengthReflection: "At minimum, I can renounce the fruits of my actions and take refuge in God.",
        devotionalSurrender: "O Lord, I release my attachment to results and take refuge in You.",
        emotions: ["surrender", "release", "refuge"],
        audioUrl: null
    },
    {
        id: "12-12",
        chapter: 12,
        verse: 12,
        sanskrit: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते। ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्॥",
        transliteration: "śhreyo hi jñānam abhyāsāj jñānād dhyānaṁ viśhiṣhyate dhyānāt karma-phala-tyāgas tyāgāch chhāntir anantaram",
        simpleMeaning: "Knowledge is better than practice; meditation is better than knowledge; better than meditation is renunciation of the fruits of action — from such renunciation, peace immediately follows.",
        practicalExplanation: "A hierarchy: practice < knowledge < meditation < renunciation of results. But the deeper meaning: if you can't do the higher, do the next lower. The highest achievable practice for you is best. And from renouncing results, peace immediately comes.",
        strengthReflection: "I do the highest practice I'm capable of, knowing peace comes from releasing results.",
        devotionalSurrender: "O Lord, grant me the capacity for higher practice, but always, I release attachment to results.",
        emotions: ["peace", "wisdom", "progression"],
        audioUrl: null
    },
    {
        id: "12-13",
        chapter: 12,
        verse: 13,
        sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
        transliteration: "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha nirmamo nirahankāraḥ sama-duḥkha-sukhaḥ kṣhamī",
        simpleMeaning: "One who has no hatred toward any being, who is friendly and compassionate, free from possessiveness and ego, balanced in pleasure and pain, forgiving...",
        practicalExplanation: "Now Krishna describes the ideal devotee: no hatred, friendly to all, compassionate, without possessiveness, free from ego, balanced in joy and sorrow, forgiving. These are the marks of one who has genuinely absorbed divine teaching.",
        strengthReflection: "I cultivate: no hatred, friendliness, compassion, non-possessiveness, humility, balance, forgiveness.",
        devotionalSurrender: "O Lord, shape me into such a devotee — friendly, forgiving, balanced, free.",
        emotions: ["aspiration", "transformation", "peace"],
        audioUrl: null
    },
    {
        id: "12-14",
        chapter: 12,
        verse: 14,
        sanskrit: "सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः। मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः॥",
        transliteration: "santuṣhṭaḥ satataṁ yogī yatātmā dṛiḍha-niśhchayaḥ mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ",
        simpleMeaning: "...always content, self-controlled, of firm determination, with mind and intellect dedicated to Me — such a devotee is dear to Me.",
        practicalExplanation: "More qualities: constant contentment, self-controlled, firmly determined, mind and intellect offered to God. Such a devotee is dear to Krishna. This phrase 'dear to Me' (priyah) is the refrain of this chapter — divine affection for the genuine devotee.",
        strengthReflection: "I aspire to be: content, self-controlled, firm, with mind and intellect on God.",
        devotionalSurrender: "O Lord, make me dear to You by making me content, controlled, and dedicated.",
        emotions: ["contentment", "determination", "devotion"],
        audioUrl: null
    },
    {
        id: "12-15",
        chapter: 12,
        verse: 15,
        sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
        transliteration: "yasmān nodvijate loko lokān nodvijate cha yaḥ harṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
        simpleMeaning: "One by whom the world is not agitated and who cannot be agitated by the world, who is free from joy, envy, fear, and anxiety — such a person is dear to Me.",
        practicalExplanation: "A beautiful bidirectional peace: the devotee doesn't disturb others, and isn't disturbed by others. Free from excessive joy, jealousy, fear, and anxious agitation. This equilibrium makes one dear to Krishna.",
        strengthReflection: "I neither disturb the world nor am disturbed by it — balanced in all emotions.",
        devotionalSurrender: "O Lord, grant me this bidirectional peace. Let me be a non-disturbing presence.",
        emotions: ["peace", "stability", "balance"],
        audioUrl: null
    },
    {
        id: "12-16",
        chapter: 12,
        verse: 16,
        sanskrit: "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः। सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः॥",
        transliteration: "anapekṣhaḥ śhuchir dakṣha udāsīno gata-vyathaḥ sarvārambha-parityāgī yo mad-bhaktaḥ sa me priyaḥ",
        simpleMeaning: "One who is without expectations, pure, skillful, impartial, free from anxiety, renouncing all selfish undertakings — such a devotee is dear to Me.",
        practicalExplanation: "More qualities: no expectations from others, inner and outer purity, capable and efficient, impartial, free from anxiety, renouncing self-serving initiatives. This devotee is free from the neediness that causes suffering.",
        strengthReflection: "I release expectations, cultivate purity, develop skill, remain impartial, renounce selfish projects.",
        devotionalSurrender: "O Lord, free me from expectations and anxiety. Make me pure and skillful.",
        emotions: ["freedom", "purity", "capability"],
        audioUrl: null
    },
    {
        id: "12-17",
        chapter: 12,
        verse: 17,
        sanskrit: "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति। शुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः॥",
        transliteration: "yo na hṛiṣhyati na dveṣhṭi na śhochati na kāṅkṣhati śhubhāśhubha-parityāgī bhaktimān yaḥ sa me priyaḥ",
        simpleMeaning: "One who neither rejoices nor hates, neither grieves nor desires, renouncing both good and bad, full of devotion — such a person is dear to Me.",
        practicalExplanation: "Equanimity in four directions: no excessive rejoicing, no hatred, no grieving, no craving. Renouncing attachment to both good and bad outcomes. Full of devotion. This is the balanced devotee dear to Krishna.",
        strengthReflection: "Neither excessive joy nor hatred, grief nor craving — I stand balanced in devotion.",
        devotionalSurrender: "O Lord, balance me in all circumstances. Let me be full of devotion alone.",
        emotions: ["equanimity", "balance", "devotion"],
        audioUrl: null
    },
    {
        id: "12-18",
        chapter: 12,
        verse: 18,
        sanskrit: "समः शत्रौ च मित्रे च तथा मानापमानयोः। शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः॥",
        transliteration: "samaḥ śhatrau cha mitre cha tathā mānāpamānayoḥ śhītoṣhṇa-sukha-duḥkheṣhu samaḥ saṅga-vivarjitaḥ",
        simpleMeaning: "Equal toward friend and foe, in honor and dishonor, in heat and cold, in pleasure and pain, free from attachment...",
        practicalExplanation: "Equanimity across opposites: friend and enemy, honor and disgrace, heat and cold, pleasure and pain. Free from attachment to any. This describes the mind that has truly transcended the pairs of opposites.",
        strengthReflection: "I treat friend and foe equally, remain balanced in all dualities.",
        devotionalSurrender: "O Lord, free me from attachment to pairs of opposites. Make me truly equal.",
        emotions: ["equanimity", "detachment", "stability"],
        audioUrl: null
    },
    {
        id: "12-19",
        chapter: 12,
        verse: 19,
        sanskrit: "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित्। अनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः॥",
        transliteration: "tulya-nindā-stutir maunī santuṣhṭo yena kenachit aniketaḥ sthira-matir bhaktimān me priyo naraḥ",
        simpleMeaning: "...one who is equal in blame and praise, silent, content with whatever comes, homeless, steady-minded, full of devotion — such a person is dear to Me.",
        practicalExplanation: "Equal in criticism and praise, inclined to silence, content with whatever comes, not attached to dwelling, steady-minded, full of devotion. These qualities describe true spiritual freedom — nothing can shake such a devotee.",
        strengthReflection: "Criticism and praise are equal to me. I am content with whatever comes.",
        devotionalSurrender: "O Lord, steady my mind, content my heart, fill me with devotion.",
        emotions: ["contentment", "steadiness", "devotion"],
        audioUrl: null
    },
    {
        id: "12-20",
        chapter: 12,
        verse: 20,
        sanskrit: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते। श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः॥",
        transliteration: "ye tu dharmyāmṛitam idaṁ yathoktaṁ paryupāsate śhraddadhānā mat-paramā bhaktās te 'tīva me priyāḥ",
        simpleMeaning: "But those who follow this immortal dharma as I have declared, with faith, regarding Me as the Supreme — such devoted ones are exceedingly dear to Me.",
        practicalExplanation: "The chapter concludes: those who follow this immortal teaching with faith, taking Krishna as supreme, are exceedingly (ativa) dear. Not just dear — supremely dear. Faith and practice of these teachings bring the devotee into divine favor.",
        strengthReflection: "Following these teachings with faith and supreme devotion makes me dear to God.",
        devotionalSurrender: "O Lord, I follow this immortal teaching with faith. You are my Supreme. Let me be dear to You.",
        emotions: ["devotion", "commitment", "love"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 12 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 12);

// Add Chapter 12 verses
existingData.shloks = [...filteredShloks, ...chapter12Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter12Verses.length} verses for Chapter 12. Total: ${existingData.shloks.length}`);
