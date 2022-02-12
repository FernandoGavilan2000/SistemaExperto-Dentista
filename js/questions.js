const Answers={
    always:"always",
    sometimes:"sometimes",
    rarely:"rarely",
    high:"high",
    moderate:"moderate",
    low:"low",
    si:"si",
    no:"no",
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
        question: "¿Presenta usted algun tipo de dolor en su diente?",
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

]