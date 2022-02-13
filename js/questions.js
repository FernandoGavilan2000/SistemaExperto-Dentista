const Answers={
    always:"always",
    sometimes:"sometimes",
    rarely:"rarely",
    high:"high",
    moderate:"moderate",
    low:"low",
    si:"si",
    no:"no",
    clase1:"clase1",
    clase2:"clase2",
    clase3:"clase3"
}

let questions =[
    {
    numb: 1,
    code:"Visitas",
    question: "¿Cuantas veces visita usted a su odontologo al año?",
    image: "./images/preguntas/pregunta1.jpg",
    options: [
                {
                    mensaje:"Mas de 5 veces al año",
                    value:Answers.high
                },
                {
                    mensaje:"Entre 2-3 veces al año",
                    value:Answers.moderate
                },
                {
                    mensaje:"Entre 0-1 veces al año",
                    value:Answers.low
                }
             ]
    },
    {
        numb: 2,
        code:"Azucarados",
        question: "¿Que tan seguido consume alimentos azucarados?",
        image: "./images/preguntas/pregunta2.jpg",
        options: [
            {
                mensaje:"Muy Seguido",
                value:Answers.always
            },
            {
                mensaje:"A veces",
                value:Answers.sometimes
            },
            {
                mensaje:"Casi Nunca",
                value:Answers.rarely
            }
        ]
    },
    {
        numb: 3,
        code:"Punto",
        question: "¿Presenta usted uno de estos puntos o manchas en alguno de sus dientes?",
        image: "https://www.avodent.com/wp-content/uploads/2017/12/tipos-de-caries-1200x900.jpg",
        options: [
            {
                mensaje:"Si,tengo un Punto/Mancha negro grande",
                value:Answers.high
            },
            {
                mensaje:"Si,tengo un Punto/Mancha negro pequeño",
                value:Answers.moderate
            },
            {
                mensaje:"No, no tengo ninguno",
                value:Answers.low
            }
        ]
    },
    {
        numb: 4,
        code:"Dolor",
        question: "¿Presenta usted algun tipo de dolor en alguno de sus dientes?",
        image: "./images/preguntas/pregunta4.jpg",
        options: [
            {
                mensaje:"Si,Tengo un dolor muy fuerte",
                value:Answers.high
            },
            {
                mensaje:"Si,Tengo un dolor leve",
                value:Answers.moderate
            },
            {
                mensaje:"No, no presento ningun dolor",
                value:Answers.low
            }
        ]
    },
    {
        numb: 5,
        code:"Cepilla",
        question: "¿Que tan seguido se cepilla los dientes?",
        image: "./images/preguntas/pregunta5.jpg",
        options: [
            {
                mensaje:"3 veces al dia",
                value:Answers.high
            },
            {
                mensaje:"2 vez al dia",
                value:Answers.moderate
            },
            {
                mensaje:"1 vez al dia",
                value:Answers.low
            }
        ]
    },
    {
        numb: 6,
        code:"HiloDental",
        question: "¿Usa el hilo dental en su limpieza bucal?",
        image: "./images/preguntas/pregunta6.jpg",
        options: [
            {
                mensaje:"Si, si lo uso",
                value:Answers.si
            },
            {
                mensaje:"No, no lo uso",
                value:Answers.no
            },
        ]
    },
    {
        numb: 7,
        code:"Encias",
        question: "¿De que color se encuentran sus encias?",
        image: "./images/preguntas/pregunta7.jpg",
        options: [
            {
                mensaje:"Color Rosado",
                value:Answers.low
            },
            {
                mensaje:"Color Rojo",
                value:Answers.moderate
            },
            {
                mensaje:"Color Rojizo",
                value:Answers.high
            },
        ]
    },
    {
        numb: 8,
        code:"CepillaSangre",
        question: "¿Ha sangrado usted cuando se cepilla los dientes?",
        image: "./images/preguntas/pregunta8.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 9,
        code:"MalAliento",
        question: "¿Ha presentado mal aliento durante los ultimos dias?",
        image: "./images/preguntas/pregunta9.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 10,
        code:"Mordida",
        question: "Marque la alternativa que corresponda a su tipo de mordida",
        image: "./images/preguntas/pregunta10.jpg",
        options: [
            {
                mensaje:"Alternativa I",
                value:Answers.clase1
            },
            {
                mensaje:"Alternativa II",
                value:Answers.clase2
            },
            {
                mensaje:"Alternativa III",
                value:Answers.clase3
            },
        ]
    },
    {
        numb: 11,
        code:"Apinados",
        question: "¿Presenta usted dientes apiñados?",
        image: "./images/preguntas/pregunta11.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 12,
        code:"DolorMasticar",
        question: "¿Presenta usted dolor al momento de masticar sus alimentos?",
        image: "./images/preguntas/pregunta12.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 13,
        code:"DolorMusculosFaciales",
        question: "¿Presenta usted dolor en sus Musculos Faciales?",
        image: "./images/preguntas/pregunta13.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 14,
        code:"Sarro",
        question: "¿Ha encontrado presencia de sarro en sus dientes?",
        image: "./images/preguntas/pregunta14.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },
    {
        numb: 15,
        code:"MovilidadDental",
        question: "¿Presenta usted Movilidad Dental?",
        image: "./images/preguntas/pregunta15.jpg",
        options: [
            {
                mensaje:"Si",
                value:Answers.si
            },
            {
                mensaje:"No",
                value:Answers.no
            },
        ]
    },

]