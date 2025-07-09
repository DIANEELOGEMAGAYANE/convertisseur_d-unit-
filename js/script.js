// Facteurs de conversion
const conversionFactors = {
    // LONGUEUR
    meter: { kilometer: 0.001, centimeter: 100, inch: 39.3701, foot: 3.28084, yard: 1.09361, mile: 0.000621371 },
    kilometer: { meter: 1000, centimeter: 100000, inch: 39370.1, foot: 3280.84, yard: 1093.61, mile: 0.621371 },
    centimeter: { meter: 0.01, kilometer: 0.00001, inch: 0.393701, foot: 0.0328084, yard: 0.0109361, mile: 0.00000621371 },
    inch: { meter: 0.0254, kilometer: 0.0000254, centimeter: 2.54, foot: 0.0833333, yard: 0.0277778, mile: 0.0000157828 },
    foot: { meter: 0.3048, kilometer: 0.0003048, centimeter: 30.48, inch: 12, yard: 0.333333, mile: 0.000189394 },
    yard: { meter: 0.9144, kilometer: 0.0009144, centimeter: 91.44, inch: 36, foot: 3, mile: 0.000568182 },
    mile: { meter: 1609.34, kilometer: 1.60934, centimeter: 160934, inch: 63360, foot: 5280, yard: 1760 },
  
    // MASSE
    
    kilogram: { gram: 1000, pound: 2.20462, ounce: 35.274 },
    gram: { kilogram: 0.001, pound: 0.00220462, ounce: 0.035274 },
    pound: { kilogram: 0.453592, gram: 453.592, ounce: 16 },
    ounce: { kilogram: 0.0283495, gram: 28.3495, po

    // TEMPS
    
    second: { minute: 1 / 60, hour: 1 / 3600, day: 1 / 86400 },
    minute: { second: 60, hour: 1 / 60, day: 1 / 1440 },
    hour: { second: 3600, minute: 60, day: 1 / 24 },
    day: { second: 86400, minute: 1440, hour: 24 },
  
  
    // INTENSITÉ ÉLECTRIQUE
    
    ampere: { milliampere: 1000, microampere: 1000000 },
    milliampere: { ampere: 0.001, microampere: 1000 },
    microampere: { ampere: 0.000001, milliampere: 0.001 },
  
   
    // TEMPÉRATURE
  
    // Conversion spéciale → à gérer avec des fonctions car ce n'est pas linéaire
  
   
    // QUANTITÉ DE MATIÈRE
   
    mole: { millimole: 1000, micromole: 1000000 },
    millimole: { mole: 0.001, micromole: 1000 },
    micromole: { mole: 0.000001, millimole: 0.001 },
  
  
    // INTENSITÉ LUMINEUSE
  
    candela: { millicandela: 1000, microcandela: 1000000 },
    millicandela: { candela: 0.001, microcandela: 1000 },
    microcandela: { candela: 0.000001, millicandela: 0.001 },
  
 
    // VOLUME
  
    liter: { milliliter: 1000, gallon: 0.264172, quart: 1.05669, pint: 2.11338, fluidOunce: 33.814 },
    milliliter: { liter: 0.001, gallon: 0.000264172, quart: 0.00105669, pint: 0.00211338, fluidOunce: 0.033814 },
    gallon: { liter: 3.78541, milliliter: 3785.41, quart: 4, pint: 8, fluidOunce: 128 },
    quart: { liter: 0.946353, milliliter: 946.353, gallon: 0.25, pint: 2, fluidOunce: 32 },
    pint: { liter: 0.473176, milliliter: 473.176, gallon: 0.125, quart: 0.5, fluidOunce: 16 },
    fluidOunce: { liter: 0.0295735, milliliter: 29.5735, gallon: 0.0078125, quart: 0.03125, pint: 0.0625 },
  
   
    // VITESSE
   
    meterPerSecond: { kilometerPerHour: 3.6, milePerHour: 2.23694 },
    kilometerPerHour: { meterPerSecond: 0.277778, milePerHour: 0.621371 },
    milePerHour: { meterPerSecond: 0.44704, kilometerPerHour: 1.60934 },
  
   
    // FORCE
    
    newton: { kilogramForce: 0.101972, poundForce: 0.224809 },
    kilogramForce: { newton: 9.80665, poundForce: 2.20462 },
    poundForce: { newton: 4.44822, kilogramForce: 0.453592 },
  
  
    // PRESSION
 
    pascal: { bar: 1e-5, atmosphere: 9.86923e-6 },
    bar: { pascal: 100000, atmosphere: 0.986923 },
    atmosphere: { pascal: 101325, bar: 1.01325 },
  
    
    // ÉNERGIE
   
    joule: { kilojoule: 0.001, calorie: 0.239006, kilocalorie: 0.000239006 },
    kilojoule: { joule: 1000, calorie: 239.006, kilocalorie: 0.239006 },
    calorie: { joule: 4.184, kilojoule: 0.004184, kilocalorie: 0.001 },
    kilocalorie: { joule: 4184, kilojoule: 4.184, calorie: 1000 }
  };
  

document.addEventListener('DOMContentLoaded', function() {
// Initialisation de GSAP
// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger);

// Animation initiale de la page
// eslint-disable-next-line no-undef
const tl = gsap.timeline();

tl.from('.container', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
})
.from('h1', {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'back.out(1.7)'
}, '-=0.5')
.from('.app-description', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
}, '-=0.5')
.from('.input-group', {
    duration: 0.6,
    opacity: 0,
    x: -30,
    ease: 'power2.out'
}, '-=0.3')
.from('.unit-select', {
    duration: 0.6,
    opacity: 0,
    x: -30,
    stagger: 0.2,
    ease: 'power2.out'
}, '-=0.3')
.from('#convertButton', {
    duration: 0.6,
    opacity: 0,
    scale: 0.5,
    ease: 'back.out(1.7)'
}, '-=0.2');

// Animation du bouton
// eslint-disable-next-line no-undef
gsap.from('#convertButton', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: 'power2.out'
});

