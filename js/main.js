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
        var listado_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

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
                var boletoDia = parseInt( pase_dia.value, 10) || 0,
                    boleto2Dia = parseInt(pase_dosdia.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0 ,
                    cant_camisas = parseInt(camisas.value, 10) ||  0 ,
                    cant_etiquetas = parseInt(etiquetas.value, 10) || 0 ; 

                    var total = (boletoDia * 30) + (boleto2Dia * 30) + (boleto2Dia * 50) + ((cant_camisas * 10) * .93) + (cant_etiquetas * 2);
                    
                    var listaProductos = [];

                    if(boletoDia >= 1 )     { listaProductos.push(boletoDia + ' Pases por dia');        }
                    if(boleto2Dia >= 1)     { listaProductos.push(boleto2Dia + ' Pases por 2 dias');    }
                    if(boletoCompleto >= 1) { listaProductos.push(boletoCompleto + ' Pases completos'); }
                    
                    if(cant_camisas >= 1)   { listaProductos.push(cant_camisas + ' Camisas');           }
                    if(cant_etiquetas >= 1) { listaProductos.push(cant_etiquetas + ' Etiquetas');       }

                
                     listado_productos.innerHTML = '';
                     suma.innerHTML = '';

                    for(var i = 0; i < listaProductos.length; i ++)
                    {
                        listado_productos.innerHTML  += listaProductos[i] + '<br/>';
                        
                    }

                    suma.innerHTML = "$ " + parseInt(total, 10) ||0;

            }
        }
    });// DOM CONTECT LOADED
})();