console.log("Accordion Cargado");

const dataAccordion = [
    {
        "title": "¿Cómo distinguir a las escuderías y pilotos?",
        "desc": "En la Fórmula 1, cada escudería tiene colores y logotipos distintivos, y cada piloto lleva un casco único. Además, los autos tienen números de carrera que ayudan a identificarlos. A menudo, las transmisiones y las coberturas de medios también utilizan gráficos para ayudar a los espectadores a identificar a cada piloto y escudería durante las carreras."
    },
    {
        "title": "¿Cuándo se consiguen puntos en la Fórmula 1?",
        "desc": "Los puntos se asignan a los pilotos en función de su posición final en cada carrera. Los diez primeros pilotos reciben puntos, con el ganador obteniendo 25 puntos, el segundo lugar 18 puntos, el tercero 15 puntos, y así sucesivamente hasta el décimo lugar. Además, se otorgan puntos adicionales por la vuelta más rápida en la carrera si el piloto termina entre los diez primeros."
    },
    {
        "title": "¿Cómo funciona el sistema de clasificación (Q1, Q2, Q3)?",
        "desc": "En la clasificación, los pilotos pasan por tres sesiones eliminatorias: Q1, Q2 y Q3. En Q1, los pilotos luchan por estar entre los 15 mejores para pasar a Q2. En Q2, los 15 pilotos restantes compiten para estar entre los 10 mejores y pasar a Q3. Finalmente, en Q3, los 10 pilotos restantes luchan por la pole position y las posiciones de salida para la carrera."
    },
    {
        "title": "¿Qué significa la marca morada en F1 delante del nombre de alguien?",
        "desc": "La marca morada indica que el piloto ha registrado el tiempo más rápido en el sector. En la Fórmula 1, el circuito se divide en sectores y, cuando un piloto establece un nuevo récord en un sector específico, se marca con un color para resaltar el logro."
    },
    {
        "title": "¿Qué son el ERS y el DRS?",
        "desc": "El ERS (Energy Recovery System) es un sistema que recupera energía durante las frenadas y la almacena para ser utilizada en aceleración. El DRS (Drag Reduction System) es un sistema que reduce la resistencia aerodinámica en ciertas zonas del circuito, permitiendo a los pilotos aumentar su velocidad en rectas para facilitar los adelantamientos."
    }
];

(function () {
    let ACCORDION = {
        init: function () {
            let _self = this;
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map(function (item) {
                document.querySelector('.main-accordion-container').insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
                console.log('Inserted accordion item:', item.title); // Verifica la inserción
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                    console.log('Accordion title clicked:', event.target);
                    _self.showTab(event.target);
                });
            }
        },

        tplAccordionItem: function (item) {
            return (
                `<div class='accordion-item'>
                    <div class='accordion-title'><p>${item.title}</p></div>
                    <div class='accordion-desc'><p>${item.desc}</p></div>
                </div>`
            );
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active');
            if (activeTab) {
                activeTab.classList.remove('tab-active');
            }
            console.log('Show tab:', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },
    }
    ACCORDION.init();
})();