// Variables pour la conversion
const inputValue = document.getElementById('inputValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultValue = document.getElementById('resultValue');

const selectSysteme = document.getElementById("systeme")

const grandeurSelectDiv = document.querySelector('.grandeur-select');
const selectGrandeur = document.getElementById('grandeur');

// Masquer le sélecteur de grandeur au départ
grandeurSelectDiv.style.display = 'none';

// Afficher le sélecteur de grandeur après le choix du système
selectSysteme.addEventListener('change', function() {
    if (selectSysteme.value) {
        grandeurSelectDiv.style.display = 'block';
    } else {
        grandeurSelectDiv.style.display = 'none';
    }
    // Réinitialiser le choix de grandeur
    selectGrandeur.selectedIndex = 0;
    // Masquer toutes les unités tant que la grandeur n'est pas choisie
    filtrerUnites();
});

// Filtrer les unités après le choix de la grandeur
selectGrandeur.addEventListener('change', function() {
    filtrerUnites();
});

function filtrerUnites() {
    const systeme = selectSysteme.value;
    const grandeur = selectGrandeur.value;
    [fromUnit, toUnit].forEach(select => {
        Array.from(select.children).forEach(optgroup => {
            if (optgroup.tagName !== 'OPTGROUP') return;
            optgroup.style.display = 'none';
            if (systeme === 'combine') {
                if (grandeur === 'base' && optgroup.classList.contains('base')) {
                    optgroup.style.display = '';
                } else if (grandeur === 'derivee' && optgroup.classList.contains('derivee')) {
                    optgroup.style.display = '';
                }
            } else if (systeme === 'francais') {
                if (optgroup.classList.contains('francais')) {
                    if (grandeur === 'base' && optgroup.classList.contains('base')) {
                        optgroup.style.display = '';
                    } else if (grandeur === 'derivee' && optgroup.classList.contains('derivee')) {
                        optgroup.style.display = '';
                    }
                }
            } else if (systeme === 'anglais') {
                if (!optgroup.classList.contains('francais')) {
                    if (grandeur === 'base' && optgroup.classList.contains('base')) {
                        optgroup.style.display = '';
                    } else if (grandeur === 'derivee' && optgroup.classList.contains('derivee')) {
                        optgroup.style.display = '';
                    }
                }
            }
        });
        // Sélectionner la première option visible
        setTimeout(() => {
            const visibleOptions = Array.from(select.options).filter(option => {
                const og = option.parentElement;
                return og.tagName === 'OPTGROUP' && og.style.display !== 'none';
            });
            if (visibleOptions.length > 0) {
                select.value = visibleOptions[0].value;
            }
        }, 0);
    });
}

// Définir ici les labels des grandeurs de base du SI
// eslint-disable-next-line no-unused-vars
function isBaseSI(label) {
    const baseLabels = [
        'Longueur (SI)',
        'Masse (SI)',
        'Temps (SI)',
        'Intensité électrique (SI)',
        'Température thermodynamique (SI)',
        'Quantité de matière (SI)',
        'Intensité lumineuse (SI)'
    ];
    return baseLabels.includes(label);
}

// Initialiser le filtrage au chargement
filtrerUnites();

function convert(value, fromUnit, toUnit) {
    // Si c'est la même unité, retourner la valeur
    if (fromUnit === toUnit) {
        return value;
    }

    // Cas spécial pour la température
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (value * 9/5) + 32;
    }
    if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (value - 32) * 5/9;
    }

    // Pour les autres conversions
    if (conversionFactors[fromUnit] && conversionFactors[fromUnit][toUnit]) {
        return value * conversionFactors[fromUnit][toUnit];
    } else if (conversionFactors[toUnit] && conversionFactors[toUnit][fromUnit]) {
        return value / conversionFactors[toUnit][fromUnit];
    }

    return "Conversion impossible";
}

