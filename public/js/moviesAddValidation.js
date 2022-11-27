window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let error = document.querySelector
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
const $ = e => document.getElementById(e) 
const moviesAdd = $("moviesAdd");
const elements = moviesAdd.elements;

const cleanError = (element, {target}) => {
    target.classList.remove('is-invalid');
    target.classList.remove('is-valid');
};

const validField = (element, {target}) => {
    $(element).innerHTML = null;
    target.classList.remove('is-invalid')
    target.classList.add('is-valid');
  };

const msgError = (element, msg, event) => {
    $(element).style.color = "red";
    $(element).innerHTML = msg;
    event.target.classList.add('is-invalid');
}

$('title').addEventListener('focus', function(e){
    cleanError('titleMsg', e)
})

$('title').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('titleMsg', 'Titulo requerido', e)
            break;
        default:
            validField('titleMsg', e)
            break;
    }
    checkFields()
})

$('rating').addEventListener('focus', function(e){
    cleanError('ratingMsg', e)
})

$('rating').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('ratingMsg', 'Calificacion requerido', e)
            break;
        case this.value < 0:
                msgError('ratingMsg', 'No puede ser menos de 0', e)
                break;
        case this.value > 10:
                    msgError('ratingMsg', 'No puede ser mas de 10', e)
                    break;
        default:
            validField('ratingMsg', e)
            break;
    }
    checkFields()
})

$('awards').addEventListener('focus', function(e){
    cleanError('awardsMsg', e)
})

$('awards').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('awardsMsg', 'awards requerido', e)
            break;
        case this.value < 0:
                msgError('awardsMsg', 'No puede ser menos de 0', e)
                break;
        case this.value > 10:
                    msgError('awardsMsg', 'No puede ser mas de 10', e)
                    break;
        default:
            validField('awardsMsg', e)
            break;
    }
    checkFields()
})
$('release_date').addEventListener('focus', function(e){
    cleanError('release_dateMsg', e)
})

$('release_date').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('release_dateMsg', 'Fecha de creacion requerida', e)
            break;
        default:
            validField('release_dateMsg', e)
            break;
    }
    checkFields()
})
$('length').addEventListener('focus', function(e){
    cleanError('lengthMsg', e)
})

$('length').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('lengthMsg', 'Duracion requerida', e)
            break;
        case this.value < 60:
            msgError('lengthMsg', 'No puede ser menos de 60 min', e)
            break;
        case this.value > 360:
                msgError('lengthMsg', 'No puede ser mas de 360 min', e)
                break;
        default:
            validField('lengthMsg', e)
            break;
    }
    checkFields()
})
$('genre_id').addEventListener('focus', function(e){
    cleanError('genre_idMsg', e)
})

$('genre_id').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('genre_idMsg', 'Genero requerido', e)
            break;
        default:
            validField('genre_idMsg', e)
            break;
    }
    checkFields()
})
$('moviesAdd').addEventListener('submit', (e)=>{
    e.preventDefault();
    let error = false;
    const elements = $('moviesAdd').elements;
    for (let i = 0; i < elements.length - 2; i++) {
          
      if(!elements[i].value || elements[i].classList.contains('is-invalid')){
          error = true;
          elements[i].classList.add('is-invalid')
          $('msgEditionError').innerText = "Algunos tienen errores y/o están vacíos."
      }
      
  }
  
  !error &&  $('moviesAdd').submit()
  })

}