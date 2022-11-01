var imgYes = new Image;
var imgNo = new Image;
imgYes.src = 'yes.png';
imgNo.src = 'no.png';

var regname = '';
var score = 0;
var score0 = 0;
var currentQuectionNmbr = 0;
var attempt = 0;

if (location.search != '')
  attempt = parseInt(location.search.substring(1));

// ______________________ для оценки результатов:
var resultEstimation = new Array('Ваша оценка 10 баллов!', 'Ваша оценка 9 баллов!', 'Ваша оценка 8 баллов!', 'Ваша оценка 7 баллов!', 'Ваша оценка 6 баллов!', 'Ваша оценка 5 баллов!', 'Ваша оценка 4 балла!', 'Ваша оценка 3 балла!', 'Ваша оценка 2 балла!', 'Ваша оценка 1 балл!', 'Ни на один вопрос не дано правильного ответа');

var resultPercent = new Array(0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15, 0.01);
//_____________________________________________________________________


function init() {
  with (document.test)
  for (i = 0; i < elements.length; i++)
    elements[i].checked = false;
  nmbrOfQuestions = ans0.length;
  ans = new Array(nmbrOfQuestions);
  ansResult = new Array(nmbrOfQuestions);
  answeredQuestions = new Array(nmbrOfQuestions);
};
//_____________________________________________________________________

function checkQuestion(n) {
  ans[n] = '';

  with (document.test) {
    for (var i = 0; i < elements.length; i++) {
      if (parseInt(elements[i].value) == n)
        if ((elements[i].type == 'checkbox') || (elements[i].type == 'radio')) {
          if (elements[i].checked) { ans[n] = ans[n] + '1'; }
          else { ans[n] = ans[n] + '0'; }
        };

      if (parseInt(elements[i].value) > n)
        break;
    }
  };

  el = document.getElementById('q' + n);
  el.style.display = 'none';

  m = n + 1;
  el = document.getElementById('q' + m);
  el.style.display = 'block';

  if (m == nmbrOfQuestions) {
    check();
    showResult()
  };

};
//_____________________________________________________________________

function check() {
  var imgSrc = '';

  with (document.test) {
    for (i = 0; i < nmbrOfQuestions; i++) {
      if (ans0[i] == ans[i]) { ansResult[i] = 1 }
      else { ansResult[i] = 0 };
    };

    maxScore = 0;
    score = 0;
    correctAnswers = 0;
    nmbrOfAnsweredQuestions = 0;
    missedQuestions = '';
    nmbrMissedQuestions = 0;

    for (i = 0; i < nmbrOfQuestions; i++) {
      score = score + ansResult[i] * ball[i];
      maxScore = maxScore + ball[i];
      correctAnswers = correctAnswers + ansResult[i];

      if (parseInt(ans[i]) > 0) {
      answeredQuestions[i] = 1;
        nmbrOfAnsweredQuestions = nmbrOfAnsweredQuestions + 1;

        if (showCorrWrong) {
          if (ansResult[i] == 1) { imgSrc = 'yes' }
          else { imgSrc = 'no' };

          var j = i + 1;
          put = "../test/"
          eval('document.a' + j + '.src="' + put + imgSrc + '.png"');
        }
      }
      else {
      answeredQuestions[i] = 0;
        missedQuestions = missedQuestions + ' ' + (i + 1);
        nmbrMissedQuestions = nmbrMissedQuestions + 1;
      };
    };
  };

};
//_____________________________________________________________________


function showCorrectAnswers() {
  for (i = 0; i < nmbrOfQuestions; i++)
    document.getElementById('q' + i).style.display = 'block';

  with (document.test)
  for (var i = 0; i < elements.length; i++)
    if (elements[i].type == 'button')
      elements[i].style.display = 'none';

  document.getElementById('linkToCorrAnswers').style.display = 'none';
};
//_____________________________________________________________________


function showResult() {

  //---------------------------- endings 

  function ending1(nmbr)  // окончания для слов "вопрос" и "балл"
  {
    var ending;
    var a;

    if (nmbr == Math.floor(nmbr)) {
      if ((nmbr >= 10) && (nmbr <= 19)) {
        ending = 'ов'
      }
      else {
        a = nmbr % 10;
        if (a == 1) { ending = '' }
        else {
          if ((a == 2) || (a == 3) || (a == 4)) { ending = 'а' }
          else { ending = 'ов' }
        };
      };
    }
    else { ending = 'а' };

    return (ending);
  };

  function ending2(nmbr)  // окончания для слова "возможн..."
  {
    var ending;
    var a;
    ending = 'ых';
    a = nmbr % 10;

    if ((nmbr == Math.floor(nmbr)) && (a == 1) && (nmbr !== 11)) {
      ending = 'ого'
    };

    return (ending);
  };

  //---------------------------------------   

  attempt++;

  var s = '</p>Вы набрали ' + score + ' балл' + ending1(score) + ' из ' + maxScore + ' возможн' + ending2(maxScore) + '. ';

  if (nmbrOfAnsweredQuestions > 0) {
    rate = '';

    if (score == maxScore) { rate = resultEstimation[0] }
    else {
      for (i = 1; i < resultEstimation.length; i++) {
        if ((score < (maxScore * resultPercent[i - 1])) && (score >= (maxScore * resultPercent[i]))) {
          rate = resultEstimation[i];
          break
        }
      }
    };
    s = s + rate;

    if (nmbrOfAnsweredQuestions < nmbrOfQuestions) {
      s = s + ' Ответы даны не на все вопросы.'
    };
  }
  else
    s = s + 'Ни на один вопрос не получено ответа! Может быть, Вы забыли, что надо помечать те ответы, которые кажутся правильными?';


  var lessonFirstModulId = parseInt(testName)

  if (score < maxScore) {
    if (attempt < maxAttempts)
      s = s + '<p>Можете сразу же сделать <a href="' + testName + '.html">еще одну попытку</a>. ' +
        'Но лучше сначала внимательно изучите лекционный материал...»</span> и снова пройдите тест. Результат, несомненно, будет лучше.</p>';
    else
      s = s + '<p> </p>';
  };

  if ((attempt == maxAttempts) && showCorrWrong)
    s = s + '<p id="linkToCorrAnswers">Можете посмотреть <a href="#" onClick="showCorrectAnswers()">полный список вопросов</a> с пометками, правильный ли дан ответ.</p>';

  document.getElementById('result').innerHTML = s;

};
