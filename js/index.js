// #region botones

const goHomeBtn = document.getElementById("goHomeBtn");
if (goHomeBtn) {
  goHomeBtn.addEventListener("click", function () {
    const currentPath = window.location.pathname;
    if (currentPath.endsWith("index.html") || currentPath === "/" || currentPath === "/index.html") {
      window.location.reload();
    } else {
      window.location.href = "../index.html";
    }
  });
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


const goToPage1Btn = document.getElementById('goToPage1Btn');
if (goToPage1Btn) {
  goToPage1Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina1.html';
  });
}

const goToPage2Btn = document.getElementById('goToPage2Btn');
if (goToPage2Btn) {
  goToPage2Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina2.html';
  });
}

const goToPage3Btn = document.getElementById('goToPage3Btn');
if (goToPage3Btn) {
  goToPage3Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina3.html';
  });
}

const goToPage4Btn = document.getElementById('goToPage4Btn');
if (goToPage4Btn) {
  goToPage4Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina4.html';
  });
}

const goToPage5Btn = document.getElementById('goToPage5Btn');
if (goToPage5Btn) {
  goToPage5Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina5.html';
  });
}

const goToPage6Btn = document.getElementById('goToPage6Btn');
if (goToPage6Btn) {
  goToPage6Btn.addEventListener('click', function () {
    window.location.href = '../html/pagina6.html';
  });
}

// #endregion

// #region Jueguito

const questions = [
    {
      question: "¿Cuál fue el primer libro impreso por Gutenberg?",
      options: [
        "Un libro sobre su esposa",
        "Una biografía sobre el rey de Inglaterra",
        "Una biblia",
        "Una novela"
      ],
      correctIndex: 2
    },
    {
      question: "¿Quién inventó la pólvora? ¿Qué usos se le dio?",
      options: [
        "Los europeos y la usaron para crear armas",
        "Los europeos y la usaban para hacer fuegos artificiales",
        "Los chinos y la usaron para crear armas",
        "Los chinos y la usaban para hacer fuegos artificiales"
      ],
      correctIndex: 3
    },
    {
      question: "¿Que tiene que ver la religión con el renacimiento?",
      options: [
        "Los renacentistas no tienen nada que ver con la religión",
        "La religión fue de los temas principales de las obras de arte",
        "Ninguna de las anteriores"
      ],
      correctIndex: 1
    },
    {
      question: "¿Buscaba la educación renacentista la formación de hombres autónomos, virtuosos y dignos?",
      options: [
        "Si",
        "No",
        "Quizá?"
      ],
      correctIndex: 0
    },
    {
      question: "¿Donde está puesto el foco en la educación? ¿En el hombre o en Dios?",
      options: [
        "Hombre",
        "Dios",
        "Ninguno"
      ],
      correctIndex: 0
    },
    {
      question: "¿Cuál era la visión de Rabelais sobre el desarrollo natural de las pasiones humanas?",
      options: [
        "Deben ser reprimidas para alcanzar la virtud",
        "Deben canalizarse mediante la religión",
        "Deben ser liberadas para expandirse en plenitud y armonía",
        "Deben ignorarse porque son irracionales"
      ],
      correctIndex: 2
    },
    {
      question: "Según Rabelais, ¿cuál era la fórmula útil que debía seguir el maestro en la educación?",
     options: [
        "Enseñar solamente a través del método científico",
        "Volver a la antigüedad pero permanecer fiel a la naturaleza",
        "Priorizar la disciplina militar en la formación",
        "Transmitir únicamente conocimientos religiosos"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué objetivo principal perseguía Montaigne al estudiarse a sí mismo?",
     options: [
        "Conocer la naturaleza humana",
        "Encontrar su vocación profesional",
        "Desarrollar una filosofía política",
        "Rechazar toda forma de conocimiento clásico"
      ],
      correctIndex: 0
    },
    {
      question: "¿Qué buscaba Montaigne con su propuesta educativa?",
     options: [
        "Alumnos obedientes y religiosos",
        "Especialización técnica en áreas concretas",
        "Repetición de contenidos clásicos sin crítica",
        "Formar un espíritu ágil, crítico y racional"
      ],
      correctIndex: 3
    },
    {
      question: "¿Qué frase en latín se encontraba en la fachada de la Casa Giocosa?",
     options: [
        "Venid, oh niños, aquí se instruye y se atormenta",
        "Venid, oh niños, aquí se instruye, no se atormenta",
        "Venid, oh niños, aquí se instruye",
        "Venid, oh niños, aquí se atormenta"
      ],
      correctIndex: 1
    },
    {
      question: "¿Qué carácter tenía la educación impartida por Vittorino en la Casa Giocosa?",
     options: [
        "Religiosa y dogmática",
        "Enciclopédica y adaptada a cada alumno",
        "Exclusivamente física y competitiva",
        "Limitada a las clases altas y nobles"
      ],
      correctIndex: 1
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  
  let correctAnswers = 0;
  let answeredQuestions = 0;
  
  questions.forEach((q, i) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
  
    const qTitle = document.createElement('p');
    qTitle.textContent = q.question;
    qDiv.appendChild(qTitle);
  
    const optsDiv = document.createElement('div');
    optsDiv.className = 'options';
  
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
  
      btn.addEventListener('click', () => {
        const allButtons = optsDiv.querySelectorAll('button');
        allButtons.forEach(b => b.disabled = true);
  
        if (idx === q.correctIndex) {
          btn.classList.add('correct');
          correctAnswers++;
        } else {
          btn.classList.add('incorrect');
          allButtons[q.correctIndex].classList.add('correct');
        }
  
        answeredQuestions++;
        if (answeredQuestions === questions.length) {
          showScore();
        }
      });
  
      optsDiv.appendChild(btn);
    });
  
    qDiv.appendChild(optsDiv);
    quizContainer.appendChild(qDiv);
  });
  
  function showScore() {
    const scoreDiv = document.createElement('div');
    scoreDiv.style.marginTop = '30px';
    scoreDiv.style.padding = '15px';
    scoreDiv.style.backgroundColor = '#dff0d8';
    scoreDiv.style.border = '1px solid #c3e6cb';
    scoreDiv.style.borderRadius = '5px';
    scoreDiv.style.textAlign = 'center';
    scoreDiv.style.fontSize = '18px';
    scoreDiv.textContent = `¡Acertaste ${correctAnswers} de ${questions.length} preguntas!`;
    quizContainer.appendChild(scoreDiv);
  }
  
  // #endregion
  