USE rome;

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

-- Inserer des donnees dans la table period
INSERT INTO
    period (name)
VALUES
    ('Age de pierre'),
    ('Age de bronze'),
    ('Age de fer');

-- Inserer des donnees dans la table alliance
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

-- Inserer des donnees dans la table building
INSERT INTO
    building (name, description, image)
VALUES
    (
        'Colosseum',
        'A large amphitheatre in Rome',
        '/images/buildings/colosseum1.jpg'
    ),
    (
        'Pantheon',
        'A former Roman temple, now a church',
        '/images/buildings/pantheon1.jpg'
    ),
    (
        'Aqueduct',
        'A structure to convey water',
        '/images/buildings/aqueduct.jpg'
    ),
    (
        'Circus Maximus',
        'A large chariot racing stadium',
        '/images/buildings/circus_maximus.jpg'
    ),
    (
        'Roman Forum',
        'The center of public life in Rome',
        '/images/buildings/forum1.png'
    ),
    (
        'Baths of Caracalla',
        'Large public baths in Rome',
        '/images/buildings/baths_of_caracalla.jpg'
    ),
    (
        'Barracks',
        'Military housing and training facility',
        '/images/buildings/barracks1.png'
    ),
    (
        'Racecourse',
        'A track for racing, particularly chariots',
        '/images/buildings/racecourse.png'
    ),
    (
        'Temple',
        'A building dedicated to worshipping gods',
        '/images/buildings/temple.png'
    ),
    (
        'House',
        'Residential building for citizens',
        '/images/buildings/house1.png'
    );

-- Inserer des donnees dans la table technology
INSERT INTO
    technology (
        name,
        description,
        image,
        category,
        construction_time
    )
VALUES
    (
        'Hache',
        'Outil utilise pour couper du bois, Bonus : generation de bois +10%',
        '/images/axe.png',
        1,
        10
    ),
    (
        'pioche',
        'Outil utilise pour miner de la pierre, Bonus : generation de pierre +10%',
        '/images/pickaxe.png',
        1,
        15
    ),
    (
        "Mine d'or",
        'Permet la creation de mine d\'or',
        '/images/goldMine.png',
        1,
        20
    ),
    (
        'elevage',
        'Permet d\'avoir un elevage de betail pour generer de la viande',
        '/images/elevage.png',
        1,
        25
    ),
    (
        'Fourche',
        'Outil permettant de travailler la terre, Bonus',
        '/images/fork.png',
        1,
        12
    ),
    (
        'Arc',
        "Permet la formation d'archer",
        '/images/bow.png',
        2,
        30
    ),
    (
        'cheval',
        'Permet la formation de cavalier',
        '/images/horse.png',
        2,
        35
    ),
    (
        'lance',
        'Permet la formation de lancier',
        '/images/lance.png',
        2,
        40
    ),
    (
        'Epee',
        'Permet la formation de legionnaire',
        '/images/sword.png',
        3,
        45
    );

-- Inserer des donnees dans la table role
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

-- Inserer des donnees dans la table resource
INSERT INTO
    ressource (name, description, image)
VALUES
    (
        'Bois',
        "Ressource essentielle pour la construction et l'artisanat",
        '/images/wood.png'
    ),
    (
        'Pierre',
        'Ressource essentielle pour la construction',
        '/images/stone.png'
    ),
    (
        'Or',
        'Metal precieux utilise pour le commerce et la fabrication de bijoux',
        '/images/gold.png'
    ),
    (
        'Viande',
        "Ressource alimentaire obtenue par l'elevage",
        '/images/meat.png'
    ),
    (
        'Fer',
        'Metal utilise pour fabriquer des outils et des armes',
        '/images/iron.png'
    );

-- Inserer des donnees dans la table user_alliance
INSERT INTO
    user_alliance (user_id, alliance_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6);

-- Inserer des donnees dans la table battle
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

-- Inserer des donnees dans la table province
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


-- Inserer des donnees dans la table inhabitant
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

INSERT INTO
    province_technology (technology_id, province_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6);

INSERT INTO
    province_building (level, province_id, building_id)
VALUES
    (1, 1, 1),
    (1, 1, 2),
    (1, 1, 3),
    (1, 1, 4),
    (1, 1, 5),
    (1, 1, 6),
    (1, 1, 7),
    (1, 1, 8),
    (1, 1, 9),
    (1, 1, 10),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6);

-- Inserer des donnees dans la table province_ressource
INSERT INTO
    province_ressource (quantity, province_id, ressource_id)
VALUES
    (200, 1, 1),
    (200, 1, 2),
    (200, 1, 3),
    (200, 1, 4),
    (200, 1, 5),
    (200, 2, 1),
    (200, 2, 2),
    (200, 2, 3),
    (200, 2, 4),
    (200, 2, 5),
    (200, 3, 1),
    (200, 3, 2),
    (200, 3, 3),
    (200, 3, 4),
    (200, 3, 5),
    (200, 4, 1),
    (200, 4, 2),
    (200, 4, 3),
    (200, 4, 4),
    (200, 4, 5),
    (200, 5, 1),
    (200, 5, 2),
    (200, 5, 3),
    (200, 5, 4),
    (200, 5, 5),
    (200, 6, 1),
    (200, 6, 2),
    (200, 6, 3),
    (200, 6, 4),
    (200, 6, 5);

-- Insertion dans la table technology_ressource
INSERT INTO
    technology_ressource (technology_id, ressource_id, cost)
VALUES
    (1, 1, 50),
    (1, 2, 50),
    (2, 3, 50),
    (2, 4, 50),
    (3, 5, 50),
    (3, 1, 50),
    (4, 2, 50),
    (4, 3, 50),
    (5, 4, 50),
    (5, 5, 50),
    (6, 1, 50),
    (6, 2, 50),
    (7, 3, 50),
    (7, 4, 50),
    (8, 5, 50),
    (8, 1, 50),
    (9, 2, 50),
    (9, 3, 50);
