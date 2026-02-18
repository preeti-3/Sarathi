const fs = require('fs');
const path = require('path');

// Chapter 9 - Raja Vidya Raja Guhya Yoga (The Yoga of Royal Knowledge and Royal Secret) - All 34 verses
const chapter9Verses = [
    {
        id: "9-1",
        chapter: 9,
        verse: 1,
        sanskrit: "श्रीभगवानुवाच। इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे। ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥",
        transliteration: "śhrī bhagavān uvācha idaṁ tu te guhyatamaṁ pravakṣhyāmy anasūyave jñānaṁ vijñāna-sahitaṁ yaj jñātvā mokṣhyase 'śhubhāt",
        simpleMeaning: "The Supreme Lord said: To you who are free from envy, I shall now reveal the most secret knowledge combined with realization, knowing which you shall be freed from inauspiciousness.",
        practicalExplanation: "Krishna offers His deepest teaching to one who has no envy. Jealousy blocks spiritual reception. This knowledge is both theoretical (jnana) and experiential (vijnana). It's called 'guhyatama' — the most secret of secrets. Such knowledge liberates from all negativity and suffering.",
        strengthReflection: "I approach sacred teachings with humility and without envy, ready to receive wisdom.",
        devotionalSurrender: "O Lord, I come without jealousy, eager to receive Your most secret knowledge.",
        emotions: ["devotion", "humility", "seeking"],
        audioUrl: null
    },
    {
        id: "9-2",
        chapter: 9,
        verse: 2,
        sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्। प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्॥",
        transliteration: "rāja-vidyā rāja-guhyaṁ pavitram idam uttamam pratyakṣhāvagamaṁ dharmyaṁ su-sukhaṁ kartum avyayam",
        simpleMeaning: "This knowledge is the king of sciences, the king of secrets, supremely purifying, directly perceivable, righteous, joyful to practice, and imperishable.",
        practicalExplanation: "Seven qualities describe this teaching: royal among all knowledge, most confidential, supremely purifying, directly experiential (not just belief), aligned with dharma, blissful to practice, and eternal in fruits. Unlike worldly knowledge that fades, this delivers lasting joy.",
        strengthReflection: "I recognize that the highest knowledge is both joyful to practice and eternal in its fruits.",
        devotionalSurrender: "Lord, grant me this royal knowledge that purifies my soul and brings lasting happiness.",
        emotions: ["joy", "wisdom", "devotion"],
        audioUrl: null
    },
    {
        id: "9-3",
        chapter: 9,
        verse: 3,
        sanskrit: "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप। अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि॥",
        transliteration: "aśhraddadhānāḥ puruṣhā dharmasyāsya parantapa aprāpya māṁ nivartante mṛityu-sansāra-vartmani",
        simpleMeaning: "Those who have no faith in this dharma, O Arjuna, without reaching Me, return to the path of death and rebirth.",
        practicalExplanation: "Faith (shraddha) is essential. Without faith, even the best teaching remains ineffective. Those who dismiss this knowledge continue in the cycle of death and rebirth, missing the chance for liberation. Faith opens the door that knowledge walks through.",
        strengthReflection: "I cultivate faith as the essential foundation for receiving transformative wisdom.",
        devotionalSurrender: "O Krishna, strengthen my faith so I may receive Your teachings and reach You.",
        emotions: ["faith", "devotion", "seeking"],
        audioUrl: null
    },
    {
        id: "9-4",
        chapter: 9,
        verse: 4,
        sanskrit: "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना। मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः॥",
        transliteration: "mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā mat-sthāni sarva-bhūtāni na chāhaṁ teṣhv avasthitaḥ",
        simpleMeaning: "This entire universe is pervaded by Me in My unmanifest form. All beings exist in Me, but I do not dwell in them.",
        practicalExplanation: "The Divine is everywhere in unmanifest form — invisible but omnipresent. Everything exists within God, yet God is not limited to anything. Like space contains all objects but is not contained by them. God is both immanent and transcendent simultaneously.",
        strengthReflection: "I recognize the Divine presence pervading everything while not limited by anything.",
        devotionalSurrender: "Lord, You are in all things, yet beyond all things. Open my eyes to see You everywhere.",
        emotions: ["wonder", "devotion", "wisdom"],
        audioUrl: null
    },
    {
        id: "9-5",
        chapter: 9,
        verse: 5,
        sanskrit: "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम्। भूतभृन्न च भूतस्थो ममात्मा भूतभावनः॥",
        transliteration: "na cha mat-sthāni bhūtāni paśhya me yogam aiśhvaram bhūta-bhṛin na cha bhūta-stho mamātmā bhūta-bhāvanaḥ",
        simpleMeaning: "And yet beings do not rest in Me. Behold My divine mystery! I sustain all beings, yet I am not in them — My Self is the source of all beings.",
        practicalExplanation: "A paradox reveals divine mystery: God contains all, yet isn't contained. God sustains all, yet isn't in all in the limited sense. This is yoga aishwara — divine mystery. The mind cannot fully grasp this, but the heart can sense it. God is both everything and beyond everything.",
        strengthReflection: "I embrace divine paradox, knowing truth transcends logical categories.",
        devotionalSurrender: "O Lord of mysteries, I bow to what I cannot fully understand but can wholeheartedly love.",
        emotions: ["wonder", "mystery", "devotion"],
        audioUrl: null
    },
    {
        id: "9-6",
        chapter: 9,
        verse: 6,
        sanskrit: "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान्। तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय॥",
        transliteration: "yathākāśha-sthito nityaṁ vāyuḥ sarvatra-go mahān tathā sarvāṇi bhūtāni mat-sthānīty upadhāraya",
        simpleMeaning: "As the mighty wind, moving everywhere, always rests in space, so know that all beings rest in Me.",
        practicalExplanation: "The analogy clarifies the paradox: wind (beings) moves everywhere within space (God) yet doesn't affect space itself. Space holds the wind without being disturbed by it. Similarly, all beings exist within the Divine without changing or limiting the Divine. The container is untouched by the contained.",
        strengthReflection: "I exist within the Divine like wind in space — moving freely while always held.",
        devotionalSurrender: "Lord, I rest in You like wind in space — held without holding, contained without containing.",
        emotions: ["peace", "trust", "wonder"],
        audioUrl: null
    },
    {
        id: "9-7",
        chapter: 9,
        verse: 7,
        sanskrit: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्। कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम्॥",
        transliteration: "sarva-bhūtāni kaunteya prakṛitiṁ yānti māmikām kalpa-kṣhaye punas tāni kalpādau visṛijāmy aham",
        simpleMeaning: "At the end of a cosmic cycle, O Arjuna, all beings return to My prakriti (material nature), and at the beginning of the next cycle, I create them again.",
        practicalExplanation: "Creation is cyclic. At cosmic dissolution, everything merges back into divine nature. At new creation, everything emerges again. This happens repeatedly without end. Understanding this grand cosmic rhythm puts personal concerns in perspective — we are part of an infinite, eternal dance.",
        strengthReflection: "I rest in the eternal rhythm of creation and dissolution, knowing I am part of something infinite.",
        devotionalSurrender: "O Lord, whether creation or dissolution, I am always in Your nature, always Yours.",
        emotions: ["peace", "perspective", "trust"],
        audioUrl: null
    },
    {
        id: "9-8",
        chapter: 9,
        verse: 8,
        sanskrit: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः। भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात्॥",
        transliteration: "prakṛitiṁ svām avaṣhṭabhya visṛijāmi punaḥ punaḥ bhūta-grāmam imaṁ kṛitsnam avaśhaṁ prakṛiter vaśhāt",
        simpleMeaning: "Presiding over My own prakriti, I create this multitude of beings again and again, helpless under the influence of material nature.",
        practicalExplanation: "God creates through His own nature, not through external material. Beings emerge helplessly subject to material nature's laws. This 'helplessness' applies to the unawakened — those who don't know their true nature. Awakening frees us from this helpless subjection to prakriti's cycles.",
        strengthReflection: "I awaken from helpless subjection to nature by knowing my true identity.",
        devotionalSurrender: "Lord, free me from the helpless cycles. Let me know myself as Your creation, not nature's slave.",
        emotions: ["liberation", "wisdom", "seeking"],
        audioUrl: null
    },
    {
        id: "9-9",
        chapter: 9,
        verse: 9,
        sanskrit: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय। उदासीनवदासीनमसक्तं तेषु कर्मसु॥",
        transliteration: "na cha māṁ tāni karmāṇi nibadhnanti dhanañjaya udāsīna-vad āsīnam asaktaṁ teṣhu karmasu",
        simpleMeaning: "O Arjuna, these actions do not bind Me. I remain as if neutral, seated detached, unattached to these actions.",
        practicalExplanation: "Though God creates, He is not bound by creation. He acts without attachment, like a witness. This is the model for human action — engaged but detached, active but not bound. The divine example shows that action doesn't require bondage when performed without selfish attachment.",
        strengthReflection: "I can act fully while remaining inwardly free, like the Divine who creates without bondage.",
        devotionalSurrender: "O Lord, teach me Your art of acting without being bound by my actions.",
        emotions: ["freedom", "wisdom", "peace"],
        audioUrl: null
    },
    {
        id: "9-10",
        chapter: 9,
        verse: 10,
        sanskrit: "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम्। हेतुनानेन कौन्तेय जगद्विपरिवर्तते॥",
        transliteration: "mayādhyakṣheṇa prakṛitiḥ sūyate sa-charācharam hetunānena kaunteya jagad viparivartate",
        simpleMeaning: "Under My supervision, prakriti produces all moving and non-moving beings. By this cause, O Arjuna, the world revolves.",
        practicalExplanation: "God supervises nature, which then produces everything. God is the ultimate cause, nature is the instrumental cause. The world cycles through creation and dissolution under this supervision. Understanding this hierarchy helps us look beyond nature to its divine supervisor.",
        strengthReflection: "I look beyond nature's mechanisms to the Divine consciousness supervising all.",
        devotionalSurrender: "Lord, as You supervise all creation, supervise my life. Direct my nature's expression.",
        emotions: ["trust", "surrender", "wisdom"],
        audioUrl: null
    },
    {
        id: "9-11",
        chapter: 9,
        verse: 11,
        sanskrit: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम्। परं भावमजानन्तो मम भूतमहेश्वरम्॥",
        transliteration: "avajānanti māṁ mūḍhā mānuṣhīṁ tanum āśhritam paraṁ bhāvam ajānanto mama bhūta-maheśhvaram",
        simpleMeaning: "Fools disregard Me when I appear in human form, not knowing My supreme nature as the Lord of all beings.",
        practicalExplanation: "When the Divine appears in human form, the foolish see only the human. They miss the infinite contained in the finite. This is perhaps the greatest spiritual blindness — failing to recognize divinity when it stands before you. The wise see through the form to the formless.",
        strengthReflection: "I train myself to see divinity in human form, not dismissing it due to outer appearance.",
        devotionalSurrender: "O Lord, never let me be so foolish as to disregard Your presence in any form.",
        emotions: ["humility", "devotion", "wisdom"],
        audioUrl: null
    },
    {
        id: "9-12",
        chapter: 9,
        verse: 12,
        sanskrit: "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः। राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः॥",
        transliteration: "moghāśhā mogha-karmāṇo mogha-jñānā vichetasaḥ rākṣhasīm āsurīṁ chaiva prakṛitiṁ mohinīṁ śhritāḥ",
        simpleMeaning: "Their hopes are vain, their actions are vain, their knowledge is vain. Devoid of discrimination, they embrace demonic and deluding nature.",
        practicalExplanation: "Those who dismiss the Divine have hopes, actions, and knowledge that lead nowhere. They are swayed by tamasic and rajasic energies that create only delusion. Without recognizing the Divine source, all spiritual efforts become fruitless, like trying to water a plant by spraying its leaves instead of its roots.",
        strengthReflection: "I ensure my efforts bear fruit by rooting them in divine recognition.",
        devotionalSurrender: "Lord, preserve me from vain hopes and actions. Let all I do be rooted in You.",
        emotions: ["wisdom", "discernment", "devotion"],
        audioUrl: null
    },
    {
        id: "9-13",
        chapter: 9,
        verse: 13,
        sanskrit: "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः। भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम्॥",
        transliteration: "mahātmānas tu māṁ pārtha daivīṁ prakṛitim āśhritāḥ bhajanty ananya-manaso jñātvā bhūtādim avyayam",
        simpleMeaning: "But great souls, O Arjuna, taking shelter of the divine nature, worship Me with undivided minds, knowing Me as the imperishable origin of all beings.",
        practicalExplanation: "Great souls (mahatmas) recognize the Divine and worship with single-pointed devotion. They are established in divine nature (sattva), not demonic nature. Their minds don't wander because they've found the source. Knowing Krishna as the eternal origin, they need seek nothing else.",
        strengthReflection: "I aspire to be a mahatma — one who recognizes the Divine and worships with undivided heart.",
        devotionalSurrender: "O imperishable Lord, origin of all, I worship You with my whole undivided being.",
        emotions: ["devotion", "love", "commitment"],
        audioUrl: null
    },
    {
        id: "9-14",
        chapter: 9,
        verse: 14,
        sanskrit: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः। नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते॥",
        transliteration: "satataṁ kīrtayanto māṁ yatantaśh cha dṛiḍha-vratāḥ namasyantaśh cha māṁ bhaktyā nitya-yuktā upāsate",
        simpleMeaning: "Always chanting My glories, striving with steadfast vows, bowing down to Me with devotion, the eternally united ones worship Me.",
        practicalExplanation: "The practices of great devotees: constant remembrance through chanting, firm spiritual vows, humble prostration, and unwavering connection. These aren't occasional activities but a lifestyle. 'Nitya yukta' means always united — not just during meditation but in every moment of life.",
        strengthReflection: "I make divine remembrance my constant practice, not just an occasional activity.",
        devotionalSurrender: "O Lord, I chant Your name, hold my vows, bow to You, and stay ever connected.",
        emotions: ["devotion", "discipline", "love"],
        audioUrl: null
    },
    {
        id: "9-15",
        chapter: 9,
        verse: 15,
        sanskrit: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते। एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्॥",
        transliteration: "jñāna-yajñena chāpy anye yajanto mām upāsate ekatvena pṛithaktvena bahudhā viśhvato-mukham",
        simpleMeaning: "Others, offering the sacrifice of knowledge, worship Me as one, as distinct, or in various forms — the universal form facing all directions.",
        practicalExplanation: "Different devotees worship differently: some see God as one (monism), some as separate (dualism), some in multiple forms (pluralism), some as the universal cosmic form. Krishna accepts all these approaches. There is no single 'correct' way — all sincere paths lead to Him.",
        strengthReflection: "I honor all genuine paths to the Divine while remaining true to my own.",
        devotionalSurrender: "O Universal Lord, however I see You, let me see You truly and worship sincerely.",
        emotions: ["tolerance", "wisdom", "devotion"],
        audioUrl: null
    },
    {
        id: "9-16",
        chapter: 9,
        verse: 16,
        sanskrit: "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम्। मन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम्॥",
        transliteration: "ahaṁ kratur ahaṁ yajñaḥ svadhāham aham auṣhadham mantro 'ham aham evājyam aham agnir ahaṁ hutam",
        simpleMeaning: "I am the ritual, I am the sacrifice, I am the offering, I am the herbs, I am the mantra, I am the butter, I am the fire, I am the act of offering.",
        practicalExplanation: "Krishna declares Himself as every element of worship. He is the ritual, what's offered, the fire, and the offering itself. This means all worship ultimately reaches Him regardless of form. There's no spiritual act that excludes the Divine — God is both the process and the goal.",
        strengthReflection: "In every spiritual practice, I recognize that God is both the path and the destination.",
        devotionalSurrender: "O Lord, You are everything in my worship. Whatever I offer, I offer to You who are all.",
        emotions: ["wonder", "devotion", "unity"],
        audioUrl: null
    },
    {
        id: "9-17",
        chapter: 9,
        verse: 17,
        sanskrit: "पिताहमस्य जगतो माता धाता पितामहः। वेद्यं पवित्रमोंकार ऋक्साम यजुरेव च॥",
        transliteration: "pitāham asya jagato mātā dhātā pitāmahaḥ vedyaṁ pavitram oṁkāra ṛik sāma yajur eva cha",
        simpleMeaning: "I am the father of this universe, the mother, the sustainer, the grandfather. I am the object of knowledge, the purifier, the sacred Om, and the Rig, Sama, and Yajur Vedas.",
        practicalExplanation: "God is every divine role: father, mother, grandfather, sustainer. He is also the essence of all scripture and the purifying power behind all sacred sounds. This comprehensive statement leaves nothing outside the Divine. Whatever you seek knowledge of, whatever purifies you — it is all God.",
        strengthReflection: "I see the Divine as both my father and mother, the source of all knowledge and purity.",
        devotionalSurrender: "O Father, Mother, Grandfather of all — You are all sacred wisdom. I take refuge in You.",
        emotions: ["love", "devotion", "trust"],
        audioUrl: null
    },
    {
        id: "9-18",
        chapter: 9,
        verse: 18,
        sanskrit: "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत्। प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम्॥",
        transliteration: "gatir bhartā prabhuḥ sākṣhī nivāsaḥ śharaṇaṁ suhṛit prabhavaḥ pralayaḥ sthānaṁ nidhānaṁ bījam avyayam",
        simpleMeaning: "I am the goal, the sustainer, the master, the witness, the abode, the refuge, the friend. I am the origin, dissolution, foundation, treasure-house, and imperishable seed.",
        practicalExplanation: "Nine more divine attributes: the destination (goal), the supporter, the lord, the witness of all, the dwelling place, the shelter, the well-wishing friend, the source of creation, the agent of dissolution, the resting place, the storehouse, and the eternal seed of all. Every possible role is fulfilled by the one Divine.",
        strengthReflection: "I find all I need in the Divine — goal, support, shelter, friendship, and origin.",
        devotionalSurrender: "Lord, You are everything to me — my goal, my refuge, my dearest friend, my eternal source.",
        emotions: ["love", "trust", "surrender"],
        audioUrl: null
    },
    {
        id: "9-19",
        chapter: 9,
        verse: 19,
        sanskrit: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च। अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन॥",
        transliteration: "tapāmy aham ahaṁ varṣhaṁ nigṛihṇāmy utsṛijāmi cha amṛitaṁ chaiva mṛityuśh cha sad asach chāham arjuna",
        simpleMeaning: "I give heat; I send forth and withhold the rain; I am immortality and also death; I am being and non-being, O Arjuna.",
        practicalExplanation: "God controls all natural forces — heat and rain, life and death. He is both being (sat) and non-being (asat) — existence and apparent emptiness. Both poles of every duality find their source in Him. There is no force in nature, no aspect of reality, that is separate from the Divine.",
        strengthReflection: "I recognize the Divine presence in all natural forces and all aspects of reality.",
        devotionalSurrender: "O Lord of life and death, being and non-being — all reality is Your expression.",
        emotions: ["wonder", "surrender", "wisdom"],
        audioUrl: null
    },
    {
        id: "9-20",
        chapter: 9,
        verse: 20,
        sanskrit: "त्रैविद्या मां सोमपाः पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते। ते पुण्यमासाद्य सुरेन्द्रलोकमश्नन्ति दिव्यान्दिवि देवभोगान्॥",
        transliteration: "trai-vidyā māṁ soma-pāḥ pūta-pāpā yajñair iṣhṭvā svar-gatiṁ prārthayante te puṇyam āsādya surendra-lokam aśhnanti divyān divi deva-bhogān",
        simpleMeaning: "The knowers of the three Vedas, who drink the soma and are purified of sins, worship Me through sacrifices, praying for passage to heaven. They reach the sacred realm of Indra and enjoy celestial pleasures.",
        practicalExplanation: "Ritualistic worshippers gain heavenly rewards — but these are temporary. Ritual purity and proper sacrifice earn heavenly pleasures, yet not liberation. This is significant achievement but not the highest. The Gita doesn't dismiss these practices but points beyond them.",
        strengthReflection: "I honor traditional practices while aspiring beyond temporary heavenly rewards.",
        devotionalSurrender: "Lord, grant me not just heavenly pleasures but eternal union with You.",
        emotions: ["wisdom", "aspiration", "devotion"],
        audioUrl: null
    },
    {
        id: "9-21",
        chapter: 9,
        verse: 21,
        sanskrit: "ते तं भुक्त्वा स्वर्गलोकं विशालं क्षीणे पुण्ये मर्त्यलोकं विशन्ति। एवं त्रयीधर्ममनुप्रपन्ना गतागतं कामकामा लभन्ते॥",
        transliteration: "te taṁ bhuktvā svarga-lokaṁ viśhālaṁ kṣhīṇe puṇye martya-lokaṁ viśhanti evaṁ trayī-dharmam anuprapannā gatāgataṁ kāma-kāmā labhante",
        simpleMeaning: "Having enjoyed the vast heavenly realm, when their merit is exhausted, they return to this mortal world. Thus, following the Vedic rituals, seeking sense pleasures, they attain only the cycle of going and returning.",
        practicalExplanation: "The critical teaching: even heaven is impermanent. When merit runs out, heavenly beings must return to earth. This cycle of rising and falling continues endlessly for those motivated by desire. Only those seeking the permanent — God Himself — escape this cycle.",
        strengthReflection: "I seek the permanent over the pleasant, knowing all temporary heavens eventually end.",
        devotionalSurrender: "O Lord, I don't want heaven that fades. I want You, who are eternal.",
        emotions: ["wisdom", "discernment", "devotion"],
        audioUrl: null
    },
    {
        id: "9-22",
        chapter: 9,
        verse: 22,
        sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        transliteration: "ananyāśh chintayanto māṁ ye janāḥ paryupāsate teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmy aham",
        simpleMeaning: "But to those who worship Me exclusively, thinking of nothing else, who are ever united — I protect what they have and provide what they lack.",
        practicalExplanation: "This is Krishna's great promise: exclusive devotees receive divine protection and provision. 'Yoga' means what you don't yet have; 'kshema' means protecting what you already have. God personally carries (vahami) this responsibility. Not a distant blessing but personal care.",
        strengthReflection: "The Divine personally cares for all my needs — providing what I lack and protecting what I have.",
        devotionalSurrender: "O Krishna, I surrender to You exclusively. Protect what I have and provide what I need.",
        emotions: ["trust", "devotion", "surrender"],
        audioUrl: null
    },
    {
        id: "9-23",
        chapter: 9,
        verse: 23,
        sanskrit: "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयान्विताः। तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम्॥",
        transliteration: "ye 'py anya-devatā-bhaktā yajante śhraddhayānvitāḥ te 'pi mām eva kaunteya yajanty avidhi-pūrvakam",
        simpleMeaning: "Even those devotees who faithfully worship other gods are actually worshipping Me alone, O son of Kunti, though not in the proper way.",
        practicalExplanation: "A remarkable statement of divine unity: even worship of other deities reaches Krishna, though indirectly. All sincere worship goes to the One. The 'improper way' doesn't reject their worship but suggests they haven't recognized the ultimate recipient. All rivers reach the ocean.",
        strengthReflection: "I honor all sincere worship while seeking to worship the ultimate source directly.",
        devotionalSurrender: "Lord, let all my worship reach You directly. You are the one behind all forms.",
        emotions: ["tolerance", "wisdom", "devotion"],
        audioUrl: null
    },
    {
        id: "9-24",
        chapter: 9,
        verse: 24,
        sanskrit: "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च। न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते॥",
        transliteration: "ahaṁ hi sarva-yajñānāṁ bhoktā cha prabhur eva cha na tu mām abhijānanti tattvenātaśh chyavanti te",
        simpleMeaning: "I am the enjoyer and master of all sacrifices. But those who do not recognize Me in truth fall down from their attainment.",
        practicalExplanation: "Krishna is the true recipient of all worship and the Lord of all spiritual practice. Not recognizing this truth causes people to fall from their spiritual heights. Even sincere practitioners lose their gains if they miss the ultimate truth. Recognition of the Supreme completes all spiritual effort.",
        strengthReflection: "I complete my spiritual practice by recognizing Krishna as the source and goal of all.",
        devotionalSurrender: "O Lord of all sacrifice, I recognize You as the true recipient of all my offerings.",
        emotions: ["wisdom", "devotion", "humility"],
        audioUrl: null
    },
    {
        id: "9-25",
        chapter: 9,
        verse: 25,
        sanskrit: "यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः। भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम्॥",
        transliteration: "yānti deva-vratā devān pitṝīn yānti pitṛi-vratāḥ bhūtāni yānti bhūtejyā yānti mad-yājino 'pi mām",
        simpleMeaning: "Worshippers of the gods go to the gods, worshippers of ancestors go to the ancestors, worshippers of spirits go to spirits, and My worshippers come to Me.",
        practicalExplanation: "You become what you worship. Worship of devas leads to deva realms, worship of ancestors to ancestral realms, worship of spirits to spirit realms. Only worship of Krishna leads to Krishna. This isn't punishment — it's natural law. Your destination matches your devotion.",
        strengthReflection: "I am mindful that my worship shapes my destination. I worship the highest.",
        devotionalSurrender: "O Krishna, I worship You directly. Let me come to You, not to limited destinations.",
        emotions: ["wisdom", "devotion", "commitment"],
        audioUrl: null
    },
    {
        id: "9-26",
        chapter: 9,
        verse: 26,
        sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
        transliteration: "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati tad ahaṁ bhakty-upahṛitam aśhnāmi prayatātmanaḥ",
        simpleMeaning: "If one offers Me with devotion a leaf, a flower, a fruit, or water, I accept that offering of love from the pure-hearted.",
        practicalExplanation: "One of the most beloved verses: God accepts the simplest offerings when given with love. Not the external value but the inner devotion matters. A leaf or water, offered with a pure heart, delights the Divine. This democratizes worship — anyone can offer, anyone can reach God.",
        strengthReflection: "My small offerings made with great love are as valuable as any magnificent ritual.",
        devotionalSurrender: "O Lord, I offer You simple things with pure love. Accept my humble offerings.",
        emotions: ["love", "devotion", "simplicity"],
        audioUrl: null
    },
    {
        id: "9-27",
        chapter: 9,
        verse: 27,
        sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्। यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥",
        transliteration: "yat karoṣhi yad aśhnāsi yaj juhoṣhi dadāsi yat yat tapasyasi kaunteya tat kuruṣhva mad-arpaṇam",
        simpleMeaning: "Whatever you do, whatever you eat, whatever you offer in sacrifice, whatever you give away, whatever austerity you practice — do that as an offering to Me.",
        practicalExplanation: "The secret of spiritual life in action: offer everything to God. Eating, working, giving, practicing — all becomes worship when dedicated to the Divine. This transforms mundane life into continuous prayer. Nothing is too small or secular to be an offering.",
        strengthReflection: "I transform all my daily activities into worship by offering them to the Divine.",
        devotionalSurrender: "O Lord, I offer everything — every action, every meal, every breath — to You.",
        emotions: ["devotion", "surrender", "purpose"],
        audioUrl: null
    },
    {
        id: "9-28",
        chapter: 9,
        verse: 28,
        sanskrit: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः। संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि॥",
        transliteration: "śhubhāśhubha-phalair evaṁ mokṣhyase karma-bandhanaiḥ sannyāsa-yoga-yuktātmā vimukto mām upaiṣhyasi",
        simpleMeaning: "Thus you shall be freed from the bondage of actions and their auspicious and inauspicious results. With your mind fixed on Me through the yoga of renunciation, you shall be liberated and come to Me.",
        practicalExplanation: "The fruit of offering all to God: freedom from karma's bondage. Both good and bad results bind when done with attachment. But offering all results to Krishna liberates. This is sannyasa yoga — renunciation of fruits, not actions. Remain active, stay free.",
        strengthReflection: "I act without anxiety about results because I've offered both success and failure to God.",
        devotionalSurrender: "Lord, I surrender all results — good and bad — to You. Free me from karma's binding.",
        emotions: ["freedom", "surrender", "peace"],
        audioUrl: null
    },
    {
        id: "9-29",
        chapter: 9,
        verse: 29,
        sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः। ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्॥",
        transliteration: "samo 'haṁ sarva-bhūteṣhu na me dveṣhyo 'sti na priyaḥ ye bhajanti tu māṁ bhaktyā mayi te teṣhu chāpy aham",
        simpleMeaning: "I am equally present in all beings. None is hateful or dear to Me. But those who worship Me with devotion dwell in Me, and I in them.",
        practicalExplanation: "God is impartial — no favorites, no rejected ones. Yet there appears to be favoritism because devotees experience closeness. The difference isn't in God but in the devotee's receptivity. The sun shines on all, but only the open flower receives its light. Devotion opens the heart.",
        strengthReflection: "The Divine is equally available to all. My devotion determines how much I experience.",
        devotionalSurrender: "O Lord, I open to Your ever-present love. Dwell in me as I dwell in You.",
        emotions: ["love", "equality", "devotion"],
        audioUrl: null
    },
    {
        id: "9-30",
        chapter: 9,
        verse: 30,
        sanskrit: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्। साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥",
        transliteration: "api chet su-durāchāro bhajate mām ananya-bhāk sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ",
        simpleMeaning: "Even if the most sinful person worships Me with exclusive devotion, he should be considered a saint, for he has rightly resolved.",
        practicalExplanation: "One of the Gita's most compassionate verses. Past sins don't disqualify one from divine love. The moment someone turns to God with full heart, they become a sadhu (saint). It's the resolution that matters, not the history. No one is too fallen to be embraced by devotion.",
        strengthReflection: "My past doesn't define me. My present devotion transforms everything.",
        devotionalSurrender: "O merciful Lord, whatever my past, I turn to You now with my whole heart.",
        emotions: ["hope", "redemption", "devotion"],
        audioUrl: null
    },
    {
        id: "9-31",
        chapter: 9,
        verse: 31,
        sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति। कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति॥",
        transliteration: "kṣhipraṁ bhavati dharmātmā śhaśhvach-chhāntiṁ nigachchhati kaunteya pratijānīhi na me bhaktaḥ praṇaśhyati",
        simpleMeaning: "Quickly he becomes righteous and attains lasting peace. O Arjuna, declare it boldly: My devotee never perishes!",
        practicalExplanation: "The reformed sinner quickly becomes righteous. Devotion accelerates transformation. And Krishna makes a solemn promise — declare it publicly, He says to Arjuna: My devotee never perishes. No matter what, the devotee is protected. This is divine guarantee.",
        strengthReflection: "Protected by divine love, I am safe. The devotee of God never perishes.",
        devotionalSurrender: "O Lord, I claim Your promise. As Your devotee, I shall never perish.",
        emotions: ["faith", "protection", "peace"],
        audioUrl: null
    },
    {
        id: "9-32",
        chapter: 9,
        verse: 32,
        sanskrit: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः। स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्॥",
        transliteration: "māṁ hi pārtha vyapāśhritya ye 'pi syuḥ pāpa-yonayaḥ striyo vaiśhyās tathā śhūdrās te 'pi yānti parāṁ gatim",
        simpleMeaning: "O Arjuna, by taking refuge in Me, even those born of sinful wombs, women, merchants, and laborers — all attain the supreme goal.",
        practicalExplanation: "The Gita's social revolution: liberation is available to all, regardless of birth, gender, or caste. The traditional exclusions of society don't apply to divine love. Taking refuge in Krishna is the only qualification. This was radical in its time and remains progressive.",
        strengthReflection: "No external identity disqualifies me from divine love and liberation.",
        devotionalSurrender: "O Lord, I take refuge in You, regardless of what the world says about my qualifications.",
        emotions: ["inclusion", "hope", "devotion"],
        audioUrl: null
    },
    {
        id: "9-33",
        chapter: 9,
        verse: 33,
        sanskrit: "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा। अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्॥",
        transliteration: "kiṁ punar brāhmaṇāḥ puṇyā bhaktā rājarṣhayas tathā anityam asukhaṁ lokam imaṁ prāpya bhajasva mām",
        simpleMeaning: "How much more easily, then, the virtuous brahmins and devoted royal sages! Having come to this temporary, unhappy world, worship Me.",
        practicalExplanation: "If even those with social disadvantages can attain God, how much more easily can those with advantages? But the point isn't comparison — it's urgency. This world is temporary and unsatisfying. Whatever your background, the instruction is the same: worship, now.",
        strengthReflection: "Life is short and the world is fleeting. I worship the Divine without delay.",
        devotionalSurrender: "O Lord, this world is passing and sorrowful. I turn to You who are eternal and blissful.",
        emotions: ["urgency", "devotion", "wisdom"],
        audioUrl: null
    },
    {
        id: "9-34",
        chapter: 9,
        verse: 34,
        sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥",
        transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣhyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ",
        simpleMeaning: "Fix your mind on Me, be My devotee, worship Me, bow down to Me. Thus uniting yourself with Me, taking Me as the supreme goal, you shall come to Me.",
        practicalExplanation: "The chapter ends with the simplest and most complete instruction: think of Me, love Me, worship Me, bow to Me — and you'll reach Me. Four simple practices, one guaranteed result. The mind on God, heart devoted, actions worshipful, ego bowed — this is the complete path.",
        strengthReflection: "I practice the fourfold devotion: thinking, loving, worshipping, and surrendering to the Divine.",
        devotionalSurrender: "O Krishna, my mind is Yours, my heart loves You, my actions worship You, my ego bows to You.",
        emotions: ["devotion", "surrender", "love"],
        audioUrl: null
    }
];

const dataPath = path.join(__dirname, '..', 'data', 'shloks.json');
const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Filter out any existing Chapter 9 verses (in case of re-run)
const filteredShloks = existingData.shloks.filter(s => s.chapter !== 9);

// Add Chapter 9 verses
existingData.shloks = [...filteredShloks, ...chapter9Verses];

// Sort by chapter and verse
existingData.shloks.sort((a, b) => {
    if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
    }
    return a.verse - b.verse;
});

// Write back to file
fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2), 'utf8');

console.log(`Added ${chapter9Verses.length} verses for Chapter 9. Total: ${existingData.shloks.length}`);
