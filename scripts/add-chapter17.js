const fs = require('fs');
const path = require('path');

// Chapter 17 - Shraddhatraya Vibhaga Yoga (The Yoga of the Three Types of Faith) - All 28 verses
const chapter17Verses = [
    {
        id: "17-1",
        chapter: 17,
        verse: 1,
        sanskrit: "अर्जुन उवाच। ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः। तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः॥",
        transliteration: "arjuna uvācha ye śhāstra-vidhim utsṛijya yajante śhraddhayānvitāḥ teṣhāṁ niṣhṭhā tu kā kṛiṣhṇa sattvam āho rajas tamaḥ",
        simpleMeaning: "Arjuna said: O Krishna, what is the condition of those who, setting aside scriptural injunctions, worship with faith? Is it sattva, rajas, or tamas?",
        practicalExplanation: "Arjuna asks about those who worship sincerely but without following scripture. What determines their nature — their faith or their ignorance of rules? This opens a discussion on the role of faith (shraddha).",
        strengthReflection: "I examine the quality of my faith beyond mere external observances.",
        devotionalSurrender: "O Lord, reveal to me the nature of true faith.",
        emotions: ["inquiry", "understanding", "faith"],
        audioUrl: null
    },
    {
        id: "17-2",
        chapter: 17,
        verse: 2,
        sanskrit: "श्रीभगवानुवाच। त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा। सात्त्विकी राजसी चैव तामसी चेति तां शृणु॥",
        transliteration: "śhrī bhagavān uvācha tri-vidhā bhavati śhraddhā dehināṁ sā svabhāva-jā sāttvikī rājasī chaiva tāmasī cheti tāṁ śhṛiṇu",
        simpleMeaning: "The Supreme Lord said: The faith of embodied beings is of three kinds, born of their nature — sattvic, rajasic, and tamasic. Hear about this.",
        practicalExplanation: "Krishna explains that faith comes in three varieties based on the person's innate nature (svabhava). Sattvic faith is pure, rajasic is passionate, tamasic is dark. Our fundamental disposition colors our faith.",
        strengthReflection: "My faith reflects my nature; I cultivate sattvic (pure) faith.",
        devotionalSurrender: "O Lord, transform my nature so my faith becomes sattvic.",
        emotions: ["self-understanding", "aspiration", "growth"],
        audioUrl: null
    },
    {
        id: "17-3",
        chapter: 17,
        verse: 3,
        sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
        transliteration: "sattvānurūpā sarvasya śhraddhā bhavati bhārata śhraddhā-mayo 'yaṁ puruṣho yo yach-chhraddhaḥ sa eva saḥ",
        simpleMeaning: "The faith of each person accords with his nature, O Bharata. A person is made of faith — as is one's faith, so is one.",
        practicalExplanation: "We become what we believe. Faith shapes our entire being. 'Shraddha-mayo' — a person is made of faith. As your faith is, so you are. This is profound: change your faith, change yourself.",
        strengthReflection: "I am made of my faith. What I believe, I become.",
        devotionalSurrender: "O Lord, let my faith be in You so I may become godly.",
        emotions: ["identity", "transformation", "power of belief"],
        audioUrl: null
    },
    {
        id: "17-4",
        chapter: 17,
        verse: 4,
        sanskrit: "यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः। प्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः॥",
        transliteration: "yajante sāttvikā devān yakṣha-rakṣhānsi rājasāḥ pretān bhūta-gaṇānśh chānye yajante tāmasā janāḥ",
        simpleMeaning: "Sattvic people worship the gods; rajasic ones worship demigods and demons; others, the tamasic, worship ghosts and spirits.",
        practicalExplanation: "Faith determines what we worship: sattvic people worship divine beings (devatas), rajasic people worship powerful spirits for material gain, tamasic people worship ghosts and dark entities. Our object of worship reveals our nature.",
        strengthReflection: "I direct my worship toward the highest divine, not toward lower beings.",
        devotionalSurrender: "O Lord, let my worship be directed only toward You, the highest.",
        emotions: ["discernment", "elevation", "purity"],
        audioUrl: null
    },
    {
        id: "17-5",
        chapter: 17,
        verse: 5,
        sanskrit: "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः। दम्भाहंकारसंयुक्ताः कामरागबलान्विताः॥",
        transliteration: "aśhāstra-vihitaṁ ghoraṁ tapyante ye tapo janāḥ dambhāhaṅkāra-saṁyuktāḥ kāma-rāga-balānvitāḥ",
        simpleMeaning: "Those who perform severe austerities not enjoined by the scriptures, given to hypocrisy and egotism, impelled by desire and attachment...",
        practicalExplanation: "Some perform extreme, non-scriptural austerities driven by ego, hypocrisy, desire, and attachment. Such practices, however severe, are not spiritual but ego-driven. True austerity follows wisdom, not willfulness.",
        strengthReflection: "I practice proper austerities guided by wisdom, not extreme ego-driven ones.",
        devotionalSurrender: "O Lord, guide my austerities according to Your wisdom, not my ego.",
        emotions: ["wisdom", "balance", "guidance"],
        audioUrl: null
    },
    {
        id: "17-6",
        chapter: 17,
        verse: 6,
        sanskrit: "कर्षयन्तः शरीरस्थं भूतग्राममचेतसः। मां चैवान्तःशरीरस्थं तान्विद्ध्यासुरनिश्चयान्॥",
        transliteration: "karṣhayantaḥ śharīra-sthaṁ bhūta-grāmam achetasaḥ māṁ chaivāntaḥ śharīra-sthaṁ tān viddhy āsura-niśhchayān",
        simpleMeaning: "...torturing the elements in the body and also Me dwelling within — know them to be of demoniac resolve.",
        practicalExplanation: "Those who torture the body's elements and thus torture the Divine within are of demoniac nature. God dwells in the body; self-harm is harming God's temple. Such extreme practices are condemned, not praised.",
        strengthReflection: "I honor my body as God's dwelling, not tormenting it through extremism.",
        devotionalSurrender: "O Lord, dwelling within me, let me honor You by treating my body wisely.",
        emotions: ["respect", "balance", "divine presence"],
        audioUrl: null
    },
    {
        id: "17-7",
        chapter: 17,
        verse: 7,
        sanskrit: "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः। यज्ञस्तपस्तथा दानं तेषां भेदमिमं शृणु॥",
        transliteration: "āhāras tv api sarvasya tri-vidho bhavati priyaḥ yajñas tapas tathā dānaṁ teṣhāṁ bhedam imaṁ śhṛiṇu",
        simpleMeaning: "Even the food that is dear to each is of three kinds. Likewise are sacrifice, austerity, and charity. Hear now the distinction between them.",
        practicalExplanation: "Food preferences, worship styles, austerities, and charity all come in three types according to the gunas. Krishna will now explain each, giving practical guidance for everyday life choices.",
        strengthReflection: "I examine my food, worship, discipline, and giving through the lens of the three gunas.",
        devotionalSurrender: "O Lord, teach me to make sattvic choices in food, worship, austerity, and giving.",
        emotions: ["discernment", "practical wisdom", "application"],
        audioUrl: null
    },
    {
        id: "17-8",
        chapter: 17,
        verse: 8,
        sanskrit: "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः। रस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः॥",
        transliteration: "āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ rasyāḥ snigdhāḥ sthirā hṛidyā āhārāḥ sāttvika-priyāḥ",
        simpleMeaning: "Foods that promote life, virtue, strength, health, happiness, and satisfaction, that are juicy, oily, wholesome, and pleasing to the heart — these are dear to the sattvic.",
        practicalExplanation: "Sattvic foods increase life, purity, strength, health, happiness, and satisfaction. They are tasty (rasa), nourishing (snigdha), substantial (sthira), and heart-pleasing (hridya). Fresh, natural, balanced foods are sattvic.",
        strengthReflection: "I choose sattvic foods that nourish life, health, and inner clarity.",
        devotionalSurrender: "O Lord, guide my food choices toward purity and nourishment.",
        emotions: ["health", "purity", "nourishment"],
        audioUrl: null
    },
    {
        id: "17-9",
        chapter: 17,
        verse: 9,
        sanskrit: "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः। आहारा राजसस्येष्टा दुःखशोकामयप्रदाः॥",
        transliteration: "kaṭv-amla-lavaṇāty-uṣhṇa-tīkṣhṇa-rūkṣha-vidāhinaḥ āhārā rājasasyeṣhṭā duḥkha-śhokāmaya-pradāḥ",
        simpleMeaning: "Foods that are bitter, sour, salty, very hot, pungent, dry, and burning — these are dear to the rajasic and cause pain, grief, and disease.",
        practicalExplanation: "Rajasic foods are excessively bitter, sour, salty, hot, spicy, dry, and burning. They stimulate but ultimately cause discomfort, emotional disturbance, and illness. These foods agitate rather than nourish.",
        strengthReflection: "I moderate rajasic foods that cause agitation and discomfort.",
        devotionalSurrender: "O Lord, help me avoid foods that disturb my peace and health.",
        emotions: ["moderation", "balance", "awareness"],
        audioUrl: null
    },
    {
        id: "17-10",
        chapter: 17,
        verse: 10,
        sanskrit: "यातयामं गतरसं पूति पर्युषितं च यत्। उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम्॥",
        transliteration: "yāta-yāmaṁ gata-rasaṁ pūti paryuṣhitaṁ cha yat uchchhiṣhṭam api chāmedhyaṁ bhojanaṁ tāmasa-priyam",
        simpleMeaning: "Food that is stale, tasteless, putrid, leftover, and impure — such food is dear to the tamasic.",
        practicalExplanation: "Tamasic foods are stale, flavorless, rotten, leftover (from another's plate), and unclean. Such food promotes dullness, disease, and impurity. Fresh, clean food is essential for spiritual and physical health.",
        strengthReflection: "I avoid tamasic foods that are stale, rotten, or impure.",
        devotionalSurrender: "O Lord, let me consume only what is fresh and pure.",
        emotions: ["purity", "freshness", "cleanliness"],
        audioUrl: null
    },
    {
        id: "17-11",
        chapter: 17,
        verse: 11,
        sanskrit: "अफलाकाङ्क्षिभिर्यज्ञो विधिदिष्टो य इज्यते। यष्टव्यमेवेति मनः समाधाय स सात्त्विकः॥",
        transliteration: "aphalākāṅkṣhibhir yajño vidhi-diṣhṭo ya ijyate yaṣhṭavyam eveti manaḥ samādhāya sa sāttvikaḥ",
        simpleMeaning: "That sacrifice which is offered according to scriptural injunctions, by those not desiring fruit, with the mind focused on the idea that it is one's duty to sacrifice — that is sattvic.",
        practicalExplanation: "Sattvic worship follows scriptural guidelines, expects no reward, and is performed from duty alone. The mind is focused on the act itself, not on results. This is pure, ego-free worship.",
        strengthReflection: "I worship without expecting rewards, focused on duty and devotion alone.",
        devotionalSurrender: "O Lord, let my worship be pure — duty-focused, reward-free, scripture-guided.",
        emotions: ["purity", "duty", "selflessness"],
        audioUrl: null
    },
    {
        id: "17-12",
        chapter: 17,
        verse: 12,
        sanskrit: "अभिसंधाय तु फलं दम्भार्थमपि चैव यत्। इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम्॥",
        transliteration: "abhisandhāya tu phalaṁ dambhārtham api chaiva yat ijyate bharata-śhreṣhṭha taṁ yajñaṁ viddhi rājasam",
        simpleMeaning: "But that sacrifice which is offered with expectation of reward or for the sake of show, O best of the Bharatas — know it to be rajasic.",
        practicalExplanation: "Rajasic worship is performed for results or for public display. The intention is either to gain something or to impress others. Though externally correct, the motive pollutes the act.",
        strengthReflection: "I examine my worship to ensure it's not for show or reward.",
        devotionalSurrender: "O Lord, purify my worship from all desire for reward or recognition.",
        emotions: ["sincerity", "self-examination", "purity of motive"],
        audioUrl: null
    },
    {
        id: "17-13",
        chapter: 17,
        verse: 13,
        sanskrit: "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम्। श्रद्धाविरहितं यज्ञं तामसं परिचक्षते॥",
        transliteration: "vidhi-hīnam asṛiṣhṭānnaṁ mantra-hīnam adakṣhiṇam śhraddhā-virahitaṁ yajñaṁ tāmasaṁ parichakṣhate",
        simpleMeaning: "Sacrifice performed without regard to scriptural injunctions, without distribution of food, without mantras, without gifts to priests, and without faith — that is declared to be tamasic.",
        practicalExplanation: "Tamasic worship ignores proper guidelines, offers no sharing of food, lacks sacred sounds, gives no donation, and has no faith. It's worship in form only — empty, mechanical, meaningless ritual.",
        strengthReflection: "I ensure my worship has proper form, content, and sincere faith.",
        devotionalSurrender: "O Lord, let my worship be complete — proper, generous, and faith-filled.",
        emotions: ["completeness", "sincerity", "faith"],
        audioUrl: null
    },
    {
        id: "17-14",
        chapter: 17,
        verse: 14,
        sanskrit: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्। ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते॥",
        transliteration: "deva-dvija-guru-prājña-pūjanaṁ śhaucham ārjavam brahmacharyam ahiṁsā cha śhārīraṁ tapa uchyate",
        simpleMeaning: "Worship of the gods, the twice-born, teachers, and the wise; purity, uprightness, celibacy, and non-violence — this is called austerity of the body.",
        practicalExplanation: "Physical austerity (tapas) includes: worshipping the divine and teachers, maintaining bodily purity, living with integrity, practicing appropriate celibacy, and non-violence. These bodily disciplines purify the physical being.",
        strengthReflection: "I practice physical austerity: honor teachers, maintain purity, integrity, and non-violence.",
        devotionalSurrender: "O Lord, help me discipline my body in worship, purity, and non-violence.",
        emotions: ["discipline", "respect", "purity"],
        audioUrl: null
    },
    {
        id: "17-15",
        chapter: 17,
        verse: 15,
        sanskrit: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥",
        transliteration: "anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ cha yat svādhyāyābhyasanaṁ chaiva vāṅ-mayaṁ tapa uchyate",
        simpleMeaning: "Speech that causes no distress, that is truthful, pleasant, and beneficial, as well as regular recitation of scriptures — this is called austerity of speech.",
        practicalExplanation: "Speech austerity means: words that don't agitate others, truthful speech, words that are pleasant AND beneficial (not just nice), and regular study/recitation of sacred texts. Control of speech is powerful discipline.",
        strengthReflection: "I practice speech austerity: non-disturbing, truthful, pleasant, beneficial, scriptural.",
        devotionalSurrender: "O Lord, discipline my speech to be truthful, kind, and spiritually aligned.",
        emotions: ["mindful speech", "truth", "kindness"],
        audioUrl: null
    },
    {
        id: "17-16",
        chapter: 17,
        verse: 16,
        sanskrit: "मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः। भावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥",
        transliteration: "manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ bhāva-sanśhuddhir ity etat tapo mānasam uchyate",
        simpleMeaning: "Serenity of mind, gentleness, silence, self-control, and purity of being — this is called austerity of the mind.",
        practicalExplanation: "Mental austerity includes: peaceful mind (prasada), gentle disposition (saumya), appropriate silence (mauna), self-control, and purity of intention. These inner disciplines are the subtlest and most powerful.",
        strengthReflection: "I practice mental austerity: serenity, gentleness, silence, control, pure intention.",
        devotionalSurrender: "O Lord, make my mind serene, gentle, controlled, and pure.",
        emotions: ["serenity", "gentleness", "inner purity"],
        audioUrl: null
    },
    {
        id: "17-17",
        chapter: 17,
        verse: 17,
        sanskrit: "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः। अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते॥",
        transliteration: "śhraddhayā parayā taptaṁ tapas tat tri-vidhaṁ naraiḥ aphalākāṅkṣhibhir yuktaiḥ sāttvikaṁ parichakṣhate",
        simpleMeaning: "This threefold austerity, practiced with supreme faith by people who are not desirous of fruit and who are steadfast — is called sattvic.",
        practicalExplanation: "When all three forms of austerity (body, speech, mind) are practiced with supreme faith, without desire for reward, by steady practitioners — that is sattvic austerity. Faith and selflessness elevate discipline.",
        strengthReflection: "I practice body, speech, and mind disciplines with faith and without expecting reward.",
        devotionalSurrender: "O Lord, let my austerities be sattvic — faith-filled and selfless.",
        emotions: ["faith", "discipline", "selflessness"],
        audioUrl: null
    },
    {
        id: "17-18",
        chapter: 17,
        verse: 18,
        sanskrit: "सत्कारमानपूजार्थं तपो दम्भेन चैव यत्। क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम्॥",
        transliteration: "satkāra-māna-pūjārthaṁ tapo dambhena chaiva yat kriyate tad iha proktaṁ rājasaṁ chalam adhruvam",
        simpleMeaning: "Austerity performed for the sake of gaining respect, honor, and reverence, and with hypocrisy — is said to be rajasic, unstable, and impermanent.",
        practicalExplanation: "Austerity done for reputation, honor, worship from others, or with hypocrisy is rajasic. Its results are unstable and temporary. When ego drives discipline, the benefits fade quickly.",
        strengthReflection: "I practice austerity for spiritual growth, not for recognition or praise.",
        devotionalSurrender: "O Lord, purify my disciplines from the desire for honor and recognition.",
        emotions: ["sincerity", "humility", "inner focus"],
        audioUrl: null
    },
    {
        id: "17-19",
        chapter: 17,
        verse: 19,
        sanskrit: "मूढग्राहेणात्मनो यत्पीडया क्रियते तपः। परस्योत्सादनार्थं वा तत्तामसमुदाहृतम्॥",
        transliteration: "mūḍha-grāheṇātmano yat pīḍayā kriyate tapaḥ parasyotsādanārthaṁ vā tat tāmasam udāhṛitam",
        simpleMeaning: "Austerity performed with foolish obstinacy, with self-torture, or for the purpose of harming another — that is declared to be tamasic.",
        practicalExplanation: "Tamasic austerity is done with stubborn foolishness, tortures oneself, or aims to harm others. Self-mortification from ignorance or practices to gain power over others are spiritually destructive.",
        strengthReflection: "I reject foolish, self-torturing, or harmful forms of austerity.",
        devotionalSurrender: "O Lord, protect me from misguided practices that harm myself or others.",
        emotions: ["wisdom", "protection", "right action"],
        audioUrl: null
    },
    {
        id: "17-20",
        chapter: 17,
        verse: 20,
        sanskrit: "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥",
        transliteration: "dātavyam iti yad dānaṁ dīyate 'nupakāriṇe deśhe kāle cha pātre cha tad dānaṁ sāttvikaṁ smṛitam",
        simpleMeaning: "That gift which is given with the thought 'it is one's duty to give,' to a worthy person who can give nothing in return, at the right place and time — that is considered sattvic.",
        practicalExplanation: "Sattvic giving: done from duty, to those who cannot repay, at appropriate time and place, to worthy recipients. It expects nothing in return — neither material reward nor even gratitude. Pure giving.",
        strengthReflection: "I give from duty to worthy recipients who cannot return the favor.",
        devotionalSurrender: "O Lord, let my giving be pure — duty-based, selfless, appropriate.",
        emotions: ["generosity", "duty", "selflessness"],
        audioUrl: null
    },
    {
        id: "17-21",
        chapter: 17,
        verse: 21,
        sanskrit: "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः। दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम्॥",
        transliteration: "yat tu pratyupakārārthaṁ phalam uddiśhya vā punaḥ dīyate cha parikliṣhṭaṁ tad dānaṁ rājasaṁ smṛitam",
        simpleMeaning: "But that gift which is given with expectation of return, or with a desire for fruit, or reluctantly — that is considered rajasic.",
        practicalExplanation: "Rajasic giving expects something back — return favor, reward, or recognition. It may also be given reluctantly, with regret or resentment. The inner resistance or expectation pollutes the gift.",
        strengthReflection: "I give without expecting return, reward, or recognition.",
        devotionalSurrender: "O Lord, purify my giving from all expectation and reluctance.",
        emotions: ["purity of giving", "self-examination", "generosity"],
        audioUrl: null
    },
    {
        id: "17-22",
        chapter: 17,
        verse: 22,
        sanskrit: "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते। असत्कृतमवज्ञातं तत्तामसमुदाहृतम्॥",
        transliteration: "adeśha-kāle yad dānam apātrebhyaśh cha dīyate asatkṛitam avajñātaṁ tat tāmasam udāhṛitam",
        simpleMeaning: "That gift which is given at the wrong place and time, to unworthy persons, without respect, or with contempt — that is declared to be tamasic.",
        practicalExplanation: "Tamasic giving is wrong in place, time, or recipient. It's given disrespectfully or contemptuously — humiliating the receiver. Such giving may do more harm than good and creates negative karma.",
        strengthReflection: "I give at the right time, to worthy recipients, with respect and honor.",
        devotionalSurrender: "O Lord, help me give wisely, respectfully, and appropriately.",
        emotions: ["discernment", "respect", "wisdom"],
        audioUrl: null
    },
    {
        id: "17-23",
        chapter: 17,
        verse: 23,
        sanskrit: "ओं तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः। ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा॥",
        transliteration: "oṁ tat sad iti nirdeśho brahmaṇas tri-vidhaḥ smṛitaḥ brāhmaṇās tena vedāśh cha yajñāśh cha vihitāḥ purā",
        simpleMeaning: "'Om Tat Sat' — this is declared to be the threefold designation of Brahman. By that, the Brahmanas, the Vedas, and the sacrifices were ordained in ancient times.",
        practicalExplanation: "The sacred formula 'Om Tat Sat' designates the Supreme. Om is the primal sound, Tat means 'That' (the absolute), Sat means 'Truth/Being.' By this, all sacred traditions were established. These words sanctify all spiritual acts.",
        strengthReflection: "I invoke 'Om Tat Sat' to connect my actions to the Supreme.",
        devotionalSurrender: "O Lord, let 'Om Tat Sat' sanctify all my spiritual practices.",
        emotions: ["sanctity", "connection", "tradition"],
        audioUrl: null
    },
    {
        id: "17-24",
        chapter: 17,
        verse: 24,
        sanskrit: "तस्माद्ओमित्युदाहृत्य यज्ञदानतपःक्रियाः। प्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम्॥",
        transliteration: "tasmād om ity udāhṛitya yajña-dāna-tapaḥ-kriyāḥ pravartante vidhānoktāḥ satataṁ brahma-vādinām",
        simpleMeaning: "Therefore, acts of sacrifice, charity, and austerity prescribed by the scriptures are always begun by the knowers of Brahman with the utterance of 'Om.'",
        practicalExplanation: "Those who know Brahman begin all scriptural acts — worship, giving, discipline — with 'Om.' This sacred syllable connects the action to the Supreme, elevating mundane acts to spiritual offerings.",
        strengthReflection: "I begin my spiritual practices with 'Om,' connecting them to the Supreme.",
        devotionalSurrender: "O Lord, let 'Om' connect all my actions to You.",
        emotions: ["connection", "sanctification", "awareness"],
        audioUrl: null
    },
    {
        id: "17-25",
        chapter: 17,
        verse: 25,
        sanskrit: "तदित्यनभिसंधाय फलं यज्ञतपःक्रियाः। दानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः॥",
        transliteration: "tad ity anabhisandhāya phalaṁ yajña-tapaḥ-kriyāḥ dāna-kriyāśh cha vividhāḥ kriyante mokṣha-kāṅkṣhibhiḥ",
        simpleMeaning: "Without desire for fruit, acts of sacrifice, austerity, and various acts of charity are performed by those seeking liberation with the word 'Tat.'",
        practicalExplanation: "Liberation-seekers perform worship, discipline, and charity with 'Tat' (That) — acknowledging these acts belong to the Absolute, not to the ego. 'Tat' removes the sense of personal doership and ownership.",
        strengthReflection: "I dedicate my actions with 'Tat,' recognizing they belong to the Absolute.",
        devotionalSurrender: "O Lord, all my actions are 'Tat' — Yours, not mine.",
        emotions: ["surrender", "non-attachment", "dedication"],
        audioUrl: null
    },
    {
        id: "17-26",
        chapter: 17,
        verse: 26,
        sanskrit: "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते। प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते॥",
        transliteration: "sad-bhāve sādhu-bhāve cha sad ity etat prayujyate praśhaste karmaṇi tathā sach-chhabdaḥ pārtha yujyate",
        simpleMeaning: "'Sat' is used to denote reality and goodness. Likewise, O Partha, the word 'Sat' is used for auspicious action.",
        practicalExplanation: "'Sat' means truth, reality, and goodness. It's used for whatever is real, virtuous, and auspicious. Invoking 'Sat' affirms the action's truth and goodness, aligning it with eternal reality.",
        strengthReflection: "I invoke 'Sat' to affirm the truth and goodness of my actions.",
        devotionalSurrender: "O Lord, let all my actions be 'Sat' — true, real, and good.",
        emotions: ["truth", "goodness", "reality"],
        audioUrl: null
    },
    {
        id: "17-27",
        chapter: 17,
        verse: 27,
        sanskrit: "यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते। कर्म चैव तदर्थीयं सदित्येवाभिधीयते॥",
        transliteration: "yajñe tapasi dāne cha sthitiḥ sad iti chochyate karma chaiva tad-arthīyaṁ sad ity evābhidhīyate",
        simpleMeaning: "Steadfastness in sacrifice, austerity, and charity is also called 'Sat.' And action performed for their sake is likewise called 'Sat.'",
        practicalExplanation: "Steadfastness in worship, discipline, and giving is 'Sat.' Actions done for these purposes are also 'Sat.' The firm commitment to spiritual practices is itself truth and goodness.",
        strengthReflection: "My steadfast commitment to spiritual practice is 'Sat' — truth itself.",
        devotionalSurrender: "O Lord, let me be steadfast in worship, discipline, and giving.",
        emotions: ["steadfastness", "commitment", "truth"],
        audioUrl: null
    },
    {
        id: "17-28",
        chapter: 17,
        verse: 28,
        sanskrit: "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत्। असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह॥",
        transliteration: "aśhraddhayā hutaṁ dattaṁ tapas taptaṁ kṛitaṁ cha yat asad ity uchyate pārtha na cha tat pretya no iha",
        simpleMeaning: "Whatever offering, gift, austerity, or action is performed without faith is called 'Asat,' O Partha. It is of no avail here or hereafter.",
        practicalExplanation: "Whatever is done without faith — sacrifice, charity, discipline, or any action — is 'Asat' (unreal, untrue). It yields no benefit in this life or the next. Faith (shraddha) is essential; without it, actions are empty.",
        strengthReflection: "I ensure all my actions are backed by sincere faith.",
        devotionalSurrender: "O Lord, fill my actions with faith so they are not empty and fruitless.",
        emotions: ["faith", "sincerity", "meaning"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 17 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 17);

// Add Chapter 17 verses
existingData.shloks = [...filteredShloks, ...chapter17Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter17Verses.length} verses for Chapter 17. Total: ${existingData.shloks.length}`);
