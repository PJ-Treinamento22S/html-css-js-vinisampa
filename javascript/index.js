function fazerRequisicao(){

  var url = "https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);

  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  xhttp.onload = function() {
    let usersText = xhttp.response;
    var users = JSON.parse(usersText)
    adicionarPius(users);
  }
}

fazerRequisicao()

function adicionarPiu(contador){
  var $main = document.getElementById('pius')

  let div = document.createElement("div")
  div.style.display = "flex"
  div.style.width = "100%"
  div.style.paddingLeft = "3rem"
  div.style.paddingTop = "2rem"
  div.style.paddingBottom = "1rem"
  div.style.borderBottom = "solid 1px #805B10"
  div.className = "piuProprio"

  $main.insertBefore(div, $main.firstChild);
  
  let img = document.createElement("IMG")
  img.src = ("../imagens/neymar.jpeg")
  img.style.width = "4rem"
  img.style.height = "4rem"
  img.style.borderRadius = "50%"
  document.getElementsByClassName('piuProprio')[contador].appendChild(img);

  let piu = document.createElement("div")
  piu.style.display = "flex"
  piu.style.flexDirection = "column"
  piu.style.width = "60%"
  piu.className = "formatPiu"
  document.getElementsByClassName('piuProprio')[contador].appendChild(piu);

  let username = document.createElement("h1")
  username.textContent = '@Hugostojão'
  username.style.fontFamily = "Ubuntu, sans-serif"
  username.style.color = "#805B10"
  username.style.fontSize = "16px"
  username.style.paddingLeft = "1rem"
  username.style.paddingTop = "0.5rem"
  document.getElementsByClassName('formatPiu')[contador].appendChild(username);

  let text = document.createElement("p")
  text.textContent = $txtPiu.value
  text.style.fontFamily = "Ubuntu, sans-serif"
  text.style.color = "#926C15"
  text.style.fontSize = "16px"
  text.style.paddingLeft = "1rem"
  text.style.paddingTop = "0.5rem"
  document.getElementsByClassName('formatPiu')[contador].appendChild(text);

  let btns = document.createElement("div")
  btns.className = "formatBtns"
  btns.style.display = "flex"
  btns.style.justifyContent = "space-Between"
  btns.style.paddingLeft = "1rem"
  btns.style.paddingTop = "1rem"
  btns.style.width = "100%"
  document.getElementsByClassName('formatPiu')[contador].appendChild(btns);

  let img1 = document.createElement("IMG")
  img1.src = ("../imagens/comentarios.svg")
  img1.style.width = "1.5rem"
  img1.style.height = "1.5rem"
  document.getElementsByClassName('formatBtns')[contador].appendChild(img1);

  let div2 = document.createElement("div")
  div2.style.display = "flex"
  div2.className = "curtidas"
  document.getElementsByClassName('formatBtns')[contador].appendChild(div2);

  let img2 = document.createElement("IMG")
  img2.src = ("../imagens/coracao.svg")
  img2.style.width = "1.5rem"
  img2.style.height = "1.5rem"
  img2.className = ('coracoes')
  document.getElementsByClassName('curtidas')[contador].appendChild(img2);

  let num = 0
  let qntdd = document.createElement("p")
  qntdd.textContent = num
  qntdd.style.fontFamily = "Ubuntu"
  qntdd.style.fontSize = "18px"
  qntdd.style.color = "#EDC531"
  qntdd.style.paddingLeft = "0.3rem"
  qntdd.className = "curtidasProprio"
  document.getElementsByClassName('curtidas')[contador].appendChild(qntdd);

  img2.addEventListener('click', function(e){
    qntdd.textContent = num + 1
    e.preventDefault()
  })

  let img3 = document.createElement("IMG")
  img3.src = ("../imagens/rotate.svg")
  img3.style.width = "1.5rem"
  img3.style.height = "1.5rem"
  document.getElementsByClassName('formatBtns')[contador].appendChild(img3);

  let img4 = document.createElement("IMG")
  img4.src = ("../imagens/share.svg")
  img4.style.width = "1.5rem"
  img4.style.height = "1.5rem"
  document.getElementsByClassName('formatBtns')[contador].appendChild(img4);  
}

let $form = document.getElementById('formPiu');
let $txtPiu = document.getElementById('txtPiu');
let $btn2 = document.getElementById('btn2');

let $atual = document.getElementById('atual')
$atual.textContent = 0

$txtPiu.addEventListener('input', checkLength)

