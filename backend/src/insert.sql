-- Insérer des données dans la table user
INSERT INTO
    user (username, email, password, image)
VALUES
    (
        'julius_caesar',
        'caesar@rome.com',
        'password123',
        'caesar.jpg'
    ),
    (
        'augustus',
        'augustus@rome.com',
        'password456',
        'augustus.jpg'
    ),
    (
        'cleopatra',
        'cleopatra@egypt.com',
        'password789',
        'cleopatra.jpg'
    ),
    (
        'marcus_aurelius',
        'marcus@rome.com',
        'password321',
        'marcus.jpg'
    ),
    (
        'nero',
        'nero@rome.com',
        'password654',
        'nero.jpg'
    ),
    (
        'caligula',
        'caligula@rome.com',
        'password987',
        'caligula.jpg'
    );

-- Insérer des données dans la table period
INSERT INTO
    period (name)
VALUES
    ('Age de pierre'),
    ('Age de bronze'),
    ('Age de fer');

-- Insérer des données dans la table alliance
INSERT INTO
    alliance (name, description, image)
VALUES
    (
        'Roman Senate',
        'The ruling body of Republican Rome',
        'senate.jpg'
    ),
    (
        'Triumvirate',
        'Alliance between three powerful leaders',
        'triumvirate.jpg'
    ),
    (
        'Ptolemaic Dynasty',
        'The ruling dynasty of Egypt',
        'ptolemaic.jpg'
    ),
    (
        'Julio-Claudian Dynasty',
        'The first dynasty of Roman emperors',
        'julio_claudian.jpg'
    ),
    (
        'Flavian Dynasty',
        'Dynasty following the Julio-Claudians',
        'flavian.jpg'
    ),
    (
        'Nerva-Antonine Dynasty',
        'Dynasty known for adopting capable successors',
        'nerva_antonine.jpg'
    );

-- Insérer des données dans la table building
INSERT INTO
    building (name, description, image)
VALUES
    (
        'Colosseum',
        'A large amphitheatre in Rome',
        'colosseum.jpg'
    ),
    (
        'Pantheon',
        'A former Roman temple, now a church',
        'pantheon.jpg'
    ),
    (
        'Aqueduct',
        'A structure to convey water',
        'aqueduct.jpg'
    ),
    (
        'Circus Maximus',
        'A large chariot racing stadium',
        'circus_maximus.jpg'
    ),
    (
        'Roman Forum',
        'The center of public life in Rome',
        'roman_forum.jpg'
    ),
    (
        'Baths of Caracalla',
        'Large public baths in Rome',
        'baths_of_caracalla.jpg'
    );

-- Insérer des données dans la table technology
INSERT INTO
    technology (name, description, image, category)
VALUES
    (
        'Hache',
        'Outil utilisé pour couper du bois, Bonus : génération de bois +10%',
        '/images/axe.png',
        1
    ),
    (
        'pioche',
        'Outil utilisé pour miner de la pierre, Bonus : génération de pierre +10%',
        '/images/pickaxe.png',
        1
    ),
    (
        "Mine d'or",
        'Permet la création de mine d\'or',
        '/images/goldMine.png',
        1
    ),
    (
        'elevage',
        'Permet d\'avoir un élevage de bétail pour générer de la viande',
        '/images/elevage.png',
        1
    ),
    (
        'Fourche',
        'Outil permettant de travailler la terre, Bonus',
        '/images/fork.png',
        1
    ),
    (
        'Arc',
        'Permet la formation d\'archer',
        '/images/bow.png',
        2
    ),
    (
        'cheval',
        'Permet la formation de cavalier',
        '/images/horse.png',
        2
    ),
    (
        'lance',
        'Permet la formation de lancier',
        '/images/lance.png',
        2
    ),
    (
        'Epée',
        'Permet la formation de légionnaire',
        '/images/sword.png',
        3
    );

-- Insérer des données dans la table role
INSERT INTO
    role (name, status, description, image)
VALUES
    (
        'Legionary',
        'Active',
        'A Roman soldier',
        'legionary.jpg'
    ),
    (
        'Senator',
        'Active',
        'A member of the Roman Senate',
        'senator.jpg'
    ),
    (
        'Emperor',
        'Active',
        'The ruler of the Roman Empire',
        'emperor.jpg'
    ),
    (
        'Gladiator',
        'Active',
        'A combatant in the arena',
        'gladiator.jpg'
    ),
    (
        'Praetorian Guard',
        'Active',
        'Elite unit of the Imperial Roman army',
        'praetorian_guard.jpg'
    ),
    (
        'Merchant',
        'Active',
        'A trader and businessman',
        'merchant.jpg'
    );

-- Insérer des données dans la table user_alliance
INSERT INTO
    user_alliance (user_id, alliance_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6);

-- Insérer des données dans la table battle
INSERT INTO
    battle (
        resume,
        start_date,
        end_date,
        userAttack_id,
        userDefense_id,
        userWinner_id
    )
VALUES
    (
        'Battle of Actium',
        '31-09-02',
        '31-09-02',
        1,
        3,
        1
    ),
    (
        'Battle of Philippi',
        '42-10-03',
        '42-10-23',
        2,
        1,
        2
    ),
    (
        'Battle of Milvian Bridge',
        '312-10-28',
        '312-10-28',
        4,
        5,
        4
    ),
    (
        'Battle of the Teutoburg Forest',
        '09-09-09',
        '09-09-11',
        6,
        4,
        6
    ),
    (
        'Battle of Zama',
        '202-10-19',
        '202-10-19',
        5,
        6,
        5
    );

-- Insérer des données dans la table province
INSERT INTO
    province (
        name,
        description,
        image,
        period_id,
        user_id,
        battle_id,
        alliance_id
    )
VALUES
    (
        'Gaul',
        'Region in Western Europe',
        'gaul.jpg',
        1,
        1,
        1,
        1
    ),
    (
        'Egypt',
        'Region in North Africa',
        'egypt.jpg',
        2,
        3,
        1,
        3
    ),
    (
        'Britannia',
        'Region in Northern Europe',
        'britannia.jpg',
        3,
        2,
        2,
        2
    ),
    (
        'Hispania',
        'Region in the Iberian Peninsula',
        'hispania.jpg',
        1,
        4,
        3,
        4
    ),
    (
        'Dacia',
        'Region in Eastern Europe',
        'dacia.jpg',
        2,
        5,
        2,
        5
    ),
    (
        'Asia',
        'Region in Asia Minor',
        'asia.jpg',
        3,
        6,
        1,
        6
    );

-- Insérer des données dans la table inhabitant
INSERT INTO
    inhabitant (
        health,
        attack,
        defense,
        image,
        province_id,
        role_id
    )
VALUES
    (100, 75, 50, 'legionary.jpg', 1, 1),
    (80, 50, 60, 'senator.jpg', 2, 2),
    (120, 90, 70, 'emperor.jpg', 3, 3),
    (110, 80, 60, 'gladiator.jpg', 4, 4),
    (90, 70, 65, 'praetorian_guard.jpg', 5, 5),
    (100, 50, 55, 'merchant.jpg', 6, 6);

-- Insérer des données dans la table province_technology
INSERT INTO
    province_technology (technology_id, province_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 2),
    (6, 3);

-- Insérer des données dans la table province_building
INSERT INTO
    province_building (level, province_id, building_id)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6);