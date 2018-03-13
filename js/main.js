/**  */
var apiMap = 'AIzaSyAryKBaK6uc9TcMHD4GFDPPyVaCHC_gMkg';

function initMap() {
   
    var latLng = {
        lat : -33.432748,
        lng : -70.6223707
    }; 

    var map = new google.maps.Map(document.getElementById('mapa'), {
      'center': latLng,
      zoom: 14
    });

    var informacion = new google.maps.InfoWindow({
        content: 'hola mundo'
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        tittle: 'Duoc educacion continua'
    });

    marker.addListener('click', function(){
        informacion.open(map,marker)
    });
}


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
        pase_dia.addEventListener('blur',mostrar);
        pase_dosdia.addEventListener('blur', mostrar);
        pase_completo.addEventListener('blur', mostrar);


        nombre.addEventListener('blur', validarCampo);
        apellido.addEventListener('blur', validarCampo);
        email.addEventListener('blur',validarCampo);
        function validarCampo()
        {
            if(this.value == '')
            {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'este campo es obligatoio';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
            else{
                errorDiv.style.display = 'none';
                this.style.border = ' 1px solid #cccccc';
            }
        }
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
                     listado_productos.style.display = "block";
                    for(var i = 0; i < listaProductos.length; i ++)
                    {
                        listado_productos.innerHTML  += listaProductos[i] + '<br/>';
                        
                    }

                    suma.innerHTML = "$ " + parseInt(total, 10) ||0;

            }
        }

        function mostrar()
        {
            var boletoDia = parseInt( pase_dia.value, 10) || 0,
                    boleto2Dia = parseInt(pase_dosdia.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0 ;

            var diasElegidos = [];
            
            if(boletoDia > 0){ diasElegidos.push('viernes');}
            if(boleto2Dia > 0) {diasElegidos.push('viernes', 'sabado');}
            if(boletoCompleto > 0) {diasElegidos.push('viernes','sabado','domingo');}

            for(var i = 0; i < diasElegidos.length; i++)
            {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
        }
    });// DOM CONTECT LOADED
})();