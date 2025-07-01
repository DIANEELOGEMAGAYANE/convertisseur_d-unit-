
const conversionFactors = {
    // Longueur
    meter: {
        kilometer: 0.001,
        centimeter: 100,
        foot: 3.28084,
        mile: 0.000621371,
        inch: 39.3701
    },
    kilometer: {
        meter: 1000,
        centimeter: 100000,
        foot: 3280.84,
        mile: 0.621371,
        inch: 39370.1
    },
    centimeter: {
        meter: 0.01,
        kilometer: 0.00001,
        foot: 0.0328084,
        mile: 0.00000621371,
        inch: 0.393701
    },
    // Masse
    kilogram: {
        gram: 1000,
        pound: 2.20462,
        ounce: 35.274
    },
    gram: {
        kilogram: 0.001,
        pound: 0.00220462,
        ounce: 0.035274
    },
    // Volume
    liter: {
        milliliter: 1000,
        gallon: 0.264172,
        fluidOunce: 33.814
    },
    milliliter: {
        liter: 0.001,
        gallon: 0.000264172,
        fluidOunce: 0.033814
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation initiale de la page
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
    gsap.from('#convertButton', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });

    // Variables pour la conversion
    const inputValue = document.getElementById('inputValue');
    console.log(inputValue)
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertButton = document.getElementById('convertButton');
    const resultValue = document.getElementById('resultValue');


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
        gsap.to(convertButton, {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    convertButton.addEventListener('mouseout', () => {
        gsap.to(convertButton, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });

    convertButton.addEventListener('click', () => {
        // Animation du clic
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
        const firstValidOption = Arra
    });

    // Déclencher l'événement change au chargement pour initialiser les options
    fromUnit.dispatchEvent(new Event('change'));
});
