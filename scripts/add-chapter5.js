const fs = require('fs');
const path = require('path');

// Chapter 5 - Karma Sannyasa Yoga (The Yoga of Renunciation of Action) - All 29 verses
const chapter5Verses = [
    {
        id: "5-1",
        chapter: 5,
        verse: 1,
        sanskrit: "अर्जुन उवाच। सन्न्यासं कर्मणां कृष्ण पुनर्योगं च शंससि। यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम्॥",
        transliteration: "arjuna uvācha sannyāsaṁ karmaṇāṁ kṛiṣhṇa punar yogaṁ cha śhaṁsasi yach chhreya etayor ekaṁ tan me brūhi su-niśhchitam",
        simpleMeaning: "Arjuna said: O Krishna, You praise renunciation of actions and also the yoga of action. Tell me conclusively which one of these two is better.",
        practicalExplanation: "Arjuna expresses our common confusion — should we renounce worldly activities or engage in them? This question arises whenever we face the choice between withdrawal and engagement. True wisdom lies in understanding that both paths lead to the same goal.",
        strengthReflection: "I seek clarity when faced with seemingly contradictory paths, trusting that understanding will come.",
        devotionalSurrender: "O Lord Krishna, guide me through my confusion. Help me see the unity behind apparent contradictions.",
        emotions: ["overthinking", "self-doubt", "duty"],
        audioUrl: null
    },
    {
        id: "5-2",
        chapter: 5,
        verse: 2,
        sanskrit: "श्रीभगवानुवाच। सन्न्यासः कर्मयोगश्च निःश्रेयसकरावुभौ। तयोस्तु कर्मसन्न्यासात्कर्मयोगो विशिष्यते॥",
        transliteration: "śhrī bhagavān uvācha sannyāsaḥ karma-yogaśh cha niḥśhreyasa-karāv ubhau tayos tu karma-sannyāsāt karma-yogo viśhiṣhyate",
        simpleMeaning: "The Supreme Lord said: Both renunciation and the yoga of action lead to the highest good. But of the two, the yoga of action is superior to the renunciation of action.",
        practicalExplanation: "Krishna teaches that engaged action with detachment is more practical than complete withdrawal. For most people, working without attachment is more achievable than total renunciation. This validates our everyday efforts when done with the right attitude.",
        strengthReflection: "I choose to engage fully in life's duties while keeping my heart free from attachment to outcomes.",
        devotionalSurrender: "Lord, let my work become worship. May every action I take be an offering to You.",
        emotions: ["duty", "discipline", "attachment"],
        audioUrl: null
    },
    {
        id: "5-3",
        chapter: 5,
        verse: 3,
        sanskrit: "ज्ञेयः स नित्यसन्न्यासी यो न द्वेष्टि न काङ्क्षति। निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते॥",
        transliteration: "jñeyaḥ sa nitya-sannyāsī yo na dveṣhṭi na kāṅkṣhati nirdvandvo hi mahā-bāho sukhaṁ bandhāt pramuchyate",
        simpleMeaning: "One who neither hates nor desires the fruits of actions is known to be always in renunciation. Such a person, free from dualities, O mighty-armed Arjuna, is easily liberated from bondage.",
        practicalExplanation: "True renunciation is an inner state, not an outer show. You can live in the world and still be a renunciate by being free from likes and dislikes. This freedom from opposites brings lasting peace regardless of circumstances.",
        strengthReflection: "I cultivate inner freedom by releasing excessive likes and dislikes that bind my mind.",
        devotionalSurrender: "O Krishna, free me from the pull of opposites. Let me rest in the peace of acceptance.",
        emotions: ["attachment", "discipline", "anger"],
        audioUrl: null
    },
    {
        id: "5-4",
        chapter: 5,
        verse: 4,
        sanskrit: "साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः। एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम्॥",
        transliteration: "sānkhya-yogau pṛithag bālāḥ pravadanti na paṇḍitāḥ ekam apy āsthitaḥ samyag ubhayor vindate phalam",
        simpleMeaning: "Only the ignorant speak of Sankhya (the path of knowledge) and Yoga (the path of action) as different. The wise know that one who is established in either attains the fruit of both.",
        practicalExplanation: "Arguments about which spiritual path is superior miss the point. Whether through knowledge or action, the destination is the same. What matters is sincere dedication to your chosen path, not debates about methodology.",
        strengthReflection: "I commit fully to my path knowing that sincerity, not the specific method, leads to truth.",
        devotionalSurrender: "Lord, protect me from spiritual pride. Let me honor all paths that lead to You.",
        emotions: ["self-doubt", "overthinking", "discipline"],
        audioUrl: null
    },
    {
        id: "5-5",
        chapter: 5,
        verse: 5,
        sanskrit: "यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते। एकं साङ्ख्यं च योगं च यः पश्यति स पश्यति॥",
        transliteration: "yat sānkhyaiḥ prāpyate sthānaṁ tad yogair api gamyate ekaṁ sānkhyaṁ cha yogaṁ cha yaḥ paśhyati sa paśhyati",
        simpleMeaning: "The state that is reached by the followers of Sankhya is also reached by the practitioners of Yoga. One who sees Sankhya and Yoga as one truly sees.",
        practicalExplanation: "Knowledge and action are not opposed — they are complementary aspects of spiritual growth. Understanding must lead to practice, and practice must be informed by understanding. Integration is the key.",
        strengthReflection: "I integrate understanding and action, knowing that true wisdom embraces both.",
        devotionalSurrender: "O Lord, give me eyes to see the unity behind all apparent differences.",
        emotions: ["discipline", "duty", "overthinking"],
        audioUrl: null
    },
    {
        id: "5-6",
        chapter: 5,
        verse: 6,
        sanskrit: "सन्न्यासस्तु महाबाहो दुःखमाप्तुमयोगतः। योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति॥",
        transliteration: "sannyāsas tu mahā-bāho duḥkham āptum ayogataḥ yoga-yukto munir brahma na chireṇādhigachchhati",
        simpleMeaning: "O mighty-armed Arjuna, renunciation is difficult to attain without the yoga of action. The sage who is devoted to yoga quickly attains Brahman.",
        practicalExplanation: "Trying to renounce without first purifying the mind through action often leads to frustration. Work done with devotion naturally purifies the heart and prepares it for higher realization. Actions done right become a ladder to transcendence.",
        strengthReflection: "I use my daily work as a means to purify my mind and prepare for higher understanding.",
        devotionalSurrender: "Krishna, let my work be the fire that burns away my impurities and brings me closer to You.",
        emotions: ["discipline", "duty", "failure"],
        audioUrl: null
    },
    {
        id: "5-7",
        chapter: 5,
        verse: 7,
        sanskrit: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः। सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते॥",
        transliteration: "yoga-yukto viśhuddhātmā vijitātmā jitendriyaḥ sarva-bhūtātma-bhūtātmā kurvann api na lipyate",
        simpleMeaning: "One who is united in yoga, whose soul is pure, who has conquered the self and mastered the senses, and who realizes the Self in all beings — such a person is not tainted even while performing actions.",
        practicalExplanation: "When you see yourself in all beings, actions no longer create bondage. This vision of unity transforms every interaction into a sacred exchange. The realized soul moves through the world like a lotus leaf untouched by water.",
        strengthReflection: "I strive to see my own essence reflected in all beings, knowing this vision liberates me.",
        devotionalSurrender: "O Lord, expand my heart until I can see You dwelling in every being I encounter.",
        emotions: ["attachment", "discipline", "duty"],
        audioUrl: null
    },
    {
        id: "5-8",
        chapter: 5,
        verse: 8,
        sanskrit: "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित्। पश्यञ्श‍ृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन्॥",
        transliteration: "naiva kiñchit karomīti yukto manyeta tattva-vit paśhyañ śhṛiṇvan spṛiśhañ jighran aśhnan gachchhan svapañ śhvasan",
        simpleMeaning: "One who is united in yoga and knows the truth thinks 'I do nothing at all' — while seeing, hearing, touching, smelling, eating, moving, sleeping, and breathing.",
        practicalExplanation: "The enlightened person recognizes that all actions happen through the body and senses, not through the true Self. This understanding removes the burden of doership. Even ordinary activities become effortless when the ego steps aside.",
        strengthReflection: "I release the burden of doership, allowing actions to flow through me naturally.",
        devotionalSurrender: "Lord, let me be an instrument of Your will, acting without the heavy sense of 'I am the doer.'",
        emotions: ["attachment", "overthinking", "discipline"],
        audioUrl: null
    },
    {
        id: "5-9",
        chapter: 5,
        verse: 9,
        sanskrit: "प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि। इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्॥",
        transliteration: "pralapan visṛijan gṛihṇann unmiṣhan nimiṣhann api indriyāṇīndriyārtheṣhu vartanta iti dhārayan",
        simpleMeaning: "Speaking, letting go, grasping, opening and closing the eyes — knowing that the senses merely engage with sense objects.",
        practicalExplanation: "This verse continues the description of the wise person's perspective. By recognizing that all sensory activities are just the interplay of senses and their objects, one remains untouched. This is practical mindfulness at its deepest level.",
        strengthReflection: "I observe my senses interacting with the world without losing myself in these interactions.",
        devotionalSurrender: "O Krishna, help me witness life's activities without being swept away by them.",
        emotions: ["attachment", "discipline", "overthinking"],
        audioUrl: null
    },
    {
        id: "5-10",
        chapter: 5,
        verse: 10,
        sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
        transliteration: "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ lipyate na sa pāpena padma-patram ivāmbhasā",
        simpleMeaning: "One who offers all actions to Brahman, abandoning attachment, is not tainted by sin, just as a lotus leaf is untouched by water.",
        practicalExplanation: "This beautiful verse gives the key to living in the world without being stained by it. Like the lotus that grows in muddy water yet remains pristine, we can engage with worldly activities while keeping our inner being pure through dedication to the Divine.",
        strengthReflection: "I remain untouched by negativity by offering all my actions to a higher purpose.",
        devotionalSurrender: "Lord, let me be like the lotus — in the world but not of it, offering all to You.",
        emotions: ["attachment", "duty", "discipline"],
        audioUrl: null
    },
    {
        id: "5-11",
        chapter: 5,
        verse: 11,
        sanskrit: "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि। योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये॥",
        transliteration: "kāyena manasā buddhyā kevalair indriyair api yoginaḥ karma kurvanti saṅgaṁ tyaktvātma-śhuddhaye",
        simpleMeaning: "Yogis, giving up attachment, perform actions with the body, mind, intellect, and even with the senses alone — only for the purification of the self.",
        practicalExplanation: "Every action can be an act of purification when done without selfish attachment. Work becomes yoga when it is performed not for personal gain but for inner cleansing. This transforms mundane tasks into spiritual practice.",
        strengthReflection: "I approach my daily work as a practice for self-purification, not just material gain.",
        devotionalSurrender: "O Lord, let every action I perform purify my heart and bring me closer to You.",
        emotions: ["discipline", "duty", "attachment"],
        audioUrl: null
    },
    {
        id: "5-12",
        chapter: 5,
        verse: 12,
        sanskrit: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्। अयुक्तः कामकारेण फले सक्तो निबध्यते॥",
        transliteration: "yuktaḥ karma-phalaṁ tyaktvā śhāntim āpnoti naiṣhṭhikīm ayuktaḥ kāma-kāreṇa phale sakto nibadhyate",
        simpleMeaning: "The united one, abandoning the fruit of action, attains lasting peace. The one who is not united, attached to the fruit through desire, is bound.",
        practicalExplanation: "Peace comes from releasing our grip on outcomes. When we work without demanding specific results, we become free. But when desire drives our attachment to outcomes, we create our own chains.",
        strengthReflection: "I work with full dedication while releasing my anxious grip on specific outcomes.",
        devotionalSurrender: "Krishna, teach me to love the work itself, not just the rewards it might bring.",
        emotions: ["attachment", "fear", "discipline"],
        audioUrl: null
    },
    {
        id: "5-13",
        chapter: 5,
        verse: 13,
        sanskrit: "सर्वकर्माणि मनसा सन्न्यस्यास्ते सुखं वशी। नवद्वारे पुरे देही नैव कुर्वन्न कारयन्॥",
        transliteration: "sarva-karmāṇi manasā sannyasyāste sukhaṁ vaśhī nava-dvāre pure dehī naiva kurvan na kārayan",
        simpleMeaning: "The self-controlled embodied soul, mentally renouncing all actions, resides happily in the city of nine gates, neither doing nor causing anything to be done.",
        practicalExplanation: "The body is described as a city with nine gates (two eyes, two ears, two nostrils, mouth, and two openings below). The wise soul dwells in this body peacefully, understanding that it is not the doer. This inner renunciation brings contentment.",
        strengthReflection: "I dwell peacefully in my body, knowing that I am the witness, not the doer of actions.",
        devotionalSurrender: "O Lord, help me rest in the awareness that You are the true doer of all things.",
        emotions: ["attachment", "overthinking", "discipline"],
        audioUrl: null
    },
    {
        id: "5-14",
        chapter: 5,
        verse: 14,
        sanskrit: "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः। न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते॥",
        transliteration: "na kartṛitvaṁ na karmāṇi lokasya sṛijati prabhuḥ na karma-phala-saṁyogaṁ svabhāvas tu pravartate",
        simpleMeaning: "The Lord does not create the sense of doership or actions for beings, nor the connection of action with its fruit. It is only one's own nature that operates.",
        practicalExplanation: "God does not impose karma on us — our own nature drives us to act and reap the consequences. Understanding this removes blame and victimhood. We are responsible for our own spiritual evolution through our choices.",
        strengthReflection: "I accept responsibility for my actions and their consequences, knowing my nature drives my choices.",
        devotionalSurrender: "Lord, help me transform my nature so that my actions naturally align with Your will.",
        emotions: ["duty", "self-doubt", "discipline"],
        audioUrl: null
    },
    {
        id: "5-15",
        chapter: 5,
        verse: 15,
        sanskrit: "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः। अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः॥",
        transliteration: "nādatte kasyachit pāpaṁ na chaiva sukṛitaṁ vibhuḥ ajñānenāvṛitaṁ jñānaṁ tena muhyanti jantavaḥ",
        simpleMeaning: "The omnipresent Lord does not accept anyone's sin or merit. Knowledge is covered by ignorance; therefore beings are deluded.",
        practicalExplanation: "The Divine remains untouched by our karma — good or bad. Our confusion comes from ignorance that veils our true knowledge. Removing this ignorance is the goal of spiritual practice, not accumulating merit or avoiding sin.",
        strengthReflection: "I work to remove the ignorance that veils my understanding, not just to accumulate good karma.",
        devotionalSurrender: "O Krishna, remove the veil of ignorance from my eyes. Let me see clearly.",
        emotions: ["self-doubt", "overthinking", "fear"],
        audioUrl: null
    },
    {
        id: "5-16",
        chapter: 5,
        verse: 16,
        sanskrit: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः। तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्॥",
        transliteration: "jñānena tu tad ajñānaṁ yeṣhāṁ nāśhitam ātmanaḥ teṣhām ādityavaj jñānaṁ prakāśhayati tat param",
        simpleMeaning: "But for those in whom ignorance of the Self is destroyed by knowledge, that knowledge, like the sun, reveals the Supreme.",
        practicalExplanation: "When spiritual knowledge destroys ignorance, it illuminates everything like the rising sun. This is not intellectual learning but direct realization. Once the sun rises, all darkness vanishes instantly — so too with true knowledge.",
        strengthReflection: "I trust that true knowledge will dispel my inner darkness completely and instantaneously.",
        devotionalSurrender: "Lord, be the sun that rises in my heart, destroying all shadows of ignorance.",
        emotions: ["self-doubt", "fear", "discipline"],
        audioUrl: null
    },
    {
        id: "5-17",
        chapter: 5,
        verse: 17,
        sanskrit: "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः। गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः॥",
        transliteration: "tad-buddhayas tad-ātmānas tan-niṣhṭhās tat-parāyaṇāḥ gachchhanty apunar-āvṛittiṁ jñāna-nirdhūta-kalmaṣhāḥ",
        simpleMeaning: "Those whose intellect is absorbed in That, whose self is established in That, who are devoted to That, who hold That as the Supreme — their impurities cleansed by knowledge, they go to the state from which there is no return.",
        practicalExplanation: "Complete dedication to the Supreme — in thought, identity, faith, and aspiration — leads to liberation. When every aspect of our being is aligned with the Divine, we are purified completely and freed forever.",
        strengthReflection: "I align my thoughts, intentions, and actions toward the highest truth I know.",
        devotionalSurrender: "O Lord, let my entire being be absorbed in You — my mind, my heart, my very self.",
        emotions: ["discipline", "duty", "attachment"],
        audioUrl: null
    },
    {
        id: "5-18",
        chapter: 5,
        verse: 18,
        sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
        transliteration: "vidyā-vinaya-sampanne brāhmaṇe gavi hastini śhuni chaiva śhva-pāke cha paṇḍitāḥ sama-darśhinaḥ",
        simpleMeaning: "The wise see with equal vision a learned and humble Brahmin, a cow, an elephant, a dog, and an outcaste.",
        practicalExplanation: "This revolutionary verse proclaims spiritual democracy. The wise see the same divine essence in all beings — regardless of social status, species, or external qualities. This equal vision dissolves all prejudice and discrimination.",
        strengthReflection: "I practice seeing the divine essence equally in all beings, regardless of external differences.",
        devotionalSurrender: "Krishna, expand my vision until I see You dwelling equally in all Your creation.",
        emotions: ["anger", "attachment", "discipline"],
        audioUrl: null
    },
    {
        id: "5-19",
        chapter: 5,
        verse: 19,
        sanskrit: "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः। निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः॥",
        transliteration: "ihaiva tair jitaḥ sargo yeṣhāṁ sāmye sthitaṁ manaḥ nirdoṣhaṁ hi samaṁ brahma tasmād brahmaṇi te sthitāḥ",
        simpleMeaning: "Those whose minds are established in evenness have conquered creation here itself. Brahman is flawless and the same; therefore they are established in Brahman.",
        practicalExplanation: "Mental equanimity is the mark of liberation. When the mind no longer swings between attraction and aversion, one has already conquered the world. This equanimity reflects the nature of Brahman, which is ever-balanced and perfect.",
        strengthReflection: "I cultivate mental equanimity, knowing this balance reflects my true divine nature.",
        devotionalSurrender: "O Lord, establish my mind in perfect balance, reflecting Your unchanging peace.",
        emotions: ["attachment", "anger", "discipline"],
        audioUrl: null
    },
    {
        id: "5-20",
        chapter: 5,
        verse: 20,
        sanskrit: "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम्। स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः॥",
        transliteration: "na prahṛiṣhyet priyaṁ prāpya nodvijet prāpya chāpriyam sthira-buddhir asammūḍho brahma-vid brahmaṇi sthitaḥ",
        simpleMeaning: "One should not rejoice upon obtaining what is pleasant nor grieve upon obtaining what is unpleasant. With steady intellect and free from delusion, the knower of Brahman is established in Brahman.",
        practicalExplanation: "Emotional stability in the face of life's ups and downs is the sign of wisdom. Neither elated by success nor crushed by failure, the wise person maintains inner equilibrium. This steadiness comes from knowing one's true identity.",
        strengthReflection: "I meet life's pleasures and pains with steady equanimity, centered in my true self.",
        devotionalSurrender: "Lord, grant me the steadiness that comes from knowing You alone are lasting.",
        emotions: ["fear", "attachment", "failure"],
        audioUrl: null
    },
    {
        id: "5-21",
        chapter: 5,
        verse: 21,
        sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्। स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते॥",
        transliteration: "bāhya-sparśheṣhv asaktātmā vindaty ātmani yat sukham sa brahma-yoga-yuktātmā sukham akṣhayam aśhnute",
        simpleMeaning: "One who is unattached to external sense contacts discovers happiness in the Self. With the soul united with Brahman through yoga, one attains inexhaustible bliss.",
        practicalExplanation: "External pleasures are fleeting and dependent on circumstances. But the joy found within is inexhaustible and unconditional. By withdrawing attachment from outer sensations, we discover an inner wellspring of lasting happiness.",
        strengthReflection: "I look within for lasting happiness rather than depending on external circumstances.",
        devotionalSurrender: "O Krishna, help me discover the inexhaustible joy that dwells within my own heart.",
        emotions: ["attachment", "self-doubt", "discipline"],
        audioUrl: null
    },
    {
        id: "5-22",
        chapter: 5,
        verse: 22,
        sanskrit: "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते। आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः॥",
        transliteration: "ye hi saṁsparśha-jā bhogā duḥkha-yonaya eva te ādy-antavantaḥ kaunteya na teṣhu ramate budhaḥ",
        simpleMeaning: "The pleasures that arise from contact with sense objects are sources of suffering only. They have a beginning and an end, O son of Kunti; the wise do not delight in them.",
        practicalExplanation: "Sense pleasures contain the seeds of suffering because they are temporary. The wise person understands this cycle and does not become dependent on fleeting enjoyments. This is not rejection of pleasure but freedom from attachment to it.",
        strengthReflection: "I enjoy life's pleasures without becoming attached to them, knowing they are temporary.",
        devotionalSurrender: "Lord, wean me from dependence on temporary pleasures. Let me find joy in You alone.",
        emotions: ["attachment", "discipline", "overthinking"],
        audioUrl: null
    },
    {
        id: "5-23",
        chapter: 5,
        verse: 23,
        sanskrit: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्। कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः॥",
        transliteration: "śhaknotīhaiva yaḥ soḍhuṁ prāk śharīra-vimokṣhaṇāt kāma-krodhodbhavaṁ vegaṁ sa yuktaḥ sa sukhī naraḥ",
        simpleMeaning: "One who is able to withstand here itself, before liberation from the body, the impulse arising from desire and anger — that person is a yogi, that person is happy.",
        practicalExplanation: "Mastery over desire and anger must be achieved while we are still alive in this body. The test of spirituality is now, not after death. One who can resist these powerful impulses is already liberated and truly happy.",
        strengthReflection: "I practice mastering my impulses of desire and anger each day, building real freedom.",
        devotionalSurrender: "O Lord, give me strength to overcome the powerful waves of desire and anger.",
        emotions: ["anger", "attachment", "discipline"],
        audioUrl: null
    },
    {
        id: "5-24",
        chapter: 5,
        verse: 24,
        sanskrit: "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः। स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति॥",
        transliteration: "yo 'ntaḥ-sukho 'ntar-ārāmas tathāntar-jyotir eva yaḥ sa yogī brahma-nirvāṇaṁ brahma-bhūto 'dhigachchhati",
        simpleMeaning: "One whose happiness is within, whose delight is within, and whose light is within — that yogi, becoming one with Brahman, attains liberation in Brahman.",
        practicalExplanation: "The truly free person finds everything needed within — happiness, joy, and illumination. Such a person no longer depends on external sources for fulfillment. This inner completeness is the state of liberation.",
        strengthReflection: "I cultivate inner sources of happiness, joy, and wisdom that depend on nothing external.",
        devotionalSurrender: "Krishna, let me find all I need within, where You eternally dwell.",
        emotions: ["self-doubt", "attachment", "discipline"],
        audioUrl: null
    },
    {
        id: "5-25",
        chapter: 5,
        verse: 25,
        sanskrit: "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः। छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः॥",
        transliteration: "labhante brahma-nirvāṇam ṛiṣhayaḥ kṣhīṇa-kalmaṣhāḥ chhinna-dvaidhā yatātmānaḥ sarva-bhūta-hite ratāḥ",
        simpleMeaning: "The sages whose impurities are destroyed, whose doubts are cut asunder, who are self-controlled, and who rejoice in the welfare of all beings, attain liberation in Brahman.",
        practicalExplanation: "Liberation is not selfish escape but comes to those who care for all beings. Self-purification, resolution of doubts, self-mastery, and compassion for all — these together lead to the highest freedom.",
        strengthReflection: "I purify myself, resolve my doubts, master my impulses, and serve the welfare of all.",
        devotionalSurrender: "O Lord, make me an instrument of blessing for all beings even as I seek liberation.",
        emotions: ["duty", "discipline", "self-doubt"],
        audioUrl: null
    },
    {
        id: "5-26",
        chapter: 5,
        verse: 26,
        sanskrit: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम्। अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम्॥",
        transliteration: "kāma-krodha-viyuktānāṁ yatīnāṁ yata-chetasām abhito brahma-nirvāṇaṁ vartate viditātmanām",
        simpleMeaning: "For those ascetics who are free from desire and anger, whose minds are controlled, and who have realized the Self, liberation in Brahman exists on all sides.",
        practicalExplanation: "Liberation surrounds the one who has conquered desire and anger, controlled the mind, and realized the Self. It is not somewhere far to reach but present here and now for the qualified seeker.",
        strengthReflection: "I know that freedom is available here and now as I work on desire, anger, and self-knowledge.",
        devotionalSurrender: "Lord, You are always near. Help me remove what prevents me from realizing Your presence.",
        emotions: ["anger", "attachment", "discipline"],
        audioUrl: null
    },
    {
        id: "5-27",
        chapter: 5,
        verse: 27,
        sanskrit: "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः। प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ॥",
        transliteration: "sparśhān kṛitvā bahir bāhyāṁśh chakṣhuśh chaivāntare bhruvoḥ prāṇāpānau samau kṛitvā nāsābhyantara-chāriṇau",
        simpleMeaning: "Shutting out external contacts, fixing the gaze between the eyebrows, equalizing the outgoing and incoming breaths moving within the nostrils...",
        practicalExplanation: "This begins the description of meditation technique. Withdrawing from external sensations, focusing the gaze at the point between the eyebrows, and regulating the breath — these are practical steps for turning inward.",
        strengthReflection: "I practice withdrawing my attention from external distractions to focus within.",
        devotionalSurrender: "O Krishna, teach me to turn my senses inward and find You in the depths of meditation.",
        emotions: ["discipline", "overthinking", "attachment"],
        audioUrl: null
    },
    {
        id: "5-28",
        chapter: 5,
        verse: 28,
        sanskrit: "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः। विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः॥",
        transliteration: "yatendriya-mano-buddhir munir mokṣha-parāyaṇaḥ vigatechchhā-bhaya-krodho yaḥ sadā mukta eva saḥ",
        simpleMeaning: "...with senses, mind, and intellect controlled, the sage intent on liberation, devoid of desire, fear, and anger — such a one is forever free.",
        practicalExplanation: "This verse completes the meditation description. When senses, mind, and intellect are mastered, when the goal is liberation, when desire, fear, and anger have departed — that person is already liberated, even while living.",
        strengthReflection: "I work to master my senses, mind, and intellect, releasing desire, fear, and anger.",
        devotionalSurrender: "Lord, free me from desire, fear, and anger. Let me know the liberation that is already mine.",
        emotions: ["fear", "anger", "attachment"],
        audioUrl: null
    },
    {
        id: "5-29",
        chapter: 5,
        verse: 29,
        sanskrit: "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्। सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥",
        transliteration: "bhoktāraṁ yajña-tapasāṁ sarva-loka-maheśhvaram suhṛidaṁ sarva-bhūtānāṁ jñātvā māṁ śhāntim ṛichchhati",
        simpleMeaning: "Knowing Me as the enjoyer of all sacrifices and austerities, the great Lord of all worlds, and the friend of all beings, one attains peace.",
        practicalExplanation: "This concluding verse reveals the ultimate truth: Krishna is the recipient of all worship, the sovereign of all worlds, and the dear friend of every creature. Knowing this brings lasting peace. God is not distant but intimately connected to us.",
        strengthReflection: "I find peace knowing that the Supreme Lord is the friend of all beings, including me.",
        devotionalSurrender: "O Lord Krishna, You are the enjoyer of my offerings, the Lord of my world, and my dearest friend. In knowing You, I find perfect peace.",
        emotions: ["fear", "self-doubt", "attachment"],
        audioUrl: null
    }
];

// Standard file operations
const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 5 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 5);

// Add Chapter 5 verses
existingData.shloks = [...filteredShloks, ...chapter5Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter5Verses.length} verses for Chapter 5. Total: ${existingData.shloks.length}`);
