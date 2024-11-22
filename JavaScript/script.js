$(function () {
    var divMarines = document.getElementById('marines');
    var divPiratas = document.getElementById('piratas');
    var piratas = [
        {
            id: '#001',
            nombre: 'Gold D. Roger',
            posición: 'Rey de los piratas',
            apodo: 'Kaizoku-Ō',
            estado: 'Muerto',
            imagen: '../Img/Roger.png',
        },
        {
            id: '#002',
            nombre: 'Edward Newgate',
            posición: 'Ex Yonko',
            apodo: 'Shirohige',
            estado: 'Muerto',
            imagen: '../Img/Newgate.png',
        },
        {
            id: '#003',
            nombre: 'Kaido',
            posición: 'Ex Yonko',
            apodo: 'Saikyō no Seibutsu',
            estado: 'Muerto',
            imagen: '../Img/Kaido.png',
        },
        {
            id: '#004',
            nombre: 'Charlotte Linlin',
            posición: 'Ex Yonko',
            apodo: 'Big Mom',
            estado: 'Muerto',
            imagen: '../Img/Linlin.png',
        },
        {
            id: '#005',
            nombre: 'Shanks',
            posición: 'Yonko',
            apodo: 'Akagami',
            estado: 'Vivo',
            imagen: '../Img/Shanks.png',
        },
        {
            id: '#006',
            nombre: 'Marshall D. Teach',
            posición: 'Yonko',
            apodo: 'Kurohige',
            estado: 'Vivo',
            imagen: '../Img/Teach.png',
        },
        {
            id: '#007',
            nombre: 'Dracule Mihawk',
            posición: 'Vice-Capitan',
            apodo: 'Taka no Me',
            estado: 'Vivo',
            imagen: '../Img/Mihawk.png',
        },
        {
            id: '#008',
            nombre: 'Buggy',
            posición: 'Yonko',
            apodo: 'Senryō Dōke',
            estado: 'Vivo',
            imagen: '../Img/Buggy.png',
        },
        {
            id: '#009',
            nombre: 'Eustass Kid',
            posición: 'Capitan',
            apodo: ' Kyaputen',
            estado: 'Muerto',
            imagen: '../Img/Kid.png',
        },
        {
            id: '#010',
            nombre: 'Monkey, D. Luffy',
            posición: 'Yonko',
            apodo: 'Mugiwara',
            estado: 'Vivo',
            imagen: '../Img/Luffy.png',
        },
        {
            id: '#011',
            nombre: 'Trafalgar D. Water Law',
            posición: 'Capitan',
            apodo: 'Shi no Gekai',
            estado: 'Muerto',
            imagen: '../Img/Law.png',
        }, {
            id: '#012',
            nombre: 'Cocodrile',
            posición: 'Vice-Capitan',
            apodo: 'Sā Kurokodairu',
            estado: 'Vivo',
            imagen: '../Img/Cocodrile.png',
        },
        {
            id: '#013',
            nombre: 'Brogy',
            posición: 'Capitan',
            apodo: 'Aka-On',
            estado: 'Vivo',
            imagen: '../Img/Brogy.png',
        },
        {
            id: '#014',
            nombre: 'Dorry',
            posición: 'Capitan',
            apodo: 'Ao-Oni',
            estado: 'Vivo',
            imagen: '../Img/Dorry.png',
        },
        {
            id: '#015',
            nombre: 'Boa Hancock',
            posición: 'Capitan',
            apodo: 'Kaizoku Jotei',
            estado: 'Vivo',
            imagen: '../Img/Hancock.png',
        },
        {
            id: '#016',
            nombre: 'King',
            posición: 'Vice-Capitan',
            apodo: 'Kasai ',
            estado: 'Muerto',
            imagen: '../Img/king.png',
        },
        {
            id: '#017',
            nombre: 'Marco',
            posición: 'Vice-Capitan',
            apodo: 'Fushicho',
            estado: 'Vivo',
            imagen: '../Img/Marco.png',
        },
        {
            id: '#018',
            nombre: 'Queen',
            posición: 'Medico',
            apodo: 'Ekasai',
            estado: 'Muerto',
            imagen: '../Img/Kaido.png',
        },
        {
            id: '#019',
            nombre: 'Roronoa Zoro',
            posición: 'Vice-Capitan',
            apodo: 'Kaizoku Gari',
            estado: 'Vivo',
            imagen: '../Img/Zoro.png',
        },
        {
            id: '#020',
            nombre: 'Jimbe',
            posición: 'Timonel',
            apodo: 'Kaikyo',
            estado: 'Vivo',
            imagen: '../Img/Jimbe.png',
        },
        {
            id: '#021',
            nombre: 'Charlotte Katakuri',
            posición: 'Vise-Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Katakuri.png',
        },
        {
            id: '#022',
            nombre: 'Vinsmoke Sanji',
            posición: 'Cocinero',
            apodo: 'Kuro Ashi',
            estado: 'Vivo',
            imagen: '../Img/Sanji.png',
        },
        {
            id: '#023',
            nombre: 'Jack',
            posición: 'Timonel',
            apodo: 'Kangai',
            estado: 'Vivo',
            imagen: '../Img/Jack.png',
        },
        {
            id: '#024',
            nombre: 'Charlotte Smoothie',
            posición: 'Comandante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Smoothie.png',
        },
        {
            id: '#025',
            nombre: 'Nico Robin',
            posición: 'Arqueóloga',
            apodo: 'Akuma no ko',
            estado: 'Vivo',
            imagen: '../Img/Robin.png',
        },
        {
            id: '#026',
            nombre: 'Charlotte Cracker',
            posición: 'Comandante',
            apodo: 'Senju no karakka',
            estado: 'Vivo',
            imagen: '../Img/Cracker.png',
        },
        {
            id: '#027',
            nombre: 'Charlotte Perospero',
            posición: 'Francotirador',
            apodo: '',
            estado: 'Muerto',
            imagen: '../Img/Perospero.png',
        },
        {
            id: '#028',
            nombre: 'Sabo',
            posición: 'Jefe de personal',
            apodo: 'Entei',
            estado: 'Vivo',
            imagen: '../Img/Sabo.png',
        },
        {
            id: '#029',
            nombre: 'Charlotte Snack',
            posición: 'Comandante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Snack.png',
        },
        {
            id: '#030',
            nombre: 'Little Oars Jr.',
            posición: 'Capitan',
            apodo: '',
            estado: 'Muerto',
            imagen: '../Img/Oars.png',
        },
        {
            id: '#031',
            nombre: 'Porgas D. Ace',
            posición: 'Comandante',
            apodo: 'Hiken',
            estado: 'Muerto',
            imagen: '../Img/Ace.png',
        },
        {
            id: '#032',
            nombre: 'Who`s Who',
            posición: 'Shinuchi',
            apodo: 'Shibuki',
            estado: 'Vivo',
            imagen: '../Img/Who.png',
        },
        {
            id: '#033',
            nombre: 'Chinjao',
            posición: 'Capitan',
            apodo: 'Kiri',
            estado: 'Vivo',
            imagen: '../Img/Chinjao.png',
        },
        {
            id: '#034',
            nombre: 'Izou',
            posición: 'Comandante',
            apodo: 'Tantsutsu Tsukai',
            estado: 'Muerto',
            imagen: '../Img/Izou.png',
        },
        {
            id: '#035',
            nombre: 'Usopp',
            posición: 'Francotirador',
            apodo: 'Sogeki no O-sama',
            estado: 'Vivo',
            imagen: '../Img/Usopp.png',
        },
        {
            id: '#036',
            nombre: 'Black Maria',
            posición: 'Shinuchi',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Maria.png',
        },
        {
            id: '#037',
            nombre: 'Edward Weevil',
            posición: 'Capitan',
            apodo: 'Shirohige Junia',
            estado: 'Vivo',
            imagen: '../Img/Weevil.png',
        },
        {
            id: '#038',
            nombre: 'Sasaki',
            posición: 'Shinuchi',
            apodo: 'Mokkiri',
            estado: 'Vivo',
            imagen: '../Img/Sasaki.png',
        },
        {
            id: '#039',
            nombre: 'Belo Betty',
            posición: 'Comandante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Betty.png',
        },
        {
            id: '#040',
            nombre: 'Tamago',
            posición: 'Pirata',
            apodo: 'Danshaku',
            estado: 'Muerto',
            imagen: '../Img/Tamago.png',
        },
        {
            id: '#041',
            nombre: 'Karasu',
            posición: 'Comandante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Karasu.png',
        },
        {
            id: '#042',
            nombre: 'Ulti',
            posición: 'Shinuchi',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Ulti.png',
        },
        {
            id: '#B14',
            nombre: 'Bryan Saenz',
            posición: 'Rey Del Mundo',
            apodo: 'Pechon',
            estado: 'Muerto',
            imagen: '../Img/Saenz.png',
        },
    ];
    var marines = [
        {
            id: '#001',
            nombre: 'Kong',
            posición: 'Comandante En Jefe',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Kong.png',
        },
        {
            id: '#002',
            nombre: 'Sengoku',
            posición: 'Inspector General',
            apodo: 'Hotoke ',
            estado: 'Vivo',
            imagen: '../Img/Sengoku.png',
        },
        {
            id: '#003',
            nombre: 'Monkey, D. Garp',
            posición: 'Vice-Almirante',
            apodo: 'Genkotsu',
            estado: 'Muerto',
            imagen: '../Img/Garp.png',
        },
        {
            id: '#004',
            nombre: 'Sakazuki',
            posición: 'Almirante De Flota',
            apodo: 'Akainu',
            estado: 'Vivo',
            imagen: '../Img/Sakazuki.png',
        },
        {
            id: '#005',
            nombre: 'Borsalino',
            posición: 'Vice-Almirante',
            apodo: 'Kizaru',
            estado: 'Vivo',
            imagen: '../Img/Borsalino.png',
        },
        {
            id: '#006',
            nombre: 'Issho',
            posición: 'Vice-Almirante',
            apodo: 'Fujitora',
            estado: 'Vivo',
            imagen: '../Img/Issho.png',
        },
        {
            id: '#007',
            nombre: 'Aramaki',
            posición: 'Vice-Almirante',
            apodo: 'Ryokugyu',
            estado: 'Vivo',
            imagen: '../Img/Aramaki.png',
        },
        {
            id: '#008',
            nombre: 'Tsuru',
            posición: 'Vice-Almirante',
            apodo: 'Dai-Sanbo',
            estado: 'Vivo',
            imagen: '../Img/Tsuru.png',
        },
        {
            id: '#009',
            nombre: 'John Giant',
            posición: 'Vice-Almirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/John.png',
        },
        {
            id: '#010',
            nombre: 'Momonga',
            posición: 'Vice-Almirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Momonga.png',
        },
        {
            id: '#011',
            nombre: 'Onigumo',
            posición: 'Vice-Almirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Onigumo.png',
        },
        {
            id: '#012',
            nombre: 'Yamakaji',
            posición: 'Vice-Almirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Yamakaji.png',
        },
        {
            id: '#013',
            nombre: 'Bastille',
            posición: 'Vice-Almirante',
            apodo: 'Same-Kiri',
            estado: 'Vivo',
            imagen: '../Img/Bastille.png',
        },
        {
            id: '#014',
            nombre: 'Smoker',
            posición: 'Vice-Almirante',
            apodo: 'Hakuryō',
            estado: 'Vivo',
            imagen: '../Img/Smoker.png',
        },
        {
            id: '#015',
            nombre: 'Vergo',
            posición: 'Vice-Almirante',
            apodo: 'Kichiku',
            estado: 'Muerto',
            imagen: '../Img/Vergo.png',
        },
        {
            id: '#016',
            nombre: 'Gion',
            posición: 'Vice-Almirante',
            apodo: 'Momousagi',
            estado: 'Vivo',
            imagen: '../Img/Gion.png',
        },
        {
            id: '#017',
            nombre: 'T-Bone',
            posición: 'Vice-Almirante',
            apodo: 'Fune-kiri',
            estado: 'Muerto',
            imagen: '../Img/T-Bone.png',
        },
        {
            id: '#018',
            nombre: 'Sentomaru',
            posición: 'Capitan De La Unidad Científica',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Sentomaru.png',
        },
        {
            id: '#019',
            nombre: 'X Drake',
            posición: 'Contraalmirante',
            apodo: 'Aka Hata',
            estado: 'Vivo',
            imagen: '../Img/Drake.png',
        },
        {
            id: '#020',
            nombre: 'Hina',
            posición: 'Contraalmirante',
            apodo: 'Kuro Ori no Hina',
            estado: 'Vivo',
            imagen: '../Img/Hina.png',
        },
        {
            id: '#021',
            nombre: 'Prince Grus',
            posición: 'Contraalmirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Grus.png',
        },
        {
            id: '#022',
            nombre: 'Kajaku',
            posición: 'Contraalmirante',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Kajaku.png',
        },
        {
            id: '#023',
            nombre: 'Brannew',
            posición: 'Comodoro',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Brannew.png',
        },
        {
            id: '#024',
            nombre: 'Daigin',
            posición: 'Comodoro',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Daigin.png',
        },
        {
            id: '#025',
            nombre: 'Nezumi',
            posición: 'Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Nezumi.png',
        },
        {
            id: '#026',
            nombre: 'Shu',
            posición: 'Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Shu.png',
        },
        {
            id: '#027',
            nombre: 'Tashigi',
            posición: 'Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Tashigi.png',
        },
        {
            id: '#028',
            nombre: 'Kobby',
            posición: 'Capitan',
            apodo: 'Eiyū',
            estado: 'Vivo',
            imagen: '../Img/Kobby.png',
        },
        {
            id: '#029',
            nombre: 'Donquixote Rosinante',
            posición: 'Capitan',
            apodo: 'Korason',
            estado: 'Muerto',
            imagen: '../Img/Rosinante.png',
        },
        {
            id: '#030',
            nombre: 'Helmeppo',
            posición: 'Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Helmeppo.png',
        },
        {
            id: '#031',
            nombre: 'Jango',
            posición: 'Capitan',
            apodo: '',
            estado: 'Vivo',
            imagen: '../Img/Jango.png',
        },
        {
            id: '#B14',
            nombre: 'Bryan Saenz',
            posición: 'Rey Del Mundo',
            apodo: 'Pechon',
            estado: 'Muerto',
            imagen: '../Img/Bryan.png',
        }
    ];
    function creadorMarine() {
        if (divMarines) {
            marines.forEach(function (marine) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var marinePosition = document.createElement('h5');
                marinePosition.textContent = marine.posición;
                var marineApodo = document.createElement('p');
                marineApodo.textContent = marine.apodo;
                var idMarine = document.createElement('p');
                idMarine.className = 'idMarine';
                idMarine.textContent = marine.id;
                var marinesImg = document.createElement('img');
                marinesImg.src = marine.imagen;
                cardBody.appendChild(marinesImg);
                cardBody.appendChild(marineApodo);
                cardBody.appendChild(marinePosition);
                card.appendChild(cardBody);
                divMarines.appendChild(card);
            });
        }
    }
    function creadorPirata() {
        if (divPiratas) {
            piratas.forEach(function (pirata) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var pirataPosition = document.createElement('h5');
                pirataPosition.textContent = pirata.posición;
                var pirataApodo = document.createElement('p');
                pirataApodo.textContent = pirata.apodo;
                var idPirata = document.createElement('p');
                idPirata.className = 'idPirata';
                idPirata.textContent = pirata.id;
                var pirataImg = document.createElement('img');
                pirataImg.src = pirata.imagen;
                cardBody.appendChild(pirataImg);
                cardBody.appendChild(pirataApodo);
                cardBody.appendChild(pirataPosition);
                card.appendChild(cardBody);
                divPiratas.appendChild(card);
            });
        }
    }
    $('#btnPiratas').on('click', function () {
        if (divPiratas) {
            divPiratas.innerHTML = '';
            creadorPirata();
        }
        if (divMarines) {
            divMarines.innerHTML = '';
        }
    });
    $('#btnMarines').on('click', function () {
        if (divMarines) {
            divMarines.innerHTML = '';
            creadorMarine();
        }
        if (divPiratas) {
            divPiratas.innerHTML = '';
        }
    });
    $('#btnSearch').on('click', function () {
        var resultado = $('#input-buscar').val() || '';
        var regex = new RegExp(escapeRegExp(resultado), 'i');
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        var encontrado = piratas.filter(function (pirata) { return regex.test(pirata.nombre); });
        var encontradoMarines = marines.filter(function (marine) {
            return regex.test(marine.nombre);
        });
        if (divPiratas) {
            divPiratas.innerHTML = '';
        }
        if (divMarines) {
            divMarines.innerHTML = '';
        }
        if (encontrado.length > 0 && divPiratas) {
            encontrado.forEach(function (pirata) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var pirataPosition = document.createElement('h5');
                pirataPosition.textContent = pirata.posición;
                var pirataApodo = document.createElement('p');
                pirataApodo.textContent = pirata.apodo;
                var idPirata = document.createElement('p');
                idPirata.className = 'idPirata';
                idPirata.textContent = pirata.id;
                var pirataImg = document.createElement('img');
                pirataImg.src = pirata.imagen;
                cardBody.appendChild(pirataImg);
                cardBody.appendChild(pirataApodo);
                cardBody.appendChild(pirataPosition);
                card.appendChild(cardBody);
                divPiratas.appendChild(card);
            });
        }
        if (encontradoMarines.length > 0 && divMarines) {
            encontradoMarines.forEach(function (marine) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var marinePosition = document.createElement('h5');
                marinePosition.textContent = marine.posición;
                var marineApodo = document.createElement('p');
                marineApodo.textContent = marine.apodo;
                var idMarine = document.createElement('p');
                idMarine.className = 'idMarine';
                idMarine.textContent = marine.id;
                var marinesImg = document.createElement('img');
                marinesImg.src = marine.imagen;
                cardBody.appendChild(marinesImg);
                cardBody.appendChild(marineApodo);
                cardBody.appendChild(marinePosition);
                card.appendChild(cardBody);
                divMarines.appendChild(card);
            });
        }
    });
});
