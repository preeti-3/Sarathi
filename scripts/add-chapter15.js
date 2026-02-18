const fs = require('fs');
const path = require('path');

// Chapter 15 - Purushottama Yoga (The Yoga of the Supreme Person) - All 20 verses
const chapter15Verses = [
    {
        id: "15-1",
        chapter: 15,
        verse: 1,
        sanskrit: "श्रीभगवानुवाच। ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्। छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥",
        transliteration: "śhrī bhagavān uvācha ūrdhva-mūlam adhaḥ-śhākham aśhvatthaṁ prāhur avyayam chhandānsi yasya parṇāni yas taṁ veda sa veda-vit",
        simpleMeaning: "The Supreme Lord said: They speak of an imperishable Ashvattha tree with roots above and branches below, whose leaves are the Vedas. One who knows this tree knows the Vedas.",
        practicalExplanation: "The world is compared to an eternal fig tree (Ashvattha) with roots in the Supreme (above) and branches spreading below. The Vedic hymns are its leaves. Understanding this metaphor of creation is knowing the essence of all scriptures.",
        strengthReflection: "I see the world as a cosmic tree rooted in the Divine, sustained by sacred knowledge.",
        devotionalSurrender: "O Lord, help me understand this cosmic tree rooted in You.",
        emotions: ["wonder", "understanding", "cosmic vision"],
        audioUrl: null
    },
    {
        id: "15-2",
        chapter: 15,
        verse: 2,
        sanskrit: "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा गुणप्रवृद्धा विषयप्रवालाः। अधश्च मूलान्यनुसन्ततानि कर्मानुबन्धीनि मनुष्यलोके॥",
        transliteration: "adhaśh chordhvaṁ prasṛitās tasya śhākhā guṇa-pravṛiddhā viṣhaya-pravālāḥ adhaśh cha mūlāny anusantatāni karmānubandhīni manuṣhya-loke",
        simpleMeaning: "Its branches extend below and above, nourished by the gunas, with sense objects as buds. Its roots stretch below, bound to actions in the human world.",
        practicalExplanation: "The tree's branches (life-forms) spread through all worlds, nourished by the three gunas. Sense objects are its tender shoots that attract us. Secondary roots (desires based on past karma) bind beings in the human world.",
        strengthReflection: "I see how desires and past actions bind me to this tree of worldly existence.",
        devotionalSurrender: "O Lord, help me understand the roots that bind me to worldly existence.",
        emotions: ["awareness", "bondage", "understanding"],
        audioUrl: null
    },
    {
        id: "15-3",
        chapter: 15,
        verse: 3,
        sanskrit: "न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च संप्रतिष्ठा। अश्वत्थमेनं सुविरूढमूलमसङ्गशस्त्रेण दृढेन छित्त्वा॥",
        transliteration: "na rūpam asyeha tathopalabhyate nānto na chādir na cha sampratiṣhṭhā aśhvattham enaṁ su-virūḍha-mūlam asaṅga-śhastreṇa dṛiḍhena chhittvā",
        simpleMeaning: "Its form is not perceived here as such, nor its end, beginning, or foundation. Cutting this firmly-rooted Ashvattha tree with the strong axe of non-attachment...",
        practicalExplanation: "This tree cannot be seen clearly from within — we cannot perceive its full extent, origin, or foundation while entangled in it. The only way to be free is to cut it with the sharp axe of non-attachment (asanga).",
        strengthReflection: "I use the axe of non-attachment to cut the roots binding me to worldly existence.",
        devotionalSurrender: "O Lord, sharpen my axe of non-attachment to cut through worldly bondage.",
        emotions: ["determination", "detachment", "resolve"],
        audioUrl: null
    },
    {
        id: "15-4",
        chapter: 15,
        verse: 4,
        sanskrit: "ततः पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूयः। तमेव चाद्यं पुरुषं प्रपद्ये यतः प्रवृत्तिः प्रसृता पुराणी॥",
        transliteration: "tataḥ padaṁ tat parimārgitavyaṁ yasmin gatā na nivartanti bhūyaḥ tam eva chādyaṁ puruṣhaṁ prapadye yataḥ pravṛittiḥ prasṛitā purāṇī",
        simpleMeaning: "Then that goal should be sought, reaching which one does not return again. 'I take refuge in that Primeval Person from whom the ancient activity has flowed.'",
        practicalExplanation: "After cutting attachments, seek the goal from which there is no return — liberation. Take refuge in the Primeval Person (God) from whom all creation originally flowed. This surrender is the way to eternal freedom.",
        strengthReflection: "I seek the supreme goal and take refuge in the Primeval Person.",
        devotionalSurrender: "O Lord, I take refuge in You, the Primeval Person from whom all flows.",
        emotions: ["surrender", "refuge", "ultimate goal"],
        audioUrl: null
    },
    {
        id: "15-5",
        chapter: 15,
        verse: 5,
        sanskrit: "निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः। द्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञैर्गच्छन्त्यमूढाः पदमव्ययं तत्॥",
        transliteration: "nirmāna-mohā jita-saṅga-doṣhā adhyātma-nityā vinivṛitta-kāmāḥ dvandvair vimuktāḥ sukha-duḥkha-saṁjñair gachchhanty amūḍhāḥ padam avyayaṁ tat",
        simpleMeaning: "Free from pride and delusion, victorious over the evil of attachment, ever dwelling in the Self, desires completely stilled, liberated from the pairs of opposites known as pleasure and pain — the undeluded reach that imperishable goal.",
        practicalExplanation: "Who reaches the eternal goal? Those free from ego and delusion, who conquered attachment, absorbed in the Self, free from desires, liberated from pleasure-pain dualities. These clear-minded ones attain the imperishable state.",
        strengthReflection: "I free myself from ego, attachment, and dualities to reach the eternal goal.",
        devotionalSurrender: "O Lord, free me from pride, delusion, and attachment so I may reach Your eternal abode.",
        emotions: ["freedom", "clarity", "liberation"],
        audioUrl: null
    },
    {
        id: "15-6",
        chapter: 15,
        verse: 6,
        sanskrit: "न तद्भासयते सूर्यो न शशाङ्को न पावकः। यद्गत्वा न निवर्तन्ते तद्धाम परमं मम॥",
        transliteration: "na tad bhāsayate sūryo na śhaśhāṅko na pāvakaḥ yad gatvā na nivartante tad dhāma paramaṁ mama",
        simpleMeaning: "Neither sun, nor moon, nor fire illumines that place — reaching it, none return. That is My supreme abode.",
        practicalExplanation: "Krishna's supreme abode is self-luminous — it doesn't need sun, moon, or fire for light. It is beyond material energy, eternal, and those who reach it never return to material existence. This is the ultimate destination.",
        strengthReflection: "The supreme abode is self-luminous, eternal, and beyond all return.",
        devotionalSurrender: "O Lord, let me reach Your supreme abode from which no one returns.",
        emotions: ["transcendence", "aspiration", "divine light"],
        audioUrl: null
    },
    {
        id: "15-7",
        chapter: 15,
        verse: 7,
        sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
        transliteration: "mamaivānśho jīva-loke jīva-bhūtaḥ sanātanaḥ manaḥ-ṣhaṣhṭhānīndriyāṇi prakṛiti-sthāni karṣhati",
        simpleMeaning: "An eternal fragment of Myself, having become a living soul in the world of life, draws to itself the mind and the five senses which rest in Prakriti.",
        practicalExplanation: "Every soul is an eternal fragment of God. When the soul enters material existence, it attracts a mind and five senses. This creates the body-mind complex. We are divine sparks temporarily clothed in matter.",
        strengthReflection: "I am an eternal fragment of God, temporarily associated with mind and senses.",
        devotionalSurrender: "O Lord, I am Your eternal part. Help me remember my divine origin.",
        emotions: ["divine identity", "belonging", "origin"],
        audioUrl: null
    },
    {
        id: "15-8",
        chapter: 15,
        verse: 8,
        sanskrit: "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः। गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात्॥",
        transliteration: "śharīraṁ yad avāpnoti yach chāpy utkrāmatīśhvaraḥ gṛihītvaitāni saṁyāti vāyur gandhān ivāśhayāt",
        simpleMeaning: "When the Lord (soul) acquires a body and when He leaves it, He takes these (mind and senses) and goes, as the wind carries scents from their source.",
        practicalExplanation: "When the soul enters a new body or leaves an old one, it carries the mind and sense impressions with it — like wind carrying fragrance from flowers. Death is just the soul moving with its subtle body to another form.",
        strengthReflection: "At death, I carry my mental impressions to the next body, like wind carries scent.",
        devotionalSurrender: "O Lord, purify my subtle body so I carry only Your fragrance into my next life.",
        emotions: ["understanding", "continuity", "transition"],
        audioUrl: null
    },
    {
        id: "15-9",
        chapter: 15,
        verse: 9,
        sanskrit: "श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च। अधिष्ठाय मनश्चायं विषयानुपसेवते॥",
        transliteration: "śhrotraṁ chakṣhuḥ sparśhanaṁ cha rasanaṁ ghrāṇam eva cha adhiṣhṭhāya manaśh chāyaṁ viṣhayān upasevate",
        simpleMeaning: "Presiding over the ear, eye, touch, taste, and smell, as well as the mind, he enjoys the objects of the senses.",
        practicalExplanation: "Once embodied, the soul presides over hearing, sight, touch, taste, smell, and mind — and through these enjoys sense objects. The soul is the enjoyer, the senses are instruments. Without the soul, senses cannot experience.",
        strengthReflection: "I am the conscious enjoyer presiding over my senses and mind.",
        devotionalSurrender: "O Lord, let me use my senses in Your service, not for mere sense enjoyment.",
        emotions: ["presence", "consciousness", "mastery"],
        audioUrl: null
    },
    {
        id: "15-10",
        chapter: 15,
        verse: 10,
        sanskrit: "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम्। विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः॥",
        transliteration: "utkrāmantaṁ sthitaṁ vāpi bhuñjānaṁ vā guṇānvitam vimūḍhā nānupaśhyanti paśhyanti jñāna-chakṣhuṣhaḥ",
        simpleMeaning: "The deluded do not perceive the soul departing, staying, or enjoying, associated with the gunas. But those with the eye of knowledge see.",
        practicalExplanation: "The ignorant cannot perceive the soul — whether it leaves the body, stays, or experiences the gunas. But those with wisdom-vision can see the soul's journey through bodies. Spiritual vision sees what physical eyes miss.",
        strengthReflection: "With the eye of wisdom, I perceive the soul's journey that the deluded miss.",
        devotionalSurrender: "O Lord, grant me the eye of knowledge to see the soul beyond the body.",
        emotions: ["wisdom", "insight", "spiritual vision"],
        audioUrl: null
    },
    {
        id: "15-11",
        chapter: 15,
        verse: 11,
        sanskrit: "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम्। यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः॥",
        transliteration: "yatanto yoginaśh chainaṁ paśhyanty ātmany avasthitam yatanto 'py akṛitātmāno nainaṁ paśhyanty achetasaḥ",
        simpleMeaning: "Striving yogis perceive this Self established in themselves. But the unrefined, though striving, do not perceive this Self, lacking in understanding.",
        practicalExplanation: "Sincere yogis, through effort and practice, perceive the Self within. But those with impure minds, even if they try, cannot see it — their hearts are not prepared. Inner purification is essential for self-realization.",
        strengthReflection: "Through sincere practice and purification, I strive to perceive the Self within.",
        devotionalSurrender: "O Lord, purify my heart so I may perceive the Self through devoted practice.",
        emotions: ["effort", "purification", "perception"],
        audioUrl: null
    },
    {
        id: "15-12",
        chapter: 15,
        verse: 12,
        sanskrit: "यदादित्यगतं तेजो जगद्भासयतेऽखिलम्। यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम्॥",
        transliteration: "yad āditya-gataṁ tejo jagad bhāsayate 'khilam yach chandramasi yach chāgnau tat tejo viddhi māmakam",
        simpleMeaning: "Know that the splendor in the sun that illumines the whole world, and that which is in the moon and in fire — that splendor is Mine.",
        practicalExplanation: "The light of the sun illuminating the world, the glow of the moon, the brilliance of fire — all this radiance is Krishna's. The universe's luminosity is God's splendor manifested. Every light reflects Divine light.",
        strengthReflection: "Every light I see — sun, moon, fire — is a reflection of God's splendor.",
        devotionalSurrender: "O Lord, let me see Your splendor in all sources of light.",
        emotions: ["wonder", "recognition", "divine presence"],
        audioUrl: null
    },
    {
        id: "15-13",
        chapter: 15,
        verse: 13,
        sanskrit: "गामाविश्य च भूतानि धारयाम्यहमोजसा। पुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः॥",
        transliteration: "gām āviśhya cha bhūtāni dhārayāmy aham ojasā puṣhṇāmi chauṣhadhīḥ sarvāḥ somo bhūtvā rasātmakaḥ",
        simpleMeaning: "Entering the earth, I sustain all beings by My power. Becoming the watery moon (Soma), I nourish all plants.",
        practicalExplanation: "God enters the earth and sustains all creatures through its nourishing power. As the moon's nectar (soma), He nourishes all plants with vital essence. Agriculture and nourishment depend on divine energy permeating nature.",
        strengthReflection: "God sustains all beings through the earth and nourishes all plants through the moon.",
        devotionalSurrender: "O Lord, I see Your sustaining presence in the earth and nourishing plants.",
        emotions: ["sustenance", "nourishment", "gratitude"],
        audioUrl: null
    },
    {
        id: "15-14",
        chapter: 15,
        verse: 14,
        sanskrit: "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः। प्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम्॥",
        transliteration: "ahaṁ vaiśhvānaro bhūtvā prāṇināṁ deham āśhritaḥ prāṇāpāna-samāyuktaḥ pachāmy annaṁ chatur-vidham",
        simpleMeaning: "Becoming the digestive fire (Vaishvanara) in the bodies of living beings, joined with Prana and Apana, I digest the four kinds of food.",
        practicalExplanation: "God becomes the digestive fire in every body. Working with incoming and outgoing breath (prana and apana), He digests all four types of food (chewed, sucked, licked, and drunk). Digestion is a divine process.",
        strengthReflection: "The fire that digests my food is divine presence working within me.",
        devotionalSurrender: "O Lord, I see You as the digestive fire nourishing my body from within.",
        emotions: ["gratitude", "inner presence", "nourishment"],
        audioUrl: null
    },
    {
        id: "15-15",
        chapter: 15,
        verse: 15,
        sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
        transliteration: "sarvasya chāhaṁ hṛidi sanniviṣhṭo mattaḥ smṛitir jñānam apohanaṁ cha vedaiśh cha sarvair aham eva vedyo vedānta-kṛid veda-vid eva chāham",
        simpleMeaning: "I am seated in the hearts of all. From Me come memory, knowledge, and their removal. I alone am to be known through all the Vedas. I am the author of Vedanta and the knower of the Vedas.",
        practicalExplanation: "God dwells in every heart. Memory, knowledge, and forgetfulness all come from Him. All Vedas aim to reveal Him. He is Vedanta's author and the Vedas' true knower. The innermost Self is God.",
        strengthReflection: "God is in my heart, the source of my memory, knowledge, and all understanding.",
        devotionalSurrender: "O Lord, You dwell in my heart. All my knowing and forgetting come from You.",
        emotions: ["inner presence", "source", "intimacy"],
        audioUrl: null
    },
    {
        id: "15-16",
        chapter: 15,
        verse: 16,
        sanskrit: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च। क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते॥",
        transliteration: "dvāv imau puruṣhau loke kṣharaśh chākṣhara eva cha kṣharaḥ sarvāṇi bhūtāni kūṭa-stho 'kṣhara uchyate",
        simpleMeaning: "There are two types of beings in the world: the perishable and the imperishable. All beings are perishable; the unchanging is called imperishable.",
        practicalExplanation: "Two types of Purusha (beings) exist: the perishable (all creatures — bodies that decay) and the imperishable (the eternal soul that doesn't change). Distinguishing between body and soul is fundamental wisdom.",
        strengthReflection: "My body is perishable; my soul is imperishable and unchanging.",
        devotionalSurrender: "O Lord, help me identify with the imperishable soul, not the perishable body.",
        emotions: ["discrimination", "clarity", "eternal perspective"],
        audioUrl: null
    },
    {
        id: "15-17",
        chapter: 15,
        verse: 17,
        sanskrit: "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः। यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः॥",
        transliteration: "uttamaḥ puruṣhas tv anyaḥ paramātmety udāhṛitaḥ yo loka-trayam āviśhya bibharty avyaya īśhvaraḥ",
        simpleMeaning: "But there is another, the Supreme Person, called the Supreme Self, the imperishable Lord who, pervading the three worlds, sustains them.",
        practicalExplanation: "Beyond perishable bodies and imperishable souls is a third: the Supreme Person (Purushottama). This is God — who pervades all three worlds (heaven, earth, underworld) and sustains everything. He is above both matter and individual souls.",
        strengthReflection: "Beyond perishable and imperishable is the Supreme Person who sustains all worlds.",
        devotionalSurrender: "O Lord, You are the Supreme Person, beyond all, sustaining all three worlds.",
        emotions: ["supremacy", "transcendence", "sustainer"],
        audioUrl: null
    },
    {
        id: "15-18",
        chapter: 15,
        verse: 18,
        sanskrit: "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः। अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः॥",
        transliteration: "yasmāt kṣharam atīto 'ham akṣharād api chottamaḥ ato 'smi loke vede cha prathitaḥ puruṣhottamaḥ",
        simpleMeaning: "Because I transcend the perishable and am even above the imperishable, I am known in the world and in the Vedas as the Supreme Person (Purushottama).",
        practicalExplanation: "Krishna declares His supreme position: He transcends perishable matter and is even above imperishable souls. Therefore scriptures and the world know Him as Purushottama — the Supreme Person, highest of all beings.",
        strengthReflection: "Krishna is Purushottama — above both the perishable and the imperishable.",
        devotionalSurrender: "O Lord, You are Purushottama, supreme above all. I worship You as the highest.",
        emotions: ["supremacy", "worship", "recognition"],
        audioUrl: null
    },
    {
        id: "15-19",
        chapter: 15,
        verse: 19,
        sanskrit: "यो मामेवमसंमूढो जानाति पुरुषोत्तमम्। स सर्वविद्भजति मां सर्वभावेन भारत॥",
        transliteration: "yo mām evam asaṁmūḍho jānāti puruṣhottamam sa sarva-vid bhajati māṁ sarva-bhāvena bhārata",
        simpleMeaning: "One who, undeluded, knows Me thus as the Supreme Person — that all-knowing one worships Me with all his being, O Bharata.",
        practicalExplanation: "Whoever knows Krishna as the Supreme Person without delusion — that person is all-knowing and worships Krishna with their entire being. Full understanding of Krishna's supremacy leads to complete devotion.",
        strengthReflection: "Knowing Krishna as the Supreme Person, I worship Him with my whole being.",
        devotionalSurrender: "O Lord, knowing You as Purushottama, I devote myself to You completely.",
        emotions: ["complete devotion", "wholeness", "worship"],
        audioUrl: null
    },
    {
        id: "15-20",
        chapter: 15,
        verse: 20,
        sanskrit: "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ। एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत॥",
        transliteration: "iti guhyatamaṁ śhāstram idam uktaṁ mayānagha etad buddhvā buddhimān syāt kṛita-kṛityaśh cha bhārata",
        simpleMeaning: "Thus this most secret teaching has been imparted by Me, O sinless one. Understanding this, one becomes wise and has fulfilled all duties, O Bharata.",
        practicalExplanation: "This is the most secret teaching — understanding the Supreme Person. Grasping this knowledge makes one truly wise and accomplishes life's purpose. Nothing more needs to be done. This is the culmination of wisdom.",
        strengthReflection: "Understanding this supreme teaching, I become wise and fulfill my life's purpose.",
        devotionalSurrender: "O Lord, having heard this secret teaching, let me be wise and complete.",
        emotions: ["completion", "wisdom", "fulfillment"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 15 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 15);

// Add Chapter 15 verses
existingData.shloks = [...filteredShloks, ...chapter15Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');