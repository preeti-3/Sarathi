const fs = require('fs');
const path = require('path');

// Chapter 8 - Akshara Brahma Yoga (The Yoga of the Imperishable Brahman) - All 28 verses
const chapter8Verses = [
    {
        id: "8-1",
        chapter: 8,
        verse: 1,
        sanskrit: "अर्जुन उवाच। किं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम। अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते॥",
        transliteration: "arjuna uvācha kiṁ tad brahma kim adhyātmaṁ kiṁ karma puruṣhottama adhibhūtaṁ cha kiṁ proktam adhidaivaṁ kim uchyate",
        simpleMeaning: "Arjuna said: O Supreme Person, what is Brahman? What is the self? What is action? What is the material manifestation? And what is the divine?",
        practicalExplanation: "Arjuna's questions reveal the fundamental inquiries of every spiritual seeker. What is the ultimate reality? Who am I? What is the nature of action and the world? These questions must be asked before true understanding can dawn. The sincere seeker never hesitates to ask.",
        strengthReflection: "I embrace my spiritual questions as doorways to deeper understanding.",
        devotionalSurrender: "O Lord, help me ask the right questions and receive Your illuminating answers.",
        emotions: ["curiosity", "seeking", "wisdom"],
        audioUrl: null
    },
    {
        id: "8-2",
        chapter: 8,
        verse: 2,
        sanskrit: "अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन। प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः॥",
        transliteration: "adhiyajñaḥ kathaṁ ko 'tra dehe 'smin madhusūdana prayāṇa-kāle cha kathaṁ jñeyo 'si niyatātmabhiḥ",
        simpleMeaning: "Who is the Lord of sacrifice, and how does He dwell in this body, O Madhusudana? And how can You be known at the time of death by those who practice self-control?",
        practicalExplanation: "Arjuna asks the crucial question: how can one remember God at the moment of death? This reveals that the ultimate test of spiritual practice is what fills our consciousness when everything else fades. The answer lies in lifelong practice and self-discipline.",
        strengthReflection: "I prepare for my final moments by living each day with divine remembrance.",
        devotionalSurrender: "Krishna, be so present in my life that You are naturally present in my death.",
        emotions: ["death", "devotion", "seeking"],
        audioUrl: null
    },
    {
        id: "8-3",
        chapter: 8,
        verse: 3,
        sanskrit: "श्रीभगवानुवाच। अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते। भूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः॥",
        transliteration: "śhrī bhagavān uvācha akṣharaṁ brahma paramaṁ svabhāvo 'dhyātmam uchyate bhūta-bhāvodbhava-karo visargaḥ karma-sanjñitaḥ",
        simpleMeaning: "The Supreme Lord said: The indestructible, transcendental being is called Brahman. Its eternal nature is called the self. The creative force that causes beings to manifest is called karma (action).",
        practicalExplanation: "Krishna defines the key terms with precision. Brahman is the imperishable absolute. Adhyatma is the individual self's essential nature. Karma is the creative force behind all manifestation. Understanding these distinctions clarifies the spiritual landscape and removes confusion.",
        strengthReflection: "I seek clarity in spiritual understanding, knowing that precise knowledge removes confusion.",
        devotionalSurrender: "Lord, thank You for revealing the nature of reality so clearly. Help me understand deeply.",
        emotions: ["wisdom", "clarity", "seeking"],
        audioUrl: null
    },
    {
        id: "8-4",
        chapter: 8,
        verse: 4,
        sanskrit: "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम्। अधियज्ञोऽहमेवात्र देहे देहभृतां वर॥",
        transliteration: "adhibhūtaṁ kṣharo bhāvaḥ puruṣhaśh chādhidaivatam adhiyajño 'ham evātra dehe deha-bhṛitāṁ vara",
        simpleMeaning: "The physical nature is the perishable realm. The cosmic person (Purusha) is the divine. And I alone am the Lord of sacrifice, dwelling here in this body, O best of embodied beings.",
        practicalExplanation: "Krishna reveals that He is the adhiyajna — the Lord of all sacrifice, present within every body. The material world is perishable, but the Divine presence within is eternal. This means God is not far away but intimately present within you, witnessing and receiving all your offerings.",
        strengthReflection: "I recognize the Divine presence dwelling within my own body as the receiver of all my efforts.",
        devotionalSurrender: "O Krishna, You dwell within me. Let all my actions be offerings to You.",
        emotions: ["devotion", "wonder", "presence"],
        audioUrl: null
    },
    {
        id: "8-5",
        chapter: 8,
        verse: 5,
        sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
        transliteration: "anta-kāle cha mām eva smaran muktvā kalevaram yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra sanśhayaḥ",
        simpleMeaning: "And whoever, at the time of death, departs from the body remembering Me alone, attains My nature. Of this there is no doubt.",
        practicalExplanation: "This is the great promise: think of God at death, and you unite with God. The final thought determines the next destination. But this isn't about manipulating the last moment — it's about living a life so saturated with divine remembrance that Krishna naturally fills your consciousness at the end.",
        strengthReflection: "I cultivate divine remembrance now, so it becomes natural at my final moment.",
        devotionalSurrender: "Lord Krishna, may Your name be the last word on my lips, Your form the last image in my mind.",
        emotions: ["death", "devotion", "faith"],
        audioUrl: null
    },
    {
        id: "8-6",
        chapter: 8,
        verse: 6,
        sanskrit: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्। तं तमेवैति कौन्तेय सदा तद्भावभावितः॥",
        transliteration: "yaṁ yaṁ vāpi smaran bhāvaṁ tyajaty ante kalevaram taṁ tam evaiti kaunteya sadā tad-bhāva-bhāvitaḥ",
        simpleMeaning: "Whatever state of being one remembers when leaving the body, that state one will attain without fail, O son of Kunti, being always absorbed in that thought.",
        practicalExplanation: "This extends the principle: we become what we think. The dominant thought pattern shapes our destiny. What you feed your mind throughout life will automatically surface at death. Therefore, choose your mental diet wisely — fill it with the highest, most beautiful thoughts.",
        strengthReflection: "I am conscious of my thoughts, knowing they shape my becoming.",
        devotionalSurrender: "O Lord, fill my mind with thoughts of You, so I naturally return to You.",
        emotions: ["wisdom", "death", "devotion"],
        audioUrl: null
    },
    {
        id: "8-7",
        chapter: 8,
        verse: 7,
        sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥",
        transliteration: "tasmāt sarveṣhu kāleṣhu mām anusmara yudhya cha mayy arpita-mano-buddhir mām evaiṣhyasy asanśhayam",
        simpleMeaning: "Therefore, remember Me at all times and fight. With your mind and intellect fixed on Me, you will surely come to Me.",
        practicalExplanation: "The practical instruction: remember God constantly while performing your duties. Spiritual life isn't about abandoning action but infusing all action with divine remembrance. 'Fight' means engage fully with life's challenges. The combination of devotion and action guarantees reaching the Divine.",
        strengthReflection: "I engage fully with life's challenges while keeping my heart fixed on the Divine.",
        devotionalSurrender: "Krishna, I offer my mind and intellect to You. Guide me through life's battles.",
        emotions: ["devotion", "duty", "courage"],
        audioUrl: null
    },
    {
        id: "8-8",
        chapter: 8,
        verse: 8,
        sanskrit: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना। परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन्॥",
        transliteration: "abhyāsa-yoga-yuktena chetasā nānya-gāminā paramaṁ puruṣhaṁ divyaṁ yāti pārthānuchintayan",
        simpleMeaning: "He who meditates on Me with a mind disciplined by the practice of yoga, not wandering to anything else, reaches the Supreme Divine Person, O Arjuna.",
        practicalExplanation: "The key is abhyasa yoga — disciplined practice without deviation. The mind naturally wanders, but through consistent practice, it can be trained to stay focused. The 'not wandering' isn't forced suppression but natural one-pointedness born of love and practice.",
        strengthReflection: "Through consistent practice, I train my mind to rest in divine contemplation.",
        devotionalSurrender: "Lord, help me cultivate unwavering focus on You through dedicated practice.",
        emotions: ["discipline", "devotion", "focus"],
        audioUrl: null
    },
    {
        id: "8-9",
        chapter: 8,
        verse: 9,
        sanskrit: "कविं पुराणमनुशासितारमणोरणीयांसमनुस्मरेद्यः। सर्वस्य धातारमचिन्त्यरूपमादित्यवर्णं तमसः परस्तात्॥",
        transliteration: "kaviṁ purāṇam anuśhāsitāram aṇor aṇīyānsam anusmared yaḥ sarvasya dhātāram achintya-rūpam āditya-varṇaṁ tamasaḥ parastāt",
        simpleMeaning: "One should meditate on the Supreme as the omniscient, the ancient, the ruler, subtler than the subtlest, the sustainer of all, of inconceivable form, effulgent like the sun, beyond all darkness.",
        practicalExplanation: "Krishna describes how to meditate on Him: as all-knowing, eternal, sovereign, infinitely subtle, the foundation of everything, beyond comprehension, radiant beyond measure, and completely beyond ignorance. These attributes shape the meditation, elevating consciousness toward the infinite.",
        strengthReflection: "I meditate on the Divine as infinite, radiant, and beyond all limitation.",
        devotionalSurrender: "O Lord of light, beyond all darkness, reveal Your inconceivable form within my heart.",
        emotions: ["wonder", "devotion", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-10",
        chapter: 8,
        verse: 10,
        sanskrit: "प्रयाणकाले मनसाचलेन भक्त्या युक्तो योगबलेन चैव। भ्रुवोर्मध्ये प्राणमावेश्य सम्यक्स तं परं पुरुषमुपैति दिव्यम्॥",
        transliteration: "prayāṇa-kāle manasāchalena bhaktyā yukto yoga-balena chaiva bhruvor madhye prāṇam āveśhya samyak sa taṁ paraṁ puruṣham upaiti divyam",
        simpleMeaning: "At the time of death, with an unwavering mind, full of devotion, and with the power of yoga, focusing the life-breath between the eyebrows, one attains the Supreme Divine Person.",
        practicalExplanation: "The technique for conscious departure is described: steady mind, devotion, yogic power, and concentration at the third eye. This isn't just a death practice — it's a meditation technique for deepening divine connection now. The eyebrow center is a gateway to higher consciousness.",
        strengthReflection: "I practice focusing my awareness at the spiritual eye, connecting with divine presence.",
        devotionalSurrender: "Lord, at my final moment, draw my consciousness upward to meet You.",
        emotions: ["death", "devotion", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-11",
        chapter: 8,
        verse: 11,
        sanskrit: "यदक्षरं वेदविदो वदन्ति विशन्ति यद्यतयो वीतरागाः। यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं संग्रहेण प्रवक्ष्ये॥",
        transliteration: "yad akṣharaṁ veda-vido vadanti viśhanti yad yatayo vīta-rāgāḥ yad ichchhanto brahmacharyaṁ charanti tat te padaṁ saṅgraheṇa pravakṣhye",
        simpleMeaning: "I shall now briefly explain that state which the knowers of the Vedas call the Imperishable, which ascetics free from passion enter, and desiring which they practice celibacy.",
        practicalExplanation: "Krishna promises to reveal the goal sought by all sincere seekers: the Imperishable state. The knowers declare it, the disciplined enter it, and those who truly desire it practice self-control to reach it. This is the destination — eternal, unchanging, beyond all suffering.",
        strengthReflection: "I honor the goal of all spiritual traditions: the imperishable, unchanging reality.",
        devotionalSurrender: "O Lord, reveal to me that imperishable state that all seekers long for.",
        emotions: ["seeking", "devotion", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-12",
        chapter: 8,
        verse: 12,
        sanskrit: "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च। मूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम्॥",
        transliteration: "sarva-dvārāṇi sanyamya mano hṛidi nirudhya cha mūrdhny ādhāyātmanaḥ prāṇam āsthito yoga-dhāraṇām",
        simpleMeaning: "Closing all the gates of the body, confining the mind in the heart, fixing the life-breath in the head, established in yogic concentration...",
        practicalExplanation: "The process begins: withdraw from the senses (close the gates), center awareness in the heart, and elevate the life-force to the crown. This is pratyahara and dharana — withdrawal and concentration. The outer world fades as inner reality becomes vivid.",
        strengthReflection: "I practice withdrawing my awareness from external distractions to find inner stillness.",
        devotionalSurrender: "Lord, help me close the doors of distraction and find You in the cave of my heart.",
        emotions: ["peace", "focus", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-13",
        chapter: 8,
        verse: 13,
        sanskrit: "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्। यः प्रयाति त्यजन्देहं स याति परमां गतिम्॥",
        transliteration: "om ity ekākṣharaṁ brahma vyāharan mām anusmaran yaḥ prayāti tyajan dehaṁ sa yāti paramāṁ gatim",
        simpleMeaning: "Uttering the single syllable Om — Brahman — and remembering Me, whoever departs leaving the body, attains the supreme goal.",
        practicalExplanation: "Om is the sound-essence of Brahman, containing all teachings in one syllable. Chanting Om while remembering Krishna at departure ensures liberation. Om is the bridge between the finite and infinite. This practice should begin now, not be left for the last moment.",
        strengthReflection: "I embrace Om as the sound of the infinite, connecting me to the ultimate reality.",
        devotionalSurrender: "Om. With this sacred sound, I remember You, Lord. Let it be my eternal prayer.",
        emotions: ["devotion", "transcendence", "peace"],
        audioUrl: null
    },
    {
        id: "8-14",
        chapter: 8,
        verse: 14,
        sanskrit: "अनन्यचेताः सततं यो मां स्मरति नित्यशः। तस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः॥",
        transliteration: "ananya-chetāḥ satataṁ yo māṁ smarati nityaśhaḥ tasyāhaṁ sulabhaḥ pārtha nitya-yuktasya yoginaḥ",
        simpleMeaning: "To the yogi who constantly remembers Me with undivided attention, I am easily attainable, O Arjuna, because he is always connected to Me.",
        practicalExplanation: "The great promise: for one who thinks of nothing but Krishna, Krishna becomes easy to reach. Not through complex practices or special powers, but through simple, constant remembrance. Love creates accessibility. The beloved is always easy to find for the one who truly loves.",
        strengthReflection: "Through constant remembrance, I make the Divine easily accessible in my life.",
        devotionalSurrender: "O Krishna, I think of You constantly. Be easily found by me, as You have promised.",
        emotions: ["devotion", "love", "faith"],
        audioUrl: null
    },
    {
        id: "8-15",
        chapter: 8,
        verse: 15,
        sanskrit: "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम्। नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः॥",
        transliteration: "mām upetya punar janma duḥkhālayam aśhāśhvatam nāpnuvanti mahātmānaḥ sansiddhiṁ paramāṁ gatāḥ",
        simpleMeaning: "Having reached Me, the great souls are never again born into this temporary world of suffering, for they have attained the highest perfection.",
        practicalExplanation: "Liberation is permanent. Once you truly reach the Divine, the cycle of rebirth in this world of suffering ends. This isn't escapism but graduation — moving beyond the realm of learning through pain to a state of eternal fulfillment. The great souls never return to suffering.",
        strengthReflection: "I aspire to the highest perfection: permanent union with the Divine.",
        devotionalSurrender: "Lord, let me reach You and never be separated from You again.",
        emotions: ["liberation", "devotion", "hope"],
        audioUrl: null
    },
    {
        id: "8-16",
        chapter: 8,
        verse: 16,
        sanskrit: "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन। मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते॥",
        transliteration: "ā-brahma-bhuvanāl lokāḥ punar āvartino 'rjuna mām upetya tu kaunteya punar janma na vidyate",
        simpleMeaning: "From the highest realm of Brahma downward, all worlds are subject to return, O Arjuna. But one who reaches Me is never born again.",
        practicalExplanation: "Even the highest heavens are temporary — eventually one must return. Only reaching Krishna is final liberation. This puts all worldly and otherworldly achievements in perspective. Heaven itself is not the goal. Only God is the eternal destination where there is no return to limitation.",
        strengthReflection: "I set my goal not on temporary heavens but on eternal union with the Divine.",
        devotionalSurrender: "O Krishna, You alone are my final destination. Everything else is a temporary stop.",
        emotions: ["wisdom", "devotion", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-17",
        chapter: 8,
        verse: 17,
        sanskrit: "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः। रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः॥",
        transliteration: "sahasra-yuga-paryantam ahar yad brahmaṇo viduḥ rātriṁ yuga-sahasrāntāṁ te 'ho-rātra-vido janāḥ",
        simpleMeaning: "Those who know that Brahma's day lasts a thousand yugas and his night also lasts a thousand yugas — they understand day and night.",
        practicalExplanation: "Krishna reveals cosmic time scales. One day of Brahma equals 4.32 billion human years, as does his night. These vast cycles put our human concerns in perspective. What seems permanent to us is momentary in cosmic time. Only the eternal beyond all cycles is truly stable.",
        strengthReflection: "I maintain perspective by remembering that cosmic time dwarfs my temporary concerns.",
        devotionalSurrender: "Lord, beyond all cycles of time, You are the eternal constant. In You I find true stability.",
        emotions: ["wonder", "perspective", "peace"],
        audioUrl: null
    },
    {
        id: "8-18",
        chapter: 8,
        verse: 18,
        sanskrit: "अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे। रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके॥",
        transliteration: "avyaktād vyaktayaḥ sarvāḥ prabhavanty ahar-āgame rātry-āgame pralīyante tatraivāvyakta-sanjñake",
        simpleMeaning: "At the arrival of Brahma's day, all manifestations emerge from the unmanifest, and at the arrival of night, they merge back into the unmanifest.",
        practicalExplanation: "Creation emerges from the unmanifest during Brahma's day and dissolves back during his night. This cosmic breathing continues endlessly. Understanding this prevents attachment — everything manifest will eventually dissolve. But you, the witness, are not part of this cycle.",
        strengthReflection: "I observe the arising and passing of all things without losing my center.",
        devotionalSurrender: "Lord, as worlds come and go, You remain. Help me rest in Your permanence.",
        emotions: ["peace", "wisdom", "detachment"],
        audioUrl: null
    },
    {
        id: "8-19",
        chapter: 8,
        verse: 19,
        sanskrit: "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते। रात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे॥",
        transliteration: "bhūta-grāmaḥ sa evāyaṁ bhūtvā bhūtvā pralīyate rātry-āgame 'vaśhaḥ pārtha prabhavaty ahar-āgame",
        simpleMeaning: "This multitude of beings, having come into existence again and again, is helplessly dissolved at the coming of night, and manifests again at the coming of day.",
        practicalExplanation: "Beings are helplessly caught in cosmic cycles, repeatedly manifesting and dissolving without control. This 'helplessness' applies to those identified with the cycle. But knowing yourself as the eternal witness frees you from this helpless repetition. Awareness breaks the cycle.",
        strengthReflection: "I break free from helpless repetition by awakening to my eternal nature.",
        devotionalSurrender: "O Krishna, free me from the helpless cycles. Establish me in Your eternal presence.",
        emotions: ["liberation", "seeking", "hope"],
        audioUrl: null
    },
    {
        id: "8-20",
        chapter: 8,
        verse: 20,
        sanskrit: "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः। यः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति॥",
        transliteration: "paras tasmāt tu bhāvo 'nyo 'vyakto 'vyaktāt sanātanaḥ yaḥ sa sarveṣhu bhūteṣhu naśhyatsu na vinaśhyati",
        simpleMeaning: "But beyond this unmanifest nature is another eternal unmanifest existence, which does not perish when all beings are destroyed.",
        practicalExplanation: "Beyond even the cosmic unmanifest from which creation emerges is the Supreme Unmanifest — the eternal reality that never perishes. When everything else dissolves, this remains. This is your true home, the destination beyond all destinations, where nothing ever dies.",
        strengthReflection: "My true identity is beyond all that passes — I am the eternal that never perishes.",
        devotionalSurrender: "Lord, You are the eternal beyond the eternal. In You alone is my imperishable refuge.",
        emotions: ["transcendence", "devotion", "peace"],
        audioUrl: null
    },
    {
        id: "8-21",
        chapter: 8,
        verse: 21,
        sanskrit: "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्। यं प्राप्य न निवर्तन्ते तद्धाम परमं मम॥",
        transliteration: "avyakto 'kṣhara ity uktas tam āhuḥ paramāṁ gatim yaṁ prāpya na nivartante tad dhāma paramaṁ mama",
        simpleMeaning: "That which is called the Unmanifest and Imperishable is said to be the supreme destination. Having attained it, souls never return. That is My supreme abode.",
        practicalExplanation: "Krishna's supreme abode is described — the place of no return. It is unmanifest (not perceivable by ordinary senses), imperishable (beyond time), and supreme (nothing higher exists). This is not a physical location but a state of consciousness where separation from the Divine ends forever.",
        strengthReflection: "I aspire to the supreme destination where all seeking ends in eternal fulfillment.",
        devotionalSurrender: "O Lord, lead me to Your supreme abode where I shall never be separated from You.",
        emotions: ["devotion", "hope", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-22",
        chapter: 8,
        verse: 22,
        sanskrit: "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया। यस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम्॥",
        transliteration: "puruṣhaḥ sa paraḥ pārtha bhaktyā labhyas tv ananyayā yasyāntaḥ-sthāni bhūtāni yena sarvam idaṁ tatam",
        simpleMeaning: "That Supreme Person, O Arjuna, in whom all beings exist and who pervades the entire universe, can be attained by exclusive devotion.",
        practicalExplanation: "The means to reach this supreme destination is revealed: exclusive devotion (ananya bhakti). Not rituals, not knowledge alone, but wholehearted love. This Person contains all beings and pervades everything. Such a vast reality is reached not by vast efforts but by simple, focused love.",
        strengthReflection: "The path to the infinite is not complexity but simple, wholehearted devotion.",
        devotionalSurrender: "O Lord who pervades all, I offer You my exclusive devotion. Be attained by me.",
        emotions: ["devotion", "love", "surrender"],
        audioUrl: null
    },
    {
        id: "8-23",
        chapter: 8,
        verse: 23,
        sanskrit: "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः। प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ॥",
        transliteration: "yatra kāle tv anāvṛittim āvṛittiṁ chaiva yoginaḥ prayātā yānti taṁ kālaṁ vakṣhyāmi bharatarṣhabha",
        simpleMeaning: "I shall now tell you, O best of the Bharatas, the times at which yogis departing attain freedom from rebirth or return.",
        practicalExplanation: "Krishna now discusses the paths of light and darkness — the routes the soul takes at death. The timing of death was traditionally believed to influence the soul's destination. However, this teaching ultimately points to the metaphor of consciousness states rather than literal clock times.",
        strengthReflection: "I prepare for the journey beyond death with understanding and without fear.",
        devotionalSurrender: "Lord, whatever time or path I travel, let me reach You alone.",
        emotions: ["curiosity", "death", "wisdom"],
        audioUrl: null
    },
    {
        id: "8-24",
        chapter: 8,
        verse: 24,
        sanskrit: "अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम्। तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः॥",
        transliteration: "agnir jyotir ahaḥ śhuklaḥ ṣhaṇ-māsā uttarāyaṇam tatra prayātā gachchhanti brahma brahma-vido janāḥ",
        simpleMeaning: "Fire, light, daytime, the bright fortnight, the six months of the northern solstice — departing by this path, the knowers of Brahman attain Brahman.",
        practicalExplanation: "The path of light (uttarayana) is described: fire, luminosity, day, bright moon, and the sun's northern journey. These symbolize knowledge, clarity, and ascending consciousness. Those established in Brahman-knowledge travel this radiant path at death and merge with the Absolute.",
        strengthReflection: "I walk the path of light through knowledge, clarity, and upward-moving consciousness.",
        devotionalSurrender: "Lord, at my departure, may I travel the luminous path to eternal Brahman.",
        emotions: ["wisdom", "death", "transcendence"],
        audioUrl: null
    },
    {
        id: "8-25",
        chapter: 8,
        verse: 25,
        sanskrit: "धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम्। तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते॥",
        transliteration: "dhūmo rātris tathā kṛiṣhṇaḥ ṣhaṇ-māsā dakṣhiṇāyanam tatra chāndramasaṁ jyotir yogī prāpya nivartate",
        simpleMeaning: "Smoke, night, the dark fortnight, the six months of the southern solstice — through this path, the yogi attains the lunar light and returns.",
        practicalExplanation: "The path of darkness (dakshinayana) leads to the moon (temporary heaven) and eventual return to rebirth. Smoke, night, and darkness symbolize incomplete knowledge. Even accomplished yogis on this path must return. Only the path of complete light leads to no-return.",
        strengthReflection: "I seek the complete light, not settling for partial illumination that requires return.",
        devotionalSurrender: "O Krishna, let me not attain temporary realms but Your eternal light alone.",
        emotions: ["wisdom", "seeking", "discernment"],
        audioUrl: null
    },
    {
        id: "8-26",
        chapter: 8,
        verse: 26,
        sanskrit: "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते। एकया यात्यनावृत्तिमन्ययावर्तते पुनः॥",
        transliteration: "śhukla-kṛiṣhṇe gatī hyete jagataḥ śhāśhvate mate ekayā yāty anāvṛittim anyayāvartate punaḥ",
        simpleMeaning: "These two paths — the light and the dark — are considered eternal. By one, a person attains non-return; by the other, one returns again.",
        practicalExplanation: "Two eternal paths exist: one leads to liberation (non-return), the other to rebirth (return). These represent states of consciousness as much as after-death journeys. Light represents full awakening; darkness represents partial realization. Which path you take depends on your inner state.",
        strengthReflection: "I choose the path of complete awakening that leads to no return.",
        devotionalSurrender: "Lord, establish me so firmly in light that darkness never claims me.",
        emotions: ["determination", "wisdom", "faith"],
        audioUrl: null
    },
    {
        id: "8-27",
        chapter: 8,
        verse: 27,
        sanskrit: "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन। तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन॥",
        transliteration: "naite sṛitī pārtha jānan yogī muhyati kaśhchana tasmāt sarveṣhu kāleṣhu yoga-yukto bhavārjuna",
        simpleMeaning: "O Arjuna, knowing these two paths, no yogi is ever deluded. Therefore, be steadfast in yoga at all times.",
        practicalExplanation: "Knowledge of these paths removes delusion. But the practical instruction is simple: stay established in yoga always. Don't try to manipulate death timing — simply live in yoga. One who is always connected doesn't need to worry about the moment or manner of departure.",
        strengthReflection: "I remain established in yoga at all times, free from worry about when or how I will depart.",
        devotionalSurrender: "O Krishna, I surrender the concerns about my death. I focus on living in union with You now.",
        emotions: ["peace", "wisdom", "surrender"],
        audioUrl: null
    },
    {
        id: "8-28",
        chapter: 8,
        verse: 28,
        sanskrit: "वेदेषु यज्ञेषु तपःसु चैव दानेषु यत्पुण्यफलं प्रदिष्टम्। अत्येति तत्सर्वमिदं विदित्वा योगी परं स्थानमुपैति चाद्यम्॥",
        transliteration: "vedeṣhu yajñeṣhu tapaḥsu chaiva dāneṣhu yat puṇya-phalaṁ pradiṣhṭam atyeti tat sarvam idaṁ viditvā yogī paraṁ sthānam upaiti chādyam",
        simpleMeaning: "Having known all this, the yogi surpasses whatever merit is promised in the Vedas, sacrifices, austerities, and charity — and attains the supreme, original abode.",
        practicalExplanation: "This chapter's knowledge transcends all other religious merit. More than study, ritual, discipline, or generosity — knowing these truths and practicing accordingly leads to the supreme destination. The yogi who understands this doesn't reject these practices but goes beyond their limited fruits to the unlimited.",
        strengthReflection: "I honor all spiritual practices while knowing that direct connection transcends them all.",
        devotionalSurrender: "O Lord, beyond all merit and practice, let me reach Your supreme, original abode.",
        emotions: ["devotion", "transcendence", "wisdom"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 8 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 8);

// Add Chapter 8 verses
existingData.shloks = [...filteredShloks, ...chapter8Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter8Verses.length} verses for Chapter 8. Total: ${existingData.shloks.length}`);
