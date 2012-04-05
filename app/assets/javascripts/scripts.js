$(document).ready(function() {     
  // Scripts iniciais que modificam o DOM ou geram outras tarefas
  scriptsIniciais();

  // Limpa inputs de formulários. Muito usado na busca avançada.
  clearForms();


});


// Scripts iniciais que modificam o DOM ou geram outras tarefas
function scriptsIniciais(){

  // Classe necessárias para as Labels
  $('label').addClass('control-label');

  // Insere uma classe SELECTED para o primeiro Collpase
  $('.collapseGroup summary:first').addClass('active').parent('.details').addClass('active');

  // Faz a troca de Classe SELECTED entre os Collpases
  $('.collapseGroup summary').click(function(){
    $(this).toggleClass('active');
    $(this).parent('.details').toggleClass('active');
  });

  // Datepicker - JQuery UI
  $('.datepicker').datepicker({
    showOn: "button",
    dateFormat: "dd/mm/yy"
  });
 $('.ui-datepicker-trigger').addClass('icon-calendar').html('').wrap('<span class="add-on">');

  // Faz o texto do link que troca da busca SIMPLES para AVANÇADA
  var btnBuscaAvancadaText = $('a.lnkSeta[data-text]').html();
  var btnBuscaAvancadaTextAlt = $('a.lnkSeta[data-text]').attr('data-text');

  $('.boxFiltro a.lnkSeta[data-target]').click(function(){
    if ( $(this).html() == btnBuscaAvancadaText  ){
      $(this).html(btnBuscaAvancadaTextAlt);
    } else {
      $(this).html( btnBuscaAvancadaText );
    }
  });

 $('div[class*="span"]:first').css('margin-left','0')

  // Verifica se os inputs dentro da busca avançada estão vazios, se não estiverem, a busca avancada fica aberta
    var inputVazio = $('#optBuscaAvancada').find('input[value!=""]').length > 0 || $('#optBuscaAvancada select option:selected').not(':empty').length > 0
    if (inputVazio > 0) {
      $('.boxFiltro a.lnkSeta[data-target]').html(btnBuscaAvancadaTextAlt);
      $('#optBuscaAvancada').addClass('in')
    }


  // Setinha nas TABs
  $('.tabs li:first-child').addClass('active');

  // Faz a modal animar \o/
  $('.modal').hide().addClass('fade');

  // Insere quebra de linha depois das DDs em ListDetails
   $('.listDetail dd').after('<hr class="sep">');

}



// Limpa inputs da busca avançada quando clicamos no link de BUSCA AVANCDA
function clearForms(){
  $('.clearForm').click(function(){
    $(this).closest('form, div').find(':input').each(function(){
      switch(this.type) {
            case 'password':
            case 'select-multiple':
            case 'select-one':
            case 'text':
            case 'textarea':
                $(this).val('');
                break;
            case 'checkbox':
                this.selected = false;
                break;
            case 'radio':
                this.checked = false;
        }
    })
  });
}