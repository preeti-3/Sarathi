const fs = require('fs');
const path = require('path');

// Chapter 13 - Kshetra Kshetrajna Vibhaga Yoga (The Yoga of the Field and the Knower of the Field) - All 35 verses
const chapter13Verses = [
    {
        id: "13-1",
        chapter: 13,
        verse: 1,
        sanskrit: "अर्जुन उवाच। प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च। एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव॥",
        transliteration: "arjuna uvācha prakṛitiṁ puruṣhaṁ chaiva kṣhetraṁ kṣhetra-jñam eva cha etad veditum ichchhāmi jñānaṁ jñeyaṁ cha keśhava",
        simpleMeaning: "Arjuna said: O Keshava, I wish to know about Prakriti (Nature) and Purusha (the Soul), the field and the knower of the field, knowledge and the object of knowledge.",
        practicalExplanation: "Arjuna asks fundamental questions about the relationship between matter and spirit, body and soul, wisdom and its goal. This chapter will reveal the deepest understanding of who we truly are beyond the body.",
        strengthReflection: "I seek to understand the difference between my body (the field) and my true self (the knower).",
        devotionalSurrender: "O Lord, teach me the distinction between matter and spirit, so I may know my true nature.",
        emotions: ["curiosity", "seeking", "wisdom"],
        audioUrl: null
    },
    {
        id: "13-2",
        chapter: 13,
        verse: 2,
        sanskrit: "श्रीभगवानुवाच। इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते। एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः॥",
        transliteration: "śhrī bhagavān uvācha idaṁ śharīraṁ kaunteya kṣhetram ity abhidhīyate etad yo vetti taṁ prāhuḥ kṣhetra-jña iti tad-vidaḥ",
        simpleMeaning: "The Supreme Lord said: This body, O son of Kunti, is called the field. One who knows this is called the knower of the field by those who know.",
        practicalExplanation: "Krishna defines the key terms: the body is the field (kshetra) — the arena where experiences occur. The soul who witnesses and knows the body is the knower (kshetrajna). Recognizing this distinction is the beginning of wisdom.",
        strengthReflection: "My body is the field of action; I am the conscious witness who knows it.",
        devotionalSurrender: "O Lord, help me realize that I am not this body but the eternal knower within.",
        emotions: ["awareness", "clarity", "wisdom"],
        audioUrl: null
    },
    {
        id: "13-3",
        chapter: 13,
        verse: 3,
        sanskrit: "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत। क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥",
        transliteration: "kṣhetra-jñaṁ chāpi māṁ viddhi sarva-kṣhetreṣhu bhārata kṣhetra-kṣhetra-jñayor jñānaṁ yat taj jñānaṁ mataṁ mama",
        simpleMeaning: "Know Me also as the knower in all fields, O Bharata. The knowledge of both the field and the knower — that I consider true knowledge.",
        practicalExplanation: "A profound revelation: Krishna is the supreme knower present in all bodies. The individual soul knows its own body; God knows all bodies. True knowledge is understanding both the field (matter) and its knower (spirit).",
        strengthReflection: "God is the supreme knower present within all beings, including me.",
        devotionalSurrender: "O Lord, You are the supreme knower in all fields. Help me know You within my heart.",
        emotions: ["reverence", "insight", "unity"],
        audioUrl: null
    },
    {
        id: "13-4",
        chapter: 13,
        verse: 4,
        sanskrit: "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत्। स च यो यत्प्रभावश्च तत्समासेन मे शृणु॥",
        transliteration: "tat kṣhetraṁ yach cha yādṛik cha yad-vikāri yataśh cha yat sa cha yo yat-prabhāvaśh cha tat samāsena me śhṛiṇu",
        simpleMeaning: "Hear from Me briefly what that field is, what its nature is, what its modifications are, from what it arises, who the knower is, and what his powers are.",
        practicalExplanation: "Krishna promises to explain: (1) what the field is, (2) its nature, (3) its changes, (4) its origin, (5) who the knower is, and (6) the knower's powers. These six aspects cover complete knowledge of matter and spirit.",
        strengthReflection: "Complete knowledge includes understanding both the field and the knower fully.",
        devotionalSurrender: "O Lord, reveal to me the complete knowledge of body and soul.",
        emotions: ["anticipation", "openness", "learning"],
        audioUrl: null
    },
    {
        id: "13-5",
        chapter: 13,
        verse: 5,
        sanskrit: "ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक्। ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः॥",
        transliteration: "ṛiṣhibhir bahudhā gītaṁ chhandobhir vividhaiḥ pṛithak brahma-sūtra-padaiśh chaiva hetumadbhir viniśhchitaiḥ",
        simpleMeaning: "This knowledge has been sung by sages in various ways, in various Vedic hymns, and especially in the well-reasoned conclusions of the Brahma Sutras.",
        practicalExplanation: "Krishna acknowledges that many sages have taught this knowledge through Vedic hymns and philosophical texts like the Brahma Sutras. The Gita synthesizes this wisdom for practical application.",
        strengthReflection: "The wisdom of the Gita is supported by the entire tradition of spiritual knowledge.",
        devotionalSurrender: "O Lord, I receive this timeless wisdom taught by all sages through You.",
        emotions: ["respect", "tradition", "reverence"],
        audioUrl: null
    },
    {
        id: "13-6",
        chapter: 13,
        verse: 6,
        sanskrit: "महाभूतान्यहंकारो बुद्धिरव्यक्तमेव च। इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः॥",
        transliteration: "mahā-bhūtāny ahaṅkāro buddhir avyaktam eva cha indriyāṇi daśhaikaṁ cha pañcha chendriya-gocharāḥ",
        simpleMeaning: "The five great elements, ego, intellect, the unmanifest, the ten senses and one (mind), and the five objects of the senses...",
        practicalExplanation: "The field consists of: five elements (earth, water, fire, air, ether), ego (ahamkara), intellect (buddhi), unmanifest matter, eleven senses (five knowing, five working, plus mind), and five sense objects (sound, touch, form, taste, smell).",
        strengthReflection: "I understand that my body-mind complex is made of these material elements.",
        devotionalSurrender: "O Lord, help me see these components clearly so I may transcend identification with them.",
        emotions: ["analysis", "clarity", "understanding"],
        audioUrl: null
    },
    {
        id: "13-7",
        chapter: 13,
        verse: 7,
        sanskrit: "इच्छा द्वेषः सुखं दुःखं सङ्घातश्चेतना धृतिः। एतत्क्षेत्रं समासेन सविकारमुदाहृतम्॥",
        transliteration: "ichchhā dveṣhaḥ sukhaṁ duḥkhaṁ saṅghātaśh chetanā dhṛitiḥ etat kṣhetraṁ samāsena sa-vikāram udāhṛitam",
        simpleMeaning: "...desire, aversion, pleasure, pain, the aggregate body, consciousness, and fortitude — this is the field described briefly with its modifications.",
        practicalExplanation: "The field also includes psychological aspects: desire, aversion, pleasure, pain, the physical body, consciousness (reflected in the body), and determination. All these experiences occur in the field — we are the witness.",
        strengthReflection: "Even my desires, aversions, pleasures, and pains belong to the field — I am the witness.",
        devotionalSurrender: "O Lord, let me witness all experiences without being bound by identification.",
        emotions: ["detachment", "observation", "freedom"],
        audioUrl: null
    },
    {
        id: "13-8",
        chapter: 13,
        verse: 8,
        sanskrit: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः॥",
        transliteration: "amānitvam adambhitvam ahiṁsā kṣhāntir ārjavam āchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ",
        simpleMeaning: "Humility, unpretentiousness, non-violence, forgiveness, straightforwardness, service to the teacher, purity, steadiness, self-control...",
        practicalExplanation: "Now Krishna lists qualities that constitute true knowledge. First: humility, sincerity, non-violence, patience, honesty, devotion to the teacher, inner and outer purity, stability, and self-mastery. These virtues lead to wisdom.",
        strengthReflection: "I cultivate humility, non-violence, patience, honesty, purity, and self-control.",
        devotionalSurrender: "O Lord, develop these foundational virtues within me.",
        emotions: ["humility", "purity", "discipline"],
        audioUrl: null
    },
    {
        id: "13-9",
        chapter: 13,
        verse: 9,
        sanskrit: "इन्द्रियार्थेषु वैराग्यमनहंकार एव च। जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम्॥",
        transliteration: "indriyārtheṣhu vairāgyam anahaṅkāra eva cha janma-mṛityu-jarā-vyādhi-duḥkha-doṣhānudarśhanam",
        simpleMeaning: "...detachment from sense objects, absence of ego, perceiving the evils of birth, death, old age, disease, and suffering...",
        practicalExplanation: "True knowledge includes: detachment from sense pleasures, freedom from ego, and clear perception of the suffering inherent in birth, death, aging, and disease. Seeing life's inevitable pains motivates spiritual seeking.",
        strengthReflection: "I see clearly that birth, death, aging, and disease are inevitable sufferings in material existence.",
        devotionalSurrender: "O Lord, grant me detachment and freedom from ego through clear seeing.",
        emotions: ["detachment", "clarity", "motivation"],
        audioUrl: null
    },
    {
        id: "13-10",
        chapter: 13,
        verse: 10,
        sanskrit: "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु। नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु॥",
        transliteration: "asaktir anabhiṣhvaṅgaḥ putra-dāra-gṛihādiṣhu nityaṁ cha sama-chittatvam iṣhṭāniṣhṭopapattiṣhu",
        simpleMeaning: "...non-attachment, non-identification with son, wife, home and the like, constant equanimity amid pleasant and unpleasant events...",
        practicalExplanation: "Knowledge includes non-attachment to family and possessions — not abandoning duties but holding lightly. Also, maintaining equanimity when pleasant or unpleasant events occur. This balance indicates spiritual maturity.",
        strengthReflection: "I love without clutching and remain balanced in both pleasant and unpleasant situations.",
        devotionalSurrender: "O Lord, grant me loving detachment and constant equanimity.",
        emotions: ["equanimity", "detachment", "balance"],
        audioUrl: null
    },
    {
        id: "13-11",
        chapter: 13,
        verse: 11,
        sanskrit: "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी। विविक्तदेशसेवित्वमरतिर्जनसंसदि॥",
        transliteration: "mayi chānanya-yogena bhaktir avyabhichāriṇī vivikta-deśha-sevitvam aratir jana-saṁsadi",
        simpleMeaning: "...unwavering devotion to Me through exclusive yoga, preference for solitude, distaste for crowds...",
        practicalExplanation: "True knowledge includes exclusive devotion to God, preference for quiet places conducive to contemplation, and natural distaste for worldly gatherings. Solitude supports inner focus and spiritual growth.",
        strengthReflection: "I cultivate exclusive devotion to God and seek solitude for spiritual growth.",
        devotionalSurrender: "O Lord, let my devotion to You be unwavering and exclusive.",
        emotions: ["devotion", "solitude", "focus"],
        audioUrl: null
    },
    {
        id: "13-12",
        chapter: 13,
        verse: 12,
        sanskrit: "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम्। एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा॥",
        transliteration: "adhyātma-jñāna-nityatvaṁ tattva-jñānārtha-darśhanam etaj jñānam iti proktam ajñānaṁ yad ato 'nyathā",
        simpleMeaning: "...constancy in self-knowledge, perception of the purpose of true knowledge — this is declared to be knowledge. What is contrary to this is ignorance.",
        practicalExplanation: "The list concludes: constant engagement in self-knowledge and understanding wisdom's goal (liberation). All these qualities together constitute true knowledge (jnana); their absence is ignorance (ajnana).",
        strengthReflection: "I am constantly engaged in self-knowledge, understanding that this leads to liberation.",
        devotionalSurrender: "O Lord, establish me in true knowledge and remove all ignorance.",
        emotions: ["commitment", "understanding", "liberation"],
        audioUrl: null
    },
    {
        id: "13-13",
        chapter: 13,
        verse: 13,
        sanskrit: "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते। अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते॥",
        transliteration: "jñeyaṁ yat tat pravakṣhyāmi yaj jñātvāmṛitam aśhnute anādi mat-paraṁ brahma na sat tan nāsad uchyate",
        simpleMeaning: "I shall now describe that which is to be known, knowing which one attains immortality — the beginningless Supreme Brahman, said to be neither being nor non-being.",
        practicalExplanation: "Now Krishna describes the object of knowledge: Brahman — beginningless, supreme, beyond conventional categories of existence and non-existence. Knowing This brings immortality. Brahman transcends all dualities.",
        strengthReflection: "The goal of knowledge is the Supreme Brahman, beyond all categories.",
        devotionalSurrender: "O Lord, reveal Yourself to me — the supreme reality beyond being and non-being.",
        emotions: ["transcendence", "awe", "seeking"],
        audioUrl: null
    },
    {
        id: "13-14",
        chapter: 13,
        verse: 14,
        sanskrit: "सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम्। सर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति॥",
        transliteration: "sarvataḥ pāṇi-pādaṁ tat sarvato 'kṣhi-śhiro-mukham sarvataḥ śhrutimal loke sarvam āvṛitya tiṣhṭhati",
        simpleMeaning: "With hands and feet everywhere, eyes, heads, and faces everywhere, with ears everywhere — That exists pervading all.",
        practicalExplanation: "Brahman has hands, feet, eyes, heads, faces, and ears everywhere — not literally, but by being present in all beings. God sees through all eyes, acts through all hands, hears through all ears. Divine omnipresence is described poetically.",
        strengthReflection: "God is present everywhere, seeing, acting, and hearing through all beings.",
        devotionalSurrender: "O Lord, You are in all beings. May I see You everywhere.",
        emotions: ["omnipresence", "unity", "wonder"],
        audioUrl: null
    },
    {
        id: "13-15",
        chapter: 13,
        verse: 15,
        sanskrit: "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम्। असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च॥",
        transliteration: "sarvendriya-guṇābhāsaṁ sarvendriya-vivarjitam asaktaṁ sarva-bhṛich chaiva nirguṇaṁ guṇa-bhoktṛi cha",
        simpleMeaning: "Reflecting the functions of all senses yet without senses, unattached yet supporting all, free from the gunas yet experiencing them.",
        practicalExplanation: "Brahman illumines all sense activities without possessing senses, supports everything without attachment, is beyond the three gunas yet experiences them through beings. This describes God's transcendent immanence — present yet beyond.",
        strengthReflection: "God supports all without attachment, transcends all qualities yet experiences them.",
        devotionalSurrender: "O Lord, though beyond all, You are the support and experiencer within all.",
        emotions: ["paradox", "wonder", "transcendence"],
        audioUrl: null
    },
    {
        id: "13-16",
        chapter: 13,
        verse: 16,
        sanskrit: "बहिरन्तश्च भूतानामचरं चरमेव च। सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत्॥",
        transliteration: "bahir antaśh cha bhūtānām acharaṁ charam eva cha sūkṣhmatvāt tad avijñeyaṁ dūra-sthaṁ chāntike cha tat",
        simpleMeaning: "Outside and inside all beings, unmoving yet moving, unknowable due to subtlety, far away and yet near.",
        practicalExplanation: "Brahman is outside all beings as the cosmic reality and inside as the inner self. Unmoving as the absolute, yet appearing to move in manifestations. So subtle as to be unknowable to the senses. Far away (transcendent) yet near (immanent).",
        strengthReflection: "God is both far and near, outside and inside, still and moving.",
        devotionalSurrender: "O Lord, though You seem far, You are nearer than my own heart.",
        emotions: ["intimacy", "vastness", "presence"],
        audioUrl: null
    },
    {
        id: "13-17",
        chapter: 13,
        verse: 17,
        sanskrit: "अविभक्तं च भूतेषु विभक्तमिव च स्थितम्। भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च॥",
        transliteration: "avibhaktaṁ cha bhūteṣhu vibhaktam iva cha sthitam bhūta-bhartṛi cha taj jñeyaṁ grasiṣhṇu prabhaviṣhṇu cha",
        simpleMeaning: "Undivided, yet seeming divided among beings; the sustainer, devourer, and creator of all beings — know That as the knowable.",
        practicalExplanation: "Though Brahman is one and undivided, it appears divided among beings like space appears divided in pots. Brahman sustains all (as Vishnu), dissolves all (as Shiva), and creates all (as Brahma). This is what is to be known.",
        strengthReflection: "One God appears as many, sustaining, dissolving, and creating all beings.",
        devotionalSurrender: "O Lord, You are one yet appear as many. You are creator, sustainer, and dissolver.",
        emotions: ["unity", "diversity", "understanding"],
        audioUrl: null
    },
    {
        id: "13-18",
        chapter: 13,
        verse: 18,
        sanskrit: "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते। ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम्॥",
        transliteration: "jyotiṣhām api taj jyotis tamasaḥ param uchyate jñānaṁ jñeyaṁ jñāna-gamyaṁ hṛidi sarvasya viṣhṭhitam",
        simpleMeaning: "That is the light of all lights, said to be beyond darkness. It is knowledge, the object of knowledge, and the goal of knowledge, seated in the hearts of all.",
        practicalExplanation: "Brahman is the light illuminating all lights — the sun borrows its brilliance from That. Beyond all darkness of ignorance. It is knowledge itself, what is to be known, and the destination reached through knowledge. Present in every heart.",
        strengthReflection: "The Divine light is in my heart, the knowledge, the known, and the goal.",
        devotionalSurrender: "O Lord, You are the light of my heart. Illuminate my darkness with Your presence.",
        emotions: ["light", "knowledge", "inner presence"],
        audioUrl: null
    },
    {
        id: "13-19",
        chapter: 13,
        verse: 19,
        sanskrit: "इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः। मद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते॥",
        transliteration: "iti kṣhetraṁ tathā jñānaṁ jñeyaṁ choktaṁ samāsataḥ mad-bhakta etad vijñāya mad-bhāvāyopapadyate",
        simpleMeaning: "Thus the field, knowledge, and the object of knowledge have been briefly described. My devotee, understanding this, attains My nature.",
        practicalExplanation: "Krishna summarizes: the field (body-mind), knowledge (virtues and understanding), and the knowable (Brahman) have been described. The devotee who understands this attains Krishna's own nature — divine consciousness.",
        strengthReflection: "Understanding the field, knowledge, and the knowable, I attain divine nature.",
        devotionalSurrender: "O Lord, through understanding these truths, may I attain Your divine nature.",
        emotions: ["completion", "aspiration", "devotion"],
        audioUrl: null
    },
    {
        id: "13-20",
        chapter: 13,
        verse: 20,
        sanskrit: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि। विकारांश्च गुणांश्चैव विद्धि प्रकृतिसंभवान्॥",
        transliteration: "prakṛitiṁ puruṣhaṁ chaiva viddhy anādī ubhāv api vikārāṁśh cha guṇāṁśh chaiva viddhi prakṛiti-sambhavān",
        simpleMeaning: "Know that both Prakriti (Nature) and Purusha (Soul) are beginningless. Know also that modifications and qualities arise from Prakriti.",
        practicalExplanation: "Both matter (Prakriti) and spirit (Purusha) are beginningless — eternally existing. All modifications (transformations of matter) and qualities (sattva, rajas, tamas) arise from Prakriti, not from the pure soul.",
        strengthReflection: "Matter and spirit are both eternal; changes and qualities belong to matter, not my true self.",
        devotionalSurrender: "O Lord, help me understand that all changes belong to nature, while I am eternal spirit.",
        emotions: ["clarity", "eternal perspective", "understanding"],
        audioUrl: null
    },
    {
        id: "13-21",
        chapter: 13,
        verse: 21,
        sanskrit: "कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते। पुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते॥",
        transliteration: "kārya-kāraṇa-kartṛitve hetuḥ prakṛitir uchyate puruṣhaḥ sukha-duḥkhānāṁ bhoktṛitve hetur uchyate",
        simpleMeaning: "Prakriti is said to be the cause of the body, senses, and their functions. The Purusha is said to be the cause of experiencing pleasure and pain.",
        practicalExplanation: "Prakriti (nature/matter) causes the body and its activities (objective reality). Purusha (soul) causes the experience of pleasure and pain (subjective consciousness). Body acts; soul experiences. This is the division of roles.",
        strengthReflection: "My body acts through nature; I experience through consciousness. Each has its role.",
        devotionalSurrender: "O Lord, help me understand that action belongs to nature while experience belongs to consciousness.",
        emotions: ["discernment", "understanding", "clarity"],
        audioUrl: null
    },
    {
        id: "13-22",
        chapter: 13,
        verse: 22,
        sanskrit: "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्। कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु॥",
        transliteration: "puruṣhaḥ prakṛiti-stho hi bhuṅkte prakṛiti-jān guṇān kāraṇaṁ guṇa-saṅgo 'sya sad-asad-yoni-janmasu",
        simpleMeaning: "The Purusha, seated in Prakriti, experiences the qualities born of Prakriti. Attachment to these qualities is the cause of birth in good and evil wombs.",
        practicalExplanation: "When the soul identifies with the body, it experiences nature's qualities as its own. This attachment to qualities causes rebirth — in good or evil circumstances based on karma. Identification is the root of bondage.",
        strengthReflection: "My identification with nature's qualities causes my bondage and rebirth.",
        devotionalSurrender: "O Lord, free me from identification with nature's qualities so I may be liberated.",
        emotions: ["awareness", "caution", "aspiration"],
        audioUrl: null
    },
    {
        id: "13-23",
        chapter: 13,
        verse: 23,
        sanskrit: "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः। परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः॥",
        transliteration: "upadraṣhṭānumantā cha bhartā bhoktā maheśhvaraḥ paramātmeti chāpy ukto dehe 'smin puruṣhaḥ paraḥ",
        simpleMeaning: "The Supreme Soul in this body is also called the witness, the permitter, the supporter, the experiencer, the Great Lord, and the Supreme Self.",
        practicalExplanation: "Within the body dwells the Supreme Soul with many functions: witness (observing all), permitter (allowing actions), supporter (sustaining existence), experiencer (conscious presence), Great Lord (supreme controller), and Supreme Self (beyond individual ego).",
        strengthReflection: "The Supreme Soul within me witnesses, permits, supports, experiences, and rules.",
        devotionalSurrender: "O Lord within, You are the witness, supporter, and ruler of my being.",
        emotions: ["inner presence", "surrender", "reverence"],
        audioUrl: null
    },
    {
        id: "13-24",
        chapter: 13,
        verse: 24,
        sanskrit: "य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह। सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते॥",
        transliteration: "ya evaṁ vetti puruṣhaṁ prakṛitiṁ cha guṇaiḥ saha sarvathā vartamāno 'pi na sa bhūyo 'bhijāyate",
        simpleMeaning: "One who thus knows the Purusha and Prakriti along with the gunas, however situated, is never born again.",
        practicalExplanation: "Whoever truly understands the soul, nature, and the three qualities — regardless of their current life situation — is freed from rebirth. Knowledge itself liberates. The understanding that 'I am not the body or its changes' ends bondage.",
        strengthReflection: "Understanding soul and nature with the gunas liberates me from rebirth.",
        devotionalSurrender: "O Lord, grant me this liberating knowledge that frees from all rebirth.",
        emotions: ["liberation", "knowledge", "freedom"],
        audioUrl: null
    },
    {
        id: "13-25",
        chapter: 13,
        verse: 25,
        sanskrit: "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना। अन्ये साङ्ख्येन योगेन कर्मयोगेन चापरे॥",
        transliteration: "dhyānenātmani paśhyanti kechid ātmānam ātmanā anye sāṅkhyena yogena karma-yogena chāpare",
        simpleMeaning: "Some perceive the Self within through meditation; others through the yoga of knowledge; still others through the yoga of action.",
        practicalExplanation: "Different paths lead to self-realization: some attain through meditation (dhyana yoga), others through philosophical knowledge (sankhya/jnana yoga), others through selfless action (karma yoga). The path varies; the goal is one.",
        strengthReflection: "I can realize the Self through meditation, knowledge, or selfless action.",
        devotionalSurrender: "O Lord, guide me to the path suited to my nature that leads to self-realization.",
        emotions: ["options", "hope", "acceptance"],
        audioUrl: null
    },
    {
        id: "13-26",
        chapter: 13,
        verse: 26,
        sanskrit: "अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते। तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः॥",
        transliteration: "anye tv evam ajānantaḥ śhrutvānyebhya upāsate te 'pi chātitaranty eva mṛityuṁ śhruti-parāyaṇāḥ",
        simpleMeaning: "Others, not knowing these paths, worship as they have heard from others. They too cross beyond death, devoted to what they have heard.",
        practicalExplanation: "Even those who don't understand philosophical paths can transcend death by faithfully following teachings they've heard from wise teachers. Faith and dedicated practice of received wisdom also leads to liberation.",
        strengthReflection: "Even without understanding all paths, I can transcend through faithful practice.",
        devotionalSurrender: "O Lord, I follow what I have heard with faith. Lead me beyond death.",
        emotions: ["faith", "humility", "dedication"],
        audioUrl: null
    },
    {
        id: "13-27",
        chapter: 13,
        verse: 27,
        sanskrit: "यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम्। क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ॥",
        transliteration: "yāvat sañjāyate kiñchit sattvaṁ sthāvara-jaṅgamam kṣhetra-kṣhetrajña-saṁyogāt tad viddhi bharatarṣhabha",
        simpleMeaning: "Whatever being is born, moving or unmoving, know that it arises from the union of the field and the knower of the field, O best of the Bharatas.",
        practicalExplanation: "All beings — mobile or immobile — arise from the union of matter (field) and spirit (knower). Life emerges where consciousness meets matter. This union creates all manifest existence.",
        strengthReflection: "All life arises from the union of matter and consciousness.",
        devotionalSurrender: "O Lord, in the union of field and knower, Your creative power manifests.",
        emotions: ["wonder", "understanding", "creation"],
        audioUrl: null
    },
    {
        id: "13-28",
        chapter: 13,
        verse: 28,
        sanskrit: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्। विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥",
        transliteration: "samaṁ sarveṣhu bhūteṣhu tiṣhṭhantaṁ parameśhvaram vinaśhyatsv avinaśhyantaṁ yaḥ paśhyati sa paśhyati",
        simpleMeaning: "One who sees the Supreme Lord dwelling equally in all beings, imperishable within the perishable — that one truly sees.",
        practicalExplanation: "True vision is seeing the same Supreme Lord in all beings — the imperishable soul within perishable bodies. One who sees this unity amidst diversity truly sees. This is the vision that liberates.",
        strengthReflection: "I strive to see the imperishable Lord equally present in all beings.",
        devotionalSurrender: "O Lord, grant me the vision to see You equally in all beings.",
        emotions: ["equality", "vision", "unity"],
        audioUrl: null
    },
    {
        id: "13-29",
        chapter: 13,
        verse: 29,
        sanskrit: "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्। न हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥",
        transliteration: "samaṁ paśhyan hi sarvatra samavasthitam īśhvaram na hinasty ātmanātmānaṁ tato yāti parāṁ gatim",
        simpleMeaning: "Seeing the Lord equally present everywhere, one does not harm the Self by the self, and thus attains the supreme goal.",
        practicalExplanation: "When you see God equally everywhere, you cannot harm others because you see yourself in them. By not hurting the Self (in others), you don't degrade yourself. This vision of unity leads to the highest goal.",
        strengthReflection: "Seeing God everywhere, I harm no one, protect my soul, and attain the highest.",
        devotionalSurrender: "O Lord, let me see You everywhere and harm none, attaining the supreme goal.",
        emotions: ["non-violence", "unity", "liberation"],
        audioUrl: null
    },
    {
        id: "13-30",
        chapter: 13,
        verse: 30,
        sanskrit: "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः। यः पश्यति तथात्मानमकर्तारं स पश्यति॥",
        transliteration: "prakṛityaiva cha karmāṇi kriyamāṇāni sarvaśhaḥ yaḥ paśhyati tathātmānam akartāraṁ sa paśhyati",
        simpleMeaning: "One who sees that all actions are performed by Prakriti alone and that the Self is not the doer — that one truly sees.",
        practicalExplanation: "True vision includes seeing that all actions are done by nature (Prakriti) through the body-mind, while the soul is the non-acting witness. The Self is akarta — non-doer. This understanding frees from ego and its karmic bondage.",
        strengthReflection: "I see that nature performs all actions while my true Self is the non-acting witness.",
        devotionalSurrender: "O Lord, let me realize that all actions are Yours through nature; I am the witness.",
        emotions: ["non-doership", "freedom", "clarity"],
        audioUrl: null
    },
    {
        id: "13-31",
        chapter: 13,
        verse: 31,
        sanskrit: "यदा भूतपृथग्भावमेकस्थमनुपश्यति। तत एव च विस्तारं ब्रह्म संपद्यते तदा॥",
        transliteration: "yadā bhūta-pṛithag-bhāvam eka-stham anupaśhyati tata eva cha vistāraṁ brahma sampadyate tadā",
        simpleMeaning: "When one perceives the diversity of beings as rooted in the One and their expansion as from That alone — then one attains Brahman.",
        practicalExplanation: "Liberation comes when you see all diverse beings rooted in one Source and their expansion emanating from That One. Unity in diversity, diversity from unity — this vision of the One in the many is the gateway to Brahman.",
        strengthReflection: "I see all diverse beings rooted in One and expanding from that One.",
        devotionalSurrender: "O Lord, reveal to me the One Source from which all diversity emerges.",
        emotions: ["unity", "diversity", "realization"],
        audioUrl: null
    },
    {
        id: "13-32",
        chapter: 13,
        verse: 32,
        sanskrit: "अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः। शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते॥",
        transliteration: "anāditvān nirguṇatvāt paramātmāyam avyayaḥ śharīra-stho 'pi kaunteya na karoti na lipyate",
        simpleMeaning: "Being beginningless and without qualities, this imperishable Supreme Self, though dwelling in the body, O Kaunteya, neither acts nor is tainted.",
        practicalExplanation: "The Supreme Self, being eternal and without material qualities, though residing in the body, neither performs actions nor is stained by them. Like space in a pot isn't affected by the pot's condition, the soul is untouched by bodily activities.",
        strengthReflection: "My true Self is eternal, quality-less, non-acting, and unstained by bodily activities.",
        devotionalSurrender: "O Lord, let me realize my unchanging, untainted nature beyond all bodily actions.",
        emotions: ["purity", "freedom", "transcendence"],
        audioUrl: null
    },
    {
        id: "13-33",
        chapter: 13,
        verse: 33,
        sanskrit: "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते। सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते॥",
        transliteration: "yathā sarva-gataṁ saukṣhmyād ākāśhaṁ nopalipyate sarvatrāvasthito dehe tathātmā nopalipyate",
        simpleMeaning: "As the all-pervading space is not tainted due to its subtlety, so the Self, though present everywhere in the body, is not tainted.",
        practicalExplanation: "Space pervades everything yet nothing sticks to it — because it is subtle. Similarly, the soul pervades the body without being tainted by its activities, emotions, or conditions. The soul's subtlety keeps it ever pure.",
        strengthReflection: "Like space, my soul pervades but is never tainted by what it pervades.",
        devotionalSurrender: "O Lord, let me realize my soul's purity like space — present everywhere, touching nothing.",
        emotions: ["purity", "freedom", "subtlety"],
        audioUrl: null
    },
    {
        id: "13-34",
        chapter: 13,
        verse: 34,
        sanskrit: "यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः। क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत॥",
        transliteration: "yathā prakāśhayaty ekaḥ kṛitsnaṁ lokam imaṁ raviḥ kṣhetraṁ kṣhetrī tathā kṛitsnaṁ prakāśhayati bhārata",
        simpleMeaning: "As the one sun illumines this whole world, so the Lord of the field illumines the entire field, O Bharata.",
        practicalExplanation: "Just as one sun illuminates the whole world without being divided, one soul illuminates the entire body. The knower of the field (soul/God) gives consciousness to the whole body-mind field. Consciousness is one; its reflections are many.",
        strengthReflection: "My one consciousness illuminates my entire body-mind, like the sun illuminates the world.",
        devotionalSurrender: "O Lord, You are the one light illuminating all fields of experience.",
        emotions: ["illumination", "consciousness", "unity"],
        audioUrl: null
    },
    {
        id: "13-35",
        chapter: 13,
        verse: 35,
        sanskrit: "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा। भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्॥",
        transliteration: "kṣhetra-kṣhetrajñayor evam antaraṁ jñāna-chakṣhuṣhā bhūta-prakṛiti-mokṣhaṁ cha ye vidur yānti te param",
        simpleMeaning: "Those who, with the eye of knowledge, perceive the difference between the field and the knower of the field, and the liberation from the nature of beings — they attain the Supreme.",
        practicalExplanation: "Those who discriminate between field (body-mind) and knower (soul), and understand how beings are liberated from material nature — they attain the Supreme. The 'eye of knowledge' is discriminative wisdom that sees what is real and unreal.",
        strengthReflection: "With the eye of knowledge, I discern field from knower and attain liberation.",
        devotionalSurrender: "O Lord, grant me the eye of knowledge to see the difference and attain the Supreme.",
        emotions: ["wisdom", "discernment", "liberation"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 13 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 13);

// Add Chapter 13 verses
existingData.shloks = [...filteredShloks, ...chapter13Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');