let allPokemonData = [];

const color = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

const getMainBackgroundImages = {
    bug: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/bug.jpg',
    dark: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/dark.jpg',
    dragon: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/dragon.jpg',
    electric: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/electric.jpg',
    fairy: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/fairy.jpg',
    fighting: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/fighting.jpg',
    fire: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/fire.jpg',
    flying: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/flying.jpg',
    ghost: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/ghost.jpg',
    grass: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/grass.jpg',
    ground: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/ground.jpg',
    ice: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/ice.jpg',
    normal: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/normal.jpg',
    poison: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/poison.jpg',
    psychic: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/psychic.jpg',
    rock: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/rock.jpg',
    steel: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/steel.jpg',
    water: 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/water.jpg'
}

const getAllPokemonsData = async function () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0')
    const data = await response.json();
    allPokemonData = await Promise.all(data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const dat = await res.json();
        return dat;
    }))
}

const createAndAppendAllElements = () => {
    allPokemonData.forEach(pokemon => {
        const mainBoxDiv = document.createElement('div');
        const mainAsideImg = document.createElement('img');
        const mainChatBoxDiv = document.createElement('div');
        const mainAsideNameDiv = document.createElement('div');
        const mainAsideName = document.createElement('div');
        const mainLi = document.createElement('li');
        const asideTypesDivs = document.createElement('div');
        const mainAsideTypesDiv = document.createElement('div');
        const secondaryAsideTypesDiv = document.createElement('div');
        let mainShowDivBox = document.querySelector('.mainShowDivBox');

        mainBoxDiv.classList = 'mainBoxDiv';
        mainAsideImg.id = 'mainAsideImg';
        mainChatBoxDiv.id = 'mainChatBoxDiv';
        mainAsideNameDiv.id = 'mainAsideNameDiv';
        mainAsideName.id = 'mainAsideName';
        asideTypesDivs.id = 'asideTypesDivs';
        mainAsideTypesDiv.id = 'mainAsideTypesDiv';
        secondaryAsideTypesDiv.id = 'secondaryAsideTypesDiv';
        mainBoxDiv.tabIndex = '0';

        mainBoxDiv.onclick = function getAndSetAllPokemonData() {
            //Getting and setting main screen display.
            mainShowDivBox.style.visibility = "visible";
            document.querySelector('.mainShowDivBoxTypes').style.display = 'flex';
            document.querySelector('.firstMessage').style.display = 'none';
            document.querySelector('#statsDiv').style.backgroundColor = '#fff';
            document.querySelector('#statsDiv').style.visibility = 'visible';
            //Getting and setting the name.
            document.querySelector('.showDivBoxName').textContent = pokemon.name;
            //Getting and setting the type0.
            document.querySelector('.showDivBoxType0').textContent = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
            //Getting and setting the type1.
            if (pokemon?.types[1]?.type?.name === undefined) {
                document.querySelector('.showDivBoxType1').style.display = "none";
            } else {
                document.querySelector('.showDivBoxType1').style.display = "block";
                document.querySelector('.showDivBoxType1').textContent = pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1);
            }
            //Getting and setting the BGO.
            document.querySelector('.showDivBoxType0').style.backgroundColor = ChangeBG0();
            //Getting and setting the BG1.
            if (pokemon.types[1] !== undefined) {
                document.querySelector('.showDivBoxType1').style.backgroundColor = ChangeBG1();
            }
            //Getting and setting the image.
            if (pokemon.sprites.front_default !== null) {
                document.querySelector('.showDivBoxImg').src = pokemon.sprites.other['official-artwork'].front_default;
            } else {
                document.querySelector('.showDivBoxImg').src = 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/WhenNull.jpg';
                document.querySelector('.showDivBoxImg').style.left = '25px';
                document.querySelector('.showDivBoxImg').style.width = '200px';
                document.querySelector('.showDivBoxImg').style.height = '200px';
                document.querySelector('.showDivBoxImg').style['border-radius'] = '100px';
                document.querySelector('.showDivBoxImg').style.position = 'relative';
            }

            if (pokemon.types[1] !== undefined) {
                mainShowDivBox.style.background = `url("${ChangeMainBG()}"), url("${ChangeSecondaryBG()}")`;
                mainShowDivBox.style.backgroundPosition = 'left, right';
                mainShowDivBox.style.backgroundPositionX = 'center, center';
                mainShowDivBox.style.backgroundSize = 'contain, contain';
                mainShowDivBox.style.backgroundRepeat = 'no-repeat, repeat';

                mainShowDivBox.style.opacity = '10';
                //Getting and setting the fairy BG.
                if (mainShowDivBox.style.background === 'url("file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/fairy.jpg") 0% 0% / contain round') {
                    mainShowDivBox.style.backgroundRepeat = "repeat-x"
                }
            } else {
                //Getting and setting the main BG.
                mainShowDivBox.style.background = `url("${ChangeMainBG()}")`;
                mainShowDivBox.style.backgroundSize = 'contain';
                mainShowDivBox.style.backgroundRepeat = 'round';
                //Getting and setting the fairy BG.
                if (mainShowDivBox.style.background === 'url("file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pokemonsBG/fairy.jpg") 0% 0% / contain round') {
                    mainShowDivBox.style.backgroundRepeat = "repeat-x"
                }
            }

            //Getting and setting the abilities.
            document.querySelector('#tab1').textContent = '';
            pokemon.abilities.forEach(pokemonAbilities => {
                let savedDataDiv = document.createElement('div');
                let savedData = document.createElement('p');
                let spaceDown = document.createElement('br');
                savedData = pokemonAbilities.ability.name;
                savedDataDiv.classList.add('pokeIcon');
                savedDataDiv.append(savedData);
                savedDataDiv.append(spaceDown);
                document.querySelector('#tab1').appendChild(savedDataDiv);
            });
            //Getting and setting the stats.
            document.querySelector('#tab2').textContent = '';
            pokemon.stats.forEach(pokemonStats => {
                let savedDataDiv = document.createElement('div');
                let spaceDown = document.createElement('ul');
                let savedData = document.createElement('li');
                let savedNameData = pokemonStats.stat.name;
                let savedStatData = pokemonStats.base_stat;
                savedData = savedNameData + ' = ' + savedStatData;
                savedDataDiv.classList.add('pokeIcon');
                savedDataDiv.append(spaceDown);
                spaceDown.append(savedData);
                document.querySelector('#tab2').appendChild(savedDataDiv);
            });
            //Getting and setting the moves.
            document.querySelector('#tab3').textContent = '';
            pokemon.moves.forEach(pokemonMove => {
                let savedDataDiv = document.createElement('div');
                let spaceDown = document.createElement('ul');
                let savedData = document.createElement('li');
                savedDataDiv.classList.add('pokeIcon');
                savedData = pokemonMove.move.name;
                savedDataDiv.append(spaceDown);
                spaceDown.append(savedData);
                document.querySelector('#tab3').appendChild(savedDataDiv);
            });
            //Getting and setting the height, experience and weight.
            function pokemonStats() {
                document.querySelector('#tab4').textContent = '';
                document.querySelector('#tab5').textContent = '';
                document.querySelector('#tab6').textContent = '';
                let savedHeightDataDiv = document.createElement('div');
                let savedExperienceDataDiv = document.createElement('div');
                let savedWeightDataDiv = document.createElement('div');
                let savedHeightDataUl = document.createElement('ul');
                let savedExperienceDataUl = document.createElement('ul');
                let savedWeightDataUl = document.createElement('ul');
                let savedHeightDataLi = document.createElement('li');
                let savedExperienceDataLi = document.createElement('li');
                let savedWeightDataLi = document.createElement('li');

                savedHeightDataDiv.classList.add('pokeIcon');
                savedExperienceDataDiv.classList.add('pokeIcon');
                savedWeightDataDiv.classList.add('pokeIcon');

                savedHeightDataLi = pokemon.height;
                savedWeightDataLi = pokemon.weight;
                savedExperienceDataLi = pokemon.base_experience;

                savedHeightDataUl.append(savedHeightDataLi);
                savedExperienceDataUl.append(savedExperienceDataLi);
                savedWeightDataUl.append(savedWeightDataLi);

                savedHeightDataDiv.append(savedHeightDataUl);
                savedExperienceDataDiv.append(savedExperienceDataUl);
                savedWeightDataDiv.append(savedWeightDataUl);

                document.querySelector('#tab4').appendChild(savedHeightDataDiv);
                document.querySelector('#tab5').appendChild(savedExperienceDataDiv);
                document.querySelector('#tab6').appendChild(savedWeightDataDiv);
            }
            pokemonStats();
        }

        const ChangeMainBG = function () {
            let newColor = pokemon.types[0].type.name;
            let colorReturned = getMainBackgroundImages[newColor];
            return colorReturned;
        }

        const ChangeSecondaryBG = function () {
            let newColor = pokemon.types[1].type.name;
            let colorReturnedSecondary = getMainBackgroundImages[newColor];
            return colorReturnedSecondary;
        }

        const ChangeBG0 = function () {
            let newColor = pokemon.types[0].type.name;
            let colorReturned = color[newColor];
            return colorReturned;
        }

        const ChangeBG1 = function () {
            let newColor = pokemon.types[1].type.name;
            let colorReturned = color[newColor];
            return colorReturned;
        }

        mainAsideTypesDiv.style.backgroundColor = ChangeBG0();
        if (pokemon.types[1] !== undefined) {
            secondaryAsideTypesDiv.style.backgroundColor = ChangeBG1();
        }

        mainLi.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        mainAsideTypesDiv.textContent = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
        mainAsideName.appendChild(mainLi);
        mainAsideNameDiv.appendChild(mainAsideName);
        mainChatBoxDiv.appendChild(mainAsideNameDiv);
        mainChatBoxDiv.appendChild(asideTypesDivs);
        asideTypesDivs.appendChild(mainAsideTypesDiv);
        if (pokemon?.types[1]?.type?.name === undefined) {
        } else {
            secondaryAsideTypesDiv.textContent = pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1);
            asideTypesDivs.appendChild(secondaryAsideTypesDiv);
        }
        if (pokemon.sprites.front_default !== null) {
            mainAsideImg.src = pokemon.sprites.other['official-artwork'].front_default;
        } else {
            mainAsideImg.src = 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/WhenNull.jpg';
        }
        mainBoxDiv.appendChild(mainAsideImg);
        mainBoxDiv.appendChild(mainChatBoxDiv);
        document.getElementById('replaceableDiv').appendChild(mainBoxDiv);
    });
}