// eslint-disable-next-line no-unused-vars
function formatResult(value, unit) {
    if (typeof value === 'number') {
        const formatted = Math.abs(value) < 0.01 ? value.toExponential(2) : value.toFixed(2);
        const unitSymbol = unit.replace(/([A-Z])/g, ' $1').toLowerCase();
        return `${formatted} ${unitSymbol}`;
    }
    return value;
}

// Gestionnaire d'événement pour le bouton de conversion
// Animation du bouton au clic
convertButton.addEventListener('mouseover', () => {
    // eslint-disable-next-line no-undef
    gsap.to(convertButton, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
    });
});

convertButton.addEventListener('mouseout', () => {
    // eslint-disable-next-line no-undef
    gsap.to(convertButton, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
    });
});

convertButton.addEventListener('click', () => {
    // Animation du clic
    // eslint-disable-next-line no-undef
    gsap.timeline()
        .to(convertButton, {
            duration: 0.1,
            scale: 0.95,
            ease: 'power2.in'
        })
        .to(convertButton, {
            duration: 0.2,
            scale: 1,
            ease: 'power2.out'
        });

    const value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        // eslint-disable-next-line no-undef
        gsap.to(inputValue, {
            duration: 0.1,
            x: [-5, 5, -5, 5, 0],
            ease: 'none'
        });
        resultValue.textContent = "Veuillez entrer un nombre valide";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;
    const result = convert(value, from, to);
    
    if (result === "Conversion impossible") {
        resultValue.textContent = "Conversion impossible entre ces unités";
        return;
    }

    // Obtenir les textes des options sélectionnées pour un affichage plus naturel
    const fromText = fromUnit.options[fromUnit.selectedIndex].text;
    const toText = toUnit.options[toUnit.selectedIndex].text;

    // Formater le nombre avec 2 décimales ou en notation scientifique si nécessaire
    let formattedValue = value;
    let formattedResult = result;
    
    if (Math.abs(value) < 0.01 || Math.abs(value) > 100000) {
        formattedValue = value.toExponential(2);
    } else {
        formattedValue = value.toFixed(2);
    }
    
    if (Math.abs(result) < 0.01 || Math.abs(result) > 100000) {
        formattedResult = result.toExponential(2);
    } else {
        formattedResult = result.toFixed(2);
    }
    
    resultValue.textContent = `${formattedValue} ${fromText} = ${formattedResult} ${toText}`;
});

// Mise à jour automatique des unités disponibles
fromUnit.addEventListener('change', () => {
    const category = fromUnit.selectedOptions[0].parentElement.label;
    
    Array.from(toUnit.options).forEach(option => {
        const optionCategory = option.parentElement.label;
        option.disabled = optionCategory !== category;
    });

    // Sélectionner la première option valide
    const firstValidOption = Array.from(toUnit.options).find(option => 
        option.parentElement.label === category
    );
    if (firstValidOption) {
        toUnit.value = firstValidOption.value;
    }
});

// Déclencher l'événement change au chargement pour initialiser les options
fromUnit.dispatchEvent(new Event('change'));
});