/**  */
(function(){
    'use strict';
    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){
      

        //Campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');


        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdia = document.getElementById('pase_dos_dias');
        var pase_completo = document.getElementById('pase_completo');

        //botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var resultado = document.getElementById('lista-productos');
        

        //extras

        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos);

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '')
            {
                alert('debe seleccionar un regalo');
                regalo.focus();
            }
            else
            {
                var boletoDia = pase_dia.value,
                    boleto2Dia = pase_dosdia.value,
                    boletoCompleto = pase_completo.value,
                    cant_camisas = camisas.value,
                    cant_etiquetas = etiquetas; 

                    var total = (boletoDia * 30) + (boleto2Dia * 30) + (boleto2Dia * 50) + ((cant_camisas * 10) * .93) + (cant_etiquetas * 2);
                    console.log('total a pagar:' + total );
            }
        }
    });// DOM CONTECT LOADED
})();