const loadingBeforeApperance = () => {
    let asideImgBeforeApperance = document.createElement('img');
    let mainImgBeforeApperance = document.createElement('img');
    asideImgBeforeApperance.src = 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/pikachu-pokemon.gif';
    mainImgBeforeApperance.src = 'file:///C:/Users/randy/OneDrive/Escritorio/ProyectosCursoEmmanuel/EmmaHomeworks/POKEAPI/Imgs/eeveelutions-pokemon.gif';
    asideImgBeforeApperance.id = 'asideImgBeforeApperanceId';
    mainImgBeforeApperance.id = 'mainImgBeforeApperanceId';
    document.querySelector('#replaceableDiv').appendChild(asideImgBeforeApperance);
    document.querySelector('.mainShowDivBox').appendChild(mainImgBeforeApperance);
    document.querySelector('.firstMessage').style.display = 'none';
}

const loadingAfterApperance = () => {
    document.querySelector('#replaceableDiv').removeChild(document.querySelector('#asideImgBeforeApperanceId'));
    document.querySelector('.mainShowDivBox').removeChild(document.querySelector('#mainImgBeforeApperanceId'));
    document.querySelector('#mainInputSearch').placeholder = 'Search';
    document.querySelector('.firstMessage').style.display = 'flex';
}

