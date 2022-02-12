//Elementos del Cuestionario
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
//Lista de Opciones
const option_list = document.querySelector(".option_list");
//Linea de Avance Cuestionario
const time_line = document.querySelector("header .time_line");
//Botones de los Resultados
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
//Iconos
const checkIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
//Contador de Preguntas HTML
const bottom_ques_counter = document.querySelector("footer .total_que");

//----------------------------------
//Contador_Preguntas
let q_counter=0;
let q_number=1;
//Creacion del Objeto que almacenara las respuestas del usuario.
let userAnswer={
    Visitas:'',
    Azucarados:'',
    Punto:'',
    Dolor:'',
    Cepilla:'',
    HiloDental:'',
    Encias:'',
    CepillaSangre:'',
    MalAliento:''
}
//Creacion del Objeto que almacenara los resultados del diagnostico.
let userDiagnostic=[];
//----------------------------------


// Si le da click al empezar salir test
start_btn.onclick = ()=>{
        info_box.classList.add("activeInfo"); //show info box
}

// Si le da click al boton salir test
exit_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo"); //hide info box
}

// Si le da click al boton continuar(ready) test
continue_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.add("activeQuiz"); //show quiz box
        showQuestion(0);
        queCounter(1);
}

// Boton Salir despues de ver los resultados
quit_quiz.onclick = ()=>{
        window.location.reload(); //reload window
}

//Boton Restart despues de ver los resultados
restart_quiz.onclick = ()=>{
        quiz_box.classList.add("activeQuiz"); //show quiz box
        result_box.classList.remove("activeResult"); //hide result box
        userDiagnostic=[];
        userAnswer={};
        q_counter = 0;
        q_number = 1;
        showQuestion(0); 
        queCounter(1); 
        next_btn.classList.remove("show"); //hide the next button
}

const next_btn = document.querySelector("footer .next_btn");

// Si next_btn(next question) es presionado:
next_btn.onclick = () => {
    if(q_counter<questions.length-1){
            q_counter++;
            q_number++;
            showQuestion(q_counter);
            queCounter(q_number);
            next_btn.classList.remove("show");
    }else{
        console.warn("Se terminaron las preguntas");
        showResult();
        }
    }

const showResult = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    analize();
    console.table(userDiagnostic);
    const scoreText = result_box.querySelector(".score_text");

    const cards=userDiagnostic.reduce((collection,resultado,index)=>{
        const advices=resultado.diagnostico.advices.reduce((previous,advice)=> previous=previous+ `<p class="text-gray-600">-${advice}</p>`,'');
        
        const card=`<div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url(${resultado.diagnostico.image})" title="">
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
           <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                Diagnostico ${index+1}
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">${resultado.diagnostico.name}</div>
                <p class="text-gray-700 text-base text-justify">${resultado.diagnostico.description}</p>
           </div>
           <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="https://img.freepik.com/vector-gratis/icono-diente-sonriente-feliz-lindo_76775-245.jpg?size=338&ext=jpg" alt="Avatar">
                    <div class="text-base">
                    <p class="text-gray-900 leading-none">Recomendaciones:</p>
                    ${advices}
                    </div>
                </div>
            </div>
        </div>`;
        collection=collection+card;
        return collection;
    },'')
    scoreText.innerHTML = cards;
}

//Si el usuario selecciona una opcion
function optionSelected(answer){
    //Agregando una nueva propiedad al Objeto answerUser
    userAnswer[questions[q_counter].code]=answer.getAttribute('data-value');

    console.log(userAnswer);

    //Pintando la opcion seleccionada
    answer.classList.add("correct");
    //Agregando el icono check de la opcion elegida
    answer.insertAdjacentHTML("beforeend", checkIconTag);
    //Una vez que el user seleccione una opcion , el resto se bloquea
    const allOptions = option_list.children.length;
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}


//Obteniendo las preguntas y opciones del arreglo "questions" de questions.js
function showQuestion(index){
    //Marcador avance barra
    time_line.style.width = 4 + "0%"; 
    const question_text = document.querySelector(".que_text");
    const question_image=document.querySelector(".image_question");

    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    //Concatenando todas las opciones de cada pregunta en un string
    let option_tag = questions[index].options.reduce((lista_opciones,opcion) => {
        lista_opciones=lista_opciones+`<div class="option" data-value="${opcion.value}"><span>`+ opcion.mensaje +'</span></div>';
        return lista_opciones;
    },'');

    question_text.innerHTML=question_tag;
    option_list.innerHTML=option_tag;
    question_image.setAttribute("src",questions[index].image);

    //Seleccionamos todas las opciones y les asignamos una funcion que debe
    //ser disparada cuando se seleccione una de ellas
    const option = option_list.querySelectorAll(".option");
    for(let i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    };
};

function queCounter(index){
    //Creando una nueva etiqueta HTML para mostrar en que pregunta nos encontramos
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

//------------------ Diagnostico Sistema Experto -----------------------------------------------

const addDiagnostic= (data) =>{
    if(userDiagnostic.length===0){
        userDiagnostic=[...userDiagnostic,data];
    }else{
        userDiagnostic.forEach(element => {
            if (!(element.categoria==data.categoria))
                userDiagnostic=[...userDiagnostic,data];
        });
    }
}


const analize = () => {
//------------------------------------------ CARIES ------------------------------------------------------------------//
//Regla 1 --  Caries__Estadio_Avanzado
if(userAnswer.Punto==Answers.high && userAnswer.Dolor.high==Answers.high)
    addDiagnostic({'categoria':'caries','diagnostico':enfermedades.cariesAvanzado});
//Regla 2 -- Caries__Estadio_Inicial
if(userAnswer.Punto==Answers.moderate)
    addDiagnostic({'categoria':'caries','diagnostico':enfermedades.cariesInicial});
//Regla 3 --  Caries__EnDesarrollo x Malos Habitos1
if(userAnswer.Visitas==Answers.low && userAnswer.Azucarados==Answers.always && userAnswer.Cepilla==Answers.moderate && userAnswer.HiloDental==Answers.no)
    addDiagnostic({'categoria':'caries','diagnostico':enfermedades.cariesAdvertencia});
//Regla 4 --  Caries__EnDesarrollo x Malos Habitos2
if(userAnswer.Visitas==Answers.low && userAnswer.Azucarados==Answers.always && userAnswer.Cepilla==Answers.low && userAnswer.HiloDental==Answers.no)
    addDiagnostic({'categoria':'caries','diagnostico':enfermedades.cariesAdvertencia});

//--------------------------------------- GINGIVITIS --------------------------------------------------------------//
//Regla 5 --  Gingivitis_Sintomas1
if(userAnswer.Encias==Answers.high && userAnswer.CepillaSangre==Answers.si && userAnswer.MalAliento==Answers.si)
    addDiagnostic({'categoria':'gingivitis','diagnostico':enfermedades.gingivitis});
//Regla 6 --  Gingivitis_Sintomas2
if(userAnswer.Encias==Answers.high && userAnswer.CepillaSangre==Answers.si && userAnswer.MalAliento==Answers.no)
    addDiagnostic({'categoria':'gingivitis','diagnostico':enfermedades.gingivitis});

//-------------------------------------- MALOCLUSION -------------------------------------------------------------//
//Regla 7 --  Maloclusion_Sintomas






//Regla Final(No se encontro ninguna enfermedad)
if(userDiagnostic.length==0)
    console.info("El programa no encontro una solucion");
}


