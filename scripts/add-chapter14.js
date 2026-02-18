const fs = require('fs');
const path = require('path');

// Chapter 14 - Gunatraya Vibhaga Yoga (The Yoga of the Three Gunas) - All 27 verses
const chapter14Verses = [
    {
        id: "14-1",
        chapter: 14,
        verse: 1,
        sanskrit: "श्रीभगवानुवाच। परं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्। यज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः॥",
        transliteration: "śhrī bhagavān uvācha paraṁ bhūyaḥ pravakṣhyāmi jñānānāṁ jñānam uttamam yaj jñātvā munayaḥ sarve parāṁ siddhim ito gatāḥ",
        simpleMeaning: "The Supreme Lord said: I shall again declare that supreme knowledge, the best of all knowledge, knowing which all the sages have attained the highest perfection.",
        practicalExplanation: "Krishna introduces the teaching on the three gunas as the highest knowledge. All sages who understood this attained supreme perfection. This knowledge is the key to understanding material nature and transcending it.",
        strengthReflection: "I receive this supreme knowledge that leads to the highest perfection.",
        devotionalSurrender: "O Lord, share with me the highest knowledge that liberates all sages.",
        emotions: ["anticipation", "reverence", "readiness"],
        audioUrl: null
    },
    {
        id: "14-2",
        chapter: 14,
        verse: 2,
        sanskrit: "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः। सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च॥",
        transliteration: "idaṁ jñānam upāśhritya mama sādharmyam āgatāḥ sarge 'pi nopajāyante pralaye na vyathanti cha",
        simpleMeaning: "By resorting to this knowledge, having attained identity with Me, they are not born at creation nor disturbed at dissolution.",
        practicalExplanation: "Those who grasp this knowledge attain God's own nature — same qualities, same freedom. They are beyond the cosmic cycles of creation and dissolution, unaffected by universal beginnings and endings.",
        strengthReflection: "This knowledge leads me to God's nature, beyond all cosmic cycles.",
        devotionalSurrender: "O Lord, through this knowledge, let me attain Your eternal nature beyond all changes.",
        emotions: ["aspiration", "freedom", "eternity"],
        audioUrl: null
    },
    {
        id: "14-3",
        chapter: 14,
        verse: 3,
        sanskrit: "मम योनिर्महद्ब्रह्म तस्मिन्गर्भं दधाम्यहम्। संभवः सर्वभूतानां ततो भवति भारत॥",
        transliteration: "mama yonir mahad brahma tasmin garbhaṁ dadhāmy aham sambhavaḥ sarva-bhūtānāṁ tato bhavati bhārata",
        simpleMeaning: "The great Brahman (Prakriti) is My womb. In that I place the seed. From that arises the birth of all beings, O Bharata.",
        practicalExplanation: "Prakriti (material nature) is the womb, the mother. God places the seed of consciousness. From their union, all beings are born. Matter provides the body; God provides the life-force. Both are needed for creation.",
        strengthReflection: "I am born from the union of matter and divine consciousness.",
        devotionalSurrender: "O Lord, You are the Father placing consciousness in the womb of nature.",
        emotions: ["wonder", "creation", "origin"],
        audioUrl: null
    },
    {
        id: "14-4",
        chapter: 14,
        verse: 4,
        sanskrit: "सर्वयोनिषु कौन्तेय मूर्तयः संभवन्ति याः। तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता॥",
        transliteration: "sarva-yoniṣhu kaunteya mūrtayaḥ sambhavanti yāḥ tāsāṁ brahma mahad yonir ahaṁ bīja-pradaḥ pitā",
        simpleMeaning: "Whatever forms are produced in all wombs, O son of Kunti, the great Brahman (Prakriti) is their womb, and I am the seed-giving Father.",
        practicalExplanation: "All life-forms, in all species, arise from the same process: matter as mother, God as father. From amoeba to human, the pattern is identical. This unifies all creation under one parentage — one Divine Father.",
        strengthReflection: "God is the Father of all beings; material nature is the universal mother.",
        devotionalSurrender: "O Lord, You are the Father of all beings. I am Your child.",
        emotions: ["belonging", "unity", "reverence"],
        audioUrl: null
    },
    {
        id: "14-5",
        chapter: 14,
        verse: 5,
        sanskrit: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसंभवाः। निबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥",
        transliteration: "sattvaṁ rajas tama iti guṇāḥ prakṛiti-sambhavāḥ nibadhnanti mahā-bāho dehe dehinam avyayam",
        simpleMeaning: "Sattva, Rajas, and Tamas — these qualities born of Prakriti bind the imperishable soul in the body, O mighty-armed one.",
        practicalExplanation: "The three gunas — sattva (goodness/purity), rajas (passion/activity), and tamas (ignorance/inertia) — are nature's fundamental qualities. Though the soul is imperishable, these gunas bind it to the body through identification.",
        strengthReflection: "The three gunas — sattva, rajas, tamas — bind me to the body until I transcend them.",
        devotionalSurrender: "O Lord, help me understand these gunas so I may transcend their bondage.",
        emotions: ["awareness", "understanding", "bondage"],
        audioUrl: null
    },
    {
        id: "14-6",
        chapter: 14,
        verse: 6,
        sanskrit: "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्। सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ॥",
        transliteration: "tatra sattvaṁ nirmalatvāt prakāśhakam anāmayam sukha-saṅgena badhnāti jñāna-saṅgena chānagha",
        simpleMeaning: "Of these, sattva, being pure, is illuminating and free from disease. It binds through attachment to happiness and attachment to knowledge, O sinless one.",
        practicalExplanation: "Sattva is the purest guna — luminous, healthy, clear. But even it binds! Through attachment to happiness and knowledge. The spiritual seeker can get attached to blissful states and intellectual understanding, creating subtle bondage.",
        strengthReflection: "Even attachment to happiness and knowledge can bind me. I seek freedom beyond sattva.",
        devotionalSurrender: "O Lord, let me enjoy purity without attachment to its happiness or knowledge.",
        emotions: ["purity", "awareness", "subtle bondage"],
        audioUrl: null
    },
    {
        id: "14-7",
        chapter: 14,
        verse: 7,
        sanskrit: "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम्। तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम्॥",
        transliteration: "rajo rāgātmakaṁ viddhi tṛiṣhṇā-saṅga-samudbhavam tan nibadhnāti kaunteya karma-saṅgena dehinam",
        simpleMeaning: "Know rajas to be of the nature of passion, arising from craving and attachment. It binds the embodied soul through attachment to action, O son of Kunti.",
        practicalExplanation: "Rajas is passion, desire, craving. It creates restlessness and constant activity. It binds through attachment to work and its fruits. The rajasic person is never satisfied, always wanting more, doing more.",
        strengthReflection: "Rajas binds me through restless craving and attachment to action's fruits.",
        devotionalSurrender: "O Lord, calm my rajas. Let me act without craving or attachment.",
        emotions: ["passion", "restlessness", "desire"],
        audioUrl: null
    },
    {
        id: "14-8",
        chapter: 14,
        verse: 8,
        sanskrit: "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्। प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत॥",
        transliteration: "tamas tv ajñāna-jaṁ viddhi mohanaṁ sarva-dehinām pramādālasya-nidrābhis tan nibadhnāti bhārata",
        simpleMeaning: "Know tamas to be born of ignorance, deluding all embodied beings. It binds through negligence, laziness, and sleep, O Bharata.",
        practicalExplanation: "Tamas is ignorance, darkness, inertia. It deludes all beings into confusion and apathy. It binds through carelessness, laziness, and excessive sleep. The tamasic person avoids action, remains confused, sleeps too much.",
        strengthReflection: "Tamas binds me through ignorance, laziness, and excessive sleep.",
        devotionalSurrender: "O Lord, dispel my tamas. Awaken me from ignorance and inertia.",
        emotions: ["darkness", "inertia", "delusion"],
        audioUrl: null
    },
    {
        id: "14-9",
        chapter: 14,
        verse: 9,
        sanskrit: "सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत। ज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत॥",
        transliteration: "sattvaṁ sukhe sañjayati rajaḥ karmaṇi bhārata jñānam āvṛitya tu tamaḥ pramāde sañjayaty uta",
        simpleMeaning: "Sattva attaches one to happiness, rajas to action, O Bharata, while tamas, veiling knowledge, attaches to negligence.",
        practicalExplanation: "Each guna creates its characteristic attachment: sattva to happiness and peace, rajas to activity and achievement, tamas to carelessness and avoidance. Recognizing which guna dominates helps us work toward balance and transcendence.",
        strengthReflection: "I observe which guna dominates my current state and work toward transcendence.",
        devotionalSurrender: "O Lord, help me recognize and transcend all three types of attachment.",
        emotions: ["self-observation", "awareness", "discernment"],
        audioUrl: null
    },
    {
        id: "14-10",
        chapter: 14,
        verse: 10,
        sanskrit: "रजस्तमश्चाभिभूय सत्त्वं भवति भारत। रजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा॥",
        transliteration: "rajas tamaśh chābhibhūya sattvaṁ bhavati bhārata rajaḥ sattvaṁ tamaśh chaiva tamaḥ sattvaṁ rajas tathā",
        simpleMeaning: "Sattva prevails by overcoming rajas and tamas, O Bharata. Rajas prevails by overcoming sattva and tamas. Similarly, tamas prevails by overcoming sattva and rajas.",
        practicalExplanation: "The gunas constantly compete for dominance. When sattva prevails, we feel peaceful and clear. When rajas dominates, we are restless and driven. When tamas takes over, we are dull and confused. This is the constant inner battle.",
        strengthReflection: "I observe the interplay of gunas within me, watching which one dominates.",
        devotionalSurrender: "O Lord, strengthen sattva within me and help me transcend all three gunas.",
        emotions: ["observation", "inner struggle", "awareness"],
        audioUrl: null
    },
    {
        id: "14-11",
        chapter: 14,
        verse: 11,
        sanskrit: "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते। ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत॥",
        transliteration: "sarva-dvāreṣhu dehe 'smin prakāśha upajāyate jñānaṁ yadā tadā vidyād vivṛiddhaṁ sattvam ity uta",
        simpleMeaning: "When the light of knowledge shines through all the gates of the body, then know that sattva is predominant.",
        practicalExplanation: "Signs of sattva dominance: clarity shines through all senses, understanding is present, inner illumination is felt. The 'gates' are the senses — when perception is clear and knowledge arises naturally, sattva is strong.",
        strengthReflection: "When clarity and knowledge shine, I recognize sattva's positive influence.",
        devotionalSurrender: "O Lord, let sattva's light shine through all my senses and faculties.",
        emotions: ["clarity", "illumination", "knowledge"],
        audioUrl: null
    },
    {
        id: "14-12",
        chapter: 14,
        verse: 12,
        sanskrit: "लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा। रजस्येतानि जायन्ते विवृद्धे भरतर्षभ॥",
        transliteration: "lobhaḥ pravṛittir ārambhaḥ karmaṇām aśhamaḥ spṛihā rajasy etāni jāyante vivṛiddhe bharatarṣhabha",
        simpleMeaning: "Greed, activity, undertaking of actions, restlessness, and craving — these arise when rajas predominates, O best of the Bharatas.",
        practicalExplanation: "Signs of rajas dominance: greed arises, constant activity drives you, you start new projects compulsively, inner restlessness disturbs peace, desires multiply. Recognizing these symptoms helps you see rajas at work.",
        strengthReflection: "When greed, restlessness, and constant craving arise, I recognize rajas' influence.",
        devotionalSurrender: "O Lord, calm my rajas when its restlessness disturbs my peace.",
        emotions: ["restlessness", "craving", "compulsion"],
        audioUrl: null
    },
    {
        id: "14-13",
        chapter: 14,
        verse: 13,
        sanskrit: "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च। तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन॥",
        transliteration: "aprakāśho 'pravṛittiśh cha pramādo moha eva cha tamasy etāni jāyante vivṛiddhe kuru-nandana",
        simpleMeaning: "Darkness, inactivity, negligence, and delusion — these arise when tamas predominates, O descendant of Kuru.",
        practicalExplanation: "Signs of tamas dominance: mental darkness and dullness, inability to act, carelessness about important matters, confusion and delusion. When you feel fog in mind and body, tamas is strong.",
        strengthReflection: "When darkness, inaction, and confusion arise, I recognize tamas' influence.",
        devotionalSurrender: "O Lord, dispel tamas' darkness with Your light of knowledge.",
        emotions: ["darkness", "inertia", "confusion"],
        audioUrl: null
    },
    {
        id: "14-14",
        chapter: 14,
        verse: 14,
        sanskrit: "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत्। तदोत्तमविदां लोकानमलान्प्रतिपद्यते॥",
        transliteration: "yadā sattve pravṛiddhe tu pralayaṁ yāti deha-bhṛit tadottama-vidāṁ lokān amalān pratipadyate",
        simpleMeaning: "When the embodied one dies while sattva prevails, then one attains the pure worlds of those who know the highest.",
        practicalExplanation: "Death during sattvic dominance leads to pure, luminous realms — worlds of the wise and pure. The state at death influences the next destination. Cultivating sattva ensures a better rebirth or liberation.",
        strengthReflection: "I cultivate sattva so that my transition leads to higher realms.",
        devotionalSurrender: "O Lord, let sattva prevail in me, especially at life's transition.",
        emotions: ["preparation", "aspiration", "purity"],
        audioUrl: null
    },
    {
        id: "14-15",
        chapter: 14,
        verse: 15,
        sanskrit: "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते। तथा प्रलीनस्तमसि मूढयोनिषु जायते॥",
        transliteration: "rajasi pralayaṁ gatvā karma-saṅgiṣhu jāyate tathā pralīnas tamasi mūḍha-yoniṣhu jāyate",
        simpleMeaning: "Dying in rajas, one is born among those attached to action. Dying in tamas, one is born in the wombs of the deluded.",
        practicalExplanation: "Death in rajas leads to rebirth among active, ambitious beings — driven but not liberated. Death in tamas leads to birth in confused, dull conditions — animal or degraded human states. Our dominant quality shapes our destiny.",
        strengthReflection: "I understand that my dominant quality at death shapes my next birth.",
        devotionalSurrender: "O Lord, purify me so that neither rajas nor tamas dominate at my end.",
        emotions: ["awareness", "motivation", "caution"],
        audioUrl: null
    },
    {
        id: "14-16",
        chapter: 14,
        verse: 16,
        sanskrit: "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम्। रजसस्तु फलं दुःखमज्ञानं तमसः फलम्॥",
        transliteration: "karmaṇaḥ sukṛitasyāhuḥ sāttvikaṁ nirmalaṁ phalam rajasas tu phalaṁ duḥkham ajñānaṁ tamasaḥ phalam",
        simpleMeaning: "The fruit of sattvic action is said to be pure; the fruit of rajas is pain; the fruit of tamas is ignorance.",
        practicalExplanation: "Actions done in sattva yield pure, lasting results. Rajasic actions produce pain despite apparent success. Tamasic actions produce ignorance and confusion. The quality of the action determines the quality of the fruit.",
        strengthReflection: "I perform sattvic actions for pure results, avoiding rajasic pain and tamasic ignorance.",
        devotionalSurrender: "O Lord, let all my actions be sattvic, yielding pure and liberating fruits.",
        emotions: ["wisdom", "discernment", "choice"],
        audioUrl: null
    },
    {
        id: "14-17",
        chapter: 14,
        verse: 17,
        sanskrit: "सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च। प्रमादमोहौ तमसो भवतोऽज्ञानमेव च॥",
        transliteration: "sattvāt sañjāyate jñānaṁ rajaso lobha eva cha pramāda-mohau tamaso bhavato 'jñānam eva cha",
        simpleMeaning: "From sattva arises knowledge; from rajas, greed; and from tamas arise negligence, delusion, and ignorance.",
        practicalExplanation: "Each guna produces its natural fruit: sattva gives knowledge and wisdom, rajas produces greed and craving, tamas generates carelessness, confusion, and ignorance. We can trace our mental states to their guna-sources.",
        strengthReflection: "I trace my knowledge to sattva, my cravings to rajas, my confusion to tamas.",
        devotionalSurrender: "O Lord, increase my sattva so that knowledge may grow within me.",
        emotions: ["understanding", "self-awareness", "growth"],
        audioUrl: null
    },
    {
        id: "14-18",
        chapter: 14,
        verse: 18,
        sanskrit: "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः। जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः॥",
        transliteration: "ūrdhvaṁ gachchhanti sattva-sthā madhye tiṣhṭhanti rājasāḥ jaghanya-guṇa-vṛitti-sthā adho gachchhanti tāmasāḥ",
        simpleMeaning: "Those established in sattva rise upward; the rajasic dwell in the middle; the tamasic, abiding in the function of the lowest guna, go downward.",
        practicalExplanation: "The gunas determine direction: sattvic beings evolve upward toward higher states, rajasic beings remain in the middle — worldly existence, tamasic beings descend to lower births. We choose our direction by our guna-cultivation.",
        strengthReflection: "I cultivate sattva to rise upward in consciousness and evolution.",
        devotionalSurrender: "O Lord, lift me upward through sattva to higher states of being.",
        emotions: ["aspiration", "evolution", "direction"],
        audioUrl: null
    },
    {
        id: "14-19",
        chapter: 14,
        verse: 19,
        sanskrit: "नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति। गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति॥",
        transliteration: "nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣhṭānupaśhyati guṇebhyaśh cha paraṁ vetti mad-bhāvaṁ so 'dhigachchhati",
        simpleMeaning: "When the seer perceives no doer other than the gunas and knows what is beyond the gunas — he attains My nature.",
        practicalExplanation: "Liberation comes when you see that only the gunas act — there is no separate doer. And you know yourself as beyond all gunas — the witnessing consciousness. This insight leads to Krishna's own nature, divine freedom.",
        strengthReflection: "I see the gunas as the only doer and know myself as the witness beyond them.",
        devotionalSurrender: "O Lord, help me see that gunas alone act while I am the witness attaining Your nature.",
        emotions: ["insight", "freedom", "transcendence"],
        audioUrl: null
    },
    {
        id: "14-20",
        chapter: 14,
        verse: 20,
        sanskrit: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्। जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते॥",
        transliteration: "guṇān etān atītya trīn dehī deha-samudbhavān janma-mṛityu-jarā-duḥkhair vimukto 'mṛitam aśhnute",
        simpleMeaning: "The embodied one, transcending these three gunas from which the body arises, is freed from birth, death, old age, and sorrow, and attains immortality.",
        practicalExplanation: "By transcending all three gunas — even sattva — the soul is freed from rebirth, aging, death, and suffering. Immortality is attained. The goal is not to perfect one guna but to transcend all material qualities.",
        strengthReflection: "By transcending all gunas, I attain freedom from birth, death, and suffering.",
        devotionalSurrender: "O Lord, help me transcend all three gunas and attain immortality.",
        emotions: ["liberation", "immortality", "freedom"],
        audioUrl: null
    },
    {
        id: "14-21",
        chapter: 14,
        verse: 21,
        sanskrit: "अर्जुन उवाच। कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो। किमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते॥",
        transliteration: "arjuna uvācha kair liṅgais trīn guṇān etān atīto bhavati prabho kim āchāraḥ kathaṁ chaitāṁs trīn guṇān ativartate",
        simpleMeaning: "Arjuna said: By what signs is one who has transcended these three gunas known, O Lord? What is his conduct, and how does he transcend the three gunas?",
        practicalExplanation: "Arjuna asks the practical questions: How do we recognize someone who has transcended the gunas? What is their behavior? How did they achieve this transcendence? These questions bring the teaching into actionable understanding.",
        strengthReflection: "I seek to understand the signs, conduct, and method of one who transcends the gunas.",
        devotionalSurrender: "O Lord, show me the signs of transcendence and how to achieve it.",
        emotions: ["curiosity", "seeking", "practicality"],
        audioUrl: null
    },
    {
        id: "14-22",
        chapter: 14,
        verse: 22,
        sanskrit: "श्रीभगवानुवाच। प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव। न द्वेष्टि संप्रवृत्तानि न निवृत्तानि काङ्क्षति॥",
        transliteration: "śhrī bhagavān uvācha prakāśhaṁ cha pravṛittiṁ cha moham eva cha pāṇḍava na dveṣhṭi sampravṛittāni na nivṛittāni kāṅkṣhati",
        simpleMeaning: "The Supreme Lord said: He who does not hate illumination, activity, or delusion when present, nor longs for them when absent, O Pandava...",
        practicalExplanation: "The transcended one doesn't hate any guna's manifestation (sattva's light, rajas' activity, tamas' delusion) nor craves them when absent. This equanimity toward all guna-states indicates freedom from their grip.",
        strengthReflection: "I neither hate nor crave the manifestations of any guna.",
        devotionalSurrender: "O Lord, grant me equanimity toward all states — neither hating nor craving.",
        emotions: ["equanimity", "acceptance", "freedom"],
        audioUrl: null
    },
    {
        id: "14-23",
        chapter: 14,
        verse: 23,
        sanskrit: "उदासीनवदासीनो गुणैर्यो न विचाल्यते। गुणा वर्तन्त इत्येवं योऽवतिष्ठति नेङ्गते॥",
        transliteration: "udāsīna-vad āsīno guṇair yo na vichālyate guṇā vartanta ity evaṁ yo 'vatiṣhṭhati neṅgate",
        simpleMeaning: "...seated as if unconcerned, undisturbed by the gunas, knowing that the gunas alone are acting — he remains steady and does not waver.",
        practicalExplanation: "The transcended one sits like an unconcerned witness — not cold or uncaring, but unmoved by internal guna-fluctuations. Knowing that only the gunas act (not the self), they remain steady, unwavering, established in being.",
        strengthReflection: "I remain steady as the witness, knowing the gunas alone act through my body-mind.",
        devotionalSurrender: "O Lord, establish me as the unmoved witness, steady amid all guna-fluctuations.",
        emotions: ["steadiness", "witnessing", "establishment"],
        audioUrl: null
    },
    {
        id: "14-24",
        chapter: 14,
        verse: 24,
        sanskrit: "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः। तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः॥",
        transliteration: "sama-duḥkha-sukhaḥ sva-sthaḥ sama-loṣhṭāśhma-kāñchanaḥ tulya-priyāpriyo dhīras tulya-nindātma-saṁstutiḥ",
        simpleMeaning: "Alike in pleasure and pain, self-reliant, regarding clod, stone, and gold equally, equal toward pleasant and unpleasant, firm, the same in blame and praise...",
        practicalExplanation: "Characteristics continue: equal in pleasure and pain (inner balance), self-reliant (centered in self), seeing material things equally (a clod = stone = gold), unaffected by pleasant or unpleasant, firm, unmoved by criticism or praise.",
        strengthReflection: "I am equally balanced in pleasure-pain, praise-blame, seeing all things equally.",
        devotionalSurrender: "O Lord, establish me in this equanimity that sees all equally.",
        emotions: ["balance", "equanimity", "firmness"],
        audioUrl: null
    },
    {
        id: "14-25",
        chapter: 14,
        verse: 25,
        sanskrit: "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः। सर्वारम्भपरित्यागी गुणातीतः स उच्यते॥",
        transliteration: "mānāpamānayos tulyas tulyo mitrāri-pakṣhayoḥ sarvārambha-parityāgī guṇātītaḥ sa uchyate",
        simpleMeaning: "...the same in honor and dishonor, equal toward friend and foe, renouncing all undertakings — he is said to have transcended the gunas.",
        practicalExplanation: "More signs: equal in honor and dishonor (ego unmoved), same toward friends and enemies (universal love), renouncing all ego-driven undertakings (not initiating actions for personal gain). This describes one who has transcended all three gunas.",
        strengthReflection: "I am the same in honor-dishonor, with friend-enemy, renouncing ego-driven actions.",
        devotionalSurrender: "O Lord, help me transcend the gunas by renouncing ego-driven undertakings.",
        emotions: ["transcendence", "renunciation", "freedom"],
        audioUrl: null
    },
    {
        id: "14-26",
        chapter: 14,
        verse: 26,
        sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥",
        transliteration: "māṁ cha yo 'vyabhichāreṇa bhakti-yogena sevate sa guṇān samatītyaitān brahma-bhūyāya kalpate",
        simpleMeaning: "And he who serves Me with unwavering devotion, transcending these gunas, is fit to become Brahman.",
        practicalExplanation: "Here's the method: unwavering devotion to Krishna! Bhakti yoga transcends all gunas. Not by effort of will but by love of God, one rises beyond material nature. Devotion makes one fit for Brahman-realization.",
        strengthReflection: "Through unwavering devotion, I transcend the gunas and become fit for Brahman.",
        devotionalSurrender: "O Lord, through my devoted service to You, let me transcend all gunas.",
        emotions: ["devotion", "transcendence", "love"],
        audioUrl: null
    },
    {
        id: "14-27",
        chapter: 14,
        verse: 27,
        sanskrit: "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च। शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च॥",
        transliteration: "brahmaṇo hi pratiṣhṭhāham amṛitasyāvyayasya cha śhāśhvatasya cha dharmasya sukhasyaikāntikasya cha",
        simpleMeaning: "For I am the foundation of Brahman, of the immortal and imperishable, of the eternal dharma, and of absolute bliss.",
        practicalExplanation: "Krishna reveals His supreme position: He is the foundation of Brahman itself, of immortality, of eternal righteousness, and of absolute bliss. The impersonal Brahman rests on the personal God. Krishna is the support of everything.",
        strengthReflection: "Krishna is the foundation of Brahman, immortality, dharma, and ultimate bliss.",
        devotionalSurrender: "O Lord, You are the foundation of all. In You, I find immortality and bliss.",
        emotions: ["revelation", "surrender", "foundation"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 14 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 14);

// Add Chapter 14 verses
existingData.shloks = [...filteredShloks, ...chapter14Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');