const filterListByName = () => {
    filterListByTypes();
    let searchInput = document.querySelector('#mainInputSearch');
    let listName = document.querySelectorAll('#mainAsideName');
    let filter = searchInput.value.toLowerCase();
    listName.forEach(pokemonName => {
        let name = pokemonName.textContent;
        if (pokemonName.parentNode.parentNode.parentNode.style.display == 'flex') {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
                pokemonName.parentNode.parentNode.parentNode.style.display = 'flex';
            } else {
                pokemonName.parentNode.parentNode.parentNode.style.display = 'none';
            }
        } else {
            pokemonName.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
}

const filterListByTypes = () => {
    let listNameByType = document.querySelectorAll('#asideTypesDivs');
    let filterByType = document.querySelector('#selectTypes').value.toLowerCase();
    listNameByType.forEach(pokemonType => {
        let name = pokemonType.textContent;
        if (name.toLowerCase().includes(filterByType.toLowerCase())) {
            pokemonType.parentNode.parentNode.style.display = 'flex';
        } else {
            pokemonType.parentNode.parentNode.style.display = 'none';
        }
    });
}

window.onload = async () => {
    loadingBeforeApperance();
    await getAllPokemonsData();
    createAndAppendAllElements();
    loadingAfterApperance();
    document.querySelector('#mainInputSearch').addEventListener('input', filterListByName);
    document.querySelector('#selectTypes').addEventListener('change', filterListByTypes);
    document.querySelector('#selectTypes').addEventListener('change', filterListByName);
}