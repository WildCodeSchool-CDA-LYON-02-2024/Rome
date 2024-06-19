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

INSERT INTO
    period (name)
VALUES
    ('Republican Rome'),
    ('Imperial Rome'),
    ('Late Antiquity'),
    ('Early Empire'),
    ('Middle Empire'),
    ('Crisis of the Third Century');

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

INSERT INTO
    technology (name, description, image)
VALUES
    (
        'Concrete',
        'A building material invented by the Romans',
        'concrete.jpg'
    ),
    (
        'Roads',
        'Extensive network of roads built by the Romans',
        'roads.jpg'
    ),
    (
        'Aqueducts',
        'Engineering marvels to supply water',
        'aqueducts.jpg'
    ),
    (
        'Arches',
        'Architectural innovation allowing strong structures',
        'arches.jpg'
    ),
    (
        'Roman Numerals',
        'Numerical system used in ancient Rome',
        'roman_numerals.jpg'
    ),
    (
        'Sewers',
        'Advanced sanitation system',
        'sewers.jpg'
    );

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

INSERT INTO
    user_alliance (user_id, alliance_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6);

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
        '9-09-09',
        '9-09-11',
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
        4,
        4,
        3,
        4
    ),
    (
        'Dacia',
        'Region in Eastern Europe',
        'dacia.jpg',
        5,
        5,
        2,
        5
    ),
    (
        'Asia',
        'Region in Asia Minor',
        'asia.jpg',
        6,
        6,
        1,
        6
    );

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
    ressource_technology (technology_id, province_id)
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
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6);