$form.addEventListener('submit', function(e){
  let y = 0
  if(!$txtPiu.value){
    alert('Preencha o campo');
    e.preventDefault();
  } else if($txtPiu.value.length > 140){
    alert('Máximo de 140 caracteres')
    e.preventDefault()
  } else {
    adicionarPiu(y)
    y++
    e.preventDefault()
    $txtPiu.value = ""
    $atual.textContent = 0
  }
})

function checkLength(e) {
  let caracteresDigitados = this.value.length
  $atual.textContent = caracteresDigitados
}

$txtPiu.addEventListener('input', function(){
  if($txtPiu.value.length > 140) {
    document.getElementById('txtPiu').style.color = 'red'
    document.getElementById('atual').style.color = 'red'
  } else {
    document.getElementById('txtPiu').style.color = '#805B10'
    document.getElementById('atual').style.color = '#805B10'
  }
})

function adicionarPius (jsonObj) {
  let x = 0
  for(let elemento of jsonObj){
    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.width = "100%"
    div.style.paddingLeft = "3rem"
    div.style.paddingTop = "2rem"
    div.style.paddingBottom = "1rem"
    div.style.borderBottom = "solid 1px #805B10"
    div.className = "wrapper"
    document.getElementById('pius').appendChild(div);

    let img = document.createElement("IMG")
    img.src = (elemento.user.photo)
    img.style.width = "4rem"
    img.style.height = "4rem"
    img.style.borderRadius = "50%"
    document.getElementsByClassName('wrapper')[x].appendChild(img);

    let piu = document.createElement("div")
    piu.style.display = "flex"
    piu.style.flexDirection = "column"
    piu.style.width = "60%"
    piu.className = "piuFormat"
    document.getElementsByClassName('wrapper')[x].appendChild(piu);

    let username = document.createElement("h1")
    username.textContent = '@' + elemento.user.username
    username.style.fontFamily = "Ubuntu, sans-serif"
    username.style.color = "#805B10"
    username.style.fontSize = "16px"
    username.style.paddingLeft = "1rem"
    username.style.paddingTop = "0.5rem"
    document.getElementsByClassName('piuFormat')[x].appendChild(username);

    let text = document.createElement("p")
    text.textContent = elemento.text
    text.style.fontFamily = "Ubuntu, sans-serif"
    text.style.color = "#926C15"
    text.style.fontSize = "16px"
    text.style.paddingLeft = "1rem"
    text.style.paddingTop = "0.5rem"
    document.getElementsByClassName('piuFormat')[x].appendChild(text);

    let btns = document.createElement("div")
    btns.className = "btnsFormat"
    btns.style.display = "flex"
    btns.style.justifyContent = "space-Between"
    btns.style.paddingLeft = "1rem"
    btns.style.paddingTop = "1rem"
    btns.style.width = "100%"
    document.getElementsByClassName('piuFormat')[x].appendChild(btns);

    let img1 = document.createElement("IMG")
    img1.src = ("../imagens/comentarios.svg")
    img1.style.width = "1.5rem"
    img1.style.height = "1.5rem"
    document.getElementsByClassName('btnsFormat')[x].appendChild(img1);

    let div2 = document.createElement("div")
    div2.style.display = "flex"
    div2.className = "likes"
    document.getElementsByClassName('btnsFormat')[x].appendChild(div2);

    let img2 = document.createElement("IMG")
    img2.src = ("../imagens/coracao.svg")
    img2.style.width = "1.5rem"
    img2.style.height = "1.5rem"
    img2.className = "herts"
    document.getElementsByClassName('likes')[x].appendChild(img2);

    let numero = 0
    let qntdd = document.createElement("p")
    qntdd.textContent = numero
    qntdd.style.fontFamily = "Ubuntu"
    qntdd.style.fontSize = "18px"
    qntdd.style.color = "#EDC531"
    qntdd.style.paddingLeft = "0.3rem"
    qntdd.className = "curtidasPius"
    document.getElementsByClassName('likes')[x].appendChild(qntdd);

    img2.addEventListener('click', function(e){
      qntdd.textContent = numero + 1
      e.preventDefault()
    })

    let img3 = document.createElement("IMG")
    img3.src = ("../imagens/rotate.svg")
    img3.style.width = "1.5rem"
    img3.style.height = "1.5rem"
    document.getElementsByClassName('btnsFormat')[x].appendChild(img3);

    let img4 = document.createElement("IMG")
    img4.src = ("../imagens/share.svg")
    img4.style.width = "1.5rem"
    img4.style.height = "1.5rem"
    document.getElementsByClassName('btnsFormat')[x].appendChild(img4);

    x++
  }
}
