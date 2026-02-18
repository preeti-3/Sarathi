const fs = require('fs');
const path = require('path');

// Chapter 16 - Daivasura Sampad Vibhaga Yoga (The Yoga of Divine and Demoniac Natures) - All 24 verses
const chapter16Verses = [
    {
        id: "16-1",
        chapter: 16,
        verse: 1,
        sanskrit: "श्रीभगवानुवाच। अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
        transliteration: "śhrī bhagavān uvācha abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ dānaṁ damaśh cha yajñaśh cha svādhyāyas tapa ārjavam",
        simpleMeaning: "The Supreme Lord said: Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity, straightforwardness...",
        practicalExplanation: "Krishna begins listing divine qualities: fearlessness (especially of death), inner purity, dedication to knowledge and yoga, generosity, sense control, performing sacred observances, self-study of scriptures, discipline, and honesty.",
        strengthReflection: "I cultivate fearlessness, purity, charity, control, study, austerity, and honesty.",
        devotionalSurrender: "O Lord, develop these divine qualities within me.",
        emotions: ["aspiration", "virtue", "self-improvement"],
        audioUrl: null
    },
    {
        id: "16-2",
        chapter: 16,
        verse: 2,
        sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥",
        transliteration: "ahiṁsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam dayā bhūteṣhv aloluptvaṁ mārdavaṁ hrīr achāpalam",
        simpleMeaning: "...non-violence, truthfulness, absence of anger, renunciation, peacefulness, absence of slander, compassion to all beings, freedom from greed, gentleness, modesty, absence of fickleness...",
        practicalExplanation: "More divine qualities: non-violence, truthfulness, freedom from anger, letting go, inner peace, not speaking ill of others, compassion for all creatures, non-covetousness, gentleness, sense of modesty, steadiness.",
        strengthReflection: "I practice non-violence, truth, peace, compassion, gentleness, and steadiness.",
        devotionalSurrender: "O Lord, fill me with compassion, peace, and freedom from anger.",
        emotions: ["peace", "compassion", "gentleness"],
        audioUrl: null
    },
    {
        id: "16-3",
        chapter: 16,
        verse: 3,
        sanskrit: "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति संपदं दैवीमभिजातस्य भारत॥",
        transliteration: "tejaḥ kṣhamā dhṛitiḥ śhaucham adroho nātimānitā bhavanti sampadaṁ daivīm abhijātasya bhārata",
        simpleMeaning: "...vigor, forgiveness, fortitude, cleanliness, freedom from malice, absence of excessive pride — these belong to one born with divine qualities, O Bharata.",
        practicalExplanation: "The list concludes: energy, patience, determination, purity, non-hatred, humility. These 26 qualities constitute divine nature (daivi sampat). One born with these qualities is destined for liberation.",
        strengthReflection: "I develop vigor, forgiveness, fortitude, cleanliness, and humility.",
        devotionalSurrender: "O Lord, let me be born with divine qualities leading to liberation.",
        emotions: ["divine nature", "aspiration", "completeness"],
        audioUrl: null
    },
    {
        id: "16-4",
        chapter: 16,
        verse: 4,
        sanskrit: "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च। अज्ञानं चाभिजातस्य पार्थ संपदमासुरीम्॥",
        transliteration: "dambho darpo 'bhimānaśh cha krodhaḥ pāruṣhyam eva cha ajñānaṁ chābhijātasya pārtha sampadam āsurīm",
        simpleMeaning: "Hypocrisy, arrogance, self-conceit, anger, harshness, and ignorance — these belong to one born with demoniac qualities, O Partha.",
        practicalExplanation: "Now the demoniac qualities: pretense, pride, vanity, anger, cruelty, and ignorance. These six constitute the demoniac nature (asuri sampat). One born with these qualities is heading toward bondage.",
        strengthReflection: "I recognize and remove hypocrisy, pride, anger, cruelty, and ignorance from myself.",
        devotionalSurrender: "O Lord, remove from me all traces of demoniac nature.",
        emotions: ["self-awareness", "correction", "humility"],
        audioUrl: null
    },
    {
        id: "16-5",
        chapter: 16,
        verse: 5,
        sanskrit: "दैवी संपद्विमोक्षाय निबन्धायासुरी मता। मा शुचः संपदं दैवीमभिजातोऽसि पाण्डव॥",
        transliteration: "daivī sampad vimokṣhāya nibandhāyāsurī matā mā śhuchaḥ sampadaṁ daivīm abhijāto 'si pāṇḍava",
        simpleMeaning: "Divine nature leads to liberation; demoniac nature leads to bondage. Do not grieve, O Pandava — you are born with divine qualities.",
        practicalExplanation: "The results are clear: divine qualities lead to liberation, demoniac qualities to bondage. Krishna reassures Arjuna that he has divine nature — no need to worry. We can examine ourselves and cultivate divine qualities.",
        strengthReflection: "I choose divine qualities that lead to liberation, not demoniac ones that bind.",
        devotionalSurrender: "O Lord, I trust Your assurance. Help me strengthen my divine nature.",
        emotions: ["reassurance", "hope", "direction"],
        audioUrl: null
    },
    {
        id: "16-6",
        chapter: 16,
        verse: 6,
        sanskrit: "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च। दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे शृणु॥",
        transliteration: "dvau bhūta-sargau loke 'smin daiva āsura eva cha daivo vistaraśhaḥ prokta āsuraṁ pārtha me śhṛiṇu",
        simpleMeaning: "There are two types of beings in this world: divine and demoniac. The divine has been described at length. Now hear from Me about the demoniac, O Partha.",
        practicalExplanation: "Two fundamental orientations exist in humanity: toward the divine or toward the demoniac. Having described divine qualities, Krishna will now detail the demoniac mindset so we can recognize and avoid it.",
        strengthReflection: "I orient myself toward the divine and learn to recognize the demoniac.",
        devotionalSurrender: "O Lord, teach me about demoniac nature so I may avoid it.",
        emotions: ["awareness", "learning", "vigilance"],
        audioUrl: null
    },
    {
        id: "16-7",
        chapter: 16,
        verse: 7,
        sanskrit: "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः। न शौचं नापि चाचारो न सत्यं तेषु विद्यते॥",
        transliteration: "pravṛittiṁ cha nivṛittiṁ cha janā na vidur āsurāḥ na śhauchaṁ nāpi chāchāro na satyaṁ teṣhu vidyate",
        simpleMeaning: "The demoniac do not know what to do and what not to do. Neither purity, nor right conduct, nor truth is found in them.",
        practicalExplanation: "Demoniac people lack moral compass — they don't know right from wrong action. They have no inner or outer purity, no ethical conduct, no commitment to truth. This moral blindness defines the demoniac mindset.",
        strengthReflection: "I maintain moral clarity, purity, ethical conduct, and commitment to truth.",
        devotionalSurrender: "O Lord, let me always know right action and remain committed to truth.",
        emotions: ["moral clarity", "purity", "integrity"],
        audioUrl: null
    },
    {
        id: "16-8",
        chapter: 16,
        verse: 8,
        sanskrit: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्। अपरस्परसंभूतं किमन्यत्कामहैतुकम्॥",
        transliteration: "asatyam apratiṣhṭhaṁ te jagad āhur anīśhvaram aparaspara-sambhūtaṁ kim anyat kāma-haitukam",
        simpleMeaning: "They say the world is unreal, without foundation, without a God, brought about by mutual union alone, caused by lust — what else?",
        practicalExplanation: "The demoniac worldview: the universe is unreal and meaningless, there is no God, everything arose randomly through material processes, desire (lust) is life's driving force. This philosophy leads to selfish, nihilistic behavior.",
        strengthReflection: "I reject the view that life is meaningless and godless, driven only by desire.",
        devotionalSurrender: "O Lord, I affirm that the world is real, purposeful, and You are its foundation.",
        emotions: ["meaning", "faith", "purpose"],
        audioUrl: null
    },
    {
        id: "16-9",
        chapter: 16,
        verse: 9,
        sanskrit: "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः। प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः॥",
        transliteration: "etāṁ dṛiṣhṭim avaṣhṭabhya naṣhṭātmāno 'lpa-buddhayaḥ prabhavanty ugra-karmāṇaḥ kṣhayāya jagato 'hitāḥ",
        simpleMeaning: "Holding this view, these ruined souls of small intellect and cruel deeds arise as enemies of the world for its destruction.",
        practicalExplanation: "Embracing this nihilistic worldview, people of small understanding and lost souls become cruel, destructive forces. They harm the world because they see no meaning or consequence to their actions.",
        strengthReflection: "I cultivate wisdom and compassion, refusing to become a destructive force.",
        devotionalSurrender: "O Lord, protect me from nihilistic views that lead to cruelty and destruction.",
        emotions: ["protection", "wisdom", "compassion"],
        audioUrl: null
    },
    {
        id: "16-10",
        chapter: 16,
        verse: 10,
        sanskrit: "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः। मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः॥",
        transliteration: "kāmam āśhritya duṣhpūraṁ dambha-māna-madānvitāḥ mohād gṛihītvāsad-grāhān pravartante 'śhuchi-vratāḥ",
        simpleMeaning: "Resorting to insatiable desire, filled with hypocrisy, pride, and arrogance, they hold false views through delusion and act with impure resolves.",
        practicalExplanation: "The demoniac are driven by endless desire (never satisfied), full of pretense, pride, and arrogance. Through delusion they hold wrong ideas, and their resolves are impure — aimed at selfish ends regardless of harm.",
        strengthReflection: "I avoid insatiable desire, hypocrisy, and impure resolves.",
        devotionalSurrender: "O Lord, satisfy my soul so I am not driven by endless craving.",
        emotions: ["contentment", "humility", "purity"],
        audioUrl: null
    },
    {
        id: "16-11",
        chapter: 16,
        verse: 11,
        sanskrit: "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः। कामोपभोगपरमा एतावदिति निश्चिताः॥",
        transliteration: "chintām aparimeyāṁ cha pralayāntām upāśhritāḥ kāmopabhoga-paramā etāvad iti niśhchitāḥ",
        simpleMeaning: "Beset by immeasurable anxieties ending only at death, regarding gratification of desires as the highest goal, convinced that is all there is...",
        practicalExplanation: "The demoniac carry endless worries until death. They consider sense gratification life's highest goal, believing nothing more exists. This shallow, anxious existence misses life's deeper purpose and peace.",
        strengthReflection: "I recognize that sense pleasure is not life's highest goal — there is more.",
        devotionalSurrender: "O Lord, free me from endless anxiety and the delusion that pleasure is all.",
        emotions: ["freedom from anxiety", "higher purpose", "depth"],
        audioUrl: null
    },
    {
        id: "16-12",
        chapter: 16,
        verse: 12,
        sanskrit: "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः। ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्॥",
        transliteration: "āśhā-pāśha-śhatair baddhāḥ kāma-krodha-parāyaṇāḥ īhante kāma-bhogārtham anyāyenārtha-sañchayān",
        simpleMeaning: "...bound by hundreds of cords of hope, given over to desire and anger, they strive to amass wealth by unjust means for the gratification of desires.",
        practicalExplanation: "Bound by countless hopes and expectations, driven by desire and anger, the demoniac strive to accumulate wealth through any means — even unjust ones — all for sense enjoyment. This is spiritual bondage.",
        strengthReflection: "I seek wealth through just means, not driven by endless desire and anger.",
        devotionalSurrender: "O Lord, free me from the bondage of excessive hopes, desires, and anger.",
        emotions: ["freedom", "justice", "contentment"],
        audioUrl: null
    },
    {
        id: "16-13",
        chapter: 16,
        verse: 13,
        sanskrit: "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्। इदमस्तीदमपि मे भविष्यति पुनर्धनम्॥",
        transliteration: "idam adya mayā labdham imaṁ prāpsye manoratham idam astīdam api me bhaviṣhyati punar dhanam",
        simpleMeaning: "'This I have gained today; this desire I shall fulfill; this wealth is mine, and this also shall be mine in the future...'",
        practicalExplanation: "The demoniac mindset in action: 'I got this today, I'll get that tomorrow; this is mine, that will be mine too.' Endless acquisition, possessiveness, and future-projecting desire characterize their thinking.",
        strengthReflection: "I am content with what I have and don't obsess over future acquisitions.",
        devotionalSurrender: "O Lord, free me from the endless acquiring mind that thinks only of 'mine.'",
        emotions: ["contentment", "present moment", "non-possessiveness"],
        audioUrl: null
    },
    {
        id: "16-14",
        chapter: 16,
        verse: 14,
        sanskrit: "असौ मया हतः शत्रुर्हनिष्ये चापरानपि। ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी॥",
        transliteration: "asau mayā hataḥ śhatrur haniṣhye chāparān api īśhvaro 'ham ahaṁ bhogī siddho 'haṁ balavān sukhī",
        simpleMeaning: "'That enemy has been slain by me, and I shall slay others too. I am the lord, I am the enjoyer, I am successful, powerful, and happy...'",
        practicalExplanation: "More demoniac thinking: 'I destroyed my enemy, I'll destroy more; I am God/lord of my realm, I am the supreme enjoyer, I am accomplished, powerful, and happy.' This is extreme ego — seeing oneself as god.",
        strengthReflection: "I am not the lord; God is. I am not the supreme enjoyer or controller.",
        devotionalSurrender: "O Lord, You are the true Lord and Enjoyer. I am Your humble servant.",
        emotions: ["humility", "surrender", "truth"],
        audioUrl: null
    },
    {
        id: "16-15",
        chapter: 16,
        verse: 15,
        sanskrit: "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया। यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः॥",
        transliteration: "āḍhyo 'bhijanavān asmi ko 'nyo 'sti sadṛiśho mayā yakṣhye dāsyāmi modiṣhya ity ajñāna-vimohitāḥ",
        simpleMeaning: "'I am wealthy and highborn. Who else is equal to me? I shall perform sacrifices, I shall give charity, I shall rejoice' — thus deluded by ignorance.",
        practicalExplanation: "The demoniac boast: 'I'm rich and well-born, who equals me? I'll do rituals to show off, give to be praised, and be happy in my superiority.' Even their charity and worship are ego-driven, deluded by ignorance.",
        strengthReflection: "I perform worship and charity without ego, not for praise or superiority.",
        devotionalSurrender: "O Lord, purify my worship and giving from all ego and desire for recognition.",
        emotions: ["purity of intention", "humility", "sincerity"],
        audioUrl: null
    },
    {
        id: "16-16",
        chapter: 16,
        verse: 16,
        sanskrit: "अनेकचित्तविभ्रान्ता मोहजालसमावृताः। प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ॥",
        transliteration: "aneka-chitta-vibhrāntā moha-jāla-samāvṛitāḥ prasaktāḥ kāma-bhogeṣhu patanti narake 'śhuchau",
        simpleMeaning: "Bewildered by many thoughts, covered in a net of delusion, addicted to sense gratification — they fall into a foul hell.",
        practicalExplanation: "Result of demoniac living: mind scattered in confusion, trapped in delusion's web, addicted to pleasures — such beings fall to hellish states. Their own choices create their downfall.",
        strengthReflection: "I maintain mental clarity, avoid delusion's trap, and don't become addicted to pleasures.",
        devotionalSurrender: "O Lord, protect me from the scattered mind and addiction that lead to suffering.",
        emotions: ["clarity", "freedom", "protection"],
        audioUrl: null
    },
    {
        id: "16-17",
        chapter: 16,
        verse: 17,
        sanskrit: "आत्मसंभाविताः स्तब्धा धनमानमदान्विताः। यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम्॥",
        transliteration: "ātma-sambhāvitāḥ stabdhā dhana-māna-madānvitāḥ yajante nāma-yajñais te dambhenāvidhi-pūrvakam",
        simpleMeaning: "Self-conceited, stubborn, filled with pride and intoxication of wealth, they perform sacrifices in name only with hypocrisy, disregarding the scriptural injunctions.",
        practicalExplanation: "The demoniac are self-important, obstinate, drunk on wealth and pride. They perform religious acts for show only, hypocritically, without following proper guidelines. Their spirituality is fake, designed to impress.",
        strengthReflection: "I practice spiritual disciplines sincerely, not for show or without proper guidance.",
        devotionalSurrender: "O Lord, let my worship be genuine, humble, and in accordance with truth.",
        emotions: ["sincerity", "genuineness", "humility"],
        audioUrl: null
    },
    {
        id: "16-18",
        chapter: 16,
        verse: 18,
        sanskrit: "अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः। मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥",
        transliteration: "ahaṅkāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ cha saṁśhritāḥ mām ātma-para-deheṣhu pradviṣhanto 'bhyasūyakāḥ",
        simpleMeaning: "Given over to ego, force, arrogance, desire, and anger, these envious persons hate Me in their own bodies and in those of others.",
        practicalExplanation: "The demoniac cling to ego, brute force, pride, desire, and anger. Being envious, they hate the Divine presence in themselves and others. They reject the God within, which is ultimate self-destruction.",
        strengthReflection: "I honor the Divine in myself and others, rejecting ego, force, and envy.",
        devotionalSurrender: "O Lord, let me never hate You within myself or others. Remove my envy.",
        emotions: ["reverence", "love", "acceptance"],
        audioUrl: null
    },
    {
        id: "16-19",
        chapter: 16,
        verse: 19,
        sanskrit: "तानहं द्विषतः क्रुरान्संसारेषु नराधमान्। क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु॥",
        transliteration: "tān ahaṁ dviṣhataḥ krūrān sansāreṣhu narādhamān kṣhipāmy ajasram aśhubhān āsurīṣhv eva yoniṣhu",
        simpleMeaning: "These hateful, cruel, and vile people — the lowest of humanity — I repeatedly cast into demoniac wombs in the cycles of rebirth.",
        practicalExplanation: "Those who hate with cruelty, the lowest of humans, are repeatedly born into demoniac conditions. This isn't divine punishment but natural consequence — hateful consciousness attracts hateful circumstances.",
        strengthReflection: "I choose love over hate, knowing that my consciousness shapes my future births.",
        devotionalSurrender: "O Lord, remove all hate and cruelty from me. Let me never fall to such births.",
        emotions: ["consequence", "choice", "transformation"],
        audioUrl: null
    },
    {
        id: "16-20",
        chapter: 16,
        verse: 20,
        sanskrit: "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि। मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्॥",
        transliteration: "āsurīṁ yonim āpannā mūḍhā janmani janmani mām aprāpyaiva kaunteya tato yānty adhamāṁ gatim",
        simpleMeaning: "Entering demoniac wombs, deluded birth after birth, never reaching Me, O son of Kunti, they sink to the lowest condition.",
        practicalExplanation: "Born repeatedly in demoniac conditions, these deluded beings never reach God. They spiral downward to ever lower states. Without divine connection, there's no way up — only further descent.",
        strengthReflection: "I maintain my connection to God to avoid spiritual descent.",
        devotionalSurrender: "O Lord, keep me connected to You so I never fall into spiritual descent.",
        emotions: ["urgency", "connection", "protection"],
        audioUrl: null
    },
    {
        id: "16-21",
        chapter: 16,
        verse: 21,
        sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
        transliteration: "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśhanam ātmanaḥ kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
        simpleMeaning: "Three are the gates to this hell, destructive of the self: desire, anger, and greed. Therefore, one should abandon these three.",
        practicalExplanation: "Three gates lead to hell and self-destruction: desire (kama), anger (krodha), and greed (lobha). These three must be abandoned. They are the root causes of demoniac nature and spiritual downfall.",
        strengthReflection: "I work to overcome desire, anger, and greed — the three gates to hell.",
        devotionalSurrender: "O Lord, help me abandon desire, anger, and greed that destroy the soul.",
        emotions: ["vigilance", "discipline", "freedom"],
        audioUrl: null
    },
    {
        id: "16-22",
        chapter: 16,
        verse: 22,
        sanskrit: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः। आचरत्यात्मनः श्रेयस्ततो याति परां गतिम्॥",
        transliteration: "etair vimuktaḥ kaunteya tamo-dvārais tribhir naraḥ ācharaty ātmanaḥ śhreyas tato yāti parāṁ gatim",
        simpleMeaning: "A person who is free from these three gates of darkness, O son of Kunti, practices what is good for the self and thus attains the supreme goal.",
        practicalExplanation: "One who is freed from desire, anger, and greed — the three dark gates — can practice true self-welfare. Being free from these destructive forces, they attain the highest destination. Freedom from vice leads to liberation.",
        strengthReflection: "Freed from desire, anger, and greed, I practice true self-welfare and attain the highest.",
        devotionalSurrender: "O Lord, free me from these three gates of darkness so I may attain the supreme.",
        emotions: ["freedom", "progress", "attainment"],
        audioUrl: null
    },
    {
        id: "16-23",
        chapter: 16,
        verse: 23,
        sanskrit: "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः। न स सिद्धिमवाप्नोति न सुखं न परां गतिम्॥",
        transliteration: "yaḥ śhāstra-vidhim utsṛijya vartate kāma-kārataḥ na sa siddhim avāpnoti na sukhaṁ na parāṁ gatim",
        simpleMeaning: "One who discards scriptural injunctions and acts according to one's own desires attains neither perfection, nor happiness, nor the supreme goal.",
        practicalExplanation: "Whoever abandons scriptural guidance and follows mere impulse gains neither perfection, happiness, nor the highest goal. Self-will without wisdom leads nowhere good. Scriptures provide the map; ignoring them, we get lost.",
        strengthReflection: "I follow scriptural guidance rather than mere impulse to attain lasting good.",
        devotionalSurrender: "O Lord, help me follow Your guidance rather than my blind impulses.",
        emotions: ["guidance", "wisdom", "humility"],
        audioUrl: null
    },
    {
        id: "16-24",
        chapter: 16,
        verse: 24,
        sanskrit: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ। ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि॥",
        transliteration: "tasmāch chhāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau jñātvā śhāstra-vidhānoktaṁ karma kartum ihārhasi",
        simpleMeaning: "Therefore, let scripture be your authority in determining what should and should not be done. Knowing what is declared by scriptural injunctions, you should act accordingly.",
        practicalExplanation: "Therefore, let scriptures be your guide for right action. Understanding what scriptures declare, act accordingly. This is the practical conclusion: follow revealed wisdom, not blind impulse or demoniac tendencies.",
        strengthReflection: "I let scriptures guide me in determining right and wrong action.",
        devotionalSurrender: "O Lord, may Your revealed wisdom be my authority for action and life.",
        emotions: ["guidance", "clarity", "right action"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 16 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 16);

// Add Chapter 16 verses
existingData.shloks = [...filteredShloks, ...chapter16Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter16Verses.length} verses for Chapter 16. Total: ${existingData.shloks.length}`);
