const fs = require('fs');
const path = require('path');

// Chapter 7 - Jnana Vijnana Yoga (The Yoga of Knowledge and Wisdom) - All 30 verses
const chapter7Verses = [
    {
        id: "7-1",
        chapter: 7,
        verse: 1,
        sanskrit: "श्रीभगवानुवाच। मय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः। असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु॥",
        transliteration: "śhrī bhagavān uvācha mayy āsakta-manāḥ pārtha yogaṁ yuñjan mad-āśhrayaḥ asanśhayaṁ samagraṁ māṁ yathā jñāsyasi tach chhṛiṇu",
        simpleMeaning: "The Supreme Lord said: O Arjuna, hear how with your mind attached to Me, practicing yoga and taking refuge in Me, you shall know Me completely, free from doubt.",
        practicalExplanation: "Krishna opens this chapter on knowledge by stating the prerequisite: attachment to the Divine. True spiritual knowledge isn't gained through intellect alone but through devotion and practice combined. When your heart is connected, complete understanding becomes possible without doubt. This is knowledge born of love.",
        strengthReflection: "I approach spiritual knowledge with both my mind and my heart, knowing both are needed.",
        devotionalSurrender: "O Lord Krishna, I take refuge in You. Help me know You completely, beyond all doubt.",
        emotions: ["devotion", "faith", "curiosity"],
        audioUrl: null
    },
    {
        id: "7-2",
        chapter: 7,
        verse: 2,
        sanskrit: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः। यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते॥",
        transliteration: "jñānaṁ te 'haṁ sa-vijñānam idaṁ vakṣhyāmy aśheṣhataḥ yaj jñātvā neha bhūyo 'nyaj jñātavyam avaśhiṣhyate",
        simpleMeaning: "I shall now reveal to you in full this knowledge combined with realized wisdom, knowing which nothing more remains to be known.",
        practicalExplanation: "Krishna distinguishes between jnana (theoretical knowledge) and vijnana (realized wisdom). He promises to give both. This is the ultimate knowledge — after which all other seeking stops. Not because curiosity dies, but because the source of all answers has been found. The seeker finds what completes all seeking.",
        strengthReflection: "I seek not just information but transformative wisdom that satisfies my deepest questions.",
        devotionalSurrender: "Lord, grant me both knowledge and living wisdom — the complete understanding that ends all seeking.",
        emotions: ["curiosity", "wisdom", "peace"],
        audioUrl: null
    },
    {
        id: "7-3",
        chapter: 7,
        verse: 3,
        sanskrit: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये। यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः॥",
        transliteration: "manuṣhyāṇāṁ sahasreṣhu kaśhchid yatati siddhaye yatatām api siddhānāṁ kaśhchin māṁ vetti tattvataḥ",
        simpleMeaning: "Among thousands of people, hardly one strives for perfection. And among those who strive and succeed, hardly one knows Me in truth.",
        practicalExplanation: "This verse is sobering but not discouraging. Most people never begin the spiritual journey. Among those who do, few persist to realization. And even among the realized, true knowledge of the Divine is rare. This should inspire humility and determination — you are pursuing something precious and uncommon.",
        strengthReflection: "I am among the rare few who truly seek. I honor this calling with sincere effort.",
        devotionalSurrender: "O Krishna, I am grateful to even have the desire to know You. Please complete this journey in me.",
        emotions: ["devotion", "self-doubt", "patience"],
        audioUrl: null
    },
    {
        id: "7-4",
        chapter: 7,
        verse: 4,
        sanskrit: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च। अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा॥",
        transliteration: "bhūmir āpo 'nalo vāyuḥ khaṁ mano buddhir eva cha ahankāra itīyaṁ me bhinnā prakṛitir aṣhṭadhā",
        simpleMeaning: "Earth, water, fire, air, space, mind, intellect, and ego — these eight constitute My separated material nature (lower prakriti).",
        practicalExplanation: "Krishna reveals that the entire material world, including the mind and ego, is Divine energy in a differentiated form. The five elements plus mind, intellect, and ego make eight aspects of lower nature. Even your thinking mind is part of material nature — not your true Self. This knowledge frees you from over-identifying with thoughts.",
        strengthReflection: "I recognize that even my mind and ego are part of nature, not my ultimate identity.",
        devotionalSurrender: "Lord, help me see through the eight coverings to recognize Your presence within and beyond them.",
        emotions: ["wisdom", "attachment", "peace"],
        audioUrl: null
    },
    {
        id: "7-5",
        chapter: 7,
        verse: 5,
        sanskrit: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्। जीवभूतां महाबाहो ययेदं धार्यते जगत्॥",
        transliteration: "apareyam itas tv anyāṁ prakṛitiṁ viddhi me parām jīva-bhūtāṁ mahā-bāho yayedaṁ dhāryate jagat",
        simpleMeaning: "But beyond this lower nature, O mighty-armed Arjuna, know My higher nature — the living beings (consciousness) by which this entire universe is sustained.",
        practicalExplanation: "Here Krishna reveals the crucial distinction: beyond material nature is the spiritual nature — consciousness itself, the living principle in all beings. This higher prakriti sustains the world. You are not just body-mind (lower nature) but also this conscious presence (higher nature). Knowing this changes everything about how you see yourself.",
        strengthReflection: "I am more than body and mind — I am the conscious presence that animates and sustains.",
        devotionalSurrender: "O Lord, I am Your higher nature, living consciousness. Let me never forget my divine origin.",
        emotions: ["wisdom", "purpose", "devotion"],
        audioUrl: null
    },
    {
        id: "7-6",
        chapter: 7,
        verse: 6,
        sanskrit: "एतद्योनीनि भूतानि सर्वाणीत्युपधारय। अहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा॥",
        transliteration: "etad-yonīni bhūtāni sarvāṇīty upadhāraya ahaṁ kṛitsnasya jagataḥ prabhavaḥ pralayas tathā",
        simpleMeaning: "Know that all living beings have their origin in these two natures. I am the source of the entire cosmos, and also its dissolution.",
        practicalExplanation: "Both material and spiritual natures emerge from the Divine. Krishna is the source of everything — creation, preservation, and dissolution. Nothing exists apart from this Divine origin. Understanding this creates a profound shift: everything you encounter is Divine energy in some form. There is nowhere God is not.",
        strengthReflection: "I see all beings and all things as emerging from the same Divine source as myself.",
        devotionalSurrender: "Lord, You are the beginning and end of all. In You, I find the origin of everything I am.",
        emotions: ["devotion", "wonder", "peace"],
        audioUrl: null
    },
    {
        id: "7-7",
        chapter: 7,
        verse: 7,
        sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
        transliteration: "mattaḥ parataraṁ nānyat kiñchid asti dhanañjaya mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
        simpleMeaning: "There is nothing higher than Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread.",
        practicalExplanation: "This is one of the most beautiful images in the Gita. The Divine is like an invisible thread holding all the pearls of existence together. You don't see the thread, only the pearls — but without the thread, the pearls would scatter. Similarly, the Divine is the hidden connector of all reality. Look for the thread, not just the pearls.",
        strengthReflection: "I look beyond surface appearances to find the Divine thread connecting all of existence.",
        devotionalSurrender: "O Krishna, You are the invisible thread of my life. Everything beautiful in me is held together by You.",
        emotions: ["devotion", "wonder", "faith"],
        audioUrl: null
    },
    {
        id: "7-8",
        chapter: 7,
        verse: 8,
        sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः। प्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु॥",
        transliteration: "raso 'ham apsu kaunteya prabhāsmi śhaśhi-sūryayoḥ praṇavaḥ sarva-vedeṣhu śhabdaḥ khe pauruṣhaṁ nṛiṣhu",
        simpleMeaning: "I am the taste in water, O Arjuna, the radiance of the sun and moon, the sacred syllable Om in all the Vedas, sound in ether, and ability in humans.",
        practicalExplanation: "Krishna shows how to see the Divine everywhere through essences. Water's refreshing taste, light's radiance, the primal sound Om, the capacity in space for sound to travel, human abilities — these are Divine signatures. This practice transforms ordinary experience into continuous remembrance of God.",
        strengthReflection: "I practice recognizing the Divine in everyday experiences — taste, light, sound, ability.",
        devotionalSurrender: "Lord, every sip of water, every ray of light reminds me of You. You are everywhere I look.",
        emotions: ["gratitude", "wonder", "devotion"],
        audioUrl: null
    },
    {
        id: "7-9",
        chapter: 7,
        verse: 9,
        sanskrit: "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ। जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु॥",
        transliteration: "puṇyo gandhaḥ pṛithivyāṁ cha tejaśh chāsmi vibhāvasau jīvanaṁ sarva-bhūteṣhu tapaśh chāsmi tapasviṣhu",
        simpleMeaning: "I am the pure fragrance of the earth, the brilliance in fire, the life in all beings, and the austerity in ascetics.",
        practicalExplanation: "The sweet smell of earth after rain, the warming power of fire, the vital force keeping you alive, the discipline in spiritual seekers — all are Divine expressions. Life itself is God's presence. When you feel truly alive, you are touching the Divine. This verse makes God tangible in elemental experiences.",
        strengthReflection: "I honor the life force within me as a direct expression of Divine presence.",
        devotionalSurrender: "O Lord, You are the life pulsing through me. Every breath is Your presence sustaining me.",
        emotions: ["gratitude", "life", "devotion"],
        audioUrl: null
    },
    {
        id: "7-10",
        chapter: 7,
        verse: 10,
        sanskrit: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्। बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम्॥",
        transliteration: "bījaṁ māṁ sarva-bhūtānāṁ viddhi pārtha sanātanam buddhir buddhimatām asmi tejas tejasvinām aham",
        simpleMeaning: "Know Me to be the eternal seed of all beings, O Arjuna. I am the intelligence of the intelligent and the brilliance of the brilliant.",
        practicalExplanation: "The Divine is the original seed from which all life springs — eternal, unchanging. When you encounter true intelligence or brilliance in someone, you're witnessing Divine energy expressing through a human form. Your own intelligence and brilliance are not personal achievements but Divine gifts flowing through you.",
        strengthReflection: "I recognize my intelligence and abilities as Divine gifts, not personal possessions to boast about.",
        devotionalSurrender: "Lord, You are the source of all brilliance. Whatever wisdom I have comes from You alone.",
        emotions: ["humility", "gratitude", "wisdom"],
        audioUrl: null
    },
    {
        id: "7-11",
        chapter: 7,
        verse: 11,
        sanskrit: "बलं बलवतां चाहं कामरागविवर्जितम्। धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ॥",
        transliteration: "balaṁ balavatāṁ chāhaṁ kāma-rāga-vivarjitam dharmāviruddho bhūteṣhu kāmo 'smi bharatarṣhabha",
        simpleMeaning: "I am the strength of the strong, devoid of desire and attachment. I am desire in beings that is not contrary to dharma, O best of Bharatas.",
        practicalExplanation: "God is pure strength — not corrupted by selfish desires. Krishna also claims righteous desire as Divine. Not all desires are problems; desires aligned with dharma (natural order, righteousness) are expressions of the Divine. The key is discernment: which desires serve growth and which feed ego?",
        strengthReflection: "I channel my desires toward dharmic ends, knowing aligned desires are Divine expressions.",
        devotionalSurrender: "O Lord, purify my desires. Let me want only what aligns with Your will and dharma.",
        emotions: ["strength", "discipline", "purpose"],
        audioUrl: null
    },
    {
        id: "7-12",
        chapter: 7,
        verse: 12,
        sanskrit: "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये। मत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि॥",
        transliteration: "ye chaiva sāttvikā bhāvā rājasās tāmasāśh cha ye matta eveti tān viddhi na tv ahaṁ teṣhu te mayi",
        simpleMeaning: "Know that all states of being — sattvic (pure), rajasic (passionate), and tamasic (ignorant) — arise from Me. But I am not in them; they are in Me.",
        practicalExplanation: "All three gunas (qualities of nature) come from God, but God is not trapped in any of them. This is a profound teaching: the Divine is the source yet remains transcendent. Similarly, you can be aware of all mental states without being defined by them. You are the witness, not the states witnessed.",
        strengthReflection: "I observe my changing mental states without identifying with any of them completely.",
        devotionalSurrender: "Lord, You transcend all qualities while being their source. Help me find that transcendent peace.",
        emotions: ["peace", "wisdom", "detachment"],
        audioUrl: null
    },
    {
        id: "7-13",
        chapter: 7,
        verse: 13,
        sanskrit: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्। मोहितं नाभिजानाति मामेभ्यः परमव्ययम्॥",
        transliteration: "tribhir guṇa-mayair bhāvair ebhiḥ sarvam idaṁ jagat mohitaṁ nābhijānāti mām ebhyaḥ param avyayam",
        simpleMeaning: "Deluded by these three qualities of nature (gunas), this whole world does not recognize Me, who am beyond them and imperishable.",
        practicalExplanation: "Here is humanity's fundamental problem: we're so caught up in the play of qualities (purity, passion, inertia) that we miss the Player behind them. We confuse the waves with the ocean. The gunas constantly shift, creating the drama of life — but the Divine remains unchanged and unnoticed behind the show.",
        strengthReflection: "I look beyond the shifting qualities of my experience to find the unchanging presence within.",
        devotionalSurrender: "O Krishna, lift the veil of the gunas. Let me see You, the imperishable One, beyond all change.",
        emotions: ["confusion", "seeking", "wisdom"],
        audioUrl: null
    },
    {
        id: "7-14",
        chapter: 7,
        verse: 14,
        sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया। मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते॥",
        transliteration: "daivī hy eṣhā guṇa-mayī mama māyā duratyayā mām eva ye prapadyante māyām etāṁ taranti te",
        simpleMeaning: "This divine illusion (maya) of Mine, consisting of the three gunas, is very difficult to overcome. But those who surrender to Me alone cross beyond it.",
        practicalExplanation: "Maya — the cosmic illusion created by the three qualities — is almost impossible to transcend through personal effort alone. But Krishna gives the solution: surrender to the Divine. This isn't defeat but wisdom — recognizing that grace accomplishes what ego cannot. The way through maya is devotion, not just effort.",
        strengthReflection: "I acknowledge that surrender is wisdom, not weakness. Some obstacles require grace, not just effort.",
        devotionalSurrender: "Lord, I cannot overcome maya alone. I surrender to You. Carry me across this ocean of illusion.",
        emotions: ["surrender", "faith", "humility"],
        audioUrl: null
    },
    {
        id: "7-15",
        chapter: 7,
        verse: 15,
        sanskrit: "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः। माययापहृतज्ञाना आसुरं भावमाश्रिताः॥",
        transliteration: "na māṁ duṣhkṛitino mūḍhāḥ prapadyante narādhamāḥ māyayāpahṛita-jñānā āsuraṁ bhāvam āśhritāḥ",
        simpleMeaning: "The evil-doers, the foolish, the lowest of humans, those whose knowledge is stolen by illusion, and those with demonic nature — these do not surrender to Me.",
        practicalExplanation: "Not everyone turns to the Divine. Those who choose harmful actions, remain willfully ignorant, degrade themselves, let maya steal their wisdom, or embrace destructive values naturally avoid surrender. This isn't judgment but description. If you feel drawn to surrender, celebrate — you are not in these categories.",
        strengthReflection: "I am grateful that I feel drawn toward truth and surrender rather than away from it.",
        devotionalSurrender: "O Lord, protect me from the forces that would pull me away from You. Keep my heart turned toward You.",
        emotions: ["devotion", "gratitude", "discernment"],
        audioUrl: null
    },
    {
        id: "7-16",
        chapter: 7,
        verse: 16,
        sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन। आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ॥",
        transliteration: "chatur-vidhā bhajante māṁ janāḥ sukṛitino 'rjuna ārto jijñāsur arthārthī jñānī cha bharatarṣhabha",
        simpleMeaning: "Four kinds of virtuous people worship Me, O Arjuna: the distressed, the seeker of knowledge, the seeker of wealth, and the wise.",
        practicalExplanation: "Krishna acknowledges various motivations for spiritual seeking. Some come from suffering (arta), some from curiosity (jijnasu), some seeking worldly gains (artharthi), and some from wisdom (jnani). All are valid starting points. Don't judge where you began — what matters is that you're on the path. The journey refines motivation.",
        strengthReflection: "I accept my current motivation for seeking without judgment, trusting the path will refine it.",
        devotionalSurrender: "Lord, whatever brought me to You, thank You. Deepen my devotion beyond need into pure love.",
        emotions: ["devotion", "self-acceptance", "growth"],
        audioUrl: null
    },
    {
        id: "7-17",
        chapter: 7,
        verse: 17,
        sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते। प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः॥",
        transliteration: "teṣhāṁ jñānī nitya-yukta eka-bhaktir viśhiṣhyate priyo hi jñānino 'tyartham ahaṁ sa cha mama priyaḥ",
        simpleMeaning: "Of these, the wise one who is ever united with Me through single-minded devotion is the best. For I am exceedingly dear to the wise, and they are dear to Me.",
        practicalExplanation: "Among the four types of devotees, the wise one (jnani) stands supreme because their devotion is constant and undivided — not dependent on circumstances. There's a beautiful intimacy here: Krishna loves the wise devotee, and the devotee loves Krishna. This mutual love is the highest spiritual attainment.",
        strengthReflection: "I aspire to evolve from need-based devotion to the pure, constant love of the wise.",
        devotionalSurrender: "O Krishna, be exceedingly dear to me, and may I become truly dear to You. Let our love be mutual.",
        emotions: ["devotion", "love", "wisdom"],
        audioUrl: null
    },
    {
        id: "7-18",
        chapter: 7,
        verse: 18,
        sanskrit: "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम्। आस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम्॥",
        transliteration: "udārāḥ sarva evaite jñānī tv ātmaiva me matam āsthitaḥ sa hi yuktātmā mām evānuttamāṁ gatim",
        simpleMeaning: "All these devotees are noble, but I consider the wise one as My very Self. For such a united soul dwells in Me alone as the supreme goal.",
        practicalExplanation: "All four types of devotees are noble — Krishna doesn't reject any sincere seeker. But the wise one achieves complete identity with the Divine. This is the ultimate union: not just loving God, but recognizing oneself as inseparable from God. The devotee becomes absorbed in the Divine as their sole reality.",
        strengthReflection: "I accept wherever I am while aspiring to the complete union where I see myself as one with the Divine.",
        devotionalSurrender: "Lord, You are my supreme goal. Let me know myself as inseparable from You.",
        emotions: ["devotion", "unity", "purpose"],
        audioUrl: null
    },
    {
        id: "7-19",
        chapter: 7,
        verse: 19,
        sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥",
        transliteration: "bahūnāṁ janmanām ante jñānavān māṁ prapadyate vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
        simpleMeaning: "After many births, one who has wisdom surrenders to Me, knowing that Vasudeva (Krishna) is everything. Such a great soul is very rare.",
        practicalExplanation: "This profound verse describes the culmination of spiritual evolution: realizing that the Divine is everything — every person, every object, every experience. This vision doesn't come easily; it takes many lifetimes to mature. Those who see Vasudeva everywhere are rare and precious great souls (mahatmas). This is the fruit of spiritual persistence.",
        strengthReflection: "I patiently continue my spiritual journey, trusting that wisdom matures across time.",
        devotionalSurrender: "O Vasudeva, You are everything. Grant me the vision to see You in all beings and all things.",
        emotions: ["devotion", "wisdom", "patience"],
        audioUrl: null
    },
    {
        id: "7-20",
        chapter: 7,
        verse: 20,
        sanskrit: "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः। तं तं नियममास्थाय प्रकृत्या नियताः स्वया॥",
        transliteration: "kāmais tais tair hṛita-jñānāḥ prapadyante 'nya-devatāḥ taṁ taṁ niyamam āsthāya prakṛityā niyatāḥ svayā",
        simpleMeaning: "Those whose knowledge is carried away by various desires surrender to other deities, following various rituals according to their own natures.",
        practicalExplanation: "When desire dominates, people seek gods who can fulfill those specific desires. This isn't wrong — it's a natural stage. But it's limited because the focus is on getting something rather than true liberation. Various practices and deities serve various purposes, but they may not lead to ultimate freedom.",
        strengthReflection: "I examine whether my spiritual seeking is driven by desire for things or by longing for liberation.",
        devotionalSurrender: "Lord, purify my seeking. Let me want You for Yourself, not just for what You can give me.",
        emotions: ["desire", "discernment", "devotion"],
        audioUrl: null
    },
    {
        id: "7-21",
        chapter: 7,
        verse: 21,
        sanskrit: "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति। तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्॥",
        transliteration: "yo yo yāṁ yāṁ tanuṁ bhaktaḥ śhraddhayārchitum ichchhati tasya tasyāchalāṁ śhraddhāṁ tām eva vidadhāmy aham",
        simpleMeaning: "Whatever form a devotee wishes to worship with faith, I make that very faith of theirs steady and unshakable.",
        practicalExplanation: "Krishna reveals a stunning truth: He supports devotion to any deity! Whatever form of worship someone chooses with sincere faith, Krishna strengthens that faith. This is radical inclusivity — God honors all sincere paths. The Divine doesn't compete with other forms of Itself but empowers all genuine devotion.",
        strengthReflection: "I respect all sincere spiritual paths, knowing the Divine supports faith in many forms.",
        devotionalSurrender: "O Lord, You are behind every sincere prayer. Thank You for honoring all hearts that seek.",
        emotions: ["faith", "openness", "devotion"],
        audioUrl: null
    },
    {
        id: "7-22",
        chapter: 7,
        verse: 22,
        sanskrit: "स तया श्रद्धया युक्तस्तस्याराधनमीहते। लभते च ततः कामान्मयैव विहितान्हि तान्॥",
        transliteration: "sa tayā śhraddhayā yuktas tasyārādhanam īhate labhate cha tataḥ kāmān mayaiva vihitān hi tān",
        simpleMeaning: "Endowed with that faith, they worship that deity and obtain their desires. But in reality, those results are granted by Me alone.",
        practicalExplanation: "Here's the hidden truth: whatever deity one worships, the results actually come from the Supreme. Krishna is the source behind all divine forms. This doesn't diminish other paths but reveals their hidden unity. All roads lead back to the same source, whether the traveler knows it or not.",
        strengthReflection: "I recognize the one Divine source behind all spiritual traditions and practices.",
        devotionalSurrender: "Lord, You are the hidden giver behind every answered prayer. All grace flows from You.",
        emotions: ["gratitude", "wisdom", "unity"],
        audioUrl: null
    },
    {
        id: "7-23",
        chapter: 7,
        verse: 23,
        sanskrit: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्। देवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि॥",
        transliteration: "antavat tu phalaṁ teṣhāṁ tad bhavaty alpa-medhasām devān deva-yajo yānti mad-bhaktā yānti mām api",
        simpleMeaning: "But the fruits obtained by those of small understanding are perishable. The worshippers of other gods go to those gods, but My devotees come to Me.",
        practicalExplanation: "Results from worshipping limited deities are themselves limited. You go to what you worship. Those seeking temporary gains get temporary results; those seeking the Supreme attain the Supreme. This is not punishment but natural consequence — your aim determines your destination. Aim high.",
        strengthReflection: "I aim for the highest — not temporary gains but lasting spiritual realization.",
        devotionalSurrender: "O Krishna, I want You, not just Your gifts. Let me attain You and remain with You forever.",
        emotions: ["purpose", "devotion", "discernment"],
        audioUrl: null
    },
    {
        id: "7-24",
        chapter: 7,
        verse: 24,
        sanskrit: "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः। परं भावमजानन्तो ममाव्ययमनुत्तमम्॥",
        transliteration: "avyaktaṁ vyaktim āpannaṁ manyante mām abuddhayaḥ paraṁ bhāvam ajānanto mamāvyayam anuttamam",
        simpleMeaning: "The unintelligent think of Me, the unmanifest, as having assumed a visible form. They do not know My higher nature, which is imperishable and supreme.",
        practicalExplanation: "Some misunderstand Krishna as just a human who became divine, rather than the eternal Divine who assumed human form. This verse corrects that view. God's true nature is beyond form, but God takes form for our sake. The form is a doorway to the formless, not a limitation of the infinite.",
        strengthReflection: "I honor divine forms while knowing they point to a reality beyond all form.",
        devotionalSurrender: "Lord, help me see beyond Your form to Your formless essence, and see Your essence through Your form.",
        emotions: ["wisdom", "devotion", "wonder"],
        audioUrl: null
    },
    {
        id: "7-25",
        chapter: 7,
        verse: 25,
        sanskrit: "नाहं प्रकाशः सर्वस्य योगमायासमावृतः। मूढोऽयं नाभिजानाति लोको मामजमव्ययम्॥",
        transliteration: "nāhaṁ prakāśhaḥ sarvasya yoga-māyā-samāvṛitaḥ mūḍho 'yaṁ nābhijānāti loko mām ajam avyayam",
        simpleMeaning: "Veiled by My divine illusion (yoga-maya), I am not revealed to all. This deluded world does not recognize Me as the unborn and imperishable.",
        practicalExplanation: "Krishna remains hidden from most because divine illusion veils His true nature. This isn't cruelty but protection — full revelation would be overwhelming for the unprepared. When you're ready, the veil lifts. The fact that you seek understanding means the veil is already thinning for you.",
        strengthReflection: "I trust that the Divine reveals Itself progressively as I become ready to receive.",
        devotionalSurrender: "O Lord, remove the veil between us. Let me see You as You truly are.",
        emotions: ["seeking", "patience", "devotion"],
        audioUrl: null
    },
    {
        id: "7-26",
        chapter: 7,
        verse: 26,
        sanskrit: "वेदाहं समतीतानि वर्तमानानि चार्जुन। भविष्याणि च भूतानि मां तु वेद न कश्चन॥",
        transliteration: "vedāhaṁ samatītāni vartamānāni chārjuna bhaviṣhyāṇi cha bhūtāni māṁ tu veda na kaśhchana",
        simpleMeaning: "O Arjuna, I know all beings of the past, present, and future, but no one knows Me.",
        practicalExplanation: "Divine omniscience extends across all time. Krishna knows every being who has existed, exists now, or will ever exist. Yet this knowing doesn't go both ways — beings don't naturally know God. We must seek, purify, and surrender to penetrate the mystery. The Divine knows you completely; your journey is to know the Divine.",
        strengthReflection: "I accept that I am fully known by the Divine, even as I struggle to know It.",
        devotionalSurrender: "Lord, You know everything about me. Help me know even a fraction of who You are.",
        emotions: ["humility", "wonder", "devotion"],
        audioUrl: null
    },
    {
        id: "7-27",
        chapter: 7,
        verse: 27,
        sanskrit: "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत। सर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप॥",
        transliteration: "ichchhā-dveṣha-samutthena dvandva-mohena bhārata sarva-bhūtāni sammohaṁ sarge yānti parantapa",
        simpleMeaning: "O Arjuna, all beings are born into delusion, overcome by the dualities of desire and aversion.",
        practicalExplanation: "From birth, we're trapped in the opposites of wanting and not-wanting. Every like creates a dislike; every desire creates a fear. This duality-delusion is universal — no one escapes it at first. Knowing this creates compassion for yourself and others. We're all working through the same fundamental confusion.",
        strengthReflection: "I recognize how desire and aversion create my suffering, and I practice moving beyond them.",
        devotionalSurrender: "O Lord, free me from the prison of likes and dislikes. Lead me to equanimity beyond opposites.",
        emotions: ["desire", "aversion", "peace"],
        audioUrl: null
    },
    {
        id: "7-28",
        chapter: 7,
        verse: 28,
        sanskrit: "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम्। ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः॥",
        transliteration: "yeṣhāṁ tv anta-gataṁ pāpaṁ janānāṁ puṇya-karmaṇām te dvandva-moha-nirmuktā bhajante māṁ dṛiḍha-vratāḥ",
        simpleMeaning: "But those whose sins have come to an end, who act virtuously — freed from the delusion of dualities, they worship Me with firm resolve.",
        practicalExplanation: "Freedom from dual-delusion doesn't come randomly — it requires virtuous living and the exhaustion of negative karma. When you've worked through enough confusion and built enough positive momentum, clear devotion becomes possible. This is cause for hope: your sincere efforts are clearing the way for unshakable faith.",
        strengthReflection: "I trust that my sincere efforts are clearing past confusion and building toward clear devotion.",
        devotionalSurrender: "Lord, burn away my remaining sins. Free me from duality so I can worship You with unwavering heart.",
        emotions: ["hope", "purification", "devotion"],
        audioUrl: null
    },
    {
        id: "7-29",
        chapter: 7,
        verse: 29,
        sanskrit: "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये। ते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम्॥",
        transliteration: "jarā-maraṇa-mokṣhāya mām āśhritya yatanti ye te brahma tad viduḥ kṛitsnam adhyātmaṁ karma chākhilam",
        simpleMeaning: "Those who take refuge in Me and strive for freedom from old age and death come to know Brahman, the Self, and the entire field of action.",
        practicalExplanation: "Taking refuge in the Divine and seeking liberation from mortality opens doors to complete knowledge. You understand ultimate reality (Brahman), your true self (adhyatma), and how action works (karma). These three together form complete spiritual understanding. Devotion becomes the key that unlocks all knowledge.",
        strengthReflection: "I seek liberation from mortality while cultivating devotion as the key to all understanding.",
        devotionalSurrender: "O Lord, I take refuge in You. Through devotion, reveal to me Brahman, Self, and sacred action.",
        emotions: ["seeking", "devotion", "wisdom"],
        audioUrl: null
    },
    {
        id: "7-30",
        chapter: 7,
        verse: 30,
        sanskrit: "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः। प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः॥",
        transliteration: "sādhibhūtādhidaivaṁ māṁ sādhiyajñaṁ cha ye viduḥ prayāṇa-kāle 'pi cha māṁ te vidur yukta-chetasaḥ",
        simpleMeaning: "Those who know Me along with the principles of the material world, the divine, and sacrifice — they, with minds absorbed in Me, know Me even at the time of death.",
        practicalExplanation: "This final verse of Chapter 7 promises complete remembrance at death for those who truly know Krishna in all aspects. Understanding God in relation to matter (adhibhuta), divinity (adhidaiva), and sacrifice (adhiyajna) creates unshakable connection. Even death cannot sever this bond. The ultimate test of spiritual attainment is dying with God in your heart.",
        strengthReflection: "I cultivate such deep connection with the Divine that even death cannot break our bond.",
        devotionalSurrender: "O Krishna, may You be in my heart at my last breath. Let me know You in life and in death.",
        emotions: ["devotion", "death", "peace"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 7 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 7);

// Add Chapter 7 verses
existingData.shloks = [...filteredShloks, ...chapter7Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter7Verses.length} verses for Chapter 7. Total: ${existingData.shloks.length}`